const person = {
  name: 'Lee',
  address: { city: 'Seoul' }
};

function twoDepthCopy(target) {
  return { name: target.name, address: { ...target.address } };
}

const copy = twoDepthCopy(person);
console.log(copy);
console.log(copy.address === person.address); // false
console.log(copy.address.city === person.address.city); // true
