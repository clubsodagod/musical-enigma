'use client'
import { useHomeRefs } from '@/app/_utility/refs/home/home-refs'
import React from 'react'
import MainHomeHero from './MainHomeHero'
import HomeProgrammerSection from './HomeProgrammerSection'
import HomeBlogSection from './HomeBlogSection'
import { IBlogPopulated } from '@/app/_database/models/blog'

interface HomeModuleProps {
    featuredPosts: IBlogPopulated[]|undefined;
}

const HomeModule:React.FC<HomeModuleProps> = ({featuredPosts}) => {

    const {
        mainRef, programmerRef, blogRef
    } = useHomeRefs()

    return (
        <>
            <MainHomeHero ctnRef={mainRef} id='home-main' />
            <HomeProgrammerSection ctnRef={programmerRef} id='home-programmer' />
            <HomeBlogSection ctnRef={blogRef} id='home-blog' posts={featuredPosts} />
        </>
    )
}

export default HomeModule