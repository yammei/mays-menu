import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';
import { devLog } from '@/dev/dev-log';
import { cssPresetNavBar, cssPresetType } from '@/constants/Colors';
import NavBarButton from './NavBarButton';

const NavBar: React.FC = (props) => {

    const styles = componentStyles(cssPresetNavBar());

    return (
        <View style={styles.main}>
            <NavBarButton pathing="M224 256a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4z"/>
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
        marginTop: 'auto',
        backgroundColor: preset.colorSection,
    },
    text: {
        color: preset.colorText,
    },
});

export default NavBar