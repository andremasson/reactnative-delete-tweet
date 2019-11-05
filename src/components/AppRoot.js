import React from 'react';
import { View, Text, Easing, Animated } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { connect } from 'react-redux';
import Login from './Login';
import MainView from './MainView';
import AuthLoadingScreen from './AuthLoadingScreen';

const appStackRouteConfigs = {
    MainView: {
        screen: MainView,
        navigatinOptions: {
            header: null,
        }
    }
}

const authStackRouteConfig = {
    LoginView: {
        screen: Login,
        navigatinOptions: {
            header: null
        }
    },
}

const stackNavigatorConfig = {
    headerMode: 'none',
    mode: 'card',
    defaultNavigationOptions: {
        gesturesEnabled: false,
    },
    transitionConfig: () => ({
        transitionSpec: {
            duration: 400,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing
        },
    })
}

const AppStack = createStackNavigator(appStackRouteConfigs, stackNavigatorConfig);

const AuthStack = createStackNavigator(authStackRouteConfig, stackNavigatorConfig);

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            App: AppStack,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);
