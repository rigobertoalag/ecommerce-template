import styled from 'styled-components'
import { globalStyles } from '../stylesConfig'

export const CardContainer = styled.div`
height: 220px;
width: 95%;
border-radius: 5%;
background: ${props => props.color ? props.color : "white"};//radial-gradient(circle, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
box-shadow: 5px 5px 28px -11px rgba(0,0,0,0.25);
justify-self: center;
margin-bottom: 2em;
`
export const BtnSeeMore = styled.button`
width: 100%;
height: 2.4em;
background-color: ${globalStyles.BtnSeeMore};
color: white;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
/* margin-left: 5%; */
border: none;
/* position: absolute; */
`