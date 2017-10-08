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

var disabledData = [{
        id: 0,
        text: 'enhancement'
    },
    {
        id: 1,
        text: 'bug',
        disabled: true
    },
    {
        id: 2,
        text: 'duplicate'
    },
    {
        id: 3,
        text: 'invalid',
        disabled: true
    },
    {
        id: 4,
        text: 'wontfix'
    }
];

var groupedData = {
    results: [{
            text: "Group 1",
            children: [{
                    id: 1,
                    text: "Option 1.1"
                },
                {
                    id: 2,
                    text: "Option 1.2"
                }
            ]
        },
        {
            text: "Group 2",
            children: [{
                    id: 3,
                    text: "Option 2.1"
                },
                {
                    id: 4,
                    text: "Option 2.2"
                }
            ]
        }
    ],
    paginate: {
        more: true
    }
};

$('#s2-disabled-in-html').select2({
    width: 'resolve',
    placeholder: 'Select an option',
    data: data
});
$('#s2-disabled-in-js').select2({
    width: 'resolve',
    placeholder: 'Select an option',
    data: data,
    disabled: true
});
$('#s2-single').select2({
    width: 'resolve',
    placeholder: 'Select an option',
    data: data
});
$('#s2-multiple').select2({
    width: 'resolve',
    placeholder: 'Select an option',
    data: data
});
$("#s2-classic-theme-single").select2({
    theme: "classic",
    data: data
});
$("#s2-classic-theme-multiple").select2({
    theme: "classic",
    data: data
});
$('#s2-option-groups-in-html').select2({
    width: 'resolve'
});
$('#s2-option-groups-in-js').select2({
    width: 'resolve',
    data: groupedData.results
});
$('#s2-diabled-option-in-html').select2({
    width: 'resolve'
});
$('#s2-diabled-option-in-js').select2({
    width: 'resolve',
    data: disabledData
});
$('#s2-select-on-close').select2({
    width: 'resolve',
    data: data,
    selectOnClose: true
});
$('#s2-close-on-select').select2({
    width: 'resolve',
    data: data,
    closeOnSelect: false
});
$('#s2-dropdown-parent').select2({
    width: 'resolve',
    data: data,
    dropdownParent: $('.container')
});
$('#s2-allow-clear-single').select2({
    width: 'resolve',
    data: data,
    placeholder: 'This is my placeholder',
    allowClear: true
});
$('#s2-allow-clear-multiple').select2({
    width: 'resolve',
    data: data,
    placeholder: 'This is my placeholder',
    allowClear: true
});
$('#s2-limit').select2({
    width: 'resolve',
    data: data,
    placeholder: 'This is my placeholder',
    maximumSelectionLength: 2
});
$('#s2-dynamic-option-single').select2({
    width: 'resolve',
    data: data,
    placeholder: 'This is my placeholder',
    tags: true
});
$('#s2-dynamic-option-multiple').select2({
    width: 'resolve',
    data: data,
    placeholder: 'This is my placeholder',
    tags: true
});
$('#s2-dynamic-option-multiple-token-separator').select2({
    width: 'resolve',
    placeholder: 'This is my placeholder',
    tags: true,
    tokenSeparators: [',', ' ']
});
$('#s2-dynamic-option-multiple-tag-create').select2({
    width: 'resolve',
    placeholder: 'This is my placeholder',
    tags: true,
    createTag: function (params) {
        var term = $.trim(params.term);

        if (term === '') {
            return null;
        }

        return {
            id: term,
            text: term,
            newTag: true // add additional parameters
        }
    }
});
$('#s2-dynamic-option-multiple-tag-placement').select2({
    width: 'resolve',
    placeholder: 'This is my placeholder',
    tags: true,
    data: data,
    insertTag: function (data, tag) {
        // Insert the tag at the end of the results
        data.push(tag);
    }
});
$('#s2-hide-search').select2({
    width: 'resolve',
    placeholder: 'This is my placeholder',
    data: data,
    minimumResultsForSearch: Infinity // or limit to a number
});
$('#s2-minimum-input-length').select2({
    width: 'resolve',
    placeholder: 'This is my placeholder',
    data: data,
    minimumInputLength: 3 // only start searching when the user has input 3 or more characters
});
$('#s2-maximum-input-length').select2({
    width: 'resolve',
    placeholder: 'This is my placeholder',
    data: data,
    maximumInputLength: 5 // only allow terms up to 5 characters long
});
$('#s2-range-input-length').select2({
    width: 'resolve',
    placeholder: 'This is my placeholder',
    data: data,
    minimumInputLength: 3,
    maximumInputLength: 5
});

$('#s2-language').select2({
    width: 'resolve',
    placeholder: 'This is my placeholder',
    data: data,
    minimumInputLength: 3,
    language: {
        // You can find all of the options in the language files provided in the
        // build. They all must be functions that return the string that should be
        // displayed.
        inputTooShort: function () {
            return "Yo man, your input is way too short...";
        }
    }
});