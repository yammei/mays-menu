// Development Imports
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

// Functions & Variables Imports
import { devLog } from '@/dev/dev-log';
import { color, cssPreset, cssPresetType, toggleLightMode } from '@/constants/Colors';

const Notifs: React.FC= () => {

    const [isLightMode, setIsLightMode] = useState(true);

    const reRender = () =>  {
        devLog(`Function Reached reRender(). Light mode is: ${isLightMode}.`);
        // toggleLightMode();
        setIsLightMode(prevMode => !prevMode);
    };

    const styles = componentStyles(cssPreset(), color);

    return (
        // <View style={styles.main}>

            <View style={styles.content}>

                <View style={styles.container}>
                    <Text style={styles.text}>Hello World from Notifs.tsx!</Text>
                </View>
                <View style={styles.container}>
                    <Button title='press' onPress={reRender}></Button>
                </View>
            </View>

        // </View>
    )
}

const componentStyles = (preset: cssPresetType, color: any) => StyleSheet.create({
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
    text: {
        color: preset.colorText,
    },
    card: {
        height: 300,
        width: 200,
        backgroundColor: preset.colorSection,
    },
    button: {
        backgroundColor: preset.colorButton,
        borderRadius: 10,
        shadowColor: color.black,
        shadowOffset: {height: 3, width: 3},
        shadowOpacity: .25,
        shadowRadius: 0,
    },
    buttonText: {
        color: preset.colorButtonText,
        padding: 10,
    }
});

export default Notifs;