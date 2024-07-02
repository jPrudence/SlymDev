<script setup>
import GetStarted from "./GetStarted.vue";
import TaskList from "./TaskList.vue";

const totalEarnedXP = 20500;
const totalXPToEarn = 12000;
</script>
<template>
    <div class="flex flex-col gap-6 items-center py-6">
        <GetStarted
            class="w-1/2"
            :progress="50"
            :totalEarnedXP="totalEarnedXP"
            :totalXPToEarn="totalXPToEarn"
        />

        <TaskList class="w-1/2" />
    </div>
</template>
