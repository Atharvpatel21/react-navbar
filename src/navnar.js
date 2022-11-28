import React, {useState} from "react";

const Navbar = () => {
      const [show, setshow] = useState(false);

    return( 
    <>
      <section className="navbar-bg">
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Atharv Pay</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=> setshow(!show)}>
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class={`collapse navbar-collapse ${show ? "show" : " " }`} 
      >
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Service</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></hr></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Contact</a>
          </li>
        </ul>
        <form class="d-flex" >
           {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>  */}
          <button class="btn btn-style" type="submit">SignUp</button>
          <button class="btn  btn-style btn-style-border" type="submit">Login</button>
        </form>
      </div>
    </div>
  </nav>
 </section>
    </>
    );
};

export default Navbar;