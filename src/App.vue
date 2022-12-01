<template>
	<div id="app">
		<DishList :dishes="dishes" @reload="load"  />
	</div>
</template>

<script>
import DishList from '@/components/DishList'
import {apiAll, apiClear, apiPut} from '@/lib/api'
import {generateDishes} from '@/lib/seed'

export default {
	name: 'App',
	components: {
		DishList,
	},
	data() {
		return {
			dishes: [],
		}
	},
	async created() {
		apiClear()
		// create dummies
		const dishes = generateDishes(10)
		// push to backend
		for(const dish of dishes) {
			await apiPut(dish)
		}
		// fetch from backend
		await this.load()
	},
	methods: {
		async load() {
			this.dishes = await apiAll()
		}
	}
}
</script>

<style scoped>

</style>