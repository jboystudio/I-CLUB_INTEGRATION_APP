// Function to fetch and display report content
function viewReport() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Define the URL of the report page
    var url = 'report.html';

    // Configure the request
    xhr.open('GET', url, true);

    // Define the callback function to handle the response
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // If the request is successful, inject the content into the report-content container
            document.getElementById('report-content').innerHTML = xhr.responseText;
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            // If the request fails, display an error message
            document.getElementById('report-content').innerHTML = '<p>Error loading report.</p>';
        }
    };

    // Send the request
    xhr.send();
}

// Function to generate report
function generateReport() {
    // Call the viewReport function to fetch the current report content
    viewReport();
}

// Add event listener to the "Generate Report" button
document.getElementById('generate-report-button').addEventListener('click', generateReport);
