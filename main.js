moment().format();

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
  let today = new moment();
  const dd = String(moment().get("date")).padStart(2, "0");
  const mm = String(moment().get("month") + 1).padStart(2, "0"); //January is 0!
  const yyyy = moment().get("year");
  today = `${yyyy}-${mm}-${dd}`;
  date.textContent = today;
};

const getTodayDate = () => {
  let todayDate = new moment();
  const dd = String(moment().get("date"));
  const mm = String(moment().get("month") + 1); //January is 0!
  todayDate = `${mm}-${dd}`;
  return todayDate;
};

// const today = getTodayDate();

const year = "2020";
const today = "6-25";

const calculateAge = (birthday) => {
  var diff_ms = moment() - moment(birthday);
  var age_dt = moment(diff_ms);
  return Math.abs(age_dt.get("year") - 1970);
};

const findBirthdayMember = (list) => {
  const birthdayList = list.filter((member) => member.birthday.includes(today));
  return birthdayList;
};

const generateBirthday = (birthdayMember) => {
  if (birthdayMember.length === 0) return;
  birthdayMember.forEach((member) => {
    const { name, birthday, group } = member;
    const age = calculateAge(birthday);
    const paragraph = document.createElement("p");
    paragraph.textContent = `Happy birthday ${name} (${group}) ${age}`; //Age is showing NaN on Safari
    infoBox.appendChild(paragraph);
  });
};

const checkBirthday = (list) => generateBirthday(findBirthdayMember(list));

getToday();
checkBirthday(list);
