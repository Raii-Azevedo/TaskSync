// Funções de JavaScript puro
function openModal() {
  document.getElementById('addActivityModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('addActivityModal').style.display = 'none';
}

window.addEventListener('click', function (event) {
  var modal = document.getElementById('addActivityModal');
  if (event.target === modal) {
      closeModal();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('activityForm').addEventListener('submit', function (event) {
      event.preventDefault();
      const activityName = document.getElementById('activityName').value;
      const activityDate = document.getElementById('activityDate').value;

      const activityList = document.getElementById('activityList');
      const li = document.createElement('li');
      li.textContent = `${activityName} - ${activityDate}`;
      activityList.appendChild(li);

      document.getElementById('activityForm').reset();
  });
});

function validateAndRedirect() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username !== "" && password !== "") {
      window.location.href = 'index.html';
  } else {
      alert("Por favor, preencha os campos de login e senha.");
  }
}

// Funções jQuery
$(function () {
  $(".card").draggable(); // Certifique-se de que a classe .card está presente no seu HTML.

  const popup = $("#popup");
  const openPopupButton = $("#openPopup");
  const activityList = $("#activityList");

  openPopupButton.on("click", () => {
      openModal();
      popup.css("display", "flex");
  });

  function closePopup() {
      $("#taskName").val("");
      $("#taskDescription").val("");
      $("#fileInput").val("");
      activityList.empty();
      closeModal();
      popup.css("display", "none");
  }

  $("#addActivity").on("click", () => {
      const newActivity = $("<li><input type='text' class='editable-activity'><input type='checkbox' class='editable-checkbox'><button class='remove-activity'>&#x2716;</button></li>");
      activityList.append(newActivity);
  });

  $("#activityList").on("click", ".remove-activity", function () {
      $(this).parent().remove();
  });

  $("#deleteButton").on("click", () => {
      closePopup();
  });

  $("#saveButton").on("click", () => {
      const taskName = $("#taskName").val();
      const taskDescription = $("#taskDescription").val();
      const fileInput = $("#fileInput").val();
      const activities = [];

      $("#activityList li").each(function () {
          const activityText = $(this).find("input.editable-activity").val();
          const activityChecked = $(this).find("input.editable-checkbox").prop("checked");
          activities.push({ text: activityText, checked: activityChecked });
      });

      console.log("Nome:", taskName);
      console.log("Descrição:", taskDescription);
      console.log("Arquivo:", fileInput);
      console.log("Atividades:", activities);

      closePopup();
  });
});
