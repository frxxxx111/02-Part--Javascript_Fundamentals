'use strict';
const c = console.log.bind(this);

// Exercise #1
// Create an address object with the following properties:
// street, city, zipCode
const address = {
    street: "Lupac",
    city: "Boac",
    zipCode: "4900"
  };
console.log(address);  
// Exercise #2
// Write a Factory and Constructor function for an address object with the following properties:
// street, city, zipCode
function createAddress(street, city, zipCode) {//FACTORY function
    return {
      street,
      city,
      zipCode
    };
  }

  const myAddress = createAddress("Lupac", "Boac", "4900");
console.log(myAddress);// Output: { street: "Lupac", city: "Boac", zipCode: "4900" }

//CONSTRUCTOR function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }

  const my_Address = new Address('Lupac', 'Boac', '4900');
  console.log(myAddress);// Output: { street: "Lupac", city: "Boac", zipCode: "4900" }
// Exercise #3
// Write a function that will check the equality of an address object.
// the function areEqual(address1, address2) should return true if the address objects are equal.
// the function areSame(address1, address2) should return true if the address objects are the same object.
function areEqual(address1, address2) {
    return address1.street === address2.street &&
           address1.city === address2.city &&
           address1.zipCode === address2.zipCode;
  }
  
  function areSame(address1, address2) {
    return address1 === address2;
  }

  const address1 = {
    street: "Lupac",
    city: "Boac",
    zipCode: "4900"
  };
  
  const address2 = {
    street: "Lupac",
    city: "Boac",
    zipCode: "4900"
  };
  
  const address3 = address1;
  
  console.log(areEqual(address1, address2)); // Output: true
  console.log(areSame(address1, address2)); // Output: false
  
// Exercise #4
// Create a object called post with the following properties:
// title, body, author, views, comments (author, body), isLive
const post = {
    title: "Sample Post",
    body: "This is a sample post.",
    author: "Monkey D. Luffy",
    views: 100,
    comments: [
      {
        author: "Nami",
        body: "Great post!"
      },
      {
        author: "Sanji",
        body: "Thanks for sharing."
      }
    ],
    isLive: true
  };
  
  console.log(post);
// Exercise #5
// Create a constructor function that will create a post object with the following properties:
// title, body, author, views, comments (author, body), isLive
// the function should have a method called publish that will set the isLive property to true
// the function should have a method called unpublish that will set the isLive property to false
// the function should have a method called addComment that will add a comment to the comments array
// the function should have a method called removeComment that will remove a comment from the comments array
function Post(title, body, author, views) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = [];
    this.isLive = false;
  
    this.publish = function() {
      this.isLive = true;
    };
  
    this.unpublish = function() {
      this.isLive = false;
    };
  
    this.addComment = function(comment) {
      this.comments.push(comment);
    };
  
    this.removeComment = function(comment) {
      const index = this.comments.indexOf(comment);
      if (index !== -1) {
        this.comments.splice(index, 1);
      }
    };
  }

  const post1 = new Post("Sample Post", "This is a sample post.", "Monkey D.", 120);
console.log(post1); // Output: Post {title: "Sample Post", body: "This is a sample post.", author: "Monkey D.", views: 120, comments: [], …}

post1.publish();
console.log(post1.isLive); // Output: true

const comment1 = {author: "Gold D.", body: "Great post!"};
post1.addComment(comment1);
console.log(post1.comments); // Output: [{author: "Gold D.", body: "Great post!"}]

const comment2 = {author: "Dragon", body: "Thanks for sharing."};
post1.addComment(comment2);
console.log(post1.comments); // Output: [{author: "Gold D.", body: "Great post!"}, {author: "Dragon", body: "Thanks for sharing."}]

post1.removeComment(comment1);
console.log(post1.comments); // Output: [{author: "Dragon", body: "Thanks for sharing."}]

post1.unpublish();
console.log(post1.isLive); // Output: false

// Exercise #6
// Create an array of objects called priceRange
// each object should have a label and a tooltip
// label is a string
// tooltip is a string
// the array should have 4 objects
// the first object should have the label '$' and the tooltip 'Inexpensive'
// the second object should have the label '$$' and the tooltip 'Moderate'
// the third object should have the label '$$$' and the tooltip 'Pricey'
// the fourth object should have the label '$$$$' and the tooltip 'Very Expensive'
// Inexpensive = 0 - 10
// Moderate = 11 - 20
// Pricey = 21 - 50
// Very Expensive = 51+
const priceRange = [
    { label: '$', tooltip: 'Inexpensive' },
    { label: '$$', tooltip: 'Moderate' },
    { label: '$$$', tooltip: 'Pricey' },
    { label: '$$$$', tooltip: 'Very Expensive' }
  ];

  console.log(priceRange[0]);