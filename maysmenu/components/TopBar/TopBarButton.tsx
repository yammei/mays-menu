import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { devLog } from '@/dev/dev-log';
import { cssPresetNavBar, cssPresetType } from '@/constants/Colors';

interface ButtonProps {
    name: string,
    func: () => void,
    cid: number,
    color: string,
    size: string,
    pathing: string;
    side: string,
    visible: boolean,
}
const TopBarButton: React.FC<ButtonProps> = (props) => {

    const styles = componentStyles(cssPresetNavBar());
    const marginValue: number = 25;
    const isMarginLeft: boolean = props.side === 'left' ? true : false;

    // Returns null, effectivenly not displaying the component if display is set to false.
    if (!props.visible) {
        return null;
    }

    return (
        <View
            style={[styles.main,
            {
                marginLeft: isMarginLeft ? marginValue : 'auto',
                marginRight: isMarginLeft ? 'auto' : marginValue
            }]}
        >
            {/* <Pressable onPressOut={props.func}> */}
                <Svg style={styles.icon} viewBox={props.size} {...props}>
                    <Path d={props.pathing} fill={props.color}/>
                </Svg>
            {/* </Pressable> */}

        </View>
    );

};

const componentStyles = (preset: cssPresetType, ) => StyleSheet.create({
    main: {
        alignItems: 'center',
        height: 25,
        width: 25,
        marginVertical: 'auto',
        overflow: 'hidden',
    },
    icon: {
        height: '100%',
        width: '100%',
        // backgroundColor: 'red',
    }

});

export default TopBarButton;

