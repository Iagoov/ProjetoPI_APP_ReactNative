import React, { useEffect } from 'react';
import { Image, TouchableOpacity, BackHandler } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DrawerActions, useFocusEffect } from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from './src/components/Home/Home';
import Login from './src/components/Login/Login';
import MetAgua from './src/components/MetAgua/MetAgua';
import Cadastro from './src/components/Login/Cadastro';
import TelaInicial from './src/components/TelaInicial/TelaInicial';
import TelaObjetivo from './src/components/TelaObjetivo/TelaObjetivo';
import CalculadoraIMC from './src/components/CalculadoraIMC/CalculadoraIMC';
import Desenvolvimento from './src/components/Desenvolvimento/Desenvolvimento';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CustomHeader = ({ navigation, route }) => {
  return {
    headerStyle: {
      backgroundColor: '#B21E14',
    },
    headerTitle: route.name,
    headerTitleAlign: 'center',

    headerTitleStyle: {
      color: '#fff',
    },
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Image source={require('./src/components/Home/Imagens/Menu.png')} style={{ marginLeft: 10 }} />
      </TouchableOpacity>
    ),
  };
};

// Impedir que o usuario volte na tela anterior
const Menu = ({ navigation }) => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Impedir a ação padrão de voltar para a tela anterior
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerContentOptions: {
          activeTintColor: '#B21E14',
          activeBackgroundColor: 'transparent',
          labelStyle: {
            color: '#000',
          },
        },
        drawerIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Saúde em Foco') {
            iconName = 'home';
          }

          else if (route.name === 'Dieta') {
            iconName = 'restaurant';
          }

          else if (route.name === 'Treinos') {
            iconName = 'directions-run';
          }

          else if (route.name === 'Calculador de IMC') {
            iconName = 'calculate';
          }

          else if (route.name === 'Beba Água - Meta Diária') {
            iconName = 'water';
          }

          return <MaterialIcons name={iconName} size={size} color={'#B21E14'} />;
        },
      })}
    >
      <Drawer.Screen
        name="Saúde em Foco"
        component={Home}
        options={({ navigation, route }) => ({
          ...CustomHeader({ navigation, route }),
          title: 'Home',
        })}
      />

      <Drawer.Screen
        name="Dieta"
        component={Desenvolvimento}
        options={({ navigation, route }) => ({
          ...CustomHeader({ navigation, route }),
          title: 'Dieta',
        })}
      />
      <Drawer.Screen
        name="Treinos"
        component={Desenvolvimento}
        options={({ navigation, route }) => ({
          ...CustomHeader({ navigation, route }),
          title: 'Treinos',
        })}
      />

      <Drawer.Screen
        name="Calculador de IMC"
        component={CalculadoraIMC}
        options={({ navigation, route }) => ({
          ...CustomHeader({ navigation, route }),
          title: 'Calculadora de IMC',
        })}
      />

      <Drawer.Screen
        name="Beba Água - Meta Diária"
        component={MetAgua}
        options={({ navigation, route }) => ({
          ...CustomHeader({ navigation, route }),
          title: 'Beba Água - Meta Diária',
        })}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaInicia" component={TelaInicial} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="TelaObjetivo" component={TelaObjetivo} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
