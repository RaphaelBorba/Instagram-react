
export default function Stories(){
    const arr = [{UserNameStory:'9gag' ,ImgStory:'../../assets/img/9gag.svg'},
        {UserNameStory:'meowed' ,ImgStory:'../../assets/img/meowed.svg'},
        {UserNameStory:'barked' ,ImgStory:'../../assets/img/barked.svg'},
        {UserNameStory:'nathanwpylestrangeplanet' ,ImgStory:'../../assets/img/nathanwpylestrangeplanet.svg'},
        {UserNameStory:'wawawicomics' ,ImgStory:'../../assets/img/wawawicomics.svg'},
        {UserNameStory:'respondeai' ,ImgStory:'../../assets/img/respondeai.svg'},
        {UserNameStory:'filomoderna' ,ImgStory:'../../assets/img/filomoderna.svg'},
        {UserNameStory:'memeriagourmet' ,ImgStory:'../../assets/img/memeriagourmet.svg'}]
        
    
    return(
        <div class='stories'>
            {arr.map((a)=><Story ImgStory={a.ImgStory}  UserNameStory={a.UserNameStory}/>)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    );
}

function Story(props){

    return(
        <div class="story">
            <div class="imagem">
              <img src={props.ImgStory} alt={props.UserNameStory}/>
            </div>
            <div class="usuario">
              {props.UserNameStory}
            </div>
          </div>
    );
}