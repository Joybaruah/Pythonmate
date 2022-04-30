import React from "react";

const Home = () => {
  return (
    
    <>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">First name</label>
                <input type="firstname" className="form-control" id="exampleInputFirstName" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Last name</label>
                <input type="lastname" className="form-control" id="exampleInputLastName" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-warning">Submit</button>
        </form>
        </div>
    </>
  );
};

export default Home;
