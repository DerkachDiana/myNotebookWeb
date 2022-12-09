import styled from 'styled-components';
import { Icons } from '../../assets/Icons';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WheelIcon = styled.div`
  background-image: url(${Icons.colorWheel});
  background-size: cover;
  width: 70px;
  height: 70px;
`;

export const NotebookContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 90px;
  width: 100%;
  flex-wrap: wrap;
`;

export const CenterFormaterStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;
