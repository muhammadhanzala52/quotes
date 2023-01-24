const data = async()=>{
    let api = await  fetch('https://type.fit/api/quotes')
    let data = await api.json() ;
    
    let ran_num = Math.round(Math.random() * 1000);


    let quote = document.querySelector('.lead');
    let author = document.querySelector('.blockquote-footer');
    quote.innerHTML = `${data[ran_num].text}`;
    author.innerHTML = `${data[ran_num].author}`;
    
    console.log(author);
}

data();
