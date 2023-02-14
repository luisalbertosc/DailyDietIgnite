import { useContext } from 'react';
import { DailyContext } from '@context/DailyDietContext';

import { Icon, IconContainer, StatisticsHeaderContainer, StatisticsHeaderContainerProps, Text, TextFooter } from "./styles";
import { foodsPercent } from '@utils/FoodsPercent/index';

type StatisticsButtonProps = {
    onHandleGoBack: () => void;
}

export function StatisticsHeader({ onHandleGoBack}: StatisticsButtonProps){
    const { arrayFoods} = useContext(DailyContext);

    const foodsStatistics = {
        foodsPercent: foodsPercent(arrayFoods)
    }
    return(
        <StatisticsHeaderContainer variant={foodsStatistics.foodsPercent > 70 ? 'GREEN' : "RED"}>
            <Text>{foodsStatistics.foodsPercent > 0 ? `${foodsStatistics.foodsPercent.toFixed(2)}%` : `0%`}</Text>
            <TextFooter>das refeições dentro da dieta</TextFooter>
            <IconContainer onPress={onHandleGoBack}>
                <Icon name="arrow-back" variant={foodsStatistics.foodsPercent > 70 ? 'GREEN' : "RED"}/>
            </IconContainer>
        </StatisticsHeaderContainer>
    )
}