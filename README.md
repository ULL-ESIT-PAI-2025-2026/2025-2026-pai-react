## PAI Class Presentation — React + MVC

### Interactive examples and concepts adapted from PAI to React

This project demonstrates how core concepts from the subject **Programación de Aplicaciones Interactivas (PAI)** can be adapted and implemented using **React**, maintaining the **MVC architecture** and introducing modern frontend practices such as Hooks and declarative rendering.

---

## 📁 Project Structure

This directory is organised as follows:

```

.
├── bib          # Bibliography and references used in the project
├── slides       # Slides of the presentation
├── src          # Source code (examples and demos)

````

### 🔹 Source code structure

The `src` directory contains a set of progressive examples:

- `1-hello-world` → Basic React component  
- `2.1-book-props-example` → Props usage  
- `4.1-events` → Event handling  
- `5-use-state` → State management with Hooks  
- `6.1-use-effect` → Lifecycle with useEffect  
- `6.2-use-ref` → Direct DOM access (canvas)  
- `7-mini-mvc` → MVC pattern adapted to React  
- `8-canvas-with-react` → Canvas rendering in React  
- `11-final-demo` → Final integration (MVC + React + Canvas)

Additionally:

- `App.tsx` → Main application component  
- `examples.ts` → Example routing/selection logic  
- `main.tsx` → React entry point  

---

## ⚛️ Concept Overview

This project focuses on the following key ideas:

- React components as the **View**
- Hooks as a way to manage **Controller logic**
- State as the **Model**
- Declarative rendering instead of manual DOM manipulation
- Integration of **Canvas** within React

---

## 🚀 Running the project

### Install dependencies

```bash
npm install
````

---

### Development mode

```bash
npm run dev
```

Runs the application locally with hot reload.

---

### Build for production

```bash
npm run build
```

Generates the optimized production files inside the `dist/` directory.

---

### Preview build

```bash
npm run preview
```

Runs a local server to preview the production build (same behaviour as deployment).

---

## 🌐 Deployment

The project is deployed using **GitHub Pages** with **GitHub Actions**.

On each push to `main`:

* The project is built (`npm run build`)
* The `dist/` folder is generated
* The application is automatically deployed

---

## 🎯 Objective

The main goal of this project is to show that:

> MVC architecture can be preserved in React, while adopting a more modern and declarative way of rendering the UI.

---

## 📚 Bibliography

See `/bib` directory for all references used.

---

> *This documentation was prepared for the PAI course at Universidad de La Laguna.*
