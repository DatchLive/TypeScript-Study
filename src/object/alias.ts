export default function typeAliasSample() {
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object alias sample 1:', japan)

  const america: Country = {
    capital: 'Washinton, D.C',
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object alias sample 2:', america)

  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  //合併型：Knight または Wizardの型をもつ
  type Adventurer = Knight | Wizard

  //合併型：Knight かつ Wizardの型をもつ
  type Paladin = Knight & Wizard

  const adventure1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '3連キリ',
  }

  const adventure2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイヤーボール',
  }

  console.log('Object alias sample 3:', adventure1)
  console.log('Object alias sample 4:', adventure2)

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 50,
    weapon: '木の剣',
    swordSkill: '3連キリ',
    magicSkill: 'ファイヤーボール',
  }

  console.log('Object alias sample 5:', paladin)
}
