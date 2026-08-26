import React from 'react'


import Wrapper from '../../Wrapper'
import ContentTable from "../../../components/CmsComp/ContentTable"
import Path from '../../../components/CmsComp/Path'

export default function Content() {
    return (
        <Wrapper>
            <div>
                <Path mainpath="CMS" path="Content" />
            </div>




            <div>
                <ContentTable />
            </div>
        </Wrapper>
    )
}