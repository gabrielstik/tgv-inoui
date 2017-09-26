function up() {
  document.querySelector('.iphone-container').classList.add('phoneupcl');
}

document.querySelector('.icon').addEventListener('click', up);

var battery = window.navigator.getBattery().then(function(battery) {
  document.querySelector('.bat-per').innerHTML=battery.level * 100 + ' %';
  if (battery.level * 100 > 75) {
    document.querySelector('.bat').innerHTML='<i class="fa fa-battery-full" aria-hidden="true"></i>';
  }
  else if (battery.level * 100 <= 75) {
    document.querySelector('.bat').innerHTML='<i class="fa fa-battery-three-quarters" aria-hidden="true"></i>';
  }
  else if (battery.level * 100 <= 50) {
    document.querySelector('.bat').innerHTML='<i class="fa fa-battery-half" aria-hidden="true"></i>';
  }
  else if (battery.level * 100 <= 25) {
    document.querySelector('.bat').innerHTML='<i class="fa fa-battery-quarter" aria-hidden="true"></i>';
  }
  else {
    document.querySelector('.bat').innerHTML='<i class="fa fa-battery-empty" aria-hidden="true"></i>';
  }
});

var time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"});
document.querySelector('.time').innerHTML=time;
