export default function tupleSample() {
  let response: [number, string] = [200, 'OK']
  // response = [400,"Bad Request", "Email parameter is missing"]
  // response = ['400', 'Bad Request']
  console.log('Array tuple sample 1:', response)

  const girlFriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
  girlFriends.push('Misa')
  console.log('Array tuple sample 2:', girlFriends)
}
