import { arrayFoodsProps } from "@context/DailyDietContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { FOOD_COLLECTION } from '@storage/storageConfig';
import { getAllFoods } from "./getAllFoods";

export async function createFoodStorage(newFood: arrayFoodsProps) {
  try {

    const storedGroups = await getAllFoods();

    if(!storedGroups) {
      throw console.log('Não foi possível encontrar a Array de Refeições no Storage')
    }

    const storage = JSON.stringify([...storedGroups, newFood]);

    await AsyncStorage.setItem(FOOD_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}