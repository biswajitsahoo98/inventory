import react, { Component } from "react";
import { Button, Input, Form } from 'antd';
import { Col, Row, Select, Modal } from 'antd';
import { MobileOutlined } from '@ant-design/icons';


const { Option } = Select;

export class Phenyl extends Component {

state = {
  currentStep: 0,
  modalVisible1: false,

  badgeCount: 5,
  showBadge: true,
};

showModal1 = () => {
  this.setState({
    modalVisible1: true,
  });
};

handleOk1 = e => {
  console.log(e);
  this.setState({
    modalVisible1: false,
  });
};

handleCancel1 = e => {
  console.log(e);
  this.setState({
    modalVisible1: false,
  });
};


state = {
  currentStep: 0,
  modalVisible2: false,

  badgeCount: 5,
  showBadge: true,
};

showModal2 = () => {
  this.setState({
    modalVisible2: true,
  });
};

handleOk2 = e => {
  console.log(e);
  this.setState({
    modalVisible2: false,
  });
};

handleCancel2 = e => {
  console.log(e);
  this.setState({
    modalVisible2: false,
  });
};


state = {
  currentStep: 0,
  modalVisible3: false,

  badgeCount: 5,
  showBadge: true,
};

showModal3 = () => {
  this.setState({
    modalVisible3: true,
  });
};

handleOk3 = e => {
  console.log(e);
  this.setState({
    modalVisible3: false,
  });
};

handleCancel3 = e => {
  console.log(e);
  this.setState({
    modalVisible3: false,
  });
};

state = {
  currentStep: 0,
  modalVisible4: false,

  badgeCount: 5,
  showBadge: true,
};

showModal4 = () => {
  this.setState({
    modalVisible4: true,
  });
};

handleOk4 = e => {
  console.log(e);
  this.setState({
    modalVisible4: false,
  });
};

handleCancel4 = e => {
  console.log(e);
  this.setState({
    modalVisible4: false,
  });
};

state = {
  currentStep: 0,
  modalVisible5: false,

  badgeCount: 5,
  showBadge: true,
};

showModal5 = () => {
  this.setState({
    modalVisible5: true,
  });
};

handleOk5 = e => {
  console.log(e);
  this.setState({
    modalVisible5: false,
  });
};

handleCancel5 = e => {
  console.log(e);
  this.setState({
    modalVisible5: false,
  });
};

state = {
  currentStep: 0,
  modalVisible6: false,

  badgeCount: 5,
  showBadge: true,
};

showModal6 = () => {
  this.setState({
    modalVisible6: true,
  });
};

handleOk6 = e => {
  console.log(e);
  this.setState({
    modalVisible6: false,
  });
};

handleCancel6 = e => {
  console.log(e);
  this.setState({
    modalVisible6: false,
  });
};


  render() {
    return (
      <div class="home"><br />
        <u><li><a href="/home">Home</a></li></u><br />
        <div class="home3">
          <strong><a>Phenyl Cleaner</a></strong><br />
          <small>Target Phenyl recommended for cleaning floors of Bed Rooms, Dining Table, Kitchen Floor, Bathrooms, Toilet Urinals, Sinks, Bed frames, Deodoring and hard surfaces etc.</small>
        </div><br />
        <div class="bg19 ln5">
          <a class="sheet">Target&nbsp;White&nbsp;Phenyl</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/white phenyl 2.jpg" height="480" width="100%" /></a></div>
        </div><br />

        <div class="btn3">
        <div>
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal1}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="Target White Phenyl"
                visible={this.state.modalVisible1}
                onOk={this.handleOk1}
                onCancel={this.handleCancel1}
              >
                <b> Rs 20 / Litre</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Color - White</h5>
                <h5>Packing Type - Bottle</h5>
                <h5>Form - Liquid</h5>
                <h5>Quantity Per Pack - Also</h5>
                <h5>Available in 1L, 5L</h5>
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
          <h6>Approx. Price : <b>Rs 20</b>/ Litre</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal1}>
              Get Latest Price
                </Button>
              <Modal
                title="Target White Phenyl"
                visible={this.state.modalVisible1}
                onOk={this.handleOk1}
                onCancel={this.handleCancel1}
              >
                <b> Rs 20 / Litre</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Color - White</h5>
                <h5>Packing Type - Bottle</h5>
                <h5>Form - Liquid</h5>
                <h5>Quantity Per Pack - Also</h5>
                <h5>Available in 1L, 5L</h5>
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
              <td>Color</td>
              <td>White</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Bottle</td>
            </tr>
            <tr>
              <td>Form</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>Quantity Per Pack</td>
              <td>Also available in 1L, 5L</td>
            </tr>
            <tr>
              <td>Usage/Application</td>
              <td>Home, Office, Hospital, Theatre, Commercial Building etc</td>
            </tr>
          </table><br /><br /><br />
          <h3><b>Target White Phenyl</b>&nbsp;is a disinfectant liquid which kills harmful bacteria and micro-organisms when used on floor surfaces.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
              <Button id="but" type="primary" size="large" onClick={this.showModal1}>
              Yes! I am Interested
                </Button>
              <Modal
                title="Target White Phenyl"
                visible={this.state.modalVisible1}
                onOk={this.handleOk1}
                onCancel={this.handleCancel1}
              >
                <b> Rs 20 / Litre</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Color - White</h5>
                <h5>Packing Type - Bottle</h5>
                <h5>Form - Liquid</h5>
                <h5>Quantity Per Pack - Also</h5>
                <h5>Available in 1L, 5L</h5>
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
          <a class="sheet">Phenyl&nbsp;Concentrate</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/drum 1.jpeg" height="480" width="100%" /></a></div>
        </div><br />
        <div class="btn3">
        <div>
        <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal2}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="Phenyl Concentrate"
                visible={this.state.modalVisible2}
                onOk={this.handleOk2}
                onCancel={this.handleCancel2}
              >
                <b> Rs 110 / Litre</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Purity - 99%</h5>
                <h5>Usage/Application - Cleaning and</h5>
                <h5>removing stubborn stains</h5>
                <h5>Grade Standard - Reagent Grade</h5>
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
        <div>
       
      </div>

        </div>
        <div class="infor">
          <h6>Approx. Price : <b>Rs 110</b>/ Litre</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal2}>
              Get Latest Price
                </Button>
              <Modal
                title="Phenyl Concentrate"
                visible={this.state.modalVisible2}
                onOk={this.handleOk2}
                onCancel={this.handleCancel2}
              >
                <b> Rs 110 / Litre</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Purity - 99%</h5>
                <h5>Usage/Application - Cleaning and</h5>
                <h5>removing stubborn stains</h5>
                <h5>Grade Standard - Reagent Grade</h5>
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
              <td>Brand</td>
              <td>Target</td>
            </tr>
            <tr>
              <td>Purity</td>
              <td>	99.9%</td>
            </tr>
            <tr>
              <td>Usage/Application</td>
              <td>Cleaning and removing stubborn stains</td>
            </tr>
            <tr>
              <td>Grade Standard</td>
              <td>Reagent Grade</td>
            </tr>
            <tr>
              <td>Form</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>Pack Size</td>
              <td>30L</td>
            </tr>
            <tr>
              <td>Pack Type</td>
              <td>Drum</td>
            </tr>
          </table><br /><br /><br />
          <h3>We are offering <b>10L Phenyl Concentrate</b>&nbsp;to our clients.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
            <Button id="but" type="primary" size="large" onClick={this.showModal2}>
              Yes! I am Interested
                </Button>
              <Modal
                title="Phenyl Concentrate"
                visible={this.state.modalVisible2}
                onOk={this.handleOk2}
                onCancel={this.handleCancel2}
              >
                <b> Rs 110 / Litre</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Purity - 99%</h5>
                <h5>Usage/Application - Cleaning and</h5>
                <h5>removing stubborn stains</h5>
                <h5>Grade Standard - Reagent Grade</h5>
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

        <div class="bg19 ln5">
          <a class="sheet">White&nbsp;Phenyl</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/white phenyl 1.jpg" height="480" width="100%" /></a></div>
        </div><br />
        <div class="btn3">

        <div>
        <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal3}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="White Phenyl"
                visible={this.state.modalVisible3}
                onOk={this.handleOk3}
                onCancel={this.handleCancel3}
              >
                <b> Rs 100 / Pack</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Form - Liquid</h5>
                <h5>Usage/Application - Home, Office etc</h5>
                <h5>Quantity Per Pack - 10L</h5>
                <h5>Packaging Type - Bottle, Can</h5>
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
          <h6>Approx. Price : <b>Rs 100</b>/ Pack</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal3}>
              Get Latest Price
                </Button>
              <Modal
                title="White Phenyl"
                visible={this.state.modalVisible3}
                onOk={this.handleOk3}
                onCancel={this.handleCancel3}
              >
                <b> Rs 100 / Pack</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Form - Liquid</h5>
                <h5>Usage/Application - Home, Office etc</h5>
                <h5>Quantity Per Pack - 10L</h5>
                <h5>Packaging Type - Bottle, Can</h5>
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
              <td>Form</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>Usage/Application</td>
              <td>Home, Office etc</td>
            </tr>
            <tr>
              <td>Quantity Per Pack</td>
              <td>10L</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Bottle, Can</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>White</td>
            </tr>
          </table><br /><br /><br />
          <h3>We are offering<b>White Phenyl</b>&nbsp;to our clients.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
            <Button id="but" type="primary" size="large" onClick={this.showModal3}>
              Yes! I am Interested
                </Button>
              <Modal
                title="White Phenyl"
                visible={this.state.modalVisible3}
                onOk={this.handleOk3}
                onCancel={this.handleCancel3}
              >
                <b> Rs 100 / Pack</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Form - Liquid</h5>
                <h5>Usage/Application - Home, Office etc</h5>
                <h5>Quantity Per Pack - 10L</h5>
                <h5>Packaging Type - Bottle, Can</h5>
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

        <div class="div">
          <legend>Save time! Get the best deal</legend>
          <h1><Form.Item className="number"><Input type="number" type="tel" maxlength="10"  placeholder="Enter your number: +91 " /></Form.Item></h1>
          <h1><Form.Item className="name"><Input size="small" placeholder="Enter your Name:" /></Form.Item></h1>
          <h1><Form.Item className="describe" ><Input size="small" placeholder="Enter Required Product/Service:" /></Form.Item></h1>
          <Button type="primary" size="large"><b>Submit Requirement</b></Button>
          <p>Your information is safe with us.</p>
        </div><br />

        <div class="containe ptr bdr1"></div><br />

        <div class="bg19 ln5">
          <a class="sheet">Concentrated&nbsp;Black&nbsp;Phenyl</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/black phenyl.jpg" height="480" width="100%" /></a></div>
        </div><br />
        <div class="btn3">

        <div>
        <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal4}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="Concentrated Black Phenyl"
                visible={this.state.modalVisible4}
                onOk={this.handleOk4}
                onCancel={this.handleCancel4}
              >
                <b> Rs 100 / kilogram</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Color - Black</h5>
                <h5>Pack Type - Bottle</h5>
                <h5>Form - Liquid</h5>
                <h5>Packaging Size - 1L</h5>
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
          <h6>Approx. Price : <b>Rs 100</b>/ kg</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal4}>
              Get Latest Price
                </Button>
              <Modal
                title="Concentrated Black Phenyl"
                visible={this.state.modalVisible4}
                onOk={this.handleOk4}
                onCancel={this.handleCancel4}
              >
                <b> Rs 100 / kilogram</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Color - Black</h5>
                <h5>Pack Type - Bottle</h5>
                <h5>Form - Liquid</h5>
                <h5>Packaging Size - 1L</h5>
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
              <td>Color</td>
              <td>Black</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Bottle</td>
            </tr>
            <tr>
              <td>Form</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>Packaging Size</td>
              <td>1L</td>
            </tr>
            <tr>
              <td>Usage/Application</td>
              <td>Floor Cleaning</td>
            </tr>
          </table><br /><br /><br />
          <h3>We are offering<b>&nbsp;Concentrated Black Phenyl Cleaner.</b></h3>

         
          <div>
          <Row>
          <Col span={26}>
            <div>
            <Button id="but" type="primary" size="large" onClick={this.showModal4}>
              Yes! I am Interested
                </Button>
              <Modal
                title="Concentrated Black Phenyl"
                visible={this.state.modalVisible4}
                onOk={this.handleOk4}
                onCancel={this.handleCancel4}
              >
                <b> Rs 100 / kilogram</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Color - Black</h5>
                <h5>Pack Type - Bottle</h5>
                <h5>Form - Liquid</h5>
                <h5>Packaging Size - 1L</h5>
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
          <a class="sheet">Liquid&nbsp;Phenyl</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/white phenyl.jpg" height="480" width="100%" /></a></div>
        </div><br />
        <div class="btn3">
        <div>
        <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal5}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="Liquid Phenyl"
                visible={this.state.modalVisible5}
                onOk={this.handleOk5}
                onCancel={this.handleCancel5}
              >
                <b> Rs 17 / Litre</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Color - Green, Yellow, Pink, white</h5>
                <h5>Fragrance - Jasmine, Lavender,</h5>
                <h5>Rose, Lemon etc</h5>
                <h5>Usage/Application - Home, Office etc</h5>
                <h5>Form - Liquid</h5>
                <h5>Packaging Size - 1L</h5>
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
          <h6>Approx. Price : <b>Rs 17</b>/ Litre</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal5}>
              Get Latest Price
                </Button>
              <Modal
                title="Liquid Phenyl"
                visible={this.state.modalVisible5}
                onOk={this.handleOk5}
                onCancel={this.handleCancel5}
              >
                <b> Rs 17 / Litre</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Color - Green, Yellow, Pink, white</h5>
                <h5>Fragrance - Jasmine, Lavender,</h5>
                <h5>Rose, Lemon etc</h5>
                <h5>Usage/Application - Home, Office etc</h5>
                <h5>Form - Liquid</h5>
                <h5>Packaging Size - 1L</h5>
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
              <td>Color</td>
              <td>Green, Yellow, Pink, White</td>
            </tr>
            <tr>
              <td>Fragrance</td>
              <td>Jasmine, Lavender, Rose, Lemon etc</td>
            </tr>
            <tr>
              <td>Usage/Application</td>
              <td>Home, Hotel etc</td>
            </tr>
            <tr>
              <td>Quantity Per Pack</td>
              <td>10L</td>
            </tr>
            <tr>
              <td>Form</td>
              <td>Liquid</td>
            </tr>
            <tr>
              <td>Quantity Per Pack</td>
              <td>1L</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Bottle</td>
            </tr> <tr>
              <td>Brand</td>
              <td>Target</td>
            </tr>
          </table><br />
          <h3>We are offering<b>Liquid Phenyl</b>&nbsp;to our clients.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
            <Button id="but" type="primary" size="large" onClick={this.showModal5}>
              Yes! I am Interested
                </Button>
              <Modal
                title="Liquid Phenyl"
                visible={this.state.modalVisible5}
                onOk={this.handleOk5}
                onCancel={this.handleCancel5}
              >
                <b> Rs 17 / Litre</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Color - Green, Yellow, Pink, white</h5>
                <h5>Fragrance - Jasmine, Lavender,</h5>
                <h5>Rose, Lemon etc</h5>
                <h5>Usage/Application - Home, Office etc</h5>
                <h5>Form - Liquid</h5>
                <h5>Packaging Size - 1L</h5>
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
          <a class="sheet">Liquid&nbsp;Phenyl&nbsp;Concentrate</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/white phenyl 3.jpg" height="480" width="100%" /></a></div>
        </div><br />
        <div class="btn3">
        <div>
        <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal6}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="Liquid Phenyl Concentrate"
                visible={this.state.modalVisible6}
                onOk={this.handleOk6}
                onCancel={this.handleCancel6}
              >
                <b> Rs 130 / Pack</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - Home, Office etc</h5>
                <h5>Brand - Target</h5>
                <h5>Grade Standard - Reagent Grade</h5>
                <h5>Packaging Size - Also available</h5>
                <h5>in 5L, 10L</h5>
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
        <div>
       
      </div>

        </div>
        <div class="infor">
          <h6>Approx. Price : <b>Rs 130</b>/ Pack</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal6}>
              Get Latest Price
                </Button>
              <Modal
                title="Liquid Phenyl Concentrate"
                visible={this.state.modalVisible6}
                onOk={this.handleOk6}
                onCancel={this.handleCancel6}
              >
                <b> Rs 130 / Pack</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - Home, Office etc</h5>
                <h5>Brand - Target</h5>
                <h5>Grade Standard - Reagent Grade</h5>
                <h5>Packaging Size - Also available</h5>
                <h5>in 5L, 10L</h5>
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
              <td>Usage/Application</td>
              <td>Home, Office etc</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>Target</td>
            </tr>
            <tr>
              <td>Grade Standard</td>
              <td>Reagent Grade</td>
            </tr>
            <tr>
              <td>Packaging Size</td>
              <td>Also available in 5L, 10L</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Bottle</td>
            </tr>
            <tr>
              <td>Form</td>
              <td>Liquid</td>
            </tr>
          </table><br /><br /><br />
          <h3>We are offering<b>Phenyl Concentrate</b>&nbsp;to our clients.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
            <Button id="but" type="primary" size="large" onClick={this.showModal6}>
              Yes! I am Interested
                </Button>
              <Modal
                title="Liquid Phenyl Concentrate"
                visible={this.state.modalVisible6}
                onOk={this.handleOk6}
                onCancel={this.handleCancel6}
              >
                 <b> Rs 130 / Pack</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - Home, Office etc</h5>
                <h5>Brand - Target</h5>
                <h5>Grade Standard - Reagent Grade</h5>
                <h5>Packaging Size - Also available</h5>
                <h5>in 5L, 10L</h5>
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

