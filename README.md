# Gerenciador de Tarefas — Padrão MVC + FrontController

Projeto desenvolvido para a disciplina *Desenvolvimento Web 2*  
Campus: Limoeiro do Norte — IFCE  
Aluno: Daniel da Silva Xavier  

---

## Estrutura do Projeto

```
projeto-mvc/
├── index.html              ← Página principal
├── app.js                  ← FrontController (inicialização)
└── app/
    ├── models/
    │   └── tasks.js        ← Model (dados e regras de negócio)
    ├── views/
    │   └── view.js         ← View (exibição na tela)
    └── controllers/
        └── controller.js   ← Controller (lógica e ações do usuário)
```

## Como rodar

Abra o arquivo `index.html` direto no navegador. Não precisa de servidor.

## Funcionalidades

- ✅ Adicionar tarefas com título e descrição
- ✅ Marcar tarefa como concluída / reabrir
- ✅ Excluir tarefa
- ✅ Interface responsiva
