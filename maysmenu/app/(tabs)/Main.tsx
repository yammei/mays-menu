// Development Imports
import React, {
    useState,
    createContext,
    useContext,
    useEffect,
} from 'react';
import {
    ScrollView,
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';

// Function Imports
import { devLog } from '@/dev/dev-log';

// Variable Imports
import { cssPreset, cssPresetType, toggleLightMode } from '@/constants/Colors';
import { targetPage } from '@/components/Types/PageDirector';


const Main: React.FC = ({  }) => {

    const [isLightMode, setIsLightMode] = useState(true);

    useEffect(() => {
    }, [targetPage]);

    const reRender = () =>  {
        devLog(`Function Reached reRender(). Light mode is: ${isLightMode}.`);
        // toggleLightMode();
        setIsLightMode(prevMode => !prevMode);
    };

    const styles = componentStyles(cssPreset());

    return (
        <View style={styles.main}>

            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={true}
                indicatorStyle='black'  // Note: Cannot see indicator.
            >

                <View style={styles.container}>
                    <Text style={styles.text}>Banner Container</Text>
                </View>

                <View style={styles.container}>
                    <Button title='press' onPress={reRender}></Button>
                </View>

                <View style={styles.card}></View>
                <View style={styles.card}></View>
                <View style={styles.card}></View>

            </ScrollView>

        </View>
    )
};

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
    marginHorizontal: 75,
    paddingVertical: 50,
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
    margin: 20,
    backgroundColor: preset.colorSection,
    borderRadius: 10,
},
text: {
    color: preset.colorText,
}
});

export default Main;