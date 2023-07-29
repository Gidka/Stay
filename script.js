var navBar = document.getElementById('navBar');

function togglebtn() {
  navBar.classList.toggle('hidemenu');
}


document.querySelector('.img__btn').addEventListener('click', function () {
  document.querySelector('.cont').classList.toggle('s--signup');
});


function openModal() {
  const modal = document.querySelector('.modal');
  const body = document.querySelector('body');
  modal.classList.remove('hidden');
  body.classList.add('modal-open');
}


function closeModal() {
  const modal = document.querySelector('.modal');
  const body = document.querySelector('body');
  modal.classList.add('hidden');
  body.classList.remove('modal-open');
}

const closeButton = document.querySelector('.close-modal');
closeButton.addEventListener('click', closeModal);

const loginButton = document.querySelector('.login-btn');
loginButton.addEventListener('click', openModal);


function redirectToPage(destination) {
  if (destination === "Greece") {
    window.location.href = "./pages/countries/greece.html";
  } else if (destination === "Switzerland" || destination === "switzerland") {
    window.location.href = "./pages/countries/switzerland.html";
  } else if (destination === "Austria" || destination === "austria") {
    window.location.href = "./pages/countries/austria.html";
  } else if (destination === "France" || destination === "france") {
    window.location.href = "./pages/countries/france.html";
  } else if (destination === "Poland" || destination === "poland") {
    window.location.href = "./pages/countries/poland.html";
  } else if (destination === "Netherlands" || destination === "netherlands") {
    window.location.href = "./pages/countries/netherlands.html";
  } else if (destination === "Germany" || destination === "germany") {
    window.location.href = "./pages/countries/germany.html";
  } else if (destination === "Italy" || destination === "italy") {
    window.location.href = "./pages/countries/italy.html";
  } else if (destination === "Spain" || destination === "spain") {
    window.location.href = "/pages/countries/spain.html";
  } else if (destination === "Ireland" || destination === "ireland") {
    window.location.href = "./pages/countries/ireland.html";
  } else if (destination === "Egypt" || destination === "egypt") {
    window.location.href = "./pages/countries/egypt.html";
  } else if (destination === "Turkey" || destination === "turkey") {
    window.location.href = "./pages/countries/turkey.html";
  } else if (destination === "Thailand" || destination === "thailand") {
    window.location.href = "./pages/countries/thailand.html";
  } else if (destination === "United States" || destination === "united states") {
    window.location.href = "../pages/countries/usa.html";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('searchForm');
  const locationInput = document.getElementById('locationInput');

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const enteredValue = locationInput.value.trim();
    redirectToPage(enteredValue);
  });
});

function openRecommendedPlacesPage(name) {
  window.location.href = `x.html?location=${encodeURIComponent(name)}`;
}



