var api_url = 'https://api-dot-cloud-test-1232.ew.r.appspot.com/'

function GenerateNumbers()
{
    fetch(api_url+'GenerateNumbers', {
        method: 'GET',
        mode: 'no-cors'
    })
        .then(response => {
    })
        .catch(error => {
    });
}
    
