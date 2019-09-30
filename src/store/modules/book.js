import { FONT_FAMILY } from "../../utils/book";

const book = {
  state: {
    fileName: "",
    menuVisible: false,
    settingVisible: -1, //-1不显示0字号1主题2进度3目录
    defaultFontSize: 16,
    defaultFontFamily: "Default",
    fontFamilyVisible: false,
    defaultTheme: "Default",
    bookAvailable: false,
    progress: 0,
    section: 0,
    isPaginating: true,
    currentBook: null, //默认epubjs实例
    navigation: null,
    cover: null,
    metadata: null,
    paginate: "",
    pagelist: null,
    offsetY: 0,
    isBookmark: null,
    speakingIconBottom: 58
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
    },
    SET_DEFAULTFONTSIZE: (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize;
    },
    SET_DEFAULTFONTFAMILY: (state, defaultFontFamily) => {
      state.defaultFontFamily = defaultFontFamily;
    },
    //更新更多
    SET_FONT_FAMILY_VISIBLE: (state, visible) => {
      state.fontFamilyVisible = visible;
    },
    SET_DEFAULT_THEME: (state, theme) => {
      state.defaultTheme = theme;
    },
    SET_BOOK_AVAILABLE: (state, bookAvailable) => {
      state.bookAvailable = bookAvailable;
    },
    SET_PROGRESS: (state, progress) => {
      state.progress = progress;
    },
    SET_SECTION: (state, section) => {
      state.section = section;
    },
    SET_IS_PAGINATING: (state, isPaginating) => {
      state.isPaginating = isPaginating;
    },
    SET_CURRENT_BOOK: (state, currentBook) => {
      state.currentBook = currentBook;
    },
    SET_NAVIGATION: (state, navigation) => {
      state.navigation = navigation;
    },
    SET_COVER: (state, cover) => {
      state.cover = cover;
    },
    SET_METADATA: (state, metadata) => {
      state.metadata = metadata;
    },
    SET_PAGINATE: (state, paginate) => {
      state.paginate = paginate;
    },
    SET_PAGELIST: (state, pagelist) => {
      state.pagelist = pagelist;
    },
    SET_OFFSETY: (state, offsetY) => {
      state.offsetY = offsetY;
    },
    SET_IS_BOOKMARK: (state, isBookmark) => {
      state.isBookmark = isBookmark;
    },
    SET_SPEAKING_ICON_BOTTOM: (state, speakingIconBottom) => {
      state.speakingIconBottom = speakingIconBottom;
    }
  }
};

export default book;
