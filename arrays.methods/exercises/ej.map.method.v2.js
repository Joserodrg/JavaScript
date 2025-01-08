import data from "./posts.json" assert { type: "json" };


const jsonTitles = data.map(function (data) {
    return data.title;
  });
  
  console.log(jsonTitles);
  