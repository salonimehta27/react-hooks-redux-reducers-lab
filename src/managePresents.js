export function managePresents(state, action) {
  // your code here
  // set  an default value for the state argument
  //- an object with a key
  // number of presents assigned to 0 {numberOfPresents:0}
  // action={
  //   type:"presents/increase",
  // }
  if (action.type==="presents/increase"){
    return {numberOfPresents:state.numberOfPresents+1}
  }
  else{
    return state;
  }
}
