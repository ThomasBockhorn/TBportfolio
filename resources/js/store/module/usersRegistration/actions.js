/**
 * Actions for user store
 */
import axios from "axios";

const actions = {
    /**
     * submitRegistration will submit info to the server
     *
     * @param {event} userInput 
     * @return void
     */
    async submitRegistration({ commit }, userInput) {
        await axios
            .post("http://localhost:8000/api/register", {
                name: userInput.name,
                email: userInput.email,
                password: userInput.password,
                verifyPassword: userInput.verifyPassword
            })
            .then((response) => {
                commit('SET_TOKEN', response.data.data.token);
            })
            .catch((error) => {
                console.log(error);
            });
    },
};

export default actions;