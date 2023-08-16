import type { NavbarItem, Project, Experience } from '../types'

export const projects: Project[] = [
	{
		body: 'Facilita la adopción de mascotas mediante la publicación de las mismas y la comunicación mediante chat de los usuarios.',
		demo: 'https://petfinder-front.vercel.app/',
		image: './petfinder.webp',
		link: 'https://github.com/BreinerJT/petfinder',
		title: 'Petfinder'
	},
	{
		body: 'Muestra el estado del clima en una ubicación dada. Además, cuenta con geolocalización para el estado del clima local.',
		demo: 'https://weather-app-fang.vercel.app/',
		image: './weather.webp',
		link: 'https://github.com/BreinerJT/WeatherApp',
		title: 'Weather App'
	},
	{
		body: 'Diario personal para guardar sucesos del día, también se pueden agregar imágenes relevantes de los sucesos.',
		demo: 'https://journal-app-weld.vercel.app/',
		image: './journal.webp',
		link: 'https://github.com/BreinerJT/journal-app',
		title: 'Journal App'
	},
	{
		body: 'Muestra más de 150 pokémons, también puedes guardar tus pokémons favoritos para verlos más luego.',
		demo: 'https://nextpokemonstatic.vercel.app/',
		image: './pokedex.webp',
		link: 'https://github.com/BreinerJT/next-pokemon-static',
		title: 'Next Pokédex'
	}
]

export const navbarItems: NavbarItem[] = [
	{
		href: '#',
		img: './assets/homeIcon.png',
		name: 'Inicio'
	},
	{
		href: '#about',
		img: './assets/personIcon.png',
		name: 'Sobre mi'
	},
	{
		href: '#projects',
		img: './assets/projectsIcon.png',
		name: 'Proyectos'
	}
]

export const experiences: Experience[] = [
	{
		accomplishments: [
			'Apliqué estrategias de trabajo en equipo con personas involucradas en el desarrollo de un proyecto para preservar la calidad del producto y acelerar el desarrollo del mismo promoviendo constante programación en par y en grupo.',
			'Mejoré tiempos de carga de páginas desde milisegundos hasta segundos realizando peticiones en paralelo, reduciendo código javascript, reemplazando librerías por alternativas más livianas, entre otras.',
			'Mejoré la autenticación y protección de rutas privadas en paneles de acuerdo a sesiones o roles de usuario mediante componentes de orden superior encargados de validar lo necesario.'
		],
		start: 'Enero, 2023',
		end: 'Julio, 2023',
		place: 'Peacedev S.A.S',
		role: 'Desarrollador frontend'
	}
]
