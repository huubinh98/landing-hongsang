import React from 'react'

function Tag({text, className}:{text: string; className?: string}) {
  return (
    <div className={`px-2 py-1 rounded-2xl bg-[#5B8C51] text-white w-fit mb-6 ${className}`}>{text}</div>
  )
}

export default Tag