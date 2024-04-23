document.addEventListener("DOMContentLoaded", function() {
    fetch("json/locations_json/locations.json")
        .then(response => response.json())
        .then(data => {
            const pezinokEvent = data.events.find(event => event.location === "Pezinok");

            if (pezinokEvent) {
                document.getElementById("about-pezinok").innerHTML = `
                    <h2>About Pezinok Events</h2>
                    <p>Venue: ${pezinokEvent.venue}</p>
                    <p>Start Time: ${pezinokEvent.start_time}</p>
                    <p>End Time: ${pezinokEvent.end_time}</p>
                    <p>Bands: ${pezinokEvent.bands.join(", ")}</p>
                    <p>Days: ${pezinokEvent.days.join(", ")}</p>
                `;
            }
        })
        .catch(error => {
            console.error("Error fetching JSON data:", error);
        });
});
