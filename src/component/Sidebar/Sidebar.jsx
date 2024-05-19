import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./sidebar.css";
import { useState } from "react";
import fetchFromDatabase from "../../lib/utils/fetchFromDatabase";
function Sidebar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    const data = fetchFromDatabase("notes");
    const filteredNotes = data.filter((note) => note.title.includes(search));
    console.log(filteredNotes);
    filteredNotes.length && navigate(`/note/${+filteredNotes[0].id}`);
  };
  return (
    <div className="sidebar">
      <h1 className="logo">Almdrasa-Notes</h1>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Search"
          className=" search-field"
          aria-label="Search"
          onChange={handleSearch}
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
