class TaskView {
  renderizar(tarefas) {
    const lista = document.getElementById('lista-tarefas');
    lista.innerHTML = '';

    if (tarefas.length === 0) {
      lista.innerHTML = '<p class="vazia">Nenhuma tarefa cadastrada.</p>';
      return;
    }

    tarefas.forEach(tarefa => {
      const item = document.createElement('div');
      item.className = 'tarefa' + (tarefa.concluida ? ' concluida' : '');
      item.innerHTML = `
        <div class="tarefa-info">
          <h3>${tarefa.titulo}</h3>
          <p>${tarefa.descricao}</p>
          <span class="status">${tarefa.concluida ? '✅ Concluída' : '🕐 Pendente'}</span>
        </div>
        <div class="tarefa-acoes">
          <button onclick="controller.alternarConcluida(${tarefa.id})" class="btn-concluir">
            ${tarefa.concluida ? 'Reabrir' : 'Concluir'}
          </button>
          <button onclick="controller.excluir(${tarefa.id})" class="btn-excluir">Excluir</button>
        </div>
      `;
      lista.appendChild(item);
    });
  }

  limparFormulario() {
    document.getElementById('titulo').value = '';
    document.getElementById('descricao').value = '';
  }

  mostrarErro(msg) {
    alert(msg);
  }
}
