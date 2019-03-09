import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb, Carousel, Card, Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;


const { Meta } = Card;


function onChange(a, b, c) {
  console.log(a, b, c);
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <Layout className="layout">
            <Header style={{background: '#515A5A'}}>
              <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['0']}
                style={{ lineHeight: '64px', background: '#515A5A' }}
                
              >
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Registrate</Menu.Item>
                <Menu.Item key="3">Login</Menu.Item>
              </Menu>
            </Header>
            <Content style={{  }}>
             
        <div style={{ background: 'white',  minHeight: 280 }}> 
          <div>
            <Carousel afterChange={onChange} className= "img-carusel" >
                  
              {/* <div><h3>1</h3></div> */} <img className= "img-carusel" src="https://cdn.pixabay.com/photo/2014/06/02/22/37/old-age-360714__340.jpg" alt="abuelo"/>
              {/* <div><h3>2</h3></div> */}<img className= "img-carusel" src="https://cdn.pixabay.com/photo/2015/09/25/14/38/old-age-957492__340.jpg" alt="ABUELO 2"/> 
            </Carousel>
          </div>
          <div>
                  <Row type="flex" justify="center" className="row-home">
                    <Col span={6}>
                  <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src="https://cdn.pixabay.com/photo/2015/06/28/20/49/grandma-824867__340.jpg" />}
                    >
                      <Meta
                        title="Europe Street beat"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni autem sed asperiores adipisci vitae distinctio deserunt et quis! Dolore officia sint, reprehenderit dolorum accusantium est obcaecati laborum enim excepturi cupiditate."
                      />
                </Card>
                </Col>
                <Col span={6}>
                <h1>ASDFGH</h1>
                <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src="https://cdn.pixabay.com/photo/2016/04/23/18/48/man-1348082__340.jpg" />}
                    >
                      <Meta
                        title="Europe Street beat"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni autem sed asperiores adipisci vitae distinctio deserunt et quis! Dolore officia sint, reprehenderit dolorum accusantium est obcaecati laborum enim excepturi cupiditate.x|"
                      />
                </Card>
                </Col>
                <Col span={6}span={6}>
                <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src="https://cdn.pixabay.com/photo/2018/04/13/12/14/portrait-3316389__340.jpg" />}
                    >
                      <Meta
                        title="Europe Street beat"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni autem sed asperiores adipisci vitae distinctio deserunt et quis! Dolore officia sint, reprehenderit dolorum accusantium est obcaecati laborum enim excepturi cupiditate."
                      />
                </Card>
                </Col>
                
                </Row>
          </div>
         
          

        </div>  
           </Content>
          <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
           </Footer>
  </Layout>,
      </div>
    );
  }
}

export default App;



