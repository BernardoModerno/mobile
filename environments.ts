import Constants from "expo-constants";

const ENV = {
  dev: {
    apiUrl: "http://172.17.64.1:3001",
  },
  prod: {
    apiUrl: "https://exemplo-endereco-producao.com",
  },
};

const getEnvVars = (env = Constants?.manifest?.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev;
  } else if (env === "prod") {
    return ENV.prod;
  }
  return ENV.dev;
};

export default getEnvVars;
