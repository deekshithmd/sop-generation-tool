import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 480px) {
    width: 90vw;
  }
`;

export const Header = styled.span`
  font-size: 6rem;
  text-transform: uppercase;
  font-weight: 700;
  @media (max-width: 480px) {
    font-size: 50px;
  }
`;

export const HeaderContainer = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid #a6a6a6;
  margin: 10px 0px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid ${(props) => props.border || "#a6a6a6"};
  background: ${(props) => props.background || "#fff"};
  margin: 0px 0px 10px;
  border-top: 10px solid rgb(5, 160, 250);
`;

export const Span = styled.span`
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  border-top: ${(props) => props.border || "1px solid transparent"};
  padding: ${(props) => props.padding || "14px 25px 0px"};
`;

export const HorizontalLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #dadce0;
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 10px;
`;

export const Label = styled.label`
  font-size: 16px;
`;

export const B = styled.span`
  display: inline-block;
  width: 0px;
  height: 2px;
  background: ${(props) => props.background || "red"};
  position: relative;
  transition: width ease-in-out 0.4s;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px 0px 5px;
  width: ${(props) => props.width || "100%"};
  border-bottom: 1px solid ${(props) => props.borderBottom};
  &:focus {
    border-bottom: 1px solid transparent;
  }
  &:focus + ${B} {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  width: ${props => props.width || 'fit-content'};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  background: ${(props) => props.background || "#fff"};
  padding: ${(props) => props.padding || "25px"};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.border || "#a6a6a6"};
`;

export const Important = styled.span`
  color: red;
  padding-left: 3px;
`;

export const BottomRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 100px;
  background: ${(prop) => prop.background || "#1a70e8"};
  color: ${(prop) => prop.color || "#fff"};
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: ${(prop) => prop.hover || "#2f7fed"};
  }
`;

export const WarningContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${(props) => props.marginTop || "10px"};
  padding: ${(props) => props.padding || "0px"};
`;

export const WarningText = styled.span`
  color: #cf292f;
  padding-left: 10px;
  font-size: 12px;
  font-weight: 400;
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 480px) {
    align-items: flex-start;
  }
`;

export const Dropdown = styled.div`
  padding: 10px 15px;
  border: 1px solid #dadce0;
  border-radius: 5px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background: transparent;
  width: 180px;
  outline: none;
  position:relative;
  cursor:pointer;
`;

export const OptionContainer=styled.div`
  width:150px;
  height:auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
  position:absolute;
  top:42px;
  left:0px;
  background:#fff;
  box-shadow: 2px 2px 6px #afb1b3;
  border-radius:5px;
`

export const Option = styled.option`
  padding: 10px;
  width:100%;
  &:hover{
    cursor:pointer;
    background:#edeff0;
  }
`;
