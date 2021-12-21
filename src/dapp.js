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
    let cost = process.env.REACT_APP_MINT_COST;
    let gasLimit = process.env.REACT_APP_GAS_LIMIT;
    let totalCostInWei = String(cost * amount);

    console.log("Cost: ", totalCostInWei);
    console.log("Gas limit: ", gasLimit);

    //const mintActive = await blockchain.smartContract.mintActive();
    const mintActive = false;
    if (mintActive != false) {
      console.log('hit mint active');
      try {
        gettingNFT(true);

        const mint = await blockchain.smartContract.mint(amount, {
          gasLimit: String(gasLimit),
          from: blockchain.account,
          value: totalCostInWei,
        });

        const finishedMinting = mint.wait();
        settingMessage(
          "Successfully minted a Doodle Noodle: ",
          finishedMinting
        );
        gettingNFT(false);
        dispatch(fetchData(blockchain.account));
      } catch (e) {
        console.log("Something went wrong: ", e);
        settingMessage("An error occured, try minting again!");
        gettingNFT(false);
      }

      // blockchain.smartContract.methods
      //   .mint(blockchain.account, amount)
      //   .send({
      //     gasLimit: String(gasLimit),
      //     from: blockchain.account,
      //     value: totalCostInWei,
      //   })
      //   .once("error", (err) => {
      //     settingMessage("The following error occurred: ", err);
      //     gettingNFT(false);
      //   })
      //   .then((recipt) => {
      //     settingMessage("Successfully minted a Doodle Noodle!");
      //     gettingNFT(false);
      //     console.log(recipt);
      //   });
    } else {
      console.log('hit smart contract mint');
      try {
        gettingNFT(true);
        console.log("signature:", presale.signature);
        let sig = ethers.utils.splitSignature(presale.signature);
        const mint = await blockchain.smartContract.presaleMint(
          amount,
          sig.r,
          sig.s,
          sig.v,
          {
            gasLimit: String(gasLimit),
            from: blockchain.account,
            value: totalCostInWei,
          }
        );
        const finishedMinting = mint.wait();
        console.log(finishedMinting);
        settingMessage(
          "Successfully minted a Doodle Noodle: ",
          finishedMinting
        );
        gettingNFT(false);
        dispatch(fetchData(blockchain.account));
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
            <p>Get a Doodle Noodle</p>
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
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "#16194F",
              }}
            >
              {message}
            </s.TextDescription>
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
