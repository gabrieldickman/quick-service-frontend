const login = (token) => {
  localStorage.setItem("token", token);
};

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

const logout = () => {
  localStorage.removeItem("token");
  window.location.reload(); // Recarrega a página após logout
};

export { login, isAuthenticated, logout };
