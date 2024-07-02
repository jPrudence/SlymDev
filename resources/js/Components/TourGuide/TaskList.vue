<script setup>
import { ref, computed } from "vue";
import TaskItem from "./TaskItem.vue";

const taskList = ref([
    {
        id: 1,
        title: "Create more inbox",
        illustration: "/images/tasks/create-more-inbox.svg",
        description: "Create more inbox, welcome your new contact by a message",
        xp: 500,
        completed: true,
    },
    {
        id: 2,
        title: "Manage your messaging rules",
        illustration: "/images/tasks/manage-your-messaging-rules.svg",
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
</script>
<template>
    <div class="flex flex-col gap-6">
        <TaskItem
            v-for="task in taskList"
            :key="task.id"
            :title="task.title"
            :description="task.description"
            :illustration="task.illustration"
            :xp="task.xp"
            :completed="task.completed"
        />
    </div>
</template>
