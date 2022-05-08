import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    Box,
} from "@material-ui/core";

import {
    FaChevronLeft,
    FaChevronRight,
}
    from 'react-icons/fa'

declare let window: any;

interface Props {
    account: any;
}
const Claim: React.FC<Props> = ({ account }) => {
    return (
        <StyledContainer>
            <Box bgcolor={'rgb(45,155,240)'} color={'black'} padding={'calc(100vw / 1728 * 40) calc(100vw / 1728 * 60)'}>
                <Box fontSize={'calc(100vw / 1728 * 36)'}  textAlign={'center'} mb={'calc(100vw / 1728 * 130)'}>
                    Glacier Tier 01
                </Box>
            </Box>
            <Box bgcolor={'#1A1A1A'} height={'calc(100vw / 1728 * 25)'} />
            <Box bgcolor={'white'} display={'flex'}  flexDirection={'column'} alignItems={'center'} mt={'calc(100vw / 1728 * 180)'}>
                <Box fontSize={'calc(100vw / 1728 * 24)'} color={'rgb(128,128,128)'}>Yields to claim</Box>
                <Box fontSize={'calc(100vw / 1728 * 36)'}>0.987 $GLCR</Box>
                <Box display={'flex'} mt={'calc(100vw / 1728 * 30)'} mb={'calc(100vw / 1728 * 80)'}>
                    <PrimaryButton>Claim your Yields</PrimaryButton>
                    <Box mr={'calc(100vw / 1728 * 15)'} />
                    <SecondaryButton>See on Opensea</SecondaryButton>
                </Box>
            </Box>
            <Box
                position={'absolute'}
                top={'calc(100vw / 1728 * 115)'}
                left={'calc(100vw / 1728 * 300)'}
                display={'flex'}
                alignItems={'center'}
            >
                <ArrowCircle><FaChevronLeft /></ArrowCircle>
                <Box width={'45vw'} height={'calc(45vw / 643 * 361)'} ml={'calc(-100vw / 1728 * 100)'}>
                    <img src='/images/landing/ice.png' width={'100%'} height={'100%'} alt={'ice'} />
                </Box>
                <ArrowCircle><FaChevronRight /></ArrowCircle>
            </Box>

        </StyledContainer >
    );
};
const StyledContainer = styled(Box)`
    position : relative;
`;

const PrimaryButton = styled.button`
    background-color : #2D9BF0;
    border : none;
    outline : none;
    padding : calc(100vw / 1728 * 10) calc(100vw / 1728 * 50);
    font-size : calc(100vw / 1728 * 14);
    border-radius : 3px;
    color : white;
`;

const SecondaryButton = styled.button`
    background-color : white;
    border : 1px solid #2D9BF0;
    outline : none;
    padding : calc(100vw / 1728 * 10) calc(100vw / 1728 * 50);
    border-radius : 3px;
    font-size : calc(100vw / 1728 * 14);
    color : #2D9BF0;
`;

const SocialPanel = styled(Box)`
    display : flex;
    margin-top : calc(100vw / 1728 * 20);
    font-size : calc(100vw / 1728 * 30);
    >div{
        cursor : pointer;
        margin-right : calc(100vw / 1728 * 25);
    }
`

const ArrowCircle = styled(Box)`
    font-size: calc(100vw / 1728 * 40);
    border: 2px solid black;
    border-radius: 50%;
    width: calc(100vw / 1728 * 100);
    height: calc(100vw / 1728 * 100);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
    background: white;
`;
export default Claim;
