document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('lastModified').textContent = document.lastModified;

  const temples = [
      {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
          templeName: "Birmingham Alabama Temple",
          location: "Birmingham, Alabama",
          dedicated: "2000, September, 3",
          area: 10700,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/birmingham-alabama-temple/birmingham-alabama-temple-21774.jpg"
      },
      {
          templeName: "Anchorage Alaska Temple",
          location: "Anchorage, Alaska",
          dedicated: "1999, January, 9",
          area: 11937,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-44883.jpg"
      },
      {
          templeName: "Bangkok Thailand Temple",
          location: "Bangkok, Thailand",
          dedicated: "2023, October, 22",
          area: 48525,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037.jpg"
      },
  ];

  const templeList = document.querySelector(".temple-list");

  function createTempleCard(filteredTemples) {
      templeList.innerHTML = '';
      filteredTemples.forEach(temple => {
          const templeCard = document.createElement('div');
          templeCard.className = 'temple-card';

          const templeName = document.createElement('h3');
          templeName.textContent = temple.templeName;
          templeCard.appendChild(templeName);

          const templeText = document.createElement('div');
          templeText.className = 'temple-text';

          const templeLocation = document.createElement('p');
          templeLocation.textContent = `Location: ${temple.location}`;
          templeText.appendChild(templeLocation);

          const templeDedicated = document.createElement('p');
          templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
          templeText.appendChild(templeDedicated);

          const templeArea = document.createElement('p');
          templeArea.textContent = `Size: ${temple.area} sq ft`;
          templeText.appendChild(templeArea);

          templeCard.appendChild(templeText);

          const templeImage = document.createElement('img');
          templeImage.src = temple.imageUrl;
          templeImage.alt = `The beautiful ${temple.templeName}`;
          templeImage.loading = 'lazy';
          templeCard.appendChild(templeImage);

          templeList.appendChild(templeCard);
      });
  }

  createTempleCard(temples);

  const home = document.querySelector("a[href='#home']");
  const oldTemples = document.querySelector("a[href='#old']");
  const newTemples = document.querySelector("a[href='#new']");
  const largeTemples = document.querySelector("a[href='#large']");
  const smallTemples = document.querySelector("a[href='#small']");

  home.addEventListener('click', () => createTempleCard(temples));

  oldTemples.addEventListener('click', () => {
      const olderTemples = temples.filter(temple => {
          const year = parseInt(temple.dedicated.split(',')[0], 10);
          return year < 1900;
      });
      createTempleCard(olderTemples);
  });

  newTemples.addEventListener('click', () => {
      const newerTemples = temples.filter(temple => {
          const year = parseInt(temple.dedicated.split(',')[0], 10);
          return year > 2000;
      });
      createTempleCard(newerTemples);
  });

  largeTemples.addEventListener('click', () => {
      const largerTemples = temples.filter(temple => temple.area > 90000);
      createTempleCard(largerTemples);
  });

  smallTemples.addEventListener('click', () => {
      const smallerTemples = temples.filter(temple => temple.area <= 100000);
      createTempleCard(smallerTemples);
  });
});
