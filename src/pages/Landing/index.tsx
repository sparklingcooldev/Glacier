import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    Box,
} from "@material-ui/core";

import {
    FaTwitter,
    FaTelegramPlane,
    FaFacebookF,
    FaInstagram,
    FaMediumM,
    FaDiscord,
}
    from 'react-icons/fa'
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import { AiFillInstagram } from 'react-icons/ai';
import { SiMedium } from 'react-icons/si';

declare let window: any;

interface Props {
    account: any;
}
const Landing: React.FC<Props> = ({ account }) => {
    return (
        <StyledContainer>
            <LogoSection >
                <Box textAlign={'center'}>
                    <Box fontSize={'calc(100vw / 1728 * 50)'} >
                        OWN A LIQUIDITY NODE
                    </Box>
                    <Box fontSize={'calc(100vw / 1728 * 100)'}>
                        GLACIER PROTOCOL
                    </Box>
                    <Box fontSize={'calc(100vw / 1728 * 25)'} fontFamily={'Roboto'}>
                        Nodes generate a fixed daily yield on the Avalanche Network
                    </Box>
                </Box>

                <Box display={'flex'} justifyContent={'center'} mt={'calc(100vw / 1728 * 45)'}>
                    <PrimaryButton >
                        VIEW ROADMAP
                    </PrimaryButton>
                    <Box mr={'calc(100vw / 1728 * 27)'} />
                    <SecondaryButton>INVITE A FRIEND</SecondaryButton>
                </Box>

                <Box mt={'calc(100vw / 1728 * 244)'} display={'flex'} alignItems={'end'} flexDirection={'column'} mr={'calc(100vw / 1278 * 93)'}>
                    <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                        <Box fontSize={'calc(100vw / 1728 * 20)'}>JOIN THE COMMUNITY</Box>
                        <SocialPanel mb={'calc(100vw / 1728 * 68)'} mt={'calc(100vw / 1728 * 10)'}>
                            <Box ><FaFacebookF /></Box>
                            <Box ><FaTwitter /></Box>
                            <Box ><AiFillInstagram /></Box>
                            <Box ><SiMedium /></Box>
                            <Box ><FaDiscord /></Box>
                        </SocialPanel>
                    </Box>
                </Box>

            </LogoSection>

            <Box display={'flex'} color={'black'} bgcolor={'white'} padding={'0!important'} position={'relative'}>
                <Box position={'absolute'} left='calc(-100vw / 1728 * 200)' top={'calc(-100vw / 1728 * 200)'} width={'calc(100vw / 1728 * 1200)'} height={'calc(100vw / 1728 * 1500)'}>
                    <img src='/images/landing/Ellipse 1.png' width={'100%'} height={'100%'} alt={'ellipse'} />
                </Box>
                <WhatGlacier>
                    <Box fontSize={'calc(100vw / 1728 * 50)'} >WHAT IS GLACIER?</Box>
                    <Box fontSize={'calc(100vw / 1728 * 20)'} lineHeight={'calc(100vw / 1728 * 24)'} mt={'calc(100vw / 1728 * 46)'} maxWidth={'calc(100vw / 1728 * 629)'}>
                        Glacier lets users purchase Liquidity Nodes to enjoy fixed daily yields on their investment.
                        <br /><br />
                        Simply supply $GLACIER and $MIM to obtain a Liquidity Node and receive its transferable NFT.
                        <br /><br />
                        Glacier Nodes are stratified by their rate of yield, lifespan and cost.
                        <br /><br />
                        They have tiered, block limited lifecycles that slowly 'melt' as they emit rewards. Once they reach the end of their lifespan their emissions will cease.
                        <br /><br />
                        Nodes can be 'Refreezed' with $GLACIER to extend their decay schedule and restart the streaming of rewards.
                    </Box>
                    <Box mt={'calc(100vw / 1728 * 63)'}>
                        <PrimaryButton>
                            MINT YOUR GLACIER
                        </PrimaryButton>
                    </Box>
                </WhatGlacier>
                <Box
                    width={'50vw'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    bgcolor={'#202020'}
                    height={'50vw'}
                />
                <Box position={'absolute'} left={'calc(50% - 100vw / 1728 * 61)'} top={'calc(50% - 100vw / 1728 * 100)'}>
                    <ArrowCircle mb={'calc(100vw / 1728 * 23)'}>
                        <Box />
                        <Box>
                            <HiArrowLeft />
                        </Box>
                    </ArrowCircle>
                    <ArrowCircle>
                        <Box />
                        <Box>
                            <HiArrowRight />
                        </Box>
                    </ArrowCircle>
                </Box>
            </Box >

            <Box pt={'calc(100vw / 1728 * 80)'} position={'relative'} overflow={'hidden'}>
                <Box position={'absolute'} right='calc(-100vw / 1728 * 200)' top={'calc(-100vw / 1728 * 400)'} width={'calc(100vw / 1728 * 1200)'} height={'calc(100vw / 1728 * 1500)'}>
                    <img src='/images/landing/Ellipse 2.png' width={'100%'} height={'100%'} alt={'ellipse'} />
                </Box>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Box fontSize={'calc(100vw / 1728 * 30)'}>
                        HOW TO EARN FROM A
                    </Box>
                    <Box fontSize={'calc(100vw / 1728 * 50)'}>GLACIER</Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={'calc(100vw / 1728 * 190)'}>
                    <MintCard>
                        <Box>
                            <Box width={'calc(100vw / 1728 * 520)'} height={'calc(100vw / 1728 * 435)'}>
                                <img src={'/images/landing/item.png'} width={'100%'} height={'100%'} alt={'item'} />
                            </Box>
                            <Box mt={'calc(100vw / 1728 * 40)'}>
                                TEIR 1 GLACIER
                            </Box>
                            <Box fontSize={'calc(100vw / 1728 * 50)'}>
                                0.098 $GLCR
                            </Box>
                            <Box>
                                Melts in 57 Days
                            </Box>
                            <Box fontFamily={'Roboto'}>
                                Maximum Yield 0.02 AVAX
                            </Box>
                            <Box mt={'calc(100vw / 1728 * 30)'}>
                                <PrimaryButton
                                    style={{
                                        width: 'calc(100vw / 1728 * 485)',
                                        height: 'calc(100vw / 1728 * 90)',
                                        fontSize: 'calc(100vw / 1728 * 22)'
                                    }}
                                >
                                    MINT YOUR GLACIER
                                </PrimaryButton>
                            </Box>

                        </Box>
                        <Box position={'absolute'} width={'100%'} height={'100%'} top={0} left={0} />
                        <Box position={'absolute'} width={'100%'} height={'100%'} top={0} left={0} />

                    </MintCard>
                    <Box width={'50%'} pr={'calc(100vw / 1728 * 180)'} pl={'calc(100vw / 1728 * 40)'}>
                        <Box mt={'calc(100vw / 1728 * 140)'}>
                            <Box fontSize={'calc(100vw / 1728 * 50)'} color={'rgb(0, 0, 0,0.3)'}>01.</Box>
                            <Box fontSize={'calc(100vw / 1728 * 30)'} mt={'calc(100vw / 1728 * 10)'} >
                                Buy $GLACIER & $MIM
                            </Box>
                            <Box fontFamily={'Roboto'} fontSize={'calc(100vw / 1728 * 20)'} mt={'calc(100vw / 1728 * 15)'} lineHeight={'calc(100vw / 1728 * 24)'}>
                                To acquire a Glacier Liquidity Node, you will need both $GLACIER and $MIM.
                            </Box>
                        </Box>
                        <Box mt={'calc(100vw / 1728 * 35)'}>
                            <Box fontSize={'calc(100vw / 1728 * 50)'} color={'rgb(0, 0, 0,0.3)'}>02.</Box>
                            <Box fontSize={'calc(100vw / 1728 * 30)'} mt={'calc(100vw / 1728 * 10)'} >
                                Choose Your Node Tier
                            </Box>
                            <Box fontFamily={'Roboto'} fontSize={'calc(100vw / 1728 * 20)'} mt={'calc(100vw / 1728 * 15)'} lineHeight={'calc(100vw / 1728 * 24)'}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Box>
                        </Box>
                        <Box mt={'calc(100vw / 1728 * 35)'}>
                            <Box fontSize={'calc(100vw / 1728 * 50)'} color={'rgb(0, 0, 0,0.3)'}>03.</Box>
                            <Box fontSize={'calc(100vw / 1728 * 30)'} mt={'calc(100vw / 1728 * 10)'}>
                                Claim Yeilds before it melts
                            </Box>
                            <Box mt={'calc(100vw / 1728 * 15)'} fontFamily={'Roboto'} fontSize={'calc(100vw / 1728 * 20)'} lineHeight={'calc(100vw / 1728 * 24)'}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </StyledContainer >
    );
};
const StyledContainer = styled(Box)`
    
`;

const PrimaryButton = styled.button`
    background: linear-gradient(96.82deg, #347EC2 -14.21%, #ACF0FF 177.8%);
    border : none;
    outline : none;
    font-size : calc(100vw / 1728 * 18);
    color : white;
    border-radius : 10px;
    width : calc(100vw / 1728 * 302);
    height : calc(100vw / 1728 * 80);
    display : flex;
    justify-content : center;
    align-items : center;
`;

const SecondaryButton = styled.button`
    background: transparent;
    border : 3px solid black;
    outline : none;
    font-size : calc(100vw / 1728 * 18);
    color : black;
    border-radius : 10px;
    width : calc(100vw / 1728 * 302);
    height : calc(100vw / 1728 * 80);
    display : flex;
    justify-content : center;
    align-items : center;
`;

const SocialPanel = styled(Box)`
    display : flex;
    font-size : calc(100vw / 1728 * 25);
    >div{
        width : calc(100vw / 1728 * 40);
        height : calc(100vw / 1728 * 40);
        cursor : pointer;
        margin-right : calc(100vw / 1728 * 20);
        border-radius : 50%;
        background-color : black;
        color : white;
        display : flex;
        justify-content :center;
        align-items : center;
    }
    >div:nth-child(5){
        margin-right : 0;
    }
`

const ArrowCircle = styled(Box)`
    position : relative;
    >div:nth-child(2){
        font-size: calc(100vw / 1728 * 54);
        border-radius: 50%;
        width: calc(100vw / 1728 * 123);
        height: calc(100vw / 1728 * 123);
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
        background: white;
        z-index : 10;
        position : relative;
    }
    >div:nth-child(1){
        position : absolute;
        left : calc(-100vw / 1728 * 6);
        top : calc(-100vw / 1728 * 6);
        background: #8FC3F2;
        filter: blur(calc(100vw / 1728  * 6));
        border-radius : 50%;
        width: calc(100vw / 1728 * 135);
        height: calc(100vw / 1728 * 135);
    }
`;

const LogoSection = styled(Box)`
    position : relative;
    background-image : url('/images/landing/back.png');
    background-size : 100% 100%;
    padding-top : calc(100vw / 1728 * 360);
`;

const WhatGlacier = styled(Box)`
    width : 50%;
    padding : calc(100vw / 1728 * 155) calc(100vw / 1728 * 108) 0 calc(100vw / 1728 * 93);
    >div:nth-child(2){
        font-family : Roboto;
    }
`;

const MintCard = styled(Box)`
    padding : calc(100vw / 1728 * 40);
    width : calc(100vw / 1728 * 600);
    margin : 0 auto;
    margin-top : calc(100vw / 1728 * 100);
    position : relative;
    >div:nth-child(1){
        display : flex;
        align-items : center;
        border-radius : calc(100vw / 1728 * 10);
        flex-direction : column;
        font-size : calc(100vw / 1728 * 25);
        position : relative;
        z-index : 10;
    }
    >div:nth-child(2){
        background: radial-gradient(35.25% 42.83% at 50.12% 50.09%, rgba(255, 255, 255, 0) 0%, #8FC3F2 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        filter: blur(100px);
    }
    >div:nth-child(3){
        background: #FFFFFF;
        opacity: 0.7;
        backdrop-filter: blur(92px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 10px;
    }
`;
export default Landing;
