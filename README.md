<div align="center">
  <img src="https://img.shields.io/badge/-Node_JS-black?style=for-the-badge&logoColor=white&logo=nodedotjs&color=339933" alt="nodedotjs" />
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
  <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
</div>

# DevOverflow

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 📋 <a name="table">Table of Contents</a>

1. 🌐 [Demo](#demo)
2. 🤖 [Introduction](#introduction)
3. 📝 [Description](#description)
4. ⚙️ [Tech Stack](#tech-stack)
5. 🔋 [Features](#features)
6. 🛠️ [Setup](#setup)
7. 🔍 [Usage](#usage)
8. ✅ [To-do](#todo)
9. 📜 [Credits](#credits)
10. 📚 [References](#references)
11. 📞 [Contact](#contact)
12. 📋 [License](#license)

## <a name="demo">🌐 Demo</a>
Here is a working live demo:  [DevOverflow](https://stack-overflow-nextjs14-six.vercel.app/) 

## <a name="introduction">🤖 Introduction</a>
DevOverflow - A StackOverflow clone. It includes features such as a recommendation system for posts, global database data-fetching, AI generated answers to questions, badge & reputation system, views & voting mechanism and filter & pagination.

## <a name="description">📝 Description</a>
Welcome to my project! Here, I'll provide you with a brief overview of what inspired me to create it, why it solves a problem, and what I've learned throughout its development.
- Motivation: I was motivated to build this project to address a specific issue and to enhance my coding skills.
- Why I Built This Project: My main goal was to create a practical and user-friendly solution to a real-world problem.
- Problem Solved: This project aims to simplify a particular task, making it more efficient and accessible.
- What I Learned: Throughout the development process, I gained valuable insights into various technologies and programming concepts.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- TinyMCE
- MongoDB
- Shadcn
- Tailwind CSS
- Mongoose ORM
- Clerk
- AuthO 
- React-Hook form
- Zod 

## <a name="features">🔋 Features</a>

👉 **Authentication**: Seamlessly log in or sign up.

👉 **Profile Management**: Easily update profile details and link social media accounts for enhanced connectivity.

👉 **Create**: Question and Answers.

👉 **Tagging for Context**: Enhance post context and retrieval efficiency with intuitive tagging.

👉 **Search & Filter**: Retrieve past questions and answers swiftly with global search and filtering.

👉 **Post Collection**: Explore content easily with pagination features.

👉 **Responsive**: Ensures seamless functionality and aesthetics across all devices and many more, including code architecture and reusability

## <a name="setup">🛠️ Setup Project</a>
To get this project up and running in your development environment, follow these step-by-step instructions.

### 🍴 Prerequisites

We need to install or make sure that these tools are pre-installed on your machine:

- [NodeJS](https://nodejs.org/en/download/): It is a JavaScript runtime build. 
- [Git](https://git-scm.com/downloads): It is an open source version control system. 

### 🚀 Install Project

1. Clone the Repository

```bash
git clone git@github.com:ManmeetSinghJohal/devoverflow.git
```

2. Install packages

```
npm install
```

3. Create a `.env` file 

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_........
CLERK_SECRET_KEY=sk_test_Or.........

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

NEXT_CLERK_WEBHOOK_SECRET=whsec.........

NEXT_PUBLIC_TINY_EDITOR_API_KEY=12kr........

MONGODB_URL=mongodb+srv://........

NEXT_PUBLIC_SERVER_URL=http://localhost:3000


OPENAI_API_KEY=sk-jNSD.........
```

4. Run the dev server.

```bash
npm run dev
```

## <a name="usage">🔍 Usage</a>

### How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone git@github.com:ManmeetSinghJohal/devoverflow.git

# Go into the repository
$ cd projectname

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

### ⚒️ How to Contribute
Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request 

### 📩 Bug / Feature Request

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/ManmeetSinghJohal/devoverflow/issues/new) by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/ManmeetSinghJohal/devoverflow/issues/new). Please include sample queries and their corresponding results.

## <a name="todo">✅ To-do</a>

Will update soon!

## <a name="credits">📜 Credits</a>

None for this project.

## <a name="references">📚 References</a>

[Ultimate Next.js 14 Course](https://www.jsmastery.pro/ultimate-next-course)

## <a name="contact">📞 Contact Me</a>

[![Follow us on LinkedIn](https://img.shields.io/badge/LinkedIn-ManmeetSinghJohal-blue?style=flat&logo=linkedin&logoColor=b0c0c0&labelColor=363D44)](https://www.linkedin.com/in/manmeetsinghjohal/)

## <a name="license">📋 License</a>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
