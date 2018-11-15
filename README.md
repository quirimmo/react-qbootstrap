# react-qbootstrap

The bootstrap project generated automatically by the following node module:

[react-qbootstrap-typescript-generator](https://www.npmjs.com/package/react-qbootstrap-typescript-generator)

It generates a react redux application with typescript and other features you can read about below.

## Scripts

The package.json already includes the following scripts ready to be used:

- **start**: Run the application through webpack-dev-server opening the browser and listening at http://localhost:8080/ , with live reload enabled
- **build**: Publish the bundle through webpack at the subfolder _dist_ of your project
- **test**: Executes the unit tests through jest watching for changes with live reload
- **test-single-run**: Executes the unit tests through jest and exits at the end of the tests execution
- **test-coverage**: Executes the script _test-single-run_ creating the current coverage of the tests at the subfolder _coverage_ of your project
- **test-update-snapshots**: Updates the snapshots through jest

## Features

The following features are working in the project, and ready to be used if you want to:

- **redux**: Redux is already set up in the project, with redux-thunk added too. You already have a fake store with a fake reducer defined in the application, which you can delete when you will add your real store, reducers and actions. Change also the store interface according to your real data model of the application.
- **api interfacing**: There is a service called `http-proxy.service.ts` which already implements a custom class for interfacing with an api, through _axios_ for performing the http requests, providing few custom methods for _GET, POST, PUT, DELETE_. The project already includes also _rxjs_ if you want to manage async code through that library, otherwise you can get rid of it.
- **routing**: The project already includes the _react-router_ library for managing routing, and a first test route for the home route, which can be deleted when you are implementing your own routes.
- **linting**: Linting already added in the project, with few custom rules in the `tslint.json` file and few extensions. Feel free to add, change or remove whatever rule or extensions.
- **testing**: Testing already enabled in the app with few tests already implemented, for the code which should not be changed, and even for the code that could be deleted, to work as guideline for implementing your own tests. There is already the watch mode implemented, the single run, and the coverage, which can be then accessed inside the `coverage` main folder in your project. _enzyme_ is already added in the project and it's ready to be used.
- **prettier**: For code formatting, you can use _prettier_ whose options are defined inside the `.prettierrc` file. Feel free to change all the rules you want to use, or to remove it and clean up the related packages if you don't want to use _prettier_ at all.
- **styling**: SASS and CSS are already supported by the project. It's available also the _bootstrap_ library everywhere in your components.
- **timing**: For managing times and dates, the _moment_ library is already included in the project and it is ready to be used.
- **reactstrap**: The React implementation of bootstrap components. You can find several useful components, even for the layout. Feel free to remove it if you don't want to use this library at all.

## Structure

The code of the app is available inside the `src` subfolder. All the code of the application is inside this folder.

The `index.tsx` file bootstraps the application and the redux store.



- 
- As per redux pattern, you can definepresentationals and containers with proper extension
- routers
- tests with spec in the same folder, enzyme and test folder for setup features, mock styles etc
- services
- store
- main app component which includes styles of bootstrap and of main app
- assets with images and global styles css and sass
- other components
- reducers, actions and store

## Instructions

1. package.json url, homepage, repository, name, author, description, bugs
2. index.html title
3. add git or your svn. If using git, the .gitignore is ready to be used with the current structure. If you are not using git, simply delete the .gitignore file
4. add reducers and then remove fake ones and update store
5. add routes and then remove home fake ones
6. add components and remove home fake ones
