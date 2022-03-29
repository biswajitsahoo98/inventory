import react, { Component } from "react";
import { Button, Input } from 'antd';
import { Col, Row, Select, Modal } from 'antd';
import { MobileOutlined } from '@ant-design/icons';


const { Option } = Select;

export class Naphthalene extends Component {

state = {
  currentStep: 0,
  modalVisible7: false,

  badgeCount: 5,
  showBadge: true,
};

showModal7 = () => {
  this.setState({
    modalVisible7: true,
  });
};

handleOk7 = e => {
  console.log(e);
  this.setState({
    modalVisible7: false,
  });
};

handleCancel7 = e => {
  console.log(e);
  this.setState({
    modalVisible7: false,
  });
};


  render() {
    return (
      <div class="home"><br />
        <u><li><a href="/home">Home</a></li></u><br />
        <div class="home3">
          <strong><a>Naphthalene Balls</a></strong><br />
          <small>Leading Manufacturer of naphthalene balls and Target all purpose cleaning kit from Jajpur.</small>
        </div><br />
        <div class="bg19 ln5">
          <a class="sheet">Naphthalene&nbsp;Balls</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/naphthalene.jpg" height="530" width="100%" /></a></div>
        </div><br />

        <div class="btn3">
        <div>
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal7}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="Naphthalene Balls"
                visible={this.state.modalVisible7}
                onOk={this.handleOk7}
                onCancel={this.handleCancel7}
              >
                <b> Rs 90 / Packet</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - For storing</h5>
                <h5>clothing and other articles</h5>
                <h5>susceptible to damage from mold or</h5>
                <h5>moth larvae</h5>
                <h5>Brand - Target</h5>
                <h5>Color - White</h5>
                <h5>Pack Type - Packet</h5>
                <img className="img" src="/target1.png" height="100" alt="logo"></img>
                <h3><b>Get Best Quote</b>&nbsp;and details from "Piyush Enterprises" on your mobile quickly</h3>
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
        <div class="infor">
          <h6>Approx. Price : <b>Rs 90</b>/ Packet</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal7}>
              Get Latest Price
                </Button>
              <Modal
                title="Naphthalene Balls"
                visible={this.state.modalVisible7}
                onOk={this.handleOk7}
                onCancel={this.handleCancel7}
              >
                 <b> Rs 90 / Packet</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - For storing</h5>
                <h5>clothing and other articles</h5>
                <h5>susceptible to damage from mold or</h5>
                <h5>moth larvae</h5>
                <h5>Brand - Target</h5>
                <h5>Color - White</h5>
                <h5>Pack Type - Packet</h5>
                <img className="img" src="/target1.png" height="100" alt="logo"></img>
                <h3><b>Get Best Quote</b>&nbsp;and details from "Piyush Enterprises" on your mobile quickly</h3>
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

          <table>
            <h3><b>Product Details:</b></h3><br />
            <tr>
              <td>Packaging Size</td>
              <td>60 balls</td>
            </tr>
            <tr>
              <td>Usage/Application</td>
              <td>For storing clothing and other articles susceptible to damage from mold or moth larvae</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>Target</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>White</td>
            </tr>
            <tr>
              <td>Pack Type</td>
              <td>Packet</td>
            </tr>
            <tr>
              <td>Fragrance</td>
              <td>Yes</td>
            </tr>
          </table><br /><br /><br />
          <h3>We are offering&nbsp;<b>Naphthalene Balls.</b>&nbsp;It is highly admired due to no side effects and attractive fragrance.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
              <Button id="but" type="primary" size="large" onClick={this.showModal7}>
              Yes! I am Interested
                </Button>
              <Modal
                title="Naphthalene Balls"
                visible={this.state.modalVisible7}
                onOk={this.handleOk7}
                onCancel={this.handleCancel7}
              >
                <b> Rs 90 / Packet</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - For storing</h5>
                <h5>clothing and other articles</h5>
                <h5>susceptible to damage from mold or</h5>
                <h5>moth larvae</h5>
                <h5>Brand - Target</h5>
                <h5>Color - White</h5>
                <h5>Pack Type - Packet</h5>
                <img className="img" src="/target1.png" height="100" alt="logo"></img>
                <h3><b>Get Best Quote</b>&nbsp;and details from "Piyush Enterprises" on your mobile quickly</h3>
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

        </div><br />

        <div class="containe ptr bdr1"></div><br />

      </div>

    );
  }
}

