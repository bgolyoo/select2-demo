function selectOption() {
    $('#s2-select-option-example').val(3); // Select the option with id
    $('#s2-select-option-example').trigger('change'); // Notify any JS components that the value changed
}

var data = [{
        id: 0,
        text: 'enhancement'
    },
    {
        id: 1,
        text: 'bug'
    },
    {
        id: 2,
        text: 'duplicate'
    },
    {
        id: 3,
        text: 'invalid'
    },
    {
        id: 4,
        text: 'wontfix'
    }
];

$("#s2-select-option-example").select2({
    placeholder: 'Placeholder',
    data: data
});