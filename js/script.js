setInterval(() => {
  // analog clock
  const hr = document.getElementById("hr");
  const mn = document.getElementById("mn");
  const sc = document.getElementById("sc");

  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  // digital clock
  const hour = document.getElementById("hour");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  hour.innerHTML = h + ":";
  minutes.innerHTML = m + ":";
  seconds.innerHTML = s;
});
