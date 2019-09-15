export * from './PrivateRoute';
export * from './PrivateRoute2';
export * from './PublicRoute';

export const isLogin = () => {
    if (localStorage.getItem('user').admin) {
        console.log("ifff"+localStorage.getItem('user').admin)
        return true;
    }

    return false;
}