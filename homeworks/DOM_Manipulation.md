# 👥 Assignment: Build a Dynamic Guest List App

## 📝 Overview

Create a simple **Guest List** application using **HTML, CSS, and JavaScript**.  
The app will allow users to:

- Add guest names to a visible list
- Mark guests as "confirmed"
- Remove guests from the list

This project is focused on **DOM manipulation** — no page refreshes allowed!

---

## 🚀 Core Features

### ✅ HTML Structure

Your initial page should have:

- An input field to type a guest's name
- An "Add Guest" button
- An empty container where the list will appear

### ✅ JavaScript Behavior

- When the user clicks "Add Guest":
  - Create a new list item element with the guest's name
  - Add a "Confirm" button and "Remove" button next to each guest
- Clicking "Confirm" should toggle a "confirmed" style (e.g. green background or check icon)
- Clicking "Remove" should remove that guest from the list

---

## 🎨 CSS Styling

- Style the guest list clearly
- Visually distinguish confirmed guests
- Add hover/focus effects to buttons
- Use spacing and alignment to keep the UI clean

---

## 🧠 Example

When user adds "Anna", the DOM should show:

## ✨ Bonus Features (Optional)

- [ ] Add a count of confirmed guests
- [ ] Add a "Clear All" button to remove all guests
- [ ] Save the guest list in `localStorage`
- [ ] Sort the list alphabetically

## ✅ Submission Checklist

- [ ] All buttons work as expected
- [ ] No errors in the browser console
- [ ] Clean and readable HTML/CSS/JS
- [ ] DOM updates in real time
- [ ] Your name is in a comment in `index.html`
