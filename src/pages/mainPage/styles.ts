import styled from 'styled-components';
import { Icons } from '../../assets/Icons';
import { TextType } from '../../constants/textType';
import { Colors } from '../../constants/colors';

interface InputStyledProps {
    color: string;
}

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
  gap: 70px;
  width: 100%;
  flex-wrap: no-wrap;
  overflow-x: auto;
  
  ::-webkit-scrollbar {
    height: 10px;
    background: ${Colors.WHITE};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${Colors.GOLD};
    border-radius: 20px;
    
  }
  ::-webkit-scrollback-track {
    margin-block: 5px;
  }
`;

export const AbsoluteContainerStyled = styled.div`
  position: absolute;
  width: 100vw;
  min-height: 100vh;
`;

export const InputFrameStyled = styled.div`
  background-image: url(${Icons.inputFrame});
  background-size: cover;
  height: ${80 * 1.2 + 'px'};
  width: ${380 * 1.2 + 'px'};
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 40px 40px;
  box-sizing: border-box;
`;

export const InputStyled = styled.div<InputStyledProps>`
  color: ${props => props.color};
  font-size: ${TextType.body.size};
  min-width: 50%;
  text-overflow: clip;
  overflow: hidden;
  white-space: nowrap;
  
  &:focus {
    outline: none;
  }
`;

