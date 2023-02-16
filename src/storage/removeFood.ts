import AsyncStorage from "@react-native-async-storage/async-storage";

import { FOOD_COLLECTION } from '@storage/storageConfig';
import { getAllFoods } from "./getAllFoods";

export async function removeFood(id: string) {
  try {

    const storedGroups = await getAllFoods();
    const filteredFoods = storedGroups.filter(item => item.id != id)

    if(!filteredFoods) {
      throw console.log('Erro')
    }

    const storage = JSON.stringify(filteredFoods);
    console.log(storage)


    await AsyncStorage.setItem(FOOD_COLLECTION, storage);

  } catch (error) {
    throw error;
  }
}