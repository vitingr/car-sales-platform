export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'f49ffbe1e0mshb15f864bc7950dfp1bd9d4jsn3c9e485cf4e1',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`, {
    headers: headers,
  })

  const result = await response.json()
  
  return result
}