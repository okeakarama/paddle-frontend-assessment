## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites 📋

You'll need [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

```
node@v16.15.0 or higher
npm@8.5.5 or higher
```

Also, you can use [Yarn](https://yarnpkg.com/) instead of NPM ☝️

```
yarn@v1.22.10 or higher
```


### Libraries and dependecies used  📋

- antd
- axios
- react-icons
- react-redux
- react-router-dom
- reduxjs/toolkit
- tachyons

---

## How To Use 🔧

From your command line or terminal, first clone the repository:

```bash
# Clone the repository
$ git clone https://github.com/okeakarama/paddle-frontend-assessment

# Move into the repository
$ cd paddle-frontend-assessment

# Remove the current origin repository
$ git remote remove origin
```

After that, you can install the dependencies either using NPM or Yarn.

Using NPM: Simply run the following commands.

```bash
# Install dependencies
$ npm install

$ npm install antd
$ npm install axois
$ npm install tachyons
$ npm install react-icons --save
$ npm install react-router-dom
$ npm install react-redux
$ npm install @reduxjs/toolkit


# Start the development server
$ npm start
```

Using Yarn: Be aware of that you'll need to delete the `package-lock.json` file before executing the following commands.

```bash
# Install dependencies
$ yarn

$ yarn add antd
$ yarn add axois
$ yarn add tachyons
$ yarn add react-icons --save
$ yarn add react-router-dom
$ yarn add react-redux
$ yarn add @reduxjs/toolkit


# Start the development server
$ yarn start
```

**NOTE**:
If your run into issues installing the dependencies with NPM, use this below command:

```bash
# Install dependencies with all permissions
$ sudo npm install --unsafe-perm=true --allow-root
```

Once your server has started, the react application should automatically open on a browser. In any case that it didn't, manually go to this url `http://localhost:3000/` to launch app.



## Usage Error 🛠️
After the launching the application and you are unable to interact with the application (links and input), kindly goto: `src/css/style.css` and comment out line 4, bug fix in progress...


## Addition 🎁
The github most starred repo in the route `/github` is back dated to 2021-08-13 which will be a lot better if set to fetch the data in realtime using the current date. I have added both codes with the realtime as a comment. To change the github most starred repo fetch to realtime goto: `src/redux/Actions/Reposactions` and study lines 5,6 and 10,11.
