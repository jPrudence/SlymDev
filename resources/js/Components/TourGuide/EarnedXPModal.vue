<script setup>
import { Dialog, DialogPanel } from "@headlessui/vue";

defineProps({
    XP: {
        type: Number,
        required: true,
    },
});

const isOpen = defineModel({ default: false });

const closeDialog = () => {
    isOpen.value = false;
};
</script>

<template>
    <div>
        <Dialog :open="isOpen" @close="closeDialog">
            <div
                class="fixed inset-0 z-50 bg-white/10 backdrop-blur-sm flex items-center justify-center"
            >
                <DialogPanel class="w-50 bg-white/80 rounded-md py-12 px-6">
                    <div class="flex flex-col items-center gap-4">
                        <img
                            class="w-5/6"
                            src="/images/earn-congratulations.svg"
                            alt="Congratulations"
                        />
                        <p class="text-sm text-grey-900 font-bold">
                            Congratulations You've Earned
                        </p>
                        <p class="text-3xl font-semibold text-gradient-primary">
                            {{ XP }} <span class="text-2xl">XP</span>
                        </p>

                        <button
                            @click="closeDialog"
                            class="px-4 py-2 bg-gradient-primary text-white rounded-xl text-xs w-full outline-none focus:outline-none"
                        >
                            Yeahhhhhhhhhhh !
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    </div>
</template>
