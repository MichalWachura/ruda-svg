async function getData(place){
    const url=`https://timezone.abstractapi.com/v1/current_time/?api_key=YOUR_API_KEY&location=${place}`

    const res = await fetch(url)
    data = await res.json()
    time = data.datatime

    document.getElementById('time').innerText=`${place}'s time  = ${time}`
}

document.querySelectorAll('.allPaths')