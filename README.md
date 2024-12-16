# README.md

## DotTek Web Application

### Prerequisites

- Ensure you have **Node.js version 18.18.0** installed. Use [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) if you need to switch versions.

---

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Run the application in development mode:
   ```bash
   npm run dev
   ```

---

### Overview

#### Pages
The application is built with **Next.js** and contains the following pages:

1. **Home Page**  
   The home page serves as the landing page and includes the following components:
   - `<HeroSection />`
   - `<PartnerSection />`
   - `<ServicesSection />`
   - `<StatisticsSection />`
   - `<MethodologySection />`
   - `<OrchestrationSection />`
   - `<TestimonialSection />`

2. **About Page** (`about.jsx`)  
   A detailed page about the company.

3. **Services Page** (`services.jsx`)  
   A dedicated page listing the services offered.

4. **Blog Page** (`blog.jsx`)  
   A section to display blog posts or articles.

5. **Contact Us Page** (`contact-us.jsx`)  
   Includes an integrated **EmailJS** form to handle inquiries.

#### Global Layout
The application utilizes a consistent layout that includes a **Header** and **Footer**. This layout is applied across all pages.

---

### EmailJS Integration

The **Contact Us** page integrates with EmailJS for handling form submissions.  

**Configuration**:  
Replace the placeholders in the integration code with your EmailJS credentials:
- **Service ID**: `"service_aylqtil"`
- **Template ID**: `"template_1yy9iqa"`
- **User/Public Key**: `"m_a8OzS55JvpOkUjn"`

Ensure you maintain the same variable names in the `formData` object to avoid issues.

---

### Data Mapping

For pages such as **Services** and **Blogs** that involve dynamic content, the related data is stored in JavaScript files under the `utils/data` directory.  

If you need to add new entries or modify existing ones, update the appropriate file in this folder.  

**Example**:
- To add a new service, modify the file `utils/data/services.js`.
- To add a new blog, modify the file `utils/data/blogs.js`.

This keeps the data centralized and easy to maintain.

---

### Dependencies

Below are the key packages used in this project:

#### Dependencies
- **[emailjs-com](https://www.npmjs.com/package/emailjs-com)**: Email integration for handling form submissions.
- **[framer-motion](https://www.framer.com/motion/)**: Animations for page transitions and elements.
- **[hamburger-react](https://www.npmjs.com/package/hamburger-react)**: Hamburger menu implementation for responsive navigation.
- **[react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee)**: Scrolling marquee component.
- **[next.js](https://nextjs.org/)**: Framework for server-rendered React applications.

#### DevDependencies
- **[eslint](https://eslint.org/)**: Linting utility for JavaScript.
- **[tailwindcss](https://tailwindcss.com/)**: Utility-first CSS framework.
- **postcss**: CSS transformations and optimizations.

---

### Scripts

- **Start Development Server**:
  ```bash
  npm run dev
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```
- **Start Production Server**:
  ```bash
  npm run start
  ```
- **Lint Code**:
  ```bash
  npm run lint
  ```

---

### Notes for Developers

1. **File Structure**:  
   Ensure components are organized in their respective folders (e.g., `components`, `pages`).

2. **Styling**:  
   TailwindCSS is used for styling across the application. Check the documentation for class names and customizations.

3. **EmailJS Integration**:  
   Test the email functionality in a sandbox environment before deploying.

4. **Data Management**:  
   Utilize the files in `utils/data` for mapping dynamic data like services and blogs. This ensures a centralized, maintainable approach to adding or modifying content.

For further questions, please contact the project owner.