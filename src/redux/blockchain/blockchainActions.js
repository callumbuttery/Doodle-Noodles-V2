// constants
import Web3 from "web3";
import SmartContract from "../../contracts/SmartContract.json";
import { ethers } from "ethers";
import { fetchData } from "../data/dataActions";
import { abi } from "./abi";

const { ethereum } = window;
const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const connect = () => {
  return async (dispatch) => {
    console.log('abi: ', abi);

    dispatch(connectRequest());
  
    if (window.ethereum) {
      let web3 = new Web3(window.ethereum);
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const networkId = await window.ethereum.request({
          method: "net_version",
        });
        console.log(process.env.REACT_APP_NETWORK_ID);
        if (networkId == process.env.REACT_APP_NETWORK_ID) {
          console.log(process.env.REACT_APP_CONTRACT_ADDRESS);
          //add abi
          const contract = new ethers.Contract(
            process.env.REACT_APP_CONTRACT_ADDRESS,
            abi,
            signer
          );

          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: contract,
            })
          )
          console.log("test");
          // const SmartContractObj = new web3.eth.Contract(
          //   //originals from tutorial
          //   //SmartContract.abi,
          //   //NetworkData.address
          //   //);
          //   dispatch(
          //     connectSuccess({
          //       account: accounts[0],
          //       smartContract: contract,
          //     })
          //   )
          //);
          // Add listeners start
          window.ethereum.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch(connectFailed("Change network to ETH."));
        }
      } catch (err) {
        console.log(err);
        dispatch(connectFailed("Something went wrong."));
      }
    } else {
      dispatch(connectFailed("Install Metamask."));
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
