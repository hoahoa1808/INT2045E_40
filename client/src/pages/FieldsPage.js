import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Fields from "../components/Fields";

class FieldsPage extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "aliceblue" }}>
                <Header />
                <Fields />
                <Footer />
            </div>
        );
    }
}

export default FieldsPage;