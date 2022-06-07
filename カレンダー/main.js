const today = new Date();

let year = today.getFullYear();
let month = today.getMonth();

// 当月の1日が何番目の曜日かを取得して、それを元に1日の左側に何日表示されるか
// 求め、先月末以前を表示している
function getCalendarHead() {
  const dates = [];
  const d = new Date(year, month, 0).getDate();
  const n = new Date(year, month, 1).getDay();

  for (let i = 0; i < n; i++) {
    // 先頭に数値を入れていきたいのでunshiftを使う
    dates.unshift({
      date: d - i,
      isToday: false,
      isDisabled: true
    });
  }
  return dates;
};

// 当月の日付を全て取得している関数
function getCalendarBody() {
  const dates = []; //date→日付、day→曜日
  const lastDate = new Date(year, month + 1, 0).getDate();

  for (i = 1; i <= lastDate; i++) {
    dates.push({
      date: i,
      isToday: false,
      isDisabled: false,
    });
  }

  if (year === today.getFullYear() && month === today.getMonth()) {
    dates[today.getDate() - 1].isToday = true;
  };

  return dates;
};

// 当月末日の曜日番号を取得して、翌月頭の表示をしている
function getCalendarTail() {
  const dates = [];
  const lastDay = new Date(year, month + 1, 0).getDay();

  for (let i = 1; i < 7 - lastDay; i++) {
    dates.push({
      date: i,
      isToday: false,
      isDisabled: true
    });
  }
  return dates;
};

// カレンダーを表示前にリセットする関数
function clearCalendar() {
  const tbody = document.querySelector('tbody');

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
};

// カレンダーの月日を表示する関数
function renderTitle (){
  const title = `${year}/${String(month + 1).padStart(2, '0')}`;
  document.getElementById('title').textContent = title;
}

//1週間ずつに配列を分けて、カレンダーに表示する関数
function createWeeks() {
  const dates = [
    ...getCalendarHead(),
    ...getCalendarBody(),
    ...getCalendarTail()
  ];

  const weeks = [];
    const weeksCount = dates.length / 7;

    for (let i = 0; i < weeksCount; i++) {
      weeks.push(dates.splice(0, 7));
    }
    
    weeks.forEach(week => {
      const tr = document.createElement('tr');
      week.forEach(date => {
        const td = document.createElement('td');

        td.textContent = date.date;
        if (date.isToday) {
          td.classList.add('today');
        }
        if (date.isDisabled) {
          td.classList.add('disabled');
        }
        tr.appendChild(td);
      });
      document.querySelector('tbody').appendChild(tr);    
  });
};

// カレンダーとして描画するための関数
function createCalendar() {
  clearCalendar();
  renderTitle(); 
  createWeeks();
};

document.getElementById('prev').addEventListener('click', () => {
  month--;
  if(month < 0) {
    year--;
    month = 11;
  }
  createCalendar();
});

document.getElementById('next').addEventListener('click', () => {
  month++;
  if(month > 11) {
    year++;
    month = 0;
  }
  createCalendar();
});

document.getElementById('today').addEventListener('click', () => {
  year = today.getFullYear();
  month = today.getMonth();
  
  createCalendar();
});

createCalendar()
