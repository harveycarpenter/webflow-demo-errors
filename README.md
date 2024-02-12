# demoApp

This is the most minimal version I could come up with showing a React + Webflow + Webpack... and webflow.createDOM() not working.

You should be able to select an element on the canvas, click the button, and see webflow.createDOM does not exist on the webflow object and an error in the console.

## Developing

```
$ npm run dev
```

The above command does a few things:
* Installs dependencies
* Spins up a process that serves your extension files from under `public/`

The command outputs the URL under which your extension is being served. Use this as the “Development URL” for your app in the Webflow Designer’s Apps panel. You can then launch the extension from the same place.