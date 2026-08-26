import React from 'react'
import Wrapper from '../../Wrapper'
import Path from '../../../components/CmsComp/Path'
import ProfileForm from "/src/components/AppsComp/ProfileForm"
import Profile from './Profile'
export default function EditProfile() {
    return (
        <Wrapper>
            <Path mainpath="Apps" path="Edit profile" />
            <ProfileForm />
        </Wrapper>
    )
}
