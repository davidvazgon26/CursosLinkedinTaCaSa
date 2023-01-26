# Pasos para construir mi aplicacion React sin usar create-reat-app

* Primero crear una carpeta que contendra nuestro proyecto
* Dentro de esta direccion correr el comando npm init -y para iniciar el proyecto
* Puedes si asi lo deseas correr git init para darle seguimiento a tu codigo con el versionador de git
* lo anterior te creara el archivo package.json que lleva el control de nuestras dependencias
* Ahora hay que crear las carpetas public y src en la raiz del proyecto
* dentro de public va index.html con la plantilla basica de un archivo html mas:
  * la etiqueta noscript
  * la etiqueta de script con la ruta en el src de "../dist/bundle.js" // Pendiente de crear esta ruta.
  * La etiqueta dentro del body donde se inyectara nuestro componente principal que es:
    `<div id="root"></div>`
* Correr el siguiente comando en la linea de comandos:

  ```
   npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
  ```

* Crear en raiz el archivo .babel con la siguiente configuracion dentro:
        {
             "presets":["@babel/preset-env", "@babel/preset-react"]
        }

* Ahora dentro del folder src crear tres archivos:
  * index.js
  * App.js 
  * App.css

      Dentro de App.css va poco codigo, solo para dar algo de estilo al componente:

      ```
      .App{
      margin: 1rem;
      font-family: Arial, Helvetica, sans-serif;
      color: #222222;
      }
      ```

      App.js seria nuestro primer componente y puede llevar solo lo basico de un componente por el momento:

      ```
          import React from 'react';
          import './App.css';

          const App =()=>(
              <div className='App'>
                  <h1>Hola Putos!!!!</h1>
              </div>
          )

          export default App;
      ```

      Por ultimo el codigo minimo para cargar el componente o inyectar el componente a nuestra pagina que debe ir en index.js:

      ```
          import React from 'react';
          import ReactDom from 'react-dom';
          import App from './App.js';

          ReactDom.render(<App/>, document.getElementById('root'));
      ```


      * Ahora para probar nuestro codigo debemos instalar webpack y configurarlo...

          * Necesitamos instalarlo desde consola con el siguiente comando:


              ```
              npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
              ```

          * Puedes validar en package.json si se cargaron correctamente las dependencias
          * Debes crear la configuracion en el archivo webpack.config.js en la raiz del proyecto.

            Este es el codigo: 

          ```
              const path = require("path");

                const { webpack } = require("webpack");

                module.exports = {
                entry: "./src/index.js", // punto de entrada de nuestra aplicación
                module: {
                rules: [
                // reglas para los módulos (loaders)
                {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader", // usamos babel-loader para los archivos .js, excluyendo la carpeta node_modules
                options: { presets: ["@babel/env"] },
                },
                {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                },
                ],
                },
                resolve: { extensions: ["*", ".js", "jsx"] },
                output: {
                path: path.resolve(**dirname, "dist"), // directorio donde se generará el bundle final
                publicPath: "/dist/",
                filename: "bundle.js", // nombre del archivo final generado
                },
                devServer: {
                contentBase: path.join(**dirname, "public/"),
                port: 3000,
                publicPath: "http://localhost:3000/dist/",
                hotOnly: true,
                },
                plugins: [new webpack.HotModuleReplacementPlugin()],
                };

        ```

        ## Nota, si estas trabajando con versiones de Webpack 4 o superiores, esta ultima parte de configuracion de webpack cambio, debes ir a la documentacion.

        * Ahora corrremos en consola el siguiente comando para confirmar que todo quedo configurado correctamente:

        ```
            npx webpack-dev-server --mode development
        ```
