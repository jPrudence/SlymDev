<script setup>
import CloseIcon from "@Components/Icons/CloseIcon.vue";
import GradientBlueStarsIcon from "@Components/Icons/GradientBlueStarsIcon.vue";
import InboxIcon from "@Components/Icons/InboxIcon.vue";
import DiscussionRuleIcon from "@Components/Icons/DiscussionRuleIcon.vue";
import AddressBookIcon from "@Components/Icons/AddressBookIcon.vue";
import ZapierIcon from "@Components/Icons/ZapierIcon.vue";
import BoostDMIcon from "@Components/Icons/BoostDMIcon.vue";
import BlurredDMIcon from "@Components/Icons/BlurredDMIcon.vue";

defineProps({
    title: {
        type: String,
        required: true,
    },
});

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
        class="flex flex-col w-95 bg-white shadow-card rounded-tl-2xl rounded-bl-2xl rounded-tr-md rounded-br-md"
    >
        <div class="flex items-center justify-between py-[21px] px-[13px]">
            <div class="text-base font-bold text-grey-800 w-30 text-center">
                {{ title }}
            </div>

            <button
                class="w-12 h-12 rounded-xl flex items-center justify-center border border-alice-blue"
            >
                <CloseIcon />
            </button>
        </div>

        <div class="overflow-y-auto overflow-x-hidden flex-grow">
            <ul class="flex flex-col gap-4 p-3">
                <li>
                    <a
                        href="#"
                        class="flex items-center px-4 py-3 bg-secondary rounded-xl"
                    >
                        <GradientBlueStarsIcon />
                        <span
                            class="ml-2 text-sm -tracking-0.01 font-bold leading-6 text-gradient-primary"
                        >
                            DM Tour Guide
                        </span>
                    </a>
                </li>
                <li class="flex flex-col gap-4">
                    <span
                        class="px-4 font-bold text-tiny tracking-1 leading-4.5 text-grey-400 uppercase"
                    >
                        MANAGE INBOX
                    </span>

                    <ul>
                        <li v-for="item in manageInboxItems" :key="item.text">
                            <a
                                href="#"
                                class="flex items-center gap-4 px-4 py-3 rounded-xl"
                            >
                                <component
                                    :is="item.icon"
                                    class="text-grey-600"
                                />
                                <span
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
                        class="px-4 font-bold text-tiny tracking-1 leading-4.5 text-grey-400 uppercase"
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
                                class="flex items-center justify-between gap-24 px-4 py-3 rounded-xl"
                            >
                                <div class="flex gap-4 opacity-50">
                                    <component
                                        :is="item.icon"
                                        class="text-grey-600"
                                    />
                                    <span
                                        class="text-sm -tracking-0.01 leading-6 font-bold text-grey-900"
                                    >
                                        {{ item.text }}
                                    </span>
                                </div>
                                <span
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
