'use client'

import ArrowIcon from '@/components/ArrowIcon'
import { useEffect, useState } from 'react'
import DayState from './DayState'
import { toggleHabit } from '@/app/actions'

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

// const daysInMonth = getDaysInMonth(11, currentYear) // Dezembro
// const daysInMonth = getDaysInMonth(currentMonth, currentYear)
// console.log(daysInMonth)

const weeKDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

function Calendar({
  habit,
  habitStreak,
}: {
  habit: string
  habitStreak: Record<string, boolean> | null
}) {
  const [month, setMonth] = useState(currentMonth)
  const [year, setYear] = useState(currentYear)
  // const [selectedDate, setSelectedDate] = useState(currentDay)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [daysInMonth, setDaysInMonth] = useState(
    getDaysInMonth(currentMonth, currentYear)
  )

  useEffect(() => {
    setDaysInMonth(getDaysInMonth(month, year))
    setSelectedDate(new Date(year, month, 1))
  }, [month, year])

  function goToPreviousMonth() {
    if (month === 0) {
      setYear(year - 1) // volta 1 ano
      setMonth(11) // vai para novembro
    } else {
      setMonth(month - 1) // volta um mes
    }
  }

  function goToNextMonth() {
    if (month === 11) {
      setYear(year + 1) // vai para o proximo ano
      setMonth(0) // vai para janeiro
    } else {
      setMonth(month + 1) // vai para o proximo mes
    }
  }

  function getFullDateString() {
    // return `${selectedDate.toLocaleString("pt-BR", {month:"long",})}
    //        de ${selectedDate.getFullYear()}`
    const selectedDateYear = selectedDate.getFullYear()
    const selectedDateMonth = selectedDate.toLocaleString('pt-BR', {
      month: 'long',
    })
    const capitalizedMonthName =
      selectedDateMonth.charAt(0).toUpperCase() +
      selectedDateMonth.slice(1) // primeira letra em Maiúscula
    return `${capitalizedMonthName} de ${selectedDateYear}`
  }

  function getDayString(day: Date) {
    const mostraData = `${year.toString()}-${(month + 1)
      .toString()
      .padStart(2, '0')}-${day.getDate().toString().padStart(2, '0')}`
    // console.log(mostraData)
    // return `${year.toString()}-${month + 1}-${day.getDate().toString()}`
    return mostraData
  }

  return (
    <section className="w-full my-2 rounded-md bg-neutral-800">
      <div className="flex justify-between mx-2 my-4 font-sans text-neutral-400">
        <button onClick={goToPreviousMonth}>
          <ArrowIcon
            width={17}
            height={17}
            className="stroke-neutral-400"
          />
        </button>

        {/* <span>Julho de 2023</span> */}
        <span>{getFullDateString()}</span>

        <button onClick={goToNextMonth}>
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
          <div
            key={index}
            className="flex flex-col items-center p-2"
            onClick={() => toggleHabit({
              habit,
              habitStreak,
              date: getDayString(day),
              done: habitStreak ? habitStreak[getDayString(day)] : true,
            })}
          >
            <span
              className="font-sans text-xs font-light
                      text-neutral-400"
            >
              {/* {day.getDate()} */}
              {day?.getDate()}
            </span>
            {day && (
              <DayState
                day={
                  habitStreak
                    ? habitStreak[getDayString(day)]
                    : undefined
                }
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Calendar
