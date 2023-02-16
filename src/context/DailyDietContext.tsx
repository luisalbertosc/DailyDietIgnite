import { createFoodStorage } from "@storage/createFoodStorage";
import { getAllFoods } from "@storage/getAllFoods";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Alert } from "react-native";
import uuid from 'react-native-uuid';

export type arraySectionProps = {
    title: string;
    data: arrayFoodsProps[] 
}
export type arrayFoodsProps =  {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  status: string;
}

export type DailyDietContextDataProps = {
  statusDiet: string;
  foods: arrayFoodsProps[];
  setStatusDiet: (value: string) => void;
  getDietStatus: (value:string) => void;
  handleCreateNewFood: (data: arrayFoodsProps) => void;
  handleUpdateFood: (data: arrayFoodsProps, id: string) => void;
  handleRemoveFood: (id: string) => void;
  fetchFoods: () => Promise<void>
}

type DailyDietContextProviderProps = {
  children: ReactNode;
};

export const DailyContext = createContext<DailyDietContextDataProps>(
  {} as DailyDietContextDataProps
);

export const DailyDietContextProvider = ({ children }: DailyDietContextProviderProps) => {
  const [foods, setFoods] = useState<arrayFoodsProps[]>([]);
  const [statusDiet, setStatusDiet] = useState('');

  function getDietStatus(value:string){
    setStatusDiet(value)
  }

   const  handleCreateNewFood =  ({name, description, date, hour} : arrayFoodsProps) => {

    const id = uuid.v4() as string
    const newFood = {
        id,
        name,
        description,
        date,
        hour,
        status: statusDiet,
    }
    setFoods(oldState => [...oldState, newFood]);
}

const handleUpdateFood = ({ name, description, date, hour} : arrayFoodsProps, id: string) => {

  const searchFoodSelected = foods.map((item: arrayFoodsProps) => {
    return item;
});

const foodFoundById = searchFoodSelected.find(item => item.id === id)
  if(!foodFoundById){
    Alert.alert('Refeição não encontrada')
  }else {
   foodFoundById.name = name ?? foodFoundById.name
   foodFoundById.description = description ?? foodFoundById.description
   foodFoundById.date = date ?? foodFoundById.date
   foodFoundById.hour = hour ?? foodFoundById.hour
   foodFoundById.status = statusDiet 

   setFoods(oldState => [...oldState])
  }
}

const handleRemoveFood = async (id: string) => {
  const foodsFilterd = foods.filter((item: arrayFoodsProps) => {
    return item.id !== id
});
  setFoods(foodsFilterd)
  await createFoodStorage(foodsFilterd)
}

async function fetchFoods() {
  try {
    const responseData = await getAllFoods();
    setFoods(responseData)
  } catch (error) {
    Alert.alert('Refeições', 'Não foi possível carregar as refeições');
    console.log(error)
  } finally {
  } 
}

async function updateStateAndSetStorage(){
  await createFoodStorage(foods)
}

useEffect(() => {
    updateStateAndSetStorage();
  }, [foods]);

  return (
    <DailyContext.Provider
      value={{
        statusDiet,
        foods,
        setStatusDiet,
        getDietStatus,
        handleCreateNewFood,
        handleUpdateFood,
        handleRemoveFood,
        fetchFoods,
      } 
      }
    >
      {children}
    </DailyContext.Provider>
  );
}
