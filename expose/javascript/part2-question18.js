function currentTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

currentTime();

setInterval(currentTime, 1000);
