<template>
    <footer class="p-2 bg-white text-center text-purple-800 hover:text-black active:text-purple-800">
        <UiContainer>
            <a href="">Artem Malafeev</a>
        </UiContainer>
    </footer>
</template>

<script>
import UiContainer from './UiContainer.vue';

export default {
    name: 'AppFooter',

    components: {
        UiContainer,
    },
}
</script>

<style scoped></style>