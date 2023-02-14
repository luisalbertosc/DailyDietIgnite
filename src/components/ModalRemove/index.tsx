import { Button, Content, ContentButton, Message, ModalContainer, TextButton, Window } from "./styles";


type ModalProps = {
    isShowModal: boolean;
    onCancelRemove: () => void;
    onHandleRemoveButton: () => void;
}

export function ModalRemove({isShowModal, onCancelRemove, onHandleRemoveButton}: ModalProps){

    return(
        <ModalContainer isVisible={isShowModal}>
            <Window>
                <Content>
                    <Message>Deseja realmente excluir o registro da refeição?</Message>
                    <ContentButton>
                        <Button onPress={onCancelRemove} type="PRIMARY">
                            <TextButton type="PRIMARY">Cancelar</TextButton>
                        </Button>
                        <Button onPress={onHandleRemoveButton} type="SECONDARY">
                            <TextButton type="SECONDARY">Sim, excluir</TextButton>
                        </Button>
                    </ContentButton>
                </Content>
            </Window>
        </ModalContainer>
    )
}