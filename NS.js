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
		beforeLoad: function(type, form = {}, request = {}, callback) {
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
	 * [Namespace for record API scripts]
	 * @type {Object}
	 */
	record: {
		/**
		 * [attach description]
		 * @param  {Object} record     [description]
		 * @param  {Object} target     [description]
		 * @param  {Object} attributes [description]
		 * @return {[type]}            [description]
		 */
		attach: function(record = {}, target = {}, attributes = {}) {
			return nlapiAttachRecord(
				record.typeId, 
				record.id, 
				target.typeId, 
				target.id, 
				attributes
			);
		},
		/**
		 * [detach description]
		 * @param  {Object} record     [description]
		 * @param  {Object} target     [description]
		 * @param  {Object} attributes [description]
		 * @return {[type]}            [description]
		 */
		detach: function(record = {}, target = {}, attributes = {}) {
			return nlapiDetachRecord(
				record.typeId, 
				record.id, 
				target.typeId, 
				target.id, 
				attributes
			);
		},
		/**
		 * [createCSVImport description]
		 * @return {[type]} [description]
		 */
		createCSVImport: function() {
			return nlapiCreateCSVImport();
		},
		/**
		 * [submitCSVImport description]
		 * @param  {Object} csvImport [description]
		 * @return {[type]}           [description]
		 */
		submitCSVImport: function(csvImport = {}) {
			return nlapiSubmitCSVImport(csvImport);
		},
		/**
		 * [createEmailMerger description]
		 * @param  {[type]} templateId [description]
		 * @return {[type]}            [description]
		 */
		createEmailMerger: function(templateId) {
			return nlapiCreateEmailMerger(templateId);
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
		 * [create description]
		 * @param  {[type]} typeId   [description]
		 * @param  {Object} defaults [description]
		 * @return {[type]}          [description]
		 */
		create: function(typeId, defaults = {}) {
			return nlapiCreateRecord(typeId, defaults);
		},
		/**
		 * [delete description]
		 * @param  {Object} record   [description]
		 * @param  {Object} defaults [description]
		 * @return {[type]}          [description]
		 */
		delete: function(record = {}, defaults = {}) {
			return nlapiDeleteRecord(
				record.typeId,
				record.id,
				defaults
			);
		},
		/**
		 * [getNew description]
		 * @return {[type]} [description]
		 */
		getNew: function() {
			return nlapiGetNewRecord();
		},
		/**
		 * [getOld description]
		 * @return {[type]} [description]
		 */
		getOld: function() {
			return nlapiGetOldRecord();
		},
		/**
		 * [getId description]
		 * @return {[type]} [description]
		 */
		getId: function() {
			return nlapiGetRecordId();
		},
		/**
		 * [getType description]
		 * @return {[type]} [description]
		 */
		getType: function() {
			return nlapiGetRecordType();
		},
		/**
		 * [load description]
		 * @param  {Object} record   [description]
		 * @param  {Object} defaults [description]
		 * @return {[type]}          [description]
		 */
		load: function(record = {}, defaults = {}) {
			return nlapiLoadRecord(
				record.typeId,
				record.id,
				defaults
			);
		},
		/**
		 * [submit description]
		 * @param  {Object}  record    [description]
		 * @param  {Boolean} sourcing  [description]
		 * @param  {Boolean} mandatory [description]
		 * @return {[type]}            [description]
		 */
		submit: function(record = {}, sourcing = false, mandatory = false) {
			return nlapiSubmitRecord(record, sourcing, mandatory);
		},
		/**
		 * [print description]
		 * @param  {Object} config [description]
		 * @return {[type]}        [description]
		 */
		print: function(config = {}, properties = {}, locale = false) {
			return nlapiPrintRecord(
				config.type,
				config.trId,
				config.mode,
				properties,
				locale
			);
		},
		/**
		 * [transform description]
		 * @param  {Object} record [description]
		 * @param  {Object} target [description]
		 * @return {[type]}        [description]
		 */
		transform: function(record = {}, target = {}) {
			return nlapiTransformRecord(
				record.typeId,
				record.id,
				target.typeId,
				target.defaults
			);
		},
		/**
		 * [voidTransaction description]
		 * @param  {[type]} type     [description]
		 * @param  {[type]} recordId [description]
		 * @return {[type]}          [description]
		 */
		voidTransaction: function(type, recordId) {
			return nlapiVoidTransaction(type, recordId);
		},
	},
	/**
	 * [Namespace for subrecord API scripts]
	 * @type {Object}
	 */
	subrecord: {
		/**
		 * [createCurrentLineItem description]
		 * @param  {[type]} sublistId [description]
		 * @param  {[type]} fieldId   [description]
		 * @return {[type]}           [description]
		 */
		createCurrentLineItem: function(sublistId, fieldId) {
			return nlapiCreateCurrentLineItemSubrecord(sublistId, fieldId);
		},
		/**
		 * [editCurrentLineItem description]
		 * @param  {[type]} sublistId [description]
		 * @param  {[type]} fieldId   [description]
		 * @return {[type]}           [description]
		 */
		editCurrentLineItem: function(sublistId, fieldId) {
			return nlapiEditCurrentLineItemSubrecord(sublistId, fieldId);
		},
		/**
		 * [removeCurrentLineItem description]
		 * @param  {[type]} sublistId [description]
		 * @param  {[type]} fieldId   [description]
		 * @return {[type]}           [description]
		 */
		removeCurrentLineItem: function(sublistId, fieldId) {
			return nlapiRemoveCurrentLineItemSubrecord(sublistId, fieldId);
		},
		/**
		 * [viewCurrentLineItem description]
		 * @param  {[type]} sublistId [description]
		 * @param  {[type]} fieldId   [description]
		 * @return {[type]}           [description]
		 */
		viewCurrentLineItem: function(sublistId, fieldId) {
			return nlapiViewCurrentLineItemSubrecord(sublistId, fieldId);
		},
		/**
		 * [viewLineItem description]
		 * @param  {[type]} sublistId [description]
		 * @param  {[type]} fieldId   [description]
		 * @param  {[type]} line      [description]
		 * @return {[type]}           [description]
		 */
		viewLineItem: function(sublistId, fieldId, line) {
			return nlapiViewLineItemSubrecord(sublistId, fieldId, line);
		},
		/**
		 * [create description]
		 * @param  {[type]} fieldId [description]
		 * @return {[type]}         [description]
		 */
		create: function(fieldId) {
			return nlapiCreateSubrecord(fieldId);
		},
		/**
		 * [edit description]
		 * @param  {[type]} fieldId [description]
		 * @return {[type]}         [description]
		 */
		edit: function(fieldId) {
			return nlapiEditSubrecord(field);
		},
		/**
		 * [remove description]
		 * @param  {[type]} fieldId [description]
		 * @return {[type]}         [description]
		 */
		remove: function(fieldId) {
			return nlapiRemoveSubrecord(fieldId);
		},
		/**
		 * [view description]
		 * @param  {[type]} fieldId [description]
		 * @return {[type]}         [description]
		 */
		view: function(fieldId) {
			return nlapiViewSubrecord(fieldId);
		}
	},
	/**
	 * [Namespace for field API scripts]
	 * @type {Object}
	 */
	field: {
		/**
		 * [enable description]
		 * @param  {[type]} fieldId [description]
		 * @return {[type]}         [description]
		 */
		enable: function(fieldId) {
			return nlapiDisableField(fieldId, false);
		},
		/**
		 * [disable description]
		 * @param  {[type]} fieldId [description]
		 * @return {[type]}         [description]
		 */
		disable: function(fieldId)  {
			return nlapiDisableField(fieldId, true);
		},
		/**
		 * [get description]
		 * @param  {[type]} fieldId [description]
		 * @return {[type]}         [description]
		 */
		get: function(fieldId) {
			return nlapiGetField(fieldId);
		},
		/**
		 * [getText description]
		 * @param  {[type]} fieldId [description]
		 * @return {[type]}         [description]
		 */
		getText: function(fieldId) {
			return nlapiGetFieldText(fieldId);
		},
		/**
		 * [setText description]
		 * @param {Object}  field  [description]
		 * @param {Boolean} changed [description]
		 * @param {Boolean} sync    [description]
		 */
		setText: function(field = {}, changed = true, sync = false) {
			return nlapiSetFieldText(
				field.id,
				field.text,
				changed,
				sync
			);
		},
		/**
		 * [getSelectionTexts description]
		 * @param  {[type]} fieldId [description]
		 * @return {[type]}         [description]
		 */
		getSelectionTexts: function(fieldId) {
			return nlapiGetFieldTexts(fieldId);
		},
		/**
		 * [setSelectionTexts description]
		 * @param {Object}  field  [description]
		 * @param {Boolean} changed [description]
		 * @param {Boolean} sync    [description]
		 */
		setSelectionTexts: function(field = {}, changed = true, sync = false) {
			return nlapiSetFieldTexts(
				field.id,
				field.texts,
				changed,
				sync
			);
		},
		/**
		 * [getValue description]
		 * @param  {[type]} fieldId [description]
		 * @return {[type]}         [description]
		 */
		getValue: function(fieldId) {
			return nlapiGetFieldValue(fieldId);
		},
		/**
		 * [setValue description]
		 * @param {Object}  field  [description]
		 * @param {Boolean} changed [description]
		 * @param {Boolean} sync    [description]
		 */
		setValue: function(field = {}, changed = true, sync = false) {
			return nlapiSetFieldValue(
				field.id,
				field.value,
				changed,
				sync
			);
		},
		/**
		 * [getSelectionValues description]
		 * @param  {[type]} fieldId [description]
		 * @return {[type]}         [description]
		 */
		getSelectionValues: function(fieldId) {
			return nlapiGetFieldValues(fieldId);
		},
		/**
		 * [setSelectionValues description]
		 * @param {Object}  field   [description]
		 * @param {Boolean} changed [description]
		 * @param {Boolean} sync    [description]
		 */
		setSelectionValues: function(field = {}, changed = true, sync = false) {
			return nlapiSetFieldValues(
				field.id,
				field.values,
				changed,
				sync
			);
		},
		/**
		 * [insertSelectOption description]
		 * @param  {Object} field [description]
		 * @return {[type]}        [description]
		 */
		insertSelectOption: function(field = {}) {
			return nlapiInsertSelectOption(
				field.id,
				field.value,
				field.text,
				field.selected
			);
		},	
		/**
		 * [removeSelectOption description]
		 * @param  {Object} field [description]
		 * @return {[type]}       [description]
		 */
		removeSelectOption: function(field = {}) {
			return nlapiRemoveSelectOption(
				field.id,
				field.value
			);
		},
		/**
		 * [lookup description]
		 * @param  {Object}  config [description]
		 * @param  {Array}   fields [description]
		 * @param  {Boolean} text   [description]
		 * @return {[type]}         [description]
		 */
		lookup: function(config = {}, fields = [], text = false) {
			return nlapiLookupField(
				config.recordTypeId,
				config.recordId,
				text
			);
		},
		/**
		 * [lookupValue description]
		 * @param  {Object} config [description]
		 * @param  {Array}  fields [description]
		 * @return {[type]}        [description]
		 */
		lookupValue: function(config = {}, fields = []) {
			return nlapiLookupField(
				config.recordTypeId,
				config.recordId,
				false
			);
		},
		/**
		 * [lookupText description]
		 * @param  {Object} config [description]
		 * @param  {Array}  fields [description]
		 * @return {[type]}        [description]
		 */
		lookupText: function(config = {}, fields = []) {
			return nlapiLookupField(
				config.recordTypeId,
				config.recordId,
				true
			);
		},
		/**
		 * [submit description]
		 * @param  {Object}  record   [description]
		 * @param  {Object}  field    [description]
		 * @param  {Boolean} sourcing [description]
		 * @return {[type]}           [description]
		 */
		submit: function(record = {}, field = {}, sourcing = false) {
			return nlapiSubmitField(
				record.typeId,
				record.id,
				field.ids,
				field.values,
				sourcing
			);
		}
	},
	/**
	 * [Namespace for sublist API scripts]
	 * @type {Object}
	 */
	sublist: {
		/**
		 * [cancelLineItem description]
		 * @param  {[type]} sublistId [description]
		 * @return {[type]}           [description]
		 */
		cancelLineItem: function(sublistId) {
			return nlapiCancelLineItem(sublistId);
		},
		/**
		 * [commitLineItem description]
		 * @param  {[type]} sublistId [description]
		 * @return {[type]}           [description]
		 */
		commitLineItem: function(sublistId) {
			return nlapiCommitLineItem(sublistId);
		},
		/**
		 * [enableLineItemField description]
		 * @param  {[type]} sublistId [description]
		 * @param  {[type]} fieldId   [description]
		 * @return {[type]}           [description]
		 */
		enableLineItemField: function(sublistId, fieldId) {
			return nlapiDisableLineItemField(sublistId, field, false);
		},
		/**
		 * [disableLineItemField description]
		 * @param  {[type]} sublistId [description]
		 * @param  {[type]} fieldId   [description]
		 * @return {[type]}           [description]
		 */
		disableLineItemField: function(sublistId, fieldId) {
			return nlapiDisableLineItemField(sublistId, field, true);
		},
		/**
		 * [findLineItemMatrixValue description]
		 * @param  {[type]} sublistId [description]
		 * @param  {Object} field     [description]
		 * @return {[type]}           [description]
		 */
		findLineItemMatrixValue: function(sublistId, field = {}) {
			return nlapiFindLineItemMatrixValue(
				sublistId,
				field.id,
				field.value,
				field.column 
			);
		},
		/**
		 * [findLineItemValue description]
		 * @param  {[type]} sublistId [description]
		 * @param  {Object} field     [description]
		 * @return {[type]}           [description]
		 */
		findLineItemValue: function(sublistId, field = {}) {
			return nlapiFindLineItemValue(
				sublistId,
				field.id,
				field.value
			);
		},
		/**
		 * [getCurrentLineItemIndex description]
		 * @param  {[type]} sublistId [description]
		 * @return {[type]}           [description]
		 */
		getCurrentLineItemIndex: function(sublistId) {
			return nlapiGetCurrentLineItemIndex(sublistId);
		},
		/**
		 * [getCurrentLineItemMatrixValue description]
		 * @param  {[type]} sublistId [description]
		 * @param  {Object} field     [description]
		 * @return {[type]}           [description]
		 */
		getCurrentLineItemMatrixValue: function(sublistId, field = {}) {
			return nlapiGetCurrentLineItemMatrixValue(
				sublistId,
				field.id,
				field.column
			);
		},
		/**
		 * [getCurrentLineItemText description]
		 * @param  {[type]} sublistId [description]
		 * @param  {[type]} fieldId   [description]
		 * @return {[type]}           [description]
		 */
		getCurrentLineItemText: function(sublistId, fieldId) {
			return nlapiGetCurrentLineItemText(sublistId, fieldId);
		},
		/**
		 * [getCurrentLineItemValue description]
		 * @param  {[type]} sublistId [description]
		 * @param  {[type]} fieldId   [description]
		 * @return {[type]}           [description]
		 */
		getCurrentLineItemValue: function(sublistId, fieldId) {
			return nlapiGetCurrentLineItemValue(sublistId, fieldId);
		},
		/**
		 * [getCurrentLineItemSelectionValues description]
		 * @param  {[type]} sublistId [description]
		 * @param  {[type]} fieldId   [description]
		 * @return {[type]}           [description]
		 */
		getCurrentLineItemSelectionValues: function(sublistId, fieldId) {
			return nlapiGetCurrentLineItemValues(sublistId, fieldId);
		},
		/**
		 * [getLineItemCount description]
		 * @param  {[type]} sublistId [description]
		 * @return {[type]}           [description]
		 */
		getLineItemCount: function(sublistId) {
			return nlapiGetLineItemCount(sublistId);
		},
		/**
		 * [getLineItemField description]
		 * @param  {[type]} sublistId [description]
		 * @param  {Object} field     [description]
		 * @return {[type]}           [description]
		 */
		getLineItemField: function(sublistId, field = {}) {
			return nlapiGetLineItemField(
				sublistId,
				field.id,
				field.line
			);
		},
		/**
		 * [getLineItemMatrixField description]
		 * @param  {[type]} sublistId [description]
		 * @param  {Object} field     [description]
		 * @return {[type]}           [description]
		 */
		getLineItemMatrixField: function(sublistId, field = {}) {
			return nlapiGetLineItemMatrixField(
				sublistId,
				field.id,
				field.line,
				field.column
			);
		},
		/**
		 * [getLineItemMatrixValue description]
		 * @param  {[type]} sublistId [description]
		 * @param  {Object} field     [description]
		 * @return {[type]}           [description]
		 */
		getLineItemMatrixValue: function(sublistId, field = {}) {
			return nlapiGetLineItemMatrixValue(
				sublistId,
				field.id,
				field.line,
				field.column
			);
		},
		/**
		 * [getLineItemText description]
		 * @param  {[type]} sublistId [description]
		 * @param  {Object} field     [description]
		 * @return {[type]}           [description]
		 */
		getLineItemText: function(sublistId, field = {}) {
			return nlapiGetLineItemText(
				sublistId,
				field.id,
				field.line
			);
		},
		/**
		 * [getLineItemValue description]
		 * @param  {[type]} sublistId [description]
		 * @param  {Object} field     [description]
		 * @return {[type]}           [description]
		 */
		getLineItemValue: function(sublistId, field = {}) {
			return nlapiGetLineItemValue(
				sublistId,
				field.id,
				field.line
			);
		},
		/**
		 * [getLineItemSelectionValues description]
		 * @param  {[type]} sublistId [description]
		 * @param  {Object} field     [description]
		 * @return {[type]}           [description]
		 */
		getLineItemSelectionValues: function(sublistId, field = {}) {
			return nlapiGetLineItemValues(
				sublistId,
				field.id,
				field.line
			);
		},
		/**
		 * [getMatrixCount description]
		 * @param  {[type]} sublistId [description]
		 * @param  {[type]} fieldId   [description]
		 * @return {[type]}           [description]
		 */
		getMatrixCount: function(sublistId, fieldId) {
			return nlapiGetMatrixCount(sublistId, fieldId);
		},
		/**
		 * [getMatrixField description]
		 * @param  {[type]} sublistId [description]
		 * @param  {Object} field     [description]
		 * @return {[type]}           [description]
		 */
		getMatrixField: function(sublistId, field = {}) {
			return nlapiGetMatrixField(
				sublistId,
				field.id,
				field.column
			);
		},
		/**
		 * [getMatrixValue description]
		 * @param  {[type]} sublistId [description]
		 * @param  {Object} field     [description]
		 * @return {[type]}           [description]
		 */
		getMatrixValue: function(sublistId, field = {}) {
			return nlapiGetMatrixValue(
				sublistId,
				field.id,
				field.column
			);
		},
		/**
		 * [insertLineItem description]
		 * @param  {[type]} sublistId [description]
		 * @param  {[type]} line      [description]
		 * @return {[type]}           [description]
		 */
		insertLineItem: function(sublistId, line) {
			return nlapiInsertLineItem(sublistId, line);
		},
		/**
		 * [insertLineItemOption description]
		 * @param  {[type]} sublistId [description]
		 * @param  {Object} field     [description]
		 * @return {[type]}           [description]
		 */
		insertLineItemOption: function(sublistId, field = {}) {
			return nlapiInsertLineItemOption(
				sublistId,
				field.id,
				field.value,
				field.text,
				field.selected
			);
		},
		/**
		 * [isLineItemChanged description]
		 * @param  {[type]}  sublistId [description]
		 * @return {Boolean}           [description]
		 */
		isLineItemChanged: function(sublistId) {
			return nlapiIsLineItemChanged(sublistId);
		},
		/**
		 * [refreshLineItems description]
		 * @param  {[type]} sublistId [description]
		 * @return {[type]}           [description]
		 */
		refreshLineItems: function(sublistId) {
			return nlapiRefreshLineItems(sublistId);
		},
		/**
		 * [removeLineItem description]
		 * @param  {[type]} sublistId [description]
		 * @param  {[type]} line      [description]
		 * @return {[type]}           [description]
		 */
		removeLineItem: function(sublistId, line) {
			return nlapiRemoveLineItem(sublistId, line);
		},
		/**
		 * [removeLinteItemOption description]
		 * @param  {[type]} sublistId [description]
		 * @param  {Object} field     [description]
		 * @return {[type]}           [description]
		 */
		removeLineItemOption: function(sublistId, field = {}) {
			return nlapiRemoveLineItemOption(
				sublistId,
				field.id,
				field.value
			);
		},
		/**
		 * [selectLineItem description]
		 * @param  {[type]} sublistId [description]
		 * @param  {[type]} line      [description]
		 * @return {[type]}           [description]
		 */
		selectLineItem: function(sublistId, line) {
			return nlapiSelectLineItem(sublistId, line);
		},
		/**
		 * [selectNewLineItem description]
		 * @param  {[type]} sublistId [description]
		 * @return {[type]}           [description]
		 */
		selectNewLineItem: function(sublistId) {
			return nlapiSelectNewLineItem(sublistId);
		},
		/**
		 * [setCurrentLineItemMatrixValue description]
		 * @param {[type]}  sublistId [description]
		 * @param {Object}  field     [description]
		 * @param {Boolean} changed   [description]
		 * @param {Boolean} sync      [description]
		 */
		setCurrentLineItemMatrixValue: function(sublistId, field = {}, changed = true, sync = false) {
			return nlapiSetCurrentLineItemMatrixValue(
				sublistId,
				field.id,
				field.column,
				field.value,
				changed,
				sync
			);
		},
		/**
		 * [setCurrentLineItemText description]
		 * @param {[type]}  sublistId [description]
		 * @param {Object}  field     [description]
		 * @param {Boolean} changed   [description]
		 * @param {Boolean} sync      [description]
		 */
		setCurrentLineItemText: function(sublistId, field = {}, changed = true, sync = false) {
			return nlapiSetCurrentLineItemText(
				sublistId,
				field.id,
				field.text,
				changed,
				sync
			);
		},
		/**
		 * [setCurrentLineItemValue description]
		 * @param {[type]}  sublistId [description]
		 * @param {Object}  field     [description]
		 * @param {Boolean} changed   [description]
		 * @param {Boolean} sync      [description]
		 */
		setCurrentLineItemValue: function(sublistId, field = {}, changed = true, sync = false) {
			return nlapiSetCurrentLineItemValue(
				sublistId,
				field.id,
				field.value,
				changed,
				sync
			);
		},
		/**
		 * [setCurrentLineItemSelectionValues description]
		 * @param {[type]}  sublistId [description]
		 * @param {Object}  field     [description]
		 * @param {Boolean} changed   [description]
		 * @param {Boolean} sync      [description]
		 */
		setCurrentLineItemSelectionValues: function(sublistId, field = {}, changed = true, sync = false) {
			return nlapiSetCurrentLineItemValues(
				sublistId,
				field.id,
				field.values,
				changed,
				sync
			);
		},
		/**
		 * [setLineItemValue description]
		 * @param {[type]} sublistId [description]
		 * @param {Object} field     [description]
		 */
		setLineItemValue: function(sublistId, field = {}) {
			return nlapiSetLineItemValue(
				sublistId,
				field.id,
				field.line,
				field.value
			);
		},
		/**
		 * [setMatrixValue description]
		 * @param {[type]}  sublistId [description]
		 * @param {Object}  field     [description]
		 * @param {Boolean} changed   [description]
		 * @param {Boolean} sync      [description]
		 */
		setMatrixValue: function(sublistId, field = {}, changed = true, sync = false) {
			return nlapiSetMatrixValue(
				sublistId,
				field.id,
				field.column,
				field.value,
				changed,
				sync
			);
		},
	},
	/**
	 * [Namespace for search API scripts]
	 * @type {Object}
	 */
	search: {
		/**
		 * [create description]
		 * @param  {[type]} recordTypeId [description]
		 * @param  {Object} filters      [description]
		 * @param  {Object} columns      [description]
		 * @return {[type]}              [description]
		 */
		create: function(recordTypeId, filters = {}, columns = {}) {
			return nlapiCreateSearch(recordTypeId, filters, columns);
		},
		/**
		 * [load description]
		 * @param  {[type]} recordTypeId  [description]
		 * @param  {[type]} savedSearchId [description]
		 * @return {[type]}               [description]
		 */
		load: function(recordTypeId, savedSearchId) {
			return nlapiLoadSearch(recordTypeId. savedSearchId);
		},
		/**
		 * [lookup description]
		 * @param  {Object}  config [description]
		 * @param  {Array}   fields [description]
		 * @param  {Boolean} text   [description]
		 * @return {[type]}         [description]
		 */
		lookup: function(config = {}, fields = [], text = false) {
			return nlapiLookupField(
				config.recordTypeId,
				config.recordId,
				text
			);
		},
		/**
		 * [lookupValue description]
		 * @param  {Object} config [description]
		 * @param  {Array}  fields [description]
		 * @return {[type]}        [description]
		 */
		lookupValue: function(config = {}, fields = []) {
			return nlapiLookupField(
				config.recordTypeId,
				config.recordId,
				false
			);
		},
		/**
		 * [lookupText description]
		 * @param  {Object} config [description]
		 * @param  {Array}  fields [description]
		 * @return {[type]}        [description]
		 */
		lookupText: function(config = {}, fields = []) {
			return nlapiLookupField(
				config.recordTypeId,
				config.recordId,
				true
			);
		},
		/**
		 * [duplicate description]
		 * @param  {Object} record [description]
		 * @param  {Array}  fields [description]
		 * @return {[type]}        [description]
		 */
		duplicate: function(record = {}, fields = []) {
			return nlapiSearchDuplicate(
				record.typeId,
				fields,
				record.hasOwnProperty('id') ? record.id : null
			);
		},
		/**
		 * [global description]
		 * @param  {[type]} keywords [description]
		 * @return {[type]}          [description]
		 */
		global: function(keywords) {
			return nlapiSearchGlobal(keywords);
		},
		/**
		 * [record description]
		 * @param  {[type]} recordId      [description]
		 * @param  {[type]} savedSearchId [description]
		 * @param  {Object} filters       [description]
		 * @return {[type]}               [description]
		 */
		record: function(recordId = null, savedSearchId = null, filters = {}) {
			return nlapiSearchRecord(
				recordTypeId, 
				savedSearchId, 
				filters
			);
		},

	},
	/**
	 * [Namespace for scheduling API scripts]
	 * @type {Object}
	 */
	scheduling: {
		/**
		 * [scheduleScript description]
		 * @param  {[type]} scriptId   [description]
		 * @param  {[type]} deployId   [description]
		 * @param  {Object} parameters [description]
		 * @return {[type]}            [description]
		 */
		scheduleScript: function(scriptId, deployId = null, parameters = {}) {
			return nlapiScheduleScript(
				scriptId,
				deployId,
				parameters
			);
		},
		/**
		 * [setRecoveryPoint description]
		 */
		setRecoveryPoint: function() {
			return nlapiSetRecoveryPoint();
		},
		/**
		 * [yieldScript description]
		 * @return {[type]} [description]
		 */
		yieldScript: function() {
			return nlapiYieldScript();
		}
	},
	/**
	 * [Namespace for context API scripts]
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
		 * [getDepartment description]
		 * @return {[type]} [description]
		 */
		getDepartment: function() {
			return nlapiGetDepartment();
		},
		/**
		 * [getLocation description]
		 * @return {[type]} [description]
		 */
		getLocation: function() {
			return nlapiGetLocation();
		},
		/**
		 * [getRole description]
		 * @return {[type]} [description]
		 */
		getRole: function() {
			return nlapiGetRole();
		},
		getSubsidiary: function() {
			return nlapiGetSubsidiary();
		},
		/**
		 * [getUser description]
		 * @return {[type]} [description]
		 */
		getUser: function() {
			return nlapiGetUser();
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
		},
		/**
		 * [logExecution description]
		 * @param  {Object} log [description]
		 * @return {[type]}     [description]
		 */
		logExecution: function(log = {}) {
			return nlapiLogExecution(
				log.type,
				log.title,
				log.details
			);
		}
	},
	/**
	 * [Namespace for UI builder API scripts]
	 * @type {Object}
	 */
	ui: {
		/**
		 * [createAssistant description]
		 * @param  {[type]}  title      [description]
		 * @param  {Boolean} hideHeader [description]
		 * @return {[type]}             [description]
		 */
		createAssistant: function(title, hideHeader = false) {
			return nlapiCreateAssistant(title, hideHeader);
		},
		/**
		 * [createForm description]
		 * @param  {[type]}  title          [description]
		 * @param  {Boolean} hideNavigation [description]
		 * @return {[type]}                 [description]
		 */
		createForm: function(title, hideNavigation = false) {
			return nlapiCreateForm(title, hideNavigation);
		},
		/**
		 * [createList description]
		 * @param  {[type]}  title          [description]
		 * @param  {Boolean} hideNavigation [description]
		 * @return {[type]}                 [description]
		 */
		createList: function(title, hideNavigation = false) {
			return nlapiCreateList(title, hideNavigation);
		},
		/**
		 * [createTemplateRenderer description]
		 * @return {[type]} [description]
		 */
		createTemplateRenderer: function() {
			return nlapiCreateTemplateRenderer();
		},
	}
	//TODO: Application Navigation APIs
};
