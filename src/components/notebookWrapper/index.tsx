import React from 'react';
import { Colors } from '../../constants/colors';
import { TextType } from '../../constants/textType';
import { CoverStyled, Container } from './styles';
import { TextStyled } from '../../commonStyled/';

interface NotebookWrapperProps {
    name: string;
    cover: string;
}

export const NotebookWrapper = ({name, cover}: NotebookWrapperProps) => {
    return (
        <Container>
            <CoverStyled color={Colors.GOLD} cover={cover}/>
            <TextStyled color={Colors.WHITE} textType={TextType.body.size} align={'center'}>
                {name}
            </TextStyled>
        </Container>
    );
};

