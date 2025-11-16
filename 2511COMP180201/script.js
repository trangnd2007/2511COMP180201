/* đổi cảnh biển */
const bgBtn = document.getElementById("bgBtn");
let bgState = 0;
bgBtn.addEventListener("click", () => {
  bgState = (bgState + 1) % 3;
  const root = document.documentElement;
  if(bgState === 0) root.style.setProperty("--sea-color", "#87ceeb");
  if(bgState === 1) root.style.setProperty("--sea-color", "#5fc3e4");
  if(bgState === 2) root.style.setProperty("--sea-color", "#1ca3ec");
});

/* nhạc */
const musicBtn = document.getElementById("musicBtn");
const bgAudio = document.getElementById("bgAudio");
let playing = false;
musicBtn.addEventListener("click", () => {
  playing = !playing;
  if(playing){ bgAudio.play(); musicBtn.textContent="⏸ Tạm dừng"; }
  else { bgAudio.pause(); musicBtn.textContent="▶️ Phát nhạc"; }
});

/* tốc độ */
const speedRange = document.getElementById("speedRange");
speedRange.addEventListener("input", e => {
  document.documentElement.style.setProperty("--anim-speed-mult", e.target.value);
});

/* bong bóng random */
const bubbleContainer = document.getElementById("bubbles");
for(let i = 0; i < 60; i++){
  const b = document.createElement("div");
  b.className = "bubble";
  b.style.left = Math.random()*100 + "vw";
  b.style.width = b.style.height = (6 + Math.random()*10) + "px";
  b.style.animationDuration = (4 + Math.random()*6) + "s";
  bubbleContainer.appendChild(b);
}

/* đất cá nhỏ */
const smallFishGroup = document.getElementById("smallFishGroup");
for(let i=0;i<6;i++){
  const f = document.createElement("div");
  f.className="smallfish";
  f.style.top = (30 + Math.random()*40) + "vh";
  f.style.animationDuration = (8 + Math.random()*6) + "s";
  f.innerHTML = `<img src="images/smallFishGroup.gif" style="width:80px;">`;
  smallFishGroup.appendChild(f);
}