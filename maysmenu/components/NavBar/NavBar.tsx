// NavBar.tsx
// Development Imports
import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';
import { devLog } from '@/dev/dev-log';
import { cssPresetNavBar, cssPresetType } from '@/constants/Colors';
import { StackScreensList } from '@/app/(tabs)/App';
import { StackNavigationProp } from '@react-navigation/stack';

// Component Imports
import NavBarButton from './NavBarButton';

type NavBarProps = {
    navigation: StackNavigationProp<StackScreensList>;
};

const NavBar: React.FC<NavBarProps> = ({ navigation }) => {

    const styles = componentStyles(cssPresetNavBar());
    const preset: cssPresetType = cssPresetNavBar();

    const testFunction = () => {
        devLog(`Function Reached: testFunction().`);
    }

    return (
        <View style={styles.main}>
            <View style={styles.content}>
                <NavBarButton
                    name='Main'
                    component='MainPage'
                    func={testFunction}
                    cid={1}
                    color={preset.colorIcon}
                    size='0 0 576 512'
                    pathing='M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40h-16c-1.1 0-2.2 0-3.3-.1-1.4.1-2.8.1-4.2.1H392c-22.1 0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2-1.2.1-2.4.2-3.6.2h-16c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8v-69.6H32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l255.4 224.5c8 7 12 15 11 24z'
                    navigation={navigation}
                />

                <NavBarButton
                    name='Explore'
                    component='ExplorePage'
                    func={testFunction}
                    cid={2}
                    color={preset.colorIcon}
                    size='0 0 512 512'
                    pathing='M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z'
                    navigation={navigation}
                />

                <NavBarButton
                    name='Notifs'
                    component='NotifsPage'
                    func={testFunction}
                    cid={3}
                    color={preset.colorIcon}
                    size='0 0 448 512'
                    pathing='M224 0c-17.7 0-32 14.3-32 32v19.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416h384c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3c-31.2-35.2-48.5-80.5-48.5-127.6V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H160c0 17 6.7 33.3 18.7 45.3S207 512 224 512s33.3-6.7 45.3-18.7z'
                    navigation={navigation}
                />

                <NavBarButton
                    name='Profile'
                    component='ProfilePage'
                    func={testFunction}
                    cid={4}
                    color={preset.colorIcon}
                    size='0 0 448 512'
                    pathing='M224 256a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4z'
                    navigation={navigation}
                />
            </View>
        </View>

    );
};

const componentStyles = (preset: cssPresetType) => StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        width: '100%',
        marginTop: 'auto',
        paddingVertical: 20,
        backgroundColor: preset.colorSection,
        borderColor: 'rgb(50, 50, 50)',
        borderTopWidth: 1,
        // borderBottomWidth: 1,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'red',
    },
    text: {
        color: preset.colorText,
    },
});

export default NavBar