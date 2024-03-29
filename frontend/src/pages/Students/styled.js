import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StudentContainer = styled.div`
  margin-top: 1.25rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3125rem 0;

    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 80%;
      padding: 10px;

      span {
        font-size: small;
      }

      .name {
        font-size: medium;
        font-weight: bold;
      }
    }
  }

  div + div {
    border-top: 0.0625rem solid #eee;
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const NewStudentLink = styled(Link)`
  display: block;
  padding: 20px 0 10px 0;
`;
