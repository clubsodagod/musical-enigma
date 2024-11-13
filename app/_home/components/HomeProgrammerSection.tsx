'use client'
import React from 'react'
import styles from './styles.module.css'
import { HeroProps } from '@/app/_library/types/common'
import { MotionDiv } from '@/app/_components/common/framer/MotionDiv'
import MotionPageWrapper from '@/app/_components/common/SectionWrapper'
import Header from '@/app/_components/common/Header'
import { MotionP } from '@/app/_components/common/framer/MotionP'
import ButtonPro from './ButtonPro'
import HeroButtonCtn from '@/app/_components/common/HeroButtonCtn'
import { missionStatement } from '@/app/_library/const/brand'

const HomeProgrammerSection: React.FC<HeroProps> = ({
    ctnRef,
    ...props
}) => {
    return (

        <MotionPageWrapper
            ctnRef={ctnRef}
            {...props}
        >
            <MotionDiv
                className='hero-wrapper'
            >

                <Header
                    headerLabel='The Developer'
                    tagLine='Programming is art. Code is my medium.'
                    size='md'
                    right={true}
                />

            </MotionDiv>


            <MotionDiv className={`btm-hero-ctn-wrapper`} id='investments'>

                <MotionP className={`${styles.heroP} right`} id='programmer'>
                    {missionStatement}
                </MotionP>

                <HeroButtonCtn
                className='btn-ctn right-btn-ctn'
                >

                    <ButtonPro
                        variant='contained'
                        className={`learn-more-btn`}
                        id={'home-investment-hero'}
                        href={'/im-a-programmer'}
                        label={`Learn More`}
                        color='primary'
                    />
                    <ButtonPro
                        variant='contained'
                        className={`learn-more-btn`}
                        id={'home-investment-hero'}
                        href={'/im-a-programmer'}
                        label={`Let's Work`}
                        color='secondary'
                    />

                </HeroButtonCtn>
            </MotionDiv>
        </MotionPageWrapper>

    )
}

export default HomeProgrammerSection