// Resetting the form, which also puts the keyboard focus back in the text
// box ready for the next job.

const resetForm = () => {
  setActivity('');
  setCategories([]);
  setStatus('Need to Complete');
  activityInputRef.current?.focus();
};
