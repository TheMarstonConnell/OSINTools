function list_services(){
    let sortable = [];
    for (let key in services) {
        sortable.push(key);
    }
    sortable.sort();

    for(let j in sortable){
        let key = sortable[j];
        let li = document.createElement('li');

        let check = document.createElement('input');
        check.type = 'radio';
        check.name = 'services'
        check.id = key + '_check';
        check.checked = true;

        let text = document.createTextNode(key);

        li.appendChild(check);
        li.appendChild(text);


        document.getElementById('service_list').appendChild(li);
    }
}


function account_search(username){
    for (let key in services) {
        if(document.getElementById(key + '_check').checked){
            window.open(services[key].replace('{NAME}', username));

        }
    }
}

function showAccounts(){
    let search = document.getElementById('username_field');

    let lines = search.value.split('\n');

    for(let j in lines){
        let name = lines[j];
        account_search(name);

    }

    return false;
}