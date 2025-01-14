import React, { useContext } from 'react'
import UserContext from '../Context/Context'
import Footer from '../parts/Footer'
import UserNav from '../parts/userNav'
import { BorderDiv, ContainedDiv, DpImage, FlexDiv, GridImg, ImgSupp, Killimg, ProfileDiv } from '../stlying/styles'

function Profile() {
  const {User,myarts} = useContext(UserContext)
  return (
    <div>
        <UserNav />
        <ContainedDiv>
            <BorderDiv>
            <DpImage src='https://i.pinimg.com/originals/70/b3/1a/70b31afe7b5fc7803bf650d74adf5a5e.jpg' />
            <ProfileDiv>
                <h2>{User.name}</h2>
                <p>I am an Digital Artist. When I am in my painting, I'm not aware of what I'm doing. </p>
                <p> Art Should be felt by heart.</p>
                <FlexDiv>
                    <p>{User.ph}</p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <p>{User.email}</p>
                </FlexDiv>
            </ProfileDiv>
            </BorderDiv>
            <GridImg>
            {myarts.map((e)=>{
                return <ImgSupp><Killimg src={e.img} /></ImgSupp>
            })}
            </GridImg>
            
        </ContainedDiv>
        <Footer />
    </div>)
}

export default Profile