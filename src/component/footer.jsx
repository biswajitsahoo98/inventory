import React, { Component, } from "react";
import { Button, Input, Form, Tag, Typography } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, ShareAltOutlined } from '@ant-design/icons';
import { FacebookOutlined, WhatsAppOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import { MessageOutlined, MailOutlined, VideoCameraAddOutlined} from '@ant-design/icons';

const { Text } = Typography;

export class Footer extends Component {

  render() {
    return (
      <div className="foot">

        <div class="class">
          <p>Tell Us What Are You Looking For ?
                <div className="class2">
              <h1><Form.Item className="describe" ><textarea tabIndex="28" rows="6" cols="113" placeholder="Describe your requirement in details:" ></textarea></Form.Item></h1>
              <h1><Form.Item className="number"><Input type="number" type="tel" maxlength="10"  placeholder="Enter your number: +91 " /></Form.Item></h1>
              <h1><Form.Item className="name"><Input size="small" placeholder="Enter your Name:" /></Form.Item></h1>
              <Button type="primary" size="large">Send Enquiry</Button>
            </div></p></div>
        <div class="containe ptr bdr1"></div>
        

        <div class="reach">
          
          <video id="video" width="650" controls autoplay loop><source src="target.mp4" type="video/mp4"/></video><br/><a href="/corporate"><b><Text type="warning">Corporate Video</Text >&nbsp;<VideoCameraAddOutlined /></b></a>
          <h1>Reach Us&nbsp;<a><EnvironmentOutlined /></a></h1>
          <h2><Text type="warning">Rabindra Sahoo (Owner)</Text></h2>
          <h3><Text type="warning">Piyush Enterprises<br />216-B, Sribandhpur, Near Barabati<br />Jajpur - 755008, Odisha, India</Text></h3>

          <strong>Share Us&nbsp;<a><ShareAltOutlined /></a></strong><br /><br /><br />
          <h4>Call Us&nbsp;<a href="tel:8117950424"><PhoneOutlined /><br /><Text type="warning">8117950424</Text></a></h4>
          <p><Tag icon={<FacebookOutlined />} color="#55acee"  ><a target="_blank" href="https://www.facebook.com/rabindra1979/">Facebook</a></Tag>
            <Tag icon={<WhatsAppOutlined />} color="#1ebea5"  ><a target="_blank" href="https://wa.me/8117950424">WhatsApp</a></Tag>
            <Tag icon={<InstagramOutlined />} color="#cb2027"  ><a target="_blank" href="https://www.instagram.com/being._.suman/">Instagram</a></Tag>
            <Tag icon={<YoutubeOutlined />} color="#bb0000"  ><a target="_blank"href="https://www.antgroup.com">Youtube</a></Tag></p><br/>
          <p1><a href="mailto:r4rabindra@gmail.com"><Text type="warning">Send E-mail</Text>&nbsp;&nbsp;<MailOutlined />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="tel:8117950424"><Text type="warning">Send SMS</Text>&nbsp;&nbsp;<MessageOutlined /></a></a></p1>
        </div>
        <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10533.734940509285!2d86.14377806267058!3d20.799946378374234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a195bbb18b4ced7%3A0x3ae825b011f065c1!2sBarabati%2C%20Odisha%20755008!5e0!3m2!1sen!2sin!4v1622722138891!5m2!1sen!2sin" width="400" height="200" allowfullscreen="" loading="lazy"></iframe>
        <div class="about">
          <h1>Our Company</h1>
          <ul>
            <li><a href="/home"><p class="hover-underline-animation">Home</p></a></li>
            <li><a href="/about"><p class="hover-underline-animation">About Us</p></a></li>
            <li><a href="/corporate"><p class="hover-underline-animation">Corporate Video</p></a></li>
            <li><a href="/map"><p class="hover-underline-animation">Sitemap</p></a></li>
            <li><a href="/contact"><p class="hover-underline-animation">Contact Us</p></a></li>
          </ul>
        </div>
        <div class="Product">
          <h1>Product</h1>
          <ul>
          <li><a href="/phenyl"><p class="hover-underline-animation">Phenyl Cleaner</p></a></li>
          <li><a href="/toilet"><p class="hover-underline-animation">Toilet Cleaner</p></a></li>
          <li><a href="/glass"><p class="hover-underline-animation">Glass Cleaner</p></a></li>
          <li><a href="/floor"><p class="hover-underline-animation">Floor Cleaner</p></a></li>
          <li><a href="/dishwash"><p class="hover-underline-animation">Dishwash Liquid</p></a></li>
          </ul>
        </div>
        <div class="Hot">
          <h1>Hot Product</h1>
          <ul>
          <li><a href="/naphthalene"><p class="hover-underline-animation">Naphthalene Balls</p></a></li>
          <li><a href="/detergent"><p class="hover-underline-animation">Detergent Liquid</p></a></li>
          <li><a href="/bleaching "><p class="hover-underline-animation">Bleaching Power</p></a></li>
          <li><a href="/handwash"><p class="hover-underline-animation">Hand Wash</p></a></li>
          <li><a href="/vinegar"><p class="hover-underline-animation">Vinegar</p></a></li>
          <div class="btn">
        <Button type="primary" size="large"><a href="/map"><b>+View All</b></a></Button>
        </div>
        </ul>
          </div>
        <div className="foot2">
          <p>©piyushenterprises. All Rights Reserved <u>(Terms of Use)</u><strong>Developed and Managed by&nbsp; <a href="www.etns.co.in"><Text type="danger"><u>ETN Solutions Pvt Ltd.</u></Text></a></strong></p>
        </div>

      </div>

    );
  }
}