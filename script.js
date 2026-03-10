const welc = document.getElementById("welcome");

welc.innerHTML += `<img id="banner" src= "./assets/viajes/2.jpg">`;

//
const data = [
  {
    title: "Viaje 1",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              magnam cupiditate repellendus tenetur, nam dolorum ex odio
              quibusdam ipsum. Tempore nihil odio consectetur laborum
              reprehenderit qui mollitia sequi quos itaque?`,
    img: "./assets/viajes/viajes-1.jpg",
  },
  {
    title: "Viaje 2",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              magnam cupiditate repellendus tenetur, nam dolorum ex odio
              quibusdam ipsum. Tempore nihil odio consectetur laborum
              reprehenderit qui mollitia sequi quos itaque?`,
    img: "./assets/viajes/viajes-2.jpg",
  },
  {
    title: "Viaje 3",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              magnam cupiditate repellendus tenetur, nam dolorum ex odio
              quibusdam ipsum. Tempore nihil odio consectetur laborum
              reprehenderit qui mollitia sequi quos itaque?`,
    img: "./assets/viajes/viajes-3.jpg",
  },
];
const blog = document.getElementById("trip");
for (const trips of data) {
  blog.innerHTML += `<article class="card">
            <img src="${trips.img}"/>
            <h2>${trips.title}</h2>
            <p>
              ${trips.description}
            </p>
          </article>`;
}

const cities = [
  "Madrid",
  "Barcelona",
  "Valencia",
  "Seville",
  "Bilbao",
  "Granada",
  "Malaga",
  "Palma de Mallorca",
  "Alicante",
  "Zaragoza",
];

/* <option value="madrid">Madrid</option> */

const selector = document.getElementById("lugares");

for (const list1 of cities) {
  selector.innerHTML += `<option value="${list1}">${list1}</option>`;
}
