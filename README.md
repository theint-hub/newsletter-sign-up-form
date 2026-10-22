# Newsletter sign-up form

My solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io).

## Table of contents

- [Overview](#overview)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Notes](#notes)
- [Author](#author)

## Overview

Users can:

- Subscribe with their email address and see a success message
- See an error message when the email is empty or not in a valid format
- Dismiss the success message and return to the form
- See the layout change to suit their screen size (mobile and desktop designs)
- See hover and focus states on interactive elements

## Links

- Live site:  https://theint-hub.github.io/newsletter-sign-up-form/
- Repository: https://github.com/theint-hub/newsletter-sign-up-form.git

## Built with

- Semantic HTML5
- CSS custom properties (variables)
- CSS Grid and Flexbox
- Media queries (max-width breakpoints at 900px and 540px)
- Vanilla JavaScript
- Google Fonts (Roboto)

## What I learned

- **Custom list icons:** `::marker` can't control the size or spacing of an icon, so I used `li::before` with Flexbox to place the icon and text side by side.
- **Responsive images:** the mobile and desktop designs use different illustrations, so I used the `<picture>` element with a `<source media>` instead of a single `<img>`.
- **Form validation:** I added `novalidate` to turn off the browser's own error bubble, then checked `input.validity.valid` in JavaScript to show a custom error message.
- **Listening to the right event:** the form's `submit` event works for both the button click and the Enter key, and it only needs one `preventDefault()` call.
- **Showing and hiding states:** a `.hidden` class toggled with `classList` switches between the form card and the success card without leaving the page.
- **Accessibility:** `aria-describedby` links the error message to the input, and `aria-invalid` tells screen readers when the field has an error.

## Notes

- The free style guide does not list the button hover gradient colors or some of the sizes, so I measured them from the design images. They are close but may not be exact.

## Author

- GitHub: [@theint-hub](https://github.com/theint-hub)
- Frontend Mentor: [@theint-hub](https://www.frontendmentor.io/profile/theint-hub)
