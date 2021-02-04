import * as Util from '../index';
import axios from 'axios';
import {endPoints} from '../index';

class Api {
  fetchPost = async (route, formData, config) => {
    let res = await fetch(endPoints.postUploadFile, {
      method: 'post',
      body: formData,
      headers: config,
    });

    let response = await res.json();
    return this.axiosPost(route, formData, config);
  };

  static postAxios(route, formData, config) {
    return this.axiosPost(route, formData, config);
  }

  static getAxios(route, formData, config) {
    return this.axiosGet(route, formData, config);
  }

  static putAxios(route, params, config) {
    return this.axiosPut(route, params, config);
  }

  static deleteAxios(route, params, config) {
    return this.axiosDelete(route, params, config);
  }

  static postRequest = async (endpoint, formData, config) => {
    const url = `${Util.baseURL}${endpoint}`;
    console.log('[URL API]', url, formData);
    return axios
      .post(url, formData)
      .then((response) => {
        console.log('SUCCESS!!', response);
        return response.data;
      })
      .catch((error) => {
        console.log('FAILURE!!', error);
        return error;
      });
  };

  static axiosPost = async (endpoint, formData, config) => {
    const url = `${Util.baseURL}${endpoint}`;
    console.log('[URL API]', url, formData, config);
    return axios
      .post(url, formData, config)
      .then((response) => {
        console.log('SUCCESS!!', response);
        return response.data;
      })
      .catch((error) => {
        console.log('FAILURE!!', error);
        return error;
      });
  };

  static axiosGet = async (endpoint) => {
    return axios
      .get(endpoint)
      .then((response) => {
        console.log('SUCCESS!!', response);
        return response;
      })
      .catch((error) => {
        console.log('FAILURE!!', error);
        return error;
      });
  };

  static axiosDelete = async (endpoint, formData, config) => {
    console.log('[delete-axios-call]', endpoint, formData, config);
    let url = `${Util.baseURL}${endpoint}`;
    console.log('[URL API]', url);

    if (config) {
      // with header request
      let options = {
        headers: {
          Authorization: `Bearer ${config.token}`,
        },
      };
      console.log('[delete-axios-header]', options);
      let configration = Object.assign(options);
      return axios
        .delete(url, formData, configration)
        .then((response) => {
          console.log('SUCCESS!!', response);
          return response.data;
        })
        .catch((error) => {
          console.log('FAILURE!!', error);
          return error;
        });
    } else {
      // without header request
      return axios
        .delete(url, formData)
        .then((response) => {
          console.log('SUCCESS!!', response);
          return response.data;
        })
        .catch((error) => {
          console.log('FAILURE!!', error);
          return error;
        });
    }
  };

  static axiosPut = async (endpoint, formData, config) => {
    return fetch(`${Util.baseURL}${endpoint}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJOSN) => {
        console.log('SUCCESS!!', responseJOSN);
        return responseJOSN;
      })
      .catch((error) => {
        console.error('Error response:');
        console.log('FAILURE!!', error);
        console.error(error.response.data); // ***
        console.error(error.response.status); // ***
        console.error(error.response.headers); // ***
        return error;
      });
  };
}

export default Api;
