# Coding Programme - React

My own versions of the React practical activity example code from the coding
programme. The file names and section numbering follow the course repo, but
every file has been changed in at least one way rather than copied as-is.

The course files leave gaps - `// Implement delete functionality here`,
`{/* Add content for job items here */}`, empty CSS rule bodies. **In these
versions those gaps are filled in**, and each file carries a comment at the
top saying what is different about it.

## Sections

| Files | Topic | What is different |
| --- | --- | --- |
| `practical-activity-starter-code.js` | Props and `.map()` | ProfileCard renders the profile, App maps over three profiles instead of one. |
| `4.2` | Components and conditional rendering | JobList maps the jobs; JobItem shows a spinner or a tick depending on status; empty-list message. |
| `4.3` | Lifting state up | Delete is implemented with `.filter()`, and the heading shows a live count. |
| `4.4` | `children` and props | TicketInfo renders its image, its children and a count per status. |
| `5.1.1` - `5.1.5` | Building a form | The form is built out, options are mapped from an array, and submit is disabled while the input is empty. |
| `5.2` | Styling the form | The empty CSS rules are filled in, plus a `.tag.selected` state. |
| `5.3` | Reusable columns | JobColumn renders its jobs and a count; all three columns are rendered. |
| `5.4` | Add, delete and update | All three handlers are implemented and the columns are generated from an array of statuses. |
| `5.5` | Controlled inputs | Handlers implemented, the form clears after submit, submit disabled until valid. |
| `6.1` | Toggling values in state | `handleCategoryToggle` adds and removes categories; buttons take a class from the selection. |
| `6.2.1` - `6.2.2` | Inline styles | More than one category can be selected, buttons are mapped, text colours added for readability. |
| `6.3` | Filtering into columns | Form inputs written out, per-column counts, and an empty-column message. |
| `6.4.1` - `6.4.6` | Delete and reset | Updater form of `setJobs`, blank entries rejected, focus returned to the input after adding. |
| `6.5.1` - `6.5.7` | `useEffect` and localStorage | Storage key in one constant, a damaged stored value is caught, Clear All confirms first and hides when empty. |
| `6.6.1` - `6.6.6` | Tailwind CSS | Theme extensions in the config, a third card, click handlers, ids used as keys instead of the array index. |
| `6.7.1` - `6.7.6` | Vite project setup | Header takes a title prop, App wires up the real components, tidied CSS. |
| `7.5` - `7.6` | Investment calculator | Every input validated rather than only the duration, labels on the inputs, and a totals row in the table. |
| `8.1` - `8.4` | Password generator | An uppercase option, an off-by-one in the character picker fixed, and real "Copied!" feedback with the timer cleaned up. |
| `8.5` | Layout shell | The navbar has real links and the main area holds a short list of reviews. |
| `investment-calc-project/` | Full project | A working Vite app - see its own README. |

## A fix worth pointing out

The course version of the password generator picks its characters with:

```js
const char = Math.floor(Math.random() * str.length + 1);
```

`Math.random()` returns a number from 0 up to (but not including) 1, so
`Math.random() * str.length` already covers every valid index. Adding 1 means
the result can land one past the end of the string, and `charAt` returns an
empty string for that - so occasionally a password comes out shorter than the
length asked for. My versions drop the `+ 1`.

## Running the code

Most of the files are fragments meant to be read alongside the course, or
dropped into a React project of your own - they are not a runnable app on
their own.

The one thing that runs by itself is `investment-calc-project`:

```
cd investment-calc-project
npm install
npm run dev
```
