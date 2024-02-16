import ArrowIcon from '@/components/ArrowIcon'
import { kv } from '@vercel/kv'
import { get } from 'http'
import Link from 'next/link'

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 1)
  const firstDayWeekDay = date.getDay()
  const numberOfEmptyDays = Array(firstDayWeekDay).fill(null)

  // const days = []
  // const days = [null, null, null, null]
  const days = [...numberOfEmptyDays]

  while (date.getMonth() === month) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }
  return days
}

const currentDate = new Date()
const currentDay = currentDate.getDate()
const currentMonth = currentDate.getMonth()
const currentYear = currentDate.getFullYear()

async function Habit({
  params: { habit },
}: {
  params: { habit: string }
}) {
  const decodedHabit = decodeURI(habit)
  const habitStreak = await kv.hget('habits', decodedHabit)
  // console.log(habitStreak)

  const weeKDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
  // const daysInMonth = getDaysInMonth(11, currentYear) // Dezembro
  const daysInMonth = getDaysInMonth(currentMonth, currentYear)
  // console.log(daysInMonth)

  return (
    <main
      className="container relative flex flex-col gap-8 px-12
                     pt-16"
    >
      {/* <h1 className="text-white">{habit}</h1> */}
      <h1
        className="text-2xl font-light text-center text-white 
                     font-display"
      >
        {decodedHabit}
      </h1>
      <Link
        className="flex items-center font-sans text-xs text-white gap-2"
        href="/"
      >
        <ArrowIcon width={17} height={17} />
        Voltar
      </Link>
      <section className="w-full my-2 rounded-md bg-neutral-800">
        <div className="flex justify-between mx-2 my-4 font-sans text-neutral-400">
          <button>
            <ArrowIcon
              width={17}
              height={17}
              className="stroke-neutral-400"
            />
          </button>
          <span>Julho de 2023</span>
          <button>
            <ArrowIcon
              width={17}
              height={17}
              className="stroke-neutral-400 rotate-180"
            />
          </button>
        </div>
        <div className="grid w-full grid-cols-7 mt-2">
          {weeKDays.map((day) => (
            <div key={day} className="flex flex-col items-center p-2">
              <span
                className="font-sans text-xs font-light
                               text-neutral-200"
              >
                {day}
              </span>
            </div>
          ))}
          {daysInMonth.map((day, index) => (
            <div key={index} className="flex flex-col items-center">
              <span
                className="font-sans text-xs font-light
                            text-neutral-400"
              >
                {/* {day.getDate()} */}
                {day?.getDate()}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Habit
