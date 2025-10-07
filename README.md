# ⚙️ Number System Converter

A sleek and responsive web app that automates **number system conversions** between  
**Binary**, **Octal**, **Decimal**, and **Hexadecimal**.  
Developed using **HTML**, **CSS**, and **JavaScript** as part of **CAT ONE SPC 2207** coursework.

---

## 🌍 Live Demo

🔗 **View Here:** [https://MoyiWycliffe.github.io/Number-system](https://MoyiWycliffe.github.io/Number-system)

---

## 📋 Project Overview

This project automates number conversion across four major number systems.  
It includes a simple, intuitive interface that instantly shows results and supports web and mobile deployment.  
It was built collaboratively by a team of five students and submitted under **SPC 2207 (22/09/2025)**.

---

## 🧩 Features

✅ Convert between **Binary**, **Octal**, **Decimal**, and **Hexadecimal**  
✅ Real-time validation and conversion  
✅ Responsive modern design (glassmorphism + gradients)  
✅ Mobile-friendly layout  
✅ Deployed using **GitHub Pages**  
✅ Can be packaged into Android/iOS apps using **Capacitor** or **Cordova**

---

## 🧠 How It Works

1. Enter a number into the input field  
2. Select the **From** and **To** number systems  
3. Click **Convert**  
4. View the conversion result instantly

**Core Conversion Logic (JavaScript):**

```js
const decimal = parseInt(input, fromBase);
const converted = decimal.toString(toBase).toUpperCase();
