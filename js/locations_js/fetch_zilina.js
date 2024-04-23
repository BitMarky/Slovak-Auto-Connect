document.addEventListener("DOMContentLoaded", function() {
    fetch("json/locations_json/locations.json")
        .then(response => response.json())
        .then(data => {
            const zilinaEvent = data.events.find(event => event.location === "Žilina"); 

            if (zilinaEvent) {
                document.getElementById("about-zilina").innerHTML = `
                    <h2>About Žilina Events</h2>
                    <p>Venue: ${zilinaEvent.venue}</p>
                    <p>Start Time: ${zilinaEvent.start_time}</p>
                    <p>End Time: ${zilinaEvent.end_time}</p>
                    <p>Bands: ${zilinaEvent.bands.join(", ")}</p>
                    <p>Days: ${zilinaEvent.days.join(", ")}</p>
                `;
            } else {
                console.error("Žilina event not found."); 
            }
        })
        .catch(error => {
            console.error("Error fetching JSON data:", error); 
        });
});
