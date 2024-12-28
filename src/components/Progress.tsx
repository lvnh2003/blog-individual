import React, { useEffect, useState } from 'react'

interface ProgressProps {
  value: number
  className?: string
  title? : string
}

export default function Progress({ value, className = '' , title= 'Hello World'}: ProgressProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(value)
    }, 1000)

    return () => clearTimeout(timer)
  }, [value])

  return (
    <div 
      className={`relative w-full h-6 rounded bg-gray-200 overflow-hidden ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div 
        className="h-full bg-black transition-all rounded duration-500 ease-out relative text-white text-sm"
        style={{ width: `${width}%` }}
      >
        <span className='absolute left-2 top-1/2 -translate-y-1/2'>
          {title}
        </span>
        <span className='absolute right-2 top-1/2 -translate-y-1/2'>
          {value}%
        </span>
      </div>
    </div>
  )
}
