import axios from "axios";

import { DOMAIN, TOKEN, TOKEN_CYBER } from "util/settings/config";

// PUT JSON ve backend
export class BaseService {
  //put method
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      headers: {
        TokenCybersoft: "Bearer " + localStorage.getItem(TOKEN_CYBER), // JWT
      },
    });
  };

  // post method
  post = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: model,
      headers: {
        TokenCybersoft: "Bearer " + localStorage.getItem(TOKEN_CYBER), // JWT
      },
    });
  };

  // get method
  get = (url) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBER, // JWT
      },
    });
  };

  // delete method
  delete = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: {
        TokenCybersoft: "Bearer " + localStorage.getItem(TOKEN_CYBER), // JWT
      },
    });
  };
}