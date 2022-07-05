function registerUser() {
  // (1) Create an empty array called registrationForm
  let registrationForm = [];

  // (2) Use document to get the text elements
  let textElements = document.getElementsByClassName('field');

  let firstNameField = textElements[0];
  let lastNameField = textElements[1];
  let emailField = textElements[2];
  let passwordField = textElements[3];
  let phoneField = textElements[4];

  let tcCheckbox = document.getElementsByClassName('checkbox')[0];

  // (3) Validate the data
  let errors = [];

  if (firstNameField.value.length === 0) {
    errors.push('Please enter first name!');
  }
  if (lastNameField.value.length === 0) {
    errors.push('Please enter last name!');
  }
  if (emailField.value.length === 0) {
    errors.push('Please enter valid email address!');
  }
  if (passwordField.value.length === 0) {
    errors.push('Please enter a password!');
  }
  if (tcCheckbox.checked === false) {
    errors.push('Please read and accept terms & conditions!');
  }

  // Reset both user-errors and user-success
  let errorsBox = document.getElementsByClassName('user-errors')[0];
  let successBox = document.getElementsByClassName('user-success')[0];

  errorsBox.style.display = 'none';
  errorsBox.innerHTML = '';

  successBox.style.display = 'none';

  if (errors.length > 0) {
    errorsBox.style.display = 'block';
    errorsBox.innerHTML = errors.join('<br/>');
  } else {
    successBox.style.display = 'block';
    successBox.innerHTML = 'You have registered successfully!';
  }

  // (4) Save the data into FormData
  fetch('http://localhost:3005/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: firstNameField.value,
      lastName: lastNameField.value,
      email: emailField.value,
      password: passwordField.value,
      phone: phoneField.value,
    }),
  })
    .then((backendResponse) => {
      console.log(backendResponse);
    })
    .catch((backendError) => {
      console.log(backendError);
    });
}

/*const Backpack = {
    name : "everyday Backpack",
    volume : 30,
    color : "grey",
    pocketNum : 15,
    strapLength : {
        left: 26,
        right: 26,
    },
    lidOpen: false,
    toggleLid : function (lidStatus) {
        this.lidOpen = lidStatus;
    },

    newStrapLength : function (lenghtLeft, lenghtRight) {
        this.strapLength.left = lenghtLeft;
        this.strapLength.right = lenghtRight;
    },
};


console.log("The Backpack Object:", Backpack );

class Backpack {
    constructor(
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLenghtR,
        lidOpen
    ) {
        this.name;
        this.volume;
        this.color;
        this.pocketNum;
        this.strapLength = {
            left : strapLengthL,
            rigth : strapLenghtR,
        };
        this.lidopen;
        }
}

const Everydaypack = new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false,
); */

// let x =2

// const sumcal = function timeCal(){
//     x *=2;
//     console.log(x);
// }

// timeCal();

// let lunchdate = ["Angela", "Ben","Jenny","Michael", "Chloe"];

// for (let i=0; i < lunchdate.length; i++ ) {
//     console.log(lunchdate);
// }

// function lunchcal() {
//     return Math.floor(Math.random() * 4);
//   }

//   for (let i=0; i < lunchdate.length; i++ ) {
//       console.log(lunchdate);
//   }

//   lunchdate.forEach(element => console.log(element));
//   array1.forEach
