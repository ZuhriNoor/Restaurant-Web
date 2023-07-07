import React from "react";
import "./Home.css"


export default function Home() {
  return (
    <>
      <div className="main-div">
          <h1 className="title">Star'vin?</h1>
          <h3 className="sub-title">Your in the right place</h3>
          <div className="buttons">
            <button className="button"><Link to="/reservation">Reserve your seat now</Link></button>
            <button className="button"><Link></Link></button>
          </div>
      </div>
    </>
  );
}
