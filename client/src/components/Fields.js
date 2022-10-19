import { Component } from "react";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import bgImg from "../assets/images/bgImg.png";

class Fields extends Component {

    render() {
        return (
            <div className="Fields">
                <div className="headlines">
                    <h1 style={{ padding: "0" }}>Tổng hợp khoa và trường</h1>
                </div>

                <div className="container" style={{ padding: "4% 0 4% 0" }}>

                    <div className="row" style={{ height: "400px" }}>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
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

                        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                            <div className="row Filter" style={{ marginBottom: "2%" }}>
                                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                    <h1>Khoa kinh tế</h1>
                                    <h3>Trường Đại học Kinh Tế</h3>
                                </div>

                                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <h5>Điểm dự báo</h5>
                                    <h1>23</h1>
                                </div>
                            </div>

                            <div className="row Filter" style={{ marginBottom: "2%" }}>
                                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                    <h1>Khoa kinh tế</h1>
                                    <h3>Trường Đại học Kinh Tế</h3>
                                </div>

                                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <h5>Điểm dự báo</h5>
                                    <h1>23</h1>
                                </div>
                            </div>

                            <div className="row Filter" style={{ marginBottom: "2%" }}>
                                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                    <h1>Khoa kinh tế</h1>
                                    <h3>Trường Đại học Kinh Tế</h3>
                                </div>

                                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <h5>Điểm dự báo</h5>
                                    <h1>23</h1>
                                </div>
                            </div>

                            <div className="row Filter" style={{ marginBottom: "2%" }}>
                                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                    <h1>Khoa kinh tế</h1>
                                    <h3>Trường Đại học Kinh Tế</h3>
                                </div>

                                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <h5>Điểm dự báo</h5>
                                    <h1>23</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Fields;