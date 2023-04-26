import React, { useState } from "react";
import TodoForm from "../components/Form/TodoForm";
import TodoTask from "../components/Task/TodoTask";

const TASK_TITLES = [
  "Hacer la compra",
  "Ir al médico",
  "Llamar al electricista",
  "Hacer la colada",
  "Ir al gimnasio",
  "Llevar el coche al taller",
  "Revisar el correo electrónico",
  "Leer un capítulo del libro",
  "Escribir una carta",
  "Limpiar la casa",
  "Hacer una llamada de negocios",
  "Enviar un paquete",
  "Hacer una cita con el peluquero",
  "Hacer una cita con el dentista",
  "Hacer una cita con el abogado",
  "Estudiar para un examen",
  "Enviar una factura",
  "Hacer una presentación",
  "Organizar el escritorio",
  "Hacer una llamada de seguimiento",
  "Resolver un problema técnico",
  "Hacer una tarea del hogar",
  "Hacer una tarea del trabajo",
  "Ir a una reunión",
  "Actualizar el currículum vitae",
  "Buscar trabajo en línea",
  "Aprender un nuevo idioma",
  "Aprender a programar",
  "Tomar una clase de cocina",
  "Ir a un concierto",
  "Visitar a un amigo",
  "Ir al cine",
  "Ver una película en casa",
  "Ir a un museo",
  "Ir a una exposición de arte",
  "Ir de compras",
  "Hacer una reparación en casa",
  "Reorganizar el armario",
  "Escribir un diario",
  "Hacer una actividad al aire libre",
  "Hacer yoga",
  "Hacer meditación",
  "Salir a caminar",
  "Ir a correr",
  "Ir en bicicleta",
  "Aprender a tocar un instrumento",
  "Leer las noticias del día",
  "Esperar una entrega",
  "Aprender una nueva habilidad",
  "Hacer una compra en línea",
  "Hacer una lista de la compra",
  "Hacer una lista de tareas pendientes",
  "Hacer una reserva en un restaurante",
  "Visitar a la familia",
  "Hacer una tarea de jardinería",
  "Hacer una tarea de bricolaje",
  "Ir a una conferencia",
  "Participar en un curso en línea",
  "Hacer una donación",
  "Hacer una sesión de fotos",
  "Actualizar las redes sociales",
  "Hacer un proyecto de arte",
  "Escribir una historia",
  "Hacer una tarea voluntaria",
  "Preparar una cena especial",
  "Ir a un festival",
  "Ir a una obra de teatro",
  "Hacer una tarea creativa",
  "Hacer una tarea física",
  "Hacer una tarea mental",
  "Hacer una tarea social",
  "Hacer una tarea emocional",
  "Hacer una tarea espiritual",
  "Hacer una tarea intelectual",
  "Hacer una tarea práctica",
  "Hacer una tarea de investigación",
  "Hacer una tarea de análisis",
  "Hacer una tarea de diseño",
  "Hacer una tarea de planificación",
  "Hacer una tarea de evaluación",
  "Hacer una llamada de seguimiento",
  "Preparar una presentación",
  "Llevar el coche a la revisión",
  "Ir al banco",
  "Revisar la agenda de la semana",
  "Hacer una caminata",
  "Hacer una tarea de escritura",
  "Hacer una tarea de investigación en línea",
  "Aprender a hacer un postre nuevo",
  "Hacer una tarea de cálculo",
  "Hacer una tarea de contabilidad",
  "Establecer una meta personal",
  "Actualizar el perfil de LinkedIn",
  "Hacer una actividad en equipo",
  "Hacer una tarea de diseño gráfico",
  "Hacer una tarea de edición de video",
  "Hacer una tarea de edición de audio",
  "Hacer una tarea de edición de fotos",
  "Hacer una tarea de traducción",
  "Hacer una tarea de transcripción",
  "Hacer una tarea de interpretación",
  "Hacer una tarea de redacción publicitaria",
  "Hacer una tarea de SEO",
  "Hacer una tarea de marketing digital",
  "Hacer una tarea de análisis de datos",
  "Hacer una tarea de minería de datos",
  "Hacer una tarea de programación web",
  "Hacer una tarea de desarrollo de software",
  "Hacer una tarea de gestión de proyectos",
  "Hacer una tarea de investigación de mercado",
  "Hacer una tarea de consultoría",
  "Hacer una tarea de capacitación",
  "Hacer una tarea de coaching",
  "Hacer una tarea de mentoring",
  "Hacer una tarea de terapia",
  "Hacer una tarea de yoga en grupo",
  "Hacer una tarea de meditación en grupo",
  "Hacer una tarea de gimnasia cerebral",
  "Hacer una tarea de terapia de arte",
  "Hacer una tarea de terapia de música",
  "Hacer una tarea de terapia ocupacional",
  "Hacer una tarea de terapia física",
  "Hacer una tarea de terapia de pareja",
  "Hacer una tarea de terapia familiar",
  "Hacer una tarea de terapia infantil",
  "Hacer una tarea de terapia de adicciones",
  "Hacer una tarea de terapia de duelos",
  "Hacer una tarea de terapia sexual",
  "Hacer una tarea de terapia de grupo",
  "Hacer una tarea de coaching personal",
  "Hacer una tarea de coaching empresarial",
  "Hacer una tarea de coaching de vida",
  "Hacer una tarea de coaching financiero",
  "Hacer una tarea de coaching de carrera",
  "Hacer una tarea de coaching de liderazgo",
  "Hacer una tarea de coaching de ventas",
  "Hacer una tarea de coaching de marketing",
  "Hacer una tarea de coaching de negocios",
  "Hacer una tarea de coaching de productividad",
  "Hacer una tarea de coaching de relaciones",
  "Hacer una tarea de coaching de comunicación",
  "Hacer una tarea de coaching de creatividad",
  "Hacer una tarea de coaching de bienestar",
  "Hacer una tarea de coaching de salud",
  "Hacer una tarea de coaching de alimentación",
  "Hacer una tarea de coaching deportivo",
];

const generateId = (complex = 10) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let id = "";
  for (let i = 0; i < complex; i++) {
    const getRandomChar = chars[Math.floor(Math.random() * chars.length)];
    id += getRandomChar;
  }
  return id;
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerTodo: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    padding: "20px",
  },
  tasks: {
    width: "100%",
    height: "300px",
    overflowY: "scroll",
  },
  task: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

/* 
      task = {
        id: string; --------------> unico
        title: string;
        completed: boolean;
      }
*/

const TodoView = () => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "" });

  // TAREAS
  const createTask = (title) => {
    return {
      id: generateId(),
      title,
      completed: false,
    };
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    const newState = tasks.filter((task) => task.id !== id);
    setTasks(newState);
  };

  const toggleTask = (id) => {
    const draft = structuredClone(tasks);
    const task = draft.find((task) => task.id === id);
    task.completed = !task.completed;
    setTasks(draft);
  };

  // FORMULARIO

  const resetForm = () => {
    setForm({ title: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = createTask(form.title);
    addTask(newTask);
    resetForm();
  };

  return (
    <div style={styles.container}>
      <div style={styles.containerTodo}>
        <div>
          <h1>Todo List</h1>
        </div>

        <div style={styles.tasks}>
          {tasks.map((task) => (
            <TodoTask
              key={task.id}
              task={task}
              removeTask={removeTask}
              toggleTask={toggleTask}
              styleTask={styles.task}
            />
          ))}
        </div>

        <TodoForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          styleForm={styles.form}
        />
      </div>
    </div>
  );
};

export default TodoView;
