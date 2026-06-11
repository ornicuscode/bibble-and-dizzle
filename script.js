function startStory() {
  const song = document.getElementById("ourSong");

  if (song) {
    song.play().catch(() => {
      console.log("Music will play after user interaction.");
    });
  }

  document.querySelector(".intro").scrollIntoView({
    behavior: "smooth"
  });
}

function showHearts() {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.innerHTML = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 20 + 20 + "px";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 4000);
    }, i * 120);
  }
}
