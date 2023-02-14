import { arrayFoodsProps } from "@context/DailyDietContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { FOOD_COLLECTION } from '@storage/storageConfig';

export async function getAllFoods() {
    try {
      const storage = await AsyncStorage.getItem(FOOD_COLLECTION);
  
      const foods: arrayFoodsProps[] = storage ? JSON.parse(storage) : [];
  
      return foods;
    } catch (error) {
      throw error;
    }
  }