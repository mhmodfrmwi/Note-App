import "./notes.css";
function Notes() {
  return (
    <div className="notes">
      <p className="logo">PINNED</p>
      <div className="Card">
        <h2 className="card__title">Light & Bright in Brooklyn</h2>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
          dui.{" "}
        </p>
        <div className="bottom__container">
          <p className="card__date">Feb 8, 2021</p>
          <p className="card__button">delete</p>
        </div>
      </div>
      <div className="notes_header">
        <h4 className="notes_header__title">Notes</h4>{" "}
      </div>
    </div>
  );
}
export default Notes;
