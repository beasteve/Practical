import "./main.css";

const Main = () => {
  return (
    <>
      <div className="main">
        <nav className="navbar">
          <h1>
            <span>S</span>tephen
          </h1>
          <ul className="navbar-items">
            <li className="navbar-item">
              {/* <i className="fa-solid fa-house"></i> */}
              <a href="#home">Home</a>
            </li>
            <li className="navbar-item">
              {/* <i className="fa-solid fa-blog"></i> */}
              <a href="#blog">Blog</a>
            </li>
            <li className="navbar-item">
              {/* <i className="fa-solid fa-server"></i> */}
              <a href="#service">Service</a>
            </li>
            <li className="navbar-item">
              {/* <i className="fa-solid fa-address-book"></i> */}
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className="btn-main">Contact</button>
        </nav>
        <div className="mainProfile">
          <img
            className="dogImg"
            src="https://cdn.pixabay.com/photo/2021/10/01/18/53/corgi-6673343_960_720.jpg"
            alt=""
          />
          <h2>Stephen Karikari</h2>
          <span>A Creative UI & UX Designer & Stack Developer</span>
        </div>
      </div>
    </>
  );
};

export default Main;
