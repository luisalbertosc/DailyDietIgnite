import AsyncStorage from "@react-native-async-storage/async-storage";

import { FOOD_COLLECTION } from '@storage/storageConfig';
import { getAllFoods } from "./getAllFoods";

export async function removeFoods(id: string | number[]) {
  try {

    const storedGroups = await getAllFoods();
    const filterFoods = storedGroups.filter(item => item.id != id)

    if(!filterFoods) {
      throw console.log('Erro')
    }

    const storage = JSON.stringify(filterFoods);


    await AsyncStorage.setItem(FOOD_COLLECTION, storage);
    await AsyncStorage.removeItem(FOOD_COLLECTION);

  } catch (error) {
    throw error;
  }
}