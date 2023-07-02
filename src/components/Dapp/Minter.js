import "../../css/minter.css";
import "../../css/App.css";
import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";
import axios from "axios";
import Web3 from "web3";
import { connect } from "../../redux/blockchain/Actions";
import { fetchData } from "../../redux/data/Actions";
import Confetti from 'react-confetti'

function Minter() {


    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const [nft, gettingNFT] = useState(false);
    const [message, settingMessage] = useState("");
    const [amount, setAmount] = useState(1);

    const width = window.innerWidth;
    const height = window.innerHeight;

    // const flipComponents = () => {
    //     document.getElementById("beginMintingButton").style.display = "none";
    //     document.getElementById("mintingProcessButtons").style.display = "flex";
    //     document.getElementById("mintButton").style.display = "flex";
    //     document.getElementById("message").style.display = "flex";
    // }

    // const mint = async (e) => {
    //     if (amount >= 1 && amount <= 5) {
    //         document.getElementById("confetti").style.display = "flex";
    //         let web3 = new Web3(window.ethereum);

    //         var costing = web3.utils.toWei(
    //             (amount * process.env.REACT_APP_MINT_COST).toString(),
    //             "ether"
    //         );

    //         if (process.env.REACT_APP_MINTACTIVE == "true") {
    //             console.log("Attempting to mintNoodle");
    //             try {
    //                 gettingNFT(true);

    //                 blockchain.smartContract.methods
    //                     .mintNoodle(amount)
    //                     .send({
    //                         from: blockchain.account,
    //                         value: costing,
    //                     })
    //                     .then((recipt) => {
    //                         console.log(recipt);
    //                         settingMessage("Successfully minted a Doodle Noodle!!");
    //                         gettingNFT(false);
    //                     });
    //                 dispatch(fetchData(blockchain.account));
    //             } catch (e) {
    //                 console.log("Something went wrong: ", e);
    //                 settingMessage("An error occured, try minting again!");
    //                 gettingNFT(false);
    //             }
    //         } else if (process.env.REACT_APP_PRESALEACTIVE == "true") {
    //             console.log("Attempting to mint presale");
    //             try {
    //                 gettingNFT(true);

    //                 const response = await axios.post(
    //                     `/.netlify/functions/validate`,
    //                     blockchain.account
    //                 );

    //                 const verified = response.data.verified;
    //                 const confirmedHash = response.data.confirmedHash;

    //                 if (verified != false) {

    //                     const signature = confirmedHash;

    //                     let sig = ethers.utils.splitSignature(signature);

    //                     console.log(sig);

    //                     blockchain.smartContract.methods
    //                         .presaleMintNoodle(amount, sig.r, sig.s, sig.v)
    //                         .send({
    //                             from: blockchain.account,
    //                             value: costing,
    //                         })
    //                         .then((recipt) => {
    //                             console.log(recipt);
    //                             settingMessage("Successfully minted a Doodle Noodle!!");
    //                             gettingNFT(false);
    //                         });
    //                     gettingNFT(false);
    //                     dispatch(fetchData(blockchain.account));
    //                 } else {
    //                     gettingNFT(true);
    //                     settingMessage("Account not whitelisted for presale");
    //                 }
    //             } catch (e) {
    //                 console.log("Something went wrong: ", e);
    //                 settingMessage("An error occured, try minting again!");
    //                 gettingNFT(false);
    //             }
    //         }
    //         else {
    //             settingMessage("Presale / Minting not yet active");
    //             gettingNFT(false);
    //         }
    //     } else {
    //         settingMessage("Please enter a valid amount");
    //         return;
    //     }
    // }

    // const getCount = (event) => {
    //     console.log(event.target.value);
    //     if (event.target.value > 5) {
    //         settingMessage("Max number to mint is 5");
    //         setAmount(5);
    //     } else if (event.target.value < 1) {
    //         settingMessage("Min number to mint is 1");
    //         setAmount(1);
    //     } else if (event.target.value == null || event.target.value == "") {
    //         settingMessage("Min number to mint is 1");
    //         setAmount(1);
    //     } else {
    //         setAmount(event.target.value);
    //         settingMessage("Ready to mint " + event.target.value + " Doodle Noodles");
    //     }
    // }


    return (
        <div>
            <div className="mintingProcessContainer">
                <MDBBtn id="beginMintingButton" size="lg" className='btn-lg beginMintingButton' color='danger' onClick={flipComponents}>Begin Minting</MDBBtn>
                <div id="mintingProcessButtons">
                    <input id="mintNumber" max={5} min={1} defaultValue={0} type={"number"} onChange={getCount} readonly />
                </div>
                <div>
                    <MDBBtn id='mintButton' rounded color="danger" size="lg" onClick={mint}>Mint!</MDBBtn>
                </div>
                <span id="message">{message}</span>
            </div>
            <Confetti
                id="confetti"
                width={2300}
                height={1500}
                numberOfPieces={500}
            />
        </div>
    )
}

export default Minter;