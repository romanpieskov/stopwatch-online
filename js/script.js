var hour = document.getElementById('hours');
var minute = document.getElementById('minutes');
var second = document.getElementById('seconds');
var msecond = document.getElementById('mseconds');

var sum = 0;
var arrTimePause = [];
var repeat;
function arrTimePauseSum() {
      var sum = 0;
      for (var i = 0; i < arrTimePause.length; i++) {
       sum += arrTimePause[i];
      }
              return sum;
      }

var startTime = new Date();
var reset = new Date();

// Кнопка старт и стоп
var button = document.getElementById('button');
button.addEventListener('click', function() {

    var date = document.getElementById('start');
    if (date.innerHTML === 'Стоп') {
      date.innerHTML = 'Старт';
      clearInterval(repeat);
      startTime = new Date();
      return;
    };
    if (date.innerHTML === 'Старт') {
      date.innerHTML = 'Стоп';
      repeat = setInterval(stopwatch, 1);
      stopTime = new Date();
    };
      timePause = stopTime - startTime;
      arrTimePause.push(timePause);
      arrTimePauseSum();
      sumTimePause = arrTimePauseSum();
});

// расчет времени
      beginTime = new Date();
      function stopwatch() {
      var delta = new Date() - beginTime - sumTimePause;

      var hours = Math.floor(delta/3600000);

      delta = delta - hours*3600000;
      var mins = Math.floor( delta/60000 );

      delta = delta - mins*60000;
      var secs = Math.floor( delta/1000 );

      delta = delta - secs*1000;
      var ms = delta;

      hour.innerHTML = format(hours, 2);
      minute.innerHTML = format(mins, 2);
      second.innerHTML = format(secs, 2);
      msecond.innerHTML = format(ms, 3);
    };

    function format(num, maxNumbers) {
      var numStr = num + '';
      while(numStr.length < maxNumbers) {
        numStr = '0' + numStr;
      }
      return numStr;
  };

var arr = [];

// Кнопка очистить
var button2 = document.getElementById('clear');
button2.addEventListener('click', function() {
  clearInterval(repeat);
  mseconds.innerHTML = '000';
  seconds.innerHTML = '00';
  minutes.innerHTML = '00';
  hours.innerHTML = '00';
  var start = document.getElementById('start');
  start.innerHTML = 'Старт';
  var clearSaves = document.querySelector('.container');
  while (clearSaves.hasChildNodes()) {
  clearSaves.removeChild(clearSaves.lastChild);
}
arr = [];
arrTimePause = [];
stopTime = reset;
startTime = reset;
});

// Кнопка Split
var split = document.getElementById('split');
split.addEventListener('click', function(){

  // блок shapka
  var numberBlockShapka = document.querySelectorAll('.shapka').length;
  if (numberBlockShapka == 0){
  var blockShapka = document.createElement('div');
  blockShapka.classList.add('shapka');
  var forBlockShapka = document.querySelector('.container');
  forBlockShapka.appendChild(blockShapka);

  var blockNumber = document.createElement('div');
  blockNumber.classList.add('number_title');
  blockNumber.innerHTML = '№';
  var forAddblock = document.querySelector('.shapka');
  forAddblock.appendChild(blockNumber);

  var blockTimeTitle = document.createElement('div');
  blockTimeTitle.classList.add('time_title');
  blockTimeTitle.innerHTML = 'Время';
  forAddblock.appendChild(blockTimeTitle);

  var blockSplitTitle = document.createElement('div');
  blockSplitTitle.classList.add('split_title');
  blockSplitTitle.innerHTML = 'Интервал';
  forAddblock.appendChild(blockSplitTitle);
  }

  // общий блок
  var blockParent = document.querySelector('.container');
  var forSaveNumbers = document.getElementsByClassName('generalBlock')[0];
  var generalBlock = document.createElement('div');
  generalBlock.classList.add('generalBlock');
  blockParent.insertBefore(generalBlock, forSaveNumbers);

  // номер значения
  var saveNumbers = document.createElement('div');
  saveNumbers.classList.add('saveNumbers');
  var numberElements = document.getElementsByClassName('saveNumbers').length;
  saveNumbers.innerHTML = numberElements + 1;
  var forSaveNumbers = document.querySelector('.generalBlock');
  forSaveNumbers.appendChild(saveNumbers);

  var block = document.createElement('div');
  block.classList.add('block');
  forSaveNumbers.appendChild(block);

  // Вывод времени
  var mySaveTime = document.createElement('span');
  mySaveTime.classList.add('saveTime');
  mySaveTime.innerHTML = hour.innerHTML + ':' + minute.innerHTML + ':' + second.innerHTML;
  var forSaves = document.querySelector('.block');
  forSaves.appendChild(mySaveTime);

  // вывод милисекунд
  var saveMseconds = document.createElement('span');
  saveMseconds.classList.add('saveMs');
  saveMseconds.innerHTML = '.' + msecond.innerHTML;
  forSaves.appendChild(saveMseconds);

  //расчет значения split
  //получение сохранённого значения split
  var currentTime = (hour.innerHTML * 3600000) + (minute.innerHTML * 60000) + (second.innerHTML * 1000) + (msecond.innerHTML * 1);
  var numberSplitElements = document.querySelector('.blockSplit');
  if (numberSplitElements == null) {
    lastTime = [];
    var mySplitTimer = currentTime;
  } else {
    mySplitTimer = currentTime - lastTime[0];
    lastTime = [];
  }
  lastTime.push(currentTime);


  var splitHour = Math.floor(mySplitTimer/3600000);

  mySplitTimer = mySplitTimer - splitHour*3600000;
  var splitMin = Math.floor( mySplitTimer/60000 );

  mySplitTimer = mySplitTimer - splitMin*60000;
  var splitSec = Math.floor( mySplitTimer/1000 );

  mySplitTimer = mySplitTimer - splitSec*1000;
  var splitMs = mySplitTimer;

  //блок
  var block = document.createElement('div');
  block.classList.add('blockSplit');
  var forblock = document.querySelector('.generalBlock')
  forblock.appendChild(block);
  // вывод времени
  var mySaveSplitTime = document.createElement('span');
  mySaveSplitTime.classList.add('saveSplit');
  mySaveSplitTime.innerHTML = (format(splitHour, 2)) + ':' + (format(splitMin, 2)) + ':' + (format(splitSec, 2));
  var forSaves = document.querySelector('.blockSplit:last-child');
  forSaves.appendChild(mySaveSplitTime);
  // вывод милисекунд
  var saveMseconds = document.createElement('span');
  saveMseconds.classList.add('saveMsSplit');
  saveMseconds.innerHTML = '.' + (format(splitMs, 3));
  forSaves.appendChild(saveMseconds);
});
