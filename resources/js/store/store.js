import { createStore } from 'vuex';
import portfolio from './module/portfolio/index';
import usersRegistration from './module/usersRegistration/index';

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
        usersRegistration
    }
});