import "./home.css";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Main />
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
