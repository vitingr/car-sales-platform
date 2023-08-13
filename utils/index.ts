import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {

  const {manufacturer, model, limit, fuel, year} = filters

  const headers = {
    'X-RapidAPI-Key': 'f49ffbe1e0mshb15f864bc7950dfp1bd9d4jsn3c9e485cf4e1',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
    headers: headers,
  })

  const result = await response.json()
  
  return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const calculateConsumo = (city_mpg: number) => { 
  const result = city_mpg * 0.425143707
  return parseFloat(result.toFixed(2))
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL(`https://cdn.imagin.studio/getImage`)
  
  const {make, year, model} = car

  url.searchParams.append('customer', 'hrjavascript-mastery')

  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  url.searchParams.append('angle', `${angle}`)

  return `${url}`
}