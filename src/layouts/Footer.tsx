import React from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

const Footer: React.FC = () => {
    return (
        <StyledContainer>
            <Box
                bgcolor={'#1A1A1A'}
                padding={'calc(100vw / 1728 * 120) calc(100vw / 1728 * 90)'}
                pr={'calc(100vw / 1728 * 250)'}
                color={'white'}
                display={'flex'}
                justifyContent={'space-between'}
            >
                <Box>
                    <Box display={'flex'} alignItems={'center'} style={{ cursor: 'pointer' }}>

                        <Box fontSize={'calc(100vw / 1728 * 50)'} >
                            GLACIER
                        </Box>
                    </Box>
                    <Box fontSize={'calc(100vw / 1728 * 20)'} maxWidth={'calc(100vw / 1728 * 629)'} mt={'calc(100vw / 1728 * 25)'} fontFamily={'Roboto'} color={'rgb(255,255,255,0.6)'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book.
                    </Box>
                    <Box mt={'calc(100vw / 1728 * 30)'}>
                        <ConnetWallet>
                            CONNECT WALLET
                        </ConnetWallet>
                    </Box>
                </Box>

                <Box fontSize={'calc(100vw / 1728 * 20)'}>
                    <Box  >QUICK LINKS</Box>
                    <Box color={'rgba(255,255,255,0.6)'} fontFamily={'Roboto'}>
                        <Box mt={'calc(100vw / 1728 * 15)'}>Home</Box>
                        <Box mt={'calc(100vw / 1728 * 15)'}>Mint</Box>
                        <Box mt={'calc(100vw / 1728 * 15)'}>Claim</Box>
                        <Box mt={'calc(100vw / 1728 * 15)'}>Buy $Glacier</Box>
                    </Box>
                </Box>
                <Box fontSize={'calc(100vw / 1728 * 20)'}>
                    <Box fontSize={'calc(100vw / 1728 * 20)'} >LEGALS</Box>
                    <Box color={'rgba(255,255,255,0.6)'} fontFamily={'Roboto'}>
                        <Box mt={'calc(100vw / 1728 * 15)'}>Glacier Whitepaper</Box>
                        <Box mt={'calc(100vw / 1728 * 15)'}>Tokenomicst</Box>
                    </Box>
                </Box>

                <Box>
                    <Box >
                        <Box fontSize={'calc(100vw / 1728 * 20)'} >
                            GLCR RATES
                        </Box>
                        <Box mt={'calc(100vw / 1728 * 15)'} ml={'10px'}>
                            <Box display={'flex'} fontSize={'calc(100vw / 1728 * 14)'} alignItems={'center'} >
                                <Box width={'28px'} height={'23px'} mr={'5px'}><img src='/images/price.svg' width={'100%'} height={'100%'} alt={'price'} /></Box>
                                <Box mt={'3px'} color={'white'}>
                                    $GLACIER 0.076
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>

            <Box
                fontSize={'calc(100vw / 1728 * 15)'}
                bgcolor={'white'}
                color={'black'}
                padding={'calc(100vw / 1728 * 25) calc(100vw / 1728 * 95)'}
                display={'flex'}
                justifyContent={'space-between'}
            >
                <Box>
                    A PRODUCT BY DISCURSO
                </Box>
                <Box>All rights reserved @ 2022</Box>
            </Box>
        </StyledContainer >
    );
}

const StyledContainer = styled(Box)`

`

const ConnetWallet = styled.button`
    background: linear-gradient(96.82deg, #347EC2 -14.21%, #ACF0FF 177.8%);
    border : none;
    outline : none;
    font-size : calc(100vw / 1728 * 15);
    color : white;
    border-radius : 10px;
    width : calc(100vw / 1728 * 377);
    height : calc(100vw / 1728 * 64);
    display : flex;
    justify-content : center;
    align-items : center;
`;
export default Footer;