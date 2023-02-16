import { arrayFoodsProps } from "@context/DailyDietContext";

type Props = (data: arrayFoodsProps[]) => number;

export const foodsOnDietStraight: Props = (data) => {
    const foodsStatusLists = data.map((item: arrayFoodsProps) => {
        return item.status
    })
    
    const convertToString: string = foodsStatusLists.join(',');
    const removeOutOfDiet: string[] = convertToString.split('NÃO');
    const sort: string[] = removeOutOfDiet.sort((seq1, seq2) =>  seq2.length - seq1.length);
    const searchTheLonger: string[] = sort.splice(0, 1);
    const separateResult: any = searchTheLonger.pop();
    const returnToArray = separateResult.split(','); 
    const filter = returnToArray.filter((item: string) => item !== '');
    const foodsOnDietStraightResult = filter.length;

    return foodsOnDietStraightResult;
}

