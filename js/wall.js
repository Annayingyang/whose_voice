
const wallContainer = document.getElementById("wall");


const fakeResponses = [
  {
    topic: "love",
    question: "What is love?",
    aiAnswer: "Love is an emotional connection typically experienced between romantic partners.",
    critique: "This only reflects Western romantic norms and ignores cultural/community love.",
    rewrite: "In my culture, love is expressed through loyalty, shared burdens, and quiet actions, not just emotion.",
    name: "T. Ndlovu",
    date: "2025/09/23"
  },
  {
    topic: "tradition",
    question: "What is a traditional healer?",
    aiAnswer: "Traditional healers are people who use cultural remedies to treat illness.",
    critique: "It oversimplifies and excludes spiritual roles and ancestral communication.",
    rewrite: "A traditional healer connects physical, emotional, and ancestral health. They are spiritual leaders.",
    name: "A. Mabaso",
    date: "2025/09/22"
  }
];


const stored = JSON.parse(localStorage.getItem("userResponses") || "[]");
const allResponses = [...fakeResponses, ...stored];

allResponses.reverse().forEach((entry) => {
  const card = document.createElement("div");
  card.className = "entry-card";
  card.innerHTML = `
    <h3>🧠 ${entry.topic.toUpperCase()} | ${entry.name} (${entry.date})</h3>
    <p><strong>Prompt:</strong> ${entry.question}</p>
    <p><strong>AI Answer:</strong> ${entry.aiAnswer}</p>
    <p><strong>User Critique:</strong> ${entry.critique}</p>
    <p><strong>Rewrite:</strong> ${entry.rewrite}</p>
  `;
  wallContainer.appendChild(card);
});
