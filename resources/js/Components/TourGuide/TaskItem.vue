<script setup>
import { defineProps } from "vue";

import { useNumberFormatter } from "@/Composables/useNumberFormatter";

import CompletedTaskIcon from "@Components/Icons/CompletedTaskIcon.vue";
import UncompletedTaskIcon from "@Components/Icons/UncompletedTaskIcon.vue";
import XPEarnedIcon from "@Components/Icons/XPEarnedIcon.vue";
import ExternalLinkIcon from "@Components/Icons/ExternalLinkIcon.vue";

defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    illustration: {
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
</script>

<template>
    <div
        class="task-card items-center p-6 bg-white rounded-[21px] flex flex-col gap-4 transition-transform transform hover:scale-105"
    >
        <img
            v-if="illustration"
            class="w-full h-50"
            :src="illustration"
            :alt="title"
        />

        <div class="flex gap-2 w-full">
            <div class="mt-[0.15rem]">
                <CompletedTaskIcon v-if="completed" />
                <UncompletedTaskIcon v-else />
            </div>
            <div class="flex flex-col gap-2 w-full">
                <div class="flex gap-2 justify-between">
                    <a
                        href="#"
                        class="flex items-center font-bold leading-6 text-base"
                        :class="{
                            'text-grey-900': !completed,
                            'line-through text-grey-800': completed,
                        }"
                    >
                        {{ title }}

                        <ExternalLinkIcon v-if="!completed" class="ml-1" />
                    </a>
                    <div
                        class="flex items-center text-gradient-primary font-bold leading-6 text-base whitespace-nowrap"
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
    </div>
</template>

<style scoped>
.task-card {
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.02);
}
</style>
