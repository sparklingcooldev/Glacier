import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    Box,
} from "@material-ui/core";

import MintItem from '../../components/MintItem'
import MediaABI from '../../abis/Media.json'
import { MEDIA_ADDRESS } from '../../abis/addrs'
import {
    constructMediaData,
    sha256FromBuffer,
    constructBidShares,
} from '@zoralabs/zdk';
import { random } from "lodash";
declare let window: any;

interface Props {
    account: any;
}
const Mint: React.FC<Props> = ({ account }) => {
    async function createMedia(

    ) {

        const mediaData = {
            tokenURI: random(100000000).toFixed(5),
            metadataURI: random(100000000).toFixed(5),
            contentHash: '0xd4967590eb024589dfb6b9e48a576eb49ebc19d764b0d1d67dc21975e7258e97',
            metadataHash: '0xd4967590eb024589dfb6b9e48a576eb49ebc19d764b0d1d67dc21975e7258e97',
        };

        const shares = constructBidShares(
            0, // Creator share
            100 - 2, // Owner share
            2, // Previous owner share
        );
        if (account) {
            const mediaContract = new window.web3.eth.Contract(MediaABI, MEDIA_ADDRESS);
            const transaction = await mediaContract?.methods.mint(mediaData, shares).send({ from: account });
            console.log(transaction);
        }


    };
    return (
        <StyledContainer>
            <Box position={'relative'} bgcolor={'#1A1A1A'} color={'white'}>
                <Box>
                    <Box fontSize={'calc(100vw / 1728 * 50)'}  maxWidth={'calc(100vw / 1728 * 520)'}>
                        Mint your glacier
                    </Box>
                    <Box fontSize={'calc(100vw / 1728 * 18)'} mt={'calc(100vw / 1728 * 15)'} maxWidth={'calc(100vw / 1728 * 570)'}>Lorem Ipsum is simply dummy text of the printing and</Box>
                </Box>
                <Box width={'35vw'} height={'calc(35vw / 643 * 361)'} position={'absolute'} right={'calc(100vw / 1728 * 50)'} top={'calc(100vw / 1728 * 20)'} >
                    <img src='/images/landing/ice.png' width={'100%'} height={'100%'} alt={'ice'} />
                </Box>
            </Box>
            <Box bgcolor={'white'} mb={'calc(100vw / 1728 * 40)'}>
                <Box>
                    <Box fontSize={'calc(100vw / 1728 * 48)'}  maxWidth={'calc(100vw / 1728 * 520)'}>
                        Glacier comes in Tiers
                    </Box>
                    <Box fontSize={'calc(100vw / 1728 * 18)'} mt={'calc(100vw / 1728 * 15)'} maxWidth={'calc(100vw / 1728 * 570)'}>
                        Lorem Ipsum is simply dummy text of the printing and
                    </Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} mt={'calc(100vw / 1728 * 60)'}>
                    <MintItem index={1} onClick={createMedia} />
                    <MintItem index={2} onClick={createMedia} />
                    <MintItem index={3} onClick={createMedia} />
                </Box>
                <Box fontSize={'calc(100vw / 1728 * 36)'} textAlign={'center'}  mt={'calc(100vw / 1728 * 70)'}>
                    Still Confused about Melting and Yields thing?
                </Box>
                <Box fontSize={'calc(100vw / 1728 * 18)'} textAlign={'center'} mt={'calc(100vw / 1728 * 30)'}>
                    Lorem Ipsum is simply dummy text of the printing and
                </Box>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mx={'auto'} width={'90%'} height={'22vw'} bgcolor={'rgb(209,209,209)'} mt={'calc(100vw / 1728 * 25)'}>
                    <Box width={'10vw'} height={'10vw'}>
                        <img src={'/images/landing/video.png'} alt={'video'} width={'100%'} height={'100%'} />
                    </Box>
                </Box>
            </Box>
        </StyledContainer >
    );
};
const StyledContainer = styled(Box)`
    >div{
        padding : calc(100vw / 1728 * 40) calc(100vw / 1728 * 60);
    }
`;

const PrimaryButton = styled.button`
    background-color : #2D9BF0;
    border : none;
    outline : none;
    padding : calc(100vw / 1728 * 13) calc(100vw / 1728 * 30);
    font-size : calc(100vw / 1728 * 16);
    border-radius : 3px;
    color : white;
`;


export default Mint;
