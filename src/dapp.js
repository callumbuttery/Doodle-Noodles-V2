import React, { useEffect, useState, useRef } from "react";
import "./css/App.css";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./css/globalStyles";
import styled from "styled-components";
import { create } from "ipfs-http-client";
import logo from "./imgs/Logo2.png";

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
  const [message, settingMessage] = useState("");
  const [amount, setAmount] = useState(1);

  const getDoodle = (amount) => {
    gettingNFT(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, amount)
      .send({
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((0.06 * amount).toString(), "ether"),
      })
      .once("error", (err) => {
        settingMessage("The following error occurred: ", err);
        gettingNFT(false);
      })
      .then((recipt) => {
        settingMessage("Successfully minted a Doodle Noodle!");
        gettingNFT(false);
      });
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
