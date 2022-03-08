import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import useViewport from '../../../hooks/useViewport'
import Button from '../../ui/Button'
import SectionsTitle from '../../ui/SectionsTitle'
import FirstFeaturedBlog from './FirstFeaturedBlog'
import SecondaryFeaturedBlog from './SecondaryFeaturedBlog'

export default function HomeBlog({ featuredBlogs }) { 
  const { isDesktop } = useViewport()

  const firstFBlog = featuredBlogs[0]
  const secondFBlog = featuredBlogs[1]
  const thirdFBlog = featuredBlogs[2]
  const fourthFBlog = featuredBlogs[3]
  const fifthFBlog = featuredBlogs[4]

  return (
    isDesktop &&
    <section>
      <Box textAlign="center" backgroundImage="/images/static/backgrounds/BACKGROUND-blog.jpg" backgroundSize="cover" py="5%">

        <SectionsTitle title="Blog" />

        <Box display="inline-block">
          <Box className='home-blogs-wrapper'>
            <FirstFeaturedBlog blogEntry={firstFBlog} />
            <SecondaryFeaturedBlog classname='blog-second' blogEntry={secondFBlog} />
            <SecondaryFeaturedBlog classname='blog-third' blogEntry={thirdFBlog} />
            <SecondaryFeaturedBlog classname='blog-fourth' blogEntry={fourthFBlog} />
            <SecondaryFeaturedBlog classname='blog-fifth' blogEntry={fifthFBlog} />
          </Box>
        </Box>

        <Box py="20px">
          <Button>See More</Button>
        </Box>

      </Box>
    </section>
  )
}
