import react, { Component } from "react";
import { Button, Carousel } from 'antd';
import { Col, Row, Select, Modal, Input, Typography } from 'antd';
import { MobileOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Text } = Typography;

export class About extends Component {

  state = {
    currentStep: 0,
    modalVisible: false,

    badgeCount: 5,
    showBadge: true,
  };

  showModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      modalVisible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      modalVisible: false,
    });
  };

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
        <div class="home2">
          <strong>About Us</strong><br /><br />
          <small>Incepted in <b>2017, Piyush Enterprises</b> situated at Jajpur (Odisha, India) is a prominent and leading organization of this domain involved in Manufacturing wide assortments of supreme quality<b> White Phenyl, Black Phenyl, Floor Wash, Liquid Dish Wash, Glass Cleaner, Hand Wash, Hand Sanitizer, Pine Oil, Alpox 200</b> etc.
              Our Offered products are manufactured by making use of top-quality raw material and modern tools & techniques. These products are applauded for their purity, long shelf life, and high effectiveness.
              To fulfill the diverse requirements of huge patrons’ base, we are providing these products in many customized options. Our provided range is easily available at pocket-friendly prices in a stipulated time period.<br /><br />
              To prepare the presented range with a set industry quality standard, we have the latest infrastructure facility at our place. This infrastructural unit is highly equipped with all the latest machines to manufacture the provided products in bulk quantity.
              Moreover, we regularly upgrade the machine installed in our manufacturing unit to fulfill our patrons need according to their given specifications. Our organization also ensures the top quality of the products before the final dispatch of the products at the patron's end.
              In addition to this, we are also fully assisted by a team of extremely talented professionals.
              <br /><br />Under the continuous guidance of our mentor,<b> Mr. Rabindra Sahoo,</b> we are able to serve the huge quantity of patrons.
              Owing to his outstanding management skills, we have been able to achieve a dynamic position in this industry.</small>
        </div><br />

        <div class="bg19 ln5">
          <a class="sheet">Company&nbsp;Factsheet</a></div><br />
        <div class="basic">
          <h1><a>Basic Information</a></h1>

          <table>
            <tr>
              <td>Nature of Business</td>
              <td>Manufacturer</td>
            </tr>
            <tr>
              <td>Additional Business</td>
              <ul class="business">
                <li>Trader</li>
                <li>Supplier</li>
                <li>Wholesaler</li>
                <li>Service Provider</li>
              </ul>
            </tr>
            <tr>
              <td>Company CEO</td>
              <td>Rabindra Sahoo</td>
            </tr>
            <tr>
              <td>Registered Address</td>
              <td>Jajpur-755008, Odisha, India</td>
            </tr>
            <tr>
              <td>Total Number of Employees</td>
              <td>26 to 50 People</td>
            </tr>
            <tr>
              <td>Year of Establishment</td>
              <td>2017</td>
            </tr>
            <tr>
              <td>Legal Status of Firm</td>
              <td>Individual - Proprietor</td>
            </tr>
            <tr>
              <td>Annual Turnover</td>
              <td>Rs. 50 Lakh - 1 Crore</td>
            </tr>
          </table>

          <div class="Profile">
            <h1><a>Statutory Profile</a></h1>
            <table>
              <tr>
                <td>GST No.</td>
                <td>21BISPS4363K2ZR</td>
              </tr>
              <tr>
                <td>Bankers</td>
                <ul class="business2">
                  <li>BANK OF BARODA</li>
                </ul>
              </tr>
            </table>

            <div class="Profile2">
              <h1><a>Packaging/Payment and Shipment Details</a></h1>
              <table>
                <tr>
                  <td>GST No.</td>
                  <td>21BISPS4363K2ZR</td>
                </tr>
                <tr>
                  <td>Payment Mode</td>
                  <ul class="business3">
                    <li>Cash</li>
                    <li>Cheque</li>
                    <li>DD</li>
                    <li>Credit Card</li>

                  </ul>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <sup class="price">We <strong>Send You The Price</strong> Immediately</sup>
        <div class="btn2">
        <div id="divy">
        <Row>
          <Col span={24}>
            <div>
              <Button type="primary" onClick={this.showModal}>
              Get Instant Quote
                </Button>
              <Modal
                title="TARGET INDUSTRIES"
                visible={this.state.modalVisible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <img className="img" src="/target1.png" height="100" alt="logo"></img>
                <h3>Connect With <Text type="danger"><b>"Piyush Enterprises"</b></Text></h3>
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
        <div class="bg19 ln5">
          <a class="sheet">Why&nbsp;Us?</a></div>
        <div class="position">
          <p>We have been able to occupy a commendable position in the industry for offering top quality products.
          Our organization is appreciated in the market due to our transparent and moral business policies.
              In addition, we are extremely preferred by the patrons for our timely delivery of the consignments.</p>
          <b>We have become the chief entity in this domain on the basis of:</b>
          <ul>
            <li>High-tech infrastructure</li>
            <li>Skilled team of professionals</li>
            <li>Ethical business policies</li>
            <li>Timely delivery</li>
            <li>Customer-centric approach</li>
            <li>Transparent business dealings</li>
          </ul><br />
          <h1>For More Information :&nbsp; 
            
        <div id="divy">
        <Row>
          <Col span={24}>
            <div>
              <Button type="primary" onClick={this.showModal}>
                Contact Us
                </Button>
              <Modal
                title="TARGET INDUSTRIES"
                visible={this.state.modalVisible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <img className="img" src="/target1.png" height="100" alt="logo"></img>
                <h3>Connect With <Text type="danger"><b>"Piyush Enterprises"</b></Text></h3>
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

            </h1><br />
          <div class="container ptrn bdr18"></div>
        </div><br />
        <div class="bg19 ln5">
          <a class="sheet">ISO&nbsp;Certification</a></div><br />
        <b class="certificate">ISO 9001:2015 Certificate:</b><br /><br />
        <h1 class="information">For More Information :&nbsp;
        
        <div id="divy">
         <Row>
          <Col span={24}>
            <div>
              <Button type="primary" onClick={this.showModal}>
                Contact Us
                </Button>
              <Modal
                title="TARGET INDUSTRIES"
                visible={this.state.modalVisible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <img className="img" src="/target1.png" height="100" alt="logo"></img>
                <h3>Connect With <Text type="danger"><b>"Piyush Enterprises"</b></Text></h3>
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
        
         </h1><br />
        <div class="containe ptr bdr1"></div><br />
        <div class="position1">
          <div class="bg19 ln5">
            <a class="sheet">Brands&nbsp;We&nbsp;Deal&nbsp;In</a></div><br />
          <b class="certificate">Our Manufacturing Brand Is:</b><br />
          <ul>
            <li>Target</li>
          </ul>
          <h1 class="information">For More Information :&nbsp;

          <div id="divy">
        <Row>
          <Col span={24}>
            <div>
              <Button type="primary" onClick={this.showModal}>
                Contact Us
                </Button>
              <Modal
                title="TARGET INDUSTRIES"
                visible={this.state.modalVisible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <img className="img" src="/target1.png" height="100" alt="logo"></img>
                <h3>Connect With <Text type="danger"><b>"Piyush Enterprises"</b></Text></h3>
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

           </h1><br />
        </div>
        <div class="containe ptr bdr1"></div>
        <a class="explore"><b>Explore More Product</b></a>
        <div class="all1"><br />
          <Carousel autoplay slide fade dotPosition="dotPositio" >
            <div class="aaa" ><a href="/page3"><img src="/img/harppic.jpg" width="14.5%" /><br /></a><b>&nbsp;&nbsp;&nbsp;&nbsp;Harppic Toilet Cleaner</b><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div id="divy">
          <Row>
          <Col span={26}>
            <div>
              <Button type="primary" onClick={this.showModal1}>
              Get Instant Quote
                </Button>
              <Modal
                title="Black Phenyl"
                visible={this.state.modalVisible1}
                onOk={this.handleOk1}
                onCancel={this.handleCancel1}
              >
                <b> Rs 20 / Litre</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Color - Black</h5>
                <h5>Packing Type - Bottle</h5>
                <h5>Form - Liquid</h5>
                <h5>Quantity Per Pack - 450ml; Also</h5>
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
            <br /><br /></div>
            <div class="ab" ><a href="/page3"><img src="/img/dish wash.jpg" width="14.5%" /><br /></a><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dish Cleaner</b><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <div id="divy">
            <Row>
          <Col span={26}>
            <div>
              <Button type="primary" onClick={this.showModal2}>
              Get Instant Quote
                </Button>
              <Modal
                title="500 ml HDPE Toilet Cleaner Bottle"
                visible={this.state.modalVisible2}
                onOk={this.handleOk2}
                onCancel={this.handleCancel2}
              >
                <b> Rs 9 / Litre</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Usage/Application - For filling toilet cleaning liquid</h5>
                <h5>Capacity - 500 ml</h5>
                <h5>Color - Blue and Red</h5>
                <h5>Brand - Target</h5>
                <h5>Body Material - Hdpe</h5>
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
            <br /></div>
            <div class="ac" ><a href="/page3"><img src="/img/detergent.jpg" width="14.5%" /><br /></a><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Detergent Liquid</b><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
            <div id="divy">
            <Row>
          <Col span={26}>
            <div>
              <Button type="primary" onClick={this.showModal3}>
              Get Instant Quote
                </Button>
              <Modal
                title="Napththalene Balls"
                visible={this.state.modalVisible3}
                onOk={this.handleOk3}
                onCancel={this.handleCancel3}
              >
                <b> Rs 90 / Packet</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Packaging Size - 60 balls</h5>
                <h5>Usage/Application - For Storing clothing and other articles susceptible to dmage from mold or moth larvae</h5>
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
            <br /></div>
            
            
            <div class="ad" ><a href="/page3"><img src="/img/glass cleaner.jpg" width="14.5%" /><br /></a><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Glass Cleaner</b><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <div id="divy">
            <Row>
          <Col span={26}>
            <div>
              <Button type="primary" onClick={this.showModal4}>
              Get Instant Quote
                </Button>
              <Modal
                title="Glass Cleaner"
                visible={this.state.modalVisible4}
                onOk={this.handleOk4}
                onCancel={this.handleCancel4}
              >
                <b> Rs 35 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Brand - Target</h5>
                <h5>Usage/Application - Home, Shop</h5>
                <h5>Packaging Type - Bottle</h5>
                <h5>Physical State - Liquid</h5>
                <h5>Packing Size - 450 ml; Also available in 1L, 5L</h5>
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
            <br /></div>
            
            
            
            <div class="ae" ><a href="/page3"><img src="/img/hand wash.jpg" width="14.5%" /><br /></a><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hand Wash</b><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <div id="divy">
            <Row>
          <Col span={26}>
            <div>
              <Button type="primary" onClick={this.showModal5}>
              Get Instant Quote
                </Button>
              <Modal
                title="Target Hand Wash"
                visible={this.state.modalVisible5}
                onOk={this.handleOk5}
                onCancel={this.handleCancel5}
              >
                <b> Rs 30 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <h5>Key Ingedrdent - Jasmine, Lemon Scent</h5>
                <h5>Tye Of Ingedrdent - Chemical</h5>
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
            <br /></div>
            
            
            <div class="af" ><a href="/page3"><img src="/img/glass cleaner.jpg" width="14.5%" /><br /></a><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Glass Cleaner</b><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <div id="divy">
            <Row>
          <Col span={26}>
            <div>
              <Button type="primary" onClick={this.showModal6}>
              Get Instant Quote
                </Button>
              <Modal
                title="Target Floor Surface Cleaner"
                visible={this.state.modalVisible6}
                onOk={this.handleOk6}
                onCancel={this.handleCancel6}
              >
                <b> Rs 28 / Bottle</b>
                <h5>Sold By - Piyush Enterprises</h5>
                <b> Form - Liquid</b>
                <b> Fragrance - Rose, Lavender, Jasmine, Lemon etc</b>
                <h5>Usage/Application - Floor Cleaning</h5>
                <h5>Packing Size - 500 ml</h5>
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
            <br /></div>
            
            
          </Carousel>
        </div>
        <div class="containe ptr bdr1"></div><br />

      </div>

    );
  }
}

