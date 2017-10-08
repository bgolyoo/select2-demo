function cleanSelection() {
    $('#s2-clean-selection-example').val(null).trigger('change');
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

$("#s2-clean-selection-example").select2({
    placeholder: 'Placeholder',
    data: data
});