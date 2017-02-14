export function setGeneral(address, value) {
  return {
    type: "GENERAL",
    key: address,
    value: value
  }
}
