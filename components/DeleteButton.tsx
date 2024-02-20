'use client'
import { deleteHabit } from '@/app/actions'
import Image from 'next/image'

function DeleteButton({ habit }: { habit: string }) {
  return (
    <button onClick={() => deleteHabit(habit)}>
      <Image
        src="/images/delete.svg"
        width={20}
        height={20}
        alt="deletar habito"
      />
    </button>
  )
}

export default DeleteButton
