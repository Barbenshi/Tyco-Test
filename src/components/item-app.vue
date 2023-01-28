<template>
<section class='items-app'>
  <h2>Items</h2>
  <item-list v-if="items" :items="items" :categories="categories"/>
</section>
</template>

<script>
import itemList from './item-list.vue';

 export default {
name: 'items-app',
  props: {},
  data() {
 return{}},
  async created(){
    this.$store.dispatch({type:'loadItems'})
  },
 methods: {},
 computed: {
  items(){
    return this.$store.getters.items
  },
  categories(){
    return this.$store.getters.categories
  }
 },
 components: {
  itemList
 }
  }
 </script>