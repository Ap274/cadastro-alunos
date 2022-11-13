import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  input {
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 0px 0px 20px 0px;
    padding: 0px 10px;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  position: relative;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 8px;
    color: white;
    background-color: ${colors.primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
