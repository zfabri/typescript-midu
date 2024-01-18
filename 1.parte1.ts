// inferencia
// como a y b infiere que son NUMBER sin decirle nada
// const a = 1
// const b = 2
// const c = a + b -> c tambien sera number


// cadena de texto
// let cadenaDeTexto = 'hola'
// cadenaDeTexto.charAt ❌
// cadenaDeTexto = 2 ❌


// any
// let obj: any = { x: 0 }
// obj -> no muetra las sugerencias


// funciones
// function saludar(name: string) {
//   console.log(`hola ${name}`)
// }

// saludar('pepe')
// saludar(2)


// funciones - FORMA 1
// function saludar({ name, age }: { name: string, age: number }) {
//   console.log(`hola ${name}, tienes ${age}`)
// }

// saludar({ name: 9, age: 'pepe' })

// FORMA 2
// function saludar(persona: { name: string, age: number }) {
//   const { name, age } = persona
//   console.log(`hola ${name}, tienes ${age}`)
// }

// saludar({ name: 'pepe', age: 2 })

// FORMA 3
// function saludar(persona: { name: string, age: number }): string {
//   const { name, age } = persona
//   console.log(`hola ${name}, tienes ${age}`)

//   return age
// }

// let username: string
// username = saludar({ name: 'pepe', age: 2 })


// PASAR UNA FUNCION POR ARGUMENTO
// const sayHiFromFunction = (fn: (name: string) => void) => {
//   return fn('pepe')
// }

// const hi = (name: string) => {
//   console.log(`hola ${name}`);
// }

// sayHiFromFunction(hi)


// TIPAR ARROW FUNCTIONS
// FORMA 1
// const sumar = (a: number, b: number): number => {
//   return a + b
// }

// FORMA 2
// const restar: (a: number, b: number) => number = (a, b) => {
//   return a - b
// }


// never -> nunca va a hacer un return o devolver nada
// function throwError(message: string): never {
//   throw new Error(message)
// }

// void -> da igual lo que retorne
// function logMessage(message: string): void {
//   console.log(message)
// }


// inferencia funciones anonimas segun el contexto
// const arr = ['a', 'b', 'c', 'd']

// arr.forEach(i => {
//   console.log(i.toUpperCase())
// })


// objetos
// let hero = {
//   name: 'ana',
//   age: 90
// }

// function createHero(name: string, age: number) {
//   return {
//     name, age
//   }
// }

// const thor = createHero('thor', 9000)


// type alias
// type Hero = {
//   name: string
//   age: number
// }

// let hero: Hero = {
//   name: 'ana',
//   age: 90
// }

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero
  
//   return { name, age }
// }

// const thor = createHero({ name: 'thor', age: 9000})


// optional properties
// type Hero = {
//   readonly id?: string
//   name: string
//   age: number
//   isActive?: boolean
// }

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero
  
//   return { 
//     id: crypto.randomUUID(), 
//     name, 
//     age, 
//     isActive: true }
// }

// const thor = createHero({ name: 'thor', age: 9000})
// console.log(thor.isActive) // -> true
// thor.id?.toString()


// template union types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`

// type Hero = {
//   readonly id?: HeroId
//   name: string
//   age: number
//   isActive?: boolean
// }

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero
  
//   return { 
//     id: crypto.randomUUID(), 
//     name, 
//     age, 
//     isActive: true }
// }

// const thor = createHero({ name: 'thor', age: 9000})


// template union types
// type HexadecimalColor = `#${string}`

// const color = '009900' // hexadecimales
// const color2: HexadecimalColor = '#003300'


// union types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent'

// const enableAnimationDuration: boolean | number  = 400 // 500ms

// type Hero = {
//   readonly id?: HeroId
//   name: string
//   age: number
//   isActive?: boolean
//   powerScale?: HeroPowerScale
// }

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero
  
//   return { 
//     id: crypto.randomUUID(), 
//     name, 
//     age, 
//     isActive: true }
// }

// const thor = createHero({ name: 'thor', age: 9000})
// thor.powerScale = 'omnipresent'


// intersection types
// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent'
// // const enableAnimationDuration: boolean | number  = 400 // 500ms

// type HeroBasicInfo = {
//   name: string
//   age: number
// }

// type HeroProperties = {
//   readonly id?: HeroId
//   isActive?: boolean
//   powerScale?: HeroPowerScale
// }

// type Hero = HeroBasicInfo & HeroProperties

// function createHero(input: HeroBasicInfo): Hero {
//   const { name, age } = input
  
//   return { 
//     id: crypto.randomUUID(), 
//     name, 
//     age, 
//     isActive: true }
// }

// const thor = createHero({ name: 'thor', age: 9000})
// thor.powerScale = 'omnipresent'


// type indexing
// type HeroProperties = {
//   isActive: boolean
//   address: {
//     planet: string
//     city: string
//   }
// }

// const addressHero: HeroProperties['address'] = {
//   planet: 'earth',
//   city: 'Madrid'
// }


// type from value
// const address = {
//   planet: 'earth',
//   city: 'madrid'
// }

// type Address = typeof address // typeof -> permite crear tipos a partir de codigo que ya tenga

// const addressTwith: Address = {
//   planet: 'mars',
//   city: 'twitch'
// }


// type from function return
// function createAddress() {
//   return { planet: 'a', city: 'b' }
// }

// type Address = ReturnType<typeof createAddress>


// arrays
// const languages: Array<string> = []
// const languages: string[] = []
// const languages: (string | number)[] = []

// languages.push('a')


/** TUPLA
 * [
 *  ['X', '0', 'X']
 *  ['X', '0', 'X']
 *  ['X', '', 'X']
 * ]
 */

// type CellValue = 'X' | '0' | '' 

// type GameBoard = [
//   [CellValue, CellValue, CellValue],
//   [CellValue, CellValue, CellValue],
//   [CellValue, CellValue, CellValue]
// ]

// const gameBoard: GameBoard = [
//   ['X', '0', 'X'],
//   ['X', '0', 'X'],
//   ['X', '', 'X']
// ]

// Otro ejemplo de tupla
// type State = [ string, (newName: string) => void ]

// const [hero, setHero]: State = useState('thor')


// Otro ejemplo 
// type RGB = [number, number, number]
// const RGB = [255, 255, 0] // 0 -> 255