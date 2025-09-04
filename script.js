function addItem() {
  const name = document.getElementById("itemName").value;
  const date = document.getElementById("itemDate").value;
  const priority = document.getElementById("itemPriority").value;

  if (!name || !date || !priority) {
    alert("Please enter all fields.");
    return;
  }

  const today = new Date().toISOString().split("T")[0];
  const list = date === today ? document.getElementById("todayList") : document.getElementById("futureList");

  const li = document.createElement("li");
  li.innerHTML = `
    ${name} (Priority: ${priority}, Date: ${date})
    <div>
      <button onclick="markCompleted(this)">✔</button>
      <button onclick="removeItem(this)">❌</button>
    </div>`;

  list.appendChild(li);

  // reset form
  document.getElementById("itemName").value = "";
  document.getElementById("itemDate").value = "";
  document.getElementById("itemPriority").value = "";
}

function markCompleted(btn) {
  const li = btn.parentElement.parentElement;
  li.classList.add("completed");
  document.getElementById("completedList").appendChild(li);
  btn.remove();
}

function removeItem(btn) {
  btn.parentElement.parentElement.remove();
}
