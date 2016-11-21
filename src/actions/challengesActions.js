
export function getChallenges() {
  const challenges = fetch(`${process.env.API_HOST}/api/v1/challenges`).then(res => {
    return res.json()
  }).then(res => {
    return res
  })
  return {type: "GET_CHALLENGES", payload: challenges}
}