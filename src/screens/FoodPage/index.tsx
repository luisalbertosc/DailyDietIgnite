import { useContext, useState } from 'react';

import { arrayFoodsProps, DailyContext } from '@context/DailyDietContext';

import { ButtonIcon } from "@components/ButtonIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ButtonsContainer, 
        DataAndHour, 
        DateAndHourTitle, 
        FoodPageContainer, 
        HeaderContainer, 
        Icon, 
        IconCircle, 
        IconContainer, 
        InfoContainer, 
        InfoTitle, 
        LabelDietStatus, 
        LabelDietStatusText, 
        MarginButton, 
        Message, 
        Ttile } from "./styles";
import { ModalRemove } from '@components/ModalRemove';


export function FoodPage() {
    const { foods, handleRemoveFood } = useContext(DailyContext);
    const navigation = useNavigation();
    const [isShowModal, setIsShowModal] = useState(false);
    const route = useRoute();

    type RouteParamsProps = {
        id: string
    };

    const { id } = route.params as RouteParamsProps;


    const searchFoodSelected = foods.map((item: arrayFoodsProps) => {
        return item;
    })

    const foodFoundById = searchFoodSelected.find(item => item.id === id)

    function handleRemoveFoodButton(){
        if(isShowModal){
            setIsShowModal(false)
        } else if (!isShowModal){
            setIsShowModal(true)
        }
    }

    function handleRemoveButton(){
        if(foodFoundById){
            handleRemoveFood(id)
            navigation.goBack();    
        }
    }

    function cancelRemove(){
        setIsShowModal(false)

    }

    const handleOpenFoodUpdate = () => {
        navigation.navigate('foodUpdate', { id })
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <FoodPageContainer>

                <HeaderContainer variant={foodFoundById?.status === "SIM" ? "GREEN" : "NÃO"}>
                    <Ttile>Refeição</Ttile>
                    <IconContainer onPress={handleGoBack}>
                        <Icon name="arrow-back" />
                    </IconContainer>
                </HeaderContainer>

            <InfoContainer>
                <InfoTitle>{foodFoundById?.name}</InfoTitle>
                <Message>{foodFoundById?.description}</Message>
                <DateAndHourTitle>Data e hora</DateAndHourTitle>
                <DataAndHour>{foodFoundById?.date}, às {''}
                    {foodFoundById?.hour}</DataAndHour>
                <LabelDietStatus>
                        <IconCircle name="circle" variant={foodFoundById?.status === "SIM" ? "GREEN" : "NÃO"} />
                        <LabelDietStatusText>{foodFoundById?.status === "SIM" ? "dentro da dieta" : "fora da dieta"}
                        </LabelDietStatusText>
                </LabelDietStatus>
                <ButtonsContainer>
                    <ButtonIcon
                        title="Editar refeição"
                        type="PRIMARY"
                        icon="edit"
                        onPress={handleOpenFoodUpdate}
                    />
                    <MarginButton>
                        <ButtonIcon
                            title="Excluir refeição"
                            type="SECONDARY"
                            icon="delete-outline"
                            onPress={handleRemoveFoodButton}
                        />
                  
                    </MarginButton>
                   

                </ButtonsContainer>
            </InfoContainer>
            <ModalRemove isShowModal={isShowModal} onCancelRemove={cancelRemove} onHandleRemoveButton={()=> handleRemoveButton()}/>
        </FoodPageContainer>
        
    )
}