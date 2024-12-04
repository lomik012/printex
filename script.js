document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('tbody tr');
  
    rows.forEach(row => {
      row.addEventListener('mouseenter', () => {
        row.style.backgroundColor = '#ccc'; // zvýraznění řádku
      });
  
      row.addEventListener('mouseleave', () => {
        row.style.backgroundColor = ''; // resetování barvy
      });
    });
  });
  