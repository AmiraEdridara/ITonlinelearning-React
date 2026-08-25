// The text input, holding a ref so the form can focus it again after a job
// is added.

<input
  type="text"
  ref={activityInputRef}
  value={activity}
  onChange={(e) => setActivity(e.target.value)}
  placeholder="Enter job activity"
/>
