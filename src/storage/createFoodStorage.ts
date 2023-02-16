import { arrayFoodsProps } from "@context/DailyDietContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { FOOD_COLLECTION } from '@storage/storageConfig';
import { getAllFoods } from "./getAllFoods";

export async function createFoodStorage(newArrayListFood: arrayFoodsProps[]) {
  try {

    const storage = JSON.stringify(newArrayListFood);


    await AsyncStorage.setItem(FOOD_COLLECTION, storage);
  
  } catch (error) {
    throw error;
  }
}