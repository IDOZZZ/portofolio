# Gunakan image node resmi sebagai base image
FROM node:18-alpine AS deps

# Set working directory
WORKDIR /app

# Salin package.json dan package-lock.json / yarn.lock
COPY package*.json ./

# Install dependencies
RUN npm install

# Tahap build aplikasi
FROM node:18-alpine AS builder

WORKDIR /app

# Salin semua file dari proyek dan dependensi
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Tahap final untuk menjalankan aplikasi
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Install hanya dependensi produksi
COPY --from=deps /app/node_modules ./node_modules

# Salin hasil build dan file penting lainnya
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

# Set environment variable untuk production
ENV NODE_ENV=production

# Jalankan aplikasi
CMD ["npm", "start"]
