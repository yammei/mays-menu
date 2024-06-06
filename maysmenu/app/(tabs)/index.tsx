import React, {
  useState,
  createContext,
  useContext
} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { devLog } from '@/dev/dev-log';
import { cssPreset, cssPresetType, toggleLightMode } from '@/constants/Colors';
import TopBar from '@/components/TopBar/TopBar';
import NavBar from '@/components/NavBar/NavBar'


const App: React.FC = () => {

  const [isLightMode, setIsLightMode] = useState(true);

  const reRender = () =>  {
    devLog(`Function Reached reRender(). Light mode is: ${isLightMode}.`);
    toggleLightMode();
    setIsLightMode(prevMode => !prevMode);
  };

  const styles = componentStyles(cssPreset());

  return (
    <View style={styles.main}>
      <TopBar/>

      <View style={styles.content}>
        <View style={styles.container}>
          <Text style={styles.text}>Hello World!</Text>
        </View>

        <View style={styles.container}>
          <Button title='press' onPress={reRender}></Button>
        </View>

        <View style={styles.card}></View>
      </View>

      <NavBar/>
    </View>
  )
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
    backgroundColor: 'rgb(250, 250, 250)',
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
  }
});

export default App;