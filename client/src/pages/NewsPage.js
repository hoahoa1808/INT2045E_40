import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import News from "../components/News";

class NewsPage extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "aliceblue" }}>
                <Header />
                <News />
                <Footer />
            </div>
        );
    }
}

export default NewsPage;