
export const category = {
	starter: 'Vorspeise',
	mainCourse: 'Hauptgericht',
	dessert: 'Dessert',
	beverage: 'Getränk'
}

export const availabilityDay = {
	always: 'Jederzeit',
	breakfast: 'Frühstück',
	lunch: 'Mittagessen',
	dinner: 'Abendessen',
}

export const availabilityWeek = {
	always: 'Täglich',
	weekdays: 'Wochentags',
	weekend: 'Wochenende'
}

export default class Dish {
	id
	name
	description
	price
	category
	availDay
	availWeek
	active
	latency
	static empty() {
		return {
			id: 0,
			name: '',
			description: '',
			price: 0,
			category: category.mainCourse,
			availDay: availabilityDay.dinner,
			availWeek: availabilityWeek.weekdays,
			active: true,
			latency: 0,
		}
	}
}