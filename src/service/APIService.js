// const endPointoken = 'https://opentdb.com/api_token.php?command=request';
const edgeTokenToLocalStorage = (key, value) =>
  localStorage.setItem(key, value);

const getTokenTriviaAPI = () =>
  fetch('https://opentdb.com/api_token.php?command=request')
    .then((response) => response.json())
    .then((data) => edgeTokenToLocalStorage('token', data.token));

export default getTokenTriviaAPI;
