# Vanilla BEM CSS

> Markup builder inspired by [BEM](https://bem.info) and [Vanilla CSS](https://pitercss.ru/8/pres/vanilla-css/)

* File structure with BEM.
* Bundles (e.g. `common.bundles/main/main.css`) work right in your browser without build.
* After build your bundle compile into single file with `.min` suffix.

Builder include:

* Compile with `postcss-import`.
* Rebase urls with `postcss-url`.
* Prefixes with `autoprefixer`.
* Minify with `csso`.


```sh
git clone https://github.com/palegrow/vanilla-bemcss.git new-project
cd new-project
npm install

gulp --cwd common.bundles/main

gulp --cwd desktop.bundles/main
```
