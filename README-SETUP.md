# Setting up your photo journal (one time, about 30–45 minutes)

You never need to write code. Follow these steps in order.

## Step 1: Make a GitHub account and repository
1. Go to https://github.com and sign up (free).
2. Click the **+** at the top right → **New repository**.
3. Name it something like `my-photo-journal`. Choose **Public** (simplest). Click **Create repository**.
4. On the new page, click **uploading an existing file**.
5. Unzip the folder I gave you, then drag **everything inside it** into the browser (all the files and folders, not the folder itself). Click **Commit changes**.

## Step 2: Tell the editor which repository is yours
1. In your repository on GitHub, open the folder `src` → `admin` → `config.yml`.
2. Click the pencil icon (Edit).
3. Find the line `repo: YOUR-GITHUB-USERNAME/YOUR-REPO-NAME` and replace it with yours, for example `repo: jane/my-photo-journal`.
4. Click **Commit changes**.

## Step 3: Put it on Netlify
1. Go to https://app.netlify.com and sign up with your GitHub account.
2. Click **Add new project** → **Import an existing project** → **GitHub**, and choose your repository.
3. Leave the settings as they are (they're already filled in) and click **Deploy**.
4. After a minute you'll get a web address like `something.netlify.app`. That's your site! You can rename it under **Site configuration → Change site name**.

## Step 4: Let yourself log in to the editor
The editor needs permission to save to your GitHub. Do this once:
1. On GitHub: **Settings** (your profile) → **Developer settings** → **OAuth Apps** → **New OAuth App**.
   - Application name: `My Journal`
   - Homepage URL: your Netlify address, e.g. `https://something.netlify.app`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
   - Click **Register application**, then **Generate a new client secret**. Keep this tab open.
2. On Netlify, open your site → **Site configuration** → **Access & security** → **OAuth** → **Install provider** → choose **GitHub**.
3. Paste the **Client ID** and **Client Secret** from GitHub, and click **Install**.

## Step 5: Write your first entry
1. Visit `your-site.netlify.app/admin` and click **Login with GitHub**.
2. Click **New entry**. Pick the date, add a title, tap **Add photo** to choose photos from your phone or computer, add captions and your writing, then use **Publish → Publish now**.
3. Wait about a minute, and it appears on your site.

Tip: on your phone, open `/admin` and use "Add to Home Screen" so it's one tap every day.

## Everyday use
Open `/admin` → New entry → add photos and words → Publish. That's it.
To remove the sample entry: in `/admin`, open "My first entry" and choose **Delete entry**.

## Changing the site's name
On GitHub, edit `src/_data/site.json` (pencil icon) and change the `title` and `tagline`.
