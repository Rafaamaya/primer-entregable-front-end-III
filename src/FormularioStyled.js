import styled, { css } from "styled-components";

export const Body = styled.div`
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
`;
export const A = styled.a`
	color:red ;
	font-size: 10px;
	text-decoration: none;
	margin: 10px 0;
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`;

export const FormContainer = styled.form`
  position: absolute;
  height: 90%;
  position: absolute;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 10px;
`;
export const OverlayContainer = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  position: absolute;
  left: 50%;
  width: 50%;
  height: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const H1 = styled.h1`
	font-weight: bold;
	margin-bottom: 40px;
`;