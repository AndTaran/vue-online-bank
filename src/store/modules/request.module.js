import store from "../index";
import axios from "../../axios/request";

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: {
    setRequest(state, requests) {
      state.requests = requests;
    },
    addRequests(state, request) {
      state.requests.push(request);
    },
  },
  actions: {
    async create({ commit, dispatch }, payload) {
      try {
        const token = store.getters["auth/token"];
        const { data } = await axios.post(
          `requests.json?auth=${token}`,
          payload
        );
        commit("addRequest", { ...payload, id: data.name });
        dispatch(
          "setMessage",
          {
            value: "Заявка успешно создана",
            type: "primary",
          },
          { root: true }
        );
      } catch (error) {
        dispatch(
          "setMessage",
          {
            value: error.message,
            type: "danger",
          },
          { root: true }
        );
      }
    },
  },
  getters: {
    requests(state) {
      return state.requests;
    },
  },
};
