// Get canvas element and context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


// Variables to store bullet position and speed
let bulletX = canvas.height/2 ;
let bulletY = canvas.width/2;
let bulletSpeed = 350;

// Flag to control bullet movement
let bulletFired = false;

// Event listener for mouse click
canvas.addEventListener("click", (e) => {
    // Calculate the angle between the mouse and the bullet
    const mouseX = e.clientX - canvas.getBoundingClientRect().left;
    const mouseY = e.clientY - canvas.getBoundingClientRect().top;
    const angle = Math.atan2(mouseY - bulletY, mouseX - bulletX);

    // Set the bullet's velocity based on the angle
    const bulletVelocityX = Math.cos(angle) * bulletSpeed;
    const bulletVelocityY = Math.sin(angle) * bulletSpeed;

    // Update the bullet's position and flag
    bulletX += bulletVelocityX;
    bulletY += bulletVelocityY;
    bulletFired = true;

    // Request an animation frame to animate the bullet
    requestAnimationFrame(animateBullet);
});

// Function to animate the bullet
function animateBullet() {
    if (bulletFired) {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the bullet
        ctx.beginPath();
        ctx.arc(bulletX, bulletY, 5, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();

        // Move the bullet
        bulletX += bulletVelocityX;
        bulletY += bulletVelocityY;

        // Check if the bullet is out of bounds
        if (bulletX < 0 || bulletX > canvas.width || bulletY < 0 || bulletY > canvas.height) {
            bulletFired = false; // Reset the bullet
        } else {
            // Continue animating
            requestAnimationFrame(animateBullet);
        }
    }
}