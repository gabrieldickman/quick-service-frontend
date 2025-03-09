const getAuthHeader = () => {
  const token = sessionStorage.getItem("token");
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {}; 
};

export { getAuthHeader };
