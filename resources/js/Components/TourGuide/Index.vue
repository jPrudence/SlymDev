<script setup>
import GetStarted from "./GetStarted.vue";
</script>
<template>
    <div class="flex flex-col gap-6 items-center py-6">
        <GetStarted
            class="w-1/2"
            :progress="50"
            :totalEarnedXP="20500"
            :totalXPToEarn="12000"
        />
    </div>
</template>
