import React, {useState} from 'react';
import { TextStyled, IconStyled, CenterFormaterStyled, BackgroundStyled } from '../../commonStyled/';
import { TextType } from '../../constants/textType';
import { NotebookWrapper } from '../../components/notebookWrapper';
import { Colors } from '../../constants/colors';
import { Icons } from '../../assets/Icons';
import { Header, WheelIcon, NotebookContainerStyled } from './styles';
import { Covers } from '../../assets/mockCovers/';
import { AddNotebookModal } from './addNotebookModal';

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const displayModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    return (
        <>
            { isModalOpen && (<AddNotebookModal setIsModalOpen={setIsModalOpen}/>) }
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
                    <NotebookWrapper cover={Covers.pink} name={'myNotebookName'}/>
                    <NotebookWrapper cover={Covers.pink} name={'myNotebookName'}/>
                    <NotebookWrapper cover={Covers.pink} name={'myNotebookName'}/>
                    <NotebookWrapper cover={Covers.pink} name={'myNotebookName'}/>
                    <NotebookWrapper cover={Covers.pink} name={'myNotebookName'}/>
                    <NotebookWrapper cover={Covers.pink} name={'myNotebookName'}/>
                    <NotebookWrapper cover={Covers.pink} name={'myNotebookName'}/>
                    <NotebookWrapper cover={Covers.pink} name={'myNotebookName'}/>
                    <NotebookWrapper cover={Covers.pink} name={'myNotebookName'}/>
                </NotebookContainerStyled>
                <IconStyled
                    image={Icons.addButton}
                    width={'120px'}
                    height={'120px'}
                    onClick={displayModal} />
            </CenterFormaterStyled>
        </BackgroundStyled>
        </>
    );
};

export default MainPage;
