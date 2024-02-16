import DayState from '@/components/DayState'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const habits = {
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

  const today = new Date()
  // const todayWeekDay = 0 // Domingo (ultima casa)
  const todayWeekDay = today.getDay()
  const weeKDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

  const sortedWeekDays = weeKDays
    .slice(todayWeekDay + 1)
    .concat(weeKDays.slice(0, todayWeekDay + 1))

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null ||
        (Object.keys(habits).length === 0 && (
          <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
            Voce não tem hábitos cadastrados
          </h1>
        ))}
      {habits != null &&
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit} className="flex flex-col gap-2">
            {/* {habit} - {JSON.stringify(habitStreak)} */}
            <div className="flex justify-between items-center">
              <span className="text-xl font-light text-white font-sans">
                {habit}
              </span>
              <button>
                <Image
                  src="/images/delete.svg"
                  width={20}
                  height={20}
                  alt="deletar habito"
                />
              </button>
            </div>
            <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
              {/* {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map( */}
              {/* {weeKDays.map((day) => ( */}
              {sortedWeekDays.map((day) => (
                <div
                  key={day}
                  className="flex flex-col last:font-bold"
                >
                  <span className="font-sans text-xs text-white text-center">
                    {day}
                  </span>
                  <DayState day={false} />
                  {/* <DayState day={true}/> */}
                  {/* <DayState day={undefined}/> */}
                </div>
              ))}
            </section>
          </div>
        ))}
      <Link
        href="novo-habito"
        className="fixed text-center bottom-10 
        w-2/3 left-1/2 -translate-x-1/2 text-neutral-900 
        bg-[#45EDAD] font-display font-regular text-2xl p-2"
      >
        Novo Hábito
      </Link>
    </main>
  )
}
