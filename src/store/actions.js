const actions = {
  setFileName: ({ commit }, fileName) => {
    return commit("SET_FILENAME", fileName);
  },
  setMenuVisible: ({ commit }, menuVisible) => {
    return commit("SET_MENUVISIBLE", menuVisible);
  },
  setVisible: ({ commit }, settingVisible) => {
    return commit("SET_VISIBLE", settingVisible);
  },

};

export default actions;
