# prueba-accenture
He propuesto este proyecto como solución a la práctica técnica solicitada.
## Arranque
### Frontend
Para arrancar el frontend debemos situarnos en la carpeta "frontend" y ejecutar:
```npm
npm i
```
Una vez se hayan añadido los paquetes correspondientes, arrancamos el servidor con:
```npm
npm start
```
### Backend
Al igual que en el frontend debemos colocarnos en la carpeta "backend" y ejecutar el comando
```npm
npm i
```
y posteriormente arrancamos el servidor con:
```npm
npm start
```
Una vez arrancado, nos pedirá la contraseña para la base de datos. Debemos introducir la contraseña que se ha enviado en el correo.
### BBDD
La base de datos ya está arrancada en un servidor remoto.
## Distribución
### Frontend
Frontend basado en react. Tiene la siguiente apariencia:
![imagen](https://user-images.githubusercontent.com/32396486/196051194-91d7936f-9848-4d01-9ede-3270e5aec7e3.png)
Al hacer click muestra la "punchline" del chiste, y al volver a hacer click cambia el chiste. Tiene una tarjeta centrada donde se muestra todo el texto, y un par de animaciones al llegar un nuevo chiste y al mostrar la punchline. 
Posee también una pequeña animación para mostrar mientras se carga el chiste.
#### Conexión base de datos
La conexión a la base de datos se realiza a través del paquete "axios".

![imagen](https://user-images.githubusercontent.com/32396486/196051537-bde0573d-720b-4c3e-9b57-c6359ff94c2e.png)

A través de este cliente, accedemos a la url y puerto que queramos (se puede configurar en otro archivo) y posteriormente se llamará las peticiones desde el componente correspondiente.

![imagen](https://user-images.githubusercontent.com/32396486/196051518-2ace6c71-b503-4331-8a10-d5d188a0d2b4.png)

Aquí podemos comprobar como actúa estas llamadas. Si ya hay datos simplemente los recibe, si no hace un post a la url del backend para solicitar que cargue los datos a la base de datos.
### Backend
El backend está montado en nodeJS. Tiene una estructura de api muy básica basada en el framework express. Permite las peticiones de la ruta /jokes para comunicarse con el frontend. 

![imagen](https://user-images.githubusercontent.com/32396486/196053102-3576ce59-afca-43e8-9e0e-d2d193d2cf85.png)

Se puede acceder a peticiones get y post para esa url. La petición get obtiene un chiste aleatorio de la base de datos y la petición post crea los datos a partir del json aportado. También hay una petición delete pero solo se usa de forma privada por si se necesita vaciar la bbdd.

### BBDD
La base de datos está escrita en mongodb. El acceso se realiza a través de mongoose (nodejs).

![imagen](https://user-images.githubusercontent.com/32396486/196053252-bb127bfb-b09f-410b-bb31-13146733cf41.png)

Se crea un schema y a través de la api de mongoose se realizan operaciones sobre dicho schema.
