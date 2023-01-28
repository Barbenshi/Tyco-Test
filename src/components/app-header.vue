<template>
  <section class='app-header'>
    <h2>Header</h2>
    <item-filter @filterChanged="setFilterBy" v-if="categories" :categories="categories" />
  </section>
</template>
<script>
import itemFilter from './item-filter.vue';

export default {
  name: 'app-header',
  props: {},
  data() {
    return {}
  },
  created() { },
  methods: {
    async setFilterBy(categoryId) {
      const filterBy = { id: categoryId }
      this.$store.commit({ type: 'setFilter', filterBy })
      this.$store.dispatch({type:'loadItems'})
    }
  },
  computed: {
    categories() {
      return this.$store.getters.categoriesMap
    }
  },
  components: {
    itemFilter
  }
}
</script>