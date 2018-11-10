/**
 * This is an opensource project that aims to provide useful wrappers for 
 * faster development when using Netsuite API v1.0.
 *
 * Feel free to add more wrappers under categories provided or make another one
 * if the functionality requires.
 *
 */


/** @type {Object} Main namespace for the package/library */
var NS = {
	/**
	 * All wrappers for client scripts
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
			return callback(type);
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
			return callback(sublistId, fieldId, sublistLine);
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
			return callback(sublistId, fieldId, sublistLine);
		},
		/**
		 * [eventPostSourcing description]
		 * @param  {[type]}   sublistId [description]
		 * @param  {[type]}   fieldId   [description]
		 * @param  {Function} callback  [description]
		 * @return {[type]}             [description]
		 */
		eventPostSourcing: function(sublistId, fieldId, callback) {
			return callback(sublistId, fieldId);
		},
		/**
		 * [eventLineInit description]
		 * @param  {[type]}   sublistId [description]
		 * @param  {Function} callback  [description]
		 * @return {[type]}             [description]
		 */
		eventLineInit: function(sublistId, callback) {
			return callback(sublistId);
		},
		/**
		 * [eventValidateLine description]
		 * @param  {[type]}   sublistId [description]
		 * @param  {Function} callback  [description]
		 * @return {[type]}             [description]
		 */
		eventValidateLine: function(sublistId, callback) {
			return callback(sublistId);
		},
		/**
		 * [eventRecalc description]
		 * @param  {[type]}   sublistId [description]
		 * @param  {Function} callback  [description]
		 * @return {[type]}             [description]
		 */
		eventRecalc: function(sublistId, callback) {
			return callback(sublistId);
		},
		/**
		 * [eventValidateInsert description]
		 * @param  {[type]}   sublistId [description]
		 * @param  {Function} callback  [description]
		 * @return {[type]}             [description]
		 */
		eventValidateInsert: function(sublistId, callback) {
			return callback(sublistId);
		},
		/**
		 * [eventValidateDelete description]
		 * @param  {[type]}   sublistId [description]
		 * @param  {Function} callback  [description]
		 * @return {[type]}             [description]
		 */
		eventValidateDelete: function(sublistId, callback) {
			return callback(sublistId);
		}
	}
};