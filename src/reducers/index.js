import { combineReducers } from "redux";
const songList = () => {
  return [
    { title: "Olallala", duration: "4:34" },
    { title: "daidaidmma", duration: "3:34" },
    { title: "paramarakondallo", duration: "2:54" },
    { title: "nuvvve nuvvaantu", duration: "6:34" },
  ];
};

const selectedSong = (songSelected = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return songSelected;
};

export default combineReducers({
  songs: songList,
  selectedSong: selectedSong,
});
