import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import Constants from 'expo-constants';
import { lightPurp, transparent } from './src/utils/colors';
import { Provider } from 'react-redux';
import store from './src/store';
import AppRoot from './src/components/AppRoot';
import * as Font from 'expo-font';

function AppStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

class App extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Raleway': require('./assets/fonts/Raleway-Regular.ttf'),
    })
    this.setState({ fontLoaded: true });
  }
  render() {
    return(
      <Provider store={store}>
        <ThemeProvider>
          <AppStatusBar backgroundColor={'black'} />
          {
            this.state.fontLoaded && (<AppRoot />)
          }
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
