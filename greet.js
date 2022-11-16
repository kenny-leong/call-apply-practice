// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

let callReturn = say.call(helloMessage, 'John')
let callReturn2 = say.call(heyThereMessage, 'Michael')

console.log(callReturn)
console.log(callReturn2)
