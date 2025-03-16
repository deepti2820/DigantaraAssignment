# Multi-Step Form

This project is a **3-step dynamic multi-step form** for collecting user information. It includes form validation, dynamic navigation, and a summary view before submission. The form maintains state across steps and supports data persistence using `localStorage`.

---

##  Features

###  Form Structure:
1. **Step 1:** Collects basic details (Name, Date of Birth, Gender).
2. **Step 2:** Collects contact details (Email, Phone, Address).
3. **Step 3:** Displays a summary of the entered details and allows users to confirm or edit before submission.

###  Validation:
- All fields are required.
- Email validation using regex.
- Phone number must be numeric and 10 digits long.
- Error messages highlight missing or invalid fields.

###  Dynamic Navigation:
- "Next" and "Back" buttons allow seamless navigation.
- Users can edit previously entered data before final submission.

  ###  State Management:
- Uses JavaScript objects for local state management.
- Saves form progress in `localStorage` to persist data across refreshes.

###  Responsive Design:
- Works across all screen sizes using **CSS Flexbox & Media Queries**.
- Mobile-friendly layout.

###  Progress Indicator:
- Stepper visually represents current step and progress.
- Highlights completed steps dynamically.

---
  
 ##   Home Page
![Home Page](https://github.com/deepti2820/DigantaraAssignment/blob/main/Screenshot/Screenshot%202025-03-16%20105924.png)


 ##  Error Message
![Home Page](https://github.com/deepti2820/DigantaraAssignment/blob/main/Screenshot/Screenshot%202025-03-16%20105954.png)


 ##  Review and Submit
![Home Page](https://github.com/deepti2820/DigantaraAssignment/blob/main/Screenshot/Screenshot%202025-03-16%20110025.png)


---

##  Project Structure
```
multistep-form/
├── index1.html      # Main HTML structure
├── styles.css      # CSS for styling
├── script1.js       # JavaScript logic for form navigation & validation
├── README.md       # Project documentation

```

---

## 🛠 Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/deepti2820/DigantaraAssignment
   ```
2. Navigate to the project folder:
   ```bash
   cd DigantaraAssignment
   ```
3. Open `index1.html` in a browser.
4. Start filling out the form!



