const key = '7JNU0kJOGOUV52JGFsiTBdSxWzFWIOlb'

const getcity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const qury = `?apikey=${key}&q=${city}`
    const response = await fetch(base+qury)
    const data = await response.json() ;
    return data[0]


}


const getweather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const qury = `${id}?apikey=${key}`
    const response = await fetch(base+ qury) 
    const data = await response.json();
    return data[0]
}


c