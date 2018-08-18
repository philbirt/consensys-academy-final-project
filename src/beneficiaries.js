export const beneficiaries = [
  {
    "id": 1,
    "name": "Altoids",
    "address": "0x7E155a0d7AB1ecEc24E9cCaA99104291655014C8",
    "image": "https://ipfs.io/ipfs/QmduhWCRat5U6MKR7znqyqRetYQNRavhoQ1QHaVDiozJtV"
  },
  {
    "id": 2,
    "name": "DoubleMint Gum",
    "address": "0xafBCC39f474baf9596C1135522810d5f409DDE0F",
    "image": "https://ipfs.io/ipfs/QmTFiNbw7gtjDbPncPRHvv2isverGts1aedEnvkffiocfg"
  },
  {
    "id": 3,
    "name": "Peppermint Patties",
    "address": "0x6330a553fc93768f612722bb8c2ec78ac90b3bbc",
    "image": "https://ipfs.io/ipfs/QmNkT4vWVPYtJqPGVGwzEnx8C3UbKwm2GXJjByfdLeCLRe"
  },
]

export function beneficiaryById(id) {
  return beneficiaries.filter(beneficiary => {
    return beneficiary.id === id
  })[0];
}
