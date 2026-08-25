// Difference: the delete button carries an aria-label naming the job, and a
// card with no categories does not render an empty row.
function JobCard({ job, deleteJob }) {
  return (
    <div className="job-card">
      <h3>{job.activity}</h3>

      {job.categories.length > 0 && (
        <div className="categories">
          {job.categories.map((category, index) => (
            <span key={index} className="category">{category}</span>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => deleteJob(job.id)}
        aria-label={`Delete ${job.activity}`}
      >
        Delete
      </button>
    </div>
  );
}
