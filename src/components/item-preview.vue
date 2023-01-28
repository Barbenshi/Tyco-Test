<template>
    <section class='item-preview flex flex-column'>
        <div class="item-header flex flex-column ">
            <div class="content-container flex align-center">
                <span>{{ item.priority }}</span>
                <div class="rating">
                    {{ item.rating }}/10
                </div>
            </div>
            <div class="progress-bar">
                <div class="val" :style="{width:`${(item.rating/10)*100}%`}"></div>
            </div>
            <div class="sub-header flex">
                <span>{{ item.cve }}</span>
                <span>{{ item.date }}</span>
            </div>
            <div class="labels">
                <ul class="flex clean-list">
                    <li v-for="category in categories" :key="category.id">
                        <span class="simple-button">{{ category.name }}</span>
                    </li>
                </ul>
            </div>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
    </section>
</template>
<script>
export default {
    name: 'item-preview',
    props: {
        item: Object
    },
    data() {
        return {}
    },
    created() {
        console.log('categories :>> ', this.categories);
     },
    methods: {},
    computed: {
        categories() {
            return this.$store.getters.categoriesMap.filter(category=>
            this.item.categories.includes(category.id))
        },
    },
    components: {}
}
</script>