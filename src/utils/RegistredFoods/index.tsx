import { arraySectionProps } from "@context/DailyDietContext";

type Props = (data: arraySectionProps[]) => number;

export const registredFoods: Props = (data) => {
    const listOfNumberOfFoods: number[] = data.map((item: arraySectionProps) => {
        return item.data.length;
    })
    const numberOfMeals: number = listOfNumberOfFoods.reduce((total, food) => total + food, 0);

    return numberOfMeals;
}

