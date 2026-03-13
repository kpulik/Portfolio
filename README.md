Whenever changes are made to the portfolio, use this workflow in the project directory:

```
git add .
git commit -m "[describe your portfolio changes]"
git push origin main
npm run deploy
```

What this does:
- `npm run deploy` runs a fresh build and publishes `dist/` to `gh-pages`.
- You should not delete the `gh-pages` branch each time.
- `dist/` is generated output and should not be committed to `main`.

[Portfolio](https://kpulik.github.io/Portfolio/)
