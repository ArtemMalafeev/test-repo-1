<template>
    <img :src="iconSrc" :alt="icon" class="block w-full h-full">
</template>

<script>
import Add from '../assets/icons/add.svg';
import Change from '../assets/icons/change.svg';
import Delete from '../assets/icons/delete.svg';

const icons = {
    add: Add,
    change: Change,
    delete: Delete,
};

export default {
    name: 'UiIcon',

    props: {
        icon: {
            type: String,
            required: true,
            validator: (name) => Object.keys(icons).includes(name),
        },
    },

    computed: {
        iconSrc() {
            return icons[this.icon];
        },
    },
}
</script>

<style scoped></style>