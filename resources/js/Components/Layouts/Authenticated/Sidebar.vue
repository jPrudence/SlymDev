<script setup>
import { ref } from "vue";

import CloseIcon from "@Components/Icons/CloseIcon.vue";
import GradientBlueStarsIcon from "@Components/Icons/GradientBlueStarsIcon.vue";
import InboxIcon from "@Components/Icons/InboxIcon.vue";
import DiscussionRuleIcon from "@Components/Icons/DiscussionRuleIcon.vue";
import AddressBookIcon from "@Components/Icons/AddressBookIcon.vue";
import ZapierIcon from "@Components/Icons/ZapierIcon.vue";
import BoostDMIcon from "@Components/Icons/BoostDMIcon.vue";
import BlurredDMIcon from "@Components/Icons/BlurredDMIcon.vue";
import ChevronLeftIcon from "@Components/Icons/ChevronLeftIcon.vue";

defineProps({
    title: {
        type: String,
        required: true,
    },
    isMobileScreen: {
        type: Boolean,
        default: false,
    },
});

const isSidebareOpened = defineModel({ default: true });
const toggleSidebar = () => {
    isSidebareOpened.value = !isSidebareOpened.value;
};

const manageInboxItems = [
    { icon: InboxIcon, text: "Inbox" },
    { icon: DiscussionRuleIcon, text: "Discussion Rules" },
    { icon: AddressBookIcon, text: "Address Book" },
    { icon: ZapierIcon, text: "Zapier" },
];

const advancedMessagesItems = [
    { icon: BoostDMIcon, text: "Boost DM®", status: "Coming Soon.." },
    { icon: BlurredDMIcon, text: "Blurred DM®", status: "Coming Soon.." },
];
</script>

<template>
    <div
        class="flex flex-col bg-white shadow-card rounded-tl-2xl rounded-bl-2xl rounded-tr-md rounded-br-md overflow-x-hidden transition-all"
        :class="{
            'sm:w-95 w-11/12': isSidebareOpened,
            'w-20 whitespace-nowrap': !isSidebareOpened,
            'w-full': isSidebareOpened && isMobileScreen,
        }"
    >
        <div class="flex items-center justify-between py-[21px] px-[13px]">
            <div
                v-if="isSidebareOpened"
                class="font-bold text-grey-800 text-center"
            >
                {{ title }}
            </div>

            <button
                class="rounded-xl flex items-center justify-center border border-alice-blue transition-transform hover:rotate-12"
                :class="isSidebareOpened ? 'w-12 h-12' : 'w-8 h-8'"
                @click="toggleSidebar"
            >
                <CloseIcon v-if="isSidebareOpened" />
                <ChevronLeftIcon v-else class="rotate-180" />
            </button>
        </div>

        <div class="overflow-y-auto overflow-x-hidden flex-grow">
            <ul class="flex flex-col gap-4 p-3">
                <li>
                    <a
                        href="#"
                        class="flex items-center py-3 bg-secondary rounded-xl"
                        :class="isSidebareOpened ? 'px-4' : 'px-3'"
                        @click="toggleSidebar"
                    >
                        <GradientBlueStarsIcon />
                        <span
                            v-if="isSidebareOpened"
                            class="ml-2 -tracking-0.01 font-bold leading-6 text-gradient-primary"
                            :class="isSidebareOpened ? 'text-sm' : 'text-tiny'"
                        >
                            DM Tour Guide
                        </span>
                    </a>
                </li>
                <li class="flex flex-col gap-4">
                    <span
                        class="font-bold text-tiny tracking-1 leading-4.5 text-grey-400 uppercase"
                        :class="isSidebareOpened ? 'px-4' : 'px-1'"
                    >
                        MANAGE INBOX
                    </span>

                    <ul>
                        <li v-for="item in manageInboxItems" :key="item.text">
                            <a
                                href="#"
                                class="flex items-center py-3 rounded-xl transition md:hover:-translate-x-1 hover:bg-secondary"
                                :class="
                                    isSidebareOpened
                                        ? 'gap-4 px-4'
                                        : 'gap-1.5 px-2'
                                "
                                @click="toggleSidebar"
                            >
                                <component
                                    :is="item.icon"
                                    class="text-grey-600"
                                />
                                <span
                                    v-if="isSidebareOpened"
                                    class="text-sm -tracking-0.01 leading-6 font-bold text-grey-900"
                                >
                                    {{ item.text }}
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="flex flex-col gap-4">
                    <span
                        class="font-bold text-tiny tracking-1 leading-4.5 text-grey-400 uppercase"
                        :class="isSidebareOpened ? 'px-4' : 'px-1'"
                    >
                        ADVANCED MESSAGES
                    </span>

                    <ul>
                        <li
                            v-for="item in advancedMessagesItems"
                            :key="item.text"
                        >
                            <a
                                href="#"
                                class="flex items-center justify-between py-3 rounded-xl cursor-not-allowed"
                                :class="isSidebareOpened ? 'px-4' : 'px-2'"
                            >
                                <div
                                    class="flex opacity-50"
                                    :class="
                                        isSidebareOpened ? 'gap-4' : 'gap-1.5'
                                    "
                                >
                                    <component
                                        :is="item.icon"
                                        class="text-grey-600"
                                    />
                                    <span
                                        v-if="isSidebareOpened"
                                        class="text-sm -tracking-0.01 leading-6 font-bold text-grey-900"
                                    >
                                        {{ item.text }}
                                    </span>
                                </div>
                                <span
                                    v-if="isSidebareOpened"
                                    class="font-semibold text-tiny text-grey-600"
                                >
                                    {{ item.status }}
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
