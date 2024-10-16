"use client"
import React from 'react'

export default function Button() {
  return (
    <div>
    <button className=' bg-green-200 rounded-sm px-3 py-2' onClick={()=>console.log("I have clicked here! ")}> Click Here </button>
  </div>
  )
}
