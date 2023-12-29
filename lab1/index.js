import 'dotenv/config';
import OpenAI from 'openai';
import fs from 'fs';

const generatePrompt = (input) => {
  return `
I want to extract design elements from a set of user stories. I need to generate the classes, attributes and relationships from the provided user story. The input would be in form of a sentence, and the output in the form of JSON.

Please only respond with valid JSON and nothing else. Also keep the design of the story simple, and focus only on the requirements from the given input.

Example Input: "As a faculty member, I want to mark attendance of students so that I can track their regularity."
Example Output:
"""
${fs.readFileSync('lab1/sample.json', 'utf-8')}
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

  return {
    input,
    story: JSON.parse(chatCompletion.choices[0].message.content),
  };
};

const main = async () => {
  const requestPromises = fs
    .readFileSync('lab1/data.txt', 'utf-8')
    .split('\n')
    .map((line) => generateStory(line.trim()));

  const responses = await Promise.all(requestPromises);

  fs.writeFileSync('lab1/out.json', JSON.stringify(responses, null, 2));

  console.log('All the data has been generated!');
};

main();
