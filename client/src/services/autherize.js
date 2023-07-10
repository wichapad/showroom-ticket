// เก็บข้อมูล// เก็บ token  users => session storage
export const authenticate = (response, next) => {
  if (window !== "undifined") {
    if (response.data.isAdmin) {
      //เก็บ token สำหรับ admin ลงใน session storage
      sessionStorage.setItem("adminToken", JSON.stringify(response.data.token));
      sessionStorage.setItem("adminId", JSON.stringify(response.data._id));
    } else {
      //เก็บ token สำหรับ client ลงใน session storage
      sessionStorage.setItem(
        "clientToken",
        JSON.stringify(response.data.token)
      );
      sessionStorage.setItem("clientId", JSON.stringify(response.data._id));
    }
  }
  next();
};

//ดึงข้อมูล token (Client)
export const getClientToken = () => {
  if (window !== "undefined") {
    if (sessionStorage.getItem("clientToken")) {
      return JSON.parse(sessionStorage.getItem("clientToken"));
    } else {
      return false;
    }
  }
};

//ดึงข้อมูล token (Admin)
export const getAdminToken = () => {
  if (window !== "undefined") {
    if (sessionStorage.getItem("adminToken")) {
      return JSON.parse(sessionStorage.getItem("adminToken"));
    } else {
      return false;
    }
  }
};

//ดึงข้อมูล ID (Client)
export const getClientId = () => {
  if (window !== "undefined") {
    if (sessionStorage.getItem("clientId")) {
      return JSON.parse(sessionStorage.getItem("clientId"));
    } else {
      return false;
    }
  }
};
//ดึงข้อมูล ID (Admin)
export const getAdminId = () => {
  if (window !== "undefined") {
    if (sessionStorage.getItem("adminId")) {
      return JSON.parse(sessionStorage.getItem("adminId"));
    } else {
      return false;
    }
  }
};

// logout ลบข้อมูล token และ id ทั้ง Client , Admin
export const logout = (next) => {
  if (window !== "undefined") {
    sessionStorage.removeItem("clientToken");
    sessionStorage.removeItem("clientId");
    sessionStorage.removeItem("adminToken");
    sessionStorage.removeItem("adminId");
  }
  next();
};
