import { useCallback, useContext } from 'react';

import { SectionList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { FoodListContainer, Heading, HomeContainer, StatisticsButtonContainer, TextButtonContainer, Title } from "./styles"

import { Header } from "@components/Header"
import { StatisticsButton } from "@components/StatisticsButton"
import { ButtonIcon } from "@components/ButtonIcon"
import { FoodCard } from '@components/FoodCard'
import { DailyContext } from '@context/DailyDietContext';


export function Home() {
  const {arrayFoods, fetchFoodStorage} = useContext(DailyContext);

    
  const navigation = useNavigation()

  function handleOpenStatistics(){
    navigation.navigate('statistics')
  }

  function handleOpenNewFood(){
    navigation.navigate('new')
  }

  function handleOpenFoodPage(id:string | number[]){
    navigation.navigate('foodPage', {id})

  }

  useFocusEffect(useCallback(() => {
    fetchFoodStorage();
  }, []))

    return (
        <HomeContainer>
            <Header />
            <StatisticsButtonContainer>
                <StatisticsButton
                onPress={handleOpenStatistics}
                />
            </StatisticsButtonContainer>
            <Title>Refeições</Title>
            <TextButtonContainer>
                <ButtonIcon
                title="Nova refeição"
                type="PRIMARY"
                icon="add"
                onPress={handleOpenNewFood}
                />
            </TextButtonContainer>
            <FoodListContainer>
              <SectionList
                sections={arrayFoods}
                keyExtractor={(item, index) => item.hour + index}
                renderItem={({ item }) => 
              <FoodCard
                id={item.id}
                title={item.name}
                hour={item.hour}
                variant={item.status === "SIM" ? 'GREEN' : 'RED'}
                onHandle={handleOpenFoodPage}
              />}
              renderSectionHeader={({ section }) => (
                <Heading>{section.title}</Heading>
              )}
              contentContainerStyle={
                arrayFoods.length === 0 && { flex: 1, justifyContent: "center" }
              }
              showsVerticalScrollIndicator={false}
              />
            </FoodListContainer>
        </HomeContainer>
    )
}