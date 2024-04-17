document.addEventListener('DOMContentLoaded', function() {
    // Dynamically adding my student information
    const studentInfo = document.getElementById('studentInfo');
    studentInfo.textContent = 'Student ID: 200520470, Name: Simarpreet Kaur';

    const jokeButton = document.getElementById('jokeButton');
    const jokeOutput = document.getElementById('jokeOutput');

    //Fetching a joke by calling the API
    jokeButton.addEventListener('click', function() {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                jokeOutput.textContent = data.value;
            })
            //Error handling if the API call fails
            .catch(error => {
                console.error('Error fetching joke:', error);
                jokeOutput.textContent = 'Failed to load joke.';
            });
    });
});
