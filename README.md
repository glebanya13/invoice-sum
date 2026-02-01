# 📷 OCR Project
This project is designed to perform Optical Character Recognition (OCR) on images using the Tesseract.js library. The primary goal is to extract numerical values representing amounts from images, which can be useful in various applications such as invoice processing, receipt scanning, and document analysis. The project utilizes a range of technologies, including Node.js, Tesseract.js, and Sharp, to achieve high-quality text recognition and image processing.

## 🚀 Features
- **Image Pre-processing**: The project includes a utility for pre-processing images to enhance their quality for OCR, including resizing, converting to grayscale, normalizing, and sharpening.
- **Text Recognition**: Utilizes Tesseract.js for recognizing text in images, with a focus on extracting numerical values representing amounts.
- **Amount Extraction**: Employs a regular expression (`priceWithRRegex`) to match price patterns in the extracted text, allowing for the summation of amounts found in the image.
- **Logging**: Incorporates a logging mechanism using Pino and Pino-Pretty for structured and readable log output.
- **Keyword Filtering**: Includes a feature to ignore certain lines in the extracted text based on predefined keywords, enhancing the accuracy of amount extraction.

## 🛠️ Tech Stack
- **Frontend**: None (Backend-focused project)
- **Backend**: Node.js
- **OCR Library**: Tesseract.js
- **Image Processing**: Sharp
- **Logging**: Pino, Pino-Pretty
- **Path Manipulation**: Path
- **URL Handling**: URL
- **Dependencies Management**: npm or yarn

## 📦 Installation
To get started with this project, follow these steps:
1. **Prerequisites**: Ensure you have Node.js installed on your system.
2. **Clone the Repository**: Clone this repository to your local machine using `git clone`.
3. **Install Dependencies**: Navigate to the project directory and run `npm install` or `yarn install` to install all dependencies listed in `package.json`.
4. **Run the Application**: Use `npm start` or `yarn start` to run the application, which will execute the `app.js` file.

## 💻 Usage
- **Input Image**: Provide the path to an image file as input to the `app.js` script.
- **Output**: The application will log the extracted amounts and any relevant processing information to the console.

## 📂 Project Structure
```markdown
.
├── package.json
├── src
│   ├── app.js
│   ├── keywords.js
│   ├── utils
│   │   ├── logger.js
│   │   └── preload.js
│   └── ...
├── ...
```

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact
Your Name - [glebanya.com@gmail.com](mailto:glebanya.com@gmail.com)
