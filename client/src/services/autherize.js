// เก็บข้อมูล// เก็บ token  users => session storage
export const authenticate = (response, next) => {
    if (window !== "undifined") {
        //เก็บ token ลงใน session storage
        sessionStorage.setItem("token", JSON.stringify(response.data.token))
        sessionStorage.setItem("_id", JSON.stringify(response.data._id))
    }
    next()
}

//ดึงข้อมูล token
export const getToken = () => {
    if (window !== "undefined") {
        if (sessionStorage.getItem("token")) {
            return JSON.parse(sessionStorage.getItem("token"))
        } else {
            return false
        }
    }
}

//ดึงข้อมูล user
export const getUser = () => {
    if (window !== "undefined") {
        if (sessionStorage.getItem("_id")) {
            return JSON.parse(sessionStorage.getItem("_id"))
        } else {
            return false
        }
    }
}

// logout
export const logout = (next) => {
    if (window !== "undefined") {
        sessionStorage.removeItem("token")
        sessionStorage.removeItem('_id')
    }
    next()
}