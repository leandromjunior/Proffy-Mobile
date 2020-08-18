import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

function Landing() {
    const { navigate } = useNavigation();
    const[totalConnections, setTotalConnections] = useState(0); //Trazendo valor total de conexões da API, esse valor será exibido na tela inicial

    useEffect(() => {
        api.get('connections').then(response => {
            console.log(response);
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, []);

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses'); //GiveClasses é o 'name' que está na <screen> do AppStack;
    }

    function handleNavigateToStudyPages() {
        navigate('Study'); //Name dado no arquivo AppStack
    }

    return (
    <View style={styles.container} >
        <Image source={landingImg} style={styles.banner} />

        <Text style={styles.title} >
            Seja Bem-Vindo, {'\n'}
            <Text style={styles.titleBold}>O que deseja fazer?</Text>
        </Text>

        <View style={styles.buttonsContainer} >
            <RectButton onPress={handleNavigateToStudyPages} style={[styles.button, styles.buttonPrimary]} >
                <Image source={studyIcon} />

            <Text style={styles.buttonText}>Estudar</Text>
            </RectButton>

            <RectButton 
              onPress={handleNavigateToGiveClassesPage} 
              style={[styles.button, styles.buttonSecondary]} 
            >
                <Image source={giveClassesIcon} />
                
            <Text style={styles.buttonText}>Dar Aulas</Text>
            </RectButton>
        </View>

        <Text style={styles.totalConnections} >
            Total de {totalConnections} conexões já realizadas {' '}
            <Image source={heartIcon} />
        </Text>
    
    </View>
  );
}

export default Landing;

// Coloquei um <Text> dentro do outro, pois dessa forma, um text vai herdar o css do outro