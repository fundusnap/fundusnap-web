<div align="center">
  <table border="1">
    <tr>
      <td align="center" style="padding: 20px;">
        <h3>📢 Domain & Email Migration Notice</h3>
        <p>From <b>May 30th, 2026</b>, Fundusnap will transition to new domains as <code>fundusnap.com</code> will not be renewed:</p>
        <p>🌐 <b>Website:</b> <a href="https://fundusnap.faizath.com">fundusnap.faizath.com</a> (formerly <i>fundusnap.com</i>)<br>
        ⚙️ <b>API:</b> <a href="https://fundusnap-api.faizath.com">fundusnap-api.faizath.com</a> (formerly <i>api.fundusnap.com</i>)<br>
        📧 <b>Email:</b> <a href="mailto:contact@fundusnap.faizath.com">contact@fundusnap.faizath.com</a> (formerly <i>contact@fundusnap.com</i>)<br>
        🛰️ <b>CDN:</b> <a>fundusnap-cdn.faizath.com</a> (formerly <i>cdn.fundusnap.com</i>)<br>
        📈 <b>Status Pages:</b> <a href="https://status.faizath.com/status/fundusnap">https://status.faizath.com/status/fundusnap</a> (formerly <i>status.fundusnap.com</i>)
        </p>
      </td>
    </tr>
  </table>
</div>

<p align="center">
  <img src="assets/logo.png"/>
  <h1 align="center">Fundusnap</h1>
</p>

Fundusnap is a comprehensive medical imaging solution designed to help healthcare professionals detect and analyze diabetic retinopathy through fundus images. The project consists of three main components: a mobile application, a backend API service, and an AI model for offline image classification.

## 🏥 Project Components

### 1. Fundusnap Mobile App ([Fundusnap-App](https://github.com/fundusnap/Fundusnap-App))
A modern cross-platform mobile application built with Flutter that provides:
- High-quality fundus image capture
- Video recording capabilities
- Secure storage of medical images
- AI-powered analysis of diabetic retinopathy
- Intelligent chatbot assistant for medical insights

**Tech Stack:**
- Framework: Flutter (SDK ^3.8.0)
- Language: Dart
- State Management: Flutter Bloc
- Navigation: Go Router
- Key Dependencies:
  - Camera: `camera: ^0.11.1`
  - Video Player: `video_player: ^2.9.5`
  - Secure Storage: `flutter_secure_storage: ^9.2.4`
  - Image Picker: `image_picker: ^1.1.2`
  - HTTP Client: `dio: ^5.8.0+1`

### 2. Fundusnap API ([fundusnap-api](https://github.com/fundusnap/fundusnap-api))
A robust backend service that handles:
- User authentication and management
- Image analysis and processing
- AI-powered chat interactions
- Secure storage of medical data
- HIPAA-compliant data handling

**Tech Stack:**
- Runtime: Node.js
- Framework: Express.js
- Database: MongoDB with Mongoose
- Authentication: JWT
- Storage: Azure Blob Storage
- AI Services:
  - Microsoft Azure Custom Vision API
  - OpenRouter API with Microsoft's Phi Mini Instruct model
- Email Service: Nodemailer

### 3. Fundusnap AI ([fundusnap-ai](https://github.com/fundusnap/fundusnap-ai))
An offline-capable image classification system that serves as a fallback solution for:
- Offline image analysis
- Poor network connectivity scenarios
- Primary API unavailability

**Tech Stack:**
- Deep Learning Framework: FastAI
- Base Model: ResNet34 (pretrained)
- Data Augmentation: Albumentations
- Loss Function: Focal Loss
- Performance Metrics:
  - Overall Accuracy: 81%
  - Macro Average F1-Score: 0.81
  - Weighted Average F1-Score: 0.81

## 🔒 Security & Compliance

The entire system is designed with security and compliance in mind:
- HIPAA-compliant data storage and handling
- Secure authentication using JWT
- Encrypted data transmission
- Secure storage of medical images
- Regular security updates and patches

## 🚀 Getting Started

Each component has its own repository with detailed setup instructions. Please refer to the individual README files in each repository for specific setup and installation steps.

## 📝 License

This project is licensed under the MIT License.

## 👥 Authors

Fundusnap Developers <dev@fundusnap.faizath.com>
