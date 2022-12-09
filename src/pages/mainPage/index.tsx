import React from 'react';
import { BackgroundStyled } from '../../commonStyled/';
import { TextStyled, IconStyled } from '../../commonStyled/';
import { TextType } from '../../constants/textType';
import { NotebookWrapper } from '../../components/notebookWrapper';
import { Colors } from '../../constants/colors';
import { Icons } from '../../assets/Icons';
import { Header, WheelIcon, NotebookContainerStyled, CenterFormaterStyled } from './styles';
import { Covers } from '../../assets/mockCovers/';

const MainPage = () => {
    return (
        <BackgroundStyled>
            <Header>
                <TextStyled color={Colors.WHITE} textType={TextType.title.size}>
                    Notebooks
                </TextStyled>
                <WheelIcon/>
            </Header>
            <CenterFormaterStyled>
                <NotebookContainerStyled>
                    <NotebookWrapper cover={Covers.pink} name={'myNotebookName'}/>
                    <NotebookWrapper cover={Covers.pink} name={'myNotebookName'}/>
                </NotebookContainerStyled>
                <IconStyled image={Icons.addButton} width={'150px'} height={'150px'}/>
            </CenterFormaterStyled>
        </BackgroundStyled>
    );
};

export default MainPage;
