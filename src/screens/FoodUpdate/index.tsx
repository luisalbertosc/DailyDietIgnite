import { useCallback, useContext } from "react";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

import { Alert } from "react-native";


import { Button } from "@components/Button";
import { InputDataAndHour } from "@components/InputDataAndHour";
import { FoodHeader } from "@components/FoodHeader";
import { InputButton } from "@components/InputButton";
import { InputDescription } from "@components/InputDescription";
import { InputName } from "@components/InputName";

import { DataAndHourContainer, DataAndHourInput, ErrorContainer, ErrorContainerDateAndHour, FormContainer, ItensForm, NewFoodContainer, TextError, TitleInput } from "./styles";
import { arrayFoodsProps, DailyContext } from "@context/DailyDietContext";

type NewFoodProps = arrayFoodsProps & {
}

export function FoodUpdate() {
    const {foods, statusDiet, setStatusDiet, handleUpdateFood} = useContext(DailyContext);

    type RouteParamsProps = {
        id: string
    };

    const route = useRoute();
    const { id } = route.params as RouteParamsProps;

    const searchFoodSelected = foods.map((item: arrayFoodsProps) => {
        return item;
    })

    const foodFoundById = searchFoodSelected.find(item => item.id === id) as arrayFoodsProps

    function setStatusByFocus(){
        if(foodFoundById){
            setStatusDiet(foodFoundById.status)
        } else{
            setStatusDiet(statusDiet)
        }
    }
    
    const { control, handleSubmit, formState: { errors } } = useForm<NewFoodProps>({
        defaultValues: {
            name: `${foodFoundById?.name}`,
            description: `${foodFoundById?.description}`,
            date: `${foodFoundById?.date}`,
            hour: `${foodFoundById?.hour}`,
        }
    });

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleUpdatAndGoFoodPage = (data:NewFoodProps)=> {
        if(data.name.trim().length === 0) {
            return Alert.alert('Opa!', 'Informe o nome da refei????o');
          } else if (data.description.trim().length === 0){
            return Alert.alert('Opa!', 'Informe a descri????o da refei????o');
          }else if(data.date.trim().length === 0 || data.hour.trim().length === 0){
            return Alert.alert('Opa!', 'Informe a data e a hora da refei????o');
          }
        handleUpdateFood(data, id)
        navigation.navigate('foodPage', {id});
    }

    useFocusEffect(useCallback(() => {
        setStatusByFocus();
      }, []))

    return (
        <NewFoodContainer>
            <FoodHeader title="Editar refei????o" onHandle={handleGoBack} />
            <FormContainer>
                <ItensForm>
                    <TitleInput>Nome</TitleInput>
                    <Controller
                        control={control}
                        name="name"
                        rules={{ required: "Informe o nome da refei????o" }}
                        render={({ field: { onChange, value } }) => (
                            <InputName
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />
                    {<ErrorContainer><TextError>{errors.name?.message}</TextError></ErrorContainer>}

                    <TitleInput>Descri????o</TitleInput>
                    <Controller
                        control={control}
                        name="description"
                        rules={{ required: "Informe a descri????o da refei????o" }}
                        render={({ field: { onChange, value } }) => (
                            <InputDescription
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />
                    {<ErrorContainer><TextError>{errors.description?.message}</TextError></ErrorContainer>}

                    <DataAndHourContainer>
                        <DataAndHourInput>
                            <TitleInput>Data</TitleInput>
                            <Controller
                                control={control}
                                name="date"
                                rules={{ required: "Informe a data" }}
                                render={({ field: { onChange, value } }) => (
                                    <InputDataAndHour
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                            />
                    {<ErrorContainerDateAndHour><TextError>{errors.date?.message}</TextError></ErrorContainerDateAndHour>}
                        </DataAndHourInput>

                        <DataAndHourInput>
                            <TitleInput>Hora</TitleInput>
                            <Controller
                                control={control}
                                name="hour"
                                rules={{ required: "Informe a hora" }}
                                render={({ field: { onChange, value } }) => (
                                    <InputDataAndHour
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                            />
                    {<ErrorContainerDateAndHour><TextError>{errors.hour?.message}</TextError></ErrorContainerDateAndHour>}
                        </DataAndHourInput>
                    </DataAndHourContainer>

                    <InputButton statusDietYesOrNo={foodFoundById ? foodFoundById.status : false} />
                </ItensForm>
                <Button
                    onPress={handleSubmit(handleUpdatAndGoFoodPage)}
                    title="Salvar Altera????es"
                />

            </FormContainer>
        </NewFoodContainer>
    )
}