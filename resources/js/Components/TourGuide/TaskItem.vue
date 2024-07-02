<script setup>
import { ref } from "vue";

import { useNumberFormatter } from "@/Composables/useNumberFormatter";

import EarnedXPModal from "./EarnedXPModal.vue";

import CompletedTaskIcon from "@Components/Icons/CompletedTaskIcon.vue";
import UncompletedTaskIcon from "@Components/Icons/UncompletedTaskIcon.vue";
import XPEarnedIcon from "@Components/Icons/XPEarnedIcon.vue";
import ExternalLinkIcon from "@Components/Icons/ExternalLinkIcon.vue";
import BlurredPlayIcon from "@Components/Icons/BlurredPlayIcon.vue";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    illustrationUrl: {
        type: String,
    },
    videoUrl: {
        type: String,
    },
    xp: {
        type: Number,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

const isEarnedXPModalOpen = ref(false);
const toggleEarnedXPModal = () => {
    isEarnedXPModalOpen.value = !isEarnedXPModalOpen.value;
};
</script>

<template>
    <div
        class="task-card items-center md:p-6 bg-white rounded-[21px] flex flex-col gap-4 transition-transform transform hover:scale-105"
    >
        <div class="relative w-full">
            <img
                v-if="illustrationUrl"
                class="w-full object-cover"
                :src="illustrationUrl"
                :alt="title"
            />

            <a v-if="videoUrl" target="_blank" :href="videoUrl">
                <BlurredPlayIcon
                    class="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform"
                />
            </a>
        </div>

        <div class="flex gap-2 w-full">
            <div class="mt-[0.15rem] md:pl-0 pl-2">
                <component
                    :is="completed ? CompletedTaskIcon : UncompletedTaskIcon"
                    class="hover:cursor-pointer"
                    @click="toggleEarnedXPModal"
                />
            </div>
            <div class="flex flex-col gap-2 w-full md:pr-0 pr-2">
                <div
                    class="flex gap-2 justify-between md:flex-row flex-col-reverse"
                >
                    <div
                        class="flex items-center font-bold leading-6 text-base hover:cursor-pointer"
                        :class="{
                            'text-grey-900': !completed,
                            'line-through text-grey-800': completed,
                        }"
                        @click="toggleEarnedXPModal"
                    >
                        {{ title }}

                        <a v-if="videoUrl" target="_blank" :href="videoUrl">
                            <ExternalLinkIcon class="ml-1" />
                        </a>
                    </div>
                    <div
                        class="flex items-center text-gradient-primary font-bold leading-6 text-base whitespace-nowrap hover:cursor-pointer"
                        @click="toggleEarnedXPModal"
                    >
                        <XPEarnedIcon v-if="completed" class="mr-1" />
                        <span v-else class="mr-1 font-extrabold">+</span>
                        {{ useNumberFormatter(xp) }} xp
                    </div>
                </div>
                <p class="text-sm text-grey-500 font-medium tracking-0.009">
                    {{ description }}
                </p>
            </div>
        </div>

        <EarnedXPModal v-model="isEarnedXPModalOpen" :XP="xp" />
    </div>
</template>

<style scoped>
.task-card {
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.02);
}
</style>
