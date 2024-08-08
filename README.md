# Welcome to your GPT Engineer project

## Project info

**Project**: clean-slate-checker 

**URL**: https://run.gptengineer.app/projects/c042d49e-b6fc-49e4-84e8-8570f2f930df/improve

**Description**: Context: I wish to create a tool that keeps track of people in the cleaning business that have failed to show-up (either before a meeting, or even after a meeting is created and their initial workday happens). It is only meant to protect others from unnotified no-shows by cleaners to their bosses. 

So with that said, here is what I want to see:
- An internal spreadsheet that keeps track of names.
- The names are being entered by those who report the people via a form they must fill out.
- If somebody wants to look up a name, they have to pay 1 euro and then the system would either say if this name is in the database or not. It will not show any other information.
- If somebody looks up multiple names simultaneously, that is possible, and it would cost them 1 euro for each. 
- The form should ask for First name, Last name, email address or phone number, reason why they are being submitted (Unresponsive, No-show pre-meeting, No-show pre-first workday), screenshots of evidence for verification.
- Though the submission of entries is automated, the actual approval is a manual process. Once manually approved by myself, that's when they get into the database. 

## Who is the owner of this repository?
By default, GPT Engineer projects are created with public GitHub repositories.

However, you can easily transfer the repository to your own GitHub account by navigating to your [GPT Engineer project](https://run.gptengineer.app/projects/c042d49e-b6fc-49e4-84e8-8570f2f930df/improve) and selecting Settings -> GitHub. 

## How can I edit this code?
There are several ways of editing your application.

**Use GPT Engineer**

Simply visit the GPT Engineer project at [GPT Engineer](https://run.gptengineer.app/projects/c042d49e-b6fc-49e4-84e8-8570f2f930df/improve) and start prompting.

Changes made via gptengineer.app will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in the GPT Engineer UI.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps: 

```sh
git clone https://github.com/GPT-Engineer-App/clean-slate-checker.git
cd clean-slate-checker
npm i

# This will run a dev server with auto reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

All GPT Engineer projects can be deployed directly via the GPT Engineer app. 

Simply visit your project at [GPT Engineer](https://run.gptengineer.app/projects/c042d49e-b6fc-49e4-84e8-8570f2f930df/improve) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain, then we recommend GitHub Pages.

To use GitHub Pages you will need to follow these steps: 
- Deploy your project using GitHub Pages - instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)
- Configure a custom domain for your GitHub Pages site - instructions [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)