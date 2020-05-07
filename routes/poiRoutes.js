const express = require('express');
const debug = require('debug')('app:poiRoutes');

// const proxyurl = 'https://cors-anywhere.herokuapp.com/';

const poiRouter = express.Router();

module.exports = function router() {
    poiRouter.route('/')
        .get((req, res) => {
            debug('poiRouter...');
            res.send('https://maps.googleapis.com/maps/api/place/textsearch/json?query=SuraKoreanRestaurant&key=AIzaSyCdj1_BDkG85qRAPlY9L93f4DVV4EQ5DOQ');
        });
    return poiRouter;
};


// const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=SuraKoreanRestaurant&key=AIzaSyCdj1_BDkG85qRAPlY9L93f4DVV4EQ5DOQ';
// fetch(url, {mode: 'no-cors'})
//     .then(res => res.json())
//     .then(data => console.log('Output: ', data))
//     .catch(err => console.error(err));

// // function status(response) {
// //     if (response.status >= 200 && response.status < 300) {
// //       return Promise.resolve(response)
// //     } else {
// //       return Promise.reject(new Error(response.statusText))
// //     }
// //   }
  
// //   function json(response) {
// //     return response.json()
// //   }
  
// // fetch('users.json')
// //     .then(status)
// //     .then(json)
// //     .then(function(data) {
// //       console.log('Request succeeded with JSON response', data);
// //     }).catch(function(error) {
// //       console.log('Request failed', error);
// //     });



// const data = { username: 'example' };

// fetch('http://127.0.0.1:5500/poi', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });