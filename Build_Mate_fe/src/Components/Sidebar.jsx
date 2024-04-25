// Sidebar.jsx
import React from 'react';
import styled from "styled-components";
import {HomeRounded, CloseRounded} from "@mui/icons-material";
import logo from '../Assets/Logo_version2.0.png';

const MenuContainer = styled.div`
    flex: 0.5;
    flex.direction: column;
    height: 100vh;
    display:flex;
    background-color: ${({ theme})=> theme.bg};
`;
const Logo = styled.div``;
const close = styled.div``;
const Elements = styled.div``;
const NavText = styled.div``;

const Sidebar = () => {
  return (
    <MenuContainer>
        <logo><img src={logo} alt=''/></logo>
        <close>
            <CloseRounded/>
        </close>
        <Elements>
            <HomeRounded/>
            <NavText>Dashboard</NavText>
        </Elements>
    </MenuContainer>
  );
}

export default Sidebar;
