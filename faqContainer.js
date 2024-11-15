 function toggleFaq(element) {
    // Find the content associated with the clicked header
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.faq-arrow');
    
    // Toggle display of the content
    if (content.style.display === 'block') {
      content.style.display = 'none';
      arrow.src = 'arrow.png'; // Replace with actual arrow down path
    } else {
      content.style.display = 'block';
      arrow.src = 'arrow-up.png'; // Replace with actual arrow up path
    }
  }
