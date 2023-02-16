import { arrayFoodsProps } from "@context/DailyDietContext";

type Props = (data: arrayFoodsProps[]) => number;

export const registredFoods: Props = (data) => {
    if(data){
        const listOfNumberOfFoodsSize = data.length
        return listOfNumberOfFoodsSize;
    }else {
        return 0;
    }


}

