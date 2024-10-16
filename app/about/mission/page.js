import Button from '@/app/components/button'
import React from 'react'
import test from '@/public/img.png'
import Image from 'next/image'
export default function Mission() {
  return (
    <main>
      <div>
        Mission
        <div className='w-[400px]'>
          <Image src={test} alt="thumb" />
        </div>
        <Button />
      </div>
    </main>

  )
}
