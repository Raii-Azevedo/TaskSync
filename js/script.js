$(function () {
   $(".card").draggable();

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
       closeModal(); // Fechar o modal
       popup.css("display", "none");
   }

   function addActivity() {
       const newActivity = $("<li><input type='text' class='editable-activity'><input type='checkbox' class='editable-checkbox'><button class='remove-activity'>&#x2716;</button></li>");
       activityList.append(newActivity);
   }

   function deletePopup() {
       closePopup();
   }

   function savePopup() {
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
   }
});

function openModal() {
   document.getElementById('addActivityModal').style.display = 'flex';
}

function closeModal() {
   document.getElementById('addActivityModal').style.display = 'none';
}
