<template>
  <div>
    <div id="portfolio">
      <div class="container-fluid mt-5">
        <ProjectNav></ProjectNav>
        <div class="d-flex flex-wrap overflow-auto justify-content-center mt-5">
          <div v-for="project in projects" :key="project.id" class="m-2">
            <Project :project="project"></Project>
          </div>
        </div>
      </div>
    </div>
    <PaginationComponent
      :totalPages="totalPages"
      @clicked="fetchData"
    ></PaginationComponent>
  </div>
</template>

<script>
import Project from "../projects/Project.vue";
import PaginationComponent from "../pagination/PaginationComponent.vue";
import ProjectNav from "../projectNav/ProjectNav.vue";
import { mapGetters } from "vuex";

/**
 * PortfolioComponent is where all the projects are displayed.
 */
export default {
  name: "PortfolioComponent",
  data() {
    return {
      location: "portfolio",
    };
  },
  components: {
    Project,
    PaginationComponent,
    ProjectNav,
  },
  mounted() {
    this.fetchData(1);
  },
  computed: {
    ...mapGetters({
      projects: 'projects',
      totalPages: 'totalPages'
    })
  },
  methods: {

    /**
     * The fetchData method will get the projects by calling the store
     *
     * @param {Integer} page 
     * @return void
     */
    async fetchData(page) {
      await this.$store.dispatch("getProjects", page);
    },
  },
};
</script>

<style scoped>

.container-fluid {
  height: 100%;
}

</style>