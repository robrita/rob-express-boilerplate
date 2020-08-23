#Define the image we want to build from
FROM node:8.11.0

#Copy the current directory to a newly created working directory
COPY . /code

#Define the working directory - Change this to the directory your Node app is defined in
WORKDIR /code/server

RUN echo $(ls -a)

#Define all environment variables. Here, we're defining the PORT environment variable
ENV PORT=2020

#This app binds to port 3000, so we use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 2020

# Run application
CMD [ "node", "server.js"]
