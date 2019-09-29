const book = {
  state: {
    fileName: "",
    menuVisible: false,
    settingVisible: -1 //-1不显示0字号1主题2进度3目录
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName;
    },
    SET_MENUVISIBLE: (state, menuVisible) => {
      state.menuVisible = menuVisible;
    },
    SET_VISIBLE: (state, settingVisible) => {
      state.settingVisible = settingVisible;
    }
  }
};

export default book;
