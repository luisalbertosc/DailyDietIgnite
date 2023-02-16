import { arrayFoodsProps } from "@context/DailyDietContext";
import { foodsOnDiet } from "../FoodsOnDiet";
import { registredFoods } from "../RegistredFoods";

type Props = (data: arrayFoodsProps[]) => any;

export const foodsPercent: Props = (data) => {
    if(!data)
        return '0%';
        
    const registredAllMeals: number = registredFoods(data);
    const mealsInOfDiet: number = foodsOnDiet(data);

    const percent: number = ((mealsInOfDiet * 100) / registredAllMeals);

    return percent;
}

