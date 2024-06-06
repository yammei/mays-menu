import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';
import { devLog } from '../../dev/dev-log';
import { cssPresetTopBar, cssPresetType } from '../../constants/Colors';
import TopBarIcon from './TopBarButton';

const TopBar: React.FC = () => {

    const styles = componentStyles(cssPresetTopBar());

    return (
        <View style={styles.main}>
            <View style={styles.content}>
                <TopBarIcon/>
                <Text style={styles.text}>HELLLOOOO</Text>
            </View>

        </View>
    );
}

const componentStyles = (preset: cssPresetType) => StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'stretch',
        height: 100,
        backgroundColor: preset.colorSection,
    },
    text: {
        color: preset.colorText,
    },
    content: {
        height: 75,
        width: '100%',
        marginTop: 'auto',
        borderColor: 'rgb(50, 50, 50)',
        borderTopWidth: 1,
    },
    icon: {
        height: 25,
        width: 25,
    }
});

export default TopBar;