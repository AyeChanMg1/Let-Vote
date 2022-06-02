import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import {Space} from 'antd'
import { MenuData } from '../../data/MenuData'
import Image from '../layout/images/header.png'
import { FaBars } from "react-icons/fa";
import '../layout/layout.css'

const Nav = styled.nav`
    height: 100px;
    background: rgba(0,0,0, 0.5);
    justify-content: space-between;
    display: flex;
    padding: 1rem 2rem;
    z-index: 100;
    width: 100%;
    background: #fff;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 400px){
        padding: 5px;
    }
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 1020px){
        display: block;
        color: black;
        width: 35px;
        height: 35px;
        margin-top: 20px
    }

    @media screen and (max-width: 400px){
        width: 30px;
        height: 30px;
        margin-right: 10px;
        margin-top: 30px;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
    color: black;

    @media screen and (max-width: 1020px){
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
    margin-right: 24px;
    color: Black;

    &:hover{
        border-bottom: 4px solid black;
        transition: all 0.2s ease-out;
        color: black;
        
    }
`;

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Space>
            
            <img className='nav-logo' src={Image} width='90px' height='90px'/>
            <div > <h1 className='nav-h1'>ELECTIONS</h1> <h1 className='nav-h1'>DEPARTMENT</h1> <h1 className='nav-h1' style={{color: '#CCC'}}>SAGAING</h1></div>
            
            </Space>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {MenuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index} style={{textDecoration: 'none'}}>
                        {item.title} 
                    </NavMenuLinks>
                ))}
            </NavMenu>
            

            
        </Nav>
    )
}

export default Navbar
