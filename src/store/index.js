import Vue from "vue";
import Vuex from "vuex";
import { getComic } from "@/api/api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comic: "",
  },
  mutations: {
    addComic(state, payload) {
      state.comic = payload;
    },
  },
  actions: {
    async halarComic(context, payload) {
      try {
        const comic = await getComic(payload);
        context.commit("addComic", comic.data);
        return comic;
      } catch (err) {
        throw new Error("Error en Store: " + err);
      }
    },
  },
  modules: {},
});
