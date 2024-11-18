# Kanban Board Application

A responsive Kanban Board application built with React, featuring drag-and-drop functionality using `react-dnd`, CRUD operations via a JSON server, and a modal for task creation. The project is designed to manage tasks efficiently across different statuses: **Backlog**, **On Progress**, and **Done**.

---

## Features

- 🖱️ **Drag-and-Drop**: Move tasks between columns seamlessly.
- 📋 **CRUD Operations**:
  - **Create**: Add new tasks using a modal form.
  - **Read**: Display tasks grouped by status.
  - **Delete**: Remove tasks with a single click.
- 📱 **Responsive Design**: Optimized for desktop and mobile devices.
- 🌐 **API Integration**: Data persistence with `json-server`.

---

## Tech Stack

### Frontend
- **React**: Component-based UI development.
- **react-dnd**: Drag-and-drop functionality with `react-dnd-html5-backend`.
- **Tailwind CSS**: Styling for a clean, responsive layout.

### Backend
- **JSON Server**: Mock API for data persistence.

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/kanban-board.git
cd kanban-board

### 2. Install Dependencies
```bash
npm install

### 3. Start JSON Server
```bash
{
  "tasks": []
}
## Run JSON server:

### 4. Start React Application
```bash
npm run dev

