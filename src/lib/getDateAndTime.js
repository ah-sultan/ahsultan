export function getDateAndTime() {
    // Get current date and time
    let currentDate = new Date();
    
    // Define month names array
    let monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
    
    // Extract date components
    let year = currentDate.getFullYear();
    let month = monthNames[currentDate.getMonth()];
    let day = currentDate.getDate().toString().padStart(2, '0');
    
    // Extract time components
    let hours = currentDate.getHours().toString().padStart(2, '0');
    let minutes = currentDate.getMinutes().toString().padStart(2, '0');
    let seconds = currentDate.getSeconds().toString().padStart(2, '0');
    
    // Combine date and time components into a string
    let dateTime = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
    
    return dateTime;
}

// Example usage
console.log(getDateAndTime());

