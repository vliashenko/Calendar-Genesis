import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: #484848;
  border-top: 1px solid #484848;
`;

export const GridCell = styled.div`
  min-width: 130px;
  min-height: 100px;
  background-color: ${props => (props.isWeekend ? '#272829' : '#1F1E21')};
  color: ${props => (props.isSelectedMonth ? '#fff' : '#555759')};
`;

export const RowInCell = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DayWrapper = styled.div`
  width: 33px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  font-size: 14px;
`;

export const CurrentDay = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f00;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DayTask = styled.div`
  width: 80%;
  margin: 4px auto;
  padding: 0 6px;
  border-radius: 4px;
  background-color: white;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 1.2em;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  color: black;
  cursor: pointer;
`;
