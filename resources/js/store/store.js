import { createStore } from 'vuex';
import portfolio from './module/portfolio/index';
import usersRegistration from './module/usersRegistration/index';
import userLogin from './module/userLogin/index';
import authOperations from './module/authOperations/index';

import createPersistedState from 'vuex-persistedstate';

/**
 * Vuex Store
 */

export const store = createStore({
    plugins: [
        createPersistedState()
    ],
    modules: {
        portfolio,
        usersRegistration,
        userLogin,
        authOperations
    }
});