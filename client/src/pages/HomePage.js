import React, { Component } from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import News from "../components/News";
import EduProg from "../components/EduProg";
import Association from "../components/Association";

class HomePage extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "aliceblue" }}>
                <Header />
                <Banner />
                <News />
                <EduProg />
                <Association />
                <Footer />
            </div>
        );
    }
}

export default HomePage;
