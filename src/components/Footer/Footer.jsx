import { useEffect } from "react"
import styled from "styled-components"

export function Footer (){

    return (
        <Containter >
            <a href="#">Tesla © 2022</a>
            <a href="#">Privacy  Legal</a>
            <a href="#">Vehicle Recalls</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">News</a>
            <a href="#">Engage</a>
            <a href="#">Locations</a>
        </Containter>
    )
}

const Containter = styled.footer`
    background-color: #000000;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    a{
        color: #5c5e62;
    }
`