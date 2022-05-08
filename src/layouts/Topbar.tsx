import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import Web3 from "web3";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import ConnectModal from "components/ConnectModal";


declare let window: any;

interface TopbarProps {
    account: string;
    setAccount: any;
}

const Topbar: React.FC<TopbarProps> = ({ account, setAccount }) => {
    let ellipsis = account
        ? account.slice(0, 4) +
        "..." +
        account.substring(account.length - 4, account.length)
        : "Connect Wallet";

    const [modalopen, setModalOpen] = useState(false);
    const onConnect = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            try {
                await window.ethereum.enable();
                const accounts = await window.web3.eth.getAccounts();
                setAccount(accounts[0]);
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        window.ethereum.on("accountsChanged", function (accounts: any) {
            // Time to reload your interface with accounts[0]!
            onConnect();
        });
    }, []);

    return (
        <StyledContainer>
            <ConnectModal
                modalopen={modalopen}
                setModalOpen={setModalOpen}
                onClick={onConnect}
            />
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Box display={'flex'} alignItems={'center'} style={{ cursor: 'pointer' }}>
                    <Box fontSize={'calc(100vw / 1728 * 30)'}  color={'black'}>
                        GLACIER
                    </Box>
                </Box>
                <Menus fontSize={'calc(100vw / 1728 * 18)'} color={'rgba(0,0,0,0.5)'}>

                    <Box><Link to={'/'}>HOME</Link></Box>
                    <Box><Link to={'/mint'}>MINT</Link></Box>
                    <Box><Link to={'/claim'}>CLAIM</Link></Box>
                    <Box>BUY $GLCR TOKEN</Box>

                    <Box display={'flex'} fontSize={'calc(100vw / 1728 * 14)'} alignItems={'center'} >
                        <Box width={'28px'} height={'23px'} mr={'5px'}><img src='/images/price.svg' width={'100%'} height={'100%'} alt={'price'} /></Box>
                        <Box mt={'3px'} color={'black'}>
                            $GLACIER 0.076
                        </Box>
                    </Box>
                    <ConnetWallet onClick={() => !account && setModalOpen(true)}>
                        {ellipsis}
                    </ConnetWallet>
                </Menus>
            </Box>
        </StyledContainer>
    );
};

const StyledContainer = styled(Box)`
    color : white;
    position : absolute;
    top : calc(100vw / 1728 * 73);
    left : calc(100vw / 1728 * 93);
    right : calc(100vw / 1728 * 93);
    z-index : 10;
`;

const ConnetWallet = styled.button`
    background: linear-gradient(96.82deg, #347EC2 -14.21%, #ACF0FF 177.8%);
    border : none;
    outline : none;
    padding : calc(100vw / 1728 * 23) calc(100vw / 1728 * 27);
    font-size : calc(100vw / 1728 * 15);
    line-height : calc(100vw / 1728 * 18);
    border-radius : calc(100vw / 1728 * 10);
    color : white;
`;

const Menus = styled(Box)`
    display : flex;
    justify-content : space-between;
    align-items : center;
    >div{
        margin-right : calc(100vw / 1728 * 34);
        cursor : pointer;
    }
    >div>a{
        color : rgba(0,0,0,0.5);
    }
    >div:nth-child(1)>a{
        color : black;
    }
`;
export default Topbar;
