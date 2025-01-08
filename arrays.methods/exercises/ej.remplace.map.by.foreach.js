import data from "./posts.json" assert { type: "json" };

const titles = [];

data.forEach(function (item) {
  titles.push(item.title);
});

console.log(titles);
