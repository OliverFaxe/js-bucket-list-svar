// // // ############## 1
// const body = document.body;

// // const wish = document.createElement("p");

// // wish.innerText = "Go to the moon";
// // body.appendChild(wish);
// // console.log(wish);

// // const wish2 = document.createElement("p");

// // // 2

// // wish2.innerText = "Explore all countries";
// // body.appendChild(wish2);
// // wish.insertAdjacentElement("afterend", wish2);

// // // 3

// // console.log(body.innerHTML);

// // // 4

// // const newItem = "<p>Pyramids of Egypt</p>";

// // body.innerHTML = newItem + body.innerHTML;

// // // 5

// // console.log(newItem.innerHTML);

// // 6

// const wishes = [
//     "Go to the moon",
//     "Roadtrip USA",
//     "Learn to surf"
// ];

// for (let i = 0; i < wishes.length; i++) {
//     const wish = document.createElement("p");
//     wish.innerText = wishes[i];
//     body.appendChild(wish);
// }

// console.log(body.children.length);

// //8
// let pTags = Array.from(body.children).filter(child => child.tagName === "P");
// console.log(pTags.length);

// // 9
// const name = document.getElementsByClassName("owner")[0];
// name.innerText = "Oliver's";

// // 10
// const newWish = document.createElement("p");
// newWish.innerText = "Fly";

// const wishList = document.querySelector(".list");

// const firstWish = wishList.querySelector("p")

// wishList.replaceChild(newWish, firstWish);

// // 11

// const allWishes = wishList.querySelectorAll("p");

// const thirdWish = document.createElement("p");
// thirdWish.innerText = "Visit Japan";

// const thirdWishElement = allWishes[0];

// wishList.replaceChild(thirdWish, thirdWishElement);

// console.log(allWishes);

// // 12

// function removeLastItem() {
//     const lastItem = wishList.lastElementChild;

//     if (lastItem) {
//         wishList.removeChild(lastItem);
//     }
// };

// removeLastItem()




// en gång till ## 1
const sectionList = document.querySelector("section.list");

const paragraf = document.createElement("p");

paragraf.innerText = "Go to the Moon";

sectionList.appendChild(paragraf);

// ## 2

const paragraf1 = document.createElement("p");

paragraf1.innerText = "Explore America and Asia";

sectionList.insertAdjacentElement("beforeend", paragraf1);

// ## 3

// const innerHTMLContent = sectionList.innerHTML;

// console.log(innerHTMLContent)

// ## 4 & 5

const paragraf2 = "<p>Go to Japan</p>";

// sectionList.innerHTML += paragraf2;

// ## 6

sectionList.insertAdjacentHTML("afterbegin", paragraf2);

// ## 7

const paragrafarray = ["Learn to surf", "Be able to sail", "Fly"];

for (wish of paragrafarray) {
  const paragrafItem = `<p>${wish}</p>`;

  sectionList.insertAdjacentHTML("beforeend", paragrafItem);
}

// ## 8

console.log(sectionList.children); // = 7

// ## 9

const header2 = document.querySelector("h2");

header2.innerText = "Oliver's";

// ## 10

const NewParagraf = document.createElement("p");
NewParagraf.innerText = "Walk the streets of Tokyo";

const OldParagraf = sectionList.querySelector("p");

sectionList.replaceChild(NewParagraf, OldParagraf);

// ## 11

const NewParagraf1 = document.createElement("p");
NewParagraf1.innerText = "Be a gladiator in the Colosseum"

const paragraphs = sectionList.querySelectorAll("p");

if (paragraphs.length >= 5) {
    sectionList.replaceChild(NewParagraf1, paragraphs[4]);
}

// ## 12

const sistaitem = sectionList.lastElementChild;

sectionList.removeChild(sistaitem);
