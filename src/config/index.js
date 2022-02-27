import Config from 'react-native-config'
// import {API_HOST} from "@env"
const config = {
  api: {
    host: Config.FIREBASE_LINK,
    // timeout: 20000
  }
};

const API_HOST1 = config.api.host;

export {
  API_HOST1
}

export default config