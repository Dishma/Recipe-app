import React from "react";
import "../styles/css/styles.css";

function Header() {
  return (

    <div style={{ backgroundColor: '#dddddd' }}>
      <nav class="navbar navbar-expand-md navbar-light bg-coral">
        <div style={{ marginLeft: '8px', marginRight: '10px' }}>
          <img src="https://res.cloudinary.com/dnonvyjrq/image/upload/v1672903011/food-13637_fwo3zj.png" class="me-1" height="80" alt="MDB Logo" loading="lazy" />
        </div>

        <small className="navbar-brand mb-0 h1">RECIPES</small>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">

           

          </ul>

        </div>

      </nav>
    </div>

  )
}

export default Header;