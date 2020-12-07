//Action creator
export const selectSong = (song) => {
  //action
  return {
    type: "SELECT_SONG",
    payload: song,
  };
};
