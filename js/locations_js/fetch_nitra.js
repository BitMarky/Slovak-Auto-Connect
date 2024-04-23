document.addEventListener("DOMContentLoaded", function() {
    fetch("json/locations_json/locations.json")
        .then(response => response.json())
        .then(data => {
            const nitraEvent = data.events.find(event => event.location === "Nitra");

            if (nitraEvent) {
                document.getElementById("about-nitra").innerHTML = `
                    <h2>About Nitra Events</h2>
                    <p>Venue: ${nitraEvent.venue}</p>
                    <p>Start Time: ${nitraEvent.start_time}</p>
                    <p>End Time: ${nitraEvent.end_time}</p>
                    <p>Bands: ${nitraEvent.bands.join(", ")}</p>
                    <p>Days: ${nitraEvent.days.join(", ")}</p>
                `;
            }
        })
        .catch(error => {
            console.error("Error fetching JSON data:", error);
        });
});
