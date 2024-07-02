import { ref, computed, onMounted, onUnmounted } from "vue";

export function useMobileScreen(breakpoint = 768) {
    const windowWidth = ref(window.innerWidth);

    const updateWindowWidth = () => {
        windowWidth.value = window.innerWidth;
    };

    onMounted(() => {
        window.addEventListener("resize", updateWindowWidth);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", updateWindowWidth);
    });

    const isMobileScreen = computed(() => windowWidth.value < breakpoint);

    return { isMobileScreen };
}
