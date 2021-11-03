# Quick Build Notes

Building jekyll site
```
JEKYLL_ENV=production bundle exec jekyll build -d ../_site/v1
```

Updating npm packages within version
```
npm update --save-dev &&
npm update --save
```

Updating npm devDependencies packages to latest version
```
npm install autoprefixer@latest --save-dev &&
npm install css-loader@latest --save-dev &&
npm install extract-loader@latest --save-dev &&
npm install file-loader@latest --save-dev &&
npm install postcss-loader@latest --save-dev &&
npm install sass@latest --save-dev &&
npm install sass-loader@latest --save-dev &&
npm install webpack@latest --save-dev &&
npm install webpack-cli@latest --save-dev &&
npm install webpack-dev-server@latest --save-dev
```

Updating npm dependencies packages to latest version
```
npm install material-components-web@latest --save &&
npm install normalize-scss@latest --save
```

Check for outdated packages
```
npm outdated
```

Install npm packages as specified in `package-lock.json` only
```
npm ci
```

Run `webpack.config.js` to rebuild `style.css`
```
npm start
```
