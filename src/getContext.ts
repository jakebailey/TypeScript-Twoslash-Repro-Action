import {getInput} from '@actions/core'

export type Context = ReturnType<typeof getContext>

export const getContext = () => {
  const token = getInput('github-token')
  const repo = getInput('repo') || process.env.GITHUB_REPOSITORY!
  const label = getInput('label')
  const tag = getInput('code-tag')
  const bisectIssue = getInput('bisect')
  const owner = repo.split('/')[0]
  const name = repo.split('/')[1]

  const ctx = {
    token,
    owner,
    name,
    label,
    tag,
    bisectIssue,
  }

  return ctx
}
