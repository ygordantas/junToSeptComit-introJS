# 🧠 React + TypeScript Assignment: **Click Speed Test Game (Beginner Version)**

## 📝 Overview

Build a **Click Speed Test** app where users have **5 seconds** to click a button **as many times as possible**.  
The app should:

- Start a countdown when the user clicks **"Start Test"**
- Count and display the number of button clicks
- Stop the game after 5 seconds
- Show the final score

This project focuses on using both:

- `useState` — for values that affect what’s shown to the user
- `useRef` — for values that should **not cause re-renders**

---

## 🚀 Requirements

### 🧱 UI Layout

Your app should include:

- A **"Start Test"** button
- A **"Click Me!"** button (disabled until the game starts)
- A **countdown timer** displayed on screen
- A **click counter** showing the number of clicks
- A **final score** after time runs out (Final score is how many times the user has clicked)

---

### 🧠 Game Behavior

1. When the user clicks **"Start Test"**:
   - Reset click count to 0
   - Set the timer to 5
   - Enable the **"Click Me!"** button
   - Start a countdown

2. During the game:
   - Each click on the **"Click Me!"** button increases the score
   - Timer counts down once per second

3. After 5 seconds:
   - Stop the countdown using
   - Disable the click button
   - Display the final score

---

## ✨ Bonus Features (Optional)

- [ ] Show highest score
- [ ] Allow the user to set their own test duration
- [ ] Show clicks-per-second at the end
- [ ] Apply some styling

## ✅ Submission Checklist

- [ ] Uses both useState and useRef
- [ ] The timer counts down correctly
- [ ] Clicks are counted during the test
- [ ] The game disables when the time ends
- [ ] Code is typed properly with TypeScript
