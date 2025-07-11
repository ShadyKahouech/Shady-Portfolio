import Header from "../header/Header";
import PrimaryButton from "../primaryButton/PrimaryButton";
import Footer from "../footer/Footer";
import "./Home.css";

function Home() {
  return (
    <div>
      <div>
        <Header />
        <div
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/d%C3%A9veloppeur-web-sur-l-ordinateur-et-la-projection-virtuelle-dans-un-bureau-moderne-avec-de-grandes-fen%C3%AAtres-une-silhouette-d-166240775.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "72vh",
            width: "100%",
            position: "relative",
            padding: 0,
          }}
        ></div>
        <div className="home__container">
          <h3 className="home__container-title">Mourad Shady Kahouech</h3>
          <span className="home__container-description">
            Full Stack Web Developper
          </span>
          <PrimaryButton
            text="Contact Me"
            className="home__button"
            style={{
              padding: "10px 20px",
              backgroundColor: "#1976d2",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
