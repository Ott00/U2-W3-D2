window.addEventListener("DOMContentLoaded", () => {
  checkUserNameInStorage();
  startTimer();
});

const form = document.getElementById("form");
const previousValue = document.getElementById("prevValue");
const removeStorageBtn = document.getElementById("removeStorage");

const checkUserNameInStorage = function () {
  const valueInStorage = localStorage.getItem("userName");
  if (valueInStorage) {
    previousValue.innerText = JSON.parse(valueInStorage);
  }
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  checkUserNameInStorage();

  const userNameInput = document.getElementById("userName");
  const userName = userNameInput.value;

  previousValue.innerText = userName;

  const parsedName = JSON.stringify(userName);
  localStorage.setItem("userName", parsedName);

  //   form.reset();
});

removeStorageBtn.addEventListener("click", function () {
  localStorage.removeItem("userName");
  previousValue.innerText = " ";
});

// const startTimer = function () {
//   let previousTimer = sessionStorage.getItem("currentTimer");
//   if (previousTimer) {
//     let timer = JSON.parse(previousTimer);
//     console.log(timer);
//     setInterval(() => {
//       timer += 1;
//       console.log(timer);
//       sessionStorage.setItem("currentTimer", timer);
//     }, 1000);
//   } else {
//     previousTimer = 0;
//     setInterval(() => {
//       previousTimer += 1;
//       console.log(previousTimer);
//       sessionStorage.setItem("currentTimer", previousTimer);
//     }, 1000);
//   }
// };

const startTimer = function () {
  let timer = sessionStorage.getItem("currentTimer");

  timer ? (timer = JSON.parse(timer)) : (timer = 0);

  setInterval(() => {
    timer += 1;
    console.log(timer);
    sessionStorage.setItem("currentTimer", timer);
  }, 1000);
};
