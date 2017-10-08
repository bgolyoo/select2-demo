function retrieveSelected(id) {
    console.log($('#' + id).select2('data'));
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
]

$("#s2-retrieve-selected-single").select2({
    data: data
});
$("#s2-retrieve-selected-multiple").select2({
    data: data
});