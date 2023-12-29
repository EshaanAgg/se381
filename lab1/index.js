import 'dotenv/config';
import OpenAI from 'openai';
import fs from 'fs';
import sampleResponse from './sample.json' assert { type: 'json' };

const generatePrompt = (input) => {
  return `
I want to extract design elements from a set of user stories. I need to generate the classes, attributes and relatioships from the provided user story. The input would be in form of a sentence, and the output in the form of JSON.

Please only respond with valid JSON and nothing else. Also keep the design of the story simple, and focus only on the requirements from the given input.

Example Input: "As a faculty member, I want to mark attendance of students so that I can track their regularity."
Example Output:
"""
${JSON.stringify(sampleResponse, null, 2)}
"""

Your Input: ${input}
`;
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateStory = async (input) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: generatePrompt(input),
      },
    ],
    model: 'gpt-3.5-turbo',
  });

  return JSON.parse(chatCompletion.choices[0].message.content);
};

const main = async () => {
  const lines = fs.readFileSync('lab1/data.txt', 'utf-8').split('\n');

  const output = [];
  for (const line of lines) {
    const story = await generateStory(line);
    output.push({
      input: line,
      story,
    });
  }

  fs.writeFileSync('lab1/out.json', JSON.stringify(output, null, 2));
};

main();
