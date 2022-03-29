import react, { Component } from "react";
import { Button, Carousel } from 'antd';
import { Col, Row, Select, Modal, Input, Typography } from 'antd';
import { MobileOutlined } from '@ant-design/icons';

const { Text } = Typography;

export class Map extends Component {


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
          <a class="sheet">Site&nbsp;Map</a></div><br />
        <div class="basicc">
          <h1>About Us</h1>
          <p>Corporate Video</p>
          <h1>Our Product</h1>
          <p>Phenyl Cleaner</p>
          <ul>
            <li>Target Black Phenyl</li>
            <li>Phenyl Concentrate</li>
            <li>White Phenyl</li>
            <li>Concentrated Black Phenyl Cleaner</li>
            <li>Liquid Phenyl</li>
            <li>Liquid Phenyl Concentrate</li>
            <li>Perfumed Phenyle</li>
            <li>Phenyl Thickener</li>
          </ul>
          <p>HDPE Toilet Cleaner Bottle</p>
          <ul>
            <li>500 ml HDPE Toilet Cleaner Bottle</li>
            <li>250 ml HDPE Toilet Cleaner Bottle</li>
            <li>1L HDPE Toilet Cleaner Bottle</li>
          </ul>
          <p>Toilet Cleaner</p>
          <ul>
            <li>Naphthalene Balls</li>
            <li>Target Toilet Cleaner</li>
            <li>Target All Purpose Cleaning Kit</li>
          </ul>
          <p>Glass Cleaners</p>
          <ul>
            <li>Glass Cleaner</li>
            <li>Target Glass Cleaner</li>
          </ul>
          <p>Hand Wash</p>
          <ul>
            <li>Target Hand Wash</li>
            <li>Antibacterial Hand Wash</li>
            <li>Hand Washing Gels</li>
          </ul>
          <p>Floor Surface Cleaner</p>
          <ul>
            <li>Target Floor Surface Cleaner</li>
          </ul>
          <p>Dishwash Liquid</p>
          <ul>
            <li>Target Kitchen King Dishwash Liquid</li>
          </ul>
          <p>Concentrated Liquid Soap</p>
          <ul>
            <li>Target Concentrated Liquid Soap</li>
          </ul>
          <p>Bathroom Cleaner</p>
          <ul>
            <li>Target Bathroom Cleaner</li>
          </ul>
          <p>Floor Surface Cleaner</p>
          <ul>
            <li>Target Floor Surface Cleaner</li>
          </ul>
          <p>Dishwash Tab</p>
          <ul>
            <li>Target Dishwash Tab</li>
          </ul>
          <p>Pine Oil</p>
          <ul>
            <li>32% Phenyl Grade Pine Oil</li>
          </ul>
          <p>Surface Hygiene</p>
          <ul>
            <li>Pine Oil Emulsifier</li>
          </ul>
          <p>Room Freshener</p>
          <ul>
            <li>Target Room Air Freshener</li>
          </ul>
          <p>Laundry Detergents</p>
          <ul>
            <li>Fabric Liquid Detergent</li>
          </ul>
          <p>Disinfectant Chemical</p>
          <ul>
            <li>Sodium Hypochlorite Solution</li>
          </ul>
          <p>Scented Floor Cleaner Concentrate</p>
          <ul>
            <li>Concentrated Floor Cleaner</li>
          </ul>
          <p>Laundry Chemical</p>
          <ul>
            <li>Fabric Whitner</li>
          </ul>
          <p>New Items</p>
          <ul>
            <li>Glass Cleaner</li>
            <li>Toilet Cleaner Combo</li>
            <li>Black Phenyl</li>
            <li>Glass cleaners</li>
            <li>Room Air Freshener</li>
            <li>Liquid Phenyl Concentrate</li>
            <li>Black Phenyle</li>
            <li>Room Air Freshener combo</li>
          </ul>
          <h1>Contact Us</h1>
          <div id="divvy">
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
        </div>
        <div class="containe ptr bdr1"></div><br />

      </div>

    );
  }
}

