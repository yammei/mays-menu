import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Svg, { SvgProps, Path } from "react-native-svg"
import { devLog } from '@/dev/dev-log';
import { cssPresetNavBar, cssPresetType } from '@/constants/Colors';

interface ComponentProps {
    pathing: string;
}

const NavBarButton: React.FC<ComponentProps> = (props) => {

    const pathing = props.pathing;

    const styles = componentStyles(cssPresetNavBar());

    return (
        <View style={styles.main}>
            <Svg style={styles.icon}>
                <Path d={props.pathing} />
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
        borderColor: 'rgb(50, 50, 50)',
        borderWidth: 1,
        borderRadius: 100,
        overflow: 'hidden',
    },
    icon: {
        height: '100%',
        width: '100%',
    }

});

export default NavBarButton;

