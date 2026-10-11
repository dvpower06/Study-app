# Study App 

A clean, minimalist study companion designed to boost productivity by pairing a focused **Pomodoro Timer** with an intuitive **Task Checklist** for each study session.

Built with **React** + **Vite**. (CSS made with AI)


![alt text](image.png)

---

##  Features

- **Pomodoro Timer**:
  - Classic 25-minute focus intervals (`25:00`).
  - Intuitive controls: `Start`, `Stop`, and `Reset`.
  - Pause and continue anytime during a study session.
- **Study Session Checklist**:
  - Add tasks on the fly to plan out your study block.
  - Interactive checkboxes to mark progress as you complete objectives.
  - Quick-delete button (`x`) to remove completed or outdated items.
---

##  Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Bundler & Build Tool**: [Vite](https://vite.dev/)
- **Linting**: [ESLint](https://eslint.org/)

---

##  Project Structure

```text
├── public/                # Static public assets (SVG icons, favicon)
├── src/
│   ├── assets/            # App graphic assets
│   ├── App.jsx            # Main app logic (Pomodoro & Tasks components)
│   ├── App.css            # Stylesheet for layout and widgets
│   └── main.jsx           # React entry point
├── index.html             # Main HTML entry file
├── package.json           # Dependencies and build scripts
└── vite.config.js         # Vite configuration (base relative paths)
```
