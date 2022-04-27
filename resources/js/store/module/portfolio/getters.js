/**
 * Getters of portfolio store
 */
const getters = {
    projects: state => {
        return state.projects;
    },
    pagination: state => {
        return state.pagination;
    },
    totalPages: state => {
        return state.totalPages;
    }
}

export default getters;