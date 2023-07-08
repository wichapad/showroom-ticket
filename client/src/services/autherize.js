// เก็บข้อมูล// เก็บ token  admin => session storage
export const authenticateAdmin = (response, next) => {
  if (window !== "undifined") {
    //เก็บ token ลงใน session storage
    sessionStorage.setItem("adminToken", JSON.stringify(response.data.token));
    sessionStorage.setItem("adminId", JSON.stringify(response.data._id));
  }
  next();
};

// ดึงข้อมูล token สำหรับ admin
export const getAdminToken = () => {
  if (window !== "undefined") {
    if (sessionStorage.getItem("adminToken")) {
      return JSON.parse(sessionStorage.getItem("adminToken"));
    } else {
      return false;
    }
  }
};
export const getAdminUser = () => {
  if (window !== "undefined") {
    if (sessionStorage.getItem("adminId")) {
      return JSON.parse(sessionStorage.getItem("adminId"));
    } else {
      return false;
    }
  }
};
export const logoutAdmin = () =>{
    if (window !== "undefined") {
        sessionStorage.removeItem('adminToken')
        sessionStorage.removeItem('adminId')
    }
    next()
}

// เก็บข้อมูล// เก็บ token  client => session storage
export const authenticateClient = (response, next) => {
    if (window !== "undifined") {
      //เก็บ token ลงใน session storage
      sessionStorage.setItem("clientToken", JSON.stringify(response.data.token));
      sessionStorage.setItem("clientId", JSON.stringify(response.data._id));
    }
    next();
  };

//ดึงข้อมูล token
export const getClientToken = () => {
  if (window !== "undefined") {
    if (sessionStorage.getItem("clientToken")) {
      return JSON.parse(sessionStorage.getItem("clientToken"));
    } else {
      return false;
    }
  }
};

//ดึงข้อมูล user
export const getClientUser = () => {
  if (window !== "undefined") {
    if (sessionStorage.getItem("clientId")) {
      return JSON.parse(sessionStorage.getItem("clientId"));
    } else {
      return false;
    }
  }
};

// logout
export const logout = (next) => {
  if (window !== "undefined") {
    sessionStorage.removeItem("clientToken");
    sessionStorage.removeItem("clientId");
  }
  next();
};
