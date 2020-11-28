import Video from "../assets/icons/video.png";
import Styled from "styled-components";

const Rowku = Styled.div`
  padding-left: 80px;
  padding-right: 80px;
`;

function Banner() {
  return (
    <div className="container-fluid" id="banner">
      <Rowku className="row">
        <div className="col-md-5 pl-5 align-self-center">
          <h1 className="font-weight-bolder">
            Eat What You Cook <br /> With Us, Together!
          </h1>
          <p className="text-muted mt-3">
            When you eat something that cooked by <br /> yourself, that
            happiness is priceless.
          </p>
          <button className="btn btn-warning btn-lg px-3 mt-4">
            Decide a Menu
          </button>
        </div>
        <div className="col-md-7">
          <img
            src={Video}
            alt="video"
            width="626"
            height="405"
            className="img-fluid"
          />
        </div>
      </Rowku>
    </div>
  );
}

export default Banner;
