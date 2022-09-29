import styled from 'styled-components';

export const Button = styled.button`
  margin: 0 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: #1e1f21;
  color: #fff;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 6px 1px #888;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #dcdddd;
  padding: 16px;
`;

export const TextWrapper = styled.span`
  font-size: 32px;
`;

export const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;

export const ButtonWrapper = styled.button`
  border: unset;
  background-color: #565759;
  height: 20px;
  margin-right: 2px;
  border-radius: 4px;
  color: #e6e6e6;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const TodayButton = styled(ButtonWrapper)`
  width: 140px;
  padding: 0 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;
