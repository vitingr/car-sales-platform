"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

// && significa se existir!

const CustomButton = ({ title, containerStyles, textStyles, rightIcon, isOpen, handleClick, btnType }: CustomButtonProps) => {
  return (
    <button disabled={false} type={btnType || "button"} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image src={rightIcon} className='object-contain' alt='right icon' fill />
        </div>
      )}
    </button>
  )
}

export default CustomButton