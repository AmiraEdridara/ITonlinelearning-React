// Difference: the reset also puts the keyboard focus back in the text box,
// so another job can be typed straight away.
const resetForm = () => {
  setActivity('');
  setCategories([]);
  setStatus('Need to Complete');
  activityInputRef.current?.focus();
};
