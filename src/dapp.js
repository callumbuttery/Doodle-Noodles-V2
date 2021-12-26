import React, { useEffect, useState, useRef } from "react";
import "./css/App.css";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./css/globalStyles";
import styled from "styled-components";
import { create } from "ipfs-http-client";
import logo from "./imgs/Logo2.png";
import { ethers } from "ethers";
import axios from "axios";
import Web3 from "web3";
import { abi } from "./redux/blockchain/abi";

export const StyledButton = styled.button`
  padding: 8px;
  background-color: #ffffff;
  color: #fffff;
`;

function Dapp() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [nft, gettingNFT] = useState(false);
  const [message, settingMessage] = useState("Buy a Doodle Noodle");
  const [amount, setAmount] = useState(1);
  const presale = useSelector((state) => state.presale);

  const getDoodle = async (amount) => {
    let web3 = new Web3(window.ethereum);
    const { ethereum } = window;

    var costing = web3.utils.toWei(
      (amount * process.env.REACT_APP_MINT_COST).toString(),
      "ether"
    );

    const mintActive = await blockchain.smartContract.methods.mintActive();
    if (mintActive != false) {
      console.log("Attempting to mintNoodle");
      try {
        gettingNFT(true);

        blockchain.smartContract.methods
          .mintNoodle(amount)
          .send({
            from: blockchain.account,
            value: costing,
          })
          .then((recipt) => {
            console.log(recipt);
            settingMessage("Successfully minted a Doodle Noodle!!");
            gettingNFT(false);
          });
        dispatch(fetchData(blockchain.account));
      } catch (e) {
        console.log("Something went wrong: ", e);
        settingMessage("An error occured, try minting again!");
        gettingNFT(false);
      }
    } else {
      console.log("Attempting to mint presale");
      try {
        gettingNFT(true);

        const response = await axios.post(
          `/.netlify/functions/validate`,
          blockchain.account
        );

        const verified = response.data.verified;
        const confirmedHash = response.data.confirmedHash;

        if (response.data.verified != false) {
          const signature =
            "0xe090ec84dbb853c44aa6ebf0e67f673f4bc82fdfc4b83d482e3fb4b7b6fbaffe115ad5740897fb268be729bad0c3343633c331133b0928a2955be8a806a6473f1b";

          let sig = ethers.utils.splitSignature(signature);

          blockchain.smartContract.methods
            .presaleMint(amount, sig.r, sig.s, sig.v)
            .send({
              from: blockchain.account,
              value: costing,
            })
            .then((recipt) => {
              console.log(recipt);
              settingMessage("Successfully minted a Doodle Noodle!!");
              gettingNFT(false);
            });
            gettingNFT(false);
          dispatch(fetchData(blockchain.account));
        } else {
          gettingNFT(false);
          settingMessage("Account not whitelisted for presale");
        }
      } catch (e) {
        console.log("Something went wrong: ", e);
        settingMessage("An error occured, try minting again!");
        gettingNFT(false);
      }
    }
  };

  useEffect(() => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  }, [blockchain.smartContract, dispatch]);

  return (
    <div className="dappContainer">
      <s.Screen>
        {blockchain.account === "" || blockchain.smartContract === null ? (
          <s.Container flex={1} ai={"center"} jc={"center"}>
            <img src={logo} className="App-logo"></img>
            <s.TextTitle>Connect to the Blockchain</s.TextTitle>
            <s.TextDescription>0.06 Eth Per Doodle</s.TextDescription>
            <s.SpacerSmall />
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(connect());
              }}
              className="mintButton"
            >
              Connect
            </button>
            <s.SpacerSmall />
            {blockchain.errorMsg !== "" ? (
              <s.TextDescription>{blockchain.errorMsg}</s.TextDescription>
            ) : null}
          </s.Container>
        ) : (
          <s.Container flex={1} ai={"center"} style={{ padding: 24 }}>
            <img src={logo} className="App-logo"></img>
            <p>{message}</p>
            <input
              disabled={nft}
              type={"number"}
              defaultValue={1}
              className="inputCount"
              max={5}
              min={1}
              onChange={(event) => setAmount(event.target.value)}
              onKeyDown={(event) => {
                event.preventDefault();
              }}
            ></input>
            <button
              disabled={nft}
              onClick={(e) => {
                e.preventDefault();
                getDoodle(amount);
              }}
              className="mintButton"
            >
              Claim NFT(s)
            </button>
            <s.SpacerSmall />
          </s.Container>
        )}
      </s.Screen>
    </div>
  );
}

export default Dapp;
