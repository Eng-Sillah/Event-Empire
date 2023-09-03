import React from "react";
import Jumbotron from "./Jumbotron";
import Categories from "./Catrgories";
import './Home.css';


function Home() {

    return (
        <div className="home-section">
            <Jumbotron />
            <Categories />
        </div>
    )
}

export default Home;