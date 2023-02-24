export const isLogin = () => {
    if (localStorage.getItem("token") != null) {
        return true;
    }
    else {
        return false;
    }
}