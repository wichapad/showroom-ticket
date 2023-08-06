// เก็บข้อมูล token

export const authenticate = (response, next) => {
  if (window !== "undefined") {
    if (response.data.adminToken) {
      sessionStorage.setItem(
        "admin_token",
        JSON.stringify(response.data.adminToken)
      );
    }
    if (response.data.clientToken) {
      sessionStorage.setItem(
        "client_token",
        JSON.stringify(response.data.clientToken)
      );
    }
  }
  next();
};

export const getAdminId = () => {
  if (window !== "undefined") {
    if (sessionStorage.getItem("admin_token")) {
      return JSON.parse(sessionStorage.getItem("admin_token"));
    } else {
      return false;
    }
  }
};

export const getClientId = () => {
  if (window !== "undefined") {
    if (sessionStorage.getItem("client_token")) {
      return JSON.parse(sessionStorage.getItem("client_token"));
    } else {
      return false;
    }
  }
};

export const logout = (next) => {
  if (window !== "undefined") {
    sessionStorage.removeItem("admin_token");
    sessionStorage.removeItem("client_token");
  }
  next();
};
