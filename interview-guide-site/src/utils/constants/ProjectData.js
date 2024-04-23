export const projectsData = [
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
    {
        id: 4,
        title: "Blog Platform",
        description: "Build a simple blog platform where users can post articles, comment, and like posts.",
        difficulty: "Medium",
        details: "Develop a basic blog platform with CRUD operations for articles and comments.",
        code: `
      import React, { useState, useEffect } from 'react';
      
      const BlogPlatform = () => {
        const [posts, setPosts] = useState([]);
      
        useEffect(() => {
          fetch('/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
        }, []);
      
        const addPost = (newPost) => {
          setPosts([...posts, newPost]);
        };
      
        return (
          <div>
            <h1>Blog Platform</h1>
            {posts.map(post => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
            ))}
            <button onClick={() => addPost({ id: Date.now(), title: 'New Post', content: 'Content here...' })}>Add Post</button>
          </div>
        );
      };
      
      export default BlogPlatform;
        `
    }, {
        id: 5,
        title: "Chat Application",
        description: "Create a real-time chat application using React and Socket.io.",
        difficulty: "Hard",
        details: "Develop a chat application where users can join rooms and send messages in real-time.",
        code: `
      import React, { useState, useEffect } from 'react';
      import io from 'socket.io-client';
      
      const socket = io('http://localhost:3000');
      
      const ChatApp = () => {
        const [message, setMessage] = useState('');
        const [messages, setMessages] = useState([]);
      
        useEffect(() => {
          socket.on('receive_message', message => {
            setMessages(prevMessages => [...prevMessages, message]);
          });
        }, []);
      
        const sendMessage = () => {
          socket.emit('send_message', message);
          setMessage('');
        };
      
        return (
          <div>
            <h1>Chat Room</h1>
            {messages.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
          </div>
        );
      };
      
      export default ChatApp;
        `
    }, {
        id: 6,
        title: "Recipe Finder",
        description: "Build an application that allows users to search for recipes using an external API.",
        difficulty: "Easy",
        details: "Create an interface for users to input search queries and display results fetched from an external API.",
        code: `
      import React, { useState } from 'react';
      import axios from 'axios';
      
      const RecipeFinder = () => {
        const [query, setQuery] = useState('');
        const [recipes, setRecipes] = useState([]);
      
        const fetchRecipes = async () => {
          const result = await axios.get(\`https://api.edamam.com/search?q=\${query}&app_id=your_app_id&app_key=your_app_key\`);
          setRecipes(result.data.hits);
        };
      
        return (
          <div>
            <h1>Find a Recipe</h1>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={fetchRecipes}>Search</button>
            <ul>
              {recipes.map((item, index) => (
                <li key={index}>{item.recipe.label}</li>
              ))}
            </ul>
          </div>
        );
      };
      
      export default RecipeFinder;
        `
    },



];