<template>
  <section class='item-filter'>
    <select v-model="selectedCategoryId" @change="$emit('filterChanged',selectedCategoryId)">
      <option v-for="category in categories" :key="category.id" :value="category.id">
        {{ category.name }}
      </option>
    </select>
  </section>
</template>
<script>
export default {
  name: 'item-filter',
  props: {
    categories: Array
  },
  data() {
    return {
      selectedCategoryId:''
    }
  },
  created() { },
  methods: {},
  computed: {},
  components: {}
}
</script>