console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogImageContainer = document.getElementById('dog-image-container');
    const dogBreedList = document.getElementById('dog-breeds');
    const filterDropdown = document.getElementById('breed-dropdown');

    // Challenge 1: Fetching and Displaying Images
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const images = data.message;
            images.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                dogImageContainer.appendChild(img);
            });
        });

    // Challenge 2: Fetching and Displaying Dog Breeds
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                dogBreedList.appendChild(li);
            });
        });

    // Challenge 3: Changing Font Color on Click
    dogBreedList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue';  // Change color to your choice
        }
    });

    // Challenge 4: Filtering Breeds by First Letter
    filterDropdown.addEventListener('change', function (event) {
        const selectedLetter = event.target.value;
        filterBreeds(selectedLetter);
    });

    function filterBreeds(letter) {
        const breeds = dogBreedList.getElementsByTagName('li');

        for (let i = 0; i < breeds.length; i++) {
            const breed = breeds[i].textContent.toLowerCase();
            if (breed.startsWith(letter)) {
                breeds[i].style.display = 'block';
            } else {
                breeds[i].style.display = 'none';
            }
        }
    }
});

