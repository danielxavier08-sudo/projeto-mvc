class Task {
  constructor(id, titulo, descricao) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.concluida = false;
  }
}

class TaskModel {
  constructor() {
    this.tarefas = [];
    this.proximoId = 1;
  }

  criar(titulo, descricao) {
    const tarefa = new Task(this.proximoId++, titulo, descricao);
    this.tarefas.push(tarefa);
    return tarefa;
  }

  listar() {
    return this.tarefas;
  }

  atualizar(id) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
    }
    return tarefa;
  }

  excluir(id) {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
  }
}
