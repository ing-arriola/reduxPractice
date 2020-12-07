import { combineReducers } from "redux";

export const songListReducer = () => {
  return [
    { title: "smeels like a teen spirit", duration: "4:10" },
    { title: "I walk to my own song", duration: "3:30" },
    { title: "My Land", duration: "3:40" },
    { title: "Fight song", duration: "4:30" },
  ];
};

export const selectedSong = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  } else {
    return selectedSong;
  }
};

export default combineReducers({
  songsList: songListReducer,
  selectedSong: selectedSong,
});
