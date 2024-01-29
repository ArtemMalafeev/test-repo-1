<template>
    <ul
        class="flex flex-col gap-y-4">
        <li v-for="task in tasks" :key="task.id">
            <StageListItem 
                @edit="$emit('edit', task.id)" 
                @delete="$emit('delete', task.id)"
                @dragstart="startDrag($event, task)" 
                draggable="true" 
                :task="task" 
            />
        </li>
    </ul>
</template>

<script>
import StageListItem from './StageListItem.vue';

export default {
    name: 'StageList',

    components: {
        StageListItem,
    },

    emits: ['edit', 'delete'],

    props: {
        tasks: {
            type: Array,
            required: true,
        },
    },

    methods: {
        startDrag(event, task) {
            event.dataTransfer.dropEffect = 'move';
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('taskId', task.id);
            event.dataTransfer.setData('taskStageId', task.stageId);
        },
    }
}
</script>

<style scoped></style>