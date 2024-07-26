import { Address } from "ton-core";
import { useJettonContract } from "../hooks/useJettonContract";
import { useTonConnect } from "../hooks/useTonConnect";
import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Button,
  Ellipsis,
} from "./styled/styled";

export function Jetton() {
  const {connected, wallet} = useTonConnect()
  const {jettonWalletAddress, balance, mint} = useJettonContract()

  return (
    <Card title="Jetton">
      <FlexBoxCol>
        <h3>Jetton</h3>
        <FlexBoxRow>
          Wallet
          <Ellipsis>{ wallet ? Address.parse(wallet as string).toString() : "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Jetton Wallet
          <Ellipsis>{jettonWalletAddress ? jettonWalletAddress : "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Balance
          <div>{balance ?? "Loading..."}</div>
        </FlexBoxRow>
        <div className="flex items-center justify-center min-h-screen">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Jetton</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Upload Image
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="file"
            id="image"
            name="image"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jetton-name">
            Jetton Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="jetton-name"
            name="jetton-name"
            placeholder="Enter Jetton Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ticker">
            Ticker
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="ticker"
            name="ticker"
            placeholder="Enter Ticker"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="description"
            name="description"
            placeholder="Enter Description"
            rows={4}
          ></textarea>
        </div>

      </form>
    </div>
  </div>
        <Button
          disabled={!connected} onClick={mint}>
          Mint jettons
        </Button>
      </FlexBoxCol>
    </Card>
  );
}
