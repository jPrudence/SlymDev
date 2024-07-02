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

        <div class="flex h-screen px-5 pb-5">
            <Sidebar title="DM Setting" />
            <div class="flex-1 flex flex-col overflow-hidden">
                <main class="flex-1 overflow-x-hidden overflow-y-auto">
                    <div class="container mx-auto px-6 py-8">
                        <slot></slot>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>
