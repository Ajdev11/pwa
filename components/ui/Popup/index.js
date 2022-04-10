import { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Text from '../Text'
import Image from 'next/image'

export default function index({ isPopupShowing, closePopUp, popupInfo, isMobile }) {

  const { name, picture, country, bio, position } = popupInfo

  return (
    <Box className="modal" display={isPopupShowing ? 'flex' : 'none'} onClick={closePopUp}>
      <Flex className="modal_content" display="flex" flexDirection="column" w={isMobile ? "100%" : "654px"} h={isMobile ? "70%" : "452px"} my={isMobile ? "5%" : "0"}>
        <Flex justifyContent="flex-end">
          <Flex w="25px" h="25px" justifyContent="center" alignItems="center">
            <Text fontSize="35px" color="gray" className="hoverable" onClick={closePopUp}>&times;</Text>
          </Flex>
        </Flex>
        <Flex justifyContent="space-around" alignItems="center" h="100%" pt="5%" flexDirection={isMobile ? "column" : "row"}>
          <Flex w="50%" h={isMobile ? "50%" : "100%"} justifyContent="center">
            <Box w={isMobile ? "120px" : "270px"} h={isMobile ? "120px" : "270px"} position="relative">
              <Image className="bnwhite-card-image" layout="fill" objectFit="contain" src={picture} alt={name} />
            </Box>
          </Flex>
          <Box w={isMobile ? "95%" : "50%"} px="3%" h="100%">
            <Box>
              <Text fontSize="24px" fontWeight="900">{name}</Text>
            </Box>
            <Box mb="3%">
              <Text fontSize="18px">{country}</Text>
            </Box>
            <Box h={isMobile ? "120px" : "auto"} overflowY="scroll" px="5%">
              <Text textAlign="justify" variant="normal">{bio}</Text>
            </Box>
            <Box>
              <Text textAlign="justify" variant="normal">{position}</Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
