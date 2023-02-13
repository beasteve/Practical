import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="leftHeader">
        <img
          className="imgLeft"
          src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg"
          alt=""
        />
      </div>
      <div className="rightheader">
        <div className="rightHeader-container">
          <h4>Discover</h4>
          <h2>About Me</h2>
          <p>
            My name is Stephen Karikari. I’m a Full Stack Developer based in
            Barcelona, Spain and I’m very passionate and dedicated to my work.
            With 2 years experience as a professional Full Stack Developer, I
            have acquired the skills necessary to build great and premium
            website.
          </p>
        </div>

        <div className="address-header">
          <div className="address-header-left">
            <p>Name: Stephen Karikari</p>
            <p>Phone: +34 6 123 123</p>
            <p>Experience</p>
            <p>Telegram: @steve</p>
          </div>
          <div className="address-header-right">
            <p>Address: Terrassa, BCN</p>
            <p>Ux Design: Available</p>
          </div>
        </div>
        <button className="btn-header">DOWNLOAD CV</button>
      </div>
    </div>
  );
};

export default Header;
