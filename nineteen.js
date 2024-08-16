const url = "https://jsonplaceholder.typicode.com/posts";
const fetchData = async () => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    
  } catch (error) {
    console.error("Error in fetching data" + error);
  }
};

fetchData();
