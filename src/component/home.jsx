import React, { Component } from "react";
import { Col, Menu, Dropdown, Input } from 'antd';
import { Typography, Button, Modal, Row } from 'antd';
import { UpCircleOutlined, AudioOutlined, MobileOutlined } from '@ant-design/icons';
import { Carousel, Icon } from "antd";
import { Redirect } from 'react-router-dom';
const { Text } = Typography;

const menu = (
  <Menu>
    <Menu.Item key="0"><a href="/corporate">Corporate Video</a></Menu.Item>
    <Menu.Item><a href="Target.pdf">Download BroChure</a></Menu.Item>
    <Menu.Item><a>Pay With India Mart</a></Menu.Item>
    <Menu.Divider />
  </Menu>
);
const menu1 = (
  <Menu>
    <Menu.Item><a href="/phenyl">Phenyl Cleaner</a></Menu.Item>
    <Menu.Item><a href="/toilet">Toilet Cleaner</a></Menu.Item>
    <Menu.Item><a href="/glass">Glass Cleaner</a></Menu.Item>
    <Menu.Item><a href="/floor">Floor Cleaner</a></Menu.Item>
    <Menu.Item><a href="/dishwash">Dishwash Liquid</a></Menu.Item>
    <Menu.Item><a href="/naphthalene">Napthhalene Balls</a></Menu.Item>
    <Menu.Item><a href="/detergent">Detergent Liquid</a></Menu.Item>
    <Menu.Item><a href="/bleaching">Bleaching Powder</a></Menu.Item>
    <Menu.Item><a href="/handwash">Hand Wash</a></Menu.Item>
    <Menu.Item><a href="/vinegar">Vinegar</a></Menu.Item>
    <Menu.Item><a href="/Page3">Neem Active</a></Menu.Item>
    <Menu.Item><a>Sanitizer</a></Menu.Item>
    <Menu.Item><a>Pine Oil</a></Menu.Item>

    <Menu.Divider />
  </Menu>
);
const { Search } = Input;



export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: ["/phenyl","/toilet","/glass","/floor","/dishwash","/naphthalene","/detergent","/bleaching","/handwash","/vinegar"],
      redirect: ''
    };

    this.carousel1 = React.createRef();
    this.carousel2 = React.createRef();
    this.carousel3 = React.createRef();
    this.carousel4 = React.createRef();
    this.carousel5 = React.createRef();
    this.carousel6 = React.createRef();
    this.carousel7 = React.createRef();
    this.carousel8 = React.createRef();

  }
  state = {
    currentStep: 0,
    modalVisible: false,

    badgeCount: 5,
    showBadge: true,
  };

  
 onSearch = value => {
  this.state.routes.map((val)=>{
    if(val.includes(value)){
      this.setState({redirect: val});
    }
  });
}

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

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <div>
        <marquee id="marquee" direction="left"><mark><a href="/about"><Text type="info">Target products are manufactured by Eagle Labs, Purage Products are becoming most satisfying products among families.</Text>
          <Text type="info"> Families have trusted the brand to help keep their homes healthy for over a long time. Hospitals also trust the brand to sastify their cleaning and distancing needs.</Text>
          <Text type="info"> We are a brand name of cleaning and disinfecting products distributed by the Eagle Labs. The fine includes liquid solutions for hard and soft surfaces and hand washing.</Text></a></mark></marquee>

        <div class="middle">
          <Col className="us"><Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <h1>About Us </h1></a></Dropdown></Col>

          <Col className="Products"><Dropdown overlay={menu1}>
            <a onClick={e => e.preventDefault()}>
              <h1>Our Products </h1></a></Dropdown></Col>

          <Col className="Contacts">
            <a href="/Contact">
              <h1>Contacts Us</h1></a></Col>

          <div class="button">
            <Search placeholder="Search Products/Services" onSearch={this.onSearch} enterButton="Search" />
          </div>
          
          <div class="all"><br />
            <Carousel autoplay slide fade dotPosition="dotPositio" >
              <div class="aa"><a href="/toilet"><img src="/img/harppic.jpg" width="14.5%" /><b>Toilet Cleaner</b></a></div>
              <div class="bb"><a href="/dishwash"><img src="/img/dish wash.jpg" width="14.5%" /><b>Dishwash Liquid</b></a></div>
              <div class="cc"><a href="/detergent"><img src="/img/detergent.jpg" width="14.5%" /><b>Detergent Liquid</b></a></div>
              <div class="dd"><a href="/glass"><img src="/img/glass cleaner.jpg" width="14.5%" /><b>Glass Cleaner</b></a></div>
              <div class="ee"><a href="/handwash"><img src="/img/hand wash 1.jpg" width="14.5%" /><b>Hand Wash</b></a></div>
              <div class="ff"><a href="/floor"><img src="/img/floor cleaner.jpg" width="14.5%" /><b>Floor Cleaner</b></a></div>
              <div class="gg"><a href="/phenyl"><img src="/img/white phenyl.jpg" width="14.5%" /><b>Surface Cleaner</b></a></div>

            </Carousel>
          </div><br />

          <div class="company">
            <h1><strong>&nbsp;| About Company</strong></h1><br />

              &nbsp;&nbsp;<Button type="primary" shape="circle"><UpCircleOutlined /></Button>
            <p>&nbsp;&nbsp;Nature of Business<br />&nbsp;&nbsp;Manufacturer</p>

              &nbsp;&nbsp;<Button type="primary" shape="circle"><UpCircleOutlined /></Button>&nbsp;&nbsp;
              <p>&nbsp;&nbsp;Legal Status of Firm<br />&nbsp;&nbsp;Individual - Proprietor</p>

            <div class="company2">
              <Button type="primary" shape="circle"><UpCircleOutlined /></Button>
              <p>Total Number of Employees<br />26 to 50 People</p>

              <Button type="primary" shape="circle"><UpCircleOutlined /></Button>
              <p>Annual Turnover<br />Rs. 50 Lakh - 1 Crore</p>
            </div>

            <div class="company3">
              <Button type="primary" shape="circle"><UpCircleOutlined /></Button>
              <p>Year of Establishment<br />2017</p>

              <Button type="primary" shape="circle"><UpCircleOutlined /></Button>
              <p>GST No.<br />21BISPS4363K2ZR </p>
            </div>
          </div >
          <p class="letter">&nbsp;We are&nbsp;<b>Manufacturers&nbsp;</b>of<strong>&nbsp;Liquid Dish Wash, Glass Cleaner, Hand Wash</strong>&nbsp;etc to our clients.<b><a href="/about">&nbsp;<Text type="warning"><u>Read More</u></Text></a></b></p>
        </div>

        <div class="carousal"><br />
          <Carousel autoplay slide dotPosition="right" >
            <div class="a-g"><a href="/detergent"><img src="/img/detergent.jpg" width="50%" /><h1>750ml<Text type="warning"> Detergent</Text></h1></a><p> Price :<Text delete type="danger">₹120 / Piece</Text><br /> Our Price : <Text type="success">₹110 / Piece</Text></p></div>
            <div class="a-g"><a href="/toilet"><img src="/img/harppic.jpg" width="50%" /><h1>1L<Text type="warning"> Harppic Toilet Cleaner</Text></h1></a><p> Price :<Text delete type="danger">₹160 / Piece</Text><br /> Our Price : <Text type="success">₹150 / Piece</Text></p></div>
            <div class="a-g"><a href="/dishwash"><img src="/img/dish wash.jpg" width="51%" /><h1>250ml<Text type="warning"> VIM Dish Wash</Text></h1></a><p> Price :<Text delete type="danger">₹50 / Piece</Text><br /> Our Price : <Text type="success">₹40 / Piece</Text></p></div>
            <div class="a-g"><a href="/handwash"><img src="/img/hand wash 1.jpg" width="51%" /><h1>1L<Text type="warning"> Hand Wash</Text></h1></a><p> Price :<Text delete type="danger">₹110 / Piece</Text><br /> Our Price : <Text type="success">₹100 / Piece</Text></p></div>
            <div class="a-g"><a href="/floor"><img src="/img/floor cleaner.jpg" width="51%" /><h1>500ml<Text type="warning"> Floor Cleaner</Text></h1></a><p> Price :<Text delete type="danger">₹80 / Piece</Text><br /> Our Price : <Text type="success">₹65 / Piece</Text></p></div>
            <div class="a-g"><a href="/phenyl"><img src="/img/white phenyl.jpg" width="51%" /><h1>1L<Text type="warning"> Surface Cleaner</Text></h1></a><p> Price :<Text delete type="danger">₹110 / Piece</Text><br /> Our Price : <Text type="success">₹100 / Piece</Text></p></div>
            <div class="a-g"><a href="/glass"><img src="/img/glass cleaner.jpg" width="51%" /><h1>1L<Text type="warning"> Glass Cleaner</Text></h1></a><p> Price :<Text delete type="danger">₹100 / Piece</Text><br /> Our Price : <Text type="success">₹90 / Piece</Text></p></div>

          </Carousel>
        </div>

        <h1 class="font">Our Product</h1>
        <h3 class="font2">Piyush Enterprises situated at Jajpur Odisha, India is a prominent and leading organization of this domain involved in Manufacturing wide assortments of supreme quality Liquid Dish Wash, Glass Cleaner, Hand Wash etc. To fulfill the diverse requirements of huge patrons’ base, we are providing these products in many customized options. We offer these products with best quality and optimum price.</h3><br />

        <div class="pic" onMouseOver={()=>{this.carousel1.autoPlay(true)}} onMouseOut={()=>{this.carousel1.innerSlider.pause()}}>
          <Carousel autoplay={false} slide dotPosition="top" showThumbs={false} infiniteLoop={true} ref={node => (this.carousel1 = node)}>
              <div class="box" ><img src="/img/white phenyl 2.jpg" width="220px" height="280px" /></div>
              <div class="box" ><img src="/img/white phenyl 3.jpg" width="220px" height="280px" /></div>
              <div class="box" ><img src="/img/white phenyl.jpg" width="220px" height="280px" /></div>
              <div class="box" ><img src="/img/white phenyl 1.jpg" width="220px" height="280px" /></div>
              <div class="box" ><img src="/img/black phenyl.jpg" width="220px" height="280px" /></div>
            </Carousel><br/>
            <h1>Phenyl Cleaner</h1>
        </div>
        <div class="pic2" onMouseOver={()=>{this.carousel2.autoPlay(true)}} onMouseOut={()=>{this.carousel2.innerSlider.pause()}}>
          <Carousel utoplay={false} slide dotPosition="top" showThumbs={false} infiniteLoop={true} ref={node => (this.carousel2 = node)}>
            <div class="box1" ><img src="/img/harppic.jpg" width="220px" height="280px" /></div>
            <div class="box1" ><img src="/img/harppic 1.jpg" width="220px" height="280px" /></div>
            <div class="box1" ><img src="/img/harppic 2.jpg" width="220px" height="280px" /></div>
          </Carousel><br/>
          <h1>Toilet Cleaner</h1>
        </div>
        <div class="pic3" onMouseOver={()=>{this.carousel3.autoPlay(true)}} onMouseOut={()=>{this.carousel3.innerSlider.pause()}}>
          <Carousel autoplay={false} slide dotPosition="top" showThumbs={false} infiniteLoop={true} ref={node => (this.carousel3 = node)}>
            <div class="box2" ><img src="/img/glass cleaner.jpg" width="220px" height="280px" /></div>
            <div class="box2" ><img src="/img/glass cleaner 1.jpg" width="220px" height="280px" /></div>
          </Carousel><br/>
          <h1>Glass Cleaner</h1>
        </div>
        <div class="pic4" onMouseOver={()=>{this.carousel4.autoPlay(true)}} onMouseOut={()=>{this.carousel4.innerSlider.pause()}}>
          <Carousel autoplay={false} slide dotPosition="top" showThumbs={false} infiniteLoop={true} ref={node => (this.carousel4 = node)}>
            <div class="box3" ><img src="/img/hand wash 1.jpg" width="220px" height="280px" /></div>
            <div class="box3" ><img src="/img/hand wash.jpg" width="220px" height="280px" /></div>
            <div class="box3" ><img src="/img/hand wash 2.jpg" width="220px" height="280px" /></div>
          </Carousel><br/>
          <h1>Hand Wash</h1>
        </div>
        <div class="pic5" onMouseOver={()=>{this.carousel5.autoPlay(true)}} onMouseOut={()=>{this.carousel5.innerSlider.pause()}}>
          <Carousel autoplay={false} slide dotPosition="top" showThumbs={false} infiniteLoop={true} ref={node => (this.carousel5 = node)}>
            <div class="box4" ><img src="/img/factory.jpg" width="220px" height="280px" /></div>
            <div class="box4" ><img src="/img/factory 1.jpg" width="220px" height="280px" /></div>
            <div class="box4" ><img src="/img/factory 2.jpg" width="220px" height="280px" /></div>
            <div class="box4" ><img src="/img/factory 3.jpg" width="220px" height="280px" /></div>
            <div class="box4" ><img src="/img/factory 4.jpg" width="220px" height="280px" /></div>
          </Carousel><br/>
          <h1>Factory</h1>
        </div>
        <div class="pic6" onMouseOver={()=>{this.carousel6.autoPlay(true)}} onMouseOut={()=>{this.carousel6.innerSlider.pause()}}>
          <Carousel autoplay={false} slide dotPosition="top" showThumbs={false} infiniteLoop={true} ref={node => (this.carousel6 = node)}>
            <div class="box5" ><img src="/img/office.jpg" width="220px" height="280px" /></div>
            <div class="box5" ><img src="/img/product.jpg" width="220px" height="280px" /></div>
          </Carousel><br/>
          <h1>Office</h1>
        </div>
        <div class="pic7" onMouseOver={()=>{this.carousel7.autoPlay(true)}} onMouseOut={()=>{this.carousel7.innerSlider.pause()}}>
          <Carousel autoplay={false} slide dotPosition="top" showThumbs={false} infiniteLoop={true} ref={node => (this.carousel7 = node)}>
            <div class="box6" ><img src="/img/harppic.jpg" width="220px" height="280px" /></div>
            <div class="box6" ><img src="/img/white phenyl.jpg" width="220px" height="280px" /></div>
            <div class="box6" ><img src="/img/hand wash.jpg" width="220px" height="280px" /></div>
            <div class="box6" ><img src="/img/detergent.jpg" width="220px" height="280px" /></div>
          </Carousel><br/>
          <h1>Detergent Liquid</h1>
        </div>
        <div class="pic8" onMouseOver={()=>{this.carousel8.autoPlay(true)}} onMouseOut={()=>{this.carousel8.innerSlider.pause()}}>
          <Carousel autoplay={false} slide dotPosition="top" showThumbs={false} infiniteLoop={true} ref={node => (this.carousel8 = node)}>
            <div class="box7" ><img src="/img/floor cleaner.jpg" width="220px" height="280px" /></div>
            <div class="box7" ><img src="/img/floor cleaner 1.jpg" width="220px" height="280px" /></div>
            <div class="box7" ><img src="/img/hand wash.jpg" width="220px" height="280px" /></div>
            <div class="box7" ><img src="/img/detergent.jpg" width="220px" height="280px" /></div>
          </Carousel><br/>
          <h1>Floor Cleaner</h1>
        </div><br/><br/><br/><br/>

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
                      <Input type="number" type="tel" maxlength="10" placeholder="Enter your number: +91 " prefix={<MobileOutlined />} ></Input>
                    </div>
                    <small>We will contact you on this number</small><br /><br />
                    <Button id="buttonn" type="primary" size="large" ><span>Submit Now</span></Button>

                  </Modal>
                </div>
              </Col>
            </Row>
          </div>

        </div>

      </div>

    );
  }
}
