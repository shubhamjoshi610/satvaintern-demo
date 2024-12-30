$(document).ready(function () {
    const $form = $("#user-form"); // Selects the form element
    const $name = $("#name"); // Selects the name input
    const $age = $("#age"); // Selects the age input
    const $gender = $("#gender"); // Selects the gender dropdown
    const $subscribe = $("#subscribe"); // Selects the subscribe checkbox
    const $feedback = $("#form-feedback"); // Selects the feedback paragraph

    // Form Submit Event
    $form.submit(function (event) {
        event.preventDefault(); // Prevents the default form submission
        const nameValue = $name.val();
        const ageValue = $age.val();
        const genderValue = $gender.val();
        const isSubscribed = $subscribe.is(":checked");

        $feedback.text(
            `Submitted! Name: ${nameValue}, Age: ${ageValue}, Gender: ${genderValue}, Subscribed: ${isSubscribed ? "Yes" : "No"}`
        );
    });

    // Input Event
    $name.on("input", function () {
        const inputValue = $(this).val();
        $feedback.text(`Typing name: ${inputValue}`);
    });

    // Change Event
    $gender.change(function () {
        const selectedGender = $(this).val();
        $feedback.text(`Gender changed to: ${selectedGender}`);
    });

    // Checkbox Change Event
    $subscribe.change(function () {
        const isChecked = $(this).is(":checked");
        $feedback.text(`Newsletter subscription: ${isChecked ? "Yes" : "No"}`);
    });

    // Reset Event
    $("#reset-btn").click(function () {
        $feedback.text("Form has been reset!");
    });
});
