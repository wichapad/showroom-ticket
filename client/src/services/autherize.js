// เก็บข้อมูล token

export const authenticate = (response, next) => {
  if (window !== "undefined") {
    if (response.data.adminToken) {
      // sessionStorage.setItem(
      //   "adminToken",
      //   JSON.stringify(response.data.adminToken)
      // );
      sessionStorage.setItem("admin_id", JSON.stringify(response.data._id));
    }
    if (response.data.clientToken) {
      // sessionStorage.setItem(
      //   "clientToken",
      //   JSON.stringify(response.data.clientToken)
      // );
      sessionStorage.setItem("client_id", JSON.stringify(response.data._id));
    }
  }
  next();
};

// ดึง adminToken
// export const getAdminToken = () => {
//   if (window !== "undefined") {
//     if (sessionStorage.getItem("adminToken")) {
//       return JSON.parse(sessionStorage.getItem("adminToken"));
//     } else {
//       return false;
//     }
//   }
// };

export const getAdminId = () => {
  if (window !== "undefined") {
    if (sessionStorage.getItem("admin_id")) {
      return JSON.parse(sessionStorage.getItem("admin_id"));
    } else {
      return false;
    }
  }
};

// ดึง clientToken
// export const getClientToken = () => {
//   if (window !== "undefined") {
//     if (sessionStorage.getItem("clientToken")) {
//       return JSON.parse(sessionStorage.getItem("clientToken"));
//     } else {
//       return false;
//     }
//   }
// };

export const getClientId = () => {
  if (window !== "undefined") {
    if (sessionStorage.getItem("client_id")) {
      return JSON.parse(sessionStorage.getItem("client_id"));
    } else {
      return false;
    }
  }
};

export const logout = (next) => {
  if (window !== "undefined") {
    // sessionStorage.removeItem("adminToken");
    // sessionStorage.removeItem("clientToken");
    sessionStorage.removeItem("admin_id");
    sessionStorage.removeItem("client_id");
  }
  next();
};
