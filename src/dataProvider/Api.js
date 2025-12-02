class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._header = headers;
  }

  //convertir la respuesta el JSON
  _handleServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  updateCard(cardId, like) {
    return fetch(`${this._baseUrl}/updateCard/${cardId}`, {
      method: "PATCH",
      headers: this._header,
      body: JSON.stringify({
        like,
      }),
    }).then(this._handleServerResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/deleteCard/${cardId}`, {
      method: "DELETE",
      headers: this._header,
    }).then(this._handleServerResponse);
  }

  getAllCards() {
    return fetch(`${this._baseUrl}/getAllCards`, {
      method: "GET",
      headers: this._header,
    }).then(this._handleServerResponse);
  }
}
const api = new Api({
  baseUrl: "https://exercice-3-1.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
