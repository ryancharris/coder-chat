# Coder Chat

## Running the application

1. Clone the repo

```bash
git clone git@github.com:ryancharris/coder-chat.git
```

2. Change directories

```bash
cd coder-chat/
```

3. Install Node modules

```bash
npm install
```

4. Run the webpack-dev-server and Express

```bash
npm run start
```

## System requirements

- Node 10+

```
node --version
```

- NPM 6+

```
npm --version
```

## New dependencies

[`react-toastify`](https://fkhadra.github.io/react-toastify/introduction)

This library handles rendering toast notifications for users whose browsers don't support or deny permissions for the [Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification). In production, I may opt for building a custom notification system, however, for the purposes of this project it saved me significant amounts of time. I chose this library specifically because it had over 6,000 stars on GitHub and great documentation.

[`react-hook-form`](https://react-hook-form.com/)

To save time, I opted to use this library for handling client-side form validation and error messaging in `JoinForm` and `ChatInput`. I chose this specific library due to its simple API, but could easily swap it out for a similar option like [Formik](https://github.com/formium/formik).

[`prettier`](https://prettier.io/)

In order to consistently format the code in the repository and enforce coding conventions in my editor, I installed Prettier. This is the most commonly used code formatter in the JS/TS ecosystem, which is why I chose it.

[`css-loader`](https://github.com/webpack-contrib/css-loader) / [`style-loader`](https://github.com/webpack-contrib/style-loader)

I had to add these webpack plugins in order to load the CSS for `react-notify` in `App.tsx`.

## Progress

### Standard goals

- [x] Write clear, concise code
- [x] Implement wireframes
- [x] Add basic styles
- [x] Handle server errors, API call failures
- [x] Client-side validation for usernames and messages

### Stretch goals

- [x] HTML5 notifications
- [x] Go all out on styling
- [x] Custom feature: notifications for non-HTML5 users
- [ ] Persist username between sessions by storing it in localStorage
- [ ] Rate limiting user input in ChatInput to prevent spamming

## Improvements I'd make with more time

### Refactor

- [ ] Generalize `UserMessage` and `GuestMessage` components into a singular `ChatMessage` component
- [ ] Abstract notification functionality and permission checking into its own hook
- [ ] Add proper user authentication
- [ ] Add error handling for WebSocket errors

### Code consistency

- [ ] Add unit tests
- [ ] Add ESLint
- [ ] Run unit tests and code linting in CI pipeline
- [ ] Lint and prettify each commit locally using git hooks
