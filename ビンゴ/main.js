function createColumn(col) {
  // 中身が1から15までの配列を作成する
  const source = [];
  for (i = 0; i < 15; i++) {
    source.push(i + 1 + 15 * col);
  }

  // Math.floorとMath.randomを使用してsourceから
  // ランダムな数値を選んで、配列columnへ入れる
  const column = [];

  for (i = 0; i < 5; i++) {
    // spliceの返り値は配列なので、[0]とすることで値を取り出している
    column.push(source.splice(Math.floor(Math.random() * source.length), 1)[0]);
  }

  return column;
};

// 1〜15、16〜30、31〜45、46〜60、61〜75の配列を作成する関数
// 真ん中にはfreeの文字を入れている
function createColumns() {
  const columns = [];
  for (let i = 0; i < 5; i++) {
    columns[i] = createColumn(i);
  }
  columns[2][2] = 'free';
  return columns;
}

// createColumnsで作成した5つの配列columnsの表示が縦になるように
// 新しい配列を作成している
function createBingo(columns) {
  const bingo = [];
  for (let row = 0; row < 5; row++) {
    bingo[row] = [];
    // [[], [], [], [], []]が作成される
    for (let col = 0; col < 5; col++) {
      bingo[row][col] = columns[col][row];
    }
  };
  return bingo;
};

// createBingoで作成した配列bingoを描画する関数
function renderBingo(bingo) {
  for (let row = 0; row < 5; row++) {
    const tr = document.createElement('tr');
    for (let col = 0; col < 5; col++) {
      const td = document.createElement('td');
      td.textContent = bingo[row][col];
      tr.appendChild(td);
    }
    document.querySelector('tbody').appendChild(tr);
  }  
};

const columns = createColumns();
const bingo = createBingo(columns);
renderBingo(bingo);