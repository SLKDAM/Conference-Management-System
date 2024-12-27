// Data Simulation (Replace this with actual API calls)
const data = {
    participants: [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ],
    schedule: [
      { id: 1, title: "Opening Ceremony", time: "9:00 AM" },
      { id: 2, title: "Keynote Speech", time: "10:00 AM" },
    ],
    tracks: [
      { id: 1, title: "AI and Machine Learning", description: "Explore AI advancements" },
      { id: 2, title: "Cybersecurity", description: "Latest in cybersecurity trends" },
    ],
  };
  
  // Show the appropriate section
  function showSection(sectionId) {
    document.querySelectorAll('.crud-section').forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    loadTable(sectionId);
  }
  
  // Load data into tables
  function loadTable(section) {
    const table = document.getElementById(`${section}-table`).querySelector('tbody');
    table.innerHTML = ''; // Clear previous rows
  
    data[section].forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name || item.title}</td>
        <td>${item.email || item.time || item.description}</td>
        <td>
          <button onclick="editItem('${section}', ${item.id})">Edit</button>
          <button onclick="deleteItem('${section}', ${item.id})">Delete</button>
        </td>
      `;
      table.appendChild(row);
    });
  }
  
  // CRUD Operations
  function createItem(section) {
    const id = data[section].length + 1;
    const nameOrTitle = prompt(`Enter ${section === 'participants' ? 'Name' : 'Title'}`);
    const emailOrDescription = section === 'participants' 
      ? prompt("Enter Email") 
      : prompt("Enter Description/Time");
  
    data[section].push({
      id,
      name: nameOrTitle,
      email: emailOrDescription,
      title: nameOrTitle,
      time: emailOrDescription,
      description: emailOrDescription,
    });
  
    loadTable(section);
  }
  
  function editItem(section, id) {
    const item = data[section].find(item => item.id === id);
    if (!item) return;
  
    const nameOrTitle = prompt("Edit Name/Title", item.name || item.title);
    const emailOrDescription = prompt("Edit Email/Description", item.email || item.description || item.time);
  
    item.name = nameOrTitle;
    item.title = nameOrTitle;
    item.email = emailOrDescription;
    item.description = emailOrDescription;
    item.time = emailOrDescription;
  
    loadTable(section);
  }
  
  function deleteItem(section, id) {
    data[section] = data[section].filter(item => item.id !== id);
    loadTable(section);
  }
  