<template>
  <div class="modal-overlay">
    <div class="modal" tabindex="-1">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Project</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="close"
            ></button>
          </div>
          <div class="modal-body text-center"></div>
          <div class="modal-footer">
            <div>
              <button class="btn-outline-secondary btn mb-3">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    /**
     * Close will close the modal by sending the close info back to parent
     *
     * @return void
     */
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  display: block;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>