const generateSummary = (todos, period="day") => {
  const completed = todos.filter(t => t.completed).map(t => t.title);
  const pending = todos.filter(t => !t.completed).map(t => t.title);

  return {
    period,
    completed_count: completed.length,
    pending_count: pending.length,
    completed_tasks: completed,
    pending_tasks: pending,
    summary: `You completed ${completed.length} tasks and have ${pending.length} pending tasks this ${period}.`
  };
};

module.exports = { generateSummary };
