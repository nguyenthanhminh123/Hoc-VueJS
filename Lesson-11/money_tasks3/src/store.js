import { createStore } from "vuex";

const store = createStore({
    state () {
      return {
        count: 1000,
        transaction: null,
      };
    },
    mutations: {
      increment (state) {
        state.count++
      },
      setTransaction(state, transactionPayload){
        state.transaction = transactionPayload
      }
    },
    actions: {
      async fetchTraction( {commit}, {id} ) {
        const res = await fetch (
          "http://localhost:3000/transactions/" + this.$route.params.id
        );
        const data = await res.json();

        commit("setTransaction", data);
      }
    }
  });

export default store;