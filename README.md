<h1>
  <span class="headline">New Project</span>
  <span class="subhead">Setup</span>
</h1>

## Setup

Open your Terminal application and navigate to your projects directory:

## Cloning the Auth boilerplate

This template uses the [`MEN Stack Auth Template`](https://github.com/Bahrain-SEB-15/SOLUTION-SESSION-AUTH-TEMPLATE) as starter code. Doing so allows us to have a connection established to our MongoDB Atlas, add functioning auth for our user model, and install some of the packages we will need for our app build.

Navigate to the [SOLUTION Session Auth Template](https://github.com/Bahrain-SEB-15/SOLUTION-SESSION-AUTH-TEMPLATE) and clone the repository to your machine and rename the folder to your desired project name by running the following command in your terminal.

**Be sure to replace `<YOUR-PROJECT-NAME>` with your desired project name!**:

```bash
git clone https://github.com/Bahrain-SEB-15/SOLUTION-SESSION-AUTH-TEMPLATE.git <YOUR-PROJECT-NAME>
```

Note by adding the `<YOUR-PROJECT-NAME>` argument we're cloning the specified repo into a directory called `<YOUR-PROJECT-NAME>` on our machines.

Next, `cd` into your renamed directory:

**Be sure to replace `<YOUR-PROJECT-NAME>` with your desired project name!**:

```bash
cd <YOUR-PROJECT-NAME>
```

Finally, remove the existing `.git` information from this template:

```bash
rm -rf .git
```

> Removing the `.git` info is important as this is just a starter template provided by GA. You do not need the existing git history for this project.

## GitHub setup

To add this project to GitHub, initialize a new Git repository:

```bash
git init
git add .
git commit -m "init commit"
```

Make a new repository on [GitHub](https://github.com/) for your project.

Link your local project to your remote GitHub repo:

- use the second set of commands that appear on the empty repo to connect your local project to GitHub.

> 🚨 Do not copy the above command. It will not work. Your GitHub username will replace `<github-username>` (including the `<` and `>`) in the URL above.

Open the project's folder in your code editor:

```bash
code .
```

## Install dependencies

Next, you will want to install all of the packages listed in `package.json`

```bash
npm i
```

## Create your .env

Lastly, we want to create `MONGODB_URI` and `SESSION_SECRET` to hold values used in our auth logic.  `MONGODB_URI` will connect to your MongoDB Atlas connection string so you will need to establish one for this application.  `SESSION_SECRET` will aid in your auth session logic.

Add a `.env` file to your application and add the following secret keys to your application:

```text
MONGODB_URI=
SESSION_SECRET=
```

Start the server and you are ready for launch.

```bash
npm run dev
```

Happy Coding!
