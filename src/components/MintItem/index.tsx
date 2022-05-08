import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    Box,
} from "@material-ui/core";


interface Props {
    index: any;
    onClick: any;
}
const MintItem: React.FC<Props> = ({ index, onClick }) => {
    return (
        <StyledContainer>
            <Box bgcolor={'rgb(209,209,209)'} padding={'calc(100vw / 1728 * 40) calc(100vw / 1728 * 100)'}>
                <Box width={'calc(100vw / 1728 * 80)'}>
                    <img src='/images/mint/uploadimage.png' alt={'uploadimg'} width={'100%'} />
                </Box>
            </Box>
            <Box fontSize={'calc(100vw / 1728 * 24)'} textAlign={'center'} mt={'calc(100vw / 1728 * 30)'}>
                <Box >Glacier Tier 01</Box>
                <Box fontSize={'calc(100vw / 1728 * 36)'} >0.098 $GLCR</Box>
                <Box mt={'calc(100vw / 1728 * 10)'}>Melts in 57 Days</Box>
                <Box mt={'calc(100vw / 1728 * 10)'}>Maximum Yield 0.02 AVAX</Box>
            </Box>
            <Box mx={'auto'} width={'fit-content'} mt={'calc(100vw / 1728 * 40)'} mb={'calc(100vw / 1728 * 10)'}>
                <PrimaryButton onClick={() => onClick()}>Mint Tier 01 Glacier</PrimaryButton>
            </Box>
        </StyledContainer >
    );
};
const StyledContainer = styled(Box)`
    background-color : rgb(236,236,236);
    padding : calc(100vw / 1728 * 25) calc(100vw / 1728 * 40);
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


export default MintItem;
