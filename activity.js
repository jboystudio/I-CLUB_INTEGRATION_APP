/*
function addCard() {
    var dateReported = document.getElementById('dateReported').value;
    var activityName = document.getElementById('activityName').value;
    var venue = document.getElementById('venue').value;
    var fileInput = document.getElementById('fileInput');
    var cardContainer = document.getElementById('cardContainer');

    if (dateReported && activityName && venue && fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function(event) {
            var fileContent = event.target.result;
            var card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${fileContent}" alt="Uploaded Image">
                <div class="cardContent">
                    <p>Date Reported: ${dateReported}</p>
                    <p>Activity Name: ${activityName}</p>
                    <p>Venue: ${venue}</p>
                </div>
            `;
            cardContainer.appendChild(card);
        };
    } else {
        alert('Please fill in all fields and select a file.');
    }
}

*/
//another javascript code
/*
function addCard() {
    var dateReported = document.getElementById('dateReported').value;
    var activityName = document.getElementById('activityName').value;
    var venue = document.getElementById('venue').value;
    var fileInput = document.getElementById('fileInput');
    var cardContainer = document.getElementById('cardContainer');

    if (dateReported && activityName && venue && fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function(event) {
            var fileContent = event.target.result;

            // Create an object representing the card data
            var cardData = {
                dateReported: dateReported,
                activityName: activityName,
                venue: venue,
                fileContent: fileContent
            };

            // Retrieve existing cards from local storage or initialize an empty array
            var existingCards = JSON.parse(localStorage.getItem('cards')) || [];

            // Add the new card data to the array
            existingCards.push(cardData);

            // Save the updated cards array back to local storage
            localStorage.setItem('cards', JSON.stringify(existingCards));

            // Create and append the card HTML
            var card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${fileContent}" alt="Uploaded Image">
                <div class="cardContent">
                    <p>Date Reported: ${dateReported}</p>
                    <p>Activity Name: ${activityName}</p>
                    <p>Venue: ${venue}</p>
                </div>
            `;
            cardContainer.appendChild(card);
        };
    } else {
        alert('Please fill in all fields and select a file.');
    }
}


// Function to display cards stored in local storage
function displayCards() {
    var cardContainer = document.getElementById('cardContainer');
    var existingCards = JSON.parse(localStorage.getItem('cards')) || [];

    existingCards.forEach(function(cardData) {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${cardData.fileContent}" alt="Uploaded Image">
            <div class="cardContent">
                <p>Date Reported: ${cardData.dateReported}</p>
                <p>Activity Name: ${cardData.activityName}</p>
                <p>Venue: ${cardData.venue}</p>
            </div>
        `;
        cardContainer.appendChild(card);
    });
}

// Call the displayCards function when the page loads
window.onload = function() {
    displayCards();
};

// Function to delete a card
function deleteCard(index) {
    var existingCards = JSON.parse(localStorage.getItem('cards')) || [];

    // Remove the card data at the specified index
    existingCards.splice(index, 1);

    // Save the updated cards array back to local storage
    localStorage.setItem('cards', JSON.stringify(existingCards));

    // Re-display the cards to reflect the changes
    displayCards();
}

// Function to display cards stored in local storage
function displayCards() {
    var cardContainer = document.getElementById('cardContainer');
    var existingCards = JSON.parse(localStorage.getItem('cards')) || [];

    cardContainer.innerHTML = ''; // Clear previous cards

    existingCards.forEach(function(cardData, index) {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${cardData.fileContent}" alt="Uploaded Image">
            <div class="cardContent">
                <p>Date Reported: ${cardData.dateReported}</p>
                <p>Activity Name: ${cardData.activityName}</p>
                <p>Venue: ${cardData.venue}</p>
                <button class="deleteBtn" onclick="deleteCard(${index})">Delete</button>
            </div>
        `;
        cardContainer.appendChild(card);
    });
}
*/
//Another javascript file
// Function to add a new card
/*
function addCard() {
    var dateReported = document.getElementById('dateReported').value;
    var activityName = document.getElementById('activityName').value;
    var venue = document.getElementById('venue').value;
    var fileInput = document.getElementById('fileInput');
    var cardContainer = document.getElementById('cardContainer');

    if (dateReported && activityName && venue && fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function(event) {
            var fileContent = event.target.result;

            // Create an object representing the card data
            var cardData = {
                dateReported: dateReported,
                activityName: activityName,
                venue: venue,
                fileContent: fileContent
            };

            // Retrieve existing cards from local storage or initialize an empty array
            var existingCards = JSON.parse(localStorage.getItem('cards')) || [];

            // Add the new card data to the array
            existingCards.push(cardData);

            // Save the updated cards array back to local storage
            localStorage.setItem('cards', JSON.stringify(existingCards));

            // Display the updated cards
            displayCards(existingCards);
        };
    } else {
        alert('Please fill in all fields and select a file.');
    }
}

// Function to delete a card
function deleteCard(index) {
    var existingCards = JSON.parse(localStorage.getItem('cards')) || [];

    // Remove the card data at the specified index
    existingCards.splice(index, 1);

    // Save the updated cards array back to local storage
    localStorage.setItem('cards', JSON.stringify(existingCards));

    // Display the updated cards
    displayCards(existingCards);
}

// Function to display cards stored in local storage
function displayCards(cards) {
    var cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; // Clear previous cards

    cards.forEach(function(cardData, index) {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${cardData.fileContent}" alt="Uploaded Image">
            <div class="cardContent">
                <p>Date Reported: ${cardData.dateReported}</p>
                <p>Activity Name: ${cardData.activityName}</p>
                <p>Venue: ${cardData.venue}</p>
                <button class="deleteBtn" onclick="deleteCard(${index})">Delete</button>
            </div>
        `;
        cardContainer.appendChild(card);
    });
}

// Call the displayCards function when the page loads
window.onload = function() {
    var existingCards = JSON.parse(localStorage.getItem('cards')) || [];
    displayCards(existingCards);
};
*/
/*
// Function to add a new card
function addCard() {
    var dateReported = document.getElementById('dateReported').value;
    var activityName = document.getElementById('activityName').value;
    var venue = document.getElementById('venue').value;
    var fileInputImage = document.getElementById('fileInputImage');
    var fileInputPDF = document.getElementById('fileInputPDF');
    var cardContainer = document.getElementById('cardContainer');

    if (dateReported && activityName && venue && (fileInputImage.files.length > 0 || fileInputPDF.files.length > 0)) {
        var file;
        if (fileInputImage.files.length > 0) {
            file = fileInputImage.files[0];
        } else {
            file = fileInputPDF.files[0];
        }
        
        var reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function(event) {
            var fileContent = event.target.result;

            // Create an object representing the card data
            var cardData = {
                dateReported: dateReported,
                activityName: activityName,
                venue: venue,
                fileContent: fileContent
            };

            // Retrieve existing cards from local storage or initialize an empty array
            var existingCards = JSON.parse(localStorage.getItem('cards')) || [];

            // Add the new card data to the array
            existingCards.push(cardData);

            // Save the updated cards array back to local storage
            localStorage.setItem('cards', JSON.stringify(existingCards));

            // Display the updated cards
            displayCards(existingCards);
        };
    } else {
        alert('Please fill in all fields and select a file.');
    }
}

// Function to delete a card
function deleteCard(index) {
    var existingCards = JSON.parse(localStorage.getItem('cards')) || [];

    // Remove the card data at the specified index
    existingCards.splice(index, 1);

    // Save the updated cards array back to local storage
    localStorage.setItem('cards', JSON.stringify(existingCards));

    // Display the updated cards
    displayCards(existingCards);
}

// Function to display cards stored in local storage
function displayCards(cards) {
    var cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; // Clear previous cards

    cards.forEach(function(cardData, index) {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${cardData.fileContent}" alt="Uploaded Image">
            <div class="cardContent">
                <p>Date Reported: ${cardData.dateReported}</p>
                <p>Activity Name: ${cardData.activityName}</p>
                <p>Venue: ${cardData.venue}</p>
                <button class="deleteBtn" onclick="deleteCard(${index})">Delete</button>
            </div>
        `;
        cardContainer.appendChild(card);
    });
}

// Call the displayCards function when the page loads
window.onload = function() {
    var existingCards = JSON.parse(localStorage.getItem('cards')) || [];
    displayCards(existingCards);
};

*/

function addCard() {
    var dateReported = document.getElementById('dateReported').value;
    var activityName = document.getElementById('activityName').value;
    var venue = document.getElementById('venue').value;
    var fileInputImage = document.getElementById('fileInputImage');
    var fileInputPDF = document.getElementById('fileInputPDF');
    var cardContainer = document.getElementById('cardContainer');

    if (dateReported && activityName && venue && (fileInputImage.files.length > 0 || fileInputPDF.files.length > 0)) {
        var file;
        if (fileInputImage.files.length > 0) {
            file = fileInputImage.files[0];
        } else {
            file = fileInputPDF.files[0];
        }
        
        var reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function(event) {
            var fileContent = event.target.result;
            var fileType = file.type; // Get the MIME type of the file

            // Create an object representing the card data
            var cardData = {
                dateReported: dateReported,
                activityName: activityName,
                venue: venue,
                fileContent: fileContent,
                fileType: fileType
            };

            // Retrieve existing cards from local storage or initialize an empty array
            var existingCards = JSON.parse(localStorage.getItem('cards')) || [];

            // Add the new card data to the array
            existingCards.push(cardData);

            // Save the updated cards array back to local storage
            localStorage.setItem('cards', JSON.stringify(existingCards));

            // Display the updated cards
            displayCards(existingCards);
        };

        reader.onerror = function(event) {
            console.error('File reading error:', event.target.error);
            alert('Error reading the file.');
        };
    } else {
        alert('Please fill in all fields and select a file.');
    }
}
