import React, { useEffect, useState, useRef } from "react";
import "./css/App.css";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/Actions";
import { fetchData } from "./redux/data/Actions";
import * as card from "./css/Styles";
import styled from "styled-components";
import logo from "./imgs/Logo2.png";
import { ethers } from "ethers";
import axios from "axios";
import Web3 from "web3";


export const StyledButton = styled.button`
  padding: 8px;
  background-color: #ffffff;
  color: #fffff;
`;

function Dapp() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [nft, gettingNFT] = useState(false);
  const [message, settingMessage] = useState("Buy a Doodle Noodle");
  const [amount, setAmount] = useState(1);

  const getCount = (event) => {
    console.log(event.target.value);
    if (event.target.value > 5 || event.target.value < 1) {
      settingMessage("Please enter an amount betwen 1 and 5");
    } else {
      setAmount(event.target.value);
      settingMessage("Ready to mint " + event.target.value + " Doodle Noodles");
    }
  }

  const getDoodle = async (amount) => {
    let web3 = new Web3(window.ethereum);

    var costing = web3.utils.toWei(
      (amount * process.env.REACT_APP_MINT_COST).toString(),
      "ether"
    );

    if (process.env.REACT_APP_MINTACTIVE == "true") {
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
    } else if (process.env.REACT_APP_PRESALEACTIVE == "true") {
      console.log("Attempting to mint presale");
      try {
        gettingNFT(true);

        const response = await axios.post(
          `/.netlify/functions/validate`,
          blockchain.account
        );

        const verified = response.data.verified;
        const confirmedHash = response.data.confirmedHash;

        if (verified != false) {

          const signature = confirmedHash;

          let sig = ethers.utils.splitSignature(signature);
  
          console.log(sig);

          blockchain.smartContract.methods
            .presaleMintNoodle(amount, sig.r, sig.s, sig.v)
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
          gettingNFT(true);
          settingMessage("Account not whitelisted for presale");
        }
      } catch (e) {
        console.log("Something went wrong: ", e);
        settingMessage("An error occured, try minting again!");
        gettingNFT(false);
      }
    }
    else {
      settingMessage("Presale / Minting not yet active");
      gettingNFT(false);
    }
  };

  useEffect(() => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  }, [blockchain.smartContract, dispatch]);

  return (
    <div className="dappContainer">
      <card.card>
        {blockchain.account === "" || blockchain.smartContract === null ? (
          <card.Container flex={1} ai={"center"} justifyContent={"center"}>
            <img src={logo} className="App-logo"></img>
            <card.Title>Connect to the Blockchain</card.Title>
            <card.Description>0.06 Eth Per Doodle</card.Description>
            <card.SpacerSmall />
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(connect());
              }}
              className="mintButton"
            >
              Connect
            </button>
            <card.SpacerSmall />
            {blockchain.errorMsg !== "" ? (
              <card.Description>{blockchain.errorMsg}</card.Description>
            ) : null}
          </card.Container>
        ) : (
          <card.Container flex={1} ai={"center"} style={{ padding: 24 }}>
            <img src={logo} className="App-logo"></img>
            <p>{message}</p>
            <input
              disabled={nft}
              type={"number"}
              defaultValue={1}
              className="inputCount"
              max={5}
              min={1}
              onChange={getCount}
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
            <card.SpacerSmall />
          </card.Container>
        )}
      </card.card>
    </div>
  );
}

export default Dapp;
