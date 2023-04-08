var api_url = 'https://api-dot-cloud-test-1232.ew.r.appspot.com/'

function GenerateNumbers()
{
    fetch(api_url+'GenerateNumbers')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
    