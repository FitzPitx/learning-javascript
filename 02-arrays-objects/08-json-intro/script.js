// Javascript Object Notation
const post = {
  id: 1,
  title: "Post One",
  body: "This is the body",
};

// Convert to JSON string
const str = JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str);
console.log(obj);
console.log(str);

const posts = [
  {
    id: 1,
    title: "Post One",
    body: "This is the body",
  },
  {
    id: 2,
    title: "Post Two",
    body: "This is the body of the second post",
  },
];

const str2 = JSON.stringify(posts);
console.log(str2);
const obj2 = JSON.parse(str2);
console.log(obj2);