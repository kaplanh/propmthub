
<div id="user-content-toc">
  <ul align="left">
    <summary><h1 style="display: inline-block">prompthub_nextjs</h1></summary>
  </ul>
</div>

<table>
   <thead>
        <tr>
            <th>What's used in this app ?</th>
            <th>How to run ?</th>
            <th>Author</th>
        </tr>
    </thead>
  <tbody>
  <tr>
    <td> 
      <li> NextJS  
      <li> Next-auth
      <li> Next-auth-Google Provider
      <li> Google Cloud
      <li> React 
      <li> Ract-dom 
      <li> mongodb
      <li> mongoose
      <li> bcrypt 
      <li> Tailwind CSS
    </td>
    <td>  <h4>Once you clone the project</h4>  
      
 1) run  `pnpm install`  or `yarn install` for node modules
 2) run `pnpm run dev` or `yarn run dev` for open development stage
   </td>
    <td> <li> <a href="https://github.com/kaplanh" target="_blank">Take a look at my other projects</a> <li> <a href="https://www.linkedin.com/in/kaplan-h/" target="_blank">Visit me on Linkedin</a> 
  </tr>
  <tr>
    <td colspan="3"><h3>What is this project about ?</h3> 
<p>

</p>
    </td>
  </tr>
      </tbody>
</table>

<div id="user-content-toc">
  <ul align="left">
    <summary><h2>How does my project look</h2></summary>
  </ul>
</div>

[Live Link](https://propmthubv1.vercel.app/)

![PromptHub](https://github.com/user-attachments/assets/549ed402-71c6-4d62-8b61-b3be68d6614d)

<div id="user-content-toc">
  <ul align="left">
    <summary><h2>Feedback and Collaboration</h2></summary>
  </ul>
</div>
I value your feedback and suggestions. If you have any comments, questions, or ideas for improvement regarding this project or any of my other projects, please don't hesitate to reach out.<br>
I'm always open to collaboration and welcome the opportunity to work on exciting projects together.<br>
Thank you for visiting my project. I hope you have a wonderful experience exploring it, and I look forward to connecting with you soon!

## Project Skeleton

```
prompthub_nextjs (folder)
|
|----readme.md
├── public
|     ├──── assets
|     |      └── icons
|     |      └── images
├──  app
|     ├──── api
|     |      └── auth
|     |      |    └── [...nextauth]
|     |      |    |      └── route.js
|     |      └── prompt
|     |      |    └── filterPrompt
|     |      |    |      └── route.js
|     |      |    └── getAllPrompts
|     |      |    |      └── route.js
|     |      |    └───  new
|     |      |    |      └── route.js
|     ├──── create-prompt
|     |      └── page.jsx
|     |      |    └── components   
|     ├──── profile
|     |      └── [profileId]
|     |      |    └── page.jsx
|     |      └── page.jsx
│     ├── page.jsx
│     ├── layout.js
│     └── error.js
│     └── loading.js
│     └── not-found.js
├── components
│     ├── Feed.jsx
│     ├── Form.js
│     └── Nav.js
│     └── PromptCard.js
│     └── PromptCardList.js
|     └── Provider.jsx
├── models
│     └── prompt.js
│     └── user.js
├── styles
|     └── globals.css
├── utils
|     └── database.js
├── .env
|── .gitignore
|── jsconfig.json
|── next.config.js
|── package-lock.json
├── package.json
|── postcss.config.js
|── tailwind.config.js
```


## Getting Started

To get started with PromptHub, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/PromptHub.git
   cd PromptHub
   ```
2. **Install Dependencies:**
   ```bash
   yarn
   ```
3. **Create a local environment variables file .env.local with the following fields:**
   ```bash
   GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
   GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
   MONGODB_URI=YOUR_MONGODB_URI
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_URL_INTERNAL=http://localhost:3000
   NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECRET
   ```
4. **Start the development server:**
   ```bash
   yarn dev
   ```

