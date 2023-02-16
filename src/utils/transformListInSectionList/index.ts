import { DailyContext } from "@context/DailyDietContext";
import { useContext } from "react";


export function transformListInSectionList(){
    const { foods } = useContext(DailyContext);

    const arrayCompared = foods.reduce((acc: any, food) => {
      if(!acc[food.date]){
      acc[food.date] = [];
      } 
        acc[food.date].push(food)
      return acc;
    },{})
    for(const prop of Object.keys(arrayCompared)){
      const data = arrayCompared[prop]
      const newArray = [{
        title: prop,
        data
      }]
    return newArray
    }
    return arrayCompared;

    // const lastFood = foods[foods.length-1]

    // if(!lastFood){
  
    // }

    // const foodsCompare = foods.filter(item => item.date === lastFood.date)
    //   if(foodsCompare.length > 0){
    //     foodsCompare.push(lastFood)

    //     const sameDataArray = [{
    //       title: lastFood.date,
    //       data: foodsCompare
    //     }]
    //     return sameDataArray
    
    //   }else {
    //     const arrayNoMatchDate = [{
    //       title: lastFood.date,
    //       data: [lastFood]
    //     }]
    //     return arrayNoMatchDate
    //   }
}

