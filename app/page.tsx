"use client"

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constants'
import { FilterProps, HomeProps } from '@/types'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home({ searchParams }: HomeProps) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  })

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className='home__text'>
          <h1 className='text-4xl font-extrabold'>Catalógo de Carros</h1>
          <p>Aqui algumas opções que você deve gostar</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>

          {!isDataEmpty ? (
            <section className='w-full'>
              <div className='home__cars-wrapper'>
                {allCars?.map((car) => (
                  <CarCard car={car} />
                ))}
              </div>

              <ShowMore pageNumber={(searchParams.limit || 10 ) / 10} isNext={(searchParams.limit || 10) > allCars.length}  />
            </section>
          ) : (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Opss... não encontramos!</h2>
              <p>{allCars?.message}</p>
            </div>
           )}

        </div>
      </div>
    </main>
  )
}
