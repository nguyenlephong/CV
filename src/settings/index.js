export default {
  apiUrl: 'http://yoursite.com/api/',
  API_URL_S : 'https://localhost:5001/api',
};

const siteConfig = {
  siteName: 'PROPILE',
  siteIcon: 'ion-flash',
  footerText: 'Nguyễn Lê Phong @2019 design by CV',
};

const jwtConfig = {
  host: 'http://127.0.0.1:5000',
  fetchUrl_TM: '/',
  fetchUrl: '/api/',
  secretKey: 'secretKey'
};

// const language = 'english';
const language = 'Vietnamese';
export {
  siteConfig,
  language,
  jwtConfig
};

export const frontPageConfig = {
  baseUrl:'/front'
}