import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  
  "type": "service_account",
  "project_id": "amiee-ef2b3",
  "private_key_id": "533367fb40f6c6b55b44460119a603a179fd066b",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC6Jn88+C7LXmqr\nuora2BLCDDpbCUmrRhqdO4gzA2ukFkd/lSrlyYqLMpyNvh6BDQnLADBqTlWHS5CP\nsw5YTmA9eo7vYtrB0rnEl+QqUHWTw1eFJSHE6b3TXwsIGNzVEkBjPYjoNfJJiF/u\nFQWWLVElOEp02LyTxr/dS36/MhLfuhBtPtDp8tcFvLv/1mpey1gCVyQiA39xABYj\nXgg5pkVg6fOHIt0VIG+oWroTgcYskU/s2qybmeCqCgWWiI3nNl+eiDgffhqdIliy\nobluszv3OJW6t7/JcrPEyUbbAxMSTRBMEPu5Y07UrCh1l7JOHLfUmBZxFkDm6xd7\nChrbgQfZAgMBAAECggEAFcHDHwao6CcjE5WW03OWuaxr3lEMaw14tduL6d53+cfg\nLRwWVUuEOwxmz4r4OMAj3rX+cqZbiRfUD8pEnnNGp1jdlO16a6tWqrt6tQFjb1T7\ns+RTo+wSk5O+ZSthatvvv576aJ2e3Gj+lq6epl9UkSOY/DrgIOuFaEwscRSyr7L1\npKOQatJ0Adk/+pDFajsbFgbLXSPCVJI/Lobf/RUpA+c07yPjUsmr4mqkC1s+vKFq\nawGLOJdoegL2dw25VQU3OOoGiWAjcCJVeKkmhxw8ryZv7K2IGdqoM861jUrNLypR\nxlg10ProvYDFlTC42+kVnWCX/dkhgDw4jYfaExjbUwKBgQD3PSqhRr3TshWqGVdZ\nZLyycat7NC3NnjXzrrVkByXolrEFbBzx7Nom65Z/WnWxyZTD+TIiFvXCk9oB4UDG\nT8yn8fO1klG1kmKDdhEVgmsoSGRM/+5lWzmwns7IYqxwqkWg4eJD2MoWv16GSsXm\nV9EaLG01BqcA1SaFsptpfH2//wKBgQDAvyoRx5LU6sTFNIPeU7muArrGg7Ugc/Ad\nYh0dBu6arwV2I90GBaI9+QvTAZKKbEibHGIcFET82LS2tgD21F8WR4MTsm6dGjKQ\nZRbuXYUjdiHB3ExX7YPYhskf57D2FS8AkXgwbSpo3qumUuol3bAt16QJT7RqKYRr\nT/r63ac4JwKBgDPjGGFEcW5OP5G1Q8m1BI0GohB3QO2YOIZtsg/OGDyZ84jJycFU\nDeyBINKVb4HiZmBCmizhWK5/TQ978JYuBStx8c23aYKLuDUSwD8dYdPQbYxjYerP\nnGneylLvsnTqpzY+cbf/dVoUy4evhZzz7SRrEnhAbygTk8QXWdpnkBSNAoGBAJ2W\nLgEnWIc4AvTxALevYGpC1Q4k9Nu5rqF3bDIlTsOtQRvcKoMX7BQbIG2+JV+DNMGM\nrTIj6FuJmgagO52S+MMwaJycEA/mMV0ZKWxtjcL2fJcRVGG3UUqguKObPHWV0D34\nsXl2Z2wiUdjEhae73qU8X2M1hV4e36MVWy/sNSGVAoGBAObcKAYW99DTsdbs22l+\nPbxQTMY/+OlHfckFmizeWNXfCB+lAFF1kmq7o339i5DZ0sfu4nw2v+d0CmV9Qn5d\n8ieuD9WmDa8OvB3DQJ4ZtW3zq+dClQ4GUctwX7rgqNbDO5NdgImkkiswl+W05Eya\n/YoB1ldTzvvBWVLyt/JOo8YW\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@amiee-ef2b3.iam.gserviceaccount.com",
  "client_id": "112273642509819255058",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40amiee-ef2b3.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
