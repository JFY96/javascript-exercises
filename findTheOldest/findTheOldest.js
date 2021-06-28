const findTheOldest = function(people) {
    return people.reduce((prevPerson, person) => {
        const prevPersonAge = getPersonAge(prevPerson.yearOfBirth, prevPerson.yearOfDeath);
        const personAge = getPersonAge(person.yearOfBirth, person.yearOfDeath);
        return personAge > prevPersonAge ? person : prevPerson;
    });
};

const getPersonAge = function(birthYear, deathYear) {
    if (!deathYear) deathYear = new Date().getFullYear();
    return deathYear - birthYear;
};

module.exports = findTheOldest;
