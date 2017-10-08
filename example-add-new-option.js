function addNewOption() {
    var data = {
        id: 5,
        text: 'newly added option'
    };

    // Set the value, creating a new option if necessary
    if ($('#s2-add-new-option-example').find("option[value='" + data.id + "']").length) {
        $('#s2-add-new-option-example').val(data.id).trigger('change');
    } else {
        // Create a DOM Option and pre-select by default
        var newOption = new Option(data.text, data.id, true, true);
        // Append it to the select
        $('#s2-add-new-option-example').append(newOption).trigger('change');
    }
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
        text: 'duplicate',
        selected: true
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

$("#s2-add-new-option-example").select2({
    data: data
});