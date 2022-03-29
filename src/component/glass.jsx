import react, { Component } from "react";
import { Button, Input, Form } from 'antd';
import { Col, Row, Select, Modal } from 'antd';
import { MobileOutlined } from '@ant-design/icons';


const { Option } = Select;

export class Glass extends Component {

  state = {
    currentStep: 0,
    modalVisible11: false,
  
    badgeCount: 5,
    showBadge: true,
  };
  
  showModal11 = () => {
    this.setState({
      modalVisible11: true,
    });
  };
  
  handleOk11 = e => {
    console.log(e);
    this.setState({
      modalVisible11: false,
    });
  };
  
  handleCancel11 = e => {
    console.log(e);
    this.setState({
      modalVisible11: false,
    });
  };


  state = {
    currentStep: 0,
    modalVisible12: false,
  
    badgeCount: 5,
    showBadge: true,
  };
  
  showModal12 = () => {
    this.setState({
      modalVisible12: true,
    });
  };
  
  handleOk12 = e => {
    console.log(e);
    this.setState({
      modalVisible12: false,
    });
  };
  
  handleCancel12 = e => {
    console.log(e);
    this.setState({
      modalVisible12: false,
    });
  };

  
  render() {
    return (
      <div class="home"><br />
        <u><li><a href="/home">Home</a></li></u><br />
        <div class="home3">
          <strong><a>Glass Cleaner</a></strong><br />
          <small>Target Glass Cleaner A new powerful formula effectively removes hard water stains, accumulated dirt & other tough stains and also gives 2x shine and clean then regular cleaner.</small>
        </div><br />
        <div class="bg19 ln5">
          <a class="sheet">Glass&nbsp;Cleaner</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/glass cleaner 1.jpg" height="480" width="109%" /></a></div>
        </div><br />
        <div class="btn3">
        <div>
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal11}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="Glass Cleaner"
                visible={this.state.modalVisible11}
                onOk={this.handleOk11}
                onCancel={this.handleCancel11}
              >
                <b> Rs 35 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Usage/Application - Home, Shop</h5>
                <h5>Packaging Type - Bottle</h5>
                <h5>Physical State - Liquid</h5>
                <h5>Packing Size - Also available</h5>
                <h5>1L, 5L</h5>
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
          <h6>Approx. Price : <b>Rs 35</b>/ Bottle</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal11}>
              Get Latest Price
                </Button>
              <Modal
                title="Glass Cleaner"
                visible={this.state.modalVisible11}
                onOk={this.handleOk11}
                onCancel={this.handleCancel11}
              >
                <b> Rs 35 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Usage/Application - Home, Shop</h5>
                <h5>Packaging Type - Bottle</h5>
                <h5>Physical State - Liquid</h5>
                <h5>Packing Size - Also available</h5>
                <h5>1L, 5L</h5>
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
              <td>Brand</td>
              <td>Target</td>
            </tr>
            <tr>
              <td>Usage/Application</td>
              <td>Home, Shop</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Bottle</td>
            </tr>
            <tr>
              <td>Physical State</td>
              <td>Liquid</td>
            </tr>
           
            <tr>
              <td>Packing Size</td>
              <td>Also available in 1L, 5L</td>
            </tr>
          </table><br /><br /><br />
          <h3><b>Glass Cleaner</b>&nbsp;is known for its strong cleansing action. It removes dust from the surfaces without putting in much required efforts. It cleans all kinds of glass surfaces and appliances.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
              <Button id="but" type="primary" size="large" onClick={this.showModal11}>
              Yes! I am Interested
                </Button>
              <Modal
                title="Glass Cleaner"
                visible={this.state.modalVisible11}
                onOk={this.handleOk11}
                onCancel={this.handleCancel11}
              >
                 <b> Rs 35 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Usage/Application - Home, Shop</h5>
                <h5>Packaging Type - Bottle</h5>
                <h5>Physical State - Liquid</h5>
                <h5>Packing Size - Also available</h5>
                <h5>1L, 5L</h5>
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

        <div class="bg19 ln5">
          <a class="sheet">Target&nbsp;Glass&nbsp;Cleaner</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/glass cleaner.jpg" height="500" width="100%" /></a></div>
        </div><br />
        <div class="btn3">
        <div>
        <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal12}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="Target Glass Cleaner"
                visible={this.state.modalVisible12}
                onOk={this.handleOk12}
                onCancel={this.handleCancel12}
              >
                <b> Rs 30 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Usage/Application - Home, Shop etc</h5>
                <h5>Packaging Type - Bottle</h5>
                <h5>Physical State - Liquid</h5>
                <h5>Packaging Size - Also</h5>
                <h5>available in 1L, 5L</h5>
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
        <div>
       
      </div>

        </div>
        <div class="infor">
          <h6>Approx. Price : <b>Rs 30</b>/ Bottle</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal12}>
              Get Latest Price
                </Button>
              <Modal
                title="Target Glass Cleaner"
                visible={this.state.modalVisible12}
                onOk={this.handleOk12}
                onCancel={this.handleCancel12}
              >
                <b> Rs 30 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Usage/Application - Home, Shop etc</h5>
                <h5>Packaging Type - Bottle</h5>
                <h5>Physical State - Liquid</h5>
                <h5>Packaging Size - Also</h5>
                <h5>available in 1L, 5L</h5>
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
              <td>Brand</td>
              <td>Target</td>
            </tr>
            <tr>
              <td>Usage/Application</td>
              <td>Home, Shop etc</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Bottle</td>
            </tr>
            <tr>
              <td>Physical State</td>
              <td>Liquid</td>
            </tr>
            
            <tr>
              <td>Packaging Size</td>
              <td>Also available in 1L, 5L</td>
            </tr>
          </table><br /><br /><br />
          <h3>We are offering<b>&nbsp;Target Glass Cleaner</b>&nbsp;to our clients.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
            <Button id="but" type="primary" size="large" onClick={this.showModal12}>
              Yes! I am Interested
                </Button>
              <Modal
                title="Target Glass Cleaner"
                visible={this.state.modalVisible12}
                onOk={this.handleOk12}
                onCancel={this.handleCancel12}
              >
                <b> Rs 30 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Usage/Application - Home, Shop etc</h5>
                <h5>Packaging Type - Bottle</h5>
                <h5>Physical State - Liquid</h5>
                <h5>Packaging Size - Also</h5>
                <h5>available in 1L, 5L</h5>
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