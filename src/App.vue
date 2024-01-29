<template>
  <div class="grid grid-rows-layout min-h-screen bg-slate-100">
    <AppHeader />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style scoped></style>