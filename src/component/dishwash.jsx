import react, { Component } from "react";
import { Button, Input, Form } from 'antd';
import { Col, Row, Select, Modal } from 'antd';
import { MobileOutlined } from '@ant-design/icons';


const { Option } = Select;

export class Dishwash extends Component {

  state = {
    currentStep: 0,
    modalVisible14: false,
  
    badgeCount: 5,
    showBadge: true,
  };
  
  showModal14 = () => {
    this.setState({
      modalVisible14: true,
    });
  };
  
  handleOk14 = e => {
    console.log(e);
    this.setState({
      modalVisible14: false,
    });
  };
  
  handleCancel14 = e => {
    console.log(e);
    this.setState({
      modalVisible14: false,
    });
  };


  render() {
    return (
      <div class="home"><br />
        <u><li><a href="/home">Home</a></li></u><br />
        <div class="home3">
          <strong><a>Dishwash Liquid</a></strong><br />
          <small>Target dish wash is best for truly healthy kitchen. it clean & disinfects utensil and leave it sparkling.</small>
        </div><br />
        <div class="bg19 ln5">
        <a class="sheet">Target&nbsp;Kitchen&nbsp;King&nbsp;Dishwash&nbsp;Liquid</a></div><br />
        <div class="bas">
        <div class="a1" ><a href="/page3"><img src="/img/dish wash.jpg" width="80%" /></a></div>
        </div><br />
        <div class="btn3">
        <div>
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal14}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="Target Kitchen King Dishwash Liquid"
                visible={this.state.modalVisible14}
                onOk={this.handleOk14}
                onCancel={this.handleCancel14}
              >
                <b> Rs 33 / Litre</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - Dish Washing</h5>
                <h5>Brand - Target</h5>
                <h5>Packaging Size - 1L,5L</h5>
                <h5>Fragrance - Lemon</h5>
                <h5>Packaging Type - Plastic Can, Plastic</h5>
                <h5>Bottle</h5>
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
          <h6>Approx. Price : <b>Rs 33</b>/ Litre</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal14}>
              Get Latest Price
                </Button>
              <Modal
                title="Target Kitchen King Dishwash Liquid"

                title="Target Floor Surface Cleaner"
                visible={this.state.modalVisible14}
                onOk={this.handleOk14}
                onCancel={this.handleCancel14}
              >
                <b> Rs 33 / Litre</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - Dish Washing</h5>
                <h5>Brand - Target</h5>
                <h5>Packaging Size - 1L,5L</h5>
                <h5>Fragrance - Lemon</h5>
                <h5>Packaging Type - Plastic Can, Plastic</h5>
                <h5>Bottle</h5>
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
              <td>Dish Washing</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>Target</td>
            </tr>
            <tr>
              <td>Packaging Size</td>
              <td>1L,5L</td>
            </tr>
            
            <tr>
              <td>Fragrance</td>
              <td>Lemon</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Plastic Can, Plastic Bottle</td>
            </tr>
            <tr>
              <td>Form</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>Item Code</td>
              <td>Kitchen King</td>
            </tr>
          </table><br /><br />
          
          <h3><b>Hyco Kitchen King Dishwash Liquid</b>&nbsp;is known for its infused cleaning power of about hundreds of lemons that removes the toughest of stains.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
              <Button id="but" type="primary" size="large" onClick={this.showModal14}>
              Yes! I am Interested
                </Button>
              <Modal
                title="Target Kitchen King Dishwash Liquid"
                visible={this.state.modalVisible14}
                onOk={this.handleOk14}
                onCancel={this.handleCancel14}
              >
                <b> Rs 33 / Litre</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - Dish Washing</h5>
                <h5>Brand - Target</h5>
                <h5>Packaging Size - 1L,5L</h5>
                <h5>Fragrance - Lemon</h5>
                <h5>Packaging Type - Plastic Can, Plastic</h5>
                <h5>Bottle</h5>
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