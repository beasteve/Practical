import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <h1>
          <span>S</span>tephen
        </h1>
        <ul className="navbar-items">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">Blog</li>
          <li className="navbar-item">Service</li>
          <li className="navbar-item">Contact Us</li>
        </ul>
      </nav>
      <div className="header-logo">
        <img
          src="https://cdn.pixabay.com/photo/2022/12/22/02/56/dog-7671355_960_720.jpg"
          alt=""
        />
        <h1>Stephen Karikari</h1>
        <p>A Creative UI & UX Designer & Stack Developer</p>
      </div>
    </div>
  );
};

export default Header;
