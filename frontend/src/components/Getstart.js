import React from "react";
import "../styles/css/styles.css";


function Getstart() {
  return (



    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">


      <div class="carousel-inner">

        <div class="carousel-item active">
          <img src="https://res.cloudinary.com/dnonvyjrq/image/upload/v1672905110/pexels-jane-doan-1099680_wnap9m.jpg" class="d-block w-100" ></img>
          <div class="carousel-caption d-none d-md-block">
            <h5 style={{fontSize: '18.2px'}}>“Your health account, your bank account, they’re the same thing. The more you put in, the more you can take out.”</h5>
            <p>- Jack LaLanne -</p>
            <a role="button" className="getstartbutton adminbutton2" href="/adminhome"><span>Get Started</span></a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Getstart;