// Função para abrir o modal
function openModal() {
    document.getElementById('addActivityModal').style.display = 'flex';
  }

  // Função para fechar o modal
  function closeModal() {
    document.getElementById('addActivityModal').style.display = 'none';
  }

  // Fechar o modal se o usuário clicar fora da área do modal
  window.onclick = function (event) {
    var modal = document.getElementById('addActivityModal');
    if (event.target === modal) {
      closeModal();
    }
  };

/* Editor de Tarefa */
document.addEventListener('DOMContentLoaded', function () {
    // Seu código JavaScript aqui

    // Exemplo: Adicionando uma atividade ao clicar no botão
    document.getElementById('activityForm').addEventListener('submit', function (event) {
      event.preventDefault();
      const activityName = document.getElementById('activityName').value;
      const activityDate = document.getElementById('activityDate').value;

      // Adicionando a atividade à lista
      const activityList = document.getElementById('activityList');
      const li = document.createElement('li');
      li.textContent = `${activityName} - ${activityDate}`;
      activityList.appendChild(li);

      // Limpar o formulário
      document.getElementById('activityForm').reset();
    });
  });

  /* BOTÂO DE LOGIN */
  function validateAndRedirect() {
    // Obtenha os valores dos campos de login e senha
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifique se os campos estão preenchidos
    if (username !== "" && password !== "") {
        // Redirecione para index.html se os campos estiverem preenchidos
        window.location.href = 'index.html';
    } else {
        // Caso contrário, exiba uma mensagem solicitando preenchimento
        alert("Por favor, preencha os campos de login e senha.");
    }
}