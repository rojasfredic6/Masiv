import Vue from "vue";
import Vuex from "vuex";
import { getComic } from "@/api/api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comic: "",
    loader: false,
    rating: [
      { value: 1, select: false },
      { value: 2, select: false },
      { value: 3, select: false },
      { value: 4, select: false },
      { value: 5, select: false },
    ],
  },
  mutations: {
    addComic(state, payload) {
      state.comic = payload;
    },
    loader(state) {
      state.loader = !state.loader;
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
