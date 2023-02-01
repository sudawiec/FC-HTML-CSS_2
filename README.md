# FC-HTML-CSS_2

The additional project of the HTML/CSS module of the Future Collars Bootcamp

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

Project is based on Figma project design provided by Future Collars

### The challenge

Users should be able to:

- View the optimal layout based on the 1600px screen size
- Additionally
  - View the optimal layout depending on their device's screen size
  - See smooth scroll animation after clicking the links
  - Click a hamburger button on the small screen's sizes and see the vertical menu
  - Build an image slider by defining logic in the index.js file

### Screenshot

![The project no.2 website preview](./images/project-no2.png)

### Links

- Source code URL: [https://github.com/sudawiec/FC-HTML-CSS_2](https://github.com/sudawiec/FC-HTML-CSS_2)
- Live site URL: [https://effulgent-sunflower-86d938.netlify.app/](https://effulgent-sunflower-86d938.netlify.app/)

## My process

### Built with

- Semantic HTML markup
- Flexbox
- Mobile-first workflow
- CSS custom properties(variables)
- JavaScript DOM Nodes manipulation

### What I learned

- Usage of the :where() pseudo-class function which takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list. It has 0 specificity compared to :is()

```css
:where(h1, h2, h3, h4, .ft-main__info-title, .ft-main__adress, .ft-main__contact, .ft-main__title, .ft-bottom__left-text) {
    color: var(--text-color-dark);
}
```

-

### Continued development

The next step I'm going to focus on:

- Refactoring style.css file
- Create a clickable dropdowns in horizontal navigation
- Fix positioning in features section
- Making slider in testimonials section

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - Great and irreplaceable resource of knowledge
- [W3Schools](https://www.w3schools.com/) - Great and irreplaceable resource of knowledge
- [CSS-Tricks](https://css-tricks.com/) - They have handy solutions with nice graphic design
- [JavaScript Info](https://javascript.info/) - Modern JavaScript fundamentals explenations

## Author

- Radek Warakomski - [sudawiec](https://github.com/sudawiec)
