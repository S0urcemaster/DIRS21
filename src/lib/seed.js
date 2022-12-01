import {availabilityDay, availabilityWeek, category} from '@/model/model'

const ings = [ //ingredients
	'Äpfel', 'Birnen', 'Trauben', 'Ananas', 'Kirschen',
	'Peanuts', 'Walnüsse', 'Mandeln',
	'Käse', 'Marmelade', 'Milch', 'Butter',
	'Steak', 'Hackbraten', 'Saitenwürstchen',
	'Rucola', 'Radieschen', 'Dill'
]

const descriptions = [
	'Ein Genuss Ein Genuss Ein Genuss Ein Genuss Ein Genuss Ein Genuss',
	'Vorzüglich Vorzüglich Vorzüglich Vorzüglich',
	'Einwandfrei Einwandfrei Einwandfrei Einwandfrei Einwandfrei Einwandfrei Einwandfrei',
	'Lecker Lecker Lecker Lecker Lecker Lecker Lecker Lecker Lecker Lecker Lecker Lecker Lecker Lecker Lecker Lecker',
]

const beverages = [
	'Champagner', 'Sparkling Water', 'Fanta', 'Cola',
]

const prices = [
	8.8, 12.6, 15.9, 22.5, 11.9, 35.6, 2.2, 7.9
]

const random = (max) => {
	return Math.floor(Math.random() *max)
}

const randomElement = (arr) => {
	return arr[random(arr.length)]
}

const nextRandomIng = (last) => {
	for(;;) {
		const ing = randomElement(ings)
		if(!last.includes(ing)) {
			return ing;
		}
	}
}

const generateCourseName = () => {
	let ing = nextRandomIng([])
	const lastIng = [ing]
	let name = ing + ' mit '

	ing = nextRandomIng(lastIng)
	lastIng.push(ing)
	name += ing + ' und '

	ing = nextRandomIng(lastIng)
	lastIng.push(ing)
	return name + ing
}

const makeBeverages = () => {
	return beverages.map(bev => {
		return {
			name: bev,
			description: "Refreshing!",
			price: randomElement(prices),
			category: category.beverage,
			availDay: randomElement(Object.values(availabilityDay)),
			availWeek: randomElement(Object.values(availabilityWeek)),
			active: true,
			latency: random(60),
		}
	})

}

export const generateDishes = (amount) => {
	const courses = []
	for(let i = 0; i < amount; i++) {
		const course = {
			name: generateCourseName(),
			description: randomElement(descriptions),
			price: randomElement(prices),
			category: randomElement(Object.values(category).filter(cat => cat !== category.beverage)),
			availDay: randomElement(Object.values(availabilityDay).filter(avail => avail !== availabilityDay.always)),
			availWeek: randomElement(Object.values(availabilityWeek).filter(avail => avail !== availabilityWeek.always)),
			active: true,
			latency: random(60),
		}
		courses.push(course)
	}
	courses.push(...makeBeverages())
	return courses
}


