# Example plan: Learning Tracker

**Status:** Teaching example for a different idea - not your project  
**Scope:** A single-person local learning app  
**Approval:** In a real plan, recorded only after the owner answers the open decisions

This is an example of a good plan for someone else's idea: a small Learning Tracker. Use it to see how specific your own plan should be, in its stories, acceptance criteria, decisions, and tests. Do not copy its idea or its decisions. Your plan describes your own idea, and Copilot must ask you about each decision instead of borrowing these.

This example happens to be a browser app built with HTML, CSS, and JavaScript. Your project may use different tools.

## 1. Goal and user

A beginner wants to keep track of topics they intend to learn and topics they have completed. The app gives them a small, persistent list without requiring an account.

**Success:** The learner can add a topic, complete or reopen it, filter the list, and refresh the same local address without losing saved topics or completion states.

## 2. Scope

| In scope | Out of scope |
|---|---|
| Add titles of 1-80 characters after trimming whitespace. | Accounts, passwords, or multiple users. |
| Complete and reopen individual topics. | Team sharing or cross-device synchronization. |
| Store topic titles and completion states in the browser. | External APIs, databases, or paid services. |
| Filter by All, To learn, and Done. | Editing, deleting, due dates, or notifications. |
| Keyboard access, narrow-screen layout, clear validation. | Production deployment or AI features inside the app. |

## 3. User journey

Open page -> add "Learn GitHub" -> see the topic -> mark it done -> filter Done -> refresh -> see the saved completed topic -> reopen it when more practice is needed.

## 4. User stories

All stories are **Must have** for this example. All acceptance criteria are initially unchecked.

### US-01: Capture a learning topic

**Story:** As a learner, I want to add a topic, so that I do not forget what I want to learn.

**Status:** Not started

- [ ] **AC-01.1:** Given the app is open, when I enter `Learn GitHub` and select Add, then exactly one new "to learn" topic with that title appears.
- [ ] **AC-01.2:** Given I enter `  Learn GitHub  `, when I add it, then the saved title is `Learn GitHub`, without leading or trailing whitespace.
- [ ] **AC-01.3:** Given an empty or whitespace-only title, when I try to add it, then no topic is added and a visible, understandable validation message appears.
- [ ] **AC-01.4:** Given a valid title of exactly 80 characters, when I add it, then it is accepted; given 81 characters, then it is rejected with a clear message.
- [ ] **AC-01.5:** Given I am using only the keyboard, when I focus the labeled input, enter a valid title, and submit with Enter, then the topic is added and focus remains usable.
- [ ] **AC-01.6:** Given the title `<b>Learn GitHub</b>`, when I add it, then the angle brackets and text are displayed literally, not rendered as HTML.

Duplicate handling and ordering follow the learner's approved decisions. The example decisions below allow duplicates as separate items and show newest topics first.

### US-02: Track completion

**Story:** As a learner, I want to mark a topic done or reopen it, so that the list reflects my actual progress.

**Status:** Not started

- [ ] **AC-02.1:** Given a topic is "to learn", when I activate its completion control, then it becomes "done" and its state is clear without relying only on color.
- [ ] **AC-02.2:** Given a topic is "done", when I activate its control again, then it returns to "to learn".
- [ ] **AC-02.3:** Given several topics, including two with identical titles, when I toggle one, then only that individual topic changes state.
- [ ] **AC-02.4:** Given keyboard-only navigation, when I focus and activate a topic's control, then its completion state changes and the control has an understandable accessible label.

### US-03: Continue after a refresh

**Story:** As a learner, I want my list to remain after a refresh, so that I can return to my learning later.

**Status:** Not started

- [ ] **AC-03.1:** Given I have added two topics and completed one, when I refresh the same local URL in the same browser profile with storage available, then both titles, their order, and completion states remain.
- [ ] **AC-03.2:** Given this browser has no saved topics, when I open the app, then a helpful empty state appears without an error.
- [ ] **AC-03.3:** Given saving is unavailable or fails, when I add or toggle a topic, then a persistent warning explains that the current session's changes may be lost after refresh; the app does not claim that saving succeeded.
- [ ] **AC-03.4:** Given saved content cannot be read or is invalid, when the app opens, then it shows an understandable warning instead of crashing or silently overwriting the unreadable data.

For the example failure policy, allow temporary in-memory use, warn clearly, and do not overwrite unreadable stored content automatically. This is a decision to discuss, not a universal requirement.

### US-04: Focus on the right topics

**Story:** As a learner, I want to filter topics by progress, so that I can focus on what I still need to learn.

**Status:** Not started

- [ ] **AC-04.1:** Given a mixture of completed and unfinished topics, when I select All, then every topic appears; To learn shows only unfinished topics; Done shows only completed topics.
- [ ] **AC-04.2:** Given the selected filter has no matching topics, when I view the list, then a helpful empty-state message appears.
- [ ] **AC-04.3:** Given I am filtering by To learn, when I complete a visible topic, then it leaves that filtered view but remains present under Done and All.
- [ ] **AC-04.4:** Given keyboard-only navigation, when I change a filter, then the filter operates and its selected state is understandable.

## 5. Shared quality criteria

- [ ] **Q-01:** At a 375-pixel viewport width, the page has no horizontal page scrolling; long valid titles do not hide essential controls.
- [ ] **Q-02:** Inputs and controls have descriptive labels, visible focus, and keyboard operation.
- [ ] **Q-03:** Validation and storage warnings are visible and understandable, not only written to a developer console.
- [ ] **Q-04:** No topic data is sent to an external service.

## 6. Example decisions to confirm with the learner

| ID | Example decision | Reason | Actual approval |
|---|---|---|---|
| D-01 | Permit duplicate titles as separate topics with separate identities. | The same subject may be practiced more than once. | Not yet obtained. |
| D-02 | Show newest topics first; completion does not reorder them. | Newly captured learning stays easy to find. | Not yet obtained. |
| D-03 | Use browser-local storage; allow session-only use with a persistent warning on failure. | Keep the prototype usable without pretending data is saved. | Not yet obtained. |
| D-04 | Do not overwrite unreadable saved content automatically. | Avoid silently destroying potentially recoverable data. | Not yet obtained. |
| D-05 | Reset the selected filter to All after refresh. | Only topics and completion are required to persist. | Not yet obtained. |

**Before approval:** Resolve these decisions, confirm the approved runtime is installed, and agree on the local preview port. Ask about any other consequential ambiguity. Revise acceptance criteria if a decision changes; do not leave contradictions between the table and the stories.

## 7. Data and technical approach

**Browser UI:** Plain HTML, CSS, and JavaScript, without a framework.  
**Local runtime:** Organization-approved Node.js LTS.  
**Dependencies:** Prefer no third-party runtime or test packages.  
**Serving:** A small local server bound to the loopback interface, with a documented, stable port.  
**Proposed commands:** `npm start` for the preview and `npm test` for focused automated tests. These become verified instructions only after implementation and execution.

Each topic needs a stable identity, a title, and a completed/not-completed value. Ordering must remain consistent with the approved decision. Validate saved data before using it and display user-entered titles as text.

Browser-local storage is not an account, cloud backup, or secure vault. Another browser profile, a different local address or port, or cleared browser data may not have the same list. Private browsing may not preserve data. Do not use confidential or important information in this prototype.

### Proposed files

```text
README.md
.gitignore
package.json
server.js
public\
  index.html
  styles.css
  app.js
  tracker.js
tests\
  tracker.test.js
docs\
  PLAN.md
  TEST-RESULTS.md
  REVIEW.md
```

Keep testable state and validation logic separate from browser rendering where useful. Do not introduce extra architecture merely to fill this example structure. If implementation reveals a necessary change, explain and record it.

## 8. Small implementation steps

1. Confirm decisions and save the approved documentation.
2. Create the minimal local project; implement US-01 and its validation tests. Let the learner try it.
3. Implement US-02 and focused state-change tests. Let the learner try it.
4. Implement US-03 and storage-boundary checks. Verify real-browser refresh behavior.
5. Implement US-04 and filter tests. Verify keyboard and narrow-screen use.
6. Run the combined checks and update the README and test record.
7. Perform a separate review. Fix approved findings and recheck.
8. Prepare the GitHub upload, obtain destination-specific approval, push, and verify the remote.

## 9. Test strategy and evidence

| Coverage | Method | Evidence to record |
|---|---|---|
| US-01 | Automated boundary checks for trimming and lengths 0, 1, 80, 81; manual add and literal-text checks. | Command and result; browser steps and observed behavior. |
| US-02 | Automated independent-item toggling; manual keyboard interaction. | Test names and result; keyboard observations. |
| US-03 | Automated load/save boundary behavior where practical; manual real-browser refresh, failed storage, and invalid saved content. | Pass, Fail, or Not run for each case. |
| US-04 | Automated filtering; manual empty state and toggle-under-filter checks. | Expected and actual results. |
| Q-01 to Q-04 | Manual 375-pixel layout and keyboard checks; code inspection of rendering, storage, and external calls. | Exact scope and any limits of inspection. |

Use `docs\TEST-RESULTS.md` for the actual evidence. Do not describe automated tests of state functions as proof that the browser UI works.

## 10. Risks and limitations

- Browser storage can be cleared, blocked, or unavailable; there is no backup or cross-device sync.
- A changed preview origin can appear to have a different list. Document the exact URL.
- The local server and prototype are not reviewed or hardened for public hosting.
- Passing tests and an AI review do not guarantee the absence of defects.
- GitHub repository access and branch policies may require facilitator help during publication.

## 11. Definition of done

- [ ] The learner explicitly approves scope and all blocking decisions.
- [ ] All four stories and shared quality criteria have recorded evidence.
- [ ] Automated tests pass; manual checks have honest results.
- [ ] README includes verified start, test, and stop instructions.
- [ ] The code review and its findings are recorded.
- [ ] Blocking findings are fixed and rechecked; limitations remain visible.
- [ ] Only intended files are approved for inclusion, with no secrets.
- [ ] Publication is separately approved for the exact organization repository.
- [ ] The expected commit and documentation are confirmed on GitHub.
