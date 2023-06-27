import axios from "axios";

export default async function getData(userId) {
  const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
  const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts/"+userId)
  
  console.log("User: ", user);
  console.log("Post:", post);
};