import { Link, useParams } from "react-router-dom";
import Notes from "../../component/Notes/Notes";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./note.css";
import { Images } from "../../lib/images";
function Note() {
  const params = useParams();
  return (
    <div className="note">
      <Sidebar />
      <Notes />
      <div className="note__content">
        <h1 className="note__title">Business Partners Work at Modern Office</h1>
        <p className="date__author">Feb 8, 2021 / By Yousef</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem
          ipsum dolor sit amet, consectetur adipisce placerat mauris nisl. Proin
          vitae urna eu sem pellentesque laoreet.
        </p>
        <Link to={"/addnote"}>
          <img
            src={Images.plusButton[0]}
            alt="Plus Button"
            className="plus__button"
          />
        </Link>
      </div>
    </div>
  );
}
export default Note;
