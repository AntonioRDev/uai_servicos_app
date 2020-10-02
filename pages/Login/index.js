import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import Button from "../../components/Button"
import styles from "./styles";
import Logo from "../../assets/images/logo.png";

const Login = () => {    
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.imageCtn}>
                    <Image source={Logo}/>
                </View>

                <View>
                    <View style={styles.emailCtn}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input} placeholder="Digite seu e-mail" />
                    </View>

                    <View style={styles.passwordCtn}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput style={styles.input}  secureTextEntry={true} placeholder="Digite sua senha"/>
                    </View>

                    <View style={styles.signInCtn}>
                        <Button style={styles.button}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </Button>
                    </View>
                </View>

                <View style={styles.footerCtn}>
                    <Text style={styles.forgotPass}>Esqueceu a senha?</Text>
                    <Text style={styles.register}>Cadastrar-se</Text>
                </View>
            </View>
        </View>
    )
}

export default Login;