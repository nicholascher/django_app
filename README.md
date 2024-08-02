# Events App

A full-stack application that allows users to view and manage events. The application uses Django for the backend and React Native for the frontend. Docker is used for containerising and managing the setup of the backend environment.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
  - [Docker Setup](#docker-setup)
  - [Running the frontend](#running-the-frontend)
  - [Accessing the app](#access-the-application)


## Features

- **Event Management**: View, create, update, and delete events.
- **Event Details**: View detailed information about individual events.
- **Responsive Design**: Optimized for both iOS and Android devices.

## Technology Stack

- **Backend**: Django (Python)
- **Frontend**: React Native
- **Database**: SQLite (for development); can be replaced with PostgreSQL or other RDBMS for production.
- **API Communication**: RESTful API
- **Containerization**: Docker

## Installation

### Docker Setup

Docker simplifies the setup process by containerizing the backend processes. Follow these steps to get started:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/nicholascher/django-app.git
   cd django-app
   ```

2. **Build and Run Container**

   In the root directory of the project, you'll find a `docker-compose.yml` file that defines the services for the backend and frontend. Use Docker Compose to build and run the containers:

   ```bash
   docker-compose up --build
   ```

   This command will:
   - Build the Docker images defined in the Dockerfiles.
   - Start the containers for the backend.

### Running the frontend
   Next using a seperate terminal, install the neccessary node.js dependencies for the frontend. Ensure that you are in the same directory as the package.json file. This should require you to cd into the `frontend` directory. Then run:

   ```bash
   npm install
   ```

   Then to start the frontend for the app, run:

   ```bash
   npm expo start
   ```

### Access the Application

   - **Backend**: The Django backend will be accessible at `http://localhost:8000` or `http://0.0.0.0:8000`
   - **Frontend**: Follow the instructions in the terminal to launch the respective simulators. Ensure that you have the neccesary simulators installed. 