

const topics = {
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

const params = new URLSearchParams(window.location.search);
const topic = params.get("topic");
const topicTitle = topic.charAt(0).toUpperCase() + topic.slice(1);
document.getElementById("topic-title").textContent = `Topic: ${topicTitle}`;

const questionsContainer = document.querySelector(".questions-container");

if (topics[topic]) {
  topics[topic].forEach((question, index) => {
    const link = document.createElement("a");
    link.className = "question-btn";
    link.textContent = question;
    link.href = `respond.html?topic=${topic}&q=${index}`;
    questionsContainer.appendChild(link);
  });
} else {
  questionsContainer.innerHTML = `<p>No questions found for this topic.</p>`;
}
