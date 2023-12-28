# Solución

## Dominio
Los dominios de los acortadores de URL deben ser lo más corto posibles.
Algunas técnicas para buenos dominios son:
1. Usar un dominio con dos letras, ej: .ly, .io, .xy
2. Eliminar las vocales del nombre de tu compañia
3. Todo caracter importa, la cantidad de caracteres del dominio debería ser no más de 8 caracteres. Ej: xxxxxx.yyy no vale pues la suma da 10.
Ej: xxxx.yy vale pues la suma da 7.

## Base de datos
MongoDB es una muy buena opción para insertar información continuamente además de que es increíblemente escalable horizontalmente y es poco "rígida" en cuanto a la estructura de la información que almacenaremos y nos da la flexibilidad que necesitamos.

Sería ideal tener una RDBMS para poder hacer replicaciones lógicas/físicas según corresponda y la ventaja de tener una lectura más rápida pero en este ejemplo, no disponemos de una opción gratuita para usar una base de datos relacional en un hosting que sea eficaz.

Ref (Velocidad NoSQL vs SQL): https://www.mongodb.com/es/compare/mongodb-mysql#:%7E:text=observing%20some%20of%20the%20high-level%20query%20behaviors%20of%20the%20two%20systems%2C%20we%20can%20see%20that%20mysql%20is%20faster%20at%20selecting%20a%20large%20number%20of%20records%2C%20while%20mongodb%20is%20significantly%20faster%20at%20inserting%20or%20updating%20a%20large%20number%20of%20records.

### Eliminar URL's luego de un tiempo establecido
No se optará por un CRON porque un CRONJob es un proceso que se ejecuta cada cierto periodo de tiempo. Es posible, que cuando se ejecute el CRON se eliminen 1, 2, 3 URL's pero, ¿qué sucede si el cron se ejecuta cada día y una URL es considerada a expirar justo un minuto luego de haberse ejecutado el CRON? La URL estaría teóricamente obsoleta.

Por lo tanto, la eliminación de la URL se hará desde un control en la base de datos y que pueda pararse en caso de un aumento de tráfico considerable.


### Estructura básica de un documento de la colección Urls
1 o 2 byte por caracter.
{
    short: https + Dominio + TLD + hash Tendrá una secuencia de 7 caracteres única -> Aprox: 5 + 8 (worst case) + 7 = 20 bytes.
    long: 2000 bytes (worst case).
    createdAt: Internamente, las fechas en Mongo representan un número entero de 64 bits -> 8 bytes.
    lastVisited: Internamente, las fechas en Mongo representan un número entero de 64 bits -> 8 bytes.
    userId: UUID -> 16 bytes.
}

Aprox: 20 + 8 + 8 + 8 + x = 44 + x

### Estructura básica de un documento de la colección Users 
{
    id: UUID -> 16 bytes,
    name,
    email,
    createdAt: Internamente, las fechas en Mongo representan un número entero de 64 bits -> 8 bytes.,
    lastLogin: Internamente, las fechas en Mongo representan un número entero de 64 bits -> 8 bytes.
}


## Proceso de Hashing ¿Qué sistema usar?
Tenemos que considerar qué vamos a utilizar en la URL.

¿Números? ¿Caracteres (sin incluir números)?

Vayamos al Álgebra, precisamente combinatoria y funciones. Cuantas más opciones tengamos en cada "casillero" habrá más posibilidades de conseguir un hash único.

Ej: Si tengo _ _ _ _ y solo puedo colocar 10 números (1 al 10), tengo 10 * 10 * 10 * 10 posibilidades. 4 en el dominio deben ir a alguno de los 10 en el codominio.

Ej2: Si puedo colocar 10 números, 26 minusculas tengo: 36 * 36 * 36 * 36 posibilidades. 4 en el dominio deben ir a alguno de los 36 en el codominio.

Ej3: Si puedo colocar 10 números, 26 minúsculas y 26 mayúsculas tengo: 62 * 62 * 62 * 62 posibilidades. 4 en el dominio que deben ir al codominio que tiene 62 valores, entonces de aquí sale 62^4 posibilidades.

Es útil saber esto, porque la exponencial no sale de la nada misma, sino que es la cantidad de funciones que están definidas con los conjuntos f:{1, 2, 3, 4} y g:{0, 1, 2, ..., Z}.


Entonces, lo que podemos utilizar acá es base62 ([0–9][a-z][A-Z]). Al tener 62 caracteres es muy poco probable que caigamos en el caso de que haya dos URL iguales. Si utilizaramos un codominio más acotado, seguramente podría haber más posibilidad de que dos URL colisionen.

### Proceso de Hashing - Descarte de MD5


### Proceso de Hashing - Descarte de UUID
Es muy largo, necesito algo que tenga menos cantidad de caracteres.

# Tráfico y Capacidad
Si tenemos muchas requests todo el tiempo para la creación es importante utilizar caché para redireccionar lo más rápido posible a las personas que están utilizando el enlace acortado.
  

## Stack
Usaré node.js por comodidad pero puede optarse por usar cualquier tecnología capaz de manejar solicitudes HTTP eficazmente.

## Paquetes