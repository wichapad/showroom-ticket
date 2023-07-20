// เก็บข้อมูล token

export const authenticate = (response, next) => {
  if (window !== "undefined") {
    if (response.data.adminToken) {
      localStorage.setItem("admin_token", JSON.stringify(response.data.adminToken));
    }
    if (response.data.clientToken) {
      localStorage.setItem("client_token", JSON.stringify(response.data.clientToken));
    }
  }
  next();
};

export const getAdminId = () => {
  if (window !== "undefined") {
    if (localStorage.getItem("admin_token")) {
      return JSON.parse(localStorage.getItem("admin_token"));
    } else {
      return false;
    }
  }
};

export const getClientId = () => {
  if (window !== "undefined") {
    if (localStorage.getItem("client_token")) {
      return JSON.parse(localStorage.getItem("client_token"));
    } else {
      return false;
    }
  }
};

export const logout = (next) => {
  if (window !== "undefined") {
   
    localStorage.removeItem("admin_token");
    localStorage.removeItem("client_token");
  }
  next();
};
