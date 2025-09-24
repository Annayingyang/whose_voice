

const questionSets = {
  love: [
    "What is love?",
    "How is love shown in your culture?",
    "Is romantic love always prioritized?",
    "What does love mean in your language?",
    "How is love expressed between generations?"
  ],
  tradition: [
    "What is a traditional healer?",
    "How do traditional beliefs shape health?",
    "Are rituals still practiced today?",
    "How is wisdom passed down?",
    "What role does nature play in healing?"
  ],
  ancestry: [
    "What does ancestry mean to your family?",
    "How are ancestors honored?",
    "Is lineage discussed openly?",
    "Are ancestral names important?",
    "What stories are told about the past?"
  ],
  marriage: [
    "What does marriage look like in your culture?",
    "Are marriages arranged or chosen?",
    "What rituals happen at weddings?",
    "What does partnership mean traditionally?",
    "How are marriages celebrated over time?"
  ],
  respect: [
    "How is respect shown to elders?",
    "Is age important in your culture?",
    "How do children learn respect?",
    "What words or gestures show honor?",
    "How is disrespect handled traditionally?"
  ]
};

const fakeAIResponses = {
  love: [
    "Love is an emotional connection typically experienced between romantic partners.",
    "In many cultures, love is expressed through gift-giving, touch, and verbal affection.",
    "Romantic love is seen as essential in modern relationships, especially in Western society.",
    "Love in English emphasizes feeling; other languages may use different terms.",
    "Family love is often expressed through care, time, and shared meals."
  ],
  tradition: [
    "Traditional healers are people who use cultural remedies to treat illness.",
    "Spirituality and herbs often shape health practices in traditional systems.",
    "Many rituals are still practiced in rural areas across the world.",
    "Wisdom is often passed down orally through elders.",
    "Nature is often seen as a source of healing in traditional beliefs."
  ],
  ancestry: [
    "Ancestry refers to a person's lineage and family heritage.",
    "Many cultures honor ancestors through prayer, shrines, or offerings.",
    "In some places, lineage is a private family matter.",
    "Ancestral names may carry historical or spiritual significance.",
    "Stories of ancestors help preserve cultural memory."
  ],
  marriage: [
    "Marriage is a legal and/or cultural union between individuals.",
    "Some cultures still practice arranged marriages; others favor choice.",
    "Weddings may include symbolic rituals like ring exchanges or blessings.",
    "Partnership can represent mutual support and shared duty.",
    "Anniversaries and community gatherings may mark marriage milestones."
  ],
  respect: [
    "Respect is shown by using titles, formal speech, and gestures.",
    "Age is often seen as a sign of wisdom and deserves honor.",
    "Children are taught respect through observation and discipline.",
    "Bowing, greetings, or silence can express honor.",
    "Disrespect is often met with correction or community disapproval."
  ]
};

const params = new URLSearchParams(window.location.search);
const topic = params.get("topic");
const questionIndex = parseInt(params.get("q"));

const questionText = questionSets[topic]?.[questionIndex] || "Unknown question";
const aiAnswer = fakeAIResponses[topic]?.[questionIndex] || "No AI response found.";

document.getElementById("topic-heading").textContent = `Topic: ${topic.charAt(0).toUpperCase() + topic.slice(1)}`;
document.getElementById("question-text").textContent = questionText;
document.getElementById("ai-answer").textContent = aiAnswer;

// Submit handler
const form = document.getElementById("response-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const critique = document.getElementById("critique").value.trim();
  const rewrite = document.getElementById("rewrite").value.trim();
  const name = document.getElementById("name").value.trim();
  const date = new Date().toLocaleDateString();

  if (!critique || !rewrite || !name) {
    alert("Please fill in all fields.");
    return;
  }

  const newResponse = {
    topic,
    question: questionText,
    aiAnswer,
    critique,
    rewrite,
    name,
    date
  };

  const stored = JSON.parse(localStorage.getItem("userResponses") || "[]");
  stored.push(newResponse);
  localStorage.setItem("userResponses", JSON.stringify(stored));

  alert("Your response has been submitted and added to the wall. Thank you!");
  window.location.href = "../wall.html";
});