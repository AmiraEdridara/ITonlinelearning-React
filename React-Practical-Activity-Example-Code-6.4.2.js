// The job card, with an aria-label naming the job on its delete button.

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
