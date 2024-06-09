// Development Imports
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';
import { devLog } from '@/dev/dev-log';
import { cssPresetTopBar, cssPresetType } from '../../constants/Colors';

// Component Imports
import TopBarButton from './TopBarButton';

const TopBar: React.FC = () => {

    const [ buttonState, setButtonState ] = useState(true);
    const styles = componentStyles(cssPresetTopBar());
    const preset: cssPresetType = cssPresetTopBar();

    const changeButtonState = () => {
        devLog(`Function Reached: changeButtonState().`);
    }

    const testFunction = () => {
        devLog(`Function Reached: testFunction().`);
    }

    return (
        <View style={styles.main}>
            <View style={styles.content}>

                <TopBarButton
                    name='Back'
                    func={testFunction}
                    cid={1}
                    color={preset.colorIcon}
                    size='0 0 256 512'
                    pathing='M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z'
                    side='left'
                    visible={buttonState}
                />

                <TopBarButton
                    name='Create'
                    func={testFunction}
                    cid={2}
                    color={preset.colorIcon}
                    size='0 0 448 512'
                    pathing='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z'
                    side='right'
                    visible={buttonState}
                />
            </View>

        </View>
    );
};

const componentStyles = (preset: cssPresetType) => StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: preset.colorSection,
    },
    text: {
        color: preset.colorText,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 'auto',
        paddingVertical: 20,
        borderColor: 'rgb(50, 50, 50)',
        // borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    icon: {
        height: 25,
        width: 25,
    }
});

export default TopBar;