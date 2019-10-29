import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input, Button, Image } from 'react-native-elements';
import { white } from '../utils/colors';
import { withNavigation } from 'react-navigation';

class Login extends React.Component {
    onLoginPress = () => {
        const { navigation } = this.props;
        navigation.push('MainView');
    }
    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={ require('../../assets/images/fundo.jpg') }
                    style={styles.imageCover}
                >
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Bem-vinda</Text>
                    </View>
                    <View style={styles.form}>
                        <Input
                            placeholder='Seu e-mail'
                            containerStyle={styles.inputBorderStyle}
                            inputContainerStyle={{borderBottomWidth: 0}}
                            inputStyle={styles.inputStyle}
                            leftIcon={
                                <Icon
                                    name='email'
                                    size={24}
                                    color={white}
                                />
                            }
                        />
                        <Input
                            placeholder='Sua senha'
                            containerStyle={styles.inputBorderStyle}
                            inputContainerStyle={{borderBottomWidth: 0}}
                            inputStyle={styles.inputStyle}
                            leftIcon={
                                <Icon
                                    name='lock'
                                    size={24}
                                    color={white}
                                />
                            }
                        />
                        <View style={styles.buttonRow}>
                            <View style={styles.buttonRowItem}>
                                <Switch />
                                <Text styles={{ color: white }}>
                                    Lembrar de mim?
                                </Text>
                            </View>
                            <View>
                                <Button 
                                    type="clear"
                                    title="Esqueci a senha"
                                />
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                title='Vamos lá!'
                                type='outline'
                                buttonStyle={styles.buttonStyle}
                                titleStyle={styles.buttonText}
                                onPress={this.onLoginPress}
                            />
                        </View>
                    </View>
                </Image>
            </View>
        );
    }
}

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({

})

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(Login));

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageCover: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    title: {
      flex: 1,
      paddingTop: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
        fontSize: 32,
        fontFamily: 'Raleway',
        color: white,
    },
    form: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 40,
        paddingLeft: 40,
    },
    inputBorderStyle: {
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 15,
        borderColor: white,
    },
    inputStyle: {
        color: white,
        fontFamily: 'Raleway',
    },
    buttonStyle: {
        borderRadius: 30,
        alignSelf: "stretch",
        borderColor: white,
    },
    buttonContainer: {
        alignSelf: "stretch",
    },
    buttonText: {
        color: white,
        fontFamily: 'Raleway',
    },
    buttonRow: {
        alignSelf: 'stretch',
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    buttonRowItem: {
        flexDirection: "row",
    }
});