import "../css/homepage.css"
import NavBar from "../components/navBar";

const HomePage = () => {
  return (
    <div className="home">
      <NavBar/>
      <div>
        <h1 className="mean_title">Designed for comfort. Built for memories.</h1>
      </div>
    </div>
  );
};
export default HomePage;