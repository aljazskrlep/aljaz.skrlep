document.addEventListener("DOMContentLoaded", function() {
  // Wait for DOM content to be fully loaded
  const head = document.querySelector('.head');
  
  // Function to show the head
  function showHead() {
    head.classList.add('show');
    // Hide the head after 5 seconds
    setTimeout(hideHead, 5000); // Adjust timing as needed
  }

  // Function to hide the head
  function hideHead() {
    head.classList.remove('show');
  }

  // Show the head after a delay
  setTimeout(showHead, 1000); // Adjust timing as needed
});
