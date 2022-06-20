const ApiData = async () => {
  try {
    let url = `https://www.reddit.com/r/memes.json`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.data.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
export default ApiData;
