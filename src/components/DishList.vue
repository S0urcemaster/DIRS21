<template>
	<div class="dish-list">
		<div class="dish-list-header">
			<div><b>Name</b></div>
			<div>Kategorie</div>
			<div>Verf. täglich</div>
			<div>Verf. wöchentl.</div>
			<input type="button" style="grid-row: span 2" value="Neu" @click="newDish" />
			<div><i>Beschreibung</i></div>
			<div></div>
			<div>Zubereitungszeit</div>
			<div>Preis</div>
		</div>
		<div v-for="dish in dishes" :key="dish.id" @click="active = dish.id">
			<div class="dish-item clickable" :class="{dishItemSelected: dish.id === active}">
				<div class="cut-ellipsis"><b>{{dish.name}}</b></div>
				<div>{{dish.category}}</div>
				<div>{{dish.availDay}}</div>
				<div>{{dish.availWeek}}</div>
				<div style="grid-row: span 2; text-align:right; width:100%">
					<input type="checkbox" v-model="dish.active" style="width:100%; height:40%" />
				</div>
				<div class="cut-ellipsis" style="grid-column: span 2"><i>{{dish.description}}</i></div>
				<div>{{dish.latency}} min</div>
				<div>{{dish.price}} €</div>
			</div>
			<div v-if="dish.id === active">
				<DishForm :dish="dish" :niu="niu" @delete="deleat" @cancel="cancel" @save="save"></DishForm>
			</div>
		</div>
	</div>
</template>

<script>
import DishForm from '@/components/DishForm'
import Dish from '@/model/model'
import {apiDelete, apiPut} from '@/lib/api'

export default {
	name: 'DishList',
	components: {
		DishForm,
	},
	props: {
		dishes: Array,
	},
	data() {
		return {
			active: -1,
			niu: false,
		}
	},
	computed: {
		emptyDish() {
			return Dish.empty()
		}
	},
	methods: {
		newDish() {
			if(!this.niu) {
				this.dishes.unshift(Dish.empty())
				this.active = 0
				this.niu = true
			}
		},
		async save(dish) {
			await apiPut(dish)
			this.niu = false
			this.active = -1
			this.$emit('reload')
		},
		async deleat(dish) {
			await apiDelete(dish.id)
			this.active = -1
			this.$emit('reload')
		},
		cancel() {
			this.active = -1;
			this.niu = false;
			this.$emit('reload')
		}
	}
}
</script>

<style scoped>
</style>