function addToPlan(templateElement) {
    // Get the HTML content of the entire template
    const workoutTemplate = templateElement.closest('.template').outerHTML;
    
    // Retrieve the existing plan from localStorage, or initialize an empty array
    let plan = JSON.parse(localStorage.getItem('workoutPlan')) || [];

    // Add the new template to the plan
    plan.push(workoutTemplate);

    // Store the updated plan back to localStorage
    localStorage.setItem('workoutPlan', JSON.stringify(plan));

    // Optionally, show a confirmation or notify the user
    alert("Workout added to your workout plan!");
}
