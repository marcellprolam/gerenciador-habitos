import DayState from '@/components/DayState'
import Image from 'next/image'
import Link from 'next/link'
import { kv } from '@vercel/kv'
import { deleteHabit } from './actions'
import DeleteButton from '@/components/DeleteButton'

export type Habits = {
  [habit: string]: Record<string, boolean>
} | null

export default async function Home() {
  // const habits = {
  //   'Beber Água': {
  //     '2023-18-07': true,
  //     '2023-19-07': false,
  //     '2023-20-07': false,
  //   },
  //   'Estudar Programação': {
  //     '2023-18-07': false,
  //     '2023-19-07': true,
  //     '2023-20-07': false,
  //   },
  // }
  const habits: Habits = await kv.hgetall('habits')

  const today = new Date()
  // const todayWeekDay = 0 // Domingo (ultima casa)
  const todayWeekDay = today.getDay()
  const weeKDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

  const sortedWeekDays = weeKDays
    .slice(todayWeekDay + 1)
    .concat(weeKDays.slice(0, todayWeekDay + 1))

  const last7Days = weeKDays
    .map((_, index) => {
      const date = new Date()
      date.setDate(date.getDate() - index)

      return date.toISOString().slice(0, 10) // apenas os 10 primeiros campos da data completa
    })
    .reverse()

  // console.log(last7Days)

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
             < DeleteButton habit={habit} />
            </div>
            <Link href={`habito/${habit}`}>
              <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
                {/* {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map( */}
                {/* {weeKDays.map((day) => ( */}
                {sortedWeekDays.map((day, index) => (
                  <div
                    key={day}
                    className="flex flex-col last:font-bold"
                  >
                    <span className="font-sans text-xs text-white text-center">
                      {day}
                    </span>
                    {/* <DayState day={false} /> */}
                    {/* <DayState day={true}/> */}
                    {/* <DayState day={undefined}/> */}
                    <DayState day={habitStreak[last7Days[index]]} />
                  </div>
                ))}
              </section>
            </Link>
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
