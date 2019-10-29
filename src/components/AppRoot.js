import React from 'react';
import { View, Text, Easing, Animated } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { connect } from 'react-redux';
import Login from './Login';
import MainView from './MainView';

stackRouteConfigs = {
    LoginView: {
        screen: Login,
        navigatinOptions: {
            header: null
        }
    },
    MainView: {
        screen: MainView,
        navigatinOptions: {
            header: null,
        }
    }
}

stackNavigatorConfig = {
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

Stacks = createStackNavigator(stackRouteConfigs, stackNavigatorConfig);

export default createAppContainer(Stacks);

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({

})

//export default connect(mapStateToProps, mapDispatchToProps)(AppRoot);