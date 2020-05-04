export default {
    state: {
        lastSearch: {
            from: null,
            to: null
        }
    },
    mutations: {
        setLastSearch(state, payload) {
            state.lastSearch = payload;
        }
    },
    actions: {
        setLastSearch(contex, payload) {
            contex.commit("setLastSearch", payload);
            localStorage.setItem("lastSearch", JSON.stringify(payload));
        },
        loadStoredState(contex) {
            const lastSearch = localStorage.getItem("lastSearch");
            if (lastSearch) {
                contex.commit("setLastSearch", JSON.parse(lastSearch));
            }
        }
    }
};
