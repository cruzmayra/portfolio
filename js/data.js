const projects = [
  {
    id:'/venus-ecommerce',
    name: 'Venus e-commerce',
    image: 'assets/images/venus-02.jpg',
    description: 'E-commerce dirigo a mujeres jóvenes que disfrutan de un estilo en tendencia así como de las prendas sencillas y cómodas. Proyecto colaborativo que aprovecha el uso de la técnica SPA para proveer una interfaz sencilla e intuitiva, permite al usuario saber siempre en que sección se encuentra gracias al uso del routing. Aprovecha el uso de API para ofrecer una extensa variedad de productos (Etsy) y un método de pago sencillo (PayPal).',
    type: 'E-commerce',
    do: 'Creación de carrito de compras utilizando local Storage y manejo de routing.',
    technology:'API, SPA, JS, Firebase, Materialize',
    demo: 'https://cruzmayra.github.io/venus-e-commerce/',
    code: 'https://github.com/CruzMayra/venus-e-commerce'
  },
  {
    id:'pokedex',
    name: 'Pokédex',
    image: 'assets/images/pokeapi-02.png',
    description: 'Aplicación que emula la enciclopedia virtual que los entrenadores llevan consigo en la serie, para consultar las fichas de las diversas especies Pokémon. Proyecto individual que hace uso de una GrahpQL API para realizar una sola petición por medio de jQuery. Aprovecha el manejo del DOM para crear de manera dinámina los modales con la información particular de cada pokémon.',
    type: 'Ejercicio práctico del consumo de una API',
    do: 'Consumo de API y manejo del DOM con jQuery.',
    technology: 'API, jQuery, DOM',
    demo: 'https://cruzmayra.github.io/pokedex/',
    code: 'https://github.com/CruzMayra/pokedex'
  },
  {
    id: 'ticket',
    name: 'Ticket-hack',
    image: 'assets/images/phone-ticket-01.jpg',
    description: 'Plataforma que busca ofrecer un espacio para el intercambio de boletos, principalmente para conciertos, desde una comunidad segura y confiable. Ticket-hack es un proyecto colaborativo realizado durante la hackatón interna de Laboratoria. Utiliza Firebase como medio de autentificación e identificación del usuario. Hace uso de la API de Ticketmaster para mostrar los eventos más próximos en la ciudad.',
    type: 'Red social',
    do: 'Autentificación de usuario, creación de base de datos de usuarios y publicaciones en Firebase.',
    technology: 'API, Firebase, Database',
    demo: 'https://cruzmayra.github.io/ticket-hack/',
    code: 'https://github.com/CruzMayra/ticket-hack'
  },
  {
    id: 'scribere',
    name: 'Scribere: Write free, be free!!!',
    image: 'assets/images/network-02.jpg',
    description: 'Red social para los entusiastas de la escritura. Scribere permite al usuario crear sus propias historias, leer las aportaciones de otros usuarios y guardar como favoritas aquellas historias que más lo impactaron. Proyecto colaborativo que utiliza el feedback de los usuarios para su creación a fin de satisfacer sus necesidades. Scribere también hace uso de Firebase como medio de autentificación e identificación de los usuarios.',
    type: 'Red social',
    do: 'Autentificación de usuario, creación de base de datos de usuarios e interactividad de publicaciones.',
    technology: 'Social network, Firebase, Bootstrap',
    demo: 'https://cruzmayra.github.io/scribere-social-network/',
    code: 'https://github.com/CruzMayra/scribere-social-network'
  },
  {
    id: 'labcar',
    name: 'LabCar',
    image: 'assets/images/lc-01.png',
    description: 'Proyecto individual que replica la página de Lab-Car con la utilización, en ese momento, por primera vez de un framework (Bootstrap) y la aplicación del responsive design.',
    type: 'Práctica con framework de CSS',
    do: 'Maquetación del sitio utilizando Bootstrap',
    technology: 'Responsive, Bootstrap, Google API',
    demo: 'https://cruzmayra.github.io/lab-car-boilerplate/',
    code: 'https://github.com/CruzMayra/lab-car-boilerplate'
  }
];