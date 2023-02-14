import { arrayFoodsProps, arraySectionProps } from "@context/DailyDietContext";

type Props = (data: arraySectionProps[]) => number;

export const foodsOnDiet: Props = (data) => {

    const listOfNumberOfMealsInDiet: number[] = data.map((item: arraySectionProps) => {
        return item.data.map((item: arrayFoodsProps) => {
            return item.status;
        })
        .filter((item: string) => item === 'SIM').length;
    })

    const numberOfMealsInDiet: number = listOfNumberOfMealsInDiet.reduce((total, food) => total + food, 0);

    return numberOfMealsInDiet;
}

