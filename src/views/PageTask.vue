<template>
    <div class="py-20">
        <UiContainer>
            <div v-if="task" class="flex flex-col gap-y-3 p-4 bg-white w-fit">
                <p>ID: {{ task.id }}</p>
                <p>Название: {{ task.name }}</p>
                <p>Описание: {{ task.description }}</p>
                <time :datetime="isoDate">Дата создания: {{ localeDate }}</time>
            </div>
        </UiContainer>
    </div>
</template>

<script>
import { useKanbanStore } from '../stores/kanban.js';
import { mapActions } from 'pinia';

import UiContainer from '../components/UiContainer.vue';

export default {
    name: 'PageTask',

    components: {
        UiContainer,
    },

    props: {
        taskId: String,
    },

    data() {
        return {
            task: null,
        };
    },

    computed: {
        stageId() {
            return this.$route.query.stageId;
        },

        isoDate() {
            return new Date(this.task.date).toISOString().split('T')[0];
        },

        localeDate() {
            return new Date(this.task.date).toLocaleDateString(navigator.language, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
        },
    },

    methods: {
        ...mapActions(useKanbanStore, ['getTaskById']),
    },

    mounted() {
        this.task = this.getTaskById(this.stageId, this.taskId);
    },
}
</script>

<style scoped></style>