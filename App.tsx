import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { Loading } from '@components/Loading';
import { Routes } from './src/routes/index';
import { DailyDietContextProvider } from '@context/DailyDietContext';





export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})

  return (
    <>
    <ThemeProvider theme={theme}>
      
    <StatusBar 
    style='dark'
    backgroundColor='transparent'
    translucent
    />
    <DailyDietContextProvider>
      { fontsLoaded ? <Routes/> : <Loading/> }
    </DailyDietContextProvider>
    </ThemeProvider>
    
    </>
  );
}
