import react, { Component } from "react";
import { Button } from 'antd';
import { Col, Row, Select, Modal, Input, Typography } from 'antd';
import { MobileOutlined } from '@ant-design/icons';


const { Option } = Select;
const { Text } = Typography;


export class Corporate extends Component {

  state = {
    currentStep: 0,
    modalVisible: false,

    badgeCount: 5,
    showBadge: true,
  };

  showModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      modalVisible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      modalVisible: false,
    });
  };



  render() {
    return (
      <div class="home"><br />
        <u><li><a href="/home">Home</a></li></u><br />
        <div class="bg19 ln5">
          <a class="sheet">Corporate&nbsp;Video</a></div><br />
        <div class="basic">
        <video width="650" controls autoplay loop><source src="target.mp4" type="video/mp4"/></video>
            <h1>Liquid Floor Cleaner Manufacturer</h1><br />
            
            <div id="divy">
        <Row>
          <Col span={24}>
            <div>
              <Button type="primary" onClick={this.showModal}>
                Contact Us
                </Button>
              <Modal
                title="TARGET INDUSTRIES"
                visible={this.state.modalVisible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <img className="img" src="/target1.png" height="100" alt="logo"></img>
                <h3>Connect With <Text type="danger"><b>"Piyush Enterprises"</b></Text></h3>
                <h4>Mobile Number</h4>
                <div class="butto">
                <Input type="number" type="tel" maxlength="10"  placeholder="Enter your number: +91 " prefix={<MobileOutlined />} ></Input>
                </div>
                <small>We will contact you on this number</small><br /><br />
                <Button id="buttonn" type="primary" size="large" ><span>Submit Now</span></Button>

              </Modal>
            </div>
          </Col>
        </Row>
      </div>




            <br /><br />
          <p>Incepted in 2014, Piyush Enterprises situated at Barabati (Odisha, India) is a prominent and leading organization of this domain involved in manufacturing wide assortments of supreme quality Liquid Dish Wash, Glass Cleaner, Combo Glass Cleaner, Hand Wash and many more.
          Our Offered products are manufactured by making use of top-quality raw material and modern tools & techniques.These products are applauded for their purity, long shelf life and high effectiveness.
          To fulfill the diverse requirements of huge patrons%u2019 base, we are providing these products in many customized options.
              Our provided range is easily available at pocket friendly prices in a stipulated time period. We offer these products under the brand Target.</p>
        </div>
        <div class="containe ptr bdr1"></div>

      </div>

    );
  }
}

