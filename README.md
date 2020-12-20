# Coder Take-Home Challenge

Hey there, congrats on your interview so far! To assess candidates in a fair
way that best aligns with their regular development, we give a take home
challenge to let you strut your stuff in the comfort of your own development
environment, without someone looking over your shoulder.

This challenge should take about **2-3 hours**, so if you're finding yourself
stuck on something, please reach out rather than waste a ton of your time!

## Requirements

- Node 10+ (check with `node --version`)
- NPM 6+ (check with `npm --version`)

## Project Overview

What we have here is the skeleton of a basic chat application. In `src/server`,
we have an Express server that provides both a REST interface for sending
messages, and a Websocket interface for receiving new messages in real time.
You shouldn't need to edit anything in here, but reading the code may help
you understand the app better.

For the frontend, we have a React app in `src/client`. The project has
been setup for you using a few libraries and conventions that are core to our
stack, but the chat app hasn't been fully implemented yet. Using the API
provided for you in `src/client/lib/api`, you will need to create some
components that have a user specify a username, and then enter the chat.

### What We're Using on the Frontend

In order to assess how developers would handle being dropped into our stack, we've
setup this take-home using a few libraries and conventions that we use. **You're not
expected to be completely familiar with all of them**, but this should give you an idea
of how we write code, and assess your ability to adapt and conform to new stacks.

- [TypeScript](https://www.typescriptlang.org/) - TypeScript requires you to
  write your javascript a little differently by typing your variables and
  functions. All JavaScript at Coder is compiled via TypeScript.
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - We prefer functional
  components with hooks, resorting only to class components for very specific scenarios.
- [JSS Styling](https://cssinjs.org/) - We have switched from Sass styling to
  using JSS, which is somewhat similar to other CSS-in-JS solutions, but shares
  a lot more in its structure with Sass.

Please try to use the project as configured, and don't worry too much about
minor mistakes due to unfamiliarity being held against you.

## Getting Started

**You'll want to get started in `App.tsx`**, remove the sample code, and create
new smaller components from there.

[Click here to see the wireframes!](wires.pdf)

## Running the project

- `npm install` to get all of the dependencies
- `npm start` to run the API and webpack servers

A webpage should open up for you automatically. Hot module replacement is configured, so just save your code and changes should show up!

## Core Goals

- [ ] Write clear and concise code that succesfully compiles without errors (compile time or run time)
- [ ] Implement the wireframes at a minimum as shown
  - You can change things to improve user experience and interface as you see fit, as long as the app functions as expected
- [ ] Add some basic styling to the application to make it usable
- [ ] Handle any server communication errors that could come from regular user interaction, ideally informing the user of the errors
  - e.g. going offline, messages failing to send
- [ ] Work within the existing codebase to meet the requirements
  - Minor alterations to the existing structure are OK, but you should not be re-writing the whole app or server from the ground up
- [ ] Implements client-side validation:
  - Messages must be between 1 and 200 characters
  - Usernames must be alphanumeric and between 3 and 20 characters
  - The user should be informed when their input is invalid

## Stretch Goals

If you finish with some time to spare and want to add a little flair, you could implement the following:

- Make the username persist between sessions
- Add HTML5 notifications
- Implement rate limiting to prevent spamming the chat
- Go all out on the styling (animations are a plus!)
- Add a custom feature of your own choosing (Be sure to describe it to us!)

## Tips

- If you have any questions, don't hesitate to reach out. Asking questions is a good thing!
- This app will only be looked at in development, don't worry about trying to host it on a server, compiling it for production etc.
- If there's a library you'd like to use, don't hesitate to add it. But please explain why you added any libraries, the value they add, and why you chose that particular library.
