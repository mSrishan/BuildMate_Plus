import React from 'react';
import styled from "styled-components";
import { HomeRounded, CloseRounded } from "@mui/icons-material";
import logo from '../Assets/Logo_version2.0.png';

const MenuContainer = styled.div`
    flex: 0.5;
    flex-direction: column;
    height: 100vh;
    display: flex;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 1100px) {
        position: fixed;
        z-index: 1000;
        width: 100%;
        max-width: 250px;
        left: ${({ setMenuOpen }) => (setMenuOpen ? "0" : "-100%")};
        transition: 0.3s ease-in-out;
    }
`;
const Logo = styled.div`
    width: 180px;
`;
const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const CloseIconContainer = styled.div`
    margin-bottom: 16px; /* Adjust as needed */
`;
const Elements = styled.div``;
const NavText = styled.div``;

const Sidebar = () => {
    return (
        <MenuContainer>
            <FlexContainer>
                <Logo><img src={logo} alt='' /></Logo>
                <CloseIconContainer>
                    <CloseRounded />
                </CloseIconContainer>
                <Elements>
                    <HomeRounded />
                    <NavText>Dashboard</NavText>
                </Elements>
            </FlexContainer>
        </MenuContainer>
    );
}

export default Sidebar;
