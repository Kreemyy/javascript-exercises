const findTheOldest = function (people) {
  const oldest = people.sort((lastPerson, nextPerson) => {
    let aDeathDay = lastPerson.yearOfDeath || new Date().getFullYear();
    let bDeathDay = nextPerson.yearOfDeath || new Date().getFullYear();

    ageA = aDeathDay - lastPerson.yearOfBirth;
    ageB = bDeathDay - nextPerson.yearOfBirth;

    return ageB - ageA;
  });

  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
