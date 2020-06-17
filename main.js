const navBtn = document.querySelector("#navBtn");
const navContent = document.querySelector("#navContent");
const date = document.querySelector("#date");
const infoBox = document.querySelector("#infoBox");

const list = keyaki;

const openNavContent = () => {
  navContent.classList.toggle("hidden");
};

navBtn.addEventListener("click", openNavContent);

const getToday = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  today = `${yyyy}/${mm}/${dd}`;
  date.textContent = today;
};

const getTodayDate = () => {
  let todayDate = new Date();
  const dd = String(todayDate.getDate());
  const mm = String(todayDate.getMonth() + 1); //January is 0!
  todayDate = `${mm},${dd}`;
  return todayDate;
};

// const today = getTodayDate();

const today = "6,25";

const calculateAge = (birthday) => {
  var diff_ms = Date.now() - birthday.getTime();
  var age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
};

const findBirthdayMember = (list) => {
  const birthdayList = list.filter((member) => member.birthday.includes(today));
  return birthdayList;
};

const generateBirthday = (birthdayMember) => {
  if (birthdayMember.length === 0) return;
  birthdayMember.forEach((member) => {
    const { name, birthday, group } = member;
    const age = calculateAge(new Date(birthday));
    const paragraph = document.createElement("p");
    paragraph.textContent = `Happy birthday ${name} (${group}) ${age}`; //Age is showing NaN on Safari
    infoBox.appendChild(paragraph);
  });
};

const checkBirthday = (list) => generateBirthday(findBirthdayMember(list));

getToday();
checkBirthday(list);
