'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Zap, Send, Filter, Search, Loader2, X, Phone, CheckCircle2, AlertTriangle } from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import { useAuth } from '@/contexts/auth-context';
import api from '@/lib/api';

interface ExactLead {
  id: number;
  exact_id: number;
  name: string;
  phone1: string | null;
  sub_source: string | null;
  stage: string | null;
  sdr_name: string | null;
}

interface Stats {
  total: number;
  by_stage: Record<string, number>;
  by_sub_source: Record<string, number>;
}

interface CourseAlias {
  id: number;
  alias: string;
  full_name: string;
  short_name: string;
}

interface Channel {
  id: number;
  name: string;
  phone_number: string;
}

interface Template {
  name: string;
  language: string;
  status: string;
  body: string;
  parameters: string[];
}

interface ParamMapping {
  type: 'lead_name' | 'lead_full_name' | 'sdr_name' | 'fixed_text';
  value: string;
}

interface SendResult {
  sent: number;
  failed: number;
  errors: { name: string | null; error: string }[];
}

const PARAM_OPTIONS: { value: ParamMapping['type']; label: string }[] = [
  { value: 'lead_name', label: 'Nome do Lead (1º nome)' },
  { value: 'lead_full_name', label: 'Nome completo do Lead' },
  { value: 'sdr_name', label: 'Nome do SDR' },
  { value: 'fixed_text', label: 'Texto fixo' },
];

const stageColors: Record<string, string> = {
  'Entrada': 'bg-blue-50 text-blue-700',
  'Pré Qualificado': 'bg-purple-50 text-purple-700',
  'Follow 2': 'bg-amber-50 text-amber-700',
  'Follow 3': 'bg-amber-50 text-amber-700',
  'Follow 4': 'bg-amber-50 text-amber-700',
  'Follows 5': 'bg-orange-50 text-orange-700',
  'Follows 6': 'bg-orange-50 text-orange-700',
  'Agendados': 'bg-cyan-50 text-cyan-700',
  'Em Negociação': 'bg-indigo-50 text-indigo-700',
  'Contratos Gerados': 'bg-emerald-50 text-emerald-700',
  'Vendidos': 'bg-green-50 text-green-700',
  'Descartado': 'bg-red-50 text-red-700',
  'Sem contato': 'bg-gray-100 text-gray-600',
  'SEM CONTATO': 'bg-gray-100 text-gray-600',
};

export default function AutomacoesPage() {
  const [leads, setLeads] = useState<ExactLead[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [courseAliases, setCourseAliases] = useState<CourseAlias[]>([]);
  const [loading, setLoading] = useState(true);

  const [channels, setChannels] = useState<Channel[]>([]);
  const [channelId, setChannelId] = useState<number | null>(null);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loadingTemplates, setLoadingTemplates] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [mappings, setMappings] = useState<ParamMapping[]>([]);

  const [search, setSearch] = useState('');
  const [stageFilter, setStageFilter] = useState('');
  const [subSourceFilter, setSubSourceFilter] = useState('');
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const [showConfirm, setShowConfirm] = useState(false);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<SendResult | null>(null);

  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) router.push('/login');
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) {
      loadData();
      loadCourseAliases();
      loadChannels();
    }
  }, [user]);

  const loadData = async () => {
    try {
      const [leadsRes, statsRes] = await Promise.all([
        api.get('/exact-leads'),
        api.get('/exact-leads/stats'),
      ]);
      setLeads(leadsRes.data);
      setStats(statsRes.data);
    } catch (err) {
      console.error('Erro ao carregar leads:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadCourseAliases = async () => {
    try {
      const res = await api.get('/course-aliases');
      setCourseAliases(res.data);
    } catch (err) {
      console.error('Erro ao carregar aliases:', err);
    }
  };

  const loadChannels = async () => {
    try {
      const res = await api.get('/channels');
      setChannels(res.data);
      if (res.data.length > 0) setChannelId(res.data[0].id);
    } catch (err) {
      console.error('Erro ao carregar canais:', err);
    }
  };

  const loadTemplates = async () => {
    if (!channelId) return;
    setLoadingTemplates(true);
    setTemplates([]);
    setSelectedTemplate(null);
    setMappings([]);
    try {
      const res = await api.get(`/channels/${channelId}/templates`);
      setTemplates(res.data);
    } catch (err) {
      console.error('Erro ao carregar templates:', err);
    } finally {
      setLoadingTemplates(false);
    }
  };

  const selectTemplate = (t: Template) => {
    setSelectedTemplate(t);
    setMappings(t.parameters.map(() => ({ type: 'lead_name', value: '' })));
    setResult(null);
  };

  const updateMapping = (idx: number, patch: Partial<ParamMapping>) => {
    setMappings((prev) => prev.map((m, i) => (i === idx ? { ...m, ...patch } : m)));
  };

  const resolveCourse = (alias: string | null): string => {
    if (!alias) return '-';
    const found = courseAliases.find((c) => c.alias.toLowerCase() === alias.toLowerCase());
    return found ? found.short_name : alias;
  };

  const formatPhone = (phone: string | null) => {
    if (!phone) return '-';
    return phone.replace(/^55/, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const readableTemplate = (name: string) => name.replace(/_/g, ' ');

  const filteredLeads = leads.filter((lead) => {
    const matchSearch =
      !search ||
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      (lead.phone1 && lead.phone1.includes(search));
    const matchStage = !stageFilter || lead.stage === stageFilter;
    const matchSubSource = !subSourceFilter || lead.sub_source === subSourceFilter;
    return matchSearch && matchStage && matchSubSource;
  });

  const allFilteredSelected =
    filteredLeads.length > 0 && filteredLeads.every((l) => selectedIds.has(l.id));

  const toggleAllFiltered = () => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allFilteredSelected) {
        filteredLeads.forEach((l) => next.delete(l.id));
      } else {
        filteredLeads.forEach((l) => next.add(l.id));
      }
      return next;
    });
  };

  const toggleOne = (id: number) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const canSend = !!selectedTemplate && selectedIds.size > 0 && !!channelId;

  const handleSend = async () => {
    if (!selectedTemplate || !channelId) return;
    setSending(true);
    setResult(null);
    try {
      const res = await api.post('/exact-leads/bulk-send-template', {
        template_name: selectedTemplate.name,
        language: selectedTemplate.language,
        channel_id: channelId,
        lead_ids: Array.from(selectedIds),
        param_mappings: mappings,
      });
      setResult(res.data);
      setShowConfirm(false);
    } catch (err: any) {
      console.error('Erro ao enviar:', err);
      setResult({ sent: 0, failed: selectedIds.size, errors: [{ name: null, error: err?.response?.data?.detail || 'Falha na requisição' }] });
      setShowConfirm(false);
    } finally {
      setSending(false);
    }
  };

  if (authLoading || loading) {
    return (
      <AppLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-[#1D4ED8] animate-spin" />
        </div>
      </AppLayout>
    );
  }

  if (!user) return null;

  const stages = stats ? Object.keys(stats.by_stage).sort() : [];
  const subSources = stats ? Object.keys(stats.by_sub_source).sort() : [];
  const selectedChannel = channels.find((c) => c.id === channelId) || null;
  const hasActiveFilters = search || stageFilter || subSourceFilter;

  return (
    <AppLayout>
      <div className="space-y-6 max-w-7xl mx-auto overflow-y-auto h-full pb-6">

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1D4ED8]/10 flex items-center justify-center">
            <Zap className="w-[18px] h-[18px] text-[#1D4ED8]" />
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-0.5">Disparo manual</p>
            <h1 className="text-2xl font-semibold text-[#0f172a] tracking-tight">Automações</h1>
          </div>
        </div>

        {/* Painel de template */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 space-y-4">
          <h2 className="text-[13px] font-semibold text-[#0f172a]">1. Template</h2>
          <div className="flex flex-wrap items-end gap-3">
            {channels.length > 1 && (
              <div>
                <label className="block text-[11px] text-gray-400 mb-1">Canal</label>
                <select
                  value={channelId ?? ''}
                  onChange={(e) => setChannelId(Number(e.target.value))}
                  className="px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/10 focus:border-[#1D4ED8] transition-all cursor-pointer"
                >
                  {channels.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
            )}
            <button
              onClick={loadTemplates}
              disabled={loadingTemplates || !channelId}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#1D4ED8] text-white rounded-xl text-[13px] font-medium hover:bg-[#1641b8] active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {loadingTemplates ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
              {loadingTemplates ? 'Carregando...' : 'Carregar templates'}
            </button>
          </div>

          {templates.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {templates.map((t) => (
                <button
                  key={t.name}
                  onClick={() => selectTemplate(t)}
                  className={`px-3 py-2 rounded-xl text-[12.5px] font-medium border transition-all ${
                    selectedTemplate?.name === t.name
                      ? 'bg-[#1D4ED8] text-white border-[#1D4ED8]'
                      : 'bg-gray-50 text-gray-700 border-gray-100 hover:border-[#1D4ED8]/40'
                  }`}
                >
                  {readableTemplate(t.name)}
                </button>
              ))}
            </div>
          )}

          {selectedTemplate && (
            <div className="space-y-4 pt-2">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-[11px] text-gray-400 mb-1.5 uppercase tracking-wider font-semibold">Mensagem</p>
                <p className="text-[13px] text-gray-700 whitespace-pre-wrap leading-relaxed">{selectedTemplate.body}</p>
              </div>

              {selectedTemplate.parameters.length > 0 && (
                <div className="space-y-3">
                  <h2 className="text-[13px] font-semibold text-[#0f172a]">2. Variáveis</h2>
                  {selectedTemplate.parameters.map((param, idx) => (
                    <div key={idx} className="flex flex-wrap items-center gap-2">
                      <span className="text-[12px] text-gray-500 w-[90px]">{param} {`{{${idx + 1}}}`}</span>
                      <select
                        value={mappings[idx]?.type ?? 'lead_name'}
                        onChange={(e) => updateMapping(idx, { type: e.target.value as ParamMapping['type'] })}
                        className="px-3 py-2 rounded-xl border border-gray-100 bg-gray-50 text-[13px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/10 focus:border-[#1D4ED8] cursor-pointer"
                      >
                        {PARAM_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                      {mappings[idx]?.type === 'fixed_text' && (
                        <input
                          type="text"
                          placeholder="Texto fixo..."
                          value={mappings[idx]?.value ?? ''}
                          onChange={(e) => updateMapping(idx, { value: e.target.value })}
                          className="flex-1 min-w-[160px] px-3 py-2 rounded-xl border border-gray-100 bg-gray-50 text-[13px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/10 focus:border-[#1D4ED8]"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nome ou telefone..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/10 focus:border-[#1D4ED8] focus:bg-white transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={stageFilter}
                onChange={(e) => setStageFilter(e.target.value)}
                className="px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/10 focus:border-[#1D4ED8] transition-all appearance-none cursor-pointer"
              >
                <option value="">Todos os estágios</option>
                {stages.map((s) => (
                  <option key={s} value={s}>{s} ({stats?.by_stage[s]})</option>
                ))}
              </select>
              <select
                value={subSourceFilter}
                onChange={(e) => setSubSourceFilter(e.target.value)}
                className="px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/10 focus:border-[#1D4ED8] transition-all appearance-none cursor-pointer"
              >
                <option value="">Todos os programas</option>
                {subSources.map((s) => (
                  <option key={s} value={s}>{resolveCourse(s)} ({stats?.by_sub_source[s]})</option>
                ))}
              </select>
              {hasActiveFilters && (
                <button
                  onClick={() => { setSearch(''); setStageFilter(''); setSubSourceFilter(''); }}
                  className="px-3 py-2.5 text-[12px] font-medium text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                >
                  Limpar filtros
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Tabela de leads */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="px-5 py-3 w-10">
                    <input
                      type="checkbox"
                      checked={allFilteredSelected}
                      onChange={toggleAllFiltered}
                      className="w-4 h-4 rounded border-gray-300 text-[#1D4ED8] focus:ring-[#1D4ED8]/30 cursor-pointer"
                    />
                  </th>
                  <th className="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-5 py-3">Nome</th>
                  <th className="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-5 py-3">Telefone</th>
                  <th className="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-5 py-3">Programa</th>
                  <th className="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-5 py-3">Estágio</th>
                  <th className="text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-5 py-3">SDR</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    onClick={() => toggleOne(lead.id)}
                    className={`border-b border-gray-50 last:border-0 transition-colors cursor-pointer ${selectedIds.has(lead.id) ? 'bg-[#1D4ED8]/[0.04]' : 'hover:bg-gray-50/50'}`}
                  >
                    <td className="px-5 py-3.5" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selectedIds.has(lead.id)}
                        onChange={() => toggleOne(lead.id)}
                        className="w-4 h-4 rounded border-gray-300 text-[#1D4ED8] focus:ring-[#1D4ED8]/30 cursor-pointer"
                      />
                    </td>
                    <td className="px-5 py-3.5">
                      <p className="text-[13px] font-medium text-[#0f172a]">{lead.name}</p>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <span className="text-[13px] text-gray-500 tabular-nums">{formatPhone(lead.phone1)}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-[13px] text-gray-500">{resolveCourse(lead.sub_source)}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex px-2 py-0.5 rounded-md text-[11px] font-medium ${stageColors[lead.stage || ''] || 'bg-gray-100 text-gray-600'}`}>
                        {lead.stage || '-'}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-[13px] text-gray-500">{lead.sdr_name || '-'}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredLeads.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <p className="text-sm">Nenhum lead encontrado</p>
            </div>
          )}
          <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[12px] text-gray-400">
              {filteredLeads.length} leads • <span className="text-[#1D4ED8] font-medium">{selectedIds.size} selecionados</span>
            </span>
          </div>
        </div>

        {/* Resultado */}
        {result && (
          <div className="bg-white rounded-2xl p-5 border border-gray-100 space-y-3">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-[13px] font-medium text-green-600">
                <CheckCircle2 className="w-4 h-4" /> {result.sent} enviados
              </span>
              <span className="flex items-center gap-1.5 text-[13px] font-medium text-red-500">
                <AlertTriangle className="w-4 h-4" /> {result.failed} falhas
              </span>
            </div>
            {result.errors.length > 0 && (
              <div className="bg-red-50/60 rounded-xl p-3 border border-red-100 max-h-48 overflow-y-auto">
                {result.errors.map((e, i) => (
                  <p key={i} className="text-[12px] text-red-600">
                    <span className="font-medium">{e.name || '—'}:</span> {e.error}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Botão flutuante de envio */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setShowConfirm(true)}
          disabled={!canSend}
          className="flex items-center gap-2 px-5 py-3 bg-[#1D4ED8] text-white rounded-2xl text-[13px] font-semibold shadow-lg shadow-[#1D4ED8]/25 hover:bg-[#1641b8] active:scale-[0.98] transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
        >
          <Send className="w-4 h-4" />
          Enviar para {selectedIds.size} {selectedIds.size === 1 ? 'lead' : 'leads'}
        </button>
      </div>

      {/* Modal de confirmação */}
      {showConfirm && selectedTemplate && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => !sending && setShowConfirm(false)}>
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl mx-4 overflow-hidden border border-gray-100" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-[15px] font-semibold text-[#0f172a] flex items-center gap-2">
                <Send className="w-4 h-4 text-[#1D4ED8]" /> Confirmar disparo
              </h2>
              <button onClick={() => !sending && setShowConfirm(false)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-[12.5px] text-amber-800">
                  Você vai disparar <strong>imediatamente</strong> para <strong>{selectedIds.size}</strong> {selectedIds.size === 1 ? 'lead' : 'leads'}. Esta ação não pode ser desfeita.
                </p>
              </div>
              <div className="space-y-2 text-[13px]">
                <div className="flex justify-between"><span className="text-gray-400">Template</span><span className="font-medium text-gray-700">{readableTemplate(selectedTemplate.name)}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Canal</span><span className="font-medium text-gray-700">{selectedChannel?.name || channelId}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Leads</span><span className="font-medium text-gray-700">{selectedIds.size}</span></div>
              </div>
              {selectedTemplate.parameters.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 space-y-1">
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold mb-1">Variáveis</p>
                  {selectedTemplate.parameters.map((param, idx) => {
                    const m = mappings[idx];
                    const label = PARAM_OPTIONS.find((o) => o.value === m?.type)?.label || m?.type;
                    return (
                      <p key={idx} className="text-[12.5px] text-gray-600">
                        {`{{${idx + 1}}}`} → {label}{m?.type === 'fixed_text' ? `: "${m.value}"` : ''}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="px-6 py-4 border-t border-gray-100 flex items-center gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                disabled={sending}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-[13px] font-medium text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                Cancelar
              </button>
              <button
                onClick={handleSend}
                disabled={sending}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#1D4ED8] text-white text-[13px] font-semibold hover:bg-[#1641b8] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {sending ? 'Enviando...' : 'Enviar agora'}
              </button>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}
