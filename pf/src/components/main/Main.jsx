import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="mainLeft">
        <img
          src="https://cdn.pixabay.com/photo/2016/02/26/16/32/bulldog-1224267_960_720.jpg"
          alt=""
        />
      </div>
      <div className="mainRight">
        <div className="discover-items">
          <h5>Discover</h5>
          <h3>About Me</h3>
          <p>
            My name is Stephen Karikari. I’m a Full Stack Developer based in
            Barcelona, Spain and I’m very passionate and dedicated to my work.
            With 2 years experience as a professional Full Stack Developer, I
            have acquired the skills necessary to build great and premium
            website.
          </p>
        </div>
        <div className="name-items">
          <div className="name-item">
            <p>
              Name: Stephen Karikari <br />
              Phone: +34 6 123 123 <br />
              Experience: <br />
              Telegram: @steve
            </p>
          </div>
          <div className="name-item">
            <p>
              Address: Terrassa, BCN <br />
              Ux Design: Available <br />
              Email: steve@steve.com <br />
              Location: Terrassa
            </p>
          </div>
        </div>
      </div>
      <div className="btn-main">
        <button>DOWNLOAD CV</button>
      </div>
      <div className="mainRight">
        <div className="discover-items">
          <h5>Discover</h5>
          <h3>About Me</h3>
          <p>
            My name is Stephen Karikari. I’m a Full Stack Developer based in
            Barcelona, Spain and I’m very passionate and dedicated to my work.
            With 2 years experience as a professional Full Stack Developer, I
            have acquired the skills necessary to build great and premium
            website.
          </p>
        </div>
        <div className="name-items">
          <div className="name-item">
            <p>
              Name: Stephen Karikari <br />
              Phone: +34 6 123 123 <br />
              Experience: <br />
              Telegram: @steve
            </p>
          </div>
          <div className="name-item">
            <p>
              Address: Terrassa, BCN <br />
              Ux Design: Available <br />
              Email: steve@steve.com <br />
              Location: Terrassa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
