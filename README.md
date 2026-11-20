# 🚀 Customer Referral API

API robusta construída em **NestJS** para gerenciamento de clientes, programa de indicações (*referral*) com códigos exclusivos, relatórios analíticos, cache em Redis e mensageria via RabbitMQ.

---

## 🛠️ Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)** — Framework Node.js progressivo em TypeScript.
- **TypeScript** — Tipagem estática e segura.
- **Redis** — Cache e armazenamento rápido.
- **RabbitMQ** — Mensageria e processamento de filas assíncronas.
- **Vitest** — Testes unitários e de integração.

---

## 📁 Estrutura do Projeto

```text
customer-referral-api/
├── src/
│   ├── customers/       # Módulo de clientes e códigos de indicação
│   ├── reports/         # Módulo de relatórios e métricas de indicação
│   ├── redis/           # Módulo de integração com Redis
│   ├── rabbitmq/        # Módulo de mensageria RabbitMQ
│   ├── app.module.ts    # Módulo raiz da aplicação
│   └── main.ts          # Ponto de entrada (Bootstrap)
└── package.json
```

---

## 📦 Como Instalar e Rodar

1. **Acesse a pasta da API:**
   ```bash
   cd customer-referral-api
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor em modo de desenvolvimento:**
   ```bash
   npm run start:dev
   ```

O servidor estará rodando em `http://localhost:3000`.

---

## 📡 Endpoints da API

### 👥 Clientes (`/customers`)
- **`POST /customers`** — Cadastra um novo cliente e gera um código de indicação exclusivo.
  - *Exemplo de Body (JSON):*
    ```json
    {
      "name": "Kauan Lopes",
      "email": "kauan@example.com",
      "referredByCode": "REF-XYZ123"
    }
    ```
- **`GET /customers`** — Lista todos os clientes cadastrados.
- **`GET /customers/:id`** — Busca um cliente específico pelo ID.

### 📊 Relatórios (`/reports`)
- **`GET /reports/summary`** — Retorna métricas analíticas (total de clientes, clientes indicados vs orgânicos).
