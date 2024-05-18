# Base Image: Utilizes the official Python slim image from Docker Hub to minimize the container size while maintaining necessary Python capabilities.
FROM python:3.12.3-slim-bookworm

# Working Directory: Sets the working directory within the container where all the commands will be run.
WORKDIR /usr/src/pixel_backend

# Environment Variables:
# PYTHONDONTWRITEBYTECODE: Prevents Python from writing .pyc files to disk, which is useful in a container environment where these files are unnecessary.
# PYTHONUNBUFFERED: Ensures that Python's output and logs are displayed in real-time in the terminal, facilitating better monitoring and debugging.
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Netcat Installation: Installs netcat, a versatile networking tool used for network diagnostics and configuration.
RUN apt-get update && apt-get install -y netcat-openbsd && rm -rf /var/lib/apt/lists/*

# Python Packages Installation:
# 1. Upgrades pip to ensure the latest features and security patches are used.
# 2. Copies the requirements file into the container.
# 3. Installs the Python dependencies specified in the requirements.txt file.
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# Entrypoint Script Preparation:
# 1. Copies the entrypoint script into the working directory.
# 2. Removes carriage return characters to prevent script execution errors in Unix/Linux environments.
# 3. Makes the script executable, enabling it to be run as the entrypoint.
COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /usr/src/pixel_backend/entrypoint.sh
RUN chmod +x /usr/src/pixel_backend/entrypoint.sh

# Application Code Copy:
# Copies the entire backend application codebase to the working directory in the container, making it available for execution.
COPY . .

# Container Entrypoint:
# Specifies the entrypoint script to be executed when the container starts, ensuring the container is initialized correctly.
ENTRYPOINT ["/usr/src/pixel_backend/entrypoint.sh"]