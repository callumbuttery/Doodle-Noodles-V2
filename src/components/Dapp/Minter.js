import "../../css/App.css";
import styled from "styled-components";
import { ethers } from "ethers";
import logo from "../../imgs/Logo2.png";
import axios from "axios";
import Web3 from "web3";
import React, { useEffect, useState } from "react";
import * as card from "../../css/Styles";

function Minter() {
    return (
        <div dappContainer>
            <card.card>
                    <card.Container flex={1} ai={"center"} justifyContent={"center"}>
                        <card.Title>MINT HERE</card.Title>
                        <card.Description>Each Noodle is 0.06Ξ. Mint limit is 5 per wallet.</card.Description>
                        <card.SpacerSmall />
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                            className="mintButton"
                        >
                            CONNECT
                        </button>
                        <card.SpacerSmall />
                    </card.Container>
            </card.card>

        </div>
    )
}

export default Minter;