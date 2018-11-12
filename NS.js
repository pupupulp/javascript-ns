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
	 * [Namespace for client scripts]
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
	 * [Namespace for user event scripts]
	 * @type {Object}
	 */
	event: {
		/**
		 * [beforeLoad description]
		 * @param  {[type]}   type       ['create', 'edit', 'view',
		 * 	                              'copy', 'print', 'email',
		 * 	                              'quickview']
		 * @param  {Object}   form       [nlobjForm]
		 * @param  {Object}   request    [nlobjRequest]
		 * @param  {Function} callback   [description]
		 * @return {[type]}              [description]
		 */
		beforeLoad: function(type, formObj = {}, request = {}, callback) {
			return callback({
				type: type,
				form: form,
				request: request
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
	 * [Namespace for logging scripts]
	 * @type {Object}
	 */
	log: {
		/**
		 * [error description]
		 * @param  {Object} error  [Error object from try catch block]
		 * @return {[type]}        [description]
		 */
		error: function(error = {}) {
			nlapiLogException('ERROR', error.getCode(), error.getDetails());
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
	 * [Namespace for context scripts]
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
		},
		/**
		 * [getUser description]
		 * @return {[type]} [description]
		 */
		getUser: function() {
			return nlapiGetContext().getUser();
		},
		/**
		 * [getPercentComplete description]
		 * @return {[type]} [description]
		 */
		getPercentComplete() {
			return nlapiGetContext().getPercentComplete();
		},
		/**
		 * [getRemainingUsage description]
		 * @return {[type]} [description]
		 */
		getRemainingUsage: function() {
			return nlapiGetContext().getRemainingUsage();
		},
		/**
		 * [getScriptId description]
		 * @return {[type]} [description]
		 */
		getScriptId: function() {
			return nlapiGetContext().getScriptId();
		},
		/**
		 * [getDeploymentId description]
		 * @return {[type]} [description]
		 */
		getDeploymentId: function() {
			return nlapiGetContext().getDeploymentId();
		}
	},
	/**
	 * [Namespace for suitelet scripts]
	 * @type {Object}
	 */
	suitelet: {
		/**
		 * [init description]
		 * @param  {Object}   request  [description]
		 * @param  {Object}   response [description]
		 * @param  {Function} callback [description]
		 * @return {[type]}            [description]
		 */
		init: function(request = {}, response = {}, callback) {
			return callback({
				request: request,
				response: response
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
		},
		/**
		 * [PUT description]
		 * @param {Function} callback [description]
		 */
		PUT: function(callback) {
			return callback();
		},
		/**
		 * [DELETE description]
		 * @param {Function} callback [description]
		 */
		DELETE: function(callback) {
			return callback();
		}
	},
	/**
	 * [Namespace for restlet scripts]
	 * @type {Object}
	 */
	restlet: {
		/**
		 * [init description]
		 * @param  {Object} defaults [description]
		 * @return {[type]}          [description]
		 */
		init: function(defaults = {}) {
			var config = defaults,
				get = function(key) {
					if(config.hasOwnProperty(key)) return config[key];
				};

			return {
				get: get
			};
		},
		/**
		 * [auth description]
		 * @param  {Object} credentials [description]
		 * @return {[type]}             [description]
		 */
		auth: function(credentials = {}) {
			return "NLAuth " + 
				"nlauth_account="+ credentials.account + ", " +
				"nlauth_email="+ credentials.email + ", " +
				"nlauth_signature="+ credentials.password + ", " +
				"nlauth_role="+ credentials.role;
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
		},
		/**
		 * [PUT description]
		 * @param {Function} callback [description]
		 */
		PUT: function(callback) {
			return callback();
		},
		/**
		 * [DELETE description]
		 * @param {Function} callback [description]
		 */
		DELETE: function(callback) {
			return callback();
		}
	},
	/**
	 * [Namespace for portlet scripts]
	 * @type {Object}
	 */
	portlet: {
		/**
		 * [init description]
		 * @param  {Object}   portlet  [description]
		 * @param  {[type]}   column   [description]
		 * @param  {Function} callback [description]
		 * @return {[type]}            [description]
		 */
		init: function(portlet = {}, column, callback) {
			return callback({
				portlet: portlet,
				column: column
			});
		}
	},
	/**
	 * [Namespace for record API]
	 * @type {Object}
	 */
	record: {
		/**
		 * [attach description]
		 * @param  {Object} record     [description]
		 * @param  {Object} attributes [description]
		 * @return {[type]}            [description]
		 */
		attach: function(record = {}, attributes = {}) {
			return nlapiAttachRecord(
				record.typeId, 
				record.id, 
				record.targetTypeId, 
				record.targetId, 
				attributes
			);
		},
		/**
		 * [copy description]
		 * @param  {Object} record   [description]
		 * @param  {Object} defaults [description]
		 * @return {[type]}          [description]
		 */
		copy: function(record = {}, defaults = {}) {
			return nlapiCopyRecord(
				record.typeId,
				record.id,
				defaults
			);
		},
		/**
		 * [createCSVImport description]
		 * @return {[type]} [description]
		 */
		createCSVImport: function() {
			nlapiCreateCSVImport();
		},
	}
};