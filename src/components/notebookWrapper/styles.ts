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
  width: 160px;
`;

export const CoverStyled = styled.div<CoverProps>`
  width: 150px;
  height: 200px;
  border: 5px solid ${Colors.GOLD};
  border-radius: 5px;
  background-image: url(${props => props.cover});
  background-size: cover;
`;

export const TextStyled = styled.span`
  font-size: 10px;
`;
