import React from 'react'
import Wrapper from '../../Wrapper'
import Path from '../../../components/CmsComp/Path'
import UserProfile from '../../../components/AppsComp/UserProfile'
import ProfileHighlights from '/src/components/AppsComp/ProfileHighlights'
import ProfileTab from "../../../components/AppsComp/ProfileTab"
import DetailsProfile from '../../../components/AppsComp/DetailsProfile'

export default function PostDetails() {
    return (
        <Wrapper>
            <Path mainpath="Apps" path="Post Details" />
            <UserProfile />
            <div className='h-auto flex flex-col md:flex-row gap-6 lg:gap-8 my-8'>
                <div className='w-full md:w-[35%] lg:w-[33%]'>
                    <ProfileHighlights />
                </div>
                <div className='w-full md:w-[65%] lg:w-[67%] p-4 md:p-5 bg-(--bg-header) rounded-md'>
                    <DetailsProfile />
                </div>
            </div>
        </Wrapper>
    )
}