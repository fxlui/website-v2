<script setup lang="ts">
import iconXMarkVue from "@/components/icons/iconXMark.vue";
const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="modal-mask"
      role="dialog"
      aria-describedby="Project Details"
    >
      <div class="modal-wrapper relative">
        <div
          class="overflow-auto max-h-[80vh] mx-10 md:mx-36 lg:mx-48 xl:mx-80 background-elevated p-5 rounded-xl"
        >
          <slot name="body"></slot>
        </div>
        <div
          class="bottom-3 left-0 right-0 absolute modal-footer flex justify-center py-2"
        >
          <slot name="footer">
            <button
              aria-label="close modal"
              class="group transition-all mt-4 p-2 background hover:bg-primary rounded-full hover:scale-125 border-solid border-4 border-white dark:border-neutral-600 hover:border-primary"
              @click="$emit('close')"
            >
              <iconXMarkVue
                class="transition-all group-hover:scale-110 h-4 w-4 fill-black dark:fill-white group-hover:fill-white"
              />
            </button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
