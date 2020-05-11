export default {
    state: {
        lastSearch: {
            from: null,
            to: null
        },
        basket: {
            items: []
        }
    },
    mutations: {
        setLastSearch(state, payload) {
            state.lastSearch = payload;
        },
        addToBasket(state, payload) {
            state.basket.items.push(payload);
        },
        removeFromBasket(state, payload) {
            state.basket.items = state.basket.items.filter(
                item => item.bookable.id !== payload
            );
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
    },
    getters: {
        itemsInBasket: state => state.basket.items.length
    }
};
