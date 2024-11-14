// JavaScript for Search Bar
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('movie-search').value;
    if (query) {
        alert(`Searching for: ${query}`);
        // Here you can implement search functionality or API call
    } else {
        alert('Please enter a search term');
    }
});

// JavaScript for Featured Movies (Optional Expansion)
const movieCards = document.querySelectorAll('.movie-card');

movieCards.forEach(card => {
    card.addEventListener('click', () => {
        alert('You clicked on a movie card!');
        // Add functionality to navigate to movie details page if needed
    });
});

const movieCard = document.querySelectorAll('.movie-c');

movieCard.forEach(card => {
    card.addEventListener('click', () => {
        alert('You clicked on a Event!');
        // Add functionality to navigate to movie details page if needed
    });
});

const movieCar = document.querySelectorAll('.movie-ca');

movieCar.forEach(card => {
    card.addEventListener('click', () => {
        alert('You clicked on a PrimerMovie!');
        // Add functionality to navigate to movie details page if needed
    });
});

const movieCa = document.querySelectorAll('.movie-car');

movieCa.forEach(card => {
    card.addEventListener('click', () => {
        alert('You clicked on a your Music!');
        // Add functionality to navigate to movie details page if needed
    });
});

const movieC = document.querySelectorAll('.movie-carr');

movieC.forEach(card => {
    card.addEventListener('click', () => {
        alert('You clicked on a Games!');
        // Add functionality to navigate to movie details page if needed
    });
});

// const movieGrid = document.querySelector(".movie-grid");
// const scrollAmount = 200; // Adjust scroll distance

// function scrollLeft() {
//     movieGrid.scrollBy({
//         left: -scrollAmount,
//         behavior: "smooth"
//     });
// }

// function scrollRight() {
//     movieGrid.scrollBy({
//         left: scrollAmount,
//         behavior: "smooth"
//     });
// }

        // const movieGrid = document.getElementById('movieGrid');
        // const scrollAmount = 300;

        // function scrollLeft() {
        //     movieGrid.scrollBy({
        //         left: -scrollAmount,
        //         behavior: 'smooth'
        //     });
        // }

        // function scrollRight() {
        //     movieGrid.scrollBy({
        //         left: scrollAmount,
        //         behavior: 'smooth'
        //     });
        // }


// const movieList = document.getElementById('movieGrid');
// const scrollAmount = 300; // Adjust scroll distance based on your card width

// function scrollRight() {
//     // Check if there's more content to the right to scroll
//     if (movieGrid.scrollLeft + movieGrid.clientWidth < movieGrid.scrollWidth) {
//         movieGrid.scrollLeft += scrollAmount;
//     }
// }

// function scrollLeft() {
//     // Check if there's more content to the left to scroll
//     if (movieGrid.scrollLeft > 0) {
//         movieGrid.scrollLeft -= scrollAmount;
//     }
// }

// const movieGrid = document.getElementById('movieGrid');
// const scrollAmount = -400;
// const sc=+400; // Adjust this value based on the width of your movie card

// function scrollRight() {
//     movieGrid.scrollLeft -= scrollAmount;
// }

// function scrollLeft() {
//     movieGrid.scrollLeft += scrollAmount;
// }



