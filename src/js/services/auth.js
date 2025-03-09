const login = (token) => {
  sessionStorage.setItem("token", token);
};

const isAuthenticated = () => {
  return !!sessionStorage.getItem("token");
};

const logout = () => {
  sessionStorage.removeItem("token");
  window.location.reload();
};

export { login, isAuthenticated, logout };
