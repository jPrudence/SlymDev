<script setup>
import { Dialog, DialogPanel } from "@headlessui/vue";
import { useNumberFormatter } from "@/Composables/useNumberFormatter";

import XPIcon from "@Components/Icons/XPIcon.vue";
import XPEarnedIcon from "@Components/Icons/XPEarnedIcon.vue";

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
                class="fixed inset-0 z-50 bg-white/50 backdrop-blur-sm flex items-center justify-center"
            >
                <DialogPanel
                    class="md:w-1/4 sm:w-4/5 w-11/12 bg-white/80 rounded-md py-12 px-6 shadow-lg"
                >
                    <div class="flex flex-col items-center gap-4 text-center">
                        <img
                            class="w-5/6"
                            src="/images/completed-congratulations.svg"
                            alt="Congratulations"
                        />
                        <p
                            class="sm:text-2xl text-xl text-grey-900 font-bold leading-9"
                        >
                            Congratulations You've completed
                        </p>
                        <p
                            class="sm:text-2xl text-xl font-bold text-gradient-primary leading-9"
                        >
                            DM Tour guide
                        </p>
                        <div class="sm:flex justify-between gap-8">
                            <p class="text-base font-bold text-grey-600">
                                Total XP earned
                            </p>
                            <div
                                class="flex justify-between items-center font-extrabold text-gradient-primary"
                            >
                                <XPEarnedIcon :width="8" class="mr-1" />
                                <span class="text-[11px] mr-0.5">{{
                                    useNumberFormatter(XP)
                                }}</span>
                                <span class="text-[8px] mr-1">XP</span>
                                <XPIcon />
                            </div>
                        </div>

                        <button
                            @click="closeDialog"
                            class="px-4 py-2 bg-gradient-primary text-white rounded-xl text-xs w-full outline-none focus:outline-none hover:bg-gradient-secondary"
                        >
                            Done
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    </div>
</template>
