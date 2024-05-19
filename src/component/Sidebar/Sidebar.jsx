import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="logo">Almdrasa-Notes</h1>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className=" search-field"
          aria-label="Search"
        />
      </Form>
      <div className="links__container">
        <Link to={"/"} className="link">
          Notes
        </Link>
        <Link to={"/addnote"} className="link">
          Add Note
        </Link>
      </div>
    </div>
  );
}
export default Sidebar;
