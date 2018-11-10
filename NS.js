/**
 * This is an opensource project that aims to provide useful wrappers for 
 * faster development when using Netsuite API v1.0. Some wrappers might seem
 * longer than original function call which may be an issue to some, but it
 * may be a reasonable cost in exchange for an organized and standardized API
 * function groupings through the use of namespaces which targets to increase
 * code readability since most of the scripting on Netsuite are on a single file.
 *
 * Feel free to add more wrappers under namespaces provided or make another one
 * if the functionality requires.
 *
 */


/** @type {Object} Main namespace for the package/library */
var NS = {
	/**
	 * [All wrappers for client scripts]
	 * @type {Object}
	 */
	client: {
		/**
		 * [pageInit description]
		 * @param  {[type]}   type     ['create', 'copy', 'edit']
		 * @param  {Function} callback [description]
		 * @return {[type]}            [description]
		 */
		eventPageInit: function(type, callback) {
			return callback({
				type: type
			});
		},
		/**
		 * [eventSaveRecord description]
		 * @param  {Function} callback [description]
		 * @return {[type]}            [description]
		 */
		eventSaveRecord: function(callback) {
			return callback();
		},
		/**
		 * [eventValidateField description]
		 * @param  {[type]}   sublistId   [description]
		 * @param  {[type]}   fieldId     [description]
		 * @param  {[type]}   sublistLine [starts at 1]
		 * @param  {Function} callback    [description]
		 * @return {[type]}               [description]
		 */
		eventValidateField: function(sublistId, fieldId, sublistLine, callback) {
			return callback({
				sublistId: sublistId,
				fieldId: fieldId,
				sublistLine: sublistLine
			});
		},
		/**
		 * [eventFieldChanged description]
		 * @param  {[type]}   sublistId   [description]
		 * @param  {[type]}   fieldId     [description]
		 * @param  {[type]}   sublistLine [starts at 1]
		 * @param  {Function} callback    [description]
		 * @return {[type]}               [description]
		 */
		eventFieldChanged: function(sublistId, fieldId, sublistLine, callback) {
			return callback({
				sublistId: sublistId,
				fieldId: fieldId,
				sublistLine: sublistLine
			});
		},
		/**
		 * [eventPostSourcing description]
		 * @param  {[type]}   sublistId [description]
		 * @param  {[type]}   fieldId   [description]
		 * @param  {Function} callback  [description]
		 * @return {[type]}             [description]
		 */
		eventPostSourcing: function(sublistId, fieldId, callback) {
			return callback({
				sublistId: sublistId,
				fieldId: fieldId
			});
		},
		/**
		 * [eventLineInit description]
		 * @param  {[type]}   sublistId [description]
		 * @param  {Function} callback  [description]
		 * @return {[type]}             [description]
		 */
		eventLineInit: function(sublistId, callback) {
			return callback({
				sublistId: sublistId
			});
		},
		/**
		 * [eventValidateLine description]
		 * @param  {[type]}   sublistId [description]
		 * @param  {Function} callback  [description]
		 * @return {[type]}             [description]
		 */
		eventValidateLine: function(sublistId, callback) {
			return callback({
				sublistId: sublistId
			});
		},
		/**
		 * [eventRecalc description]
		 * @param  {[type]}   sublistId [description]
		 * @param  {Function} callback  [description]
		 * @return {[type]}             [description]
		 */
		eventRecalc: function(sublistId, callback) {
			return callback({
				sublistId: sublistId
			});
		},
		/**
		 * [eventValidateInsert description]
		 * @param  {[type]}   sublistId [description]
		 * @param  {Function} callback  [description]
		 * @return {[type]}             [description]
		 */
		eventValidateInsert: function(sublistId, callback) {
			return callback({
				sublistId: sublistId
			});
		},
		/**
		 * [eventValidateDelete description]
		 * @param  {[type]}   sublistId [description]
		 * @param  {Function} callback  [description]
		 * @return {[type]}             [description]
		 */
		eventValidateDelete: function(sublistId, callback) {
			return callback({
				sublistId: sublistId
			});
		}
	},
	/**
	 * [All wrappers for user event scripts]
	 * @type {Object}
	 */
	event: {
		/**
		 * [beforeLoad description]
		 * @param  {[type]}   type       ['create', 'edit', 'view',
		 * 	                              'copy', 'print', 'email',
		 * 	                              'quickview']
		 * @param  {[type]}   formObj    [nlobjForm]
		 * @param  {[type]}   requestObj [nlobjRequest]
		 * @param  {Function} callback   [description]
		 * @return {[type]}              [description]
		 */
		beforeLoad: function(type, formObj, requestObj, callback) {
			return callback({
				type: type,
				formObj: formObj,
				requestObj: requestObj
			});
		},
		/**
		 * [beforeSubmit description]
		 * @param  {[type]}   type     ['create', 'edit', 'delete',
		 * 	                            'xedit (inline edit)',
		 * 	                            'approve', 'reject', 'cancel',
		 * 	                            'pack', 'ship',
		 * 	                            'markcomplete', 'reassign',
		 * 	                            'editforecast']
		 * @param  {Function} callback [description]
		 * @return {[type]}            [description]
		 */
		beforeSubmit: function(type, callback) {
			return callback({
				type: type
			});
		},
		/**
		 * [afterSubmit description]
		 * @param  {[type]}   type     ['create', 'edit', 'delete',
		 * 	                            'xedit (inline edit)',
		 * 	                            'approve', 'reject', 'cancel',
		 * 	                            'pack', 'ship', 'dropship',
		 * 	                            'specialorder', 'orderitems',
		 * 	                            'paybills']
		 * @param  {Function} callback [description]
		 * @return {[type]}            [description]
		 */
		afterSubmit: function(type, callback) {
			return callback({
				type: type
			});
		},
	},
	/**
	 * [All wrappers for logging]
	 * @type {Object}
	 */
	log: {
		/**
		 * [error description]
		 * @param  {[type]} errObj [Error object from try catch block]
		 * @return {[type]}        [description]
		 */
		error: function(errorObj) {
			nlapiLogException('ERROR', errorObj.getCode(), errorObj.getDetails());
		},
		/**
		 * [execution description]
		 * @param  {[type]} message [description]
		 * @return {[type]}         [description]
		 */
		execution: function(message) {
			nlapiLogExecution('DEBUG', message);
		}
	},
	/**
	 * [All wrappers for context]
	 * @type {Object}
	 */
	context: {
		/**
		 * [get description]
		 * @return {[type]} [description]
		 */
		get: function() {
			return nlapiGetContext();
		},
		/**
		 * [getExecution description]
		 * @return {[type]} [description]
		 */
		getExecution: function() {
			return nlapiGetContext().getExecutionContext();
		}
	},
	/**
	 * [suitelet description]
	 * @type {Object}
	 */
	suitelet: {
		/**
		 * [init description]
		 * @param  {[type]}   requestObj  [description]
		 * @param  {[type]}   responseObj [description]
		 * @param  {Function} callback    [description]
		 * @return {[type]}               [description]
		 */
		init: function(requestObj, responseObj, callback) {
			return callback({
				requestObj: requestObj,
				responseObj: responseObj
			});
		},
		/**
		 * [GET description]
		 * @param {Function} callback [description]
		 */
		GET: function(callback) {
			return callback();
		},
		/**
		 * [POST description]
		 * @param {Function} callback [description]
		 */
		POST: function(callback) {
			return callback();
		}
	}
};