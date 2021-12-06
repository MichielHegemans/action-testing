FROM node:14

ENV NODE_ENV=production

WORKDIR /app
RUN npm install -g bats

# Run node directly, as npm start does not forward signals
ENTRYPOINT [ "bats", "-v" ]
