import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`

font-size: 18px;
font-weight: 700;
letter-spacing: 0.03em;
color: #fff;
position: relative;
width:100px;

  &.active::after {
        content: '';
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px;
        background-color: rgb(98, 69, 118);
        top: 15px;
        
        
     
    
        z-index: -1
        
`;