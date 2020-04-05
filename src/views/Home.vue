<template>
  <div>
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
    toggalModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped></style>
