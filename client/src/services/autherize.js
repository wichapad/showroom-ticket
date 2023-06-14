// เก็บข้อมูล// เก็บ token  users => session storage
export const authenticate = (response,next)=>{
    if(window !== "undifined"){
        //เก็บ token ลงใน session storage
        sessionStorage.setItem("token",JSON.stringify(response.data.token))
        sessionStorage.setItem("user",JSON.stringify(response.data.email))
    }
    next()
}