// example 1
// // เก็บข้อมูล// เก็บ token  users => session storage
// export const authenticate = (response, next) => {
//   if (window !== "undifined") {
//       //เก็บ token ลงใน session storage
//       sessionStorage.setItem("token", JSON.stringify(response.data.adminToken || response.data.clientToken))
//   }
//   next()
// }

// //ดึงข้อมูล token
// export const getToken = () => {
//   if (window !== "undefined") {
//       if (sessionStorage.getItem("token")) {
//           return JSON.parse(sessionStorage.getItem("token"))
//       } else {
//           return false
//       }
//   }
// }

// // logout
// export const logout = (next) => {
//   if (window !== "undefined") {
//       sessionStorage.removeItem("token")

//   }
//   next()
// }

export const authenticate = (response, next) => {
  if (window !== "undefined") {
    if (response.data.adminToken) {
      sessionStorage.setItem(
        "adminToken",
        JSON.stringify(response.data.adminToken)
      );
    }
    if (response.data.clientToken) {
      sessionStorage.setItem(
        "clientToken",
        JSON.stringify(response.data.clientToken)
      );
    }
  }
  next();
};

// ดึง adminToken
export const getAdminToken = () => {
  if (window !== "undefined") {
    if (sessionStorage.getItem("adminToken")) {
      return JSON.parse(sessionStorage.getItem("adminToken"));
    } else {
      return false;
    }
  }
};

// ดึง clientToken
export const getClientToken = () => {
  if (window !== "undefined") {
    if (sessionStorage.getItem("clientToken")) {
      return JSON.parse(sessionStorage.getItem("clientToken"));
    } else {
      return false;
    }
  }
};

export const logout = (next) => {
  if (window !== "undefined") {
    sessionStorage.removeItem("adminToken");
    sessionStorage.removeItem("clientToken");
  }
  next();
};
