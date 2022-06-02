const stateList = require('../data/state-data')
const districtList = require('../data/district-data')
const townshipList = require('../data/township-data')
const townList = require('../data/town-data')
const wardList = require('../data/wards-data')
const villagetractsList = require('../data/villagetracts-data')
const villageList = require('../data/village-data')
const constituencyList = require('../data/constituency-data')
const partyList = require('../data/party-data')
const pcList = require('../data/pc-data')
const officeList = require('../data/office-data')
const candidateList = require('../data/candidate-data')
const voterList = require('../data/voter-data')
const userList = require('../data/user-data')

exports.seed = function(knex) {

  return knex('user').del()
    .then(function(){
    return knex('voter').del()
    })
    .then(function(){
      return knex('candidate').del()
      })
    .then(function(){
      return knex('office').del()
      })
    .then(function(){
      return knex('party_constituency').del()
      })
    .then(function(){
      return knex('party').del()
      })
    .then(function(){
      return knex('constituency').del()
      })
    .then(function(){
      return knex('village').del()
      })
    .then(function(){
      return knex('village_tracts').del()
      })
    .then(function(){
      return knex('wards').del()
      })
    .then(function(){
      return knex('town').del()
      })
    .then(function(){
      return knex('township').del()
      })
    .then(function(){
      return knex('district').del()
      })
    .then(function(){
      return knex('state').del()
      })
    .then(function () {
      return knex('state').insert(stateList);
    })
    .then(function () {
      return knex('district').insert(districtList);
    })
    .then(function () {
      return knex('township').insert(townshipList);
    })
    .then(function () {
      return knex('town').insert(townList);
    })
    .then(function () {
      return knex('wards').insert(wardList);
    })
    .then(function () {
      return knex('village_tracts').insert(villagetractsList);
    })
    .then(function () {
      return knex('village').insert(villageList);
    })
    .then(function () {
      return knex('constituency').insert(constituencyList);
    })
    .then(function () {
      return knex('party').insert(partyList);
    })
    .then(function () {
      return knex('party_constituency').insert(pcList);
    })
    .then(function () {
      return knex('office').insert(officeList);
    })
    .then(function () {
      return knex('candidate').insert(candidateList);
    })
    .then(function () {
      return knex('voter').insert(voterList);
    })
    .then(function () {
      return knex('user').insert(userList);
    });
};
