# URL Shortener
Un acortador de URL puede sonar sencillo, pero en casos de uso masivo y forma de "hash" de las URL puede ser costoso y debe ser planeado con cuidado
Este tipo de proyectos, desde el lado más técnico suele preguntarse en entrevistas técnicas de sistemas de diseño por temas de escalabilidad, tiempo y rendimiento.

## Objetivo
1. Proponer la cantidad de caracteres que tendrá cada URL hash -> Done
2. Proponer un algoritmo que realice el proceso de hash que nos permita acortar URL's. Considerar cuanto es el espacio que tomaría hacer n cantidad de URL's -> Done
3. Elegir una tecnología de caché y justificar (si se usa) -> Done
4. Elegir una base de datos apropiada y justificar -> Done
5. Explicar forma de redirección al cliente al sitio web original que contiene la shortned url y justificar -> Done
6. Realizar un frontend básico, que utilice este repositorio como backend implementando un balanceador de carga entre ambas partes -> Done
7. El backend deberá estar siempre disponible, de lo contrario, todos los enlaces acortados no tendrán utilidad -> Done

## Extra
1. Proponer un mecanismo de seguridad para garantizar que no se está acortando una URL maliciosa.
2. Implementar un cron (diario) que verifique que enlaces redirigen a lugares que ya no existen y eliminarlos -> Considere utilizar microservicios.
3. Eliminar los links luego de un cierto tiempo -> ¿Elegirías nativamente desde la base de datos o un cron? 
   
