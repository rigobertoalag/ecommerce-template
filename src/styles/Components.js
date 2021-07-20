import styled from 'styled-components'

export const CardContainer = styled.div`
height: 95%;
width: 95%;
border-radius: 5%;
background: ${props => props.color ? props.color : "white"};//radial-gradient(circle, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
box-shadow: 5px 5px 28px -11px rgba(0,0,0,0.25);
justify-self: center;
margin-bottom: 3em;
`
export const BtnSeeMore = styled.button`
width: 50%;
height: 15%;
background-color: blueviolet;
color: white;
border-radius: 10px;
margin-left: 5%;
`