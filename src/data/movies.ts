export const movies = [
    {
        id: 1,
        name: "La La Land",
        "year": 2016,
        "description": "Un musical romántico sobre un pianista de jazz y una aspirante a actriz que buscan cumplir sus sueños en Los Ángeles.",
        "duration": 128,
        "rating": 8.0,
        "tags": ["Musical", "Romántica", "Drama"],
        "relatedMovies": [2, 3],
        "favorite": true
    },
    {
        "id": 2,
        "name": "El Pianista",
        "year": 2002,
        "description": "La vida del pianista polaco Władysław Szpilman durante la ocupación nazi en Varsovia.",
        "duration": 150,
        "rating": 8.5,
        "tags": ["Drama", "Histórica", "Biográfica"],
        "relatedMovies": [1, 4],
        "favorite": false
    },
    {
        "id": 3,
        "name": "Coco",
        "year": 2017,
        "description": "Un niño mexicano se aventura al mundo de los muertos para descubrir la historia de su familia.",
        "duration": 105,
        "rating": 8.5,
        "tags": ["Animación", "Familiar", "Aventura"],
        "relatedMovies": [1, 5],
        "favorite": true
    },
    {
        "id": 4,
        "name": "Forrest Gump",
        "year": 1994,
        "description": "La historia de un hombre con un coeficiente intelectual bajo que, sin saberlo, vive los momentos clave de la historia de los EE. UU.",
        "duration": 142,
        "rating": 8.8,
        "tags": ["Drama", "Comedia", "Inspiracional"],
        "relatedMovies": [2, 6],
        "favorite": true
    },
    {
        "id": 5,
        "name": "Vingadores: La Guerra del Infinito",
        "year": 2018,
        "description": "Los superhéroes más poderosos de la Tierra se unen para enfrentarse a Thanos, que busca obtener todas las piedras del infinito.",
        "duration": 149,
        "rating": 8.4,
        "tags": ["Acción", "Ciencia Ficción", "Aventura"],
        "relatedMovies": [3, 6],
        "favorite": false
    },
    {
        "id": 6,
        "name": "Jurassic Park",
        "year": 1993,
        "description": "Un parque temático con dinosaurios clonados se convierte en una trampa mortal cuando los animales escapan.",
        "duration": 127,
        "rating": 8.1,
        "tags": ["Ciencia Ficción", "Aventura", "Acción"],
        "relatedMovies": [4, 5],
        "favorite": true
    },
    {
        "id": 7,
        "name": "La Casa de Papel",
        "year": 2017,
        "description": "Un grupo de criminales lleva a cabo el robo más grande de la historia de España en la Real Casa de la Moneda.",
        "duration": 50,
        "rating": 8.3,
        "tags": ["Acción", "Suspenso", "Crimen"],
        "relatedMovies": [8, 9],
        "favorite": true
    },
    {
        "id": 8,
        "name": "El Secreto de Sus Ojos",
        "year": 2009,
        "description": "Un escritor y ex empleado judicial reabre el caso de un asesinato no resuelto que le dejó huellas en su vida.",
        "duration": 129,
        "rating": 8.2,
        "tags": ["Suspenso", "Crimen", "Drama"],
        "relatedMovies": [7, 9],
        "favorite": false
    },
    {
        "id": 9,
        "name": "Gladiador",
        "year": 2000,
        "description": "Un general romano es traicionado y se convierte en gladiador buscando venganza contra el emperador corrupto.",
        "duration": 155,
        "rating": 8.5,
        "tags": ["Acción", "Aventura", "Drama"],
        "relatedMovies": [7, 10],
        "favorite": true
    },
    {
        "id": 10,
        "name": "El Señor de los Anillos: La Comunidad del Anillo",
        "year": 2001,
        "description": "Un joven hobbit se une a un grupo de héroes para destruir un anillo mágico que puede destruir el mundo.",
        "duration": 178,
        "rating": 8.8,
        "tags": ["Fantasía", "Aventura", "Acción"],
        "relatedMovies": [9],
        "favorite": false
    }
]
