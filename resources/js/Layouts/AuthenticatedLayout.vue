<script setup>
import { ref } from "vue";
import { useMobileScreen } from "@/Composables/useMobileScreen";

import Sidebar from "@Components/Layouts/Authenticated/Sidebar.vue";
import Header from "@Components/Layouts/Authenticated/Header.vue";

defineProps({
    title: {
        type: String,
        required: true,
    },
});

const isSidebareOpened = ref(true);
const { isMobileScreen } = useMobileScreen();
</script>

<template>
    <div class="bg-gray-100">
        <Header :title="title" />

        <div class="flex md:px-5 px-1.5 gap-2 pb-[5%] h-[93dvh]">
            <Sidebar
                v-model="isSidebareOpened"
                :isMobileScreen="isMobileScreen"
                title="DM Setting"
            />
            <div
                class="container-card w-full bg-white/50 rounded-tl-md rounded-bl-md rounded-tr-2xl rounded-br-2xl overflow-y-hidden h-full"
                :class="isMobileScreen && isSidebareOpened ? 'hidden' : ''"
            >
                <div class="h-full overflow-y-auto">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-card {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.03);
}
</style>
