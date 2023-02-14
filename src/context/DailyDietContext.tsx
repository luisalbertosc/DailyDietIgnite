import { createFoodStorage } from "@storage/createFoods";
import { getAllFoods } from "@storage/getAllFoods";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Alert } from "react-native";
import uuid from 'react-native-uuid';

export type arraySectionProps = {
    title: string;
    data: arrayFoodsProps[] 
}
export type arrayFoodsProps =  {
  id: string | number[];
  name: string;
  description: string;
  date: string;
  hour: string;
  status: string;
}

export type DailyDietContextDataProps = {
  statusDiet: string;
  arrayFoods: arraySectionProps[];
  foods: arrayFoodsProps[];
  setStatusDiet: (value: string) => void;
  getDietStatus: (value:string) => void;
  handleCreateNewFood: (data: arrayFoodsProps) => void;
  handleUpdateFood: (data: arrayFoodsProps, id: string | number[]) => void;
  handleRemoveFood: (id: string | number[]) => void;
  fetchFoodStorage: ()=> Promise<void>;
}

type DailyDietContextProviderProps = {
  children: ReactNode;
};

export const DailyContext = createContext<DailyDietContextDataProps>(
  {} as DailyDietContextDataProps
);

export const DailyDietContextProvider = ({ children }: DailyDietContextProviderProps) => {
  const [arrayFoods, setArrayFoods] = useState<arraySectionProps[]>([]);
  const [foods, setFoods] = useState<arrayFoodsProps[]>([]);
  const [statusDiet, setStatusDiet] = useState('');

  function getDietStatus(value:string){
    setStatusDiet(value)
  }

   const  handleCreateNewFood = async ({name, description, date, hour} : arrayFoodsProps) => {

    const id = uuid.v4()
    const newFood = {
        id,
        name,
        description,
        date,
        hour,
        status: statusDiet,
    }
    const newArray = {
        title: date,
        data: [newFood]
    }
    setFoods(oldState => [...oldState, newFood])
    setArrayFoods(oldState => [...oldState, newArray])
    createFoodStorage(newFood)

}

const handleUpdateFood = ({ name, description, date, hour} : arrayFoodsProps, id: string | number[]) => {

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

const handleRemoveFood = (id: string | number[]) => {
  const searchFoodSelected = foods.map((item: arrayFoodsProps) => {
    return item;
});

const newArray = searchFoodSelected.filter(item => item.id != id)
  setFoods(newArray)

}

async function fetchFoodStorage() {
  try {
    // setIsLoading(true);

    const data = await getAllFoods();
    console.log(data)

  } catch (error) {
    Alert.alert('Refeições', 'Não foi possível carregar as refeições');
    console.log(error)
  } finally {
    // setIsLoading(false);
  } 
}

  return (
    <DailyContext.Provider
      value={{
        arrayFoods,
        statusDiet,
        foods,
        setStatusDiet,
        getDietStatus,
        handleCreateNewFood,
        handleUpdateFood,
        handleRemoveFood,
        fetchFoodStorage,
      } 
      }
    >
      {children}
    </DailyContext.Provider>
  );
}
