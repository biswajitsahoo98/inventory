import react, { Component } from "react";
import { Button, Input, Form } from 'antd';
import { Col, Row, Select, Modal } from 'antd';
import { MobileOutlined } from '@ant-design/icons';


const { Option } = Select;

export class Floor extends Component {

  state = {
    currentStep: 0,
    modalVisible13: false,
  
    badgeCount: 5,
    showBadge: true,
  };
  
  showModal13 = () => {
    this.setState({
      modalVisible13: true,
    });
  };
  
  handleOk13 = e => {
    console.log(e);
    this.setState({
      modalVisible13: false,
    });
  };
  
  handleCancel13 = e => {
    console.log(e);
    this.setState({
      modalVisible13: false,
    });
  };


  render() {
    return (
      <div class="home"><br />
        <u><li><a href="/home">Home</a></li></u><br />
        <div class="home3">
          <strong><a>Floor Surface Cleaner</a></strong><br />
          <small>Target Floor Cleaner unique disinfectant kills germs, remove tough stains and bring pleasant fragrance.</small>
        </div><br />
        <div class="bg19 ln5">
        <a class="sheet">Target&nbsp;Floor&nbsp;Surface&nbsp;Cleaner</a></div><br />
        <div class="bas">
        <div class="a1" ><a href="/page3"><img src="/img/floor cleaner.jpg" width="80%" /></a></div>
        </div><br />
        <div class="btn3">
        <div>
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal13}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="Target Floor Surface Cleaner"
                visible={this.state.modalVisible13}
                onOk={this.handleOk13}
                onCancel={this.handleCancel13}
              >
                <b> Rs 28 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Form - Liquid</h5>
                <h5>Fragrance - Rose, Lavender</h5>
                <h5>Jasmine, Lemon etc</h5>
                <h5>Usage/Application - Floor Cleaning</h5>
                <h5>Packaging Size - 500 ml</h5>
                <h5>Packaging Type - Bottle</h5>
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
          <h6>Approx. Price : <b>Rs 28</b>/ Bottle</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal13}>
              Get Latest Price
                </Button>
              <Modal
                title="Target Floor Surface Cleaner"
                visible={this.state.modalVisible13}
                onOk={this.handleOk13}
                onCancel={this.handleCancel13}
              >
                <b> Rs 28 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Form - Liquid</h5>
                <h5>Fragrance - Rose, Lavender</h5>
                <h5>Jasmine, Lemon etc</h5>
                <h5>Usage/Application - Floor Cleaning</h5>
                <h5>Packaging Size - 500 ml</h5>
                <h5>Packaging Type - Bottle</h5>
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
              <td>Form</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>Fragrance</td>
              <td>Rose, Lavender, Jasmine, Lemon etc</td>
            </tr>
            <tr>
              <td>Usage/Application</td>
              <td>Floor Cleaning</td>
            </tr>
            
            <tr>
              <td>Packaging Size</td>
              <td>500 ml</td>
            </tr>
            
            <tr>
              <td>Packaging Type</td>
              <td>Bottle</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>Pink,Yellow,Green,Orange etc</td>
            </tr>
          </table><br /><br /><br />
          
          <h3>Disinfectant surface cleaner similar to Lizol.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
              <Button id="but" type="primary" size="large" onClick={this.showModal13}>
              Yes! I am Interested
                </Button>
              <Modal
                title="Target Floor Surface Cleaner"
                visible={this.state.modalVisible13}
                onOk={this.handleOk13}
                onCancel={this.handleCancel13}
              >
                 <b> Rs 28 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Form - Liquid</h5>
                <h5>Fragrance - Rose, Lavender</h5>
                <h5>Jasmine, Lemon etc</h5>
                <h5>Usage/Application - Floor Cleaning</h5>
                <h5>Packaging Size - 500 ml</h5>
                <h5>Packaging Type - Bottle</h5>
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