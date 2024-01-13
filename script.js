let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    let developers = arr
      .filter(employee => employee.profession === "developer")
      .map(developer => {
        return {
          id: developer.id,
          name: developer.name,
          age: developer.age,
          profession: developer.profession,
        };
      });
    developers.forEach(developer => {
      console.log(developer);
    });
  }
  PrintDeveloperbyMap();
  
  function PrintDeveloperbyForEach() {
    arr.forEach(employee => {
      if (employee.profession === "developer") {
        console.log({
          id: employee.id,
          name: employee.name,
          age: employee.age,
          profession: employee.profession,
        });
      }
    });
  }
  
  PrintDeveloperbyForEach();
  
  function addData() {
    let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);
  }
  addData();
  
  function removeAdmin() {
    arr = arr.filter(employee => employee.profession !== "admin");
  
    console.log(arr);
  }
  
  removeAdmin();
  
  function ConcatinateArray() {
  
    let newArray = [
      { id: 4, name: "susan", age: "22", profession: "designer" },
      { id: 5, name: "mike", age: "25", profession: "developer" },
      { id: 6, name: "emma", age: "21", profession: "admin" },
    ];
  
  
    arr = arr.concat(newArray);
  
  
    console.log(arr);
  }
  
  
  ConcatinateArray();