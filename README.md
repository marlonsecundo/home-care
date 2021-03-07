# Home Care

Health project about Home Care system. Created for the lais selection process.

<br>

### [Link to Edital](https://lais.huol.ufrn.br/lais-seleciona-pesquisador-de-graduacao-e-pos-graduacao-da-area-de-tecnologia-edital-003-2021/)

<br>
<br>

## 📜 Main Frameworks

---

### [Expo:](https://expo.io/) React Native Project

### [Adonis V5:](https://preview.adonisjs.com/) Backend Node Project in Typescript

<br>
<br>

## 🏁 Installation

---

### ⚠️ Requisites

- yarn
- node (stable version)
- redis

---

## 🖥️ BACKEND

<br>
<br>

## ⚠️⚠️ **For the patient log generetation service you need to install the REDIS** ⚠️⚠️

## [REDIS - DOWNLOAD/INSTALLATION GUIDE](https://redis.io/download#installation)

<br>
<br>

**After the redis installation, run the redis server in your local machine**

```bash
# ~/redis-installation-folder

src/redis-server
```

**For instalation of the adonis modules, run the following command in the root of the project**

```bash
# ~/home-care

cd server

# ~/home-care/server

yarn
```

**Run the database migrations**

```bash
# ~/home-care/server
node ace migration:run
```

**Seed the database**

```bash
# ~/home-care/server
node ace db:seed
```

**Now run the server**

```bash
# ~/home-care/server
yarn dev
```

<br>

---

## 📱MOBILE

<br>

## **⚠️⚠️CHANGE THE BASE_URL VARIABLE TO THE IP OF YOUR LOCAL MACHINE WHERE THE SERVER IS RUNNING ⚠️⚠️**

```js
// ~/home-care/src/services/api.ts

export const BASE_URL = 'http://192.168.0.8:3333';
```

## **TO:**

```js
// ~/home-care/src/services/api.ts

// replace "your-local-machine-ip" to corresponding value

export const BASE_URL = 'http://your-local-machine-ip:3333';
```

**For instalation of the expo modules, run the following command in the root of the project**

```bash
# ~/home-care

yarn
```

<br/>
<br/>

## ⚠️⚠️ INSTALL AND OPEN THE EXPO APP IN YOUR PHONE ⚠️⚠️

## [EXPO APP - DOWNLOAD](https://expo.io/tools#client)

<br/>
<br/>

**Run the following command in project root**

```bash
# ~/home-care

yarn start
```

**Finally with a developer phone running the expo app, scan the printed qr code in terminal**

<br/>
<br/>

---

<br/>
<br/>

## 👤 Seeded Users

<br/>
<br/>

### 🤕 Patient

| Email       | Password |
| ----------- | -------- |
| p1@homecare | teste123 |
| p2@homecare | teste123 |
| p3@homecare | teste123 |
| p4@homecare | teste123 |

<br/>
<br/>

### 👨 Caregivers

| Email       | Password |
| ----------- | -------- |
| c1@homecare | teste123 |
| c2@homecare | teste123 |
| c3@homecare | teste123 |
| c4@homecare | teste123 |

<br/>
<br/>

### 👨‍⚕️ Neurologists

| Email       | Password |
| ----------- | -------- |
| n1@homecare | teste123 |
