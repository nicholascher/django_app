# Events App

A full-stack application that allows users to view and manage events. The application uses Django for the backend and React Native for the frontend. Docker is used for containerizing and managing the setup of both the backend and frontend environments.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
  - [Docker Setup](#docker-setup)


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

Docker simplifies the setup process by containerizing both the backend and frontend. Follow these steps to get started:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/nicholascher/django-app.git
   cd django-app
   ```

2. **Build and Run Containers**

   In the root directory of the project, you'll find a `docker-compose.yml` file that defines the services for the backend and frontend. Use Docker Compose to build and run the containers:

   ```bash
   docker-compose up --build
   ```

   This command will:
   - Build the Docker images defined in the Dockerfiles.
   - Start the containers for the backend and frontend.

3. **Access the Application**

   - **Backend**: The Django backend will be accessible at `http://localhost:8000`.
   - **Frontend**: The React Native frontend will be available on the default port for React Native apps. You might need to run the React Native Metro Bundler within the container if it is set up to use a specific port.