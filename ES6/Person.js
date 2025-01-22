const person = {

    firstName: "John",
  
    lastName: "Doe",
  
    age: 50,
  
    eyeColor: "blue"
  
  };

  let id = Symbol('id');
  person[id] = 140353;
 
  console.log(person[id]); // 140353
  console.log(person); // {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue", Symbol(id): 140353}   
  console.log(person.id)
  console.log(person.lastName)