import styled from 'styled-components';

import { BackgroundTemplates } from '../assets/backgroundTemplates';
import { Colors } from '../constants/colors';

interface TextStyledProps {
    textType: string;
    color: string;
    align?: string;
}

interface IconStyledProps {
    image: string;
    width: string;
    height: string;
}

export const BackgroundStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${Colors.DARKBLUE};
  background-image: url(${BackgroundTemplates.forDark});
  padding: 20px 30px;
  gap: 20px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const TextStyled = styled.span<TextStyledProps>`
  color: ${props => props.color};
  font-size: ${props => props.textType};
  text-align: ${props => props.align || 'left'};
`;

export const IconStyled = styled.div<IconStyledProps>`
  background-image: url(${props => props.image});
  background-size: cover;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const CenterFormaterStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;
