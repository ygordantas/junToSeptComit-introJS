# 🌀 React + TypeScript Assignment: **Reusable Modal & Button System**

## 📝 Overview

In this assignment, you'll build a **reusable UI system** with:

- A custom **`Modal` component** rendered via a **React Portal**
- A reusable **`Button` component** that:
  - Supports different element types (e.g., `<button>`, `<a>`, `<Link>`)
  - Supports `ref` forwarding
  - Accepts default props

This assignment helps you master **component composition** and important intermediate React patterns used in real-world design systems.

---

## 🚀 Goals

You'll implement:

- `Modal`: a dialog rendered outside the normal DOM flow using `createPortal`
- `Button`: a polymorphic, accessible, typed component using `forwardRef`
- Use of:
  - `useRef`
  - `defaultProps` (via default values or fallbacks)
  - Generic typing and dynamic element rendering (e.g., render as `<a>` or `<button>`)

---

## 🧱 Part 1: Modal Component with Portal

### ✅ Features

- Renders children into a DOM node with `id="modal-root"`
- Accepts props:
  - `isOpen: boolean`
  - `onClose: () => void`
  - `children: React.ReactNode`
- Clicking the backdrop or pressing "Escape" should close the modal
- Focus should be trapped inside the modal (basic support)


## 🧱 Part 2: Reusable Polymorphic Button

### ✅ Requirements

Create a `Button` component with these features:

- Renders as:
  - `<button>`
  - `<a>`
  - Any other valid HTML element
- Accepts a `ref` that correctly targets the rendered DOM element
- Uses `React.forwardRef`
- Has default props:
  - `type="button"` when rendered as a `<button>`
- Strongly typed with TypeScript (you can use generics and `ComponentPropsWithoutRef`)

### Example Usage

```tsx
<Button onClick={handleClick}>Click Me</Button>

<Button as="a" href="https://example.com">Go to Site</Button>

<Button ref={buttonRef}>With Ref</Button>

```

## ✅ Submission Checklist

- [ ] Modal renders correctly using a portal
- [ ] Clicking outside the modal or pressing Escape closes it
- [ ] Button component works as button, a, etc.
- [ ] ref forwarding works
- [ ] Code is typed properly with TypeScript
- [ ] Default props are correctly applied
- [ ] No console errors or warnings
      
## ✨ Bonus Features (Optional)

- [ ] Add basic focus trap support for Modal
- [ ] Add animation to the Modal (fade in/out)
- [ ] Add a backdrop blur effect
- [ ] Add a size prop to Button (sm, md, lg)


