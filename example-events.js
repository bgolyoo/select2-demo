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

var $eventSelect = $("#s2-events").select2({
    data: data
});

$eventSelect.on("select2:open", function (e) {
    log("select2:open", e);
});
$eventSelect.on("select2:close", function (e) {
    log("select2:close", e);
});
$eventSelect.on("select2:select", function (e) {
    log("select2:select", e);
});
$eventSelect.on("select2:unselect", function (e) {
    log("select2:unselect", e);
});

$eventSelect.on("change", function (e) {
    log("change");
});

function log(name, evt) {
    console.log(name, evt);
}