import { Button, Col, Divider, Layout, Row, Typography } from 'antd';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNavbar } from '../../../components/common/mainMenu';
import { Footer } from '../../../components/common/sharedLayout';

const { Content } = Layout;
const { Title } = Typography;

const myStyle={
  backgroundImage: 
"url('https://www.aindralabs.com/wp-content/uploads/smart-attendance.jpg')",
  // height:'100vh',
  // marginTop:'-70px',
  // fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
//main webpage on pening the website, welcome page
export default () => {
  return (
    <Layout className='home layout' style={myStyle}>
      <HeaderNavbar />
      <Content>
        <section style={{backgroundColor:'white',width:'400px', margin:'auto',borderRadius:'20px', opacity:"0.9",border:'2px solid black', height:'250px'}}>
        <Row align="middle">
          <Col style={{ top: '50px', margin:'auto', padding:'10px' }} span={24} align="middle">
            <Title level={3}>
                <span style={{opacity:"1", padding:'10px'}}>
                Welcome to AttendFlix</span>
              
            </Title>
            
            <span style={{opacity:"1", margin:'auto', padding:'10px'}}>An attendance tracking app with facial recognition!</span>
         

            <br />
            <Button type='primary' htmlType='submit' style={{opacity:"1",margin:'30px 30px', }}>
              <Link to='/signup'>Get Started</Link>
            </Button>
            <Divider />
            <div style={{backgroundColor:'white',borderRadius:'20px',border:'2px solid black' ,position:'fixed', bottom:'80px', padding:'20px', margin:'auto', left:'690px' }}>
              First time user? Please visit <Link to='/userguidelines'>User Guidelines</Link>
            </div>
          </Col>
        </Row>
        </section>
      </Content>
      <Footer />
    </Layout>
  );
};
