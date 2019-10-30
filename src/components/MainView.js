import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';
import { blue ,white } from '../utils/colors';

class MainView extends React.Component {
    closeButton = () => {
        const { navigation } = this.props;
        navigation.push('LoginView');
    }
    render() {
        return (
            <LinearGradient colors={[blue, white]} style={styles.container}>
                <Button 
                    style={styles.closeIcon}
                    type='clear'
                    onPress={this.closeButton}
                    icon={
                        <Icon
                            name="close"
                            size={28}
                            color={white} 
                        />
                    }
                />
                <View style={styles.avatar}>
                    <Avatar 
                        rounded
                        size='xlarge'
                        overlayContainerStyle={styles.avatarBorder}
                        source={
                            require('../../assets/images/perfil.jpeg')
                        }
                    />
                    <Text style={styles.titleText}>
                        André Masson
                    </Text>
                </View>
            </LinearGradient>
        )
    }
}

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({

})

export default withNavigation(MainView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar: {
      marginTop: 150,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarBorder: {
        borderColor: white,
        borderWidth: 2
    },
    titleText: {
        marginTop: 10,
        fontSize: 24,
        fontFamily: 'Raleway',
        color: white,
    },
    closeButton: {
        marginTop: 15,
        marginLeft: 15,
    },
    form: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 40,
        paddingLeft: 40,
    },
});