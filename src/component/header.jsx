import React, { Component } from "react";
import { Col, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;
export class Header extends Component {

    render() {
        return (
            <div>
                <header className="head">
                    <img className="img" src="/target 2.png" height="100" alt="logo"></img>
                    <Col className="text">
                        <h1>PIYUSH ENTERPRISES</h1>
                        <h2>OUR BRANCHES : JAJPUR | BBSR | MUMBAI</h2>
                        <div class="gst">
                            <h3><b><CheckCircleOutlined />&nbsp;GSTIN : 21BISPS4363K2ZR</b></h3>
                            <div class="iso">
                                <h3> &#9989;&nbsp; AN ISO 9001-2015<br />&nbsp;&nbsp;CERTIFIED  COMPANY</h3>
                            </div>
                        </div>

                            <div class="col-lg-1 col-md-1 col-sm-12 top_menu-c-admission">
                            <img height="110" src="target 3.png"></img>
                        </div>
                        
                </Col>

                </header>
            </div>
        );
    }
}