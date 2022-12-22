import type { NavbarItem, Project } from '../types'

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
		img: './public/assets/homeIcon.png',
		name: 'Inicio'
	},
	{
		href: '#about',
		img: './public/assets/personIcon.png',
		name: 'Sobre mi'
	},
	{
		href: '#projects',
		img: './public/assets/projectsIcon.png',
		name: 'Proyectos'
	}
]
