async function exibirPosts() {
    const response = await fetch("https://foodgram-back.herokuapp.com/posts");
    const arrayDeFotos = await response.json();

    var sessaoFotos = document.querySelector('section');

    for(var i = 0; i < arrayDeFotos.length; i++){
        var post = `
        <div class='food_holder'>
            <div>
                <h3>${arrayDeFotos[i].user}</h3>
                <img src="https://foodgram-back.herokuapp.com/${arrayDeFotos[i].url}" alt="" />
            </div>
        </div>
        `;


        sessaoFotos.insertAdjacentHTML('afterbegin', post)
    }
  }

  exibirPosts();