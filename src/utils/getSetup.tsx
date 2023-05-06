export const fetchSetup = async () => {
  const response = await fetch('https://60816d9073292b0017cdd833.mockapi.io/modes')
  return await response.json()
}
