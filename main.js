let files = ["./image/kong1.jpg",
             "./image/kong2.jpg",
             "./image/kong3.jpg",
             "./image/kong4.jpg",
             "./image/kong5.jpg",
             "./image/kong6.jpg",
             "./image/kong7.jpg",
             "./image/kong8.jpg",
             "./image/kong9.jpg",
             "./image/kong10.jpg",
             "./image/kong11.jpg",
             "./image/kong12.jpg"];
let imgs = new Array();
for (let i=0; i<files.length; i++) {
  imgs[i] = new Image();
  imgs[i].src = files[i];
}

let next = 1;
function change(img) {
  img.src = imgs[next].src;
  next++;
  next %= imgs.length;
}

function drawImage() {
  let radios = document.getElementsByName("theme");
  let img = document.getElementById("kongimage");

  for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          img.src = radios[i].value;
          break;
      }
  }
}

function scheduleAppointment() {
  var name = document.getElementById('appointmentName').value;
  var date = document.getElementById('appointmentDate').value;
  var time = document.getElementById('appointmentTime').value;
  var place = document.getElementById('appointmentPlace').value;

  alert('🎉 ' + name + '님과 공콩이와의 약속이 잡혔습니다! 🎉\n' +
        '늦지 않게 도착해주시길 바랍니다.\n' +
        '날짜: ' + date + '\n시간: ' + time + '\n장소 : ' + place);
}
