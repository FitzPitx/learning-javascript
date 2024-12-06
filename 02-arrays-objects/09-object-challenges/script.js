// Step 1
const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    status: {
      read: false,
      reading: false,
      own: true,
    }  
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    status: {
      read: false,
      reading: false,
      own: true,
    }
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    status: {
      read: false,
      reading: false,
      own: true,
    }
  }
]

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
console.log(library);

// Step 3
const { title: firstBook} = library[0];
console.log(firstBook);

// Step 4
libraryJson= JSON.stringify(library);
console.log(libraryJson);