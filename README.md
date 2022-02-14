# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

------

[簡單了解一下 slider order 問題](https://www.wkhomeland.com/docs/docusaorus%E4%BD%BF%E7%94%A8/docusaurus%E6%96%87%E6%A1%A3%E6%8E%92%E5%88%97%E9%A1%BA%E5%BA%8F07-07)

