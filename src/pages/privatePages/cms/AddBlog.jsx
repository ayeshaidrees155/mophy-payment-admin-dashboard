import React from 'react'
import Wrapper from '../../Wrapper'
import Path from '../../../components/CmsComp/Path'
import BlogForm from '../../../components/CmsComp/BlogForm'

export default function AddBlog() {
    return (
        <Wrapper>
            <Path mainpath="CMS" path="Add Blog" />
            <BlogForm />
        </Wrapper>
    )
}
