import { Dimensions, StyleSheet } from "react-native";


export const colors = {
    screamingGreen: "#5DF061",
    cultured: "#F9FAF9",
    darkJungleGreen: "#09140C",
    greenPantone: "#47AF49",
    redOrangeColorWheel: "#F94802",
    ashGray: "#A5B8AC",
    spaceCadet: "#191A4C",
    camel: "#B2956B",
    white: "#FFFFFF",
    transparent: "transparent",
    black: "#000000",
    blue: "#124E99",


};


export const commons = StyleSheet.create({
    principalContainer: {
        flex: 1,

        backgroundColor: '#fff',
    },
    principalButton: {
        backgroundColor: colors.spaceCadet,
        marginVertical:20,
        maxWidth:150,
        minWidth:150,
        alignSelf:'center',
    },
    textLogo: {
        color: colors.greenPantone,
        fontSize: 24,

    },
    loginTitle: {
        color: colors.darkJungleGreen,
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 40
    },
    loginMessage: {
        color: colors.ashGray,
        marginVertical: 20,
        fontSize: 15,
    },loginDivider:{
        maxWidth:Dimensions.get('window').width/2.2
    }
});