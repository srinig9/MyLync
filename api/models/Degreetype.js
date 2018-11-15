/**
 * Degreetype.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
		title: {
			type: 'string'
		},
		status: {
			type: 'integer',
			defaultsTo:1
		},
		sort_order: {
			type: 'integer',
			defaultsTo:0
		},
    }
};