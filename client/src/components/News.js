import { Component } from "react";

import bgImg from "../assets/images/bgImg.png";

class News extends Component {



    render() {
        return (
            <div className="News" style={{ padding: "2% 0 2% 0" }}>
                <h1>Tin tức hot</h1>
                <div className="container">

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div style={{ textAlign: "center" }}>
                            <img src={bgImg} style={{ width: "75%" }} />
                            <h3 style={{ marginRight: "10%" }}>Top nhóm ngành hot năm 2022 </h3>
                            <p style={{ paddingLeft: "14%", paddingRight: "11%", textAlign: "left" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean posuere vulputate ante et posuere. Donec eu lacus quis leo interdum pretium vitae non est.
                            </p>
                        </div>
                    </div>

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                        <div style={{ marginBottom: "20%" }}>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 " style={{ padding: "0 0 0 0" }}>
                                <img src={bgImg} style={{ width: "100%", height: "120px" }} />
                            </div>

                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 ">
                                <h3 style={{ marginRight: "10%" }}>Top nhóm ngành hot năm 2022 </h3>
                                <p style={{}}>
                                    Lorem ipsum
                                </p>
                            </div>
                        </div>

                        <br />

                        <div style={{ marginBottom: "20%" }}>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 " style={{ padding: "0 0 0 0" }}>
                                <img src={bgImg} style={{ width: "100%", height: "120px" }} />
                            </div>

                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 ">
                                <h3 style={{ marginRight: "10%" }}>Top nhóm ngành hot năm 2022 </h3>
                                <p style={{}}>
                                    Lorem ipsum
                                </p>
                            </div>
                        </div>

                        <br />

                        <div style={{ marginBottom: "20%" }}>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 " style={{ padding: "0 0 0 0" }}>
                                <img src={bgImg} style={{ width: "100%", height: "120px" }} />
                            </div>

                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 ">
                                <h3 style={{ marginRight: "10%" }}>Top nhóm ngành hot năm 2022 </h3>
                                <p style={{}}>
                                    Lorem ipsum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;