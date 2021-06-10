import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
        <Background>
            <img src="https://th.bing.com/th/id/OIP.J0sWH6_Fx3QgfD1Qs669wQHaEK?w=282&h=180&c=7&o=5&dpr=1.5&pid=1.7" />;
            <span>PLAY</span>
        </Background>
        <ImageTitle>
        <img src="https://th.bing.com/th/id/OIP.J0sWH6_Fx3QgfD1Qs669wQHaEK?w=282&h=180&c=7&o=5&dpr=1.5&pid=1.7" />;
       </ImageTitle>
        <Controls>
            <PlayButton>
            <img src="/images/play-icon-black.png" />;
        <span>PLAY</span>
             </PlayButton>
            <TrailerButton>
            <img src="/images/play-icon-white.png" />;
        <span>PLAY</span>
                
            </TrailerButton>
            <AddButton>
            <span>+</span>  
            </AddButton>
            <GroupWatchButton>
            <img src="/images/group-icon.png" />;

            </GroupWatchButton>


        </Controls>
        <SubTitle>
            2021 . 8m . Family, Fantasy, Kids, Animation
        </SubTitle>
        <Description>
        Elsa has the magical ability to create and manipulate ice and snow. She inadvertently sends Arendelle into an eternal winter on the evening of her coronation
        </Description>

        </Container>
    )
}

export default Detail

const Container=styled.div`
min-height:calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position:relative;

`

const Background=styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: -1;
opacity: 0.8;

img{

    width: 100%;
    height: 100%;
    object-fit: cover;
}

`
const ImageTitle = styled.div`
height: 30vh;
min-height: 170px;
width: 35vw;
min-width: 200px;
img{

    width: 100%;
    height: 100%;
    object-fit: contain;
}
`
const Controls = styled.div`
display:flex;
`
const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
padding: 0px 24px;
margin-right: 22px;
display: flex;
align-items: center;
height: 56px;
background: rgb (249, 249,249);
border:none;
letter-spacing: 1.8px;
cursor: pointer;


&:hover{
   background: rgba(198,198,198);
}
`
const TrailerButton = styled(PlayButton)`

background: rgba(0,  0, 0, 0.3);
border: 1px solid rgb(249, 249 ,249);
color: rgb(249, 249, 249);
text-transform: uppercase;


`

const AddButton = styled.button`
margin-right: 16px;
width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.5);
    cursor: pointer;

    span{
        font-size:30px;
        color: white;
    }


`
const GroupWatchButton = styled.button`

background: rgb(0,  0, 0);
`
const SubTitle = styled.div`
color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;

`
const Description = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
color: rgb(249,249,249);


`



