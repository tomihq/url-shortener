
# Solución

## Dominio

Los dominios de los acortadores de URL deben ser lo más corto posibles.

Algunas técnicas para buenos dominios son:

1. Usar un dominio con dos letras, ej: .ly, .io, .xy

2. Eliminar las vocales del nombre de tu compañia

3. Todo caracter importa, la cantidad de caracteres del dominio debería ser no más de 8 caracteres. Ej: xxxxxx.yyy no vale pues la suma da 10.

Ej: xxxx.yy vale pues la suma da 7.

  
## Base de datos

MongoDB es una muy buena opción para insertar información y leerla continuamente además de que es increíblemente escalable horizontalmente y es poco "rígida" en cuanto a la estructura de la información que almacenaremos y nos da la flexibilidad que necesitamos.

  

### Eliminar URL's luego de un tiempo establecido

No se optará por un CRON porque un CRONJob es un proceso que se ejecuta cada cierto periodo de tiempo. Es posible, que cuando se ejecute el CRON se eliminen 1, 2, 3 URL's pero, ¿qué sucede si el cron se ejecuta cada día y una URL es considerada a expirar justo un minuto luego de haberse ejecutado el CRON? La URL estaría teóricamente obsoleta.

Por lo tanto, la eliminación de la URL se hará desde un control en la base de datos.

  

### Estructura básica de un documento de la colección urls

{

url: https + Dominio + Tendrá una secuencia de 8 caracteres única -> 1 o 2 byte por caracter. Aprox: 20 bytes.

createdAt: Internamente, las fechas en Mongo representan un número entero de 64 bits -> 8 bytes.

expiration_length: Internamente, las fechas en Mongo representan un número entero de 64 bits -> 8 bytes.

}

 
## Proceso de Hashing ¿Qué sistema usar?

Tenemos que considerar qué vamos a utilizar en la URL.

¿Números? ¿Caracteres (sin incluir números)?

Vayamos al Álgebra, precisamente combinatoria y funciones. Cuantas más opciones tengamos en cada "casillero" habrá más posibilidades de conseguir un hash único.

Ej: Si tengo _ _ _ _ y solo puedo colocar 10 números (1 al 10), tengo 10 * 10 * 10 * 10 posibilidades. 4 en el dominio deben ir a alguno de los 10 en el codominio.

Ej2: Si puedo colocar 10 números, 26 minusculas tengo: 36 * 36 * 36 * 36 posibilidades. 4 en el dominio deben ir a alguno de los 36 en el codominio.

Ej3: Si puedo colocar 10 números, 26 minúsculas y 26 mayúsculas tengo: 62 * 62 * 62 * 62 posibilidades. 4 en el dominio que deben ir al codominio que tiene 62 valores, entonces de aquí sale 62^4 posibilidades.

Es útil saber esto, porque la exponencial no sale de la nada misma, sino que es la cantidad de funciones que están definidas con los conjuntos f:{1, 2, 3, 4} y g:{0, 1, 2, ..., Z}.

Entonces, lo que podemos utilizar acá es base62. 

## Stack
Usaré node.js por comodidad pero puede optarse por usar cualquier tecnología capaz de manejar solicitudes HTTP eficazmente.

## Paquetes
uuid-base62