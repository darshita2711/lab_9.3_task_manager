# Task Manager

## Description

A simple Task Manager application built with React, TypeScript, and CSS. It displays tasks as separate cards and allows users to filter tasks by status and priority and delete tasks.

## Features

- Display tasks as individual cards.
- Filter tasks by status.
- Filter tasks by priority.
- Show task title, description, status, priority, and due date.
- Delete tasks.
- Display a message when no tasks match the selected filters.

## Technologies Used

- React
- TypeScript
- CSS
- Vite

## Components

- **App:** Manages task data and filtering.
- **TaskFilter:** Provides status and priority dropdowns.
- **TaskList:** Displays the filtered task cards.
- **TaskItem:** Displays the details of one task and provides a Delete button.

## How to Run

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Open the project folder:

   ```bash
   cd YOUR_PROJECT_FOLDER
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal.

## Example Usage

1. Open the Task Manager application.
2. View the task cards.
3. Select a status to filter tasks.
4. Select a priority to filter tasks.
5. Click Delete to remove a task.

## Learning Objectives

- Practice React components and props.
- Use TypeScript interfaces and types.
- Manage state with `useState`.
- Filter arrays of objects.
- Render lists using `map()` and unique keys.
- Apply CSS styling and conditional rendering.