/**
 * actions for userLogin store
 */
import axios from 'axios';
//import axios from "@/axios/axios";

const actions = {
    async login({ commit }, userInfo) {
        await axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
                return axios
                    .post("http://localhost:8000/api/login", {
                        email: userInfo.email,
                        password: userInfo.password,
                    })
                    .then((response) => {
                        commit('SET_TOKEN', response.data.data.token);
                        commit('SET_SUCCESSFUL', true);
                    })
                    .catch((error) => {
                        commit('SET_SUCCESSFUL', false);
                        console.log(error);
                    });
            })
            .catch((error) => console.log(error))
    },
}

export default actions;