<template>
    <div class="flex flex-col gap-y-6">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-x-4">
                <span class="inline-block w-[16px] h-[16px] rounded bg-fuchsia-800"></span>
                <div class="flex gap-x-1 text-gray-400">
                    <h2>{{ stage.name }}</h2>
                </div>
            </div>
            <div class="flex items-center gap-x-2">
                <button class="w-[16px] h-auto" type="button">
                    <UiIcon @click="openEditModal" icon="change" />
                </button>
                <button class="w-[16px] h-auto" @click="deleteStage(stage.id)" type="button">
                    <UiIcon icon="delete" />
                </button>
            </div>
        </div>
        <div class="flex flex-col gap-y-5">
            <StageList @edit="(taskId) => editTask(stage.id, taskId)" @delete="(taskId) => deleteTask(stage.id, taskId)"
                :tasks="stage.tasks" />
            <button @click="addTask(stage.id)" class="w-full p-2 border-2 rounded border-gray-300 text-gray-400"
                type="button">
                Добавить задачу
            </button>
        </div>

        <div v-if="isShowModal" class="fixed flex place-content-center top-0 left-0 backdrop-blur w-full h-full">
            <div class="relative h-max p-5 border bg-white top-1/2 -translate-y-1/2">
                <div class="flex flex-col gap-y-5">
                    <button class="text-white w-max ml-auto bg-fuchsia-900 py-1 px-2" @click="closeEditModal" type="button">X</button>
                    <form class="flex flex-col gap-y-5" @submit.prevent="changeName" action="#">
                        <label class="flex gap-x-2 items-center">
                            <span class="font-bold">Название стадии:</span>
                            <input class="border p-1" type="text" name="text" :value="stage.name">
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

import StageList from './StageList.vue';
import UiButton from './UiButton.vue';
import UiIcon from './UiIcon.vue';

export default {
    name: 'KanbanListItem',

    data() {
        return {
            isShowModal: false,
        };
    },

    components: {
        StageList,
        UiButton,
        UiIcon,
    },

    props: {
        stage: {
            type: Object,
            required: true,
        },
    },

    methods: {
        ...mapActions(useKanbanStore,
            [
                'addTask',
                'deleteStage',
                'editTask',
                'deleteTask',
                'changeStageName',
            ]),

        openEditModal() {
            this.isShowModal = true;
        },

        closeEditModal() {
            this.isShowModal = false;
        },

        changeName(event) {
            const newText = event.target.elements.text.value;
            this.changeStageName(this.stage.id, newText);
            this.closeEditModal();
        },
    },
}
</script>

<style scoped></style>