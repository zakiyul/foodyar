import Styled from "styled-components";

const Rowku = Styled.div`
  padding-left: 80px;
  padding-right: 80px;
`;

function Special() {
  return (
    <div className="container-fluid" style={{ marginTop: 100 }} id="special">
      <p className="text-center text-muted">Watch Now</p>
      <h4 className="font-weight-bold text-center">Special to Try</h4>
      <Rowku className="row">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card">
              <h5 className="card-title">Salad Kiwi Sugga</h5>
              <p className="card-text">Amir Samanta</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card">
              <h5 className="card-title">Salad Kiwi Sugga</h5>
              <p className="card-text">Amir Samanta</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card">
              <h5 className="card-title">Salad Kiwi Sugga</h5>
              <p className="card-text">Amir Samanta</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card">
              <h5 className="card-title">Salad Kiwi Sugga</h5>
              <p className="card-text">Amir Samanta</p>
            </div>
          </div>
        </div>
      </Rowku>
    </div>
  );
}

export default Special;
