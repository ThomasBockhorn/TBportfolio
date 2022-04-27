<template>
  <div>
    <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ project.title }}</h5>
        <small>{{ project.updated_at }}</small>
      </div>
      <p class="mb-1">{{ project.description }}</p>
      <small>
        <div>
          <button class="btn btn-outline-primary m-1">Edit</button>
          <button
            class="btn btn-outline-danger m-1"
            @click.prevent="remove(project.id)"
          >
            Delete
          </button>
        </div>
      </small>
    </a>
  </div>
</template>

<script>
export default {
  props: ["project"],
  methods: {

    /**
     * This method will call the store method, removeProject, and emit a the projectID to the parent which will
     * delete the local Projects array
     *
     * @param {any} projectID 
     * @return void
     */
    remove(projectID) {
      this.$emit("deleted", projectID);
      this.$store.dispatch("removeProject", projectID);
    },
  },
};
</script>