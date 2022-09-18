import React, { useState } from "react";

const arrPosts = [{imgPost1: "../../assets/img/meowed.svg", userNamePost: 'meowed', contentImg: "../../assets/img/gato-telefone.svg", likedImg: "../../assets/img/respondeai.svg", likedUser: 'respondeai', numberLikes:101523},
                {imgPost1: "../../assets/img/barked.svg", userNamePost: 'barked', contentImg: "../../assets/img/dog.svg", likedImg: "../../assets/img/adorable_animals.svg", likedUser: 'adorable_animals', numberLikes:99159}]

export default function Posts(){

    

    return(
        <div class='posts'>
            {arrPosts.map((a)=><Post imgPost1={a.imgPost1} userNamePost={a.userNamePost} contentImg={a.contentImg} likedImg={a.likedImg} likedUser={a.likedUser} numberLikes={a.numberLikes}/>)}
        </div>
    );
}

function Post(props){

    const [postSave, setSave] = React.useState('bookmark-outline')

    function selectSave(){

      if (postSave === 'bookmark-outline'){
        setSave('bookmark')
      }else{
        setSave('bookmark-outline')
      }
    }

    const [nameLike, setLike] = useState('heart-outline')
    const [colorStyle, setColorStyle] = useState({color:'none'})
    const [numberLike, setNumberLike] = useState(props.numberLikes)

    function likeOnOff(){

      if(nameLike === 'heart-outline'){
        setLike('heart')
        setColorStyle({color:'red'}) 
        setNumberLike(props.numberLikes+1)
      }
      else{
        setLike('heart-outline')
        setColorStyle({color:'black'})
        setNumberLike(props.numberLikes)
      }
    }

    return(

        <div class="post">
            <div class="topo">
              <div  class="usuario">
                <img src={props.imgPost1} alt={props.imgPost1} />
                {props.userNamePost} 
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img onClick={likeOnOff} src={props.contentImg} alt={props.contentImg} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon onClick={likeOnOff} style={colorStyle} name={nameLike}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                <ion-icon onClick={selectSave} name={postSave}></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.likedImg} alt={props.likedImg}/>
                <div class="texto">
                  Curtido por <strong>{props.likedUser}</strong> e <strong>outras {numberLike} pessoas</strong>
                </div>
              </div>
            </div>
        </div>
    );
}