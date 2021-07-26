let services = {
    spotify: 'https://open.spotify.com/user/{NAME}',
    wattpad: 'https://www.wattpad.com/user/{NAME}',
    disqus: 'https://disqus.com/by/{NAME}',
    lastfm: 'https://last.fm/user/{NAME}',
    livejournal: 'https://{NAME}.livejournal.com/',
    poshmark: 'https://poshmark.com/closet/{NAME}',
    myspace: 'https://myspace.com/{NAME}',
    dailymotion: 'https://www.dailymotion.com/{NAME}',
    steam: 'https://steamcommunity.com/id/{NAME}',
    twitter: 'https://twitter.com/{NAME}'
}

function list_services(){
    for (let key in services) {
        let li = document.createElement('li');
        li.innerText = key;
        document.getElementById('service_list').appendChild(li);
    }
}


function account_search(username){
    for (let key in services) {
        window.open(services[key].replace('{NAME}', username));
    }
}

function showAccounts(){
    let search = document.getElementById('username_field');
    let name = search.value;
    account_search(name);
    search.value = '';
    return false;
}