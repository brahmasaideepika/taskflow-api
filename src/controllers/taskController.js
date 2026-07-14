let tasks = [];
let currentId = 1;

// Get all tasks
export const getTasks = (req, res) => {
    res.status(200).json(tasks);
};
// Get task by ID
export const getTaskById = (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    res.status(200).json(task);
};
// Create a task
export const createTask = (req, res) => {
    const { text } = req.body;

    if (!text || text.trim() === "") {
        return res.status(400).json({
            error: "Task text is required"
        });
    }

    const newTask = {
        id: currentId++,
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Update task
export const updateTask = (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    const { text, completed } = req.body;

    if (text !== undefined) task.text = text;
    if (completed !== undefined) task.completed = completed;

    res.status(200).json(task);
};

// Delete task
export const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);

    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    tasks.splice(index, 1);

    res.status(204).send();
};