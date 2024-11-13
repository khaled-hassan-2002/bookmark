let nameinput = document.getElementById('nameinput')
let urlinput = document.getElementById('urlinput')
let sites = []
let database = localStorage.getItem('sites')
if (database) {
    sites = JSON.parse(database)
    display(sites)
}
function add() {
    if (nameinput.value != '' && urlinput.value != '') {
        let object = {
            name: nameinput.value,
            url: urlinput.value
        }
        sites.unshift(object)
        display(sites)
        clearInputs()
        localStorage.setItem('sites', JSON.stringify(sites))
        document.getElementById('error').style.display = 'none'
    } else {
        document.getElementById('error').textContent = 'please enter a valid values'
        document.getElementById('error').style.display = 'block'
    }
}

function display(items) {
    let box = ''
    for (let i = 0; i < items.length; i++) {
        box += `
                    <tr>
                        <td>${[i + 1]}</td>
                        <td>${items[i].name}</td>
                        <td><button class="btn btn-outline-success px-4"><a class="text-decoration-none link-info" href="${items[i].url}" target="_blank">Visit</a></button></td>
                        <td><button onclick="remove(${i})" class="btn btn-outline-danger px-4">Delete</button></td>
                    </tr>
        `
    }
    document.getElementById('demo').innerHTML = box
}
function clearInputs() {
    nameinput.value = ''
    urlinput.value = ''
}
function remove(index) {
    sites.splice(index, 1)
    localStorage.setItem('sites', JSON.stringify(sites))
    display(sites)
}