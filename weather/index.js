'use strict';

const YQL = require('yql');
const _ = require('lodash');

module.exports = (opts, callback) => {
	//inputs send to opts object
	opts = opts || [];

	let query;

	/**
	 * According the input, set the weather object to the default args
	 * or set with the input args
	 * @opts inputs of the user
	 * @query will search the weather on Webservice
	**/
	if (_.isEmpty(opts)) {
		query = new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="Dhaka, Bangladesh")');
	} else {
		query = new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + opts[0] + ', ' + opts[1] + '")');
	}

	/**
	 * Execution of the query
	 * @query will search the weather on Webservice
	**/
	query.exec((err, response) => {
		if (err) {
			return callback(err);
		}

		callback(null, response);
	});
};
