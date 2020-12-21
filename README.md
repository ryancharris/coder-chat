# Coder Chat

## Instructions

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

## Technical Requirements

- Node 10+

```
node --version
```

- NPM 6+

```
npm --version
```

## Libraries I Added

1. [react-toastify](https://fkhadra.github.io/react-toastify/introduction) - This library handles rendering toast notifications for users whose browser doesn't support or denies permissions for the [Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification).
2. [react-hook-form](https://react-hook-form.com/) - Used for client-side form validation in the `JoinForm` and `ChatInput` components.
3. [prettier](https://prettier.io/) - I used Prettier to format the repository and enforce code style in my editor via 'format on save'.
4. [css-loader](https://github.com/webpack-contrib/css-loader) / [style-loader](https://github.com/webpack-contrib/style-loader) - These webpack plugins handle loading the CSS for `react-toastify` in `App.tsx`.

## Goals

- [x] Write clear, concise code
- [x] Implement wireframes
- [x] Add basic styles
- [x] Handle server errors, API call failures
- [x] Client-side validation for usernames and messages

## Stretch Goals

- [x] HTML5 notifications
- [x] Go all out on styling
- [x] Custom feature: notifications for non-HTML5 users

## Improvements I'd make with more time

- [ ] Persist username between sessions by storing it in localStorage
- [ ] Rate limiting user input in ChatInput to prevent spamming
- [ ] Add ESLint
- [ ] Lint and run Prettier on each commit using git hooks
- [ ] Add CI pipeline
- [ ] Add unit tests
