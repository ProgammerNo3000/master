export function Greeting(props) {
console.log(props.timeOfDay)
const time = props.timeOfDay;
 {

  if (time == "morning") {
    return <h1>Good morning</h1>
  } else if (time == "afternoon") {
    return <h1>Good afternoon</h1>
  }  else if (time == "evening") {
    return <h1>Good Evening </h1>
}
}
}



