// ============================================
// TEST TIZIMI - ZAMONAVIY VERSIYA
// ============================================

// Test ma'lumotlari
const testData = {
  'matematika': {
    title: '🔢 Matematika',
    icon: '🔢',
    time: 30,
    questions: [
      {
        question: '5 + 3 = ?',
        answers: ['6', '7', '8', '9'],
        correct: 2
      },
      {
        question: '10 × 4 = ?',
        answers: ['30', '40', '45', '50'],
        correct: 1
      },
      {
        question: '25 ÷ 5 = ?',
        answers: ['3', '4', '5', '6'],
        correct: 2
      },
      {
        question: '7² = ?',
        answers: ['14', '21', '49', '64'],
        correct: 2
      },
      {
        question: '√81 = ?',
        answers: ['7', '8', '9', '10'],
        correct: 2
      }
    ]
  },
  'ona-tili': {
    title: '📖 Ona tili',
    icon: '📖',
    time: 25,
    questions: [
      {
        question: '"Oqilgan" so\'zining negizi qanday?',
        answers: ['oq-', 'oqi-', 'oqil-', 'oqila-'],
        correct: 0
      },
      {
        question: 'Quyidagilardan qaysi birida undosh harf ishtirok etmagan?',
        answers: ['kitob', 'ota', 'ona', 'u'],
        correct: 3
      },
      {
        question: '"Yaxshi" so\'zining qarama-qarshisi?',
        answers: ['yomon', 'zo\'r', 'a\'lo', 'yaxshi'],
        correct: 0
      },
      {
        question: 'Gapning oxirida qanday belgi qo\'yiladi?',
        answers: ['nuqta', 'vergul', 'nuqta-vergul', 'undov'],
        correct: 0
      },
      {
        question: '"Maktab" so\'zi nechta harfdan iborat?',
        answers: ['5', '6', '7', '8'],
        correct: 1
      }
    ]
  },
  'ingliz-tili': {
    title: '🌍 Ingliz tili',
    icon: '🌍',
    time: 35,
    questions: [
      {
        question: 'What is the past tense of "go"?',
        answers: ['goes', 'went', 'gone', 'going'],
        correct: 1
      },
      {
        question: 'Choose the correct article: "___ apple"',
        answers: ['a', 'an', 'the', 'no article'],
        correct: 1
      },
      {
        question: 'What color is the sky?',
        answers: ['red', 'green', 'blue', 'yellow'],
        correct: 2
      },
      {
        question: 'How many days are in a week?',
        answers: ['5', '6', '7', '8'],
        correct: 2
      },
      {
        question: 'What is "hello" in Uzbek?',
        answers: ['xayr', 'rahmat', 'salom', 'qalay'],
        correct: 2
      }
    ]
  },
  'fizika': {
    title: '⚛️ Fizika',
    icon: '⚛️',
    time: 30,
    questions: [
      {
        question: 'Yorug\'lik tezligi qanday?',
        answers: ['300 000 km/s', '150 000 km/s', '500 000 km/s', '1 000 000 km/s'],
        correct: 0
      },
      {
        question: 'Suvning qaynash harorati qancha?',
        answers: ['0°C', '50°C', '100°C', '200°C'],
        correct: 2
      },
      {
        question: 'Yerning tortishish tezlanishi qanday?',
        answers: ['8.8 m/s²', '9.8 m/s²', '10.8 m/s²', '11.8 m/s²'],
        correct: 1
      },
      {
        question: 'Tok kuchi qanday o\'lchanadi?',
        answers: ['Vatt', 'Amper', 'Volt', 'Om'],
        correct: 1
      },
      {
        question: 'Quyidagilardan qaysi birini fizika o\'rganmaydi?',
        answers: ['Harakat', 'Issiqlik', 'O\'simliklar', 'Yorug\'lik'],
        correct: 2
      }
    ]
  },
  'kimyo': {
    title: '🧪 Kimyo',
    icon: '🧪',
    time: 25,
    questions: [
      {
        question: 'Suvning kimyoviy formulasi?',
        answers: ['H2O', 'CO2', 'O2', 'N2'],
        correct: 0
      },
      {
        question: 'Vodorodning atom raqami?',
        answers: ['0', '1', '2', '3'],
        correct: 1
      },
      {
        question: 'Oltinning kimyoviy belgisi?',
        answers: ['Go', 'Gd', 'Au', 'Ag'],
        correct: 2
      },
      {
        question: 'pH neytral qiymati?',
        answers: ['0', '7', '14', '21'],
        correct: 1
      },
      {
        question: 'Karbonat angidrid formulasi?',
        answers: ['CO', 'CO2', 'C2O', 'C3O'],
        correct: 1
      }
    ]
  },
  'biologiya': {
    title: '🧬 Biologiya',
    icon: '🧬',
    time: 30,
    questions: [
      {
        question: 'Inson tanasida nechta suyak bor?',
        answers: ['106', '206', '306', '406'],
        correct: 1
      },
      {
        question: 'Qonni qaysi a\'zo tozalaydi?',
        answers: ['Jigar', 'Yurak', 'Buyrak', 'O\'pka'],
        correct: 2
      },
      {
        question: 'Fotosintez qayerda sodir bo\'ladi?',
        answers: ['Mitoxondriya', 'Xloroplast', 'Yadro', 'Sitoplazma'],
        correct: 1
      },
      {
        question: 'DNK to\'liq nomi?',
        answers: ['Deoksiribonuklein kislota', 'Ribonuklein kislota', 'Aminokislota', 'Protein'],
        correct: 0
      },
      {
        question: 'Odamning eng katta a\'zosi?',
        answers: ['Yurak', 'Jigar', 'Teri', 'O\'pka'],
        correct: 2
      }
    ]
  },
  'katta-test': {
    title: '🎯 Kombinatsion test',
    icon: '🎯',
    time: 60,
    questions: [
      // Matematika (5 ta)
      {
        question: '15 + 27 = ?',
        answers: ['40', '41', '42', '43'],
        correct: 2
      },
      {
        question: '8 × 7 = ?',
        answers: ['54', '55', '56', '57'],
        correct: 2
      },
      {
        question: '144 ÷ 12 = ?',
        answers: ['10', '11', '12', '13'],
        correct: 2
      },
      {
        question: '9² = ?',
        answers: ['71', '81', '91', '101'],
        correct: 1
      },
      {
        question: '√144 = ?',
        answers: ['10', '11', '12', '13'],
        correct: 2
      },
      // Ona tili (5 ta)
      {
        question: '"Bilim" so\'zining sinonimi?',
        answers: ['ilm', 'savad', 'xotira', 'tushuncha'],
        correct: 0
      },
      {
        question: 'O\'zbek alifbosida nechta harf bor?',
        answers: ['28', '29', '30', '31'],
        correct: 1
      },
      {
        question: '"Yoz" fe\'lining kelasi zamoni?',
        answers: ['yozdi', 'yozadi', 'yozmoqda', 'yozilgan'],
        correct: 1
      },
      {
        question: '"Quyosh" so\'zining antonimi?',
        answers: ['oy', 'yulduz', 'tun', 'bulut'],
        correct: 2
      },
      {
        question: '"Maktab" so\'zining ko\'plik shakli?',
        answers: ['maktablar', 'maktablarimiz', 'maktabda', 'maktabga'],
        correct: 0
      },
      // Ingliz tili (5 ta)
      {
        question: 'I ___ to school every day.',
        answers: ['go', 'goes', 'going', 'went'],
        correct: 0
      },
      {
        question: 'She ___ English very well.',
        answers: ['speak', 'speaks', 'speaking', 'spoke'],
        correct: 1
      },
      {
        question: 'What is the opposite of "hot"?',
        answers: ['warm', 'cool', 'cold', 'freezing'],
        correct: 2
      },
      {
        question: 'The capital of Uzbekistan?',
        answers: ['Samarkand', 'Bukhara', 'Tashkent', 'Andijan'],
        correct: 2
      },
      {
        question: 'How many months in a year?',
        answers: ['10', '11', '12', '13'],
        correct: 2
      },
      // Fizika (5 ta)
      {
        question: 'Kuchning birligi?',
        answers: ['Nyuton', 'Joul', 'Vatt', 'Paskal'],
        correct: 0
      },
      {
        question: 'Elektr zaryadining birligi?',
        answers: ['Kulon', 'Vatt', 'Volt', 'Amper'],
        correct: 0
      },
      {
        question: 'Suvning muzlash harorati?',
        answers: ['-10°C', '0°C', '10°C', '100°C'],
        correct: 1
      },
      {
        question: 'Ovoz tezligi havoda?',
        answers: ['340 m/s', '300 m/s', '400 m/s', '500 m/s'],
        correct: 0
      },
      {
        question: 'Mexanik ishning birligi?',
        answers: ['Joul', 'Nyuton', 'Vatt', 'Paskal'],
        correct: 0
      },
      // Kimyo (5 ta)
      {
        question: 'Kislorodning kimyoviy belgisi?',
        answers: ['O', 'K', 'H', 'N'],
        correct: 0
      },
      {
        question: 'Sulfat kislota formulasi?',
        answers: ['H2SO4', 'HCl', 'HNO3', 'H3PO4'],
        correct: 0
      },
      {
        question: 'Tuzning formulasi?',
        answers: ['NaCl', 'KCl', 'CaCl2', 'MgCl2'],
        correct: 0
      },
      {
        question: 'Mendeleev jadvalida nechta element bor?',
        answers: ['98', '108', '118', '128'],
        correct: 2
      },
      {
        question: 'Natriyning kimyoviy belgisi?',
        answers: ['Na', 'N', 'S', 'K'],
        correct: 0
      },
      // Biologiya (5 ta)
      {
        question: 'Yurak qaysi sistemaga kiradi?',
        answers: ['Nerv sistemasi', 'Qon aylanish sistemasi', 'Nafas olish sistemasi', 'Hazm qilish sistemasi'],
        correct: 1
      },
      {
        question: 'O\'pka qaysi sistemaga kiradi?',
        answers: ['Nerv sistemasi', 'Qon aylanish sistemasi', 'Nafas olish sistemasi', 'Hazm qilish sistemasi'],
        correct: 2
      },
      {
        question: 'Insulin qayerda ishlab chiqariladi?',
        answers: ['Jigar', 'Me\'da', 'Oshqozon osti bezi', 'Buyrak'],
        correct: 2
      },
      {
        question: 'Qonning rangini nima beradi?',
        answers: ['Gemoglobin', 'Plazma', 'Trombotsit', 'Leykotsit'],
        correct: 0
      },
      {
        question: 'Viruslar hujayrami?',
        answers: ['Ha', 'Yo\'q', 'Qisman', 'Ba\'zilari'],
        correct: 1
      }
    ]
  }
};

// Test tizimi o'zgaruvchilari
let currentClass = 5;
let currentSubject = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let timer = null;
let timeLeft = 0;
let startTime = null;

// Sahifa yuklanganda
document.addEventListener('DOMContentLoaded', function() {
  loadSubjects(5);
});

// Sinf tanlash
function selectTestClass(classNum) {
  currentClass = classNum;
  
  // Tugmalarni yangilash
  document.querySelectorAll('.class-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  const activeBtn = document.querySelector(`.class-btn[data-class="${classNum}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  
  // Fanlarni yuklash
  loadSubjects(classNum);
}

// Fanlarni yuklash
function loadSubjects(classNum) {
  const subjectsGrid = document.getElementById('subjects-grid');
  
  let html = '';
  
  // Fanlar ro'yxati
  const subjects = [
    { id: 'matematika', name: 'Matematika', icon: '🔢', questions: 15 + classNum, time: 20 + classNum, desc: `${classNum}-sinf uchun matematika testlari` },
    { id: 'ona-tili', name: 'Ona tili', icon: '📖', questions: 15 + classNum, time: 20 + classNum, desc: `${classNum}-sinf uchun ona tili testlari` },
    { id: 'ingliz-tili', name: 'Ingliz tili', icon: '🌍', questions: 15 + classNum, time: 20 + classNum, desc: `${classNum}-sinf uchun ingliz tili testlari` }
  ];
  
  // Katta sinflar uchun qo'shimcha fanlar
  if (classNum >= 7) {
    subjects.push({ id: 'fizika', name: 'Fizika', icon: '⚛️', questions: 15 + classNum, time: 20 + classNum, desc: `${classNum}-sinf uchun fizika testlari` });
  }
  
  if (classNum >= 8) {
    subjects.push({ id: 'kimyo', name: 'Kimyo', icon: '🧪', questions: 15 + classNum, time: 20 + classNum, desc: `${classNum}-sinf uchun kimyo testlari` });
  }
  
  if (classNum >= 6) {
    subjects.push({ id: 'biologiya', name: 'Biologiya', icon: '🧬', questions: 15 + classNum, time: 20 + classNum, desc: `${classNum}-sinf uchun biologiya testlari` });
  }
  
  // Katta test
  subjects.push({ 
    id: 'katta-test', 
    name: '🎯 Kombinatsion test', 
    icon: '🎯', 
    questions: 30 + classNum * 2, 
    time: 40 + classNum * 2, 
    desc: `${classNum}-sinf uchun barcha fanlardan test`,
    large: true 
  });
  
  // Fan kartochkalarini yaratish
  subjects.forEach(subject => {
    html += `
      <div class="subject-card ${subject.large ? 'large-test' : ''}" onclick="selectSubject('${subject.id}')">
        <div class="subject-icon">${subject.icon}</div>
        <h3>${subject.name}</h3>
        <p>${subject.desc}</p>
        <div class="subject-info">
          <span class="questions">${subject.questions} ta savol</span>
          <span class="time">⏱️ ${subject.time} daqiqa</span>
        </div>
      </div>
    `;
  });
  
  subjectsGrid.innerHTML = html;
}

// Fanni tanlash
function selectSubject(subjectId) {
  currentSubject = subjectId;
  
  // Test selectionni yashirish, formani ko'rsatish
  document.getElementById('test-selection').style.display = 'none';
  document.getElementById('student-info-form').style.display = 'block';
}

// Orqaga qaytish
function backToSubjects() {
  document.getElementById('student-info-form').style.display = 'none';
  document.getElementById('test-selection').style.display = 'block';
  document.getElementById('student-form').reset();
}

// Student ma'lumotlarini yuborish
function submitStudentInfo(event) {
  event.preventDefault();
  
  const name = document.getElementById('student-name').value;
  const surname = document.getElementById('student-surname').value;
  
  if (!name || !surname) {
    alert('Iltimos, barcha maydonlarni to\'ldiring!');
    return;
  }
  
  // Testni boshlash
  startTest();
}

// Testni boshlash
function startTest() {
  const test = testData[currentSubject];
  if (!test) return;
  
  // O'zgaruvchilarni sozlash
  currentQuestionIndex = 0;
  userAnswers = new Array(test.questions.length).fill(undefined);
  timeLeft = test.time * 60;
  startTime = Date.now();
  
  // Test nomini o'rnatish
  document.getElementById('test-title').innerHTML = `${test.icon} ${test.title}`;
  
  // Taymerni boshlash
  startTimer();
  
  // Birinchi savolni ko'rsatish
  showQuestion();
  
  // Formani yashirish, testni ko'rsatish
  document.getElementById('student-info-form').style.display = 'none';
  document.getElementById('test-container').style.display = 'block';
}

// Taymer
function startTimer() {
  const timerElement = document.getElementById('timer');
  
  timer = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.innerHTML = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft <= 0) {
      clearInterval(timer);
      finishTest();
    }
    
    timeLeft--;
  }, 1000);
}

// Savolni ko'rsatish
function showQuestion() {
  const test = testData[currentSubject];
  const question = test.questions[currentQuestionIndex];
  
  const container = document.getElementById('question-container');
  
  let answersHtml = '';
  question.answers.forEach((answer, index) => {
    const isSelected = userAnswers[currentQuestionIndex] === index;
    answersHtml += `
      <div class="answer-option ${isSelected ? 'selected' : ''}" onclick="selectAnswer(${index})">
        <input type="radio" name="answer" id="answer-${index}" value="${index}" ${isSelected ? 'checked' : ''}>
        <label for="answer-${index}">${answer}</label>
      </div>
    `;
  });
  
  container.innerHTML = `
    <div class="question-card">
      <div class="question-number">Savol ${currentQuestionIndex + 1} / ${test.questions.length}</div>
      <div class="question-text">${question.question}</div>
      <div class="answers-grid">
        ${answersHtml}
      </div>
    </div>
  `;
  
  // Progress barni yangilash
  updateProgress();
  
  // Navigatsiya tugmalarini yangilash
  updateNavigation();
}

// Javobni tanlash
function selectAnswer(answerIndex) {
  userAnswers[currentQuestionIndex] = answerIndex;
  
  // Eski tanlovni olib tashlash
  document.querySelectorAll('.answer-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  
  // Yangi tanlovni belgilash
  document.querySelectorAll('.answer-option')[answerIndex].classList.add('selected');
  document.getElementById(`answer-${answerIndex}`).checked = true;
}

// Progress barni yangilash
function updateProgress() {
  const test = testData[currentSubject];
  const progress = ((currentQuestionIndex + 1) / test.questions.length) * 100;
  
  document.getElementById('progress-fill').style.width = `${progress}%`;
  document.getElementById('progress-text').innerHTML = `${currentQuestionIndex + 1}/${test.questions.length}`;
}

// Navigatsiyani yangilash
function updateNavigation() {
  const test = testData[currentSubject];
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const finishBtn = document.getElementById('finish-btn');
  
  prevBtn.disabled = currentQuestionIndex === 0;
  
  if (currentQuestionIndex === test.questions.length - 1) {
    nextBtn.style.display = 'none';
    finishBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'block';
    finishBtn.style.display = 'none';
  }
}

// Oldingi savol
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

// Keyingi savol
function nextQuestion() {
  const test = testData[currentSubject];
  if (currentQuestionIndex < test.questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
}

// Testni tugatish
function finishTest() {
  clearInterval(timer);
  
  const test = testData[currentSubject];
  let correctCount = 0;
  
  // Javoblarni tekshirish
  test.questions.forEach((question, index) => {
    if (userAnswers[index] === question.correct) {
      correctCount++;
    }
  });
  
  const total = test.questions.length;
  const percentage = Math.round((correctCount / total) * 100);
  const timeTaken = Math.floor((Date.now() - startTime) / 1000);
  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;
  const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
  // Natijalarni ko'rsatish
  showResults(correctCount, total, percentage, timeString);
}

// Natijalarni ko'rsatish
function showResults(correct, total, percentage, timeString) {
  // Asosiy ma'lumotlar
  document.getElementById('score-percentage').innerHTML = `${percentage}%`;
  document.getElementById('correct-count').innerHTML = correct;
  document.getElementById('total-count').innerHTML = total;
  document.getElementById('time-taken').innerHTML = timeString;
  document.getElementById('score-points').innerHTML = correct * 10;
  
  // Progress barlar
  document.getElementById('correct-bar').style.width = `${percentage}%`;
  document.getElementById('incorrect-bar').style.width = `${100 - percentage}%`;
  document.getElementById('correct-percent').innerHTML = `${percentage}%`;
  document.getElementById('incorrect-percent').innerHTML = `${100 - percentage}%`;
  
  // Natija xabari
  const messageElement = document.getElementById('results-message');
  messageElement.className = 'results-message';
  
  if (percentage >= 90) {
    messageElement.className += ' excellent';
    messageElement.innerHTML = '🎉 Ajoyib! Sizning bilimingiz juda yaxshi!';
  } else if (percentage >= 70) {
    messageElement.className += ' good';
    messageElement.innerHTML = '👍 Yaxshi natija! Ozgina mashq qilsangiz yetarli';
  } else if (percentage >= 50) {
    messageElement.className += ' average';
    messageElement.innerHTML = '📚 Qoniqarli. Ko\'proq mashq qilishingiz kerak';
  } else {
    messageElement.className += ' poor';
    messageElement.innerHTML = '💪 Xafa bo\'lmang! Qayta urinib ko\'ring';
  }
  
  // Score circle animatsiyasi
  const scoreCircle = document.getElementById('score-circle');
  scoreCircle.style.background = `conic-gradient(#2563eb 0% ${percentage}%, #e2e8f0 ${percentage}% 100%)`;
  
  // Testni yashirish, natijalarni ko'rsatish
  document.getElementById('test-container').style.display = 'none';
  document.getElementById('results-container').style.display = 'block';
}

// Testni qayta boshlash
function restartTest() {
  document.getElementById('results-container').style.display = 'none';
  startTest();
}

// Test tanlashga qaytish
function backToTestSelection() {
  clearInterval(timer);
  
  document.getElementById('results-container').style.display = 'none';
  document.getElementById('test-container').style.display = 'none';
  document.getElementById('test-selection').style.display = 'block';
  
  currentSubject = null;
  currentQuestionIndex = 0;
  userAnswers = [];
}

// Chiqish
function exitTest() {
  if (confirm('Testni tark etishga ishonchingiz komilmi?')) {
    clearInterval(timer);
    
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('test-selection').style.display = 'block';
    
    currentSubject = null;
    currentQuestionIndex = 0;
    userAnswers = [];
  }
}

// Batafsil natijalar
function showDetailedResults() {
  const test = testData[currentSubject];
  let details = '===== BATAFSIL NATIJALAR =====\n\n';
  
  test.questions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.correct;
    
    details += `Savol ${index + 1}: ${question.question}\n`;
    details += `Sizning javobingiz: ${userAnswer !== undefined ? question.answers[userAnswer] : 'Javob berilmagan'}\n`;
    details += `To'g'ri javob: ${question.answers[question.correct]}\n`;
    details += `Natija: ${isCorrect ? '✅ To\'g\'ri' : '❌ Xato'}\n`;
    details += '--------------------------------\n\n';
  });
  
  alert(details);
}