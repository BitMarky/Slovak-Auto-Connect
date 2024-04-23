document.addEventListener("DOMContentLoaded", function() {
   
    fetch("json/locations_json/locations.json") 
        .then(response => response.json())
        .then(data => {
           
            const bratislavaEvent = data.events.find(event => event.location === "Bratislava");

            if (bratislavaEvent) {
                
                document.getElementById("about-bratislava").innerHTML = `
                    <h2>About Bratislava Events</h2>
                    <p>Venue: ${bratislavaEvent.venue}</p>
                    <p>Start Time: ${bratislavaEvent.start_time}</p>
                    <p>End Time: ${bratislavaEvent.end_time}</p>
                    <p>Bands: ${bratislavaEvent.bands.join(", ")}</p>
                    <p>Days: ${bratislavaEvent.days.join(", ")}</p>
                `;
            }
        })
        .catch(error => {
            console.error("Error fetching JSON data:", error);
        });
});
