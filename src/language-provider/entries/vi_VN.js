import antdVi from 'antd/lib/locale-provider/vi_VN';
import appLocaleData from 'react-intl/locale-data/vi';
import viMessages from '../locales/vi_VN.json';
// import { getKeys, getValues } from '../conversion';
// getValues(enMessages);

const VNLang = {
  messages: {
    ...viMessages,
  },
  antd: antdVi,
  locale: 'vi',
  data: appLocaleData,
};
export default VNLang;
