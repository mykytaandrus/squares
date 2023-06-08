export const getTableFields = (param: number | undefined) => {
  if (param) {
    const result = []

    for (let i = 1; i <= param; i++) {
      result.push(i)
    }

    return result
  }
}
