import React from 'react'
import Wrapper from '../../Wrapper'
import Path from '../../../components/CmsComp/Path'
import UserProfile from '../../../components/AppsComp/UserProfile'
import ProfileHighlights from '/src/components/AppsComp/ProfileHighlights'
import ProfileTab from "../../../components/AppsComp/ProfileTab"

export default function Profile() {
    return (
        <Wrapper>
            <Path mainpath="Apps" path="Profile" />
            <UserProfile />
            <div className='h-auto flex flex-col md:flex-row gap-6 lg:gap-8 my-8'>
                <div className='w-full md:w-[35%] lg:w-[33%]'>
                    <ProfileHighlights />
                </div>
                <div className='w-full md:w-[65%] lg:w-[67%] p-4 md:p-5 bg-(--bg-header) rounded-md'>
                    <ProfileTab />
                </div>
            </div>
        </Wrapper>
    )
}