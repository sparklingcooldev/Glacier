import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import Web3 from "web3";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Open Sans',
        padding: '50px 0px',
        width: '100%',
        maxWidth: 'calc(100vw / 1280 * 600)'
    },
};

declare let window: any;

interface TopbarProps {
    onClick: any;
    modalopen: any;
    setModalOpen: any;
}

const MintSuccessModal: React.FC<TopbarProps> = ({ onClick, modalopen, setModalOpen }) => {

    return (
        <Modal
            isOpen={modalopen}
            onRequestClose={() => setModalOpen(false)}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'} mt={'calc(100vw / 1280 * 10)'}>
                <Box width={'30vw'} height={'calc(30vw / 643 * 361)'} ml={'calc(-100vw / 1280 * 60)'}>
                    <img src='/images/landing/ice.png' width={'100%'} height={'100%'} alt={'ice'} />
                </Box>
                <Box fontSize={'calc(100vw / 1280 * 36)'} textAlign={'center'} fontWeight={'bold'}>Your Glacier is minted</Box>
                <Box fontSize={'calc(100vw / 1280 * 14)'} textAlign={'center'} fontWeight={'bold'} mt={'calc(100vw / 1280 * 15)'} maxWidth={'calc(100vw / 1280 * 440)'}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </Box>
                <Box mt={'calc(100vw / 1280 * 30)'}>
                    <ConnetWallet onClick={() => { onClick(); setModalOpen(false) }}>
                        See your glacier on Opensea
                    </ConnetWallet>
                </Box>
            </Box>
        </Modal>

    );
};

const ConnetWallet = styled.button`
    background-color : #2D9BF0;
    border : none;
    outline : none;
    padding : calc(100vw / 1280 * 13) calc(100vw / 1280 * 30);
    font-size : calc(100vw / 1280 * 16);
    border-radius : 3px;
    color : white;
`;


export default MintSuccessModal;
