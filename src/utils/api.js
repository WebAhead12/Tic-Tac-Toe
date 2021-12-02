function request(url, settings) {
  return fetch(url, settings).then((res) => {
    if (!res.ok) {
      const error = new Error("HTTP error");
      error.status = res.status;
      throw error;
    } else {
      return res.json();
    }
  });
}

export function login(loginData) {
  return request(process.env.REACT_APP_API_URL + "/users/login", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: { "content-type": "application/json" },
  });
}

export function getUser(token) {
  return request(process.env.REACT_APP_API_URL + "/users/thisUser", {
    method: "GET",
    headers: { authorization: `Bearer ${token}` },
  });
}

export function register(account) {
  return request(process.env.REACT_APP_API_URL + "/users/register", {
    method: "POST",
    body: JSON.stringify(account),
    headers: { "content-type": "application/json" },
  });
}
