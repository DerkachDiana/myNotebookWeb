import React from 'react';
import { BackgroundStyled, TextStyled, IconStyled, CenterFormaterStyled } from '../../commonStyled';
import { TextType } from '../../constants/textType';
import { Colors } from '../../constants/colors';
import { AbsoluteContainerStyled, InputFrameStyled, InputStyled } from './styles'
import Text from '../../constants/text';
import { ChooseBlockContainer } from './ChooseBlockContainer';
import { Icons } from '../../assets/Icons';


interface AddNotebookModalProps {
    setIsModalOpen: (isOpen: boolean) => void
}
export const AddNotebookModal = ({ setIsModalOpen }: AddNotebookModalProps) => {
    const closeWindow = () => {
        setIsModalOpen(false);
    }
    return (
        <AbsoluteContainerStyled>
            <BackgroundStyled>
                <TextStyled
                    textType={TextType.title.size}
                    color={Colors.WHITE}
                >
                    Add new Notebook
                </TextStyled>
                <TextStyled
                    textType={TextType.subheading.size}
                    color={Colors.WHITE}
                >
                    Write notebook`s name
                </TextStyled>
                <InputFrameStyled>
                    <InputStyled
                        placeholder={Text.placeholder.NOTEBOOKS_NAME}
                        contentEditable={true}
                        color={Colors.WHITE}
                    />
                </InputFrameStyled>
                <ChooseBlockContainer text={'Choose cover'} pictures={[]}/>
                <ChooseBlockContainer text={'Choose background'} pictures={[]}/>
                <CenterFormaterStyled>
                    <IconStyled
                        image={Icons.acceptButton}
                        width={'120px'}
                        height={'120px'}
                        onClick={closeWindow}
                    />
                </CenterFormaterStyled>
            </BackgroundStyled>
        </AbsoluteContainerStyled>
    );
};
