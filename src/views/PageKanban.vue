<template>
    <div class="relative h-full w-screen overflow-auto py-20">
        <div class="flex gap-x-8 w-fit mx-24">
            <KanbanList :stages="stages" />
            <button 
                @click="addStage" 
                class="w-[300px] p-2 border-2 rounded border-gray-300 text-gray-400" 
                type="button"
            >
                Добавить стадию
            </button>
        </div>
    </div>
</template>

<script>
import { useKanbanStore } from '../stores/kanban.js';
import { mapState, mapActions } from 'pinia';

import KanbanList from '../components/KanbanList.vue';
import UiButton from '../components/Uibutton.vue';
import UiIcon from '../components/UiIcon.vue';
import UiContainer from '../components/UiContainer.vue';

export default {
    name: 'PageKanban',

    components: {
        KanbanList,
        UiContainer,
        UiButton,
        UiIcon,
    },

    computed: {
        ...mapState(useKanbanStore, ['stages']),
    },

    methods: {
        ...mapActions(useKanbanStore, ['addStage']),
    },
}
</script>

<style scoped></style>