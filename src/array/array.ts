export default function arraySample() {
  const colors: string[] = ['red', 'blue']
  // const newColors = [...colors, 'yellow']

  colors.push('yellow')
  // colors.push(123)

  console.log('Array array sample 1:', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(10)
  // even.push("10")
  console.log('Array array sample 2:', even)

  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push(456)
  // ids.push(true)
  console.log('Array array sample 3:', ids)

  const generateSomeArray = () => {
    const _someArray = []
    _someArray.push(123)
    _someArray.push('ABC')
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true)
  console.log('Array array sample 4:', someArray)

  const command: readonly string[] = ['git add', 'git commit', 'git push']
  // command.push('git fetch')
  // command[2] = "git pull"
  console.log('Array array sample 5:', command)
}
