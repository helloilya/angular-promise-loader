# Angular promise loader

> Angular directives to display loading for button and form based on promises.

### Demo

Example loader is located [here](http://fedotov.work/angular-promise-loader/).

### Usage

Install via bower or download the files from the `dist` folder in the your repo.

```
$ bower install angular-promise-loader
```

Add `dist/loader.min.js` and `dist/loader.min.css` to your `index.html`. After, add `angularPromiseLoader` as a module dependency to your angular module.

```js
angular.module('myApp', ['angularPromiseLoader']);
```

Create new tag element, for example `button`, and add `ng-element-loader` attribute to element. As an option, specify the promise function.

```html
<button type="button" class="apl-button" ng-element-loader="promiseFunction()">Button</button>
```

If you have a form, add `ng-form-loader` attribute for submit button. After submitting, all `ng-model` elements of the form will be disabled until the promise response is received.

```html
<form name="loaderForm">
	<input type="text" ng-model="input">
	<button type="submit" class="apl-button" ng-form-loader="promiseFunction()">Submit</button>
</form>
```

The module is adding classes to element for each states:

* `apl-progress` while you are waiting for a promise response;
* `apl-success` if response was a resolve;
* `apl-error` if response was a reject.

The `dist/loader.min.css` file include the default styles for states. You can use them with every front-end framework. Just add `apl-button` class for a button element.

### Development

Install gulp via npm.

```bash
npm install -g gulp
```

After, you can use the next commands for development:

* `gulp watch` run a watcher for the `src` and `demo` folders;
* `gulp build` build the project to `dist` folder.

### Release History

* 1.0.0 — Added bower support.
* 0.1.1 — Added form loader example in the demo.
* 0.1.0 — Initial release.

### License

MIT © [Ilya Fedotov](http://fedotov.me)