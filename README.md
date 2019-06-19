# Jobbe i SpareBank 1

[![Greenkeeper badge](https://badges.greenkeeper.io/SpareBank1/jobbsb1.svg)](https://greenkeeper.io/)

Dette repositoryet inneholder SpareBank 1s rekrutteringssite for designere og utviklere. Siten lages med [GatsbyJS](https://www.gatsbyjs.org) og [SpareBank 1 Designsystem](https://design.sparebank1.no/).

### Kom i gang

Installer Gatsbys kommandolineverktøy:
```bash
npm install -g gatsby-cli
```

Klon repoet og kjør npm install:
```bash
npm i
```

Start en lokal utviklingsserver:
```bash
npm run dev
```

### Publisering

Deploy til [github pages](https://sparebank1.github.io/jobbsb1/):
```bash
npm run deploy
```
**Merge til master branch vil føre til at Travis bygger og publiserer**

### Tester

Kjør tester:
```bash
npm run test
```

Kjør tester og oppdater snapshots:
```bash
npm run test-update
```