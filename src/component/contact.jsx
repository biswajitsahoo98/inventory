import react, { Component } from "react";
import { Button, Input } from 'antd';
import { UserOutlined, EnvironmentOutlined, MobileOutlined } from '@ant-design/icons';
import { PlusCircleOutlined, MessageOutlined, UsergroupAddOutlined } from '@ant-design/icons';

export class Contact extends Component {

  render() {
    return (
      <div class="home"><br />
        <u><li><a href="/home">Home</a></li></u><br />

        <div class="basi">
          <textarea rows="6" cols="500" placeholder="To Get Best QUOTES Describe Your Requirements in Detail Like:
              - What Are You Looking For
              - Features / Specifications
              - Application / Usage
              - Minimum Order Quantity, etc" ></textarea><br /><br />
          <Input type="number" placeholder="Enter your number: +91 " prefix={<MobileOutlined />} ></Input><br /><br />
          <Input type="text" placeholder="Enter your name:" prefix={<UsergroupAddOutlined />} ></Input>

          <h1>Contact Details</h1>
          <b><UserOutlined />&nbsp;&nbsp;Contact Person:</b>
          <p>Rabindra Sahoo (Owner)</p><br />

          <b><EnvironmentOutlined />&nbsp;&nbsp;Address:</b>
          <p>Piyush Enterprises<br />Barabati, Jajpur - 755008<br />Odisha, India</p><br />

          <b><MobileOutlined />&nbsp;&nbsp;Call Us</b>
          <p>+91 81179 50424
              <strong><mark><MessageOutlined />&nbsp;&nbsp;Send SMS</mark></strong></p>
          <h2><PlusCircleOutlined />&nbsp;&nbsp; Other Contact Details
              <Button type="primary" size="large" >Contact Us</Button></h2>

        </div>
        <div class="containe ptr bdr1"></div><br />

      </div>

    );
  }
}


