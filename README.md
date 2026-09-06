# Yeşil Pusula

Yeşil Pusula is an interactive web-based climate awareness game. Players enter location-based codes, read short informational content, answer multiple-choice questions, and receive the clue for the next stage.

## Live Demo

🌐 [Open Yeşil Pusula](https://1hilal7.github.io/yesil-pusula/)

## Project Background — TÜBİTAK 2204-D

Yeşil Pusula was developed as a digital extension of a TÜBİTAK 2204-D project focused on climate awareness and sustainability.

The original project received 3rd place. After the competition process, we continued developing the idea and transformed its educational content into an interactive web-based experience.

This website represents the software and digital development stage of that work.

## Features

- Code-based game flow
- Climate and sustainability-themed quiz content
- Multiple-choice question feedback
- Sequential question and clue system
- Responsive interface for desktop and mobile
- Keyboard-friendly code entry

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

```text
yesil-pusula/
├── assets/
│   └── images/
│       └── background.avif
├── .gitignore
├── data.js
├── index.html
├── README.md
├── script.js
└── style.css
```

## Run Locally

No build step is required.

You can open `index.html` directly in a browser or serve the project with a simple local server:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000`

## Technical Notes

The quiz content is stored separately in `data.js`, while the application logic is handled in `script.js`. This separation keeps the content and application behavior organized and makes the project easier to maintain.

The current version was refactored from an earlier single-file implementation by separating the quiz data, application logic, styling, and assets into dedicated files.

## Acknowledgements

The initial interface scaffold of the earlier version was adapted from a CodingNepal web tutorial/template. The current version separates the project logic and quiz data into maintainable files and removes unused template elements.