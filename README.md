# next-js-docker container ( backend coming soon)



## Setup

### Development environment

- Run

```bash
git clone https://github.com/phil-markarian/next-js-docker # to clone project
cd next-js-docker # enter in the project
docker-compose up
```

- Rename all the `.env.example` to `.env`.

- Create a `.env` file in the root of the directory.

- Visit `http://localhost:3000/`

### Linting

#### In VSCode

- Install ESLint and Prettier VSCode extensions.
- **Done! Now you have live linting and autofixing setup!**

#### In Any other IDE

- Run `yarn lint` in indivisual `packages` to check for linting errors.
- Run `yarn lint:fix` to fix the linting errors.

##  Info

- We are following the micro-services architechture. That means, to install npm modules, you'll have to run `yarn add` in the respective packages.
- To customize the linter, use `.eslintrc` and `.prettierrc` file. [Learn more](https://eslint.org)

##  Credit

Based off of Kumar Abhirup's repo. Many thanks!

[Dockerized](https://github.com/kumarabhirup/dockerized)

