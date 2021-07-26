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
    twitter: 'https://twitter.com/{NAME}',
    vsco: 'https://vsco.co/{NAME}/gallery',
    pinterest: 'https://www.pinterest.ca/{NAME}',
    instagram: 'https://instagram.com/{NAME}/',
    ebay: 'https://www.ebay.com/usr/{NAME}',
    reddit: 'https://reddit.com/user/{NAME}'
}

function list_services(){
    for (let key in services) {
        let li = document.createElement('li');

        let check = document.createElement('input');
        check.type = 'checkbox';
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
    let name = search.value;
    account_search(name);
    search.value = '';
    return false;
}