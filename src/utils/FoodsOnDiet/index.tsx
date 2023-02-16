import { arrayFoodsProps, arraySectionProps } from "@context/DailyDietContext";

type Props = (data: arrayFoodsProps[]) => number;

export const foodsOnDiet: Props = (data) => {

    if(data){
        const listOfNumberOfMealsInDiet: number = data.filter((item) => item.status === 'SIM').length;
        return listOfNumberOfMealsInDiet;
    }else {
        return 0;
    }

   
}

