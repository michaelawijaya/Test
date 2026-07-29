## Getting Started
Hello future IT Developers!
This is the repo which you'll clone and work on for the next week.

Copy and run these commands to get the repo up and running on your machine.

First, you clone and remove the remote uri to the remote repo.
```bash
git clone https://github.com/JocimSus/oh26rec-template
cd oh26rec-template/
git remote remove origin
```

Then, you create a new repo on your account.
![](https://zip.jocimsus.tech/u/oTMVB5.png)

After that, copy the uri of the newly made repo.
![](https://zip.jocimsus.tech/u/uEWNNm.png)

After getting your own repo's url run these commands
```bash
git remote add origin YOUR_REPOSITORY_URL
git add .
git commit -m "Level 0: Clone Repo"
git push -u origin main 
```

Finally, run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `@/modules/AmbassadorPage/index.tsx`. The page auto-updates as you edit the file.

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
