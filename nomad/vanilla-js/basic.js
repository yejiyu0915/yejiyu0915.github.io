//login
(()=>{
    const loginBox = document.querySelector('#login');
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const greeting = document.querySelector("#greeting");

    const HIDE_CLASSNAME = "hide";
    const USERNAME_KEY = "username";

    function onLoginSubmit(event) {
        event.preventDefault();
        loginBox.classList.add(HIDE_CLASSNAME);
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username);
        paintGreetings(username);
    }

    function paintGreetings(username) {
        greeting.innerHTML = `* Have a nice day, <em>${username}.</em>`;
        greeting.classList.remove(HIDE_CLASSNAME);
    }

    const savedUsername = localStorage.getItem(USERNAME_KEY);

    if (savedUsername === null) {
        loginBox.classList.remove(HIDE_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    } else {
        paintGreetings(savedUsername);
    }
})();

//background
(()=>{
    function bgChange() {
        const images = [
            "https://images.unsplash.com/photo-1647163927506-399a13f9f908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80", 
            "https://images.unsplash.com/photo-1647163927209-b7e5a9d53edc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80", 
            "https://images.unsplash.com/photo-1647268342843-b52de008e348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2348&q=80",
            "https://images.unsplash.com/photo-1646913508338-dd80ba9d65e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3474&q=80",
            "https://images.unsplash.com/photo-1647003613495-b5f9a858365b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80",
            "https://images.unsplash.com/photo-1610123598195-eea6b6be4c48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80",
            "https://images.unsplash.com/photo-1646932305829-aa5e39e8756e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3475&q=80",
            "https://images.unsplash.com/photo-1609385509807-f191a8dc2bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
            "https://images.unsplash.com/photo-1646408271568-977e12b6425a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
            "https://images.unsplash.com/20/dusty-sky.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2348&q=80",
            "https://images.unsplash.com/photo-1645564146384-82483fca52e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
            "https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80",
            "https://images.unsplash.com/photo-1643712662909-29fe8f02b613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
            "https://images.unsplash.com/photo-1502732728614-8329a1bf1415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        ];
        const chosenImage = images[Math.floor(Math.random() * images.length)];
        const wrap = document.querySelector('#wrap');
        wrap.style.backgroundImage = `url('${chosenImage}')`;
    } bgChange();
    const bgBtn = document.querySelector('#bg-btn');
    bgBtn.addEventListener('click', bgChange);
})();


// weather
(()=>{
    const weatherBox = document.querySelector('#weather');
    const weather = weatherBox.querySelector(".weather_info");
    const city = weatherBox.querySelector(".city");
    const country = weatherBox.querySelector('.country')
    const API_KEY = "63d07399969f392b8ee2a0f0cb270158";

    function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((wData) => {
        weather.innerText = `${wData.weather[0].main} / ${wData.main.temp},`;
        city.innerText = wData.name + ",";
        country.innerText = wData.sys.country;
        });
    }
    function onGeoError() {
    alert("Can't find you. No weather for you.");
    }

    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
})();

//clock
(()=>{
    const clock = document.querySelector("#clock");

    function getClock() {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        const day = date.getDay();
        const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        clock.innerHTML = `${hours}:${minutes}:${seconds} <em>${dayName[day]}</em>`;
    }

    getClock();
    setInterval(getClock, 1000);
})();

//quote
(()=>{
    const quotes = [
        {
          quote: "The way to get started is to quit talking and begin doing.",
          author: "Walt Disney",
        },
        {
          quote: "Life is what happens when you're busy making other plans.",
          author: "John Lennon",
        },
        {
          quote:
            "The world is a book and those who do not travel read only one page.",
          author: "Saint Augustine",
        },
        {
          quote: "Life is either a daring adventure or nothing at all.",
          author: "Helen Keller",
        },
        {
          quote: "To Travel is to Live",
          author: "Hans Christian Andersen",
        },
        {
          quote: "Only a life lived for others is a life worthwhile.",
          author: "Albert Einstein",
        },
        {
          quote: "You only live once, but if you do it right, once is enough.",
          author: "Mae West",
        },
        {
          quote: "Never go on trips with anyone you do not love.",
          author: "Hemmingway",
        },
        {
          quote: "We wander for distraction, but we travel for fulfilment.",
          author: "Hilaire Belloc",
        },
        {
          quote: "Travel expands the mind and fills the gap.",
          author: "Sheda Savage",
        },
      ];
      const quoteTxt = document.querySelector('#quote');
      const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

      quoteTxt.innerHTML = `${todaysQuote.quote} <em>-${todaysQuote.author}.</em>`

})();

//todo
(()=>{
    const toDoForm = document.getElementById("todo-form");
    const toDoInput = document.querySelector("#todo-form > input");
    const toDoList = document.getElementById("todo-list");

    const TODOS_KEY = "todos";

    let toDos = [];

    function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    }

    function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    }

    function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const chk = document.createElement("input");
    chk.setAttribute('type', 'checkbox');
    chk.id = li.id + "_i";
    const label = document.createElement("label");
    label.htmlFor = chk.id;
    label.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "×";
    button.addEventListener("click", deleteToDo);
    li.appendChild(chk);
    li.appendChild(label);
    li.appendChild(button);
    toDoList.appendChild(li);
    }

    function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
    }

    toDoForm.addEventListener("submit", handleToDoSubmit);

    const savedToDos = localStorage.getItem(TODOS_KEY);

    if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    }
})();