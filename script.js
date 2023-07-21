let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    //   way1: using only map and if condition
    arr.map((item) => {
      item.profession == "developer" ? console.log(item) : null;
    });
    // Way2: using filter and then map
    const developers = arr.filter((item) => item.profession == "developer");
    developers.map((item) => console.log(item));
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((item) => {
      item.profession == "developer" ? console.log(item) : null;
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    const newemployee={id:4,name:"susan",age:"20",profession:"intern"};
    //way1
    arr.push(newemployee);
    //way2
    const updatedlist=[...arr,newemployee];
   
    console.log(updatedlist);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    //Shubham's code
    const update = arr.filter(item =>item.profession!="admin");
    arr = update;
    console.log(arr);
  
    //prince's code
    console.log(
      (arr = arr.filter((value) => {
        return value.profession !== "admin";
      }))
    );
  //Deepak's code
  arr=arr.filter((person)=>person.profession!=="admin");
  console.log(arr);
  
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newemployess = [
      { id: 1, name: "Deepak", age: "18", profession: "SDE" },
      { id: 2, name: "Prince", age: "22", profession: "Designer" },
      { id: 3, name: "Samiriddhi", age: "19", profession: "CEO" },
    ];
  
    const concatenatedArray=arr.concat(newemployess);
    console.log(concatenatedArray);
    arr=concatenatedArray;
  }
  
  //   Difference between Map, foreach, filter
  
  // Map method is used for tranforming elements into a new array
  // forEach method is used for performing operations on each element without creating a new array
  // Filter method is used for creating a new array with elements that meet a specific condition
  
  // Example of map function
  const names = [
    "Samiriddhi Kumari",
    "shubham Sharma",
    "Vishal pandey",
    "Deepak Kumar",
  ];
  const UppercaseNames = names.map((name) => name.toUpperCase());
  console.log(UppercaseNames);
  
  //Example of forEach function
  const expenselist = [120, 150, 100, 6000, 6700];
  let sum = 0;
  expenselist.forEach((item) => {
    sum += item;
  });
  console.log(sum);
  
  //Examples of filter function
  // condition: all expenses greater than 5000
  
  let higherexpense = expenselist.filter((item) => item < 5000);
  console.log(higherexpense);
  
  let expenseLit = [120, 150, 100, 6000, 670];
  
  expenseLit = expenseLit.filter((value) => {
    return value >= 5000;
  });
  console.log(expenseLit);
  
  const expences = expenselist.filter((item) => item >= 5000);
  console.log(expences);
  
  const newlist = expenselist.filter((item) => item > 5000);
  
  let newarr = expenselist.filter((item) => item >= 500);