
    document.addEventListener('DOMContentLoaded', () => {
      const bubbles = document.querySelectorAll('.bubble');
      bubbles.forEach(bubble => {
        const randomX = Math.random() * 100; // Generuje náhodnou pozici X
        const randomSize = Math.random() * (60 - 20) + 20; // Generuje náhodnou velikost bubliny
        bubble.style.left = `${randomX}vw`; // Nastavuje náhodnou pozici bubliny
        bubble.style.width = `${randomSize}px`; // Nastavuje náhodnou velikost bubliny
        bubble.style.height = bubble.style.width; // Výška je stejná jako šířka pro kulatou bublinu
      });
    });
