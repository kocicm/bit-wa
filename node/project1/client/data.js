fetch('http://127.0.0.1:3005')
    .then((response) => {
        return response.json();
    })
    .then((responseJson) => {
        for (let i = 0; i < responseJson.length; i++) {
            blogDiv=($("<div>"))
            let title = $(`<h2>${responseJson[i].title}</h2>`);
            console.log(responseJson[i].title);
            let text = $(`<p>${responseJson[i].text}</p>`);
            blogDiv.append(title);
            blogDiv.append(text);
            $('body').append(blogDiv);
            


        }
    })

