import { Component } from "react";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import bgImg from "../assets/images/bgImg.png";

class News extends Component {

    render() {
        return (
            <div className="News">
                <div className="headlines">
                    <h1 style={{ padding: "0" }}>Tin tức hot</h1>
                    <h3>Cập nhật mỗi ngày</h3>
                </div>

                <div className="container" style={{ padding: "4% 0 4% 0" }}>

                    <div className="row" style={{ height: "400px" }}>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="Filter border" style={{ height: "400px" }}>
                                <div style={{ borderBottom: "1px solid black" }}>
                                    <h1 >Bộ lọc</h1>
                                </div>

                                <div style={{ padding: "10%" }}>
                                    <h3><LocationOnIcon sx={{ fontSize: 20 }} /> Trường</h3>
                                    <h3><CalendarMonthIcon sx={{ fontSize: 20 }} /> Ngày</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 " style={{ height: "400px" }}>
                            <div className="Filter">
                                <h1 style={{ padding: "0" }}>Tin mowsi nhat</h1>
                                <img src={bgImg} style={{ width: "100%" }} />
                            </div>
                        </div>
                    </div>

                    <div className="Filter" style={{ marginTop: "4%", height: "300px", paddingTop: "6%" }}>
                        <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                            <h1 style={{ padding: "0" }}>Tin so 1</h1>
                            <h5>21/2/2022</h5>
                            sdjfhsihfisdafiaiadshfugsdafihufgvidsahfusdafihfsdgfdhfi
                            sdasdadfjdshfsadhfasdfsadfjasdghiasdjgagsdghksjfdhjkhdsfbscvhsbvsbk
                        </div>

                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5" style={{ float: "left" }}>
                            <img src={bgImg} style={{ width: "100%" }} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default News;