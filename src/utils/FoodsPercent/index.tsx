import { arraySectionProps } from "@context/DailyDietContext";
import { foodsOnDiet } from "../FoodsOnDiet";
import { registredFoods } from "../RegistredFoods";

type Props = (data: arraySectionProps[]) => any;

export const foodsPercent: Props = (data) => {
    if(!data.length)
        return '0%';
        
    const registredAllMeals: number = registredFoods(data);
    const mealsInOfDiet: number = foodsOnDiet(data);

    const percent: number = ((mealsInOfDiet * 100) / registredAllMeals);

    return percent;
}

