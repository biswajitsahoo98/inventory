import react, { Component } from "react";
import { Button, Input, Form } from 'antd';
import { Col, Row, Select, Modal } from 'antd';
import { MobileOutlined } from '@ant-design/icons';


const { Option } = Select;

export class Handwash extends Component {

  state = {
    currentStep: 0,
    modalVisible15: false,
  
    badgeCount: 5,
    showBadge: true,
  };
  
  showModal15 = () => {
    this.setState({
      modalVisible15: true,
    });
  };
  
  handleOk15 = e => {
    console.log(e);
    this.setState({
      modalVisible15: false,
    });
  };
  
  handleCancel15 = e => {
    console.log(e);
    this.setState({
      modalVisible15: false,
    });
  };


  state = {
    currentStep: 0,
    modalVisible16: false,
  
    badgeCount: 5,
    showBadge: true,
  };
  
  showModal16 = () => {
    this.setState({
      modalVisible16: true,
    });
  };
  
  handleOk16 = e => {
    console.log(e);
    this.setState({
      modalVisible16: false,
    });
  };
  
  handleCancel16 = e => {
    console.log(e);
    this.setState({
      modalVisible16: false,
    });
  };

  
  state = {
    currentStep: 0,
    modalVisible17: false,
  
    badgeCount: 5,
    showBadge: true,
  };
  
  showModal17 = () => {
    this.setState({
      modalVisible17: true,
    });
  };
  
  handleOk17 = e => {
    console.log(e);
    this.setState({
      modalVisible17: false,
    });
  };
  
  handleCancel17 = e => {
    console.log(e);
    this.setState({
      modalVisible17: false,
    });
  };

  render() {
    return (
      <div class="home"><br />
        <u><li><a href="/home">Home</a></li></u><br />
        <div class="home3">
          <strong><a>Hand Wash</a></strong><br />
          <small>Target Hand Wash protects from germs and prevents illnesses and spread of infection to others with hands, Purge Hand Wash improved hand hygiene and keep your family healthy.</small>
        </div><br />
        <div class="bg19 ln5">
          <a class="sheet">Target&nbsp;Hand&nbsp;Wash</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/Hand wash.jpg" height="480" width="100%" /></a></div>
        </div><br />
        <div class="btn3">
        <div>
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal15}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="Target Hand Wash"
                visible={this.state.modalVisible15}
                onOk={this.handleOk15}
                onCancel={this.handleCancel15}
              >
                <b> Rs 30 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Key Ingredient - Jasmine, Lemon</h5>
                <h5>Scent</h5>
                <h5>Type Of Ingredient - Chemical</h5>
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
          <h6>Approx. Price : <b>Rs 30</b>/ Bottle</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal15}>
              Get Latest Price
                </Button>
              <Modal
                title="Target Hand Wash"
                visible={this.state.modalVisible15}
                onOk={this.handleOk15}
                onCancel={this.handleCancel15}
              >
               <b> Rs 30 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Key Ingredient - Jasmine, Lemon</h5>
                <h5>Scent</h5>
                <h5>Type Of Ingredient - Chemical</h5>
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
              <td>Minimum Order Quantity</td>
              <td>50 Bottle</td>
            </tr>
            <tr>
              <td>Key Ingredient</td>
              <td>Jasmine, Lemon Scent</td>
            </tr>
            <tr>
              <td>Type Of Ingredient</td>
              <td>Chemical</td>
            </tr>
          </table><br /><br /><br /><br /><br /><br /><br /><br /><br />
        
          <div>
          <Row>
          <Col span={26}>
            <div>
              <Button id="but" type="primary" size="large" onClick={this.showModal15}>
              Yes! I am Interested
                </Button>
              <Modal
                title="Target Hand Wash"
                visible={this.state.modalVisible15}
                onOk={this.handleOk15}
                onCancel={this.handleCancel15}
              >
                <b> Rs 30 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Key Ingredient - Jasmine, Lemon</h5>
                <h5>Scent</h5>
                <h5>Type Of Ingredient - Chemical</h5>
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
          <a class="sheet">Antibacterial&nbsp;Hand&nbsp;Wash</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/Hand wash 1.jpg" height="480" width="100%" /></a></div>
        </div><br />
        <div class="btn3">
        <div>
        <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal16}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="Antibacterial Hand Wash"
                visible={this.state.modalVisible16}
                onOk={this.handleOk16}
                onCancel={this.handleCancel16}
              >
                <b> Rs 35 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Packaging Type - starting from 200 ml</h5>
                <h5>Brand - Target</h5>
                <h5>Key Ingredient - Aloe Vera</h5>
                <h5>Type Of Ingredient - Chemical</h5>
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
          <h6>Approx. Price : <b>Rs 35</b>/ Bottle</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal16}>
              Get Latest Price
                </Button>
              <Modal
                title="Antibacterial Hand Wash"
                visible={this.state.modalVisible16}
                onOk={this.handleOk16}
                onCancel={this.handleCancel16}
              >
                <b> Rs 35 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Packaging Type - starting from 200 ml</h5>
                <h5>Brand - Target</h5>
                <h5>Key Ingredient - Aloe Vera</h5>
                <h5>Type Of Ingredient - Chemical</h5>
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
              <td>Minimum Order Quantity</td>
              <td>20 box</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>starting from 200 ml</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>Target</td>
            </tr>
            <tr>
              <td>Key Ingredient</td>
              <td>Aloe Vera</td>
            </tr>
            <tr>
              <td>Type Of Ingredient</td>
              <td>Chemical</td>
            </tr>
           
          </table><br /><br /><br /><br /><br />
          <h3>Delivery Time: 7 days.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
            <Button id="but" type="primary" size="large" onClick={this.showModal16}>
              Yes! I am Interested
                </Button>
              <Modal
                title="Antibacterial Hand Wash"
                visible={this.state.modalVisible16}
                onOk={this.handleOk16}
                onCancel={this.handleCancel16}
              >
                <b> Rs 35 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Packaging Type - starting from 200 ml</h5>
                <h5>Brand - Target</h5>
                <h5>Key Ingredient - Aloe Vera</h5>
                <h5>Type Of Ingredient - Chemical</h5>
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
          <a class="sheet">Hand&nbsp;Washing&nbsp;Gels</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/hand wash 2.jpg" height="480" width="100%" /></a></div>
        </div><br />
        <div class="btn3">

        <div>
        <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal17}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="Hand Washing Gels"
                visible={this.state.modalVisible17}
                onOk={this.handleOk17}
                onCancel={this.handleCancel17}
              >
                <b> Rs 35 / Box</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Packaging Type - Starting from 200 Ml to 5L</h5>
                <h5>Brand - Target</h5>
                <h5>Key Ingredient - Aloe Vera</h5>
                <h5>Type Of Ingredient - Chemical</h5>
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
          <h6>Approx. Price : <b>Rs 35</b>/ Box</h6>

          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
            <Button type="primary" size="large" onClick={this.showModal17}>
              Get Latest Price
                </Button>
              <Modal
                title="Hand Washing Gels"
                visible={this.state.modalVisible17}
                onOk={this.handleOk17}
                onCancel={this.handleCancel17}
              >
                <b> Rs 35 / Box</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Packaging Type - Starting from 200 Ml to 5L</h5>
                <h5>Brand - Target</h5>
                <h5>Key Ingredient - Aloe Vera</h5>
                <h5>Type Of Ingredient - Chemical</h5>
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
              <td>Minimum Order Quantity</td>
              <td>20 box</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Starting from 250 Ml</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>Target</td>
            </tr>
            <tr>
              <td>Key Ingredient</td>
              <td>Aloe Vera</td>
            </tr>
            <tr>
              <td>Type Of Ingredient</td>
              <td>Chemical</td>
            </tr>
          </table><br /><br /><br /><br /><br />
          <h3>Delivery Time: 7 days.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
            <Button id="but" type="primary" size="large" onClick={this.showModal17}>
              Yes! I am Interested
                </Button>
              <Modal
                title="Hand Washing Gels"
                visible={this.state.modalVisible17}
                onOk={this.handleOk17}
                onCancel={this.handleCancel17}
              >
                <b> Rs 35 / Box</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Packaging Type - Starting from 200 Ml to 5L</h5>
                <h5>Brand - Target</h5>
                <h5>Key Ingredient - Aloe Vera</h5>
                <h5>Type Of Ingredient - Chemical</h5>
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