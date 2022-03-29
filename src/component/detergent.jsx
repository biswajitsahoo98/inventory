import react, { Component } from "react";
import { Button, Input } from 'antd';
import { Col, Row, Select, Modal } from 'antd';
import { MobileOutlined } from '@ant-design/icons';


const { Option } = Select;

export class Detergent extends Component {

state = {
  currentStep: 0,
  modalVisible18: false,

  badgeCount: 5,
  showBadge: true,
};

showModal18 = () => {
  this.setState({
    modalVisible18: true,
  });
};

handleOk18 = e => {
  console.log(e);
  this.setState({
    modalVisible18: false,
  });
};

handleCancel18 = e => {
  console.log(e);
  this.setState({
    modalVisible18: false,
  });
};


  render() {
    return (
      <div class="home"><br />
        <u><li><a href="/home">Home</a></li></u><br />
        <div class="home3">
          <strong><a>Laundry Detergents</a></strong><br />
          <small>Target Fabric Wash is a specially formulated liquid detergent which is suitable for both manual and machine washing. Purage fabric wash does not fade colors and it also increases the life of fabric.</small>
        </div><br />
        <div class="bg19 ln5">
          <a class="sheet">Fabric&nbsp;Liquid&nbsp;Detergent</a></div><br />
        <div class="bas">
          <div class="a1" ><a href="/page3"><img src="/img/detergent.jpg" height="530" width="100%" /></a></div>
        </div><br />

        <div class="btn3">
        <div>
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" size="large" onClick={this.showModal18}>
              Get Best<b>Quote</b>
                </Button>
              <Modal
                title="Fabric Liquid Detergent"
                visible={this.state.modalVisible18}
                onOk={this.handleOk18}
                onCancel={this.handleCancel18}
              >
                <b> Rs 42 / Piece</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Shelf Life - 1 year n above</h5>
                <h5>Packaging Size - 500 ml onwards</h5>
                <h5>Color - Colourless</h5>
                <h5>Fragrance - Jasmine</h5>
                <h5>Packaging Type - Hdpe bottles</h5>
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
              <Button type="primary" size="large" onClick={this.showModal18}>
              Get Latest Price
                </Button>
              <Modal
                title="Fabric Liquid Detergent"
                visible={this.state.modalVisible18}
                onOk={this.handleOk18}
                onCancel={this.handleCancel18}
              >
                <b> Rs 42 / Piece</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Shelf Life - 1 year n above</h5>
                <h5>Packaging Size - 500 ml onwards</h5>
                <h5>Color - Colourless</h5>
                <h5>Fragrance - Jasmine</h5>
                <h5>Packaging Type - Hdpe bottles</h5>
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
              <td>Shelf Life</td>
              <td>1 year n above</td>
            </tr>
            <tr>
              <td>Packaging Size</td>
              <td>500 ml onwards</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>Colourless</td>
            </tr>
            <tr>
              <td>Fragrance</td>
              <td>Jasmine</td>
            </tr>
            <tr>
              <td>Packaging Type</td>
              <td>Hdpe bottles</td>
            </tr>
          </table><br /><br /><br /><br /><br />
          <h3>Target liquid detergent is ideal for machine wash handwash both.</h3>

          <div>
          <Row>
          <Col span={26}>
            <div>
              <Button id="but" type="primary" size="large" onClick={this.showModal18}>
              Yes! I am Interested
                </Button>
              <Modal
                title="Fabric Liquid Detergent"
                visible={this.state.modalVisible18}
                onOk={this.handleOk18}
                onCancel={this.handleCancel18}
              >
                <b> Rs 42 / Piece</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Shelf Life - 1 year n above</h5>
                <h5>Packaging Size - 500 ml onwards</h5>
                <h5>Color - Colourless</h5>
                <h5>Fragrance - Jasmine</h5>
                <h5>Packaging Type - Hdpe bottles</h5>
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

