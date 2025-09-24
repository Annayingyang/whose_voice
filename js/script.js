function submitResponse() {
  const critique = document.getElementById("critique").value.trim();
  const rewrite = document.getElementById("rewrite").value.trim();

  if (!critique || !rewrite) {
    alert("Please fill in both fields.");
    return;
  }

  const wall = document.getElementById("responses-wall");
  const entry = document.createElement("div");
  entry.style.borderBottom = "1px solid #ccc";
  entry.style.marginBottom = "10px";
  entry.style.paddingBottom = "10px";
  entry.innerHTML = `
    <p><strong>Critique:</strong> ${critique}</p>
    <p><strong>Rewrite:</strong> ${rewrite}</p>
  `;

  wall.prepend(entry);

  // Reset fields
  document.getElementById("critique").value = "";
  document.getElementById("rewrite").value = "";
}
