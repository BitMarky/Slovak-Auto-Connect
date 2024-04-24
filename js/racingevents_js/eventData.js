document.addEventListener('DOMContentLoaded', function() {
    fetch('json/racingevents_json/events.json')
      .then(response => response.json())
      .then(data => {
        const eventCard = document.querySelector('.ralley-event-card');
        const nameElement = document.getElementById('name');
        const locationElement = document.getElementById('location');
        const dateElement = document.getElementById('date');
        const timeElement = document.getElementById('time');
        const descriptionElement = document.getElementById('description');
        const imageElement = document.querySelector('.event-card-img img');

        // Assuming the JSON contains an array of events
        const event = data[0]; // Adjust this if you want to display multiple events

        nameElement.textContent = event.name;
        locationElement.textContent = `${event.location.track}, ${event.location.city}`;
        dateElement.textContent = `${event.date.day} ${event.date.month} ${event.date.year}`;
        timeElement.textContent = event.time;
        descriptionElement.textContent = event.description;
        imageElement.src = event.image;
      })
      .catch(error => console.error('Error fetching data:', error));
});
