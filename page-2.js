const proxy = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json';
const form = document.querySelector('form.search');
const posesGrid = document.querySelector('.wrapper .poses');

async function fetchPoses() {
    const res = await fetch(`${proxy}${endpoint}`);
    const data = await res.json();
    return data;
}

async function fetchAndDisplay() {
    const allPoses = await fetchPoses();
    console.log(allPoses);
}


fetchAndDisplay();