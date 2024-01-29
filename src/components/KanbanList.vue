<template>
    <ul class="flex gap-10 flex-shrink-0">
        <div
            @drop="onDrop($event, stage.id)"
            @dragenter.prevent
            @dragover.prevent
            v-for="stage in stages" 
            :key="stage.id"
            class="w-[300px]"
        >
            <KanbanListItem :stage="stage" />
        </div>
    </ul>
</template>

<script>
import { useKanbanStore } from '../stores/kanban.js';
import { mapActions } from 'pinia';

import KanbanListItem from './KanbanListItem.vue';

export default {
    name: 'KanbanList',

    components: {
        KanbanListItem,
    },

    props: {
        stages: {
            type: Array,
            required: true,
        },
    },

    data() {
        return {
            columns: [1, 2, 3, 4],
        };
    },

    methods: {
        ...mapActions(useKanbanStore, ['moveTask']),

        onDrop(event, stageId) {
            const taskId = event.dataTransfer.getData('taskId');
            const taskStageId = event.dataTransfer.getData('taskStageId');
            this.moveTask(stageId, taskId, taskStageId);
        },
    },
}
</script>

<style scoped></style>