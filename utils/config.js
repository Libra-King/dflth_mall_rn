// import {Platform} from 'react-native';

// export const common_api = Platform.select({
//   development: 'https://lth-test.dafenggege.com',
//   production: 'https://lth.dafenggege.com',
// });

// export const pay_api = Platform.select({
//   development: 'https://dth.dafenggege.com',
//   production: 'https://dth.dafenggege.com',
// });

export const env = {
  // 普通接口域名
  common: {
    api: 'https://lth-test.dafenggege.com',
    // api: 'https://lth.dafenggege.com',
  },

  login: {
    // api: 'https://dth-test.dafenggege.com',
    api: 'https://dth.dafenggege.com',
  },

  pay: {
    api: 'https://dth.dafenggege.com',
  },

  special: {
    api: 'https://weixin.liantianhong.com',
  },
};
