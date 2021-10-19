export const getProfileData = () => {
  return fetchData("profile");
};

export const getFriendsListData = (userId) => {
  return fetchData("friends/s9df8ske-23n23490s8-12nkk123o");
};

const fetchData = (endpoint) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`http://localhost:3000/${endpoint}`)
        .then((response) => response.json())
        .then((data) => resolve(data));
    }, 3000);
  });
};
