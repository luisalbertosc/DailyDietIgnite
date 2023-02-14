import { useContext } from 'react';
import { DailyContext } from '@context/DailyDietContext';

import { TouchableOpacityProps } from "react-native";
import { Icon, IconContainer, StatisticsButtonContainer, StatisticsButtonContainerProps, Text, TextFooter } from "./styles";
import { foodsPercent } from '@utils/FoodsPercent';

type StatisticsButtonProps = TouchableOpacityProps & {
}
export function StatisticsButton({...rest}: StatisticsButtonProps){
    const { arrayFoods} = useContext(DailyContext);

    const foodsStatistics = {
        foodsPercent: foodsPercent(arrayFoods)
    }


    return(
        <StatisticsButtonContainer variant={foodsStatistics.foodsPercent > 70 ? 'GREEN' : "RED"} {...rest}>
                <Text>{foodsStatistics.foodsPercent > 0 ? `${foodsStatistics.foodsPercent.toFixed(2)}%` : `0%`}</Text>
                <TextFooter>das refeições dentro da dieta</TextFooter>
           
            <IconContainer>
                <Icon variant={foodsStatistics.foodsPercent > 70 ? 'GREEN' : "RED"} name="arrow-forward"/>
            </IconContainer>
        </StatisticsButtonContainer>
    )
}