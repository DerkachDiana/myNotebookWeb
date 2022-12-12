import React from 'react';

import { TextStyled } from '../../commonStyled';
import { TextType } from '../../constants/textType';

import { Colors } from '../../constants/colors';

interface ChooseBlockContainerProps {
 text: string;
 pictures: [];
}

export const ChooseBlockContainer = ({text, pictures}: ChooseBlockContainerProps) => {
    return (
        <TextStyled
            textType={TextType.subheading.size}
            color={Colors.WHITE}
        >
            {text}
        </TextStyled>
        
    );
};
