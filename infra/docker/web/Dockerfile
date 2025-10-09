FROM node:20
WORKDIR /app
COPY ../../package*.json ../../turbo.json ../../tsconfig.base.json ./
RUN npm install
COPY ../../apps/web ./apps/web
COPY ../../packages ./packages
RUN npm run build --workspaces=false || true
EXPOSE 3000
