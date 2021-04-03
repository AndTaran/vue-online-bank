<template>
  <div class="sidebar" v-if="sidebar">
    <span class="sidebar-close" @click="close">&times;</span>
    <div class="sidebar-content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        doloremque, deleniti aperiam natus eligendi commodi quam pariatur eaque
        repellat et rerum ex aut nobis voluptatibus illo voluptate beatae
        exercitationem laboriosam.
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const sidebar = computed(() => store.state.sidebar);

    return { sidebar, close: () => store.commit("closeSidebar") };
  },
};
</script>

<style></style>
