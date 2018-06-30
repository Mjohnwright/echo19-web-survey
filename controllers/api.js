// Dependencies
// =============================================================
const path = require('path')
const express = require('express')
const db = require('../models')

// Routes
// =============================================================

module.exports = function (app) {

  app.put('/api/signup', function (req, res) {
    const data = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      inOrOut: req.body.inOrOut,
      cooking: req.body.cooking,
      gardening: req.body.gardening,
      painting: req.body.painting,
      carpentry: req.body.carpentry,
      plumbing: req.body.plumbing,
      electrical: req.body.electrical,
      publicRelations: req.body.publicRelations,
      marketing: req.body.marketing,
      fundRaising: req.body.fundRaising,
      programming: req.body.programming,
      sales: req.body.sales,
      teaching: req.body.teaching
    }
    db.Member.update(data, {
      where: {
        id: req.user.id
      },
      returning: true,
      plain: true
    })
      .then(function (result) {
        res.status(200).send({
          redirectTo: '/private'
        })
      })
  })

  // opportunities route loads opportunities.handlebars
  app.get('/opportunities', function (req, res) {
    res.render(path.join(__dirname, '../views/opportunities.handlebars'))
  })

  app.post('/api/opportunities', function (req, res) {
    db.Opportunity.create(req.body).then(function (dbOpportunity) {
      if (!dbOpportunity) {
        res.status(500).send('unable to create new event')
      }
      if (dbOpportunity) {
        res.status(200).send({
          redirectTo: '/private'
        })
      }
    })
  })

  app.post('/api/unenroll/:id', function (req, res) {
    db.Member.findOne({
      where: {
        id: req.user.id
      }
    }).then(function (member) {
      db.Opportunity.findAll({
        where: {
          id: parseInt(req.params.id)
        }
      }).then(function (opportunity) {
        member.removeOpportunities(opportunity)
        res.status(200).send()
      })
    })
  })

  app.post('/api/register/:id', function (req, res) {
    db.Member.findOne({
      where: {
        id: req.user.id
      }
    }).then(function (member) {
      db.Opportunity.findAll({
        where: {
          id: parseInt(req.params.id)
        }
      }).then(function (opportunity) {
        member.addOpportunities(opportunity)
        res.status(200).send()
      })
    })
  })
}
