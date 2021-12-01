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
  return request("http://localhost:4000/users/login", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: { "content-type": "application/json" },
  });
}

export function getUser(token) {
  return request("http://localhost:4000/users/thisUser", {
    method: "GET",
    headers: { authorization: `Bearer ${token}` },
  });
}

export function register(account) {
  return request("http://localhost:4000/users/register", {
    body: JSON.stringify(account),
    headers: { "content-type": "application/json" },
  });
}
