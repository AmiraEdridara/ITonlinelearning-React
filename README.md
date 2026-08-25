# Coding Programme - React

React practical activity code, worked through section by section. Each file
covers one idea and carries a short note at the top saying what it shows.

## Sections

| Files | Topic | What it covers |
| --- | --- | --- |
| `practical-activity-starter-code.js` | Props and `.map()` | A ProfileCard component rendered once per profile from an array. |
| `4.2` | Components and conditional rendering | Header, Footer, JobList and JobItem, with a spinner or a tick depending on job status. |
| `4.3` | Lifting state up | Deleting a job from the parent with `.filter()`, and a live count in the heading. |
| `4.4` | `children` and props | TicketInfo taking an image, a count and whatever is written between its tags. |
| `5.1.1` - `5.1.5` | Building a form | Text input, category buttons, a status dropdown mapped from an array, and a submit that stays disabled until something is typed. |
| `5.2` | Styling the form | Styles for the form container, input, category chips, dropdown and submit button, including a selected state. |
| `5.3` | Reusable columns | A JobColumn component that renders its own jobs and a count. |
| `5.4` | Add, delete and update | All three handlers, with the columns generated from an array of statuses. |
| `5.5` | Controlled inputs | One state object for the whole form, cleared after each submit. |
| `6.1` | Toggling values in state | Adding and removing categories from an array held in state. |
| `6.2.1` - `6.2.2` | Inline styles | Style objects picked per category, with more than one selectable at a time. |
| `6.3` | Filtering into columns | Jobs filtered by status into three columns, each with its own count. |
| `6.4.1` - `6.4.6` | Delete and reset | The updater form of `setJobs`, blank entries rejected, and focus returned to the input after adding. |
| `6.5.1` - `6.5.7` | `useEffect` and localStorage | Saving on every change, reading back on load, and a Clear All that confirms first. |
| `6.6.1` - `6.6.6` | Tailwind CSS | Project setup, theme extensions in the config, and a reusable Card component. |
| `6.7.1` - `6.7.6` | Vite project setup | Creating the project, a Header component, and wiring the pieces together in App. |
| `7.5` - `7.6` | Investment calculator | Controlled number inputs, validation across every field, and a results table with a totals row. |
| `8.1` - `8.4` | Password generator | `useState`, `useCallback`, `useEffect` and `useRef`, building up to copy-to-clipboard with feedback. |
| `8.5` | Layout shell | A navbar and main content area with a list of reviews to style against. |
| `investment-calc-project/` | Full project | A working Vite app - see its own README. |

## Running the code

Most of the files are fragments meant to be read section by section, or
dropped into a React project of your own - they are not a runnable app on
their own.

The one thing that runs by itself is `investment-calc-project`:

```
cd investment-calc-project
npm install
npm run dev
```
