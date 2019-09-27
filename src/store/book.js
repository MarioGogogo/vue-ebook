const book = {
  state: {
    fileName: ""
  },
  mutations: {
    SET_FILENAME: (state, newTest) => {
      state.fileName = newTest;
    }
  },
  actions: {
    setFileName: ({ commit }, state, newTest) => {
      return commit("SET_FILENAME");
    }
  }
};
