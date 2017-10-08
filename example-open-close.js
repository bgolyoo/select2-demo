function openDropdown() {
    $('#s2-open-close').select2('open');
}

function closeDropdown() {
    $('#s2-open-close').select2('close');
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

$("#s2-open-close").select2({
    data: data
});