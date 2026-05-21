class TaskController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  adicionar() {
    const titulo = document.getElementById('titulo').value.trim();
    const descricao = document.getElementById('descricao').value.trim();

    if (!titulo) {
      this.view.mostrarErro('O título é obrigatório!');
      return;
    }

    this.model.criar(titulo, descricao);
    this.view.limparFormulario();
    this.atualizar();
  }

  alternarConcluida(id) {
    this.model.atualizar(id);
    this.atualizar();
  }

  excluir(id) {
    if (confirm('Deseja excluir esta tarefa?')) {
      this.model.excluir(id);
      this.atualizar();
    }
  }

  atualizar() {
    const tarefas = this.model.listar();
    this.view.renderizar(tarefas);
  }
}
