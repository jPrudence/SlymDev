<script setup>
import { computed } from "vue";
import { useNumberFormatter } from "@/Composables/useNumberFormatter";

import GradientBlueStarsIcon from "@Components/Icons/GradientBlueStarsIcon.vue";
import GetStartedIcon from "@Components/Icons/GetStartedIcon.vue";
import SparkleIcon from "@Components/Icons/SparkleIcon.vue";

const props = defineProps({
    progress: {
        type: Number,
        required: true,
    },
    totalEarnedXP: {
        type: Number,
        required: true,
    },
    totalXPToEarn: {
        type: Number,
        required: true,
    },
});

const formattedTotalEarnedXP = computed(() =>
    useNumberFormatter(props.totalEarnedXP)
);
const formattedTotalXPToEarn = computed(() =>
    useNumberFormatter(props.totalXPToEarn)
);
const progressBarWidth = computed(() => `${props.progress}%`);
</script>

<template>
    <div class="p-6">
        <div class="mb-6">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <GradientBlueStarsIcon
                        width="21"
                        class="relative top-0.5"
                    />
                    <span
                        class="ml-1 text-2xl -tracking-0.031 font-bold leading-9 text-gradient-primary"
                    >
                        Get Started
                    </span>
                </div>
                <div class="flex items-center gap-3">
                    <GetStartedIcon />
                    <div class="flex flex-col -tracking-0.01 font-bold">
                        <div class="flex">
                            <span
                                class="text-sm text-gradient-primary leading-5"
                            >
                                You earned
                                {{ useNumberFormatter(totalEarnedXP) }}
                            </span>
                            <SparkleIcon class="relative -top-1 right-0.5" />
                        </div>
                        <span class="text-tiny leading-4">
                            Total XP to earn :
                            {{ useNumberFormatter(totalXPToEarn) }}
                        </span>
                    </div>
                </div>
            </div>
            <div
                class="overflow-hidden h-4 mb-4 text-xs flex items-center rounded-5lg bg-[linear-gradient(318.22deg,_#FFFFFF_-4.95%,_#FAFAFF_99.74%)]"
            >
                <div
                    :style="{ width: progressBarWidth }"
                    class="bg-gradient-primary rounded-5lg h-2"
                ></div>
            </div>
        </div>
    </div>
</template>
