# DevOverflow

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 🌐 Demo
Here is a working live demo:  [DevOverflow](https://stack-overflow-nextjs14-six.vercel.app/) 


## 📝 Description
Welcome to my project! Here, I'll provide you with a brief overview of what inspired me to create it, why it solves a problem, and what I've learned throughout its development.
- Motivation: I was motivated to build this project to address a specific issue and to enhance my coding skills.
- Why I Built This Project: My main goal was to create a practical and user-friendly solution to a real-world problem.
- Problem Solved: This project aims to simplify a particular task, making it more efficient and accessible.
- What I Learned: Throughout the development process, I gained valuable insights into various technologies and programming concepts.


## 📖 Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## 🛠️ Setup Project
To get this project up and running in your development environment, follow these step-by-step instructions.

### 🍴 Prerequisites

We need to install or make sure that these tools are pre-installed on your machine:

- [NodeJS](https://nodejs.org/en/download/): It is a JavaScript runtime build. 
- [Git](https://git-scm.com/downloads): It is an open source version control system. 

## ✨ Features

- Next.js 14, Tailwind responsive web app.
- Backend built using Next.js, Mongoose ORM, MongoDB and TypeScript seamlessly integrating it with the frontend.
- Implemented Clerk and AuthO to manage user authentication and maintain persistent session states.
- React-Hook form for creating forms.
- Zod for validations.

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

## 🔍 Usage

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

## ✅ To-do

Will update soon!

## 📜 Credits

None for this project. 

## 📚 References

[Ultimate Next.js 14 Course](https://www.jsmastery.pro/ultimate-next-course)

## 📞 Contact Me

[![Follow us on LinkedIn](https://img.shields.io/badge/LinkedIn-ManmeetSinghJohal-blue?style=flat&logo=linkedin&logoColor=b0c0c0&labelColor=363D44)](https://www.linkedin.com/in/manmeetsinghjohal/)

## 📋 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
