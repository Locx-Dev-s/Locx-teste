import { useState } from 'react';

import '../styles/tasklist.scss';

import { FiTrash, FiCheckSquare } from 'react-icons/fi';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

interface Rent {
  totalValue: number;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [rent, setRent] = useState<Rent>();
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue((e.target as any).value);
  }

  function handleCreateNewTask() {
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
  }

  function handleToggleTaskCompletion(id: number) {
    // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
  }

  function handleRemoveTask(id: number) {
    // Remova uma task da listagem pelo ID
  }

  function handleCauculateRent(value: string) {
    // Calcular valor de um aluguel considenrando a tabela do IRRF e gerar um desconto de 4,79% sobre o valor total digitado.
  }
  return (
    <>
      <section className="task-list container">
        <header>
          <h2>Minhas tasks</h2>

          <div className="input-group">
            <input
              type="text"
              placeholder="Adicionar novo todo"
              onChange={(e) => setNewTaskTitle(e.target.value)}
              value={newTaskTitle}
            />
            <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
              <FiCheckSquare size={16} color="#fff" />
            </button>
          </div>
        </header>

        <main>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <div className={task.isComplete ? 'completed' : ''} data-testid="task">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      readOnly
                      checked={task.isComplete}
                      onClick={() => handleToggleTaskCompletion(task.id)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <p>{task.title}</p>
                </div>

                <button
                  type="button"
                  data-testid="remove-task-button"
                  onClick={() => handleRemoveTask(task.id)}
                >
                  <FiTrash size={16} />
                </button>
              </li>
            ))}
          </ul>
        </main>
        <header>
          <h2>Calcular Aluguel</h2>

          <div className="input-group">
            <input
              type="number"
              placeholder="Valor"
              onChange={(e) => handleChange(e)}
              value={value}
            />
            <button
              type="submit"
              data-testid="add-rent-button"
              onClick={() => handleCauculateRent(value)}
            >
              <FiCheckSquare size={16} color="#fff" />
            </button>
          </div>
        </header>

        <main>
          <ul>
            <p>{rent?.totalValue}</p>
          </ul>
        </main>
      </section>
    </>
  );
}
