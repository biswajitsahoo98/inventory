import react, { Component } from "react";
import { Button, Input } from 'antd';
import { Col, Row, Select, Modal } from 'antd';
import { MobileOutlined } from '@ant-design/icons';


const { Option } = Select;

export class Bleaching  extends Component {

state = {
  currentStep: 0,
  modalVisible19: false,

  badgeCount: 5,
  showBadge: true,
};

showModal19 = () => {
  this.setState({
    modalVisible19: true,
  });
};

handleOk19 = e => {
  console.log(e);
  this.setState({
    modalVisible19: false,
  });
};

handleCancel19 = e => {
  console.log(e);
  this.setState({
    modalVisible19: false,
  });
};


  render() {
    return (
      <div class="home"><br />
        <u><li><a href="/home">Home</a></li></u><br />
        <div class="home3">
          <strong><a>Bleaching Powder</a></strong><br />
          <small>Target bleaching powder is widely used as a disinfectant in water purification Kills 99.9% Of Common Germs & Bacteria. Clean With Clorox Today! 33% more disinfecting.</small>
        </div><br />
        <div class="bg19 ln5">
          <a class="sheet">Target&nbsp;Bleaching&nbsp;Powder</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/bleaching.jpg" height="500" width="100%" /></a></div>
        </div><br />

        <div class="btn3">
        <div>
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal19}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="Target Bleaching Powder"
                visible={this.state.modalVisible19}
                onOk={this.handleOk19}
                onCancel={this.handleCancel19}
              >
                <b> Rs 50 / Packet</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - For water purification</h5>
                <h5>Capacity - 500gms</h5>
                <h5>Packaging Type - Box</h5>
                <h5>Color - White</h5>
                <h5>Brand - Target</h5>
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
              <Button type="primary" size="large" onClick={this.showModal19}>
              Get Latest Price
                </Button>
              <Modal
                title="Target Bleaching Powder"
                visible={this.state.modalVisible19}
                onOk={this.handleOk19}
                onCancel={this.handleCancel19}
              >
                <b> Rs 50 / Packet</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - For water purification</h5>
                <h5>Capacity - 500gms</h5>
                <h5>Packaging Type - Box</h5>
                <h5>Color - White</h5>
                <h5>Brand - Target</h5>
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
              <td>For water purification</td>
            </tr>
            <tr>
              <td>Capacity</td>
              <td>500gms</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Box</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>White</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>Target</td>
            </tr>
          </table><br /><br /><br /><br /><br />
          <h3>Disinfects and Cleans Available in 6 Scents Versatile around the home.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
              <Button id="but" type="primary" size="large" onClick={this.showModal19}>
              Yes! I am Interested
                </Button>
              <Modal
                title="Target Bleaching Powder"
                visible={this.state.modalVisible19}
                onOk={this.handleOk19}
                onCancel={this.handleCancel19}
              >
                <b> Rs 50 / Packet</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - For water purification</h5>
                <h5>Capacity - 500gms</h5>
                <h5>Packaging Type - Box</h5>
                <h5>Color - White</h5>
                <h5>Brand - Target</h5>
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

