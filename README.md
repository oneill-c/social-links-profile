# Social links profile

A simple [EJS](https://ejs.co/) template that when rendered will output a lightweight HTML & CSS page displaying all the social links that you give it.

It is the perfect way to keep all your socials links in one place. Even link it from the bio of each of your social media profiles so your followers can find you on other platforms

## A picture is worth 1000 words
![collage](https://storage.photojoiner.com/api/attachments/file/2024-03-03/upload_6139a1f0aa4824f7fe2b9d13e4f3576e.jpg)

## How to use

1. Clone or download the code as a zip file from here.
2. Replace `assets/images/me.jpeg` with a picture of yourself.
3. Install dependencies.

```
npm install ejs
```

4. Open `data.json` and change the values to your own personal data.

5. Run the script using NodeJS

```
node ./generate_profile.js
```

6. Find the resulting HTML file in the `/public` folder.
7. Upload to your favorite hosting site ([Netlify](netlify.com), [Heroku](https://www.heroku.com/), [Vercel](https://vercel.com/), [GitHub Pages](https://pages.github.com/), etc.)

## Future work

1. The app is currently locked to specific social media links, in future is should be more generically templated so users can upload as many as they want.
2. Color theme is currently locked. It should given the ability to toggle between dark and light theme or even allow the user to use their own color theme.
3. Allow not only social links but maybe also affiliate links.
