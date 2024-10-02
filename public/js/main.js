console.log("main.js");

function se() {
  try {
    const searchengine = localStorage.getItem("se");
    const seElement = document.getElementById("uv-search-engine");

    if (searchengine === "google") {
      seElement.value = "https://www.google.com/search?q=%s";
    } else if (searchengine === "bing") {
      seElement.value = "https://www.bing.com/search?q=%s";
    } else if (searchengine === "ddg") {
      seElement.value = "https://duckduckgo.com/?q=%s";
    } else if (searchengine === "brave") {
      seElement.value = "https://search.brave.com/search?q=%s";
    }
  } catch (err) {
    console.log("Something bad happened", err);
  }
}

se();

const texts = [
  "Welcome to AidanGames v7.9.1!",
  "What's up brother!",
  "Do not insert text here",
  "They not like us",
  "1 + 1 = 11",
  "AidanGames",
  "insert text here",
  "🧀",
  "🥚",
  "🌙",
  "My CPU is 156 degrees :)",
  "Spicy Nacho Doritos are good",
  "Yo so games are cool",
  "Aidan does questionable things...",
  "Bonelab = Garys mod",
  "Elden Ring on top - wavy ",
  "Insert text here",
  'Join our Discord: <a href="https://dsc.gg/parcoil">https://dsc.gg/parcoil</a>',
  'Join our Discord For <a href="https://dsc.gg/parcoil">Links</a>',
  "Or what!",
  "Ewww Homework whats that",
  "shit",
  "Powerade Sucks!",
  "The site to cure total boardness",
  "Activate AidanGames.",
  "Rip Nativegames",
  "Rip Native",
  'Did you know AidanGames.used to be a <a href="https://sites.google.com/view/thebestonlinegames/index?authuser=1">google site?</a>',
];

fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    const ipText = `${data.ip}`;
    texts.push(ipText);
  })
  .catch((error) => {
    console.error("Error fetching IP:", error);
  })
  .finally(() => {
    document.getElementById("rng").innerHTML = getRandomText();
  });

function getRandomText() {
  return texts[Math.floor(Math.random() * texts.length)];
}

const websites = [
  "YouTube",
  "Facebook",
  "Reddit",
  "X",
  "TikTok",
  "Twitch",
  "my lost socks",
  "Wikipedia",
  "Instagram",
  "Wikipedia",
  "Amazon",
];
const randomWebsite = websites[Math.floor(Math.random() * websites.length)];
const uvaddress = document.getElementById("uv-address");
uvaddress.placeholder = `Try Searching "${randomWebsite}"`;
