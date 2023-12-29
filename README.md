# Software Engineering

This repository contains all my scripts for the course CSE381: Software Engineering.

## Lab 1

You need to have a `OpenAI` API key to run the script. Please save the same in `.env` in the root of this directory. Also then just paste the lines for which you want to generate the stories in [data.txt](./lab1/data.txt).

After completing the setup, run the following:

```bash
npm install
node lab1/index.js
```

The generated stories would be present in [out.json](./lab1/out.json). To get the output as a table, you need to open the [index.html](./lab1/index.html) file with the [`LiveServer`](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VSCode. You can then copy and paste the generated table into an Excel.
