export interface Movie {
    id: number;
    name: string;
    date: string;
    description: string;
    duration: number;
    rating: number;
    tags: string[];
    relatedMovies: number[];
    favorite: boolean;
    image: string;
    module: string;
}

export const movies: Movie[] = [
    {
        id: 1,
        name: "La La Land",
        date: "25 diciembre 2016",
        description: "Un musical romántico sobre un pianista de jazz y una aspirante a actriz que buscan cumplir sus sueños en Los Ángeles.",
        duration: 128,
        rating: 8.0,
        tags: ["Musical", "Romántica", "Drama"],
        relatedMovies: [2, 3],
        favorite: true,
        image: "https://img.freepik.com/foto-gratis/vista-3d-pareja-cine-viendo-pelicula_23-2151020691.jpg",
        module: "Top Rated",
    },
    {
        id: 2,
        name: "El Pianista",
        date: "24 mayo 2002",
        description: "La vida del pianista polaco Władysław Szpilman durante la ocupación nazi en Varsovia.",
        duration: 150,
        rating: 8.5,
        tags: ["Drama", "Histórica", "Biográfica"],
        relatedMovies: [1, 4],
        favorite: false,
        image: "https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-prodigy-1578395572.jpg",
        module: "Now Playing",
    },
    {
        id: 3,
        name: "Coco",
        date: "22 noviembre 2017",
        description: "Un niño mexicano se aventura al mundo de los muertos para descubrir la historia de su familia.",
        duration: 105,
        rating: 8.5,
        tags: ["Animación", "Familiar", "Aventura"],
        relatedMovies: [1, 5],
        favorite: true,
        image: "https://i.pinimg.com/236x/11/0f/90/110f90021c15e73d06e174ab567d4242.jpg",
        module: "Popular",
    },
    {
        id: 4,
        name: "Forrest Gump",
        date: "6 julio 1994",
        description: "La historia de un hombre con un coeficiente intelectual bajo que, sin saberlo, vive los momentos clave de la historia de los EE. UU.",
        duration: 142,
        rating: 8.8,
        tags: ["Drama", "Comedia", "Inspiracional"],
        relatedMovies: [2, 6],
        favorite: true,
        image: "https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-annabelle-3-1578395572.jpg",
        module: "Top Rated",
    },
    {
        id: 5,
        name: "Avengers: Infinity War",
        date: "27 abril 2018",
        description: "Los superhéroes más poderosos de la Tierra se unen para enfrentarse a Thanos, que busca obtener todas las piedras del infinito.",
        duration: 149,
        rating: 8.4,
        tags: ["Acción", "Ciencia Ficción", "Aventura"],
        relatedMovies: [3, 6],
        favorite: false,
        image: "https://i.pinimg.com/236x/71/66/91/7166917e6541d8c7f4afbb9fd4a6276b.jpg",
        module: "Popular",
    },
    {
        id: 6,
        name: "Jurassic Park",
        date: "11 junio 1993",
        description: "Un parque temático con dinosaurios clonados se convierte en una trampa mortal cuando los animales escapan.",
        duration: 127,
        rating: 8.1,
        tags: ["Ciencia Ficción", "Aventura", "Acción"],
        relatedMovies: [4, 5],
        favorite: true,
        image: "https://img.freepik.com/foto-gratis/renderizacion-3d-bocadillos-palomitas-maiz-peliculas_23-2151169450.jpg",
        module: "Upcoming",
    },
    {
        id: 7,
        name: "El Secreto de Sus Ojos",
        date: "13 agosto 2009",
        description: "Un escritor y ex empleado judicial reabre el caso de un asesinato no resuelto que le dejó huellas en su vida.",
        duration: 129,
        rating: 8.2,
        tags: ["Suspenso", "Crimen", "Drama"],
        relatedMovies: [6, 8],
        favorite: false,
        image: "https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-cementerio-animales-1578395574.jpg",
        module: "Top Rated",
    },
    {
        id: 8,
        name: "Gladiador",
        date: "5 mayo 2000",
        description: "Un general romano es traicionado y se convierte en gladiador buscando venganza contra el emperador corrupto.",
        duration: 155,
        rating: 8.5,
        tags: ["Acción", "Aventura", "Drama"],
        relatedMovies: [7, 9],
        favorite: true,
        image: "https://www.lavanguardia.com/peliculas-series/images/movie/poster/2024/11/w1280/f4voSsbPTvaQwicwd1dyxICow6c.jpg",
        module: "Popular",
    },
    {
        id: 9,
        name: "Interstellar",
        date: "5 noviembre 2014",
        description: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
        duration: 169,
        rating: 8.6,
        tags: ["Ciencia Ficción", "Drama", "Aventura"],
        relatedMovies: [8, 10],
        favorite: true,
        image: "https://hips.hearstapps.com/hmg-prod/images/cruella-emma-stone-poster-1620251754.jpg",
        module: "Top Rated",
    },
    {
        id: 10,
        name: "El Señor de los Anillos: El Retorno del Rey",
        date: "17 diciembre 2003",
        description: "El destino de la Tierra Media pende de un hilo mientras Frodo se acerca al Monte del Destino.",
        duration: 201,
        rating: 8.9,
        tags: ["Fantasía", "Aventura", "Épico"],
        relatedMovies: [9, 11],
        favorite: false,
        image: "https://st1.uvnimg.com/b6/b6/5455c81b40a983d863723555681d/joker-2-poster-oficial-joaquin-phoenix-lady-gaga-harley-quinn.jpg",
        module: "Upcoming",
    },
    {
        id: 11,
        name: "Titanic",
        date: "19 diciembre 1997",
        description: "Una joven aristócrata se enamora de un artista pobre a bordo del trágico Titanic.",
        duration: 195,
        rating: 7.8,
        tags: ["Drama", "Romántica", "Histórica"],
        relatedMovies: [4, 12],
        favorite: true,
        image: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/KLZMLOXT5RJT3CNSQYQE5P2AYU.jpg",
        module: "Top Rated",
    },
    {
        id: 12,
        name: "Avatar",
        date: "18 diciembre 2009",
        description: "Un marine parapléjico es enviado a Pandora, donde debe decidir entre proteger su mundo o seguir órdenes.",
        duration: 162,
        rating: 7.9,
        tags: ["Ciencia Ficción", "Aventura", "Acción"],
        relatedMovies: [11, 13],
        favorite: false,
        image: "https://i.pinimg.com/originals/3c/37/ed/3c37ed0f3649c627263073d09225d3ee.jpg",
        module: "Now Playing",
    },
    {
        id: 13,
        name: "El Caballero de la Noche",
        date: "18 julio 2008",
        description: "Batman debe enfrentarse al Joker, un criminal caótico que amenaza Gotham.",
        duration: 152,
        rating: 9.0,
        tags: ["Acción", "Suspenso", "Superhéroes"],
        relatedMovies: [12, 14],
        favorite: true,
        image: "https://img.freepik.com/foto-gratis/vista-ninos-pequenos-3d-viendo-pelicula_23-2151066971.jpg",
        module: "Popular",
    },
    {
        id: 14,
        name: "Inception",
        date: "16 julio 2010",
        description: "Un ladrón roba secretos a través de sueños y planea un último trabajo que definirá su destino.",
        duration: 148,
        rating: 8.8,
        tags: ["Ciencia Ficción", "Aventura", "Acción"],
        relatedMovies: [13, 15],
        favorite: true,
        image: "https://i.pinimg.com/originals/47/f2/2f/47f22f40160ffb33987fa4b9091dcee0.jpg",
        module: "Top Rated",
    },
    {
        id: 15,
        name: "Matrix",
        date: "31 marzo 1999",
        description: "Un hacker descubre la verdad sobre la realidad y su papel en una guerra contra las máquinas.",
        duration: 136,
        rating: 8.7,
        tags: ["Ciencia Ficción", "Acción", "Aventura"],
        relatedMovies: [14, 16],
        favorite: true,
        image: "https://img.freepik.com/foto-gratis/vista-3d-pareja-cine-viendo-pelicula_23-2151020691.jpg",
        module: "Upcoming",
    },
    {
        id: 16,
        name: "Toy Story",
        date: "22 noviembre 1995",
        description: "Las aventuras de Woody y Buzz, juguetes que cobran vida cuando nadie los ve.",
        duration: 81,
        rating: 8.3,
        tags: ["Animación", "Familiar", "Aventura"],
        relatedMovies: [15, 17],
        favorite: false,
        image: "https://www.findelahistoria.com/web/wp-content/uploads/2016/12/dark_knight-poster-jocker.jpg",
        module: "Popular",
    },
    {
        id: 17,
        name: "El Rey León",
        date: "15 junio 1994",
        description: "Un joven león debe enfrentar su destino como rey tras la muerte de su padre.",
        duration: 88,
        rating: 8.5,
        tags: ["Animación", "Familiar", "Drama"],
        relatedMovies: [16, 18],
        favorite: true,
        image: "https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-cementerio-animales-1578395574.jpg",
        module: "Top Rated",
    },
    {
        id: 18,
        name: "El Resplandor",
        date: "23 mayo 1980",
        description: "Un escritor comienza a perder la cordura mientras cuida un hotel aislado durante el invierno.",
        duration: 146,
        rating: 8.4,
        tags: ["Terror", "Suspenso", "Drama"],
        relatedMovies: [17, 19],
        favorite: true,
        image: "https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-annabelle-3-1578395572.jpg",
        module: "Popular",
    },
    {
        id: 19,
        name: "Pulp Fiction",
        date: "14 octubre 1994",
        description: "Historias entrelazadas de crimen y redención en Los Ángeles.",
        duration: 154,
        rating: 8.9,
        tags: ["Crimen", "Drama", "Suspenso"],
        relatedMovies: [18, 20],
        favorite: false,
        image: "https://st1.uvnimg.com/b6/b6/5455c81b40a983d863723555681d/joker-2-poster-oficial-joaquin-phoenix-lady-gaga-harley-quinn.jpg",
        module: "Top Rated",
    },
    {
        id: 20,
        name: "Los Increíbles",
        date: "5 noviembre 2004",
        description: "Una familia de superhéroes se reúne para enfrentarse a un villano que amenaza la paz.",
        duration: 115,
        rating: 8.0,
        tags: ["Animación", "Aventura", "Acción"],
        relatedMovies: [19, 21],
        favorite: true,
        image: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/KLZMLOXT5RJT3CNSQYQE5P2AYU.jpg",
        module: "Upcoming",
    },
    {
        id: 21,
        name: "Frozen",
        date: "22 noviembre 2013",
        description: "Una princesa con poderes mágicos debe salvar su reino con la ayuda de su hermana y nuevos amigos.",
        duration: 102,
        rating: 7.5,
        tags: ["Animación", "Familiar", "Fantasía"],
        relatedMovies: [1, 16],
        favorite: true,
        image: "https://img.freepik.com/foto-gratis/vista-ninos-pequenos-3d-viendo-pelicula_23-2151066971.jpg",
        module: "Popular",
    },
    {
        id: 22,
        name: "Encanto",
        date: "24 noviembre 2021",
        description: "Una joven descubre secretos de su familia mágica mientras intenta salvar su hogar.",
        duration: 99,
        rating: 7.9,
        tags: ["Animación", "Musical", "Familiar"],
        relatedMovies: [3, 21],
        favorite: true,
        image: "https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-prodigy-1578395572.jpg",
        module: "Top Rated",
    },
    {
        id: 23,
        name: "Shrek",
        date: "18 mayo 2001",
        description: "Un ogro emprende una aventura para rescatar a una princesa mientras descubre el amor verdadero.",
        duration: 90,
        rating: 8.0,
        tags: ["Animación", "Aventura", "Comedia"],
        relatedMovies: [8, 17],
        favorite: false,
        image: "https://www.findelahistoria.com/web/wp-content/uploads/2016/12/dark_knight-poster-jocker.jpg",
        module: "Now Playing",
    },
    {
        id: 24,
        name: "Mulán",
        date: "18 junio 1998",
        description: "Una joven china se disfraza de hombre para tomar el lugar de su padre en el ejército.",
        duration: 88,
        rating: 7.6,
        tags: ["Animación", "Familiar", "Aventura"],
        relatedMovies: [14, 23],
        favorite: true,
        image: "https://img.freepik.com/foto-gratis/renderizacion-3d-bocadillos-palomitas-maiz-peliculas_23-2151169450.jpg",
        module: "Upcoming",
    },
    {
        id: 25,
        name: "Moana",
        date: "23 noviembre 2016",
        description: "Una joven aventurera se embarca en una misión para salvar a su pueblo con la ayuda de un semidiós.",
        duration: 107,
        rating: 7.8,
        tags: ["Animación", "Familiar", "Aventura"],
        relatedMovies: [3, 24],
        favorite: false,
        image: "https://i.pinimg.com/236x/11/0f/90/110f90021c15e73d06e174ab567d4242.jpg",
        module: "Popular",
    },
    {
        id: 26,
        name: "The Batman",
        date: "4 marzo 2022",
        description: "Bruce Wayne se enfrenta a un enemigo que conoce sus más oscuros secretos.",
        duration: 175,
        rating: 8.1,
        tags: ["Acción", "Drama", "Crimen"],
        relatedMovies: [13, 27],
        favorite: true,
        image: "https://img.freepik.com/foto-gratis/renderizacion-3d-bocadillos-palomitas-maiz-peliculas_23-2151169450.jpg",
        module: "Now Playing",
    },
    {
        id: 27,
        name: "Zootopia",
        date: "4 marzo 2016",
        description: "Una coneja policía y un zorro estafador trabajan juntos para resolver un misterio.",
        duration: 108,
        rating: 8.0,
        tags: ["Animación", "Aventura", "Comedia"],
        relatedMovies: [23, 26],
        favorite: false,
        image: "https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-annabelle-3-1578395572.jpg",
        module: "Top Rated",
    },
    {
        id: 28,
        name: "Inside Out",
        date: "19 junio 2015",
        description: "Las emociones dentro de la mente de una niña trabajan juntas para ayudarla a adaptarse a un cambio de vida.",
        duration: 95,
        rating: 8.1,
        tags: ["Animación", "Familiar", "Fantasía"],
        relatedMovies: [12, 27],
        favorite: true,
        image: "https://img.freepik.com/foto-gratis/vista-3d-pareja-cine-viendo-pelicula_23-2151020691.jpg",
        module: "Upcoming",
    },
    {
        id: 29,
        name: "The Lion King",
        date: "7 julio 2019",
        description: "Una versión de acción en vivo del clásico animado sobre un joven león que enfrenta su destino.",
        duration: 118,
        rating: 7.0,
        tags: ["Drama", "Familiar", "Musical"],
        relatedMovies: [7, 28],
        favorite: true,
        image: "https://st1.uvnimg.com/b6/b6/5455c81b40a983d863723555681d/joker-2-poster-oficial-joaquin-phoenix-lady-gaga-harley-quinn.jpg",
        module: "Popular",
    },
    {
        id: 30,
        name: "The Jungle Book",
        date: "15 abril 2016",
        description: "La historia de un niño criado por lobos y su aventura para escapar del tigre Shere Khan.",
        duration: 106,
        rating: 7.4,
        tags: ["Aventura", "Familiar", "Drama"],
        relatedMovies: [16, 29],
        favorite: false,
        image: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/KLZMLOXT5RJT3CNSQYQE5P2AYU.jpg",
        module: "Top Rated",
    },
];
