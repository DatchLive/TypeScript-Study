export default function objectSample() {
  const a: object = {
    name: 'datch',
    age: 28,
  }
  // a.name

  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object object sample 2:', country)

  const datch: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: 'Honda',
    firstName: 'Kohei',
  }
  datch.gender = 'male'
  datch.lastName = 'Nissan'
  // datch.firstName = "yohei"

  console.log('Object object sample 3:', datch)

  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }
  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object object sample 4:', capitals)
}
