console.log('Hola JS')

// Tipos de datos primitivos
const numero = 399 // Number
const cadena = 'Victor' // String
const esMayor = true // Boolean

// Arrays

// Un arreglo tiene elementos a cualquier tipo de datos: cadena, números, boolean, null, arrays, objetos, etc
const arregloVacio = []
const listaDeValores = [1, 2, 3, 'Victor', 'Villazón', true]

console.log(arregloVacio)
console.log(listaDeValores)

// Lectura de los elementos de un arreglo

console.log(listaDeValores[0]) // 1
console.log(listaDeValores[4]) // Villazón
console.log(listaDeValores[5]) // true
console.log(listaDeValores[100]) // undefined

// Escritura en un arreglo
listaDeValores[2] = 99
console.log(listaDeValores)

// Insertar nuevos elementos en un arreglo

listaDeValores.push('javascript')

console.log(listaDeValores)

// Remover elementos del final del arreglo

listaDeValores.pop()

console.log(listaDeValores)

// Eliminar un elemento
listaDeValores.splice(4, 1)

console.log(listaDeValores)

// Obtener el tamaño de nuestro arreglo

console.log(listaDeValores.length)
console.log('bienvenidos'.length)

// MÉTODOS DE ARREGLOS

// Método INCLUDES, nos indica si el valor que se pasa como parámetro se encuentra en el arreglo y devuelve un
// boolean(true o false)

const languagues = ['javascript', 'php', 'python', 'C', 'C++', 'java', 'python']

console.log(languagues.includes('java'))
console.log(languagues.includes('cobol'))

// Método FILTER, nos ayuda a ubicar un elemento dentro de un arreglo usando una condición y devuleve un arreglo con
// los resultados

const resultado = languagues.filter(function (languague) {
    // return language === 'java' --> ['java']
    // return language.includes('c') --> ['javascript', 'c++']
    return languague.toLowerCase().includes('c') // ['javascript', 'C', 'c++']
})

console.log(resultado)
console.log(languagues)

// OBJETOS
/*
{
    KEY: VALUE,
    KEY: VALUE 
}
*/

const miObjetoVacio = {}

const miObjeto = {
    nombre: 'Victor',
    apellido: 'Villazón',
    colorFavorito: 'azul',
    'mi edad': 31,
    coloresFavoritos: ['rosado', 'rojo', 'azul'],
    cursos: [
        {
            nombre: 'Matemáticas',
            nota: 18
        },

        {
            nombre: 'Algoritmos',
            nota: 20
        }
    ]
}

console.log(miObjeto)

// LEER LOS CAMPOS DE UN OBJETO

console.log(miObjeto.nombre) // Victor
console.log(miObjeto.apellido) // Villazón
console.log(miObjeto.edad) // undefined

// console.log(miObjeto.mi edad) BAD X - Uncaught SyntaxError: missing after argument list
console.log(miObjeto['mi edad']) // OK

console.log(miObjeto.coloresFavoritos)
console.log(miObjeto.coloresFavoritos[2])

console.log(miObjeto.cursos)
console.log(miObjeto.cursos[1].nombre)
console.log(miObjeto.cursos[1]['nota'])
console.log(miObjeto.cursos[1].nota)

// ELIMINAR PROPIEDADES DE UN OBJETO

console.log(miObjeto)
delete miObjeto.colorFavorito
console.log(miObjeto)

// INSERTAR UNA NUEVA PROPIEDAD A UN OBJETO

miObjeto.platoFavorito = "Ceviche de conchas Negras"
miObjeto['juegos favoritos'] = ['Crash Team Racing', 'Mario', 'Minecraft']

console.log(miObjeto)

// DESTRUCTURING

// Una forma de extraer las propiedades/elementos de un objeto a un arreglo en variables

// DESTRUCTURING PARA OBJETOS

const nombreValue = miObjeto.nombre
const apellidoValue = miObjeto.apellido
const cursosValue = miObjeto.cursos

console.log(nombreValue, apellidoValue, cursosValue)

const { nombre, apellido, coloresFavoritos} = miObjeto

console.log(nombre, apellido, coloresFavoritos)

const {nombre: nombreValor, apellido: apellidoValor} = miObjeto

// DESTRUCTURING PARA ARREGLOS


const amigos = ['laura', 'edison', 'abel', 'irvin', 'brayan']

const [amigo1, amigo2, , , amigo3] = amigos

console.log(amigo1, amigo2, amigo3)

// SPREAD OPERATOS (operador ...)
// Extrae propiedades de un objeto/arreglo para reutilizar en otros objetos/arreglos

const producto = {
    nombre: 'Laptop',
    precio: 6800,
    categoria: 'tech'
}

const cliente = {
    nombre: 'Laura',
    isVip: true
}

console.log(producto + cliente) // [object Objetc][object Object] X
const nuevoObjeto = { ...producto, ...cliente }

console.log(nuevoObjeto)

// SPREAD OPERATOR EVITANDO COLISIONES

const nuevoObjetoSinColisiones = {
  producto: { ...producto },
  cliente: { ...cliente },
}

console.log(nuevoObjetoSinColisiones)

// OTROS MÉTODOS DE OBJETOS

console.log(Object.keys(producto)) // Obtenemos solo las claves(keys) del objeto
console.log(Object.values(producto)) // Obtenemos solo los valores(values) del objeto
console.log(Object.entries(producto)) // Convertimos un objeto en arreglo

