### Manaus, 15 February, 2024
=============================

  git clone git@github.com:marcellprolam/gerenciador-habitos.git

  https://nextjs.org/learn-pages-router/basics/create-nextjs-app/setup

  $ npx create-next-app@latest habitos
  √ Would you like to use TypeScript? ... No / Yes
  √ Would you like to use ESLint? ... No / Yes
  √ Would you like to use Tailwind CSS? ... No / Yes
  √ Would you like to use `src/` directory? ... No / Yes
  √ Would you like to use App Router? (recommended) ... No / Yes
  √ Would you like to customize the default import alias (@/*)? ... No / Yes
  Creating a new Next.js app in C:\sys\Cursos2024\gerenciador_habitos\app\gerenciador-habitos\habitos

### Manaus, 16 February, 2024
=============================

  npm run dev

  https://www.figma.com/file/suvmja6210ggZOO6Cpehjl/Mini-Projetos---Codante.io?type=design&node-id=1533-149&mode=design

                                    ? number sendo opcional
  let image: [string, string, number?]


  async function newHabit(formData: FormData) {
    "use server"
    const habit = formData.get("habit")
    console.log(habit)
  }

  async function newHabit(formData) {
    "use server"
    const habit = formData.get("habit");
    console.log(habit);
  }


### VERCEL (01:00:00)
  https://vercel.com/new/marcell-souzas-projects
  New Project

## github?
  git remote -v (lista)
  git remote add origin git@github.com:marcellprolam/gerenciador-habitos.git

## github - Basic
=================
  git add .
  git status
  git branch -m main
  git commit -m "party 1.4"
  git push -u origin main

### VERCEL - storage

  banco: KV - Durable Redis

  import { kv } from "@vercel/kv";
  await kv.set("user_1_session", "session_token_value");
  const session = await kv.get("user_1_session");

# 1
  vercel link
    Y
    enter 
    Y

# 2
  vercel env pull .env.development.local
    .env.development.local

# 3
  npm install @vercel/kv

# 4 app/cart/[user]/page.tsx

  import { kv } from "@vercel/kv";

  export default async function Cart({ params }: { params: { user: string } }) {
    const cart = await kv.get<{ id: string; quantity: number }[]>(params.user);
    return (
      <div>
        {cart?.map((item) => (
          <div key={item.id}>
            {item.id} - {item.quantity}
          </div>
        ))}
      </div>
    );
  }


await kv.hset("habits", { [habit as string]: {} })

{
  habits: {
    'Beber Água': {
      '2023-18-07': true,
      '2023-19-07': false,
      '2023-20-07': false,
    },
    'Estudar Programação': {
      '2023-18-07': false,
      '2023-19-07': true,
      '2023-20-07': false,
    },
  }
}

CLI para confirma a inserção no banco
  hgetall habits
  Tomar Água, {}


### Manaus, 19 February, 2024
=============================

02:11:33


### Manaus, 20 February, 2024
=============================

02:12:00





