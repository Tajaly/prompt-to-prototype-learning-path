# Project plan: [project name]

**Status:** Draft - not approved for implementation  
**Owner:** [learner or team]  
**Last updated:** [date]  
**Approved by / date:** [fill only after explicit approval]

## 1. Goal and intended user

**Problem:** [What problem are we solving?]  
**User:** [Who experiences it?]  
**Desired outcome:** [What can they achieve with this app?]

## 2. Success conditions

- [Observable, measurable result.]
- [Observable, measurable result.]

## 3. Scope

**In scope**

- [First-version capability.]

**Out of scope**

- [Explicitly excluded capability.]

## 4. Main user journey

[Starting point] -> [action] -> [result] -> [next action]

## 5. User stories and acceptance criteria

### US-01: [short, user-centered title]

**Story:** As a [user], I want [capability], so that [benefit].

**Priority:** [Must have / Should have / Could have]  
**Status:** Not started

- [ ] **AC-01.1:** Given [starting state], when [action], then [observable result].
- [ ] **AC-01.2:** Given [invalid input or error state], when [action], then [expected handling].
- [ ] **AC-01.3:** Given [edge case], when [action], then [observable result].

### US-02: [short, user-centered title]

**Story:** As a [user], I want [capability], so that [benefit].

**Priority:** [Must have / Should have / Could have]  
**Status:** Not started

- [ ] **AC-02.1:** Given [starting state], when [action], then [observable result].

Repeat this structure for the remaining stories. Do not mark criteria complete without evidence.

## 6. Data and boundaries

| Question | Agreed answer |
|---|---|
| What data is stored? | [Fields and example values.] |
| Where does it live? | [Browser, local file, or approved service.] |
| Who can access it? | [Users and permissions.] |
| Is it sensitive? | [Classification and excluded data.] |
| What happens if saving or loading fails? | [Visible behavior and recovery.] |
| What actions need separate approval? | [Dependencies, external services, publishing, etc.] |

## 7. Decisions and reasons

| ID | Decision | Alternatives / reason | Confirmed by |
|---|---|---|---|
| D-01 | [Chosen behavior or approach.] | [Why this option fits.] | [Person and date, or "Awaiting decision".] |

## 8. Open questions and assumptions

| ID | Question or assumption | Who decides? | Blocks implementation? | Status |
|---|---|---|---|---|
| Q-01 | [Do not silently turn this into a decision.] | [Person.] | Yes / No | Open |

Resolve blocking questions before implementation. Clearly label non-blocking assumptions and obtain agreement.

## 9. Technical approach

**Tools and versions:** [Confirmed available, not guessed.]  
**Dependencies:** [None, or justified and approved additions.]  
**Run command:** [Proposed until verified.]  
**Test command:** [Proposed until verified.]

**Proposed file structure**

```text
README.md
docs\
  PLAN.md
  TEST-RESULTS.md
  REVIEW.md
[source files]
[test files]
```

## 10. Implementation sequence

1. [Small setup step.]
2. [One user story and its tests.]
3. [Pause for learner feedback.]
4. [Next user story and its tests.]
5. [Acceptance checks, documentation update, and review.]

## 11. Test strategy

| Criterion | How to check it | Automated or manual? | Evidence location |
|---|---|---|---|
| AC-01.1 | [Input, action, expected output.] | [Type.] | docs\TEST-RESULTS.md |

Record actual outcomes as Pass, Fail, or Not run. A test plan describes intended checks; a test result records what really happened.

## 12. Risks and limitations

- [Known limitation and its effect on the user.]
- [Risk and the agreed response.]

## 13. Definition of done

- [ ] Blocking questions are resolved and approval is recorded.
- [ ] All required stories meet their acceptance criteria.
- [ ] Relevant automated and manual checks have recorded results.
- [ ] README describes the actual start and test steps.
- [ ] Code review is recorded; blocking findings are fixed and rechecked.
- [ ] Deferred findings and untested behavior are visible.
- [ ] No secrets, private data, or unwanted files are included.
- [ ] Publication has separate approval for the correct owner, repository, visibility, and branch.
- [ ] The remote repository contains the expected commit and documentation.
