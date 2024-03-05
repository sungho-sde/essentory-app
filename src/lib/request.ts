import {getBuildNumber} from 'react-native-device-info';

const testBuildNumber = 101;

export const APP_MODE = __DEV__
  ? testBuildNumber % 2 === 1
    ? 'test'
    : 'prod'
  : parseInt(getBuildNumber()) % 2 === 1
  ? 'test'
  : 'prod';

console.log('APP_MODE : ', APP_MODE);

export const originUrl = __DEV__
  ? 'https://essentory-api-test.up.railway.app'
  : 'https://essentory-api-test.up.railway.app';

export function requestGet<T>(url: string) {
  return new Promise<T>((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        if (result.error) {
          throw Error(result.error);
        }

        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function requestPost<T, Q>(url: string, body: T, headers?: object) {
  return new Promise<Q>((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })
      .then(res => res.json())
      .then(result => {
        if (result.error) {
          throw Error(result.error);
        }

        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export const API = {
  auth: {
    checkIdDuplicate: '/accounts/check-duplicate-username/',
    checkEmailVerified: '/accounts/email-verification-status/',
    signin: '/accounts/firebase/login/',
    signup: '/accounts/firebase/signup/',
  },
};
