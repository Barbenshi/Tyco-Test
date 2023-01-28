<template>
<section class='item-list'>
    <ul class="flex flex-wrap clean-list">
        <li v-for="item in items" :key="item.id">
            <item-preview :item="item"/>
        </li>
    </ul>
</section>
</template>
<script>
import itemPreview from './item-preview.vue';

 export default {
name: 'item-list',
  props: {
    items:Array,
    categories:Array
  },
  data() {
 return{}},
  created(){},
 methods: {},
 computed: {},
 components: {
    itemPreview
 }
  }
 </script>