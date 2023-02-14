import { useContext } from 'react';
import { useNavigation } from "@react-navigation/native";
import { DailyContext } from '@context/DailyDietContext';

import { GeneralStatisticsContainer, 
         RectInfo, 
         SquareInfo, 
         SquareInfoContainer, 
         StatisticsContainer, 
         Text, 
         TextFooter, 
         TextFooterSquare, 
         Title 
} from "./styles";

import { StatisticsHeader } from "@components/StatisticsHeader";
import { registredFoods } from "@utils/RegistredFoods";
import { foodsOnDiet } from "@utils/FoodsOnDiet";
import { foodsOnDietStraight } from '@utils/FoodsOnDietStraight';


export function Statistics(){
    const { arrayFoods} = useContext(DailyContext);

    const foodsStatistics = {
        registredFoods: registredFoods(arrayFoods),
        foodsOnDiet: foodsOnDiet(arrayFoods),
        foodsOnDietStraight: foodsOnDietStraight(arrayFoods)
    }

    const foodsOutOfDiet = foodsStatistics.registredFoods - foodsStatistics.foodsOnDiet

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
      };
    return(
        <StatisticsContainer>
            <StatisticsHeader onHandleGoBack={handleGoBack}/>
            <GeneralStatisticsContainer>
                <Title>Estatísticas gerais</Title>
                <RectInfo>
                    <Text>{foodsStatistics.foodsOnDietStraight}</Text>
                    <TextFooter>melhor sequência de pratos dentro da dieta</TextFooter>
                </RectInfo>
                <RectInfo>
                    <Text>{foodsStatistics.registredFoods}</Text>
                    <TextFooter>refeições registradas</TextFooter> 
                </RectInfo>
                <SquareInfoContainer>
                    <SquareInfo variant="GREEN">
                        <Text>{foodsStatistics.foodsOnDiet}</Text>
                        <TextFooterSquare>refeições dentro da dieta</TextFooterSquare> 
                    </SquareInfo>
                    <SquareInfo variant="RED">
                        <Text>{foodsOutOfDiet}</Text>
                        <TextFooterSquare>refeições fora da dieta</TextFooterSquare> 
                    </SquareInfo>
                </SquareInfoContainer>
            </GeneralStatisticsContainer>
        </StatisticsContainer>
    )
}