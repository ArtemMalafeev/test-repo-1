<template>
    <div>
        <div class="relative bg-white p-5 rounded shadow">
            <div class="flex justify-between">
                <h3 class="font-bold">
                    {{ task.name }}
                </h3>
                <div class="relative flex items-center gap-x-2 z-20">
                    <button @click="openEditModal" class="w-[16px] h-auto" type="button">
                        <UiIcon icon="change" />
                    </button>
                    <button @click="$emit('delete')" class="w-[16px] h-auto" type="button">
                        <UiIcon icon="delete" />
                    </button>
                </div>
            </div>
            <p class="text-gray-400">
                {{ task.description }}
            </p>
            <RouterLink :to="{ name: 'task', params: { taskId: task.id }, query: { stageId: task.stageId } }"
                class="absolute z-10 top-0 left-0 w-full h-full" />
        </div>
        <div v-if="isShowModal" class="fixed z-30 flex place-content-center top-0 left-0 backdrop-blur w-full h-full">
            <div class="relative h-max p-5 border bg-white top-1/2 -translate-y-1/2">
                <div class="flex flex-col gap-y-5">
                    <button class="text-white w-max ml-auto bg-fuchsia-900 py-1 px-2" @click="closeEditModal"
                        type="button">X</button>
                    <form class="flex flex-col gap-y-5" @submit.prevent="changeData" action="#">
                        <label class="flex gap-x-2 items-center">
                            <span class="font-bold">Название задачи:</span>
                            <input class="border p-1" type="text" name="name" :value="task.name">
                        </label>
                        <label class="flex gap-x-2 items-center">
                            <span class="font-bold">Описание задачи:</span>
                            <textarea class="border p-1 resize-none" type="text" name="description"
                                :value="task.description"></textarea>
                        </label>
                        <button class="bg-fuchsia-900 inline-block w-max ml-auto mr-auto p-2 text-white"
                            type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useKanbanStore } from '../stores/kanban.js';
import { mapActions } from 'pinia';
import UiIcon from './UiIcon.vue';
import { RouterLink } from 'vue-router';

export default {
    name: 'StageListItem',

    data() {
        return {
            isShowModal: false,
        };
    },

    components: {
        UiIcon,
        RouterLink
    },

    emits: ['edit', 'delete'],

    props: {
        task: {
            type: Object,
            required: true,
        },
    },

    methods: {
        ...mapActions(useKanbanStore, ['changeTaskInformation']),

        openEditModal() {
            this.isShowModal = true;
        },

        closeEditModal() {
            this.isShowModal = false;
        },

        changeData(event) {
            const newName = event.target.elements.name.value;
            const newDescription = event.target.elements.description.value;
            this.changeTaskInformation(this.task.stageId, this.task.id, newName, newDescription);
            this.closeEditModal();
        },
    },
}
</script>

<style scoped></style>