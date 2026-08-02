import sys

def create_resume_pdf(filename):
    # Pure Python minimal PDF generator for Sakthivel V's Resume
    content = """%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj

2 0 obj
<< /Type /Pages /Kinds [3 0 R] /Count 1 /Kids [3 0 R] >>
endobj

3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>
endobj

4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj

5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj

6 0 obj
<< /Length 2200 >>
stream
BT
/F2 22 Tf
50 740 Td
(SAKTHIVEL V) Tj
/F1 10 Tf
0 -18 Td
(Flutter Developer | Web Developer | ECE Student) Tj
0 -14 Td
(Email: sakthivelvelmurugan7815@gmail.com | Phone: +91 9345419405) Tj
0 -14 Td
(Location: Srivilliputhur, Tamil Nadu | GitHub: github.com/sakthivelv05 | LinkedIn: linkedin.com/in/sakthivel05) Tj

0 -30 Td
/F2 13 Tf
(CAREER OBJECTIVE) Tj
0 -4 Td
1 0 0 1 50 646 cm
0 0 512 1 rect stroke
1 0 0 1 -50 -646 cm
0 -16 Td
/F1 10 Tf
(ECE student with a strong interest in software development, Android app development, Flutter,) Tj
0 -13 Td
(and web development. Passionate about building practical, user-friendly applications and eager) Tj
0 -13 Td
(to contribute to a collaborative development team.) Tj

0 -30 Td
/F2 13 Tf
(EDUCATION) Tj
0 -16 Td
/F2 10 Tf
(B.E. - Electronics and Communication Engineering) Tj
/F1 10 Tf
300 0 Td
(2023 - Present) Tj
-300 -13 Td
(Kongu Engineering College, Perundurai, Erode | CGPA: 6.85) Tj
0 -16 Td
/F2 10 Tf
(HSC (Higher Secondary)) Tj
/F1 10 Tf
300 0 Td
(2021 - 2023) Tj
-300 -13 Td
(Valluvar Vidhyalaya | Percentage: 71%) Tj
0 -16 Td
/F2 10 Tf
(SSLC (Secondary School)) Tj
/F1 10 Tf
300 0 Td
(2017 - 2021) Tj
-300 -13 Td
(Valluvar Vidhyalaya | Completed) Tj

0 -30 Td
/F2 13 Tf
(PROJECTS) Tj
0 -16 Td
/F2 10 Tf
(1. AI-Based Smart Home Control System) Tj
/F1 10 Tf
300 0 Td
(Hackathon Project) Tj
-300 -13 Td
(Developed an IoT smart home automation system to control appliances using sensor-based logic.) Tj
0 -13 Td
(Designed a real-time dashboard interface for device management.) Tj
0 -18 Td
/F2 10 Tf
(2. Health Monitoring System) Tj
/F1 10 Tf
300 0 Td
(Hackathon Project) Tj
-300 -13 Td
(Built a health monitoring system to track parameters using sensors and IoT concepts with visual dashboard.) Tj
0 -18 Td
/F2 10 Tf
(3. School Website Development) Tj
/F1 10 Tf
300 0 Td
(Web Development) Tj
-300 -13 Td
(Created a clean, user-friendly web page using HTML, CSS, and JavaScript with responsive layout.) Tj

0 -30 Td
/F2 13 Tf
(TECHNICAL SKILLS) Tj
0 -16 Td
/F2 10 Tf
(Mobile Development:) Tj
/F1 10 Tf
140 0 Td
(Flutter, Dart, Android Studio) Tj
-140 -14 Td
/F2 10 Tf
(Web Development:) Tj
/F1 10 Tf
140 0 Td
(HTML5, CSS3, JavaScript (Basic)) Tj
-140 -14 Td
/F2 10 Tf
(Hardware & IoT:) Tj
/F1 10 Tf
140 0 Td
(Embedded Systems, Sensors, IoT Concepts) Tj
-140 -14 Td
/F2 10 Tf
(Tools & Version Control:) Tj
/F1 10 Tf
140 0 Td
(Git, GitHub, VS Code) Tj

0 -30 Td
/F2 13 Tf
(ACHIEVEMENTS & CERTIFICATIONS) Tj
0 -16 Td
/F1 10 Tf
(- Participated in Hackathon at Dr. Mahalingam College) Tj
0 -14 Td
(- Participated in Hackathon at Kongu Engineering College) Tj

ET
endstream
endobj

xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000125 00000 n 
0000000257 00000 n 
0000000328 00000 n 
0000000404 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
2660
%%EOF"""

    with open(filename, "wb") as f:
        f.write(content.encode('latin-1'))
    print(f"Successfully generated {filename}")

if __name__ == "__main__":
    create_resume_pdf("Sakthivel_V_Resume.pdf")
    create_resume_pdf("portfolio website/Sakthivel_V_Resume.pdf")
    create_resume_pdf("resume.pdf")
    create_resume_pdf("portfolio website/resume.pdf")
