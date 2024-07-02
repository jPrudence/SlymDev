<script setup>
import Sidebar from "@Components/Layouts/Authenticated/Sidebar.vue";
import Header from "@Components/Layouts/Authenticated/Header.vue";

import { defineProps } from "vue";

defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="bg-gray-100">
        <Header :title="title" />

        <div class="flex h-screen px-5 pb-5 gap-2">
            <Sidebar title="DM Setting" />
            <div class="flex-1 flex flex-col overflow-hidden">
                <main class="flex-1 overflow-x-hidden overflow-y-auto">
                    <div
                        class="container-card container mx-auto bg-white/50 rounded-tl-md rounded-bl-md rounded-tr-2xl rounded-br-2xl"
                    >
                        <slot></slot>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-card {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.03);
}
</style>
