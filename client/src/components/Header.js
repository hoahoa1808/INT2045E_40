import React, { Component } from 'react';

import TextField from "@mui/material/TextField";
import ExploreIcon from '@mui/icons-material/Explore';
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';

import Logo from "../assets/images/Logo.png";


class Header extends Component {

    render() {
        return (
            <div className="Header">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className='logo'>
                        <img src={Logo} />
                    </div>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="searchBar">
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Tìm kiếm"
                            sx={{ height: "51px" }}
                        />
                    </div>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className='row'>
                        <div className='options'>
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                <ExploreIcon sx={{ fontSize: 45 }} />
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                <ForumIcon sx={{ fontSize: 45 }} />
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                <PersonIcon sx={{ fontSize: 45 }} />
                            </div>
                        </div>

                        <div className='options'>
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                Khám phá
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                Diễn đàn
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                Tài khoản
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;