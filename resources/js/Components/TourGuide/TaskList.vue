<script setup>
import { ref, computed } from "vue";
import TaskItem from "./TaskItem.vue";
import CompletedGuideModal from "./CompletedGuideModal.vue";

const taskList = ref([
    {
        id: 1,
        title: "Create more inbox",
        illustration_url: "/images/tasks/create-more-inbox.svg",
        description: "Create more inbox, welcome your new contact by a message",
        xp: 500,
        completed: true,
    },
    {
        id: 2,
        title: "Manage your messaging rules",
        illustration_url: "/images/tasks/manage-your-messaging-rules.svg",
        video_url: "https://www.youtube.com/watch?v=fdf44544dfdf",
        description: "Create more inbox, welcome your new contact by a message",
        xp: 100,
        completed: false,
    },
]);

const progress = computed(() => {
    const completedSteps = taskList.value.filter(
        (step) => step.completed
    ).length;
    return Math.round((completedSteps / taskList.value.length) * 100);
});

const isCompletedGuideModalOpen = ref(false);
const toggleCompletedGuideModal = () => {
    isCompletedGuideModalOpen.value = !isCompletedGuideModalOpen.value;
};
</script>
<template>
    <div class="flex flex-col gap-6">
        <TaskItem
            v-for="task in taskList"
            :key="task.id"
            :title="task.title"
            :description="task.description"
            :illustrationUrl="task.illustration_url"
            :videoUrl="task.video_url"
            :xp="task.xp"
            :completed="task.completed"
        />

        <button
            @click="toggleCompletedGuideModal"
            class="px-4 py-2 bg-gradient-primary text-white rounded-xl text-xs outline-none focus:outline-none"
        >
            Open Completed Guide Modal
        </button>

        <CompletedGuideModal
            v-model="isCompletedGuideModalOpen"
            :XP="taskList[0].xp"
        />
    </div>
</template>
