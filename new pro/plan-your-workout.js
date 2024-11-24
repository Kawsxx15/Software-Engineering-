window.onload = function() {
    // Retrieve the workout plan from localStorage
    let plan = JSON.parse(localStorage.getItem('workoutPlan')) || [];

    // Get the workout-plan div where the templates will be displayed
    const workoutPlanContainer = document.getElementById('workout-plan');

    if (plan.length === 0) {
        workoutPlanContainer.innerHTML = "<p>Your workout plan is empty. Add some workouts!</p>";
    } else {
        // Insert each saved workout template into the plan container
        plan.forEach(function(workoutTemplate) {
            workoutPlanContainer.innerHTML += workoutTemplate;
        });

        // Re-attach functionality to "+" icons in the stored templates
        const addIcons = document.querySelectorAll('.add-icon');
        addIcons.forEach(icon => {
            icon.addEventListener('click', function() {
                // You can define what should happen when the "+" icon is clicked in the plan
                alert("This workout is already in your plan.");
            });
        });
    }
};
