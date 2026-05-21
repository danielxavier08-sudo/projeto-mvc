// =============================================
// APP.JS — FrontController
// Centraliza a inicialização de toda a aplicação
// =============================================

// 1. Instancia o Model (dados)
const model = new TaskModel();

// 2. Instancia a View (exibição)
const view = new TaskView();

// 3. Instancia o Controller (lógica)
const controller = new TaskController(model, view);

// 4. Inicializa a aplicação ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  controller.atualizar();
});
