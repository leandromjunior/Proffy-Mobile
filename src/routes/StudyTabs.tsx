import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from '../pages/Favorites';
import TeacherList from '../pages/TeacherList';
import { Ionicons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator
           tabBarOptions={{ /*efeitos na aba inferior */
               style: {
                   elevation: 0,
                   shadowOpacity: 0,
                   height: Platform.OS === 'ios' ? 84 : 64, /*  vai garantir que quando o sistema do dispositivo for iOS, o height tenha o valor 84 e se for Android o height vai ter o valor 64 */
               },
               tabStyle: {
                   flexDirection: 'row',
                   alignItems: 'center',
                   justifyContent: 'center',
                   paddingBottom: Platform.OS === 'ios' ? 20 : 0, /* vai fazer com que seja aplicado um paddingBottom apenas no iOS */
               },
               safeAreaInsets: { /* garante que a Bottom Tab Bar não dê nenhum espaçamento da "área de segurança" na parte de baixo do iPhone, você pode adicionar essa opção depois do tabStyle */
                bottom: 0,
            },
               iconStyle: {
                   flex: 0,
                   width: 20,
                   height: Platform.OS === 'ios' ? 24 : 20, /* essa modificação vai fazer com que o ícone não tenha um pedaço da parte de baixo cortada */
               },
               labelStyle: {
                   fontFamily: 'Archivo_700Bold',
                   fontSize: 13,
                   marginLeft: 16,
               },
               inactiveBackgroundColor: '#fafafc',
               activeBackgroundColor: 'ebebf5',
               inactiveTintColor: '#c1bccc',
               activeTintColor: '#32264d'
           }}
        >
            <Screen 
              name="TeacherList" 
              component={TeacherList} 
              options={{
                  tabBarLabel: 'Proffys', 
                  tabBarIcon: ({ color, size, focused }) => {
                      return (
                        <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} /> //Se a aba estiver selecionada o icone fica roxo, senão fica cinza
                      );
                  }
                }} 
            />
            <Screen 
              name="Favorites" 
              component={Favorites}
              options={{
                tabBarLabel: 'Favoritos', 
                tabBarIcon: ({ color, size, focused }) => {
                    return (
                      <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
                    );
                }
              }}
              />
        </Navigator>
    );
}

export default StudyTabs;