import ArrowIcon from '@/components/ArrowIcon'
import Calendar from '@/components/Calendar'
import { kv } from '@vercel/kv'
// import { get } from 'http'
import Link from 'next/link'

async function Habit({
  params: { habit },
}: {
  params: { habit: string }
}) {
  const decodedHabit = decodeURI(habit)
  const habitStreak: Record<string, boolean> | null = await kv.hget(
    'habits',
    decodedHabit
  )
  // console.log(habitStreak)

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

      <Calendar habit={decodedHabit} habitStreak={habitStreak} />
    </main>
  )
}

export default Habit
