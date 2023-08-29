# QA Automation Assessment

## Repository Structure

Below is the tree structure of this repository, outlining the key files and folders:


```bash
├── LICENSE
├── README.md
├── cypress/
│   ├── downloads/
│   ├── e2e/
│   │   └── computerDatabase.spec.cy.js
│   ├── fixtures/
│   │   └── example.json
│   ├── support/
│   │   ├── baseClass.js
│   │   ├── commands.js
│   │   └── e2e.js
│   └── ui/
│       ├── maps/
│       │   ├── addComputerMap.js
│       │   └── computerDatabaseMap.js
│       └── pages/
│           ├── addComputerPage.js
│           └── computerDatabasePage.js
└── cypress.config.js
```

### `cypress/`

The main directory for all Cypress-related files and folders.

#### `downloads/`

A folder used for storing downloaded files during test runs.

#### `e2e/`

This folder contains the actual end-to-end test specifications. For example, `computerDatabase.spec.cy.js` holds the test cases for the Computer Database functionalities.

#### `fixtures/`

Stores JSON files with static data that can be used across multiple test cases. The `example.json` is an example fixture.

#### `support/`

Contains utility files and custom commands to be used throughout your Cypress tests.

- `baseClass.js`: Provides foundational setup and teardown actions for all test cases.
- `commands.js`: Houses custom Cypress commands and overrides.
- `e2e.js`: Includes set-up logic specifically for end-to-end tests.

#### `ui/`

This directory holds Page Object Model (POM) files and corresponding object maps.

- `maps/`: Includes the object map files like `addComputerMap.js` and `computerDatabaseMap.js` that define the locators for UI elements.
  
- `pages/`: Contains the Page Object classes like `addComputerPage.js` and `computerDatabasePage.js` that encapsulate the actions that can be performed on a page.

### `cypress.config.js`

The configuration file for Cypress, where you can set global configurations that apply to all test suites and cases.

---

For more information on each folder or file, please refer to the comments in the respective file.


## Author: Humberto Israel Perez Rodriguez