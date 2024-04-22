import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Projects.module.css'; // Assuming CSS module for styling

const projectsData = [
  {
    id: 1,
    title: "Todo App",
    description: "Build a simple todo application using React.",
    difficulty: "Easy",
    details: "Create a list that allows users to add, remove, and mark tasks as completed.",
    code: `
import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask.trim(), completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
    `
  },
  {
    id: 2,
    title: "Weather App",
    description: "Fetch and display weather information from an API.",
    difficulty: "Medium",
    details: "Use an API to fetch weather data based on user's location and display it.",
    code: `
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, []);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const apiKey = 'YOUR_API_KEY';
      const response = await axios.get(
        \`https://api.openweathermap.org/data/2.5/weather?lat=\${latitude}&lon=\${longitude}&appid=\${apiKey}&units=metric\`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleLocationSubmit = async (event) => {
    event.preventDefault();
    try {
      const apiKey = 'YOUR_API_KEY';
      const response = await axios.get(
        \`https://api.openweathermap.org/data/2.5/weather?q=\${location}&appid=\${apiKey}&units=metric\`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleLocationSubmit}>
        <input type="text" value={location} onChange={handleLocationChange} placeholder="Enter city name" />
        <button type="submit">Get Weather</button>
      </form>
      {weather && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Description: {weather.weather[0].description}</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
    `
  },
  {
    id: 3,
    title: "E-commerce Dashboard",
    description: "Create a dashboard for managing an e-commerce store.",
    difficulty: "Hard",
    details: "Develop an admin dashboard for order management, product updates, and user analytics.",
    code: `
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EcommerceDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchOrders();
    fetchProducts();
    fetchUsers();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <h1>E-commerce Dashboard</h1>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order ID: {order.id}, Total: {order.total}
          </li>
        ))}
      </ul>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}, Price: {product.price}
          </li>
        ))}
      </ul>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}, Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EcommerceDashboard;
    `
  },
];
const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = filter === 'All'
    ? projectsData.filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : projectsData.filter(project => project.difficulty.toLowerCase() === filter.toLowerCase() && project.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.filterContainer}>
        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterButton} ${filter === 'All' && styles.active}`}
            onClick={() => setFilter('All')}
          >
            All
          </button>
          <button
            className={`${styles.filterButton} ${filter.toLowerCase() === 'easy' && styles.active}`}
            onClick={() => setFilter('Easy')}
          >
            Easy
          </button>
          <button
            className={`${styles.filterButton} ${filter.toLowerCase() === 'medium' && styles.active}`}
            onClick={() => setFilter('Medium')}
          >
            Medium
          </button>
          <button
            className={`${styles.filterButton} ${filter.toLowerCase() === 'hard' && styles.active}`}
            onClick={() => setFilter('Hard')}
          >
            Hard
          </button>
        </div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search projects..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className={styles.projectList}>
        {filteredProjects.map(project => (
          <Link key={project.id} to={`/projects/${project.id}`} className={styles.project}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <span className={`${styles.tag} ${styles[project.difficulty.toLowerCase()]}`}>
              {project.difficulty}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
