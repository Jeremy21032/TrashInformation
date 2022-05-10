import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Register from '../../assets/images/register.svg'
import Logo from '../../assets/images/logo-normal.svg'

import * as styles from '../../assets/styles/appStyles'
import { TextInput } from 'react-native-paper'

export const RegisterScreen = () => {
    const [name, setName] = React.useState();
    const [lastName, setLastName] = React.useState();
    const [email, setEmail] = React.useState();
    const [id, setId] = React.useState();
    const [password, setPassword] = React.useState();
    const [repeatPassword, setRepeatPassword] = React.useState();


    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1.5, alignItems: 'center' }}>
                <Logo />
                <Text style={styles.commons.textLogo}>TrashInformation</Text>
            </View>
            <View style={{ flex: 5.5, marginBottom: 40, marginHorizontal: 35 }}>
                <Text style={styles.commons.loginTitle}>Sing Up</Text>
                <ScrollView>

                
                <TextInput
                    label="Name"
                    value={name}
                    onChangeText={name => setName(name)}
                    mode="outlined"
                    activeOutlineColor={styles.colors.ashGray}
                />
                <TextInput
                    label="Lastname"
                    value={lastName}
                    onChangeText={lastName => setLastName(lastName)}
                    mode="outlined"
                    activeOutlineColor={styles.colors.ashGray}
                />
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={email => setEmail(email)}
                    mode="outlined"
                    keyboardType='email-address'
                    activeOutlineColor={styles.colors.ashGray}
                />
                <TextInput
                    label="DNI"
                    value={id}
                    onChangeText={id=> setId(id)}
                    mode="outlined"
                    keyboardType='phone-pad'
                    activeOutlineColor={styles.colors.ashGray}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={password => setPassword(password)}
                    mode="outlined"
                    secureTextEntry={true}
                    activeOutlineColor={styles.colors.ashGray}
                />
                <TextInput
                    label="Repeat Password"
                    value={repeatPassword}
                    onChangeText={repeatPassword => setRepeatPassword(repeatPassword)}
                    mode="outlined"
                    activeOutlineColor={styles.colors.ashGray}
                    secureTextEntry={true}
                />
                </ScrollView>
            </View>
            <View style={{ flex: 1.1 }}>
                <Register />
            </View>

        </View>
    )
}


