FROM node:14 AS build

WORKDIR /app

COPY package*.json ./
ENV DISABLE_OPENCOLLECTIVE=yes
RUN npm install --no-fund --no-audit
COPY tsconfig.json ./tsconfig.json
COPY src ./src
RUN npm run build


FROM node:14

WORKDIR /app

# Copy in package.json and package-lock.json only to cache layer.
COPY package*.json ./
ENV DISABLE_OPENCOLLECTIVE=yes
RUN npm install --no-fund --no-audit --production

# Copy in source code.
COPY --from=build /app/dist ./dist

ENTRYPOINT [ "node", "dist/index.js" ]
