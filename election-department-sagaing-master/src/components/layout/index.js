import React, { useState } from 'react'
import { Layout } from 'antd';
import Navbar from './navbar'
import Footer from './footer'
import Routes from '../../router/routes'
import Dropdown from '../layout/DropDown'

const { Content } = Layout;

const WebsiteLayout = () => {
    const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return <Layout>
        <Navbar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Content className="content">
            <Routes />
        </Content>
        <Footer />
    </Layout>
}
export default WebsiteLayout;