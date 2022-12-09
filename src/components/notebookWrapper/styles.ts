import styled from 'styled-components';
import { Colors } from '../../constants/colors';


interface CoverProps {
    color: string;
    cover: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 200px;
`;

export const CoverStyled = styled.div<CoverProps>`
  width: 200px;
  height: 250px;
  border: 5px solid ${Colors.GOLD};
  border-radius: 5px;
  background-image: url(${props => props.cover});
  background-size: cover;
`;

export const TextStyled = styled.span`
  font-size: 10px;
`;
