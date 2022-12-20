/* eslint-disable no-undef */

'use strict';

const request = require('supertest');
const app = require('./app');

describe('Test the recipes service', () => {
    test('GET /recipes succeeds', () => {
        return request(app)
	    .get('/recipes')
	    .expect(200);
    });

    test('GET /recipes returns JSON', () => {
        return request(app)
	    .get('/recipes')
	    .expect('Content-type', /json/);
    });

    test('GET /recipes includes carbonara', () => {
        return request(app)
	    .get('/recipes')
	    .expect(/carbonara/);
    });

    test('GET /recipe/carbonara succeeds', () => {
        return request(app)
	    .get('/recipe/carbonara')
	    .expect(200);
    });

    test('POST /recipe/new', () => {
        const params = { key: 'santa', instructions: 'Mix holly, cranberries and carrots for an unresonably long time and dress in ridiculous clothes' };
        return request(app)
        .post('/recipe/new')
        .send(params)
	    .expect(200);
    });
});
