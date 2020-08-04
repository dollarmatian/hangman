const getPuzzle = async (wordCount) => {
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get puzzle')
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation()
  return getCountry(location.country)
}

const getCountry = async (countryCode) => {
  const response = await fetch('//restcountries.eu/rest/v2/all/')

  if (response.status === 200) {
    const data = await response.json()
    return data.find((country) => country.alpha2Code === countryCode)
  } else {
    throw new Error('Unable to get Country data')
  }
}




//http://ipinfo.io/json?token=ed3cace3e25be0

const getLocation = async () => {
  const response = await fetch('//ipinfo.io/json?token=ed3cace3e25be0')

  if (response.status === 200) {
    const data = await response.json()
    return data
  } else {
    throw new Error('Could not find location data')
  }
}
export { getPuzzle as default }