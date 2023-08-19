// Submit by pressing SUBMIT button
document.getElementById("submit-btn").addEventListener("click", function () {
  const commentInput = document.getElementById("text-area");
  const getInput = commentInput.value;
  const newInput = document.createElement("p");
  newInput.innerText = getInput;
  document.getElementById("review").appendChild(newInput);
  document.getElementById("text-area").value = "";
});

//  Submit by pressing Enter key
document.getElementById("text-area").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const commentInput = document.getElementById("text-area");
    const getInput = commentInput.value;
    const newInput = document.createElement("p");
    newInput.innerText = getInput;
    document.getElementById("review").appendChild(newInput);
    document.getElementById("text-area").value = "";
  }
});
