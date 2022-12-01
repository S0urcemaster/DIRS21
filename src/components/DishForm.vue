<template>
	<form method="post" class="form-item">
		<input type="text" placeholder="Name Gericht" v-model="dish.name" autofocus />

		<select v-model="dish.category">
			<option v-for="cat in Object.values(categories)" :key="cat">{{cat}}</option>
		</select>

		<select v-model="dish.availDay">
			<option v-for="cat in Object.values(availDay)" :key="cat">{{cat}}</option>
		</select>

		<select v-model="dish.availWeek">
			<option v-for="cat in Object.values(availWeek)" :key="cat">{{cat}}</option>
		</select>

		<div style="grid-row: span 2">
			<input v-if="niu" type="button" style="width:100%" value="Abbrechen" @click="$emit('cancel')" />
			<input v-else type="button" style="width:100%" value="Löschen" @click="$emit('delete', dish)" />
			<input type="button" style="width:100%" value="Speichern" @click="$emit('save', dish)" />
		</div>

		<input type="text" placeholder="Beschreibung" style="grid-column: span 2" v-model="dish.description" />

		<div style="white-space: nowrap">
			<input type="number" style="width:70%" placeholder="Preis" v-model="dish.price" step=".01" /> €
		</div>

		<div style="white-space: nowrap">
			<input type="text" style="width:70%" placeholder="Zubereitungszeit" v-model="dish.latency" /> min
		</div>
	</form>
</template>

<script>
import Dish, {availabilityDay, availabilityWeek, category} from '@/model/model'

export default {
	name: 'DishForm',
	props: {
		dish: Dish,
		niu: Boolean,
	},
	data() {
		return {
			categories: category,
			availDay: availabilityDay,
			availWeek: availabilityWeek,
		}
	},
}
</script>

<style scoped>

</style>