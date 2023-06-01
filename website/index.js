const api_endpoint = 'http://id.execute-api.localhost.localstack.cloud:4566/api/';

const showConfirmation = () => {
    document.getElementById('confirmation-section').innerText = 'Success!!';
}

const submitData = () => {
    // Get the data from each element on the form.
    const accountID = document.getElementById('accountID');
    // This variable stores all the data.
    let data = {
        accountID: accountID.value
    }

    fetch(api_endpoint + 'BankPayments/account/' + 'accountID.value')
        .then(response => response.json())
        .then(showData);

    showConfirmation();
}

const showData = (payload) => {
    document.getElementById('data-dump').innerText = JSON.stringify(payload);
    console.log(payload);
}

