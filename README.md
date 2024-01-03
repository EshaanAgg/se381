# Software Engineering

This repository contains all my scripts for the course `CSE381: Software Engineering`.

## Lab 1

You need to have a `OpenAI` API key to run the script. Please save the same in `.env` in the root of this directory (use the field name as `OPENAI_API_KEY`).

You need to paste the lines for which you want to generate the stories in [data.txt](./lab1/data.txt). After the same is done, you can run the following:

```bash
npm install
npm run lab1
```

The generated stories would be present in [`out.json`](./lab1/out.json). To get the output as a table, you need to open the [`index.html`](./lab1/index.html) file. The same would be served on `http://localhost:3000` on your machine directly when you run the above command with the help of [`serve`](https://github.com/vercel/serve). You can copy and paste the table directly to MS Excel or Google Sheets to get the formatted output.
