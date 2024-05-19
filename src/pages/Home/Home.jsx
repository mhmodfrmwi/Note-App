import Notes from "../../component/Notes/Notes";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./home.css";
function Home() {
  return (
    <>
      <div className="home">
        <Sidebar />
        <Notes />
      </div>
    </>
  );
}

export default Home;
