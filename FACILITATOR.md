# Facilitator setup and completion checklist

## Before the session

Prepare a 90-120 minute learning session after account and software setup. Each learner turns their own small idea into a working first version on their computer, then publishes it to an organization they can write to.

| Prepare | Why it matters |
|---|---|
| Each learner's personal GitHub account invited to the organization, and the invitation accepted. | Learners otherwise cannot see the organization or choose it as the repository owner. |
| Repository-creation permission confirmed for organization members. | Organization membership alone does not guarantee repository creation or pushing. |
| GitHub Copilot app and Git installed; app sign-in completed. | Keep the workshop focused on learning rather than installation. |
| Appropriate Copilot access and the organization's GitHub Copilot app policy enabled. | App access is distinct from membership and from the Copilot CLI policy in current documentation. |
| The tools learners' projects are likely to need, such as a programming language, approved and installed in advance. | Learners choose their own ideas, so agree up front which tools they may use. Installing unfamiliar tools mid-session costs time and can break policy. |
| One unique repository name per learner: a short project name plus their GitHub username, such as `PROJECT-USERNAME`. | Avoids naming collisions and accidental pushes to another learner's repository. |
| Required visibility and a policy-compliant initial-push route agreed. | The main guide uses a new private repository and an allowed initial push to `main`. |
| A support route for authentication, blocked permissions, and missing tools. | Learners should ask for help rather than weaken controls. |

Tell learners the literal organization name and repository naming rule. `YOUR-ORG`, `YOUR-USERNAME`, and `YOUR-PROJECT` in the materials are placeholders; never paste those literal values as destinations.

Do not require learners to enter secrets in prompts, enable blanket tool approvals, expose their local server publicly, or bypass organization controls.

## If the organization requires pull requests for the initial work

Do not weaken the rules to fit the exercise. Have an authorized maintainer provide an initialized repository with an approved baseline branch. A completely empty repository may not yet have the base branch needed for a pull request.

For those learners, adjust the workflow before the workshop:

1. Connect the organization's initialized repository using **Projects + -> GitHub repository** instead of starting in a plain folder.
2. Use a separate feature branch or **New worktree** session for the exercise.
3. Keep the same planning, documentation, implementation, and review steps.
4. Skip the guide's empty-repository creation and initial `main` push. Push the reviewed feature branch to the existing destination and use **Create PR**.
5. Follow required reviewers, checks, and merge permissions. Do not imply that a successful push means the PR was approved or merged.

Explain that the session's working copy can differ from the original clone. Keep all implementation, tests, and publishing in the same session and verify its path and branch.

## Facilitation cues

- Ask learners to bring an idea. Help anyone who is stuck narrow theirs to one kind of user, one main task, and three or four small features, but let them choose it.
- Ask "How would you check that?" whenever a requirement says "easy," "good," or "reliable."
- Let Copilot ask its clarification questions. The example plan only shows the level of detail to aim for; learners plan their own idea and make their own decisions.
- Require learners to explain one trade-off in their own words.
- Keep the first project small. Save new feature ideas for later stories.
- Demonstrate that a file saved in a chat's internal plan location is not automatically part of the learner's repository.
- Make the code review a separate activity after implementation, not a single "build and review everything" request.
- Have learners check the GitHub destination themselves before approving a push.

## Completion evidence

| Evidence | What to look for |
|---|---|
| `docs\PLAN.md` | Clear goal, scope, numbered stories, checkable criteria, and explicit decisions. |
| Working project | At least one demonstrated normal path and one edge case. |
| `docs\TEST-RESULTS.md` | Actual results, including anything not run. |
| `docs\REVIEW.md` | Findings, fixes, rechecks, and visible limitations. |
| `README.md` | Accurate run, test, and stop instructions and a link to the plan. |
| Organization repository or policy-required PR | Correct owner, visibility, branch, and expected commit/files. |

## Screenshots and version changes

The screenshots are GitHub-published examples, not captures of a learner's machine. Some product-page images retain older labels. The guide's steps follow the current official documentation checked on 23 September 2026.

Before delivering a future workshop, check the **Projects +**, **Local folder or repository**, mode picker, **Changes**, and **Create PR** labels against the app version in use. Keep screenshot credits with the materials. If making your own replacement screenshots, use a clean demonstration account and remove personal, customer, and private-repository information.

## Web version of the guide

The `docs` folder holds a static web version of `README.md` that you can publish with GitHub Pages. It adds copy buttons to the prompts and checkpoints that learners can tick. The ticks are saved only in each learner's browser. The site is not published yet; see [`docs/README.md`](docs/README.md) for how to preview and publish it.

When you change `README.md`, `SOURCES.md`, or a screenshot, update `docs/index.html` and `docs/assets` in the same change so the two versions never disagree.
