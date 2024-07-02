<script setup>
import { computed, ref } from "vue";

const props = defineProps({
    progress: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    size: {
        type: Number,
        default: 5,
    },
});

const circumference = ref(2 * Math.PI * 40);
const strokeDashoffset = computed(() => {
    const progress = props.progress / props.total;
    return circumference.value * (1 - progress);
});
</script>

<template>
    <div class="relative" :class="`h-${size} w-${size}`">
        <svg class="w-full h-full" viewBox="0 0 100 100">
            <circle
                class="text-gray-200 stroke-current"
                stroke-width="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
            ></circle>
            <circle
                class="text-blue-600 progress-ring__circle stroke-current"
                stroke-width="10"
                stroke-linecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="strokeDashoffset"
            ></circle>
        </svg>
        <div class="absolute inset-0 flex items-center justify-center -top-1.5">
            <span class="font-bold">
                <span class="text-tiny text-gradient-primary">
                    {{ progress }}</span
                ><span class="text-[6px] text-[#B6BABF]">/{{ total }}</span>
            </span>
        </div>
    </div>
</template>

<style scoped>
.progress-ring__circle {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(120deg);
    transform-origin: 50% 50%;
}
</style>
