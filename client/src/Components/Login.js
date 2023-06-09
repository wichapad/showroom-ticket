
const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-slate-50">
            <form className="bg-white shadow-md rounded w-96 px-8 py-10" >
                <img src="" alt="" />
                <div className="form-input">
                    <label className="mb-2">
                        Email
                    </label>
                    <input id="email" type="email" />
                </div>
                <div className="form-input mb-8">
                    <label className="mb-2" >
                        Password
                    </label>
                    <input id="password" type="password" />
                </div>
                <div className="flex items-center justify-center">
                    <button className="button-container mb-8" type="submit" value="signin">
                        Sign In
                    </button>
                </div>
                <div className="flex items-center justify-around">
                    <a className="text-xs" href="/">
                        Forgot Password?
                    </a>
                    <a className="text-sm underline" href="/register" >
                        Sign Up
                    </a>
                </div>
            </form>
        </div>
    )
}

export default Login
