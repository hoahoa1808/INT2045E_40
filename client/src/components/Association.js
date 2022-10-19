import { Component } from "react";

import VNULogo from "../assets/images/VNULogo.png";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

class Association extends Component {

    render() {
        return (
            <div className="Association" style={{ padding: "2% 0 5% 0" }}>
                <h1>Với sự hợp tác của</h1>

                <div style={{ backgroundColor: "white" }}>

                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 ArrowFlex" style={{ paddingTop: "5%", paddingBottom: "5%", marginLeft: "2%" }}>
                        <ArrowBackIosNewIcon sx={{ fontSize: 75 }} />
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 ArrowFlex" style={{ float: "right", paddingTop: "5%", paddingBottom: "5%", marginRight: "2%" }}>
                        <ArrowForwardIosIcon sx={{ fontSize: 75 }} />
                    </div>

                    <div className="container">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ImgCen">
                            <img src={VNULogo} />
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ImgCen">
                            <img src={VNULogo} />
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ImgCen">
                            <img src={VNULogo} />
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ImgCen">
                            <img src={VNULogo} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Association;