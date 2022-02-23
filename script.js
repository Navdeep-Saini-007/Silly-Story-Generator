const customName = document.getElementById("customName");
const us = document.getElementById("us");
const uk = document.getElementById("uk");
const btn = document.getElementById("btn");
const story = document.getElementById("story");
const array1 = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const array2 = ["the soup kitchen", "Disneyland", "the White House"];
const array3 = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

const randomLines = (array) => {
  const randomNumber = Math.floor(Math.random() * array1.length);
  return array[randomNumber];
};

btn.addEventListener("click", () => {
  let name, temp, weight;
  if (customName.value === "") {
    name = "Bob";
  } else {
    name = customName.value;
  }
  if (uk.checked) {
    console.log("checked");
    temp = `${Math.round((94 - 32) * (5 / 9))} centigrade`;
    weight = `${Math.round(300 / 14)} stone`;
  } else {
    temp = `94 fahrenheit`;
    weight = `300 pounds`;
  }

  const first = randomLines(array1);
  const para = `It was ${temp} outside, so ${first} went for a walk. When they got to ${randomLines(
    array2
  )}, they stared in horror for a few moments, then ${randomLines(
    array3
  )}. ${name} saw the whole thing, but was not surprised — ${first} weighs ${weight}, and it was a hot day.`;
  story.innerHTML = para;
});

us.addEventListener("click", () => {
  uk.checked = false;
});

uk.addEventListener("click", () => {
  us.checked = false;
});
