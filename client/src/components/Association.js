import { Component } from "react";

import VNULogo from "../assets/images/VNULogo.png";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

class Association extends Component {

    render() {
        return (
            <div className="Association">

                <ArrowBackIosNewIcon />
                <div className="container">
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 border ImgCen">
                        <img src={VNULogo} />
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 border ImgCen">
                        <img src={VNULogo} />
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 border ImgCen">
                        <img src={VNULogo} />
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 border ImgCen">
                        <img src={VNULogo} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Association;