<template>
    <div ref="target" class="h-screen">
        <transition :name="animationType">
            <div v-if="animate" class="animated-component h-full ">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script lang="js">
import { onMounted, ref } from 'vue';
export default {
  name: 'AnimatedComponent',
  props: {
    animationType: {
      type: String,
      required: false,
      default: 'fade'
    }
  },
  setup() {
    const target = ref("target");
    const animate = ref(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        animate.value = entry.isIntersecting;
        /*if (entry.isIntersecting && !animate.value) {
          animate.value = true;
          //observer.unobserve(target.value); // Stop observing after animation
        }*/
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4
      }
    );
    onMounted(() => {
      observer.observe(target.value);
    });
    return {
      animate,
      target
    };
  }
};
</script>

<style scoped>

.animated-component.fade-enter-from,
.animated-component.zoom-enter-from {
  transition: none;
}
/* Fade animation */
.fade-enter-active {
  transition: opacity 1900ms ease-in;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 900ms ease-out;
}
/* Zoom animation */
.zoom-enter-active,
.zoom-leave-active {
  transition: transform 300ms ease-in;
}
.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.9);
}
</style>