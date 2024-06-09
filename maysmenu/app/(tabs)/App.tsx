import 'react-native-gesture-handler';
//index.tsx: The primary container for the app.

// Development Imports
import React, {
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

// Function Imports
import { devLog } from '@/dev/dev-log';

// Variable Imports
import { cssPreset, cssPresetType } from '@/constants/Colors';

// Navigational Imports
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Component Imports
import Main from './Main';
import Explore from './Explore';
import Notifs from './Notifs';
import Profile from './Profile';
import TopBar from '@/components/TopBar/TopBar';
import NavBar from '@/components/NavBar/NavBar';

export type StackScreensList = {
  MainPage: undefined;
  ExplorePage: undefined;
  NotifsPage: undefined;
  ProfilePage: undefined;
}

const Stack = createNativeStackNavigator<StackScreensList>();
type ScreenProps = NativeStackScreenProps<StackScreensList, 'MainPage'>
const Tab = createBottomTabNavigator();

const App: React.FC<ScreenProps> = ({navigation}) => {

  const styles = componentStyles(cssPreset());

  return (

    <View style={styles.main}>

      <GestureHandlerRootView style={{ flex: 1, width: '100%'}}>
        <NavigationContainer independent={true}>
            <Stack.Navigator
            initialRouteName='MainPage'
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
            }}
            >

            <Stack.Screen name='MainPage' component={PageManager} options={{ headerShown: false }}/>
            <Stack.Screen name='ExplorePage' component={PageManager} options={{ headerShown: false }}/>
            <Stack.Screen name='NotifsPage' component={PageManager} options={{ headerShown: false }}/>
            <Stack.Screen name='ProfilePage' component={PageManager} options={{ headerShown: false }}/>

            </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>

    </View>
  )
}

export const PageManager = ({ navigation }: any) => {
  const route = useRoute();
  const renderScreen = () => {
    switch (route.name) {
      case 'MainPage':
        return <Main/>;
      case 'ExplorePage':
        return <Explore/>;
      case 'NotifsPage':
        return <Notifs/>;
      case 'ProfilePage':
        return <Profile/>;
      default:
        return null;
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <TopBar/>
      {renderScreen()}
      <NavBar navigation={navigation}/>
    </View>
  );
}

const componentStyles = (preset: cssPresetType) => StyleSheet.create({
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: 500,
    marginHorizontal: 'auto',
    // backgroundColor: 'rgb(250, 250, 250)',
    backgroundColor: 'rgba(100, 200, 100, .25)',
    zIndex: -1,
  },
  container: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 50,
    backgroundColor: preset.colorSection,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    width: '100%',
  },
  card: {
    height: 300,
    width: 200,
    backgroundColor: preset.colorSection,
  },
  text: {
    color: preset.colorText,
  },
});

export default App;