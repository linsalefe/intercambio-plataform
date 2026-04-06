(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/pos-plataform/frontend/src/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const menuItems = [
    {
        href: '/dashboard',
        label: 'Dashboard',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        href: '/conversations',
        label: 'Conversas',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"]
    }
];
function Sidebar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "bd6101e730899634437de47400e2e8c4f9e4278782f701d80d434cdaed1660fa") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bd6101e730899634437de47400e2e8c4f9e4278782f701d80d434cdaed1660fa";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const t0 = `${collapsed ? "w-[72px]" : "w-[240px]"} h-screen bg-[#0f1b2d] flex flex-col transition-all duration-300 ease-in-out flex-shrink-0`;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 rounded-lg bg-gradient-to-br from-[#2A658F] to-[#4d9fd4] flex items-center justify-center flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white font-bold text-sm",
                children: "C"
            }, void 0, false, {
                fileName: "[project]/Documents/pos-plataform/frontend/src/components/Sidebar.tsx",
                lineNumber: 30,
                columnNumber: 139
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos-plataform/frontend/src/components/Sidebar.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== collapsed) {
        t2 = !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ml-3 text-white font-semibold text-lg tracking-tight",
            children: "Cenat"
        }, void 0, false, {
            fileName: "[project]/Documents/pos-plataform/frontend/src/components/Sidebar.tsx",
            lineNumber: 37,
            columnNumber: 24
        }, this);
        $[2] = collapsed;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-16 flex items-center px-5 border-b border-white/5",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos-plataform/frontend/src/components/Sidebar.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== collapsed || $[7] !== pathname) {
        t4 = menuItems.map({
            "Sidebar[menuItems.map()]": (item)=>{
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                const Icon = item.icon;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group
                ${isActive ? "bg-[#2A658F] text-white shadow-lg shadow-[#2A658F]/25" : "text-gray-400 hover:text-white hover:bg-white/5"}
                ${collapsed ? "justify-center" : ""}
              `,
                    title: collapsed ? item.label : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: `w-5 h-5 flex-shrink-0 ${isActive ? "text-white" : "text-gray-500 group-hover:text-white"}`
                        }, void 0, false, {
                            fileName: "[project]/Documents/pos-plataform/frontend/src/components/Sidebar.tsx",
                            lineNumber: 60,
                            columnNumber: 54
                        }, this),
                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/Documents/pos-plataform/frontend/src/components/Sidebar.tsx",
                            lineNumber: 60,
                            columnNumber: 181
                        }, this)
                    ]
                }, item.href, true, {
                    fileName: "[project]/Documents/pos-plataform/frontend/src/components/Sidebar.tsx",
                    lineNumber: 57,
                    columnNumber: 16
                }, this);
            }
        }["Sidebar[menuItems.map()]"]);
        $[6] = collapsed;
        $[7] = pathname;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "flex-1 py-4 px-3 space-y-1",
            children: t4
        }, void 0, false, {
            fileName: "[project]/Documents/pos-plataform/frontend/src/components/Sidebar.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== collapsed) {
        t6 = ({
            "Sidebar[<button>.onClick]": ()=>setCollapsed(!collapsed)
        })["Sidebar[<button>.onClick]"];
        $[11] = collapsed;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== collapsed) {
        t7 = collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/Documents/pos-plataform/frontend/src/components/Sidebar.tsx",
            lineNumber: 89,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/Documents/pos-plataform/frontend/src/components/Sidebar.tsx",
                    lineNumber: 89,
                    columnNumber: 63
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Recolher"
                }, void 0, false, {
                    fileName: "[project]/Documents/pos-plataform/frontend/src/components/Sidebar.tsx",
                    lineNumber: 89,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true);
        $[13] = collapsed;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t6 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-3 pb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t6,
                className: "w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-200 text-sm",
                children: t7
            }, void 0, false, {
                fileName: "[project]/Documents/pos-plataform/frontend/src/components/Sidebar.tsx",
                lineNumber: 97,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/pos-plataform/frontend/src/components/Sidebar.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t0 || $[19] !== t3 || $[20] !== t5 || $[21] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: t0,
            children: [
                t3,
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos-plataform/frontend/src/components/Sidebar.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[18] = t0;
        $[19] = t3;
        $[20] = t5;
        $[21] = t8;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    return t9;
}
_s(Sidebar, "08JhlLD2LM6Uel+hWLLKL/dSZrM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/pos-plataform/frontend/src/components/AppLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/src/components/Sidebar.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function AppLayout(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "5c43b2f73284bdecd22c946324ad4d9599d2897cf6b99ff88ec470425dcdbba4") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5c43b2f73284bdecd22c946324ad4d9599d2897cf6b99ff88ec470425dcdbba4";
    }
    const { children, fullWidth: t1 } = t0;
    const fullWidth = t1 === undefined ? false : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Documents/pos-plataform/frontend/src/components/AppLayout.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    const t3 = `flex-1 overflow-hidden ${fullWidth ? "" : "p-6"}`;
    let t4;
    if ($[2] !== children || $[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen bg-[#f8f9fb] overflow-hidden",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: t3,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/pos-plataform/frontend/src/components/AppLayout.tsx",
                    lineNumber: 28,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos-plataform/frontend/src/components/AppLayout.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[2] = children;
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    return t4;
}
_c = AppLayout;
var _c;
__turbopack_context__.k.register(_c, "AppLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/pos-plataform/frontend/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: 'http://localhost:8001/api',
    headers: {
        'Content-Type': 'application/json'
    }
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConversationsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/check-check.js [app-client] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$src$2f$components$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/src/components/AppLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/pos-plataform/frontend/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const leadStatuses = [
    {
        value: 'novo',
        label: 'Novo',
        color: 'bg-blue-500',
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        border: 'border-blue-200'
    },
    {
        value: 'em_contato',
        label: 'Em contato',
        color: 'bg-amber-500',
        bg: 'bg-amber-50',
        text: 'text-amber-700',
        border: 'border-amber-200'
    },
    {
        value: 'qualificado',
        label: 'Qualificado',
        color: 'bg-purple-500',
        bg: 'bg-purple-50',
        text: 'text-purple-700',
        border: 'border-purple-200'
    },
    {
        value: 'negociando',
        label: 'Negociando',
        color: 'bg-cyan-500',
        bg: 'bg-cyan-50',
        text: 'text-cyan-700',
        border: 'border-cyan-200'
    },
    {
        value: 'convertido',
        label: 'Convertido',
        color: 'bg-emerald-500',
        bg: 'bg-emerald-50',
        text: 'text-emerald-700',
        border: 'border-emerald-200'
    },
    {
        value: 'perdido',
        label: 'Perdido',
        color: 'bg-red-500',
        bg: 'bg-red-50',
        text: 'text-red-700',
        border: 'border-red-200'
    }
];
const tagColors = [
    {
        value: 'blue',
        bg: 'bg-blue-100',
        text: 'text-blue-700'
    },
    {
        value: 'green',
        bg: 'bg-emerald-100',
        text: 'text-emerald-700'
    },
    {
        value: 'red',
        bg: 'bg-red-100',
        text: 'text-red-700'
    },
    {
        value: 'purple',
        bg: 'bg-purple-100',
        text: 'text-purple-700'
    },
    {
        value: 'amber',
        bg: 'bg-amber-100',
        text: 'text-amber-700'
    },
    {
        value: 'pink',
        bg: 'bg-pink-100',
        text: 'text-pink-700'
    },
    {
        value: 'cyan',
        bg: 'bg-cyan-100',
        text: 'text-cyan-700'
    }
];
function ConversationsPage() {
    _s();
    const [channels, setChannels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeChannel, setActiveChannel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showChannelMenu, setShowChannelMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [contacts, setContacts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedContact, setSelectedContact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newMessage, setNewMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('todos');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCRM, setShowCRM] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showStatusMenu, setShowStatusMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTagMenu, setShowTagMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [allTags, setAllTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newTagName, setNewTagName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newTagColor, setNewTagColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('blue');
    const [editingNotes, setEditingNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notesValue, setNotesValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConversationsPage.useEffect": ()=>{
            setMounted(true);
        }
    }["ConversationsPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConversationsPage.useEffect": ()=>{
            loadChannels();
            loadTags();
        }
    }["ConversationsPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConversationsPage.useEffect": ()=>{
            if (activeChannel) {
                loadContacts();
                const interval = setInterval(loadContacts, 5000);
                return ({
                    "ConversationsPage.useEffect": ()=>clearInterval(interval)
                })["ConversationsPage.useEffect"];
            }
        }
    }["ConversationsPage.useEffect"], [
        activeChannel
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConversationsPage.useEffect": ()=>{
            if (selectedContact) {
                loadMessages(selectedContact.wa_id);
                setNotesValue(selectedContact.notes || '');
                const interval_0 = setInterval({
                    "ConversationsPage.useEffect.interval_0": ()=>loadMessages(selectedContact.wa_id)
                }["ConversationsPage.useEffect.interval_0"], 3000);
                return ({
                    "ConversationsPage.useEffect": ()=>clearInterval(interval_0)
                })["ConversationsPage.useEffect"];
            }
        }
    }["ConversationsPage.useEffect"], [
        selectedContact
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConversationsPage.useEffect": ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }["ConversationsPage.useEffect"], [
        messages
    ]);
    const loadChannels = async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/channels');
            setChannels(res.data);
            if (res.data.length > 0 && !activeChannel) {
                setActiveChannel(res.data[0]);
            }
        } catch (err) {
            console.error('Erro:', err);
        }
    };
    const loadContacts = async ()=>{
        try {
            const params = activeChannel ? `?channel_id=${activeChannel.id}` : '';
            const res_0 = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/contacts${params}`);
            setContacts(res_0.data);
            if (selectedContact) {
                const updated = res_0.data.find((c)=>c.wa_id === selectedContact.wa_id);
                if (updated) setSelectedContact(updated);
            }
        } catch (err_0) {
            console.error('Erro:', err_0);
        } finally{
            setLoading(false);
        }
    };
    const loadMessages = async (waId)=>{
        try {
            const res_1 = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/contacts/${waId}/messages`);
            setMessages(res_1.data);
        } catch (err_1) {
            console.error('Erro:', err_1);
        }
    };
    const loadTags = async ()=>{
        try {
            const res_2 = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/tags');
            setAllTags(res_2.data);
        } catch (err_2) {
            console.error('Erro:', err_2);
        }
    };
    const handleSend = async ()=>{
        if (!newMessage.trim() || !selectedContact || !activeChannel || sending) return;
        setSending(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/send/text', {
                to: selectedContact.wa_id,
                text: newMessage,
                channel_id: activeChannel.id
            });
            setNewMessage('');
            await loadMessages(selectedContact.wa_id);
            await loadContacts();
        } catch (err_3) {
            console.error('Erro:', err_3);
        } finally{
            setSending(false);
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    const updateLeadStatus = async (status)=>{
        if (!selectedContact) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`/contacts/${selectedContact.wa_id}`, {
                lead_status: status
            });
            setShowStatusMenu(false);
            await loadContacts();
        } catch (err_4) {
            console.error('Erro:', err_4);
        }
    };
    const saveNotes = async ()=>{
        if (!selectedContact) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`/contacts/${selectedContact.wa_id}`, {
                notes: notesValue
            });
            setEditingNotes(false);
            await loadContacts();
        } catch (err_5) {
            console.error('Erro:', err_5);
        }
    };
    const addTag = async (tagId)=>{
        if (!selectedContact) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/contacts/${selectedContact.wa_id}/tags/${tagId}`);
            await loadContacts();
        } catch (err_6) {
            console.error('Erro:', err_6);
        }
    };
    const removeTag = async (tagId_0)=>{
        if (!selectedContact) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/contacts/${selectedContact.wa_id}/tags/${tagId_0}`);
            await loadContacts();
        } catch (err_7) {
            console.error('Erro:', err_7);
        }
    };
    const createTag = async ()=>{
        if (!newTagName.trim()) return;
        try {
            const res_3 = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/tags', {
                name: newTagName,
                color: newTagColor
            });
            setAllTags([
                ...allTags,
                res_3.data
            ]);
            setNewTagName('');
            if (selectedContact) await addTag(res_3.data.id);
        } catch (err_8) {
            console.error('Erro:', err_8);
        }
    };
    const getInitials = (name)=>name.split(' ').map((n)=>n[0]).join('').toUpperCase().slice(0, 2);
    const getAvatarColor = (name_0)=>{
        const c_0 = [
            'from-blue-500 to-blue-600',
            'from-purple-500 to-purple-600',
            'from-emerald-500 to-emerald-600',
            'from-orange-500 to-orange-600',
            'from-pink-500 to-pink-600',
            'from-cyan-500 to-cyan-600',
            'from-indigo-500 to-indigo-600'
        ];
        return c_0[name_0.charCodeAt(0) % c_0.length];
    };
    const formatTime = (ts)=>new Date(ts).toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit'
        });
    const formatDate = (ts_0)=>{
        const d = new Date(ts_0);
        const t = new Date();
        if (d.toDateString() === t.toDateString()) return 'Hoje';
        const y = new Date(t);
        y.setDate(y.getDate() - 1);
        if (d.toDateString() === y.toDateString()) return 'Ontem';
        return d.toLocaleDateString('pt-BR');
    };
    const formatFullDate = (ts_1)=>new Date(ts_1).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    const getStatusIcon = (s)=>{
        switch(s){
            case 'sent':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-3.5 h-3.5 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                    lineNumber: 308,
                    columnNumber: 16
                }, this);
            case 'delivered':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                    className: "w-3.5 h-3.5 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                    lineNumber: 310,
                    columnNumber: 16
                }, this);
            case 'read':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                    className: "w-3.5 h-3.5 text-blue-400"
                }, void 0, false, {
                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                    lineNumber: 312,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "w-3.5 h-3.5 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                    lineNumber: 314,
                    columnNumber: 16
                }, this);
        }
    };
    const getStatusConfig = (s_0)=>leadStatuses.find((x)=>x.value === s_0) || leadStatuses[0];
    const getTagColorConfig = (c_1)=>tagColors.find((x_0)=>x_0.value === c_1) || tagColors[0];
    const filteredContacts = contacts.filter((c_2)=>{
        const ms = c_2.name.toLowerCase().includes(search.toLowerCase()) || c_2.wa_id.includes(search);
        const mst = statusFilter === 'todos' || c_2.lead_status === statusFilter;
        return ms && mst;
    });
    const groupedMessages = [];
    messages.forEach((msg)=>{
        const date = formatDate(msg.timestamp);
        const last = groupedMessages[groupedMessages.length - 1];
        if (last && last.date === date) last.msgs.push(msg);
        else groupedMessages.push({
            date,
            msgs: [
                msg
            ]
        });
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$src$2f$components$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fullWidth: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${selectedContact ? 'hidden lg:flex' : 'flex'} w-full lg:w-[340px] flex-col border-r border-gray-200 bg-white flex-shrink-0`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-3 border-b border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowChannelMenu(!showChannelMenu),
                                            className: "w-full flex items-center justify-between px-3 py-2.5 bg-gradient-to-r from-[#0f1b2d] to-[#1a2d47] rounded-xl text-left transition-all hover:shadow-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 bg-[#2A658F] rounded-lg flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                                                className: "w-4 h-4 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium text-white",
                                                                    children: activeChannel?.name || 'Selecionar canal'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 349,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-gray-400",
                                                                    children: activeChannel ? `+${activeChannel.phone_number.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '$1 $2 $3-$4')}` : 'Nenhum canal'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 350,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: `w-4 h-4 text-gray-400 transition-transform ${showChannelMenu ? 'rotate-180' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this),
                                        showChannelMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-0 right-0 mt-1 bg-white rounded-xl border border-gray-200 shadow-xl z-20 overflow-hidden",
                                            children: channels.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setActiveChannel(ch);
                                                        setShowChannelMenu(false);
                                                        setSelectedContact(null);
                                                        setLoading(true);
                                                    },
                                                    className: `w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 transition-colors text-left ${activeChannel?.id === ch.id ? 'bg-[#2A658F]/5' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-2 h-2 rounded-full ${activeChannel?.id === ch.id ? 'bg-[#2A658F]' : 'bg-gray-300'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium text-gray-800",
                                                                    children: ch.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 366,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-gray-500",
                                                                    children: [
                                                                        "+",
                                                                        ch.phone_number
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 367,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, ch.id, true, {
                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 39
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                            lineNumber: 357,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                            lineNumber: 375,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Buscar contato...",
                                            value: search,
                                            onChange: (e_0)=>setSearch(e_0.target.value),
                                            className: "w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:border-[#2A658F] focus:ring-2 focus:ring-[#2A658F]/10 transition-all outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                            lineNumber: 376,
                                            columnNumber: 15
                                        }, this),
                                        search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSearch(''),
                                            className: "absolute right-3 top-1/2 -translate-y-1/2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                className: "w-4 h-4 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                            lineNumber: 377,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1.5 mt-3 overflow-x-auto pb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setStatusFilter('todos'),
                                            className: `px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${statusFilter === 'todos' ? 'bg-[#2A658F] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`,
                                            children: [
                                                "Todos (",
                                                contacts.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                            lineNumber: 384,
                                            columnNumber: 15
                                        }, this),
                                        leadStatuses.map((s_1)=>{
                                            const count = contacts.filter((c_3)=>c_3.lead_status === s_1.value).length;
                                            if (count === 0) return null;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setStatusFilter(s_1.value),
                                                className: `px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${statusFilter === s_1.value ? `${s_1.bg} ${s_1.text} border ${s_1.border}` : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`,
                                                children: [
                                                    s_1.label,
                                                    " (",
                                                    count,
                                                    ")"
                                                ]
                                            }, s_1.value, true, {
                                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                lineNumber: 390,
                                                columnNumber: 22
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-pulse space-y-1 p-3",
                                children: [
                                    ...Array(5)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-11 h-11 bg-gray-100 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                lineNumber: 401,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 bg-gray-100 rounded w-28"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-3 bg-gray-100 rounded w-40"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                lineNumber: 402,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                        lineNumber: 400,
                                        columnNumber: 46
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                lineNumber: 399,
                                columnNumber: 24
                            }, this) : filteredContacts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center h-48 text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        className: "w-10 h-10 mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: "Nenhuma conversa"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                        lineNumber: 409,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                lineNumber: 407,
                                columnNumber: 56
                            }, this) : filteredContacts.map((contact)=>{
                                const st = getStatusConfig(contact.lead_status);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedContact(contact),
                                    className: `w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left border-b border-gray-50 ${selectedContact?.wa_id === contact.wa_id ? 'bg-[#2A658F]/5' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-11 h-11 rounded-full bg-gradient-to-br ${getAvatarColor(contact.name)} flex items-center justify-center text-white font-semibold text-xs shadow-sm`,
                                                    children: getInitials(contact.name || contact.wa_id)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 ${st.color} rounded-full border-2 border-white`
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-sm text-[#27273D] truncate",
                                                            children: contact.name || contact.wa_id
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 421,
                                                            columnNumber: 25
                                                        }, this),
                                                        contact.last_message_time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] text-gray-400 ml-2 flex-shrink-0",
                                                            children: formatTime(contact.last_message_time)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 422,
                                                            columnNumber: 55
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 mt-0.5",
                                                    children: [
                                                        contact.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-0.5",
                                                            children: contact.tags.slice(0, 2).map((tag)=>{
                                                                const tc = getTagColorConfig(tag.color);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `w-2 h-2 rounded-full ${tc.bg}`
                                                                }, tag.id, false, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 428,
                                                                    columnNumber: 30
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500 truncate",
                                                            children: [
                                                                contact.direction === 'outbound' && '✓ ',
                                                                contact.last_message || 'Sem mensagens'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                            lineNumber: 419,
                                            columnNumber: 21
                                        }, this),
                                        contact.unread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-5 h-5 bg-[#2A658F] text-white text-[10px] font-bold rounded-full flex items-center justify-center flex-shrink-0",
                                            children: contact.unread
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                            lineNumber: 437,
                                            columnNumber: 44
                                        }, this)
                                    ]
                                }, contact.wa_id, true, {
                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                    lineNumber: 412,
                                    columnNumber: 20
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                    lineNumber: 339,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${selectedContact ? 'flex' : 'hidden lg:flex'} flex-1 flex-col min-w-0`,
                    children: selectedContact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 border-b border-gray-200 bg-white flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedContact(null),
                                                className: "lg:hidden p-1 hover:bg-gray-100 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    className: "w-5 h-5 text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                lineNumber: 450,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-9 h-9 rounded-full bg-gradient-to-br ${getAvatarColor(selectedContact.name)} flex items-center justify-center text-white font-semibold text-xs`,
                                                children: getInitials(selectedContact.name || selectedContact.wa_id)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                lineNumber: 453,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-sm text-[#27273D]",
                                                        children: selectedContact.name || selectedContact.wa_id
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500",
                                                                children: [
                                                                    "+",
                                                                    selectedContact.wa_id
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                lineNumber: 459,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `inline-flex items-center px-1.5 py-0.5 text-[10px] font-medium rounded-md ${getStatusConfig(selectedContact.lead_status).bg} ${getStatusConfig(selectedContact.lead_status).text}`,
                                                                children: getStatusConfig(selectedContact.lead_status).label
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                lineNumber: 460,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                        lineNumber: 458,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                lineNumber: 456,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                        lineNumber: 449,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowCRM(!showCRM),
                                        className: `p-2 rounded-lg transition-colors ${showCRM ? 'bg-[#2A658F]/10 text-[#2A658F]' : 'hover:bg-gray-100 text-gray-500'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                            lineNumber: 467,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                        lineNumber: 466,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                lineNumber: 448,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-1 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 flex flex-col min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 overflow-y-auto px-4 py-4 space-y-1 bg-[#f0f2f5]",
                                                children: [
                                                    groupedMessages.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-center my-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-3 py-1 bg-white/90 rounded-lg text-[11px] text-gray-500 shadow-sm font-medium",
                                                                        children: group.date
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                        lineNumber: 477,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 476,
                                                                    columnNumber: 25
                                                                }, this),
                                                                group.msgs.map((msg_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `flex mb-1 ${msg_0.direction === 'outbound' ? 'justify-end' : 'justify-start'}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `max-w-[70%] px-3 py-2 rounded-2xl shadow-sm ${msg_0.direction === 'outbound' ? 'bg-[#2A658F] text-white rounded-br-sm' : 'bg-white text-gray-800 rounded-bl-sm'}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[13.5px] whitespace-pre-wrap break-words leading-relaxed",
                                                                                    children: msg_0.content
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                                    lineNumber: 481,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `flex items-center justify-end gap-1 mt-0.5 ${msg_0.direction === 'outbound' ? 'text-white/60' : 'text-gray-400'}`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px]",
                                                                                            children: formatTime(msg_0.timestamp)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                                            lineNumber: 483,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        msg_0.direction === 'outbound' && getStatusIcon(msg_0.status)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                                    lineNumber: 482,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                            lineNumber: 480,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, msg_0.id, false, {
                                                                        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                        lineNumber: 479,
                                                                        columnNumber: 50
                                                                    }, this))
                                                            ]
                                                        }, group.date, true, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 475,
                                                            columnNumber: 51
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        ref: messagesEndRef
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                lineNumber: 474,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-3 border-t border-gray-200 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-end gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            value: newMessage,
                                                            onChange: (e_1)=>setNewMessage(e_1.target.value),
                                                            onKeyDown: handleKeyPress,
                                                            placeholder: "Digite uma mensagem...",
                                                            rows: 1,
                                                            className: "flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 resize-none focus:border-[#2A658F] focus:ring-2 focus:ring-[#2A658F]/10 transition-all outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleSend,
                                                            disabled: !newMessage.trim() || sending,
                                                            className: "flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#2A658F] to-[#3d7ba8] rounded-xl text-white hover:shadow-lg hover:shadow-[#2A658F]/30 transition-all disabled:opacity-50 flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                lineNumber: 496,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                    lineNumber: 493,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                lineNumber: 492,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                        lineNumber: 473,
                                        columnNumber: 17
                                    }, this),
                                    showCRM && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[300px] border-l border-gray-200 bg-white overflow-y-auto flex-shrink-0 hidden xl:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 space-y-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center pb-4 border-b border-gray-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-16 h-16 rounded-full bg-gradient-to-br ${getAvatarColor(selectedContact.name)} flex items-center justify-center text-white font-bold text-xl shadow-md mx-auto`,
                                                            children: getInitials(selectedContact.name || selectedContact.wa_id)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-[#27273D] mt-3",
                                                            children: selectedContact.name || selectedContact.wa_id
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 509,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-center gap-1.5 mt-1 text-gray-500",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs",
                                                                    children: [
                                                                        "+",
                                                                        selectedContact.wa_id
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 512,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 25
                                                        }, this),
                                                        selectedContact.created_at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-center gap-1.5 mt-1 text-gray-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 515,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs",
                                                                    children: [
                                                                        "Desde ",
                                                                        formatFullDate(selectedContact.created_at)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 516,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 56
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2",
                                                            children: "Status do Lead"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 522,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setShowStatusMenu(!showStatusMenu),
                                                                    className: `w-full flex items-center justify-between px-3 py-2 rounded-xl border ${getStatusConfig(selectedContact.lead_status).border} ${getStatusConfig(selectedContact.lead_status).bg} transition-all`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `w-2.5 h-2.5 rounded-full ${getStatusConfig(selectedContact.lead_status).color}`
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                                    lineNumber: 526,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `text-sm font-medium ${getStatusConfig(selectedContact.lead_status).text}`,
                                                                                    children: getStatusConfig(selectedContact.lead_status).label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                                    lineNumber: 527,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                            lineNumber: 525,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                            className: "w-4 h-4 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                            lineNumber: 531,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 524,
                                                                    columnNumber: 27
                                                                }, this),
                                                                showStatusMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute top-full left-0 right-0 mt-1 bg-white rounded-xl border border-gray-200 shadow-lg z-10 overflow-hidden",
                                                                    children: leadStatuses.map((s_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>updateLeadStatus(s_2.value),
                                                                            className: "w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition-colors text-left",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `w-2.5 h-2.5 rounded-full ${s_2.color}`
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                                    lineNumber: 535,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm text-gray-700",
                                                                                    children: s_2.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                                    lineNumber: 536,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, s_2.value, true, {
                                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                            lineNumber: 534,
                                                                            columnNumber: 56
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 533,
                                                                    columnNumber: 46
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 523,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2",
                                                            children: "Tags"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 544,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1.5 mb-2",
                                                            children: selectedContact.tags.map((tag_0)=>{
                                                                const tc_0 = getTagColorConfig(tag_0.color);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg ${tc_0.bg} ${tc_0.text}`,
                                                                    children: [
                                                                        tag_0.name,
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>removeTag(tag_0.id),
                                                                            className: "hover:opacity-70",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                className: "w-3 h-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                                lineNumber: 550,
                                                                                columnNumber: 106
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                            lineNumber: 550,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, tag_0.id, true, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 548,
                                                                    columnNumber: 30
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 545,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setShowTagMenu(!showTagMenu),
                                                            className: "flex items-center gap-1 text-xs text-[#2A658F] hover:text-[#1a4a6e] font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "w-3.5 h-3.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 555,
                                                                    columnNumber: 27
                                                                }, this),
                                                                " Adicionar tag"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 25
                                                        }, this),
                                                        showTagMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 bg-gray-50 rounded-xl p-3 space-y-2",
                                                            children: [
                                                                allTags.filter((t_0)=>!selectedContact.tags.find((ct)=>ct.id === t_0.id)).map((tag_1)=>{
                                                                    const tc_1 = getTagColorConfig(tag_1.color);
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            addTag(tag_1.id);
                                                                            setShowTagMenu(false);
                                                                        },
                                                                        className: `w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium ${tc_1.bg} ${tc_1.text} hover:opacity-80 transition-opacity`,
                                                                        children: tag_1.name
                                                                    }, tag_1.id, false, {
                                                                        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                        lineNumber: 560,
                                                                        columnNumber: 30
                                                                    }, this);
                                                                }),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "pt-2 border-t border-gray-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-gray-400 uppercase font-semibold mb-1.5",
                                                                            children: "Criar nova tag"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                            lineNumber: 568,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: newTagName,
                                                                            onChange: (e_2)=>setNewTagName(e_2.target.value),
                                                                            placeholder: "Nome da tag",
                                                                            className: "w-full px-2.5 py-1.5 text-xs text-gray-800 border border-gray-200 rounded-lg outline-none focus:border-[#2A658F]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                            lineNumber: 569,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-1 mt-1.5",
                                                                            children: tagColors.map((c_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>setNewTagColor(c_4.value),
                                                                                    className: `w-5 h-5 rounded-full ${c_4.bg} ${newTagColor === c_4.value ? 'ring-2 ring-offset-1 ring-[#2A658F]' : ''}`
                                                                                }, c_4.value, false, {
                                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                                    lineNumber: 571,
                                                                                    columnNumber: 55
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                            lineNumber: 570,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>{
                                                                                createTag();
                                                                                setShowTagMenu(false);
                                                                            },
                                                                            disabled: !newTagName.trim(),
                                                                            className: "w-full mt-2 px-2.5 py-1.5 bg-[#2A658F] text-white text-xs font-medium rounded-lg disabled:opacity-50 hover:bg-[#1a4a6e] transition-colors",
                                                                            children: "Criar tag"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                            lineNumber: 573,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 567,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 557,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                    lineNumber: 543,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                                                    children: "Notas"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 586,
                                                                    columnNumber: 27
                                                                }, this),
                                                                !editingNotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setEditingNotes(true),
                                                                    className: "text-xs text-[#2A658F] font-medium",
                                                                    children: "Editar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 587,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 585,
                                                            columnNumber: 25
                                                        }, this),
                                                        editingNotes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    value: notesValue,
                                                                    onChange: (e_3)=>setNotesValue(e_3.target.value),
                                                                    rows: 4,
                                                                    className: "w-full px-3 py-2 text-sm text-gray-800 border border-gray-200 rounded-xl outline-none focus:border-[#2A658F] resize-none",
                                                                    placeholder: "Adicione notas sobre este lead..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 590,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2 mt-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: saveNotes,
                                                                            className: "px-3 py-1.5 bg-[#2A658F] text-white text-xs font-medium rounded-lg hover:bg-[#1a4a6e]",
                                                                            children: "Salvar"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                            lineNumber: 592,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>{
                                                                                setEditingNotes(false);
                                                                                setNotesValue(selectedContact.notes || '');
                                                                            },
                                                                            className: "px-3 py-1.5 text-gray-500 text-xs font-medium rounded-lg hover:bg-gray-100",
                                                                            children: "Cancelar"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                            lineNumber: 593,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                    lineNumber: 591,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 589,
                                                            columnNumber: 41
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gray-50 rounded-xl p-3 min-h-[60px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600 whitespace-pre-wrap",
                                                                children: selectedContact.notes || 'Sem notas'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                                lineNumber: 599,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                            lineNumber: 598,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                            lineNumber: 504,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                        lineNumber: 503,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                lineNumber: 471,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col items-center justify-center text-gray-400 bg-[#f0f2f5]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                    className: "w-10 h-10 text-gray-300"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                    lineNumber: 607,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                lineNumber: 606,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-medium text-[#27273D]",
                                children: "Cenat WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                lineNumber: 609,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$pos$2d$plataform$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mt-1 text-gray-400",
                                children: "Selecione uma conversa para começar"
                            }, void 0, false, {
                                fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                                lineNumber: 610,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                        lineNumber: 605,
                        columnNumber: 19
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
                    lineNumber: 446,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
            lineNumber: 337,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/pos-plataform/frontend/src/app/conversations/page.tsx",
        lineNumber: 336,
        columnNumber: 10
    }, this);
}
_s(ConversationsPage, "c8wU3D26XWPa/7ARbwamAybB/a4=");
_c = ConversationsPage;
var _c;
__turbopack_context__.k.register(_c, "ConversationsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_pos-plataform_frontend_src_191063a1._.js.map