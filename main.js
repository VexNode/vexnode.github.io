// ====================================================================
// 🌙 DARK MODE
// ====================================================================
const toggleButton = document.getElementById('dark-mode-toggle');

if (toggleButton) {
  
  // Mavzuni qo'llash funksiyasi
  const applyTheme = () => {
    const isDark = localStorage.getItem('theme') === 'dark';
    document.body.classList.toggle('dark', isDark);
    toggleButton.textContent = isDark ? '☀️' : '🌙';
  };
  
  applyTheme(); // Sahifa yuklanganda mavzuni qo'llash

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleButton.textContent = isDark ? '☀️' : '🌙';
  });
}

// ============================================
// DARS JADVALI FUNKSIYALARI
// ============================================

// Barcha sinflar uchun dars jadvallari
const classSchedules = {
  5: [
    { day: "Dushanba", lessons: ["Ona tili", "Matematika", "Fizika", "Tarix", "Texnologiya"] },
    { day: "Seshanba", lessons: ["Ingliz tili", "Kimyo", "Matematika", "Adabiyot", "Jismoniy tarbiya"] },
    { day: "Chorshanba", lessons: ["Biologiya", "Ona tili", "Informatika", "Tarix", "Ingliz tili"] },
    { day: "Payshanba", lessons: ["Matematika", "Fizika", "Adabiyot", "Geografiya", "Texnologiya"] },
    { day: "Juma", lessons: ["Ona tili", "Ingliz tili", "Matematika", "Kimyo", "Jismoniy tarbiya"] }
  ],
  6: [
    { day: "Dushanba", lessons: ["Ona tili", "Biologiya", "Fizika", "Matematika", "Adabiyot"] },
    { day: "Seshanba", lessons: ["Geografiya", "Kimyo", "Matematika", "Informatika", "Ona tili"] },
    { day: "Chorshanba", lessons: ["Ingliz tili", "Tarix", "Fizika", "Adabiyot", "Jismoniy tarbiya"] },
    { day: "Payshanba", lessons: ["Matematika", "Ona tili", "Biologiya", "Ingliz tili", "Texnologiya"] },
    { day: "Juma", lessons: ["Kimyo", "Tarix", "Matematika", "Geografiya", "Informatika"] }
  ],
  7: [
    { day: "Dushanba", lessons: ["Matematika", "Fizika", "Informatika", "Tarix", "Kimyo"] },
    { day: "Seshanba", lessons: ["Ingliz tili", "Adabiyot", "Matematika", "Jismoniy tarbiya", "Texnologiya"] },
    { day: "Chorshanba", lessons: ["Ona tili", "Biologiya", "Fizika", "Ingliz tili", "Geografiya"] },
    { day: "Payshanba", lessons: ["Kimyo", "Matematika", "Adabiyot", "Tarix", "Informatika"] },
    { day: "Juma", lessons: ["Fizika", "Ona tili", "Biologiya", "Jismoniy tarbiya", "Ingliz tili"] }
  ],
  8: [
    { day: "Dushanba", lessons: ["Ona tili", "Matematika", "Kimyo", "Fizika", "Informatika"] },
    { day: "Seshanba", lessons: ["Adabiyot", "Tarix", "Biologiya", "Geografiya", "Ingliz tili"] },
    { day: "Chorshanba", lessons: ["Matematika", "Fizika", "Ona tili", "Kimyo", "Jismoniy tarbiya"] },
    { day: "Payshanba", lessons: ["Ingliz tili", "Adabiyot", "Tarix", "Biologiya", "Texnologiya"] },
    { day: "Juma", lessons: ["Informatika", "Geografiya", "Matematika", "Fizika", "Ona tili"] }
  ],
  9: [
    { day: "Dushanba", lessons: ["Fizika", "Matematika", "Ona tili", "Tarix", "Kimyo"] },
    { day: "Seshanba", lessons: ["Informatika", "Adabiyot", "Geografiya", "Biologiya", "Jismoniy tarbiya"] },
    { day: "Chorshanba", lessons: ["Matematika", "Fizika", "Ingliz tili", "Kimyo", "Tarix"] },
    { day: "Payshanba", lessons: ["Ona tili", "Biologiya", "Adabiyot", "Informatika", "Geografiya"] },
    { day: "Juma", lessons: ["Kimyo", "Matematika", "Fizika", "Ingliz tili", "Jismoniy tarbiya"] }
  ],
  10: [
    { day: "Dushanba", lessons: ["Fizika", "Matematika", "Kimyo", "Tarix", "Informatika"] },
    { day: "Seshanba", lessons: ["Adabiyot", "Ona tili", "Biologiya", "Geografiya", "Ingliz tili"] },
    { day: "Chorshanba", lessons: ["Matematika", "Fizika", "Ingliz tili", "Kimyo", "Tarix"] },
    { day: "Payshanba", lessons: ["Ona tili", "Biologiya", "Adabiyot", "Informatika", "Jismoniy tarbiya"] },
    { day: "Juma", lessons: ["Kimyo", "Geografiya", "Fizika", "Matematika", "Ingliz tili"] }
  ],
  11: [
    { day: "Dushanba", lessons: ["Ona tili", "Matematika", "Fizika", "Ingliz tili", "Tarix"] },
    { day: "Seshanba", lessons: ["Kimyo", "Adabiyot", "Informatika", "Geografiya", "Biologiya"] },
    { day: "Chorshanba", lessons: ["Matematika", "Fizika", "Ingliz tili", "Kimyo", "Tarix"] },
    { day: "Payshanba", lessons: ["Ona tili", "Biologiya", "Adabiyot", "Informatika", "Jismoniy tarbiya"] },
    { day: "Juma", lessons: ["Kimyo", "Geografiya", "Fizika", "Matematika", "Ingliz tili"] }
  ]
};

// Jadvalni ko'rsatish funksiyasi
function showSchedule(classNumber) {
  // Barcha tugmalardan active classni olib tashlash
  const allButtons = document.querySelectorAll('.class-btn');
  allButtons.forEach(btn => btn.classList.remove('active'));
  
  // Tanlangan tugmaga active class qo'shish
  const selectedButton = document.querySelector(`.class-btn[data-class="${classNumber}"]`);
  if (selectedButton) {
    selectedButton.classList.add('active');
  }
  
  // Jadval ma'lumotlarini olish
  const scheduleData = classSchedules[classNumber];
  const container = document.getElementById('schedule-container');
  
  if (!scheduleData) {
    container.innerHTML = '<p class="error-message">Jadval topilmadi</p>';
    return;
  }
  
  // Jadval HTML ni yaratish
  let tableHTML = `
    <table class="schedule-table">
      <thead>
        <tr>
          <th>Kun</th>
          <th>1-dars</th>
          <th>2-dars</th>
          <th>3-dars</th>
          <th>4-dars</th>
          <th>5-dars</th>
        </tr>
      </thead>
      <tbody>
  `;
  
  // Har bir kun uchun qator yaratish
  scheduleData.forEach(daySchedule => {
    tableHTML += '<tr>';
    tableHTML += `<td>${daySchedule.day}</td>`;
    
    daySchedule.lessons.forEach(lesson => {
      tableHTML += `<td>${lesson}</td>`;
    });
    
    tableHTML += '</tr>';
  });
  
  tableHTML += '</tbody></table>';
  
  // Jadvalni ko'rsatish
  container.innerHTML = tableHTML;
  
  // Smooth scroll (agar kerak bo'lsa)
  container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Sahifa yuklanganda 5-sinf jadvalini ko'rsatish
document.addEventListener('DOMContentLoaded', function() {
  // 5-sinf tugmasiga active class qo'shish
  const defaultButton = document.querySelector('.class-btn[data-class="5"]');
  if (defaultButton) {
    defaultButton.classList.add('active');
  }
  
  // 5-sinf jadvalini yuklash
  showSchedule(5);
});

// Boshlang‘ich jadval
renderTable(selectClass.value);

// Sinf tanlanganda jadvalni yangilash
selectClass.addEventListener('change', e => renderTable(e.target.value));

// QIDIRUV FUNKSIYASI (To'liq qidiruv)
const searchInput = document.getElementById('search-input');

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const filter = e.target.value.toLowerCase();
    
    // Saytdagi qidirilishi kerak bo'lgan barcha elementlarni tanlang
    const searchElements = document.querySelectorAll('.news-card, .project-card, .lesson-table tr, .about p, .contact-info li'); 

    searchElements.forEach(element => {
      const textContent = element.textContent.toLowerCase();
      
      if (textContent.includes(filter)) {
        element.style.display = ""; // Agar matn qidiruv so'ziga mos kelsa, ko'rsat
      } else {
        element.style.display = "none"; // Aks holda yashir
      }
    });
    
    // Jadval qatorlari uchun alohida logika
    const tableRows = document.querySelectorAll('.lesson-table tbody tr');
    tableRows.forEach(row => {
      const rowText = row.textContent.toLowerCase();
      if (filter === '' || rowText.includes(filter)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
}

