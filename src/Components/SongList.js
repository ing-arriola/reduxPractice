import React from "react";
import { connect } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import { selectSong } from "../Actions";
const SongList = ({ songs, selectSong }) => {
  const rederedList = songs.map((song, index) => (
    <ListGroup key={index}>
      <ListGroup.Item className="d-flex justify-content-between">
        {song.title}
        <Button onClick={() => selectSong(song)}>Select</Button>
      </ListGroup.Item>
    </ListGroup>
  ));
  return <>{rederedList}</>;
};

const mapStateToProps = (state) => {
  console.log(state);

  return { songs: state.songsList };
};

export default connect(mapStateToProps, { selectSong })(SongList);
