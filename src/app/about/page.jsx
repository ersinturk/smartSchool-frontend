import React from 'react'
import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import Welcome from '@/components/about/welcome'
import Instroctors from '@/components/about/instructors'

const AboutPage = () => {
  return (
    <>
      <PageHeader>About</PageHeader>
      <Spacer height={70} />
      <Welcome />
      <Spacer />
      <Instroctors />
    </>
  )
}

export default AboutPage