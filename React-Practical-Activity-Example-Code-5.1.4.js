// The status dropdown, with its options mapped from an array so a new
// status only has to be added in one place.

const statuses = [
  { value: 'start', label: 'Start Process' },
  { value: 'running', label: 'Running' },
  { value: 'completed', label: 'Completed' },
  { value: 'stopped', label: 'Stopped' }
];

<select className="job-status" defaultValue="start">
  {statuses.map(status => (
    <option key={status.value} value={status.value}>{status.label}</option>
  ))}
</select>
