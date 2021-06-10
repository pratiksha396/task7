import React from 'react'
import styled from 'styled-components'


function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>Get All There</SignUp>
                <Description>
                Elsa has the magical ability to create and manipulate ice and snow. She inadvertently sends Arendelle into an eternal winter on the evening of her coronation Elsa has the magical ability to create and manipulate ice and snow. She inadvertently sends Arendelle into an eternal winter on the evening of her coronation
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
        </Container>
    )
}

export default Login

const Container=styled.div`
position: relative;
height: calc(100vh - 70px);
display: flex;
align-items: center;
justify-content:center;
margin-top: 100px;


&:before {
    background-position: top;
    background-size:cover;
    background-repeat: no-repeat;

    background-image: url("/images/home-background.png") center center / cover
        no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.7;

}
`


const CTA=styled.div`
max-width: 650px;
padding: 80px 40px;
width:70%;
display: flex;
flex-direction: column;
margin-top: 100px;
align-items: center;


}
`


const CTALogoOne=styled.img`

    
}
`

const SignUp=styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0;
color: #f9f9f9;
border-radius: 4px;
text-align: center;
font-size: 18px;
cursor:pointer;
transition: all 250ms linear;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 8px;

&:hover{
    background: #0483ee;
}


    

`
const Description=styled.a`
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`

const CTALogoTwo=styled.img`
width:90%;


    
}
`