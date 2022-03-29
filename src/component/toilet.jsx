import react, { Component } from "react";
import { Button, Input, Form } from 'antd';
import { Col, Row, Select, Modal } from 'antd';
import { MobileOutlined } from '@ant-design/icons';


const { Option } = Select;

export class Toilet extends Component {

  state = {
    currentStep: 0,
    modalVisible8: false,
  
    badgeCount: 5,
    showBadge: true,
  };
  
  showModal8 = () => {
    this.setState({
      modalVisible8: true,
    });
  };
  
  handleOk8 = e => {
    console.log(e);
    this.setState({
      modalVisible8: false,
    });
  };
  
  handleCancel8 = e => {
    console.log(e);
    this.setState({
      modalVisible8: false,
    });
  };


  state = {
    currentStep: 0,
    modalVisible9: false,
  
    badgeCount: 5,
    showBadge: true,
  };
  
  showModal9 = () => {
    this.setState({
      modalVisible9: true,
    });
  };
  
  handleOk9 = e => {
    console.log(e);
    this.setState({
      modalVisible9: false,
    });
  };
  
  handleCancel9 = e => {
    console.log(e);
    this.setState({
      modalVisible9: false,
    });
  };

  
  state = {
    currentStep: 0,
    modalVisible10: false,
  
    badgeCount: 5,
    showBadge: true,
  };
  
  showModal10 = () => {
    this.setState({
      modalVisible10: true,
    });
  };
  
  handleOk10 = e => {
    console.log(e);
    this.setState({
      modalVisible10: false,
    });
  };
  
  handleCancel10 = e => {
    console.log(e);
    this.setState({
      modalVisible10: false,
    });
  };

  render() {
    return (
      <div class="home"><br />
        <u><li><a href="/home">Home</a></li></u><br />
        <div class="home3">
          <strong><a>Toilet Cleaner</a></strong><br />
          <small>Target Toilet Cleaner kills 99% germs post 5 minutes of contact with undiluted products. Purage more lime scale (white/off white/yellowish) Removal ascompared to ordinary bleaching power & ordinary detergent powder.</small>
        </div><br />
        <div class="bg19 ln5">
          <a class="sheet">500&nbsp;ml&nbsp;Toilet&nbsp;Cleaner&nbsp;Bottle</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/harppic.jpg" width="80%" /></a></div>
        </div><br />
        <div class="btn3">
        <div>
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal8}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="500 ml Toilet Cleaner Bottle"
                visible={this.state.modalVisible8}
                onOk={this.handleOk8}
                onCancel={this.handleCancel8}
              >
                <b> Rs 9 / Piece</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - For filling toilet</h5>
                <h5>cleaning liquid</h5>
                <h5>Capacity - 500 ml</h5>
                <h5>Color - Blue and Red</h5>
                <h5>Brand - Target</h5>
                <h5>Body Material - HDPE</h5>
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
          <h6>Approx. Price : <b>Rs 9</b>/ Piece</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal8}>
              Get Latest Price
                </Button>
              <Modal
                title="500 ml Toilet Cleaner Bottle"
                visible={this.state.modalVisible8}
                onOk={this.handleOk8}
                onCancel={this.handleCancel8}
              >
               <b> Rs 9 / Piece</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - For filling toilet</h5>
                <h5>cleaning liquid</h5>
                <h5>Capacity - 500 ml</h5>
                <h5>Color - Blue and Red</h5>
                <h5>Brand - Target</h5>
                <h5>Body Material - HDPE</h5>
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
              <td>For filling toilet cleaning liquid</td>
            </tr>
            <tr>
              <td>Capacity</td>
              <td>500 ml</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>Blue and Red</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>Target</td>
            </tr>
            <tr>
              <td>Body Material</td>
              <td>HDPE</td>
            </tr>
            <tr>
              <td>Leak Proof</td>
              <td>Yes</td>
            </tr>
          </table><br /><br /><br />
          <h3>We are offering&nbsp;<b>500 ml HDPE Toilet Cleaner Bottle</b>&nbsp;to our clients.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
              <Button id="but" type="primary" size="large" onClick={this.showModal8}>
              Yes! I am Interested
                </Button>
              <Modal
                title="500 ml Toilet Cleaner Bottle"
                visible={this.state.modalVisible8}
                onOk={this.handleOk8}
                onCancel={this.handleCancel8}
              >
                <b> Rs 9 / Piece</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - For filling toilet</h5>
                <h5>cleaning liquid</h5>
                <h5>Capacity - 500 ml</h5>
                <h5>Color - Blue and Red</h5>
                <h5>Brand - Target</h5>
                <h5>Body Material - HDPE</h5>
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
          <a class="sheet">250&nbsp;ml&nbsp;Toilet&nbsp;Cleaner&nbsp;Bottle</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/harppic 1.jpg" height="480" width="100%" /></a></div>
        </div><br />
        <div class="btn3">
        <div>
        <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal9}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="250 ml Toilet Cleaner Bottle"
                visible={this.state.modalVisible9}
                onOk={this.handleOk9}
                onCancel={this.handleCancel9}
              >
                <b> Rs 6 / Piece</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - For filling toilet</h5>
                <h5>cleaning liquid</h5>
                <h5>Capacity - 250 ml</h5>
                <h5>Color - Blue and Red</h5>
                <h5>Brand - Target</h5>
                <h5>Body Material - HDPE</h5>
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
          <h6>Approx. Price : <b>Rs 6</b>/ Piece</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal9}>
              Get Latest Price
                </Button>
              <Modal
                title="250 ml Toilet Cleaner Bottle"
                visible={this.state.modalVisible9}
                onOk={this.handleOk9}
                onCancel={this.handleCancel9}
              >
                <b> Rs 6 / Piece</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - For filling toilet</h5>
                <h5>cleaning liquid</h5>
                <h5>Capacity - 250 ml</h5>
                <h5>Color - Blue and Red</h5>
                <h5>Brand - Target</h5>
                <h5>Body Material - HDPE</h5>
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
              <td>For filling toilet cleaning liquid</td>
            </tr>
            <tr>
              <td>Capacity</td>
              <td>250 ml</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>Blue and Red</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>Target</td>
            </tr>
            <tr>
              <td>Material</td>
              <td>HDPE</td>
            </tr>
            <tr>
              <td>Biodegradable</td>
              <td>Yes</td>
            </tr>
          </table><br /><br /><br />
          <h3>We are offering<b>&nbsp;250 ml HDPE Toilet Cleaner Bottle</b>&nbsp;to our clients.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
            <Button id="but" type="primary" size="large" onClick={this.showModal9}>
              Yes! I am Interested
                </Button>
              <Modal
                title="250 ml Toilet Cleaner Bottle"
                visible={this.state.modalVisible9}
                onOk={this.handleOk9}
                onCancel={this.handleCancel9}
              >
                <b> Rs 6 / Piece</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - For filling toilet</h5>
                <h5>cleaning liquid</h5>
                <h5>Capacity - 250 ml</h5>
                <h5>Color - Blue and Red</h5>
                <h5>Brand - Target</h5>
                <h5>Body Material - HDPE</h5>
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
          <a class="sheet">1L&nbsp;Toilet&nbsp;Cleaner&nbsp;Bottle</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/harppic 2.jpg" height="480" width="100%" /></a></div>
        </div><br />
        <div class="btn3">

        <div>
        <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal10}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="1L Toilet Cleaner Bottle"
                visible={this.state.modalVisible10}
                onOk={this.handleOk10}
                onCancel={this.handleCancel10}
              >
                <b> Rs 12 / Piece</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - For filling toilet</h5>
                <h5>cleaning liquid</h5>
                <h5>Capacity - 1L</h5>
                <h5>Color - Blue and Red</h5>
                <h5>Brand - Target</h5>
                <h5>Material - HDPE</h5>
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
          <h6>Approx. Price : <b>Rs 12</b>/ Piece</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal10}>
              Get Latest Price
                </Button>
              <Modal
                title="1L Toilet Cleaner Bottle"
                visible={this.state.modalVisible10}
                onOk={this.handleOk10}
                onCancel={this.handleCancel10}
              >
                <b> Rs 12 / Piece</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - For filling toilet</h5>
                <h5>cleaning liquid</h5>
                <h5>Capacity - 1L</h5>
                <h5>Color - Blue and Red</h5>
                <h5>Brand - Target</h5>
                <h5>Material - HDPE</h5>
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
              <td>For filling toilet cleaning liquid</td>
            </tr>
            <tr>
              <td>Capacity</td>
              <td>1L</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>Blue and Red</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>Target</td>
            </tr>
            <tr>
              <td>Material</td>
              <td>HDPE</td>
            </tr>
            <tr>
              <td>Biodegradable</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Leakproof</td>
              <td>Yes</td>
            </tr>
          </table><br /><br /><br />
          <h3>We are offering<b>1L HDPE Toilet Cleaner Bottle</b>&nbsp;to our clients.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
            <Button id="but" type="primary" size="large" onClick={this.showModal10}>
              Yes! I am Interested
                </Button>
              <Modal
                title="1L Toilet Cleaner Bottle"
                visible={this.state.modalVisible10}
                onOk={this.handleOk10}
                onCancel={this.handleCancel10}
              >
                 <b> Rs 12 / Piece</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - For filling toilet</h5>
                <h5>cleaning liquid</h5>
                <h5>Capacity - 1L</h5>
                <h5>Color - Blue and Red</h5>
                <h5>Brand - Target</h5>
                <h5>Material - HDPE</h5>
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