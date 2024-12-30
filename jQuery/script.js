$(document).ready(function () {
    // Selectors
    const $title = $("#main-title"); // Selects element with id 'main-title'
    const $button = $("#animate-btn"); // Selects button with id 'animate-btn'
    const $input = $("#text-input"); // Selects input with id 'text-input'
    const $listItems = $(".item"); // Selects all elements with class 'item'

    // Filters
    $listItems.first().css("color", "red"); // Changes the color of the first item to red
    $listItems.last().css("color", "blue"); // Changes the color of the last item to blue
    $listItems.eq(1).css("font-weight", "bold"); // Makes the second item bold

    // Frequent Methods
    $title.text("jQuery Features in Action"); // Changes the text of the h1 element
    $button.click(function () {
        alert("Button Clicked!"); // Displays an alert on button click
    });

    // Animations
    $button.click(function () {
        $("#box")
            .animate({ width: "200px", height: "200px", opacity: 0.5 }, 1000)
            .animate({ width: "100px", height: "100px", opacity: 1 }, 5000);
    });

    // Keyboard Events
    $input.keyup(function (event) {
        const inputValue = $(this).val();
        $title.text(`You typed: ${inputValue}`);
    });

    // Mouse Events
    $listItems.hover(
        function () {
            $(this).css("background-color", "yellow"); // Highlight on hover
        },
        function () {
            $(this).css("background-color", ""); // Remove highlight
        }
    );
});
