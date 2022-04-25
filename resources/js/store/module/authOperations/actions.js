/**
 * Actions for CrudOperations
 */
import axios from "axios";

const actions = {

    /**
     * 
     * Store action that removes a project
     * 
     * @param {Integer} entryID 
     */
    async removeProject({ commit }, entryID) {
        await axios.get('/sanctum/csrf-cookie');
        return await axios.delete(`/api/admin/projects/${entryID}`, { withCredentials: true })
            .then((response) => {
                return "successful";
            })
            .catch(error => {
                console.log(error);
            })
    },



}
export default actions;