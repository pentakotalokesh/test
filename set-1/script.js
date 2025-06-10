const perfumeList = document.getElementById("perfumeList");

var perfumes = [
  {
    name: "N°5",
    brand: "Chanel",
    fragrance:
      "Floral-Aldehyde with notes of May Rose, Jasmine, and bright citrus.",
    price: 11950,
    intensity: "Eau de Parfum",
    type: "Floral Aldehyde",
  },
  {
    name: "Sauvage",
    brand: "Dior",
    fragrance:
      "Aromatic Fougère with notes of Bergamot, Ambroxan, and Papua New Guinean Vanilla.",
    price: 9700,
    intensity: "Eau de Parfum",
    type: "Aromatic Fougère",
  },
  {
    name: "Aventus",
    brand: "Creed",
    fragrance: "Fruity Chypre with notes of Pineapple, Birch, and Musk.",
    price: 27900,
    intensity: "Eau de Parfum",
    type: "Fruity Chypre",
  },
  {
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    fragrance:
      "Amber Floral with notes of Jasmine, Saffron, Cedarwood, and Ambergris.",
    price: 43500,
    intensity: "Extrait de Parfum",
    type: "Amber Floral",
  },
  {
    name: "Black Opium",
    brand: "Yves Saint Laurent",
    fragrance: "Vanilla with notes of Coffee, White Flowers, and Vanilla.",
    price: 8500,
    intensity: "Eau de Parfum",
    type: "Vanilla",
  },
  {
    name: "Tobacco Vanille",
    brand: "Tom Ford",
    fragrance: "Amber Spicy with notes of Tobacco Leaf, Vanilla, and Ginger.",
    price: 23899,
    intensity: "Eau de Parfum",
    type: "Amber Spicy",
  },
];

function displayPerfumes(perfumeArray) {
  if (perfumeArray.length == 0)
    perfumeList.innerHTML = "No matching perfumes found";
  else {
    perfumeList.innerHTML = "";
    perfumeArray.forEach((perfume) => {
      const div = document.createElement("div");
      const name = document.createElement("h2");
      const brand = document.createElement("p");
      const fragrance = document.createElement("p");
      const Price = document.createElement("p");
      const intensity = document.createElement("p");
      const type = document.createElement("p");

      name.innerHTML = perfume.name;
      brand.innerHTML = perfume.brand;
      fragrance.innerHTML = perfume.fragrance;
      Price.innerHTML = perfume.price;
      intensity.innerHTML = perfume.intensity;
      type.innerHTML = perfume.type;

      div.appendChild(name);
      div.appendChild(brand);
      div.appendChild(fragrance);
      div.appendChild(Price);
      div.appendChild(intensity);
      div.appendChild(type);
      perfumeList.append(div);
    });
  }
}

function findSimilarPerfumes() {
  const nameOfBrand = document.getElementById("name").value;
  if (nameOfBrand === "") perfumeList.innerHTML = "Please enter a brand name";
  else {
    perfumes_t = perfumes.filter((perfume) => perfume.brand === nameOfBrand);
    console.log(perfumes_t);
    displayPerfumes(perfumes_t);
  }
}

function getRecommendations() {
  const budget = document.getElementById("budget").value;
  console.log(typeof budget);
  if (!isNaN(budget) && budget != "") {
    console.log("Its going inside");
    perfumes_t = perfumes.filter((perfume) => perfume.price <= budget);

    displayPerfumes(perfumes_t);
  } else {
    perfumeList.innerHTML = "Please enter a valid budget";
  }
}
