
const currentURL = window.location.href;


const navigationLinks = document.querySelectorAll('.navigation a');

// Loop through the links and check if the href matches the current path
navigationLinks.forEach(link => {
    if (link.href === currentURL) {
    link.style.backgroundColor = '#000067';
    link.style.color = '#fadadd' // Change the background color for the active link
  }
});
