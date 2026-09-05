# Yeşil Pusula

Yeşil Pusula is an interactive web-based climate awareness game. Players enter location-based codes, read short informational content, answer multiple-choice questions, and receive the clue for the next stage.

## Features

- Code-based game flow
- Climate and sustainability themed quiz content
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

No build step is required. Open `index.html` in a browser or serve the folder with a simple local server.

For example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Notes

The quiz content is kept in `data.js`, while application behavior is separated into `script.js` for easier maintenance. The interface was cleaned and refactored from an earlier single-file version of the project.

## Acknowledgements

The initial interface scaffold of the earlier version was adapted from a CodingNepal web tutorial/template. The current version separates the project logic and quiz data into maintainable files and removes unused template elements.
