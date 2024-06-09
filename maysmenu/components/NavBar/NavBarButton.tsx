// NavBarButton.tsx
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native'
import Svg, { SvgProps, Path } from "react-native-svg"
import { devLog } from '@/dev/dev-log';
import { cssPresetNavBar, cssPresetType } from '@/constants/Colors';

import { StackScreensList } from '@/app/(tabs)/App';
import { StackNavigationProp } from '@react-navigation/stack';

interface ButtonProps {
    name: string,
    component: keyof StackScreensList, // This will return where I want to go I think.
    func: () => void,
    cid: number,
    color: string,
    size: string,
    pathing: string;
    navigation: StackNavigationProp<StackScreensList>;
};

const NavBarButton: React.FC<ButtonProps> = (props) => {

    const switchScreens = () => {
        devLog(`Function Reached switchScreens(). To screen: ${props.component}.`);
        props.navigation.navigate(props.component);
    };

    const styles = componentStyles(cssPresetNavBar());

    return (
        <View style={styles.main}>
            <Pressable style={styles.container} onPressOut={switchScreens}>
                <View>
                    <Svg style={styles.icon} viewBox={props.size} {...props}>
                        <Path d={props.pathing} fill={props.color}/>
                    </Svg>
                </View>

            </Pressable>
        </View>
    );
};

const componentStyles = (preset: cssPresetType) => StyleSheet.create({
    main: {
        alignItems: 'center',
        height: 25,
        width: 25,
        margin: 'auto',
        overflow: 'hidden',
        // backgroundColor: 'cyan',
    },
    container: {
        height: '100%',
        width: '100%',
        // backgroundColor: 'red',
    },
    icon: {
        height: '100%',
        width: '100%',
        // backgroundColor: 'red',
    }

});

export default NavBarButton;

