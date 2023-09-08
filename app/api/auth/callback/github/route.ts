import GithubProvider from "@auth/core/providers/github";

GithubProvider({
  clientId: process.env.GITHUB_CLIENT_ID as string,
  clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
})