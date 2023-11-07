const userBirthYear = prompt('What is your year of birth?');
let userAge;

if (userBirthYear !== null) {
  userAge = 2023 - userBirthYear;
} else {
  alert(`It is a pity that you didn't want to enter your age :( `);
  userAge = `You didn't enter your age`;
}

const userCityRequest = prompt('Which city do you live in?');
let userCity;

if (userCityRequest !== null) {
  if (userCityRequest === 'Kyiv') {
    userCity = 'You live in the capital of Ukraine';
  } else if (userCityRequest === 'Washington') {
    userCity = 'You live in the capital of USA';
  } else if (userCityRequest === 'London') {
    userCity = 'You live in capital of England';
  } else {
    userCity = `You live in ${userCityRequest}`;
  }
} else {
  alert(`It is a pity that you didn't want to enter the city you live in :(`);
  userCity = `You didn't enter your city`;
}

let userSportRequest = prompt('What is your favorite sport?');
let userSport;

if (userSportRequest !== null) {
  switch (userSportRequest) {
    case 'Football':
      userSport = 'Cool! You want to be like Pele!';
      break;
    case 'Basketball':
      userSport = 'Cool! You want to be like Lebron!';
      break;
    case 'Swimming':
      userSport = 'Cool! You want to be like Klochkova!';
      break;
    default:
      userSport = `Cool! You want to be the best at ${userSportRequest} sport.`;
      break;
  }
} else {
  alert(`It is a pity that you didn't want to enter your fovourite sport`);
  userSport = `You didn't enter your favourit sport`;
}

alert(`Your age is: ${userAge},\n${userCity},\n${userSport}`);
