const baseUrl = process.env.REACT_APP_API_ENDPOINT;

/* acoes de token*/
const getToken = () => {
  const token = localStorage.getItem("usuarioToken");
  return token;
};

const getRefreshToken = () => {
  const refreshToken = localStorage.getItem("usuarioRefreshToken");
  return refreshToken;
};

const setToken = (token) => {
  localStorage.setItem("usuarioToken", token);
};

const setRefreshToken = (refreshToken) => {
  localStorage.setItem("usuarioRefreshToken", refreshToken);
};

const isTokenValid = async (response) => {
  if (response.error && response.error === "SESSIONTOKENEXPIRED") {
    const body = {
      token: getToken(),
      refresh_token: getRefreshToken(),
    };

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const fetchResponse = await fetch(
      `${baseUrl}/auth/renovar-token`,
      requestOptions
    );
    const responseToken = await fetchResponse.json();

    if (responseToken.statusCode === 200) {
      setToken(responseToken.data.token);
      setRefreshToken(responseToken.data.refresh_token);
      return false;
    }

    // eslint-disable-next-line no-throw-literal
    throw "Erro de conexão";
  }

  return true;
};

export const ObterDadosToken = () => {
  const dadosToken = jwtDecode(getToken());
  return dadosToken;
};

/* exemplos de rota*/
/*GET*/
export const ListarCursos = async () => {
  const token = getToken();
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await FetchData(`${baseUrl}/cursos`, requestOptions);

  return response;
};

/*POST*/
export const ReenviarConfirmacaoEmail = async (id) => {
  const token = getToken();

  const requestOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
  };

  const response = await FetchData(
    `${baseUrl}/registro/reenviar-email-confirmacao/`,
    requestOptions
  );

  return response;
};
