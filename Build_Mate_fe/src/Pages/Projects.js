import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { HomeRounded, CloseRounded } from "@mui/icons-material";

const MenuContainer = styled.div`
    width: 125px; /* Set the width to 125px */
    flex-direction: column;
    height: 100vh;
    display: flex;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    transition: width 0.3s; /* Add transition for smooth width change */
    &:hover {
        width: 200px; /* Change the width on hover to 200px */
    }
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
    justify-content: center;
`;
const CloseIconContainer = styled.div`
    margin-bottom: 30px; /* Adjust as needed */
    @media (max-width: 1100px){
        display: block;
    }
    padding-left:180px;
    cursor:pointer;
`;
const Elements = styled.div`
    margin-left: 8px; /* Add some space between icon and text */
    padding: 4px 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    &:hover {
        background-color: black;
        color: white;
    }
    text-decoration: none;

`;
const NavText = styled.div`
    padding : 12px 0px;
    text-decoration: none;
`;

const menuItems = [
    {link:"/Pages/Home",
     name:"Dashboard",   
     icon:<HomeRounded/>} ,
     
     {link:"/Pages/Search",
     name:"Dashboard",   
     icon:<HomeRounded/>} ,

     {link:"/Pages/Favorite",
     name:"Dashboard",   
     icon:<HomeRounded/>} ,
];

const Sidebar = () => {
    return (
        <MenuContainer>
            <FlexContainer>
                <CloseIconContainer>
                    <CloseRounded />
                </CloseIconContainer>
                {menuItems.map((item, index) => (
                    <Link key={index} to={item.link}>
                        <Elements>
                            {item.icon}
                            <NavText>{item.name}</NavText>
                        </Elements>
                    </Link>
                ))}
            </FlexContainer>
        </MenuContainer>
    );
}

export default Sidebar;
