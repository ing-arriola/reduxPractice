import React from "react";
import { connect } from "react-redux";
import { ListGroup } from "react-bootstrap";

const SongDetail = ({ selectedSong }) => {
  const rederedList = selectedSong ? (
    <ListGroup>
      <ListGroup.Item>Title: {selectedSong.title}</ListGroup.Item>
      <ListGroup.Item>Duration: {selectedSong.duration}</ListGroup.Item>
    </ListGroup>
  ) : (
    ""
  );
  return <>{rederedList}</>;
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
