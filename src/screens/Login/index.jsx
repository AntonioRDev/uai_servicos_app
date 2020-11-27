import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Button } from 'react-native-paper';
import {
  Container,
  InnerContainer,
  TextContainer,
  TextLogin,
  BodyContainer,
  LoadSpiner
} from "./styles";
import { isEmail, showToast } from "../../services/util";
import { login } from "../../services/authentication";
import { verifyIfIsAlreadyLogged } from "../../services/authentication";
import { useGlobal } from "../../contexts/Global";
import { setUserInfo } from "../../services/local-storage";
import Logo from "../../assets/images/logo-white.png";

const Login = () => {
  const navigation = useNavigation();
  const { setUser } = useGlobal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
        const isLogged = await verifyIfIsAlreadyLogged();

        if(isLogged){
            navigation.navigate("MainTab");
        }
    }

    checkToken();
  },[]);

  const doLogin = async() => {
    console.log("doLogin");

    if(!email || !password){
      showToast("error", "Email e Senha devem ser preenchidos.");
      return;
    }

    if(!isEmail(email)){
      showToast("error", "Email inválido, digite um email válido.");
      return;
    }

    setLoading(true);

    try{
      const response = await login(email, password);

      if(!response || response.status !== 200){
        showToast("error", "Usuário ou senha incorreto(s).");
        setLoading(false);
        return;
      }
      
      setUserInfo(response.data.usuario);
      setUser(response.data.usuario);
      setLoading(false);
      navigation.navigate("MainTab");
    } catch(error) {    
      showToast("error", "Erro ao fazer login");
      setLoading(false);
    }
  }

  return (
    <Container>
      <Image source={Logo}
       style={{width: 250, height: 250, marginTop: -360}} />
      <InnerContainer>  
        <BodyContainer>        
          <TextLogin>Login</TextLogin>
          <TextContainer>
            <TextInput label="Email" value={email} onChangeText={text => setEmail(text)} ></TextInput>
          </TextContainer>
          <TextContainer>
            <TextInput label="Senha" value={password} onChangeText={text => setPassword(text)} secureTextEntry={true}></TextInput>
          </TextContainer>

          <TextContainer>
            <Button mode="contained" uppercase={false} onPress={doLogin} disabled={loading}>
              Fazer Login
            </Button>
          </TextContainer>
   
          <TextContainer>
            <Button mode="outlined" uppercase={false} onPress={() => navigation.navigate("SignUp")} disabled={loading}>
              Fazer Cadastro
            </Button>
          </TextContainer>       
        </BodyContainer>     
      </InnerContainer>
    </Container>
  );
};

export default Login;
