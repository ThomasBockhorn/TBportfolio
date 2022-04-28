<template>
  <div class="modal-overlay">
    <div class="modal" tabindex="-1">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Admin List of Projects</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="close"
            ></button>
          </div>
          <div class="modal-body text-center">
            <div class="list-group">
              <div v-for="project in projects" :key="project.id">
                <AuthProject
                  :project="project"
                  @deleted="deleted"
                ></AuthProject>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div>
              <button class="btn-outline-secondary btn mb-3" @click="showModal">
                Add A Project
              </button>
              <transition name="modal-fade">
                <auth-add-edit-modal
                  v-if="isModalVisible"
                  @close="closeModal"
                />
              </transition>
            </div>
            <nav aria-label="crud navigation">
              <ul class="pagination pagination-sm">
                <div v-for="page in totalPages" :key="page">
                  <li
                    class="page-item"
                    @click="tab = page"
                    :class="{ active: tab === page }"
                  >
                    <a
                      class="page-link"
                      aria-current="page"
                      @click="fetchData(page)"
                      >{{ page }}</a
                    >
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * This modal will all the user to add, update, and delete projects.
 * This is the child of the LoginComponent
 */

import AuthProject from "./project/authProject.vue";
import { mapGetters } from "vuex";
import AuthAddEditModal from "./AuthAddEditModal.vue";

export default {
  name: "AuthModal",
  data() {
    return {
      tab: 1,
      isModalVisible: false,
    };
  },
  components: {
    AuthProject,
    AuthAddEditModal,
  },
  mounted() {
    this.fetchData(1);
  },
  computed: {
    ...mapGetters({
      projects: "projects",
      totalPages: "totalPages",
    }),
  },
  methods: {
    /**
     * Close will close the modal by sending the close info back to parent
     *
     * @return void
     */
    close() {
      this.$emit("close");
    },

    /**
     * fetchData will fetch the data and populate it
     *
     * @param {Integer} page
     * @return void
     */
    async fetchData(page) {
      await this.$store.dispatch("getProjects", page);
    },

    /**
     * This will find the index of the project id and delete it from the projects array
     *
     * @param {Integer} id
     * @return void
     */
    deleted(id) {
      let index = this.projects.map((item) => item.id).indexOf(id); //This gets the index of project
      this.projects.splice(index, 1);
    },

    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
.modal {
  display: block;
}
</style>