import axios from 'axios'

const serverUrl = 'http://localhost:9000/'

export const apiClear = () => {
	axios.get(serverUrl + 'dishes/clear')
}

export const apiPut = async dish => {
	if(dish.id === 0) { // new dish
		dish.id = undefined
	}
	dish._id = dish.id
	await axios.put(serverUrl + 'dishes', dish)
}

export const apiAll = async () => {
	const res = await axios.get(serverUrl + 'dishes')
	return res.data.data.map(dish => {
		dish.id = dish._id
		return dish
	})
}

export const apiGet = async id => {
	const res = await axios.get(serverUrl + 'dishes/' + id)
	const dish = res.data.data
	dish.id = dish._id
	return dish
}

export const apiDelete = async id => {
	await axios.delete(serverUrl +"dishes/" +id)
}