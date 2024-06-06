import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Svg, { SvgProps, Path } from "react-native-svg"
import { devLog } from '@/dev/dev-log';
import { cssPresetNavBar, cssPresetType } from '@/constants/Colors';

const NavBarButton: React.FC = (props) => {

    const styles = componentStyles(cssPresetNavBar());

    return (
        <View style={styles.main}>
            <Svg style={styles.icon}>
                <Path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6v256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
            </Svg>
        </View>
    );

}

const componentStyles = (preset: cssPresetType) => StyleSheet.create({
    main: {
        alignItems: 'center',
        minHeight: 25,
        minWidth: 25,
        maxHeight: 100,
        maxWidth: 100,
        height: 50,
        width: 50,
        overflow: 'hidden',
    },
    icon: {
        height: '100%',
        width: '100%',
        backgroundColor: 'red',
    }

});

export default NavBarButton;

