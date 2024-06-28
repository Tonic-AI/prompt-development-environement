# Use an official Python runtime as a parent image  
FROM continuumio/miniconda3  
  
# Set the working directory in the container to /app  
WORKDIR /app  
  
# Add metadata to an image  
LABEL maintainer="example@example.com"  
  
# Copy the current directory contents into the container at /app  
COPY . /app  
  
# Ensure the script has execution permissions  
RUN chmod +x /app/activate_conda.sh  
  
# Ensure Conda is initialized  
RUN conda init bash  
  
# Make port 80 available to the world outside this container  
EXPOSE 80  
  
# Run the command to execute your script  
CMD ["./activate_conda.sh"]  