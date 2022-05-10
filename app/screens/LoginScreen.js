import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BgLogin from '../../assets/images/login.svg'
import Logo from '../../assets/images/logo-normal.svg'
import * as styles from '../../assets/styles/appStyles'
import { Button, Divider } from 'react-native-elements'
import { TextInput } from 'react-native-paper'

export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    return (
        <View style={styles.commons.principalContainer}>
            <View style={{ alignItems: 'center' }}>
                <BgLogin fill={'#000'} style={{ alingSelf: 'center' }} />
                <Logo />
                <Text style={styles.commons.textLogo}>TrashInformation</Text>
            </View>
            <View style={{ marginHorizontal: 35, justifyContent: 'center' }}>
                <Text style={styles.commons.loginTitle}>Log In</Text>
                <Text style={styles.commons.loginMessage}>Hi there! Nice to see you again!</Text>

                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={email => setEmail(email)}
                    mode="outlined"
                    keyboardType='email-address'
                    activeOutlineColor={styles.colors.ashGray}
                />
                <TextInput
                    label="Contraseña"
                    value={password}
                    onChangeText={password => setPassword(password)}
                    mode="outlined"
                    secureTextEntry={true}
                    activeOutlineColor={styles.colors.ashGray}

                />

                <Button buttonStyle={styles.commons.principalButton} title="Login" onPress={()=>{navigation.navigate("HOME")}}/>
                <Divider
                    orientation="horizontal"
                />
                <View style={{ flexDirection: 'row' }}>
                    <Text> Don’t have an account?</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate("REGISTER")}}>
                        <Text style={{ color: styles.colors.blue }}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
