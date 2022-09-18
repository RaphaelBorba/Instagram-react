import React from "react";


export default function Sidebar(){

    return(
        <div class='sidebar'>
            <Usuario/>
            <Sugestoes/>
            <Links/>
        </div>
    );
}

function Usuario (){
    
    const [name, setName1] = React.useState('catanacomics')
    const [name1, setName2] = React.useState('Catana')
    const [image, setImage] = React.useState('../../assets/img/catanacomics.svg')
    
    function changeName(){
        let newName1 = prompt('Insira o primeiro nome:');
        (newName1 !== '')? setName1(newName1) : alert('Nome 1 inválido');
        let newName2 = prompt('Insira o segundo nome:');
        (newName2 !== '')? setName2(newName2) : alert('Nome 2 inválido');
    }

    function changeImage(){
        let newImage = prompt('Insira a url da Image');
        (newImage !== '') ? setImage(newImage) : alert('Foto inválida')
    }
    
    return(
        <div class="usuario">
          <img onClick={changeImage}  src={image} alt={image} />
          <div class="texto">
            <strong>{name}</strong>
            <span>
              {name1}
              <ion-icon onClick={changeName} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    );
}

function Sugestoes(){
    
    const infoSugestions = [{imageUser: '../assets/img/bad.vibes.memes.svg', nameUser: 'bad.vibes.memes', followOrNo: 'Segue você'},
                            {imageUser: '../assets/img/chibirdart.svg', nameUser: 'chibirdart', followOrNo: 'Segue você'},
                            {imageUser: '../assets/img/razoesparaacreditar.svg', nameUser: 'razoesparaacreditar', followOrNo: 'Novo no Instagram'},
                            {imageUser: '../assets/img/adorable_animals.svg', nameUser: 'adorable_animals', followOrNo: 'Segue você'},
                            {imageUser: '../assets/img/smallcutecats.svg', nameUser: 'smallcutecats', followOrNo: 'Segue você'}]
    
    return(

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {infoSugestions.map((a)=> <Sugestao imageUser={a.imageUser} nameUser={a.nameUser} followOrNo={a.followOrNo}/>)}
        </div>
    );
}

function Sugestao(props){
    return(
        <div class="sugestao">
            <div class="usuario">
              <img src={props.imageUser} alt={props.nameUser}/>
              <div class="texto">
                <div class="nome">{props.nameUser}</div>
                <div class="razao">{props.followOrNo}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}

function Links(){
    return(
    <>
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </>
    
    );
}