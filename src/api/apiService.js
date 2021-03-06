import axios from 'axios';
import * as constants from '../constants';

const message = {
  ERROR_RESPONSE: 'There was an issue with your request. Please try again later.',
};

const handleErrors = (response) =>
  new Promise((resolve, reject) => {
    if (!response) {
      reject({ message: message.ERROR_RESPONSE });
      return;
    }

    if (response.status === 200 || response.status === 204) {
      resolve(response);
      return;
    }
  });

const getResponseBody = (response) => {
  const bodyIsEmpty = response.status === 204;
  if (bodyIsEmpty) {
    return Promise.resolve();
  }

  return response.data;
};

class Api {

  getTokenHeader(hasFile) {
    if (localStorage.getItem(constants.AUTH_TOKEN_KEY)) {
      return {
        headers: {
          'X-USER-TOKEN': localStorage.getItem(constants.AUTH_TOKEN_KEY),
          'Content-Type': hasFile ? undefined : 'application/json',
        }
      };
    }
    return undefined;
  }

  get(uri) {
    return new Promise((resolve, reject) => {
      axios
        .get(uri, this.getTokenHeader())
        .then(handleErrors)
        .then(getResponseBody)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  post(uri, data, hasFile = false) {
    return new Promise((resolve, reject) => {
      axios
        .post(uri, data, this.getTokenHeader(hasFile))
        .then(handleErrors)
        .then(getResponseBody)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  delete(uri) {
    return new Promise((resolve, reject) => {
      axios
        .delete(uri, this.getTokenHeader())
        .then(handleErrors)
        .then(getResponseBody)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  put(uri, data, hasFile = true) {
    return new Promise((resolve, reject) => {
      axios
        .put(uri, data, this.getTokenHeader(hasFile))
        .then(handleErrors)
        .then(getResponseBody)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }

  patch(uri, data) {
    return new Promise((resolve, reject) => {
      axios
        .patch(uri, data, this.getTokenHeader())
        .then(handleErrors)
        .then(getResponseBody)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }
}

export default new Api();
