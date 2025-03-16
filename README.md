# Multi-Step Form

## 📌 Overview
This project is a **3-step dynamic multi-step form** for collecting user information. It includes form validation, dynamic navigation, and a summary view before submission. The form maintains state across steps and supports data persistence using `localStorage`.

---

## 🚀 Features

### ✅ Form Structure:
1. **Step 1:** Collects basic details (Name, Date of Birth, Gender).
2. **Step 2:** Collects contact details (Email, Phone, Address).
3. **Step 3:** Displays a summary of the entered details and allows users to confirm or edit before submission.

### ✅ Validation:
- All fields are required.
- Email validation using regex.
- Phone number must be numeric and 10 digits long.
- Error messages highlight missing or invalid fields.

### ✅ Dynamic Navigation:
- "Next" and "Back" buttons allow seamless navigation.
- Users can edit previously entered data before final submission.

---
  
 ##   Home Page
![Home Page](https://github.com/deepti2820/DigantaraAssignment/blob/main/Screenshot/Screenshot%202025-03-16%20105924.png)


 ##  Error Message
![Home Page](https://github.com/deepti2820/DigantaraAssignment/blob/main/Screenshot/Screenshot%202025-03-16%20105954.png)


 ##  Review and Submit
![Home Page](https://github.com/deepti2820/DigantaraAssignment/blob/main/Screenshot/Screenshot%202025-03-16%20110025.png)

### ✅ State Management:
- Uses JavaScript objects for local state management.
- Saves form progress in `localStorage` to persist data across refreshes.

### ✅ Responsive Design:
- Works across all screen sizes using **CSS Flexbox & Media Queries**.
- Mobile-friendly layout.

### ✅ Progress Indicator:
- Stepper visually represents current step and progress.
- Highlights completed steps dynamically.

### ✅ Animations (Bonus):
- Smooth transitions between steps using CSS animations.

---

## 📂 Project Structure
```
multistep-form/
├── index.html      # Main HTML structure
├── styles.css      # CSS for styling
├── script.js       # JavaScript logic for form navigation & validation
├── README.md       # Project documentation
└── assets/         # Contains images/icons (if any)
```

---

## 🛠️ Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/multistep-form.git
   ```
2. Navigate to the project folder:
   ```bash
   cd multistep-form
   ```
3. Open `index.html` in a browser.
4. Start filling out the form!

---

## 🚀 Enhancements for Scalability & Production

### 🔹 Component-Based Structure
- If built with **React.js**, each step would be a separate component with shared state using `useState` or `useReducer`.
- Dynamic form schema for flexible modifications.

### 🔹 Improved Validation
- Use **Yup** for validation in React or TypeScript for better type safety.
- Prevent invalid data submission with `onBlur` validation.

### 🔹 API Integration
- Add a backend endpoint to store submitted data securely.
- Use **AJAX (Fetch API)** for real-time validation (e.g., email uniqueness).

### 🔹 Enhanced User Experience
- Auto-save progress after each step.
- Add **tooltips & inline validation** for better user guidance.

### 🔹 Accessibility Improvements
- Ensure proper keyboard navigation.
- Use **ARIA roles** to enhance screen reader support.

---

## 📝 Conclusion
This project demonstrates a **modular, user-friendly, and scalable multi-step form**. It follows best practices for **clean code, validation, and responsive design**. Future enhancements could include **backend integration, advanced state management (Redux/Context API), and enhanced UI/UX elements**.

**📌 Author:** Your Name  
**📌 GitHub:** [Your Repository Link]  
**📌 Email:** your.email@example.com  

