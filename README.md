Whenever changes are made to the portfolio, open your code editor and run the following in the project directory:

```
npm run build
git add dist -f
git commit -m "Remove images from portfolio"
git push origin --delete gh-pages
git subtree push --prefix dist origin gh-pages
```

[Portfolio](https://kpulik.github.io/Portfolio/)
