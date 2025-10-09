FROM node:20
WORKDIR /app
COPY ../../package*.json ../../turbo.json ../../tsconfig.base.json ./
RUN npm install
COPY ../../apps/api ./apps/api
RUN npm run build --workspaces=false || true
EXPOSE 3001
