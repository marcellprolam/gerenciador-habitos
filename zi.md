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


### VERCEL
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
  git commit -m "party 5-2"
  git push -u origin main