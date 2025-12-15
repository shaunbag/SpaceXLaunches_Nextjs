export async function GET() {
    
  const response = await fetch("https://api.spacexdata.com/v2/launches")

  const data = await response.json()
  console.log(data)
  
  return Response.json(data)
}