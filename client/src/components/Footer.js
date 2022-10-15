import { Component } from "react";

class Footer extends Component {

    render() {
        return (
            <div className="Footer">
                <div style={{ padding: "2% 5%" }}>Liên hệ</div>
                <div style={{ padding: "0 5% 5% 0" }}>
                    <div className="col-xs-4  col-sm-4 col-md-4 col-lg-4" style={{ paddingLeft: "10%" }}>
                        Địa chỉ
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ paddingLeft: "10%" }}>
                        Fan page
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ paddingLeft: "10%" }}>
                        Số điện thoại
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;