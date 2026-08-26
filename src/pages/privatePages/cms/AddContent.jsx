import React from 'react'

import Wrapper from '../../Wrapper'
import Path from '../../../components/CmsComp/Path'
import ContentForm from '../../../components/CmsComp/ContentForm'

export default function AddContent() {
    return (
        <Wrapper>
            <Path mainpath="CMS" path="Add Content" />
            <ContentForm />
        </Wrapper>
    )
}
