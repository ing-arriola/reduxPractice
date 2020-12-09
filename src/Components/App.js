import "../App.css";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
function App() {
  return (
    <Row className="mx-5 mt-5 ">
      <Col lg={6}>
        <SongList />
      </Col>
      <Col lg={6}>
        <SongDetail />
      </Col>
    </Row>
  );
}

export default App;
