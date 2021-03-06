import React, { useState } from "react";
import { StatusBar } from "react-native";
import { TextInput, Button } from "react-native-paper";
import {
  Container,
  ImageContainer,
  TitleView,
  Title,
  FormGroup,
  CategoryView,
  DescriptionView,
  ButtonView,
  InputView,
  InnerContainer,
  TitleStyle,
} from "./styles";
import Plus from "../../assets/icons/plus.svg";
import { useGlobal } from "../../contexts/Global";
import { showToast } from "../../services/util";
import { createService } from "../../services/service";

export default () => {
  const { user } = useGlobal();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const newService = async () => {
    if (!title) {
      showToast("error", "Título deve ser preenchido.");
      return;
    }

    if (!category) {
      showToast("error", "Categoria deve ser preenchida.");
      return;
    }

    if (!description) {
      showToast("error", "Descrição deve ser preenchida.");
      return;
    }

    try {
      const response = await createService(
        user.usuarioId,
        title,
        category,
        description
      );
      console.log("reponse", response);
      clearState();
      showToast("success", "Serviço cadastrado com sucesso!");
    } catch (error) {
      console.log("NewService createServiceError", error);
    }
  };

  const clearState = () => {
    setTitle("");
    setCategory("");
    setDescription("");
  };

  return (
    <Container statusBarHeigth={StatusBar.currentHeight}>
      {/* <ImageContainer>
        <Plus height="80" width="80" fill="#FFFFFF" />
      </ImageContainer> */}

      <TitleView>
        <Title>Divulgue seu serviço{"\n"}de forma gratuita!</Title>
      </TitleView>
      <InnerContainer>
        <FormGroup>
          <TitleStyle>Dados do serviço</TitleStyle>
          {/* <CategoryView>
            <TextInput label="Foto"></TextInput>
          </CategoryView> */}

          <CategoryView>
            <TextInput
              label="Título"
              value={title}
              onChangeText={(text) => setTitle(text)}
            ></TextInput>
          </CategoryView>

          <CategoryView>
            <TextInput
              label="Categoria"
              value={category}
              onChangeText={(text) => setCategory(text)}
            ></TextInput>
          </CategoryView>

          <DescriptionView>
            <TextInput
              label="Descrição"
              multiline={true}
              value={description}
              onChangeText={(text) => setDescription(text)}
            ></TextInput>
          </DescriptionView>
        </FormGroup>

        <ButtonView>
          <Button mode="contained" uppercase={false} onPress={newService}>
            {" "}
            Cadastrar
          </Button>
        </ButtonView>
      </InnerContainer>
    </Container>
  );
};
