import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import giveClassesBgImagem from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
    const { goBack } = useNavigation(); //goBack volta para a tela anterior

    function handleNavigateBack() { //Implementando essa função para ao clicar no botão, voltar para a tela anterior
        goBack();
    }

    return (
      <View style={styles.container}>
          <ImageBackground resizeMode='contain' source={giveClassesBgImagem} style={styles.content}>
              <Text style={styles.title} >Quer ser um Proffy?</Text>
              <Text style={styles.description} >
                  Para começar, você precisa se cadastrar como professor na nossa plataforma web.
              </Text>

          </ImageBackground>

          <RectButton onPress={handleNavigateBack} style={styles.okButton} >
              <Text style={styles.okButtonText}> Tudo Bem </Text>
          </RectButton>
      </View>
    );
}

export default GiveClasses;