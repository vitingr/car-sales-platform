"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButton } from '.'

const Hero = () => {

  const handleScroll = () => {

  }

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Compre seu veículo — Rápido e Fácil</h1>

        <p className='hero__subtitle'>
          Simplifique sua experiência de compra de carros com nossa plataforma
        </p>

        <CustomButton title="Ver opções" containerStyles="bg-primary-blue text-white rounded-full mt-10" handleClick={handleScroll} />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/hero.png" alt='hero' fill className='object-contain' />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero