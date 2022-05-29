import { Layout } from 'antd';
import React from 'react';

//footer file on website
const { Footer } = Layout;
export default () => (
  <Footer style={{ textAlign: 'center' }}>
    <span>&copy; AttendFlix {new Date().getFullYear()}</span>
  </Footer>
);
