// HECHO CON JS
// const ERROR_TYPES = {
//   NOT_FOUND: 'notFound',
//   UNAUTHORIZED: 'unauthorized',
//   FORBIDDEN: 'forbidden'
// }

// function mostrarMensaje(tipoDeError) {
//   if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
//     console.log('No se encuentra el recurso')

//   } else if(tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
//     console.log('No tienes permisos para acceder')

//   } else if(tipoDeError === ERROR_TYPES.FORBIDDEN) {
//     console.log('No tienes permisos para acceder');
//   }
// }

//HECHO CON TS 
// const enum ERROR_TYPES {
//   NOT_FOUND = 'notFound',
//   UNAUTHORIZED = 'unauthorized',
//   FORBIDDEN = 'forbidden'
// }

// function mostrarMensaje(tipoDeError: ERROR_TYPES) {
//   if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
//     console.log('No se encuentra el recurso')

//   } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
//     console.log('No tienes permisos para acceder')

//   } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
//     console.log('No tienes permisos para acceder')
//   }
// }


// Aserciones de tipos
// const canvas = document.getElementById('canvas') as HTMLCanvasElement

// const context = canvas.getContext('2d')

// otra forma
// const canvas = document.getElementById('canvas')

// if(canvas != null) {
//   const context = (canvas as HTMLCanvasElement).getContext('2d')
// }

// otra forma
// const canvas = document.getElementById('canvas')

// // es inferencia -> ts se da cuenta que dentro del if
// // ya solo el canvas va a poder ser un HTMLCanvasElement
// if(canvas instanceof HTMLCanvasElement) {
//   const context = canvas.getContext('2d')
// }


// fetching de datos en ts
// const API_URL = "https://api.breakingbadquotes.xyz/v1/quotes/5"
// const response = await fetch(API_URL)

// if(!response.ok) {
//   throw new Error('request failed')
// }

// import * as z from "zod";


// export const WelcomeElementSchema = z.object({
//     "quote": z.string(),
//     "author": z.string(),
// });
// export type WelcomeElement = z.infer<typeof WelcomeElementSchema>;


// const data = await response.json() as Welcome

// data.author.map(author => {
//   return { 
//     name: author.charCodeAt()
//   }
// })


// interfaces
// type Heroe = { -> con type
//   id: string
//   name: string
//   age: number
// }

// interface Heroe { -> con interface
//   id: string
//   name: string
//   age: number
//   saludar: () => void
// }

// const heroe: Heroe = {
//   id: '1',
//   name: 'aaaa',
//   age: 123,
//   saludar: () => {}
// }

// interfaces anidadas
// interface Producto {
//   id: number
//   nombre: string
//   precio: number
//   quantity: number
// }

// interface Zapatilla extends Producto {
//   talla: number
// }

// interface CarritoDeCompras {
//   totalPrice: number
//   productos: (Producto | Zapatilla)[]
// }

// interface CarritoOps { -> forma 1
//   add: (product: Producto) => void,
//   remove: (id: number) => void,
//   clear: () => void
// }

// interface CarritoOps {
//   add(product: Producto): void,
//   remove(id: number): void,
// }

// interface CarritoOps {
//   clear(): void
// }

// const carrito: CarritoDeCompras = {
//   totalPrice: 9000,
//   productos: [
//     {
//       id: 1,
//       nombre: 'producto 1',
//       precio: 90,
//       quantity: 1,
//       talla: 12
//     }
//   ]
// }


// interface CarritoOps {
//   add(product: Producto): void,
//   remove(id: number): void,
// }

// interface CarritoOps {
//   clear(): void
// }

// const ops: CarritoOps = {
//   add: (product: Producto) => {},
//   remove: (id: number) => {},
//   clear: () => {},
// }


// narrowing
// function mostrarLongitud(lon: number | string) {

//   if(typeof lon === 'string') return lon.length

//   return lon.toString().length
// }

// mostrarLongitud(1)


// interface Mario {
//   company: 'Nintendo'
//   nombre: string
//   saltar:  () => void
// }

// interface Sonic {
//   company: 'Sega'
//   nombre: string
//   correr: () => void
// }

// type Personaje = Mario | Sonic

// function jugar(personaje: Personaje) {
//   if(personaje.company === 'Nintendo') personaje.saltar
//   if(personaje.company === 'Sega') personaje.correr
// }


// interface Mario {
//   nombre: string
//   saltar: () => void
// }

// interface Sonic {
//   nombre: string
//   correr: () => void
// }

// type Personaje = Mario | Sonic

// // type guard -> hay que evitarlos
// function checkIsSonic(personaje: Personaje): personaje is Sonic {
//   return (personaje as Sonic).correr !== undefined
// }

// function jugar(personaje: Personaje) {
//   if (checkIsSonic(personaje)) {
//     personaje.correr()
//     return
//   } else {
//     personaje.saltar()
//     return
//   }
// }


// never
// function fn(x: string | number) {
//   if(typeof x === 'string'){
//     // do something
//     x.toLowerCase()
//   } else if(typeof x === 'number') {
//     // do something
//     x.toString()
//   } else {
//     x -> never
//   }
// }


import { type IAvenger } from './types.d';

class Avenger implements Avenger {
  name: string
  powerScore: number
  wonBattles: number
  age: number

  constructor(name: string, powerScore: number) {
    this.name = name
    this.powerScore = powerScore
  }

  get fullName() {
    return `${this.name}, de poder ${this.powerScore}`
  }

  set power(newPower: number) {
    if(newPower <= 100) {
      this.powerScore = newPower
    } else {
      throw new Error('Power score cannot be more than 100')
    }
  }
}

const avenger = new Avenger('miles', 90)
avenger.name = 'hola'