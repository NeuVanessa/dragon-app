import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import logo from '../../assets/logo2.png';
import email from '../../assets/maskEmail.png';
import password from '../../assets/maskPassword.png';
export function Login() {
    return (

        <KeyboardAvoidingView style={styles.container}>

            <Image style={{ width: 200, height: 210, bottom: 17 }} source={logo} />

            <View style={styles.inputContent}>
                <TextInput style={styles.input}
                    placeholder='  Email'
                    placeholderTextColor='#A7A7A7'
                />
                <Image style={styles.inputIcon} source={email} />
            </View>

            <View style={styles.inputContent}>
                <TextInput style={styles.input}
                    placeholder='  Senha'
                    placeholderTextColor='#A7A7A7'
                />
                <Image style={styles.inputIcon} source={password} />
            </View>



            <TouchableOpacity
                style={styles.textInfo}

            >
                <Text style={styles.textButton}> Ao se cadastrar na plataforma, você declara que {'\n'} esta ciente com os Termos e Politica.</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.buttonContainer}

            >
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnForgotUser}

            >
                <Text style={styles.textButton}>Esqueceu a senha ? Criar Conta</Text>
            </TouchableOpacity>



        </KeyboardAvoidingView>

    );
}


const styles = StyleSheet.create({

    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#181B17',

    },

    inputContainer: {
        backgroundColor: "#595959",
        borderRadius: 30,
        width: 300,
        height: 45,
        marginBottom: 0,
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        height: 44,
        width: 300,
        marginLeft: 16,
        borderBottomColor: "#FFFFFF",
        fontFamily: "serif",
        backgroundColor: '#595959',
        margin: 0,
        borderRadius: 4

    },
    inputIcon: {
        width: 24,
        height: 24,
        justifyContent: "center",
        bottom: 34,
        left: 280
    },
    textInfo: {
        bottom: 20,
        textAlign: 'center',
        alignItems: 'center',
        color: "#F7F7F8",
        fontSize: 12

    },
    text: {
        top: 0,
        textAlign: 'center',
        alignItems: 'center',
        color: "#F7F7F8",
        fontSize: 15
    },
    textButton: {
        top: 8.5,
        textAlign: 'center',
        alignItems: 'center',
        color: "#F7F7F8",
        fontSize: 12
    },
    buttonContainer: {
        height: 44,
        top: 0,
        padding: 8,
        marginLeft: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: 'center',
        backgroundColor: '#DCBE98',
        alignItems: "center",
        width: 300,
        borderRadius: 4,
    },
    btnForgotUser: {
      
    },

})