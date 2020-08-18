import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing';
import { AppLoading } from 'expo'; //Não irá mostrar a splash screen do App até as fontes estarem carregadas
import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';
import { Archivo_400Regular, Archivo_700Bold} from '@expo-google-fonts/archivo';
import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}

// <StatusBar style="auto" /> //Responsável pelo comportamento da barra de status superior do celular

/* Criei um fragmento (<>), pois o react não autoriza mais de um elemento no App, sem nada que envolva ambos,
poderia ter usado uma <view>, porém ela criaria um 'bloco/elemento' na tela, coisa que o fragment não faz */
