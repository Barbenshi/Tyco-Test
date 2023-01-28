<template>
  <section class='main-app main-layout'>
    <header class="full main-layout">
      <app-header />
    </header>
    <main class="full main-layout">
      <item-app />
    </main>
    <footer class="full main-layout">
      <app-footer />
    </footer>
  </section>
</template>
<script>
import itemApp from './components/item-app.vue';
import appHeader from './components/app-header.vue';
import appFooter from './components/app-footer.vue';

export default {
  name: 'main-app',
  props: {},
  data() {
    return {}
  },
  created() { },
  methods: {},
  computed: {},
  components: {
    itemApp,
    appHeader,
    appFooter
  }
}
</script>