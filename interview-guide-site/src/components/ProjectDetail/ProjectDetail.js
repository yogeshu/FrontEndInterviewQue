import React, { useState } from 'react';
import styles from './ProjectDetail.module.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
  const ProjectDetail = ({ projectId }) => {
    const [showCode, setShowCode] = useState(false);
  
    // Find the project by ID
    const project = projectsData.find(p => p.id === projectId);
  
    const toggleCodeVisibility = () => {
      setShowCode(!showCode);
    };
  
    if (!project) {
      return <div>Project not found</div>; // Handling cases where the project is not found
    }
  
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.difficultyTag}>
            <span className={styles.difficultyLabel}>Difficulty:</span>
            <span className={`${styles.difficultyValue} ${styles[project.difficulty.toLowerCase()]}`}>
              {project.difficulty}
            </span>
          </div>
        </div>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.detailsContainer}>
          <h2 className={styles.detailsTitle}>Project Details</h2>
          <p className={styles.detailsText}>{project.details}</p>
        </div>
        <div className={styles.codeContainer}>
          <button className={styles.codeButton} onClick={toggleCodeVisibility}>
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
          {showCode && (
            <SyntaxHighlighter language="javascript" style={dark}>
              {project.code}
            </SyntaxHighlighter>
          )}
        </div>
      </div>
    );
  };
  
  export default ProjectDetail;
