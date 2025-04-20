import axios from 'axios';

export function testEnv() {
    console.log("ENV GITHUB TOKEN", process.env.GITHUB_TOKEN);
}

export async function getPRDiff(owner, repo, number) {
const githubAPI = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json'
    }
    });
  const res = await githubAPI.get(`/repos/${owner}/${repo}/pulls/${number}`, {
    headers: { Accept: 'application/vnd.github.v3.diff' }
  });
  return res.data;
}

export async function commentOnPR(owner, repo, number, body) {
const githubAPI = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json'
    }
    });
  await githubAPI.post(`/repos/${owner}/${repo}/issues/${number}/comments`, {
    body
  });
}
