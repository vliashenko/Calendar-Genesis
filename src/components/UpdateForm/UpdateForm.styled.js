import styled from 'styled-components';

export const style = {
  height: '100px',
};

export const Fields = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledField = styled.input`
  margin: 10px auto;
  font-family: inherit;
  width: 80%;
  border: 0;
  border-bottom: 2px solid grey;
  outline: 0;
  font-size: 15px;
  color: black;
  padding: 7px 0;
`;

export const DateAndTime = styled(StyledField)`
  width: 30%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 10px 20px;
`;

export const Button = styled.button`
  margin: 40px auto 20px;
  width: 20%;
  height: 30px;
  border-radius: 8px;
  border: none;
  background-color: ${props => (props.delete ? 'red' : 'black')};
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 500;
`;

export const SubTitle = styled.p`
  margin: 4px auto;
  text-align: center;
  font-weight: 300;
  color: grey;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
