import { Card } from '@mui/material'
import React from 'react'
import Footer from '../parts/Footer'
import UserNav from '../parts/userNav'
import { BorderDiv, ContainedDiv, DpImage, FlexDiv, FullImg, GridImg, ImgSupp, Killimg, ProfileDiv } from '../stlying/styles'

function Profile() {
    const red =[
        'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3IlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sb3IlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbG9yJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbG9yJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://media.istockphoto.com/photos/emotions-inside-human-picture-id478065559?b=1&k=20&m=478065559&s=170667a&w=0&h=GmdDzi9GAiD0oPFP5jBjRllF-spbXN1HQ7c2YV8wklM=',
        'https://media.istockphoto.com/photos/liquid-shapes-abstract-holographic-3d-wavy-background-picture-id1038727610?b=1&k=20&m=1038727610&s=170667a&w=0&h=2ezbl9GAYnfiuNpW3fcoaiQ0LinbBDluIT8JDSpcdIA=',
        'https://thumbs.dreamstime.com/b/colored-paint-strokes-abstract-art-background-detail-work-art-contemporary-art-colorful-texture-thick-paint-surface-79081160.jpg',
        'https://thumbs.dreamstime.com/b/abstract-painted-background-texture-12474277.jpg',
        'https://thumbs.dreamstime.com/b/macro-close-up-different-color-oil-paint-colorful-acrylic-modern-art-concept-84365555.jpg',
        'https://thumbs.dreamstime.com/b/spotted-doggies-pattern-5174932.jpg',
      ]
  return (
    <div>
        <UserNav />
        <ContainedDiv>
            <BorderDiv>
            <DpImage src='https://i.pinimg.com/originals/70/b3/1a/70b31afe7b5fc7803bf650d74adf5a5e.jpg' />
            <ProfileDiv>
                <h2>Bunny</h2>
                <p>I am an Digital Artist. When I am in my painting, I'm not aware of what I'm doing. </p>
                <p> Art Should be felt by heart.</p>
                <FlexDiv>
                    <p>756235468</p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <p>bunny7236@gmail.com</p>
                </FlexDiv>
            </ProfileDiv>
            </BorderDiv>
            <GridImg>
            {red.map((e)=>{
                return <ImgSupp><Killimg src={e} /></ImgSupp>
            })}
            </GridImg>
            
        </ContainedDiv>
        <Footer />
    </div>
  )
}

export default Profile