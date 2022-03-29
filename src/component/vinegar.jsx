import react, { Component } from "react";
import { Button, Input } from 'antd';
import { Col, Row, Select, Modal } from 'antd';
import { MobileOutlined } from '@ant-design/icons';


const { Option } = Select;

export class Vinegar extends Component {

state = {
  currentStep: 0,
  modalVisible20: false,

  badgeCount: 5,
  showBadge: true,
};

showModal20 = () => {
  this.setState({
    modalVisible20: true,
  });
};

handleOk20 = e => {
  console.log(e);
  this.setState({
    modalVisible20: false,
  });
};

handleCancel20 = e => {
  console.log(e);
  this.setState({
    modalVisible20: false,
  });
};


  render() {
    return (

<div class="home"><br />
        <u><li><a href="/home">Home</a></li></u><br />
        <div class="home3">
          <strong><a>Vineger Acetic Acid & Water</a></strong><br />
          <small>An all time favorite Noodles tossed with garlic and vegatables or any other ingredients of your choice like mushrooms etc.</small>
        </div><br />
        <div class="bg19 ln5">
          <a class="sheet">Target&nbsp;Vineger&nbsp;Water</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/vinegar.jpg" height="500" width="100%" /></a></div>
        </div><br />

        <div class="btn3">
        <div>
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal20}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="Target Vineger Water"
                visible={this.state.modalVisible20}
                onOk={this.handleOk20}
                onCancel={this.handleCancel20}
              >
                <b> Rs 32 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - Home, Hotel etc</h5>
                <h5>Packaging Size - 1000ml</h5>
                <h5>Packaging Type - Bottle</h5>
                <h5>Color - White</h5>
                <h5>Brand - Target</h5>
                <h5>Form - Liquid</h5>
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
          <h6>Approx. Price : <b>Rs 42</b>/ Piece</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal20}>
              Get Latest Price
                </Button>
              <Modal
                title="Target Vineger Water"
                visible={this.state.modalVisible20}
                onOk={this.handleOk20}
                onCancel={this.handleCancel20}
              >
                <b> Rs 32 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - Home, Hotel etc</h5>
                <h5>Packaging Size - 1000ml</h5>
                <h5>Packaging Type - Bottle</h5>
                <h5>Color - White</h5>
                <h5>Brand - Target</h5>
                <h5>Form - Liquid</h5>
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
              <td>Usage/Application</td>
              <td>Home, Hotel etc</td>
            </tr>
            <tr>
              <td>Packaging Size</td>
              <td>1000 ml</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Bottle</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>White</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>Target</td>
            </tr>
            <tr>
              <td>Form</td>
              <td>Liquid</td>
            </tr>
          </table><br /><br /><br /><br /><br />
          <h3>Target vinegar typically consists of 4–7% acetic acid and 93–96% water. It can be used for cooking.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
              <Button id="but" type="primary" size="large" onClick={this.showModal20}>
              Yes! I am Interested
                </Button>
              <Modal
                title="Target Vineger Water"
                visible={this.state.modalVisible20}
                onOk={this.handleOk20}
                onCancel={this.handleCancel20}
              >
                <b> Rs 32 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - Home, Hotel etc</h5>
                <h5>Packaging Size - 1000ml</h5>
                <h5>Packaging Type - Bottle</h5>
                <h5>Color - White</h5>
                <h5>Brand - Target</h5>
                <h5>Form - Liquid</h5>
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

