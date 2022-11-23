const token = 'Bearer 6e2b2d5d37a543c1b69668f0051299d3'
const path = 'https://stacks-wallet.bubbleapps.io/version-test/api/1.1/wf'
const headers = {
  'Content-Type': 'application/json',
  Authorization: `${token}`,
}

const getTransactionInput = {
  account: 'account',
  id: 0,
}

const getTransactionsListInput = {
  account: 'account',
}

const getBalanceInput = {
  account: 'account',
}

window.onload = function () {
  if (getTransactionInput) {
    geTransaction(getTransactionInput)
  }
}

const geTransaction = (body) => {
  fetch(`${path}/webflow_get_transaction`, {
    method: 'GET',
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
}

const getBalance = (body) => {
  fetch(`${path}/webflow_balance`, {
    method: 'GET',
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
}

const getTransactionsList = (body) => {
  fetch(`${path}/webflow_transactions`, {
    method: 'GET',
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
}
