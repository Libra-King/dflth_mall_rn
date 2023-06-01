import {Alert, Platform, Navigation} from 'react-native';
import DeviceInfo from 'react-native-device-info';
// import UUIDGenerator from 'react-native-uuid';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import JSEncrypt from 'jsencrypt';
import {env} from './config';
import * as util from './util.ts';

export const getSeckey = () => {
  // 获取平台
  const platform = Platform.OS;

  return new Promise((resolve, reject) => {
    let path = 'api/basic/getKey.html';
    let params = {
      apptype:
        platform === 'ios' ? 'IOS' : platform === 'android' ? 'Android' : 'web',
      uuid: uuid.v4(),
    };

    const encrypt = new JSEncrypt();
    const message = JSON.stringify(params);
    const publicKey = `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApFr7+ydgDjcUqz90/KwR
      IpfMrYW9F8tAeX76Ha4+sb8rQQrnYmiMBVuHfVW1W3kCxScw9PFVpwYvRilEucu4
      tK6NDXZgbPsH1CtDLbsXiwpKPKKAqPgPNMzE0MgiyeBpu9TId5jThp7z9n75wbGG
      aJ4C+oeCNhQ03iyxHi3JuwChB/eOcVUz+KFs4aU4G1/ewF3V4EcWvsbQPowS0yHU
      t6OMCrBgFkCVaa6eh9QuL/00VvgQJTJIu8wjEbjAQKlWT8xh4PEAzvjYG5ZR+7a4
      D1J542DrxY/F6Z32cvBR+IbVSEd7CATk/ifpKybAD3lPsP2KF7E+RwfXWNM0UEgq
      ZQIDAQAB`;
    encrypt.setPublicKey(publicKey);
    const encrypted = encrypt.encrypt(message);

    const timeout = 10000;
    fetch(`${env.common.api}/${path}`, {
      timeout: timeout,
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: encrypted,
    })
      .then(response => response.json())
      .then(res => {
        let {errcode, status, msg, data} = res;

        if (errcode !== 0 && status !== 1) {
          return;
        }

        let {seckey, expire} = data;
        AsyncStorage.setItem('seckey', seckey);
        AsyncStorage.setItem('seckey_expire', String(expire));
        AsyncStorage.setItem('uuid', params.uuid);
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const doRequest = (path, params, type, method = 'POST') => {
  return new Promise((resolve, reject) => {
    let keys = ['seckey', 'seckey_expire'];
    AsyncStorage.multiGet(keys, (errors, results) => {
      let isSeckey =
        results[0][1] && parseInt(results[1][1]) > new Date().getTime();

      if (!isSeckey) {
        getSeckey().then(() => {
          request(path, params, type, method)
            .then(res => {
              resolve(res);
            })
            .catch(err => {
              reject(err);
            });
        });
      } else {
        request(path, params, type, method)
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      }
    });
  });
};

export const request = (path, params, type, method) => {
  return new Promise((resolve, reject) => {
    let keys = ['seckey', 'uuid', 'token'];
    AsyncStorage.multiGet(keys, (errors, results) => {
      let timeout = 10000;
      let url = '';
      let content_type = '';
      type === 1 ? (url = env.common.api) : '';
      type === 1 ? (content_type = 'application/x-www-form-urlencoded') : '';
      let seckey = results[0][1];
      let uuid = results[1][1];
      let token = results[2][1];
      let timestr = new Date().getTime();
      let _sign = util.getHeaderSign(seckey, 'DFG1001', timestr);

      fetch(`${url}/${path}`, {
        timeout,
        method,
        body: params,
        headers: {
          'Content-Type': content_type,
          token: token,
          apptype:
            Platform.OS === 'ios'
              ? 'IOS'
              : Platform.OS === 'android'
              ? 'Android'
              : 'web',
          sign: _sign,
          seckey,
          timestr: timestr,
          uuid: uuid,
          version: DeviceInfo.getVersion(),
        },
      })
        .then(response => response.json())
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  });
};
