import React from "react";
import { connect } from "react-redux";

const SongList = ({ songs }) => {
  const rederedList = songs.map((song) => <div>{song.title}</div>);
  return <div>{rederedList}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);

  return { songs: state.songsList };
};

export default connect(mapStateToProps)(SongList);
