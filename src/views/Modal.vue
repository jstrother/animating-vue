<template>
  <div>
    <h1>This is the Modal Page.</h1>
    <button @click="toggleModal">Open</button>
    <div v-if="isOpen" class="modal">
      <button @click="toggleModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped></style>
