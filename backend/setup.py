import asyncio
from app.database import async_session
from app.models import User, Channel
from app.auth import hash_password

async def setup():
    async with async_session() as db:
        db.add(User(
            name="Alefe",
            email="linsalefe@gmail.com",
            password_hash=hash_password("Portugues5#"),
            role="admin",
        ))
        db.add(Channel(
            name="Intercambio WhatsApp",
            phone_number="+5511952136429",
            phone_number_id="1043680765495660",
            whatsapp_token="EAAd3oS6zxXwBQxC58nGtOIOfgUqtrJcpUhS7MyPlecAospgQjMlosHOAqQLLb3Pjkj7g5ZBpVHx5O17LfTm2ALr0XUtjWQlZC0yNfXpp5bK6PqLe3wvazyVsEWrI78cfnzXSoH2FSX6DFyhjhcZCJb1qh7a3MNqdZChZCsAFPMYVomSodsA3uDTTeVbzXcVLidwvRJ3JZCgCQ0HW7VNotTpWfAP84WdZCkx0ZCVORHZBhH8Fs5hkqLzWF4GnTP3RaXWrecNiNOKxaVJMeRfj6ZB2V2",
            waba_id="820806221040124",
        ))
        await db.commit()
        print("✅ Usuario e canal criados!")

asyncio.run(setup())