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
        maxWidth: '900px'
    },
};

declare let window: any;

interface TopbarProps {
    onClick: any;
    modalopen: any;
    setModalOpen: any;
}

const ConnectModal: React.FC<TopbarProps> = ({ onClick, modalopen, setModalOpen }) => {

    return (
        <Modal
            isOpen={modalopen}
            onRequestClose={() => setModalOpen(false)}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                <Box fontSize={'36px'} textAlign={'center'} >Metamask Interface</Box>
                <Box fontSize={'14px'} textAlign={'center'}  mt={'30px'} maxWidth={'600px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Box>
                <Box mt={'60px'}>
                    <ConnetWallet onClick={() => { onClick(); setModalOpen(false) }}>
                        Connect Wallet
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
    padding : calc(100vw / 1728 * 13) calc(100vw / 1728 * 30);
    font-size : calc(100vw / 1728 * 16);
    border-radius : 3px;
    color : white;
`;


export default ConnectModal;
