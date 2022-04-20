// import styled from "styled-components"
import styled from "styled-components";

const Button = styled.button`
border:1px solid red;
border-radius :5px;
padding :10px;
background:${(props) => { return props.theme === "light" ? "yellow" : "black" }};
color:${(props) => { return props.theme === "light" ? "green" : "blue" }};
cursor:pointer;
margin:10px;

&:hover {
    color: blue;
}
`

export { Button };