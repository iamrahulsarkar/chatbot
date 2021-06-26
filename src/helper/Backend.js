const url= process.env.REACT_APP_BACKEND_API_URL;
console.log(url)
const sender_id = 'default';
console.log(process.env);
//ChatBot_API_Handling
export const userRequest = (message) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, sender: sender_id }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };