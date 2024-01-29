<template>
    <header class="p-4 bg-white text-center text-purple-800">
        <UiContainer>
            <h1 class="font-bold">Тестовое задание для компании "SOTNIKOV - Digital Studio"</h1>
        </UiContainer>
    </header>
</template>

<script>
import UiContainer from './UiContainer.vue';

export default {
    name: 'AppHeader',

    components: {
        UiContainer,
    },
}
</script>

<style scoped></style>