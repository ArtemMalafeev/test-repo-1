import { defineStore } from "pinia";
import { v4 as uuid } from 'uuid';

export const useKanbanStore = defineStore('kanban', {
    state: () => ({
        stages: [],
    }),

    getters: {
        getStageById: (state) => {
            return (stageId) => state.stages.find((stage) => stage.id === stageId);
        },
    },

    actions: {
        addStage() {
            const defaultData = {
                id: uuid(),
                name: 'Новая стадия',
                tasks: [],
            };

            this.stages.push(defaultData);
        },

        deleteStage(id) {
            this.stages = this.stages.filter((stage) => stage.id !== id);
        },

        changeStageName(id, name) {
            this.getStageById(id).name = name;
        },

        addTask(id) {
            const defaultData = {
                id: uuid(),
                stageId: id,
                name: 'Новая задача',
                description: 'Описание новой задачи',
                date: new Date(),
            };

            this.getStageById(id).tasks.push(defaultData);
        },

        deleteTask(stageId, taskId) {
            const stage = this.getStageById(stageId);
            stage.tasks = stage.tasks.filter((task) => task.id !== taskId);
        },

        changeTaskInformation(stageId, taskId, name, description) {
            const task = this.getStageById(stageId).tasks.find((task) => task.id === taskId);
            task.name = name;
            task.description = description;
        },

        moveTask(stageId, taskId, taskStageId) {
            if (stageId === taskStageId) {
                return;
            }

            const currentStage = this.getStageById(taskStageId);
            const moveStage = this.getStageById(stageId);
            const task = currentStage.tasks.find((task) => task.id === taskId);
            task.stageId = stageId;

            currentStage.tasks = currentStage.tasks.filter((task) => task.id !== taskId);
            moveStage.tasks.push(task);
        },

        getTaskById(stageId, taskId) {
            return this.getStageById(stageId).tasks.find((task) => task.id === taskId);
        },
    },
});
