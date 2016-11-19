
export function getChallenges() {
  const challenges = fetch('http://localhost:5000/api/v1/challenges').then(res => {
    return res.json()
  }).then(res => {
    return res
  })
  return {type: "GET_CHALLENGES", payload: challenges}
}