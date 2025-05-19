export async function GET(request: Request) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=21.022816&lon=105.806563&appid=${process.env.OPENWEATHERAPI}&units=metric&lang=vi`)
  const data = await res.json()

  console.log(data)

  return Response.json({
    code: data.weather[0].icon,
    temperature: data.main.temp
  })
}
