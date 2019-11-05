import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';
import { blue, white } from '../utils/colors';
import { getStockUserAction } from '../actions/user';

class MainView extends React.Component {
    closeButton = () => {
        const { navigation } = this.props;
        //navigation.push('LoginView');
        navigation.goBack();
    }
    componentDidMount() {
        this.props.getStockUserAction();
    }
    render() {
        const { user } = this.props;
        console.log('user: ');
        console.log(user);
        console.log(`Nome:  ${user.name !== undefined} `)
        const ava = '../../assets/images/perfil.jpeg';
        return (
            <LinearGradient colors={[blue, white]} style={styles.container}>
                <Button 
                    containerStyle={styles.closeIcon}
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
                    { user && user.name !== undefined &&
                        <View style={styles.container}>
                            <Avatar 
                                rounded
                                size='xlarge'
                                overlayContainerStyle={styles.avatarBorder}
                                source={
                                    require('../../assets/images/perfil.jpeg')
                                }
                            />
                            <Text style={styles.titleText}>
                                {user.name}
                            </Text>
                        </View>
                    }
                </View>
            </LinearGradient>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}

const mapDispatchToProps = dispatch => ({
    getStockUserAction: () => dispatch(getStockUserAction())
})

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(MainView));

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar: {
      marginTop: 120,
      alignItems: 'center',
      alignContent: "center",
    },
    avatarBorder: {
        borderColor: white,
        borderWidth: 2
    },
    titleText: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 24,
        fontFamily: 'Raleway',
        color: white,
    },
    closeIcon: {
        marginTop: 5,
        marginLeft: 5,
        alignContent: "flex-start",
        width: 50,
    },
    form: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 40,
        paddingLeft: 40,
    },
});