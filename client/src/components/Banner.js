import { Component } from "react";
import bgImg from "../assets/images/bgImg.png"

class Banner extends Component {

    render() {
        return (
            <div className="bgImg">
                <img src={bgImg} style={{ width: "100%" }} />
            </div>
        );
    }
}

export default Banner;