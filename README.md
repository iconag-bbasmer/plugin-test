# Test Repository for a plug-in structure with React and Typescript

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses the usual scripts.

## Purpose

I try to setup a plug-in based infrastructure for a React app. The plug-ins may or may not exist in the file structure and will be loaded dependent on a runtime variable that is set in the file /public/runtime-env.js.

This file is included into the head of the file public/index.html and can be referenced in the components (see also under src/types).
