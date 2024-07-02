<script setup>
import ChevronLeftIcon from "@Components/Icons/ChevronLeftIcon.vue";

defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <header class="flex items-center justify-between px-6 py-4">
        <div class="flex items-center">
            <button
                class="bg-secondary w-10 h-10 rounded-xl flex items-center justify-center"
            >
                <ChevronLeftIcon />
            </button>
            <div class="text-base font-semibold -tracking-0.01 ml-3">
                {{ title }}
            </div>
        </div>

        <div class="flex items-center">
            <div class="relative">
                <button
                    class="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
                >
                    <img
                        class="h-full w-full object-cover"
                        src="/images/user.png"
                        alt="Your avatar"
                    />
                </button>
            </div>
        </div>
    </header>
</template>
