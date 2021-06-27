export default function callbackSample() {
  const url = 'https://api.github.com/users/DatchLive'

  const fetchProfire = () => {
    return fetch(url)
      .then((res) => {
        res
          .json()
          .then((json) => {
            console.log('Asynchronous Callback Sample 1', json)
            return json
          })
          .catch((error) => {
            console.error
          })
      })
      .catch((error) => {
        console.error
      })
  }

  const profile = fetchProfire()
  console.log('Asynchronous Callback Sample 2', profile)
}
