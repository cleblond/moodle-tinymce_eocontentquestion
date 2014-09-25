/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function() {
	// Load plugin specific language pack
	tinymce.PluginManager.requireLangPack('eocontentquestion');

	tinymce.create('tinymce.plugins.EocontentquestionPlugin', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {
			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceEomarvin2d');
			ed.addCommand('mceEocontentquestion', function() {
				ed.windowManager.open({
				 
				//tinyMCE.activeEditor.dom.loadCSS(url + '/css/style.css');
				file : ed.getParam("moodle_plugin_base") + 'eocontentquestion/eocontent.php',
//					file : url + '/marvin.htm',
					width : 390 + parseInt(ed.getLang('eocontentquestion.delta_width', 0)),
					height : 455 + parseInt(ed.getLang('eocontentquestion.delta_height', 0)),
					inline : 1,
					encoding : "xml"

				}, {
					plugin_url : url, // Plugin absolute URL
					some_custom_arg : 'custom arg' // Custom argument
				});
			});

			ed.contentCSS.push(url + '/css/content.css');

			// Register eocontentquestion button
			ed.addButton('eocontentquestion', {
				title : 'Insert Simple Question',
				cmd : 'mceEocontentquestion',
				image : url + '/img/eocontentquestion.png'
			});

			// Add a node change handler, selects the button in the UI when a image is selected
			//ed.onNodeChange.add(function(ed, cm, n) {
			//	cm.setActive('eocontentquestion', n.nodeName == 'IMG');
			//});

		
			/*
			ed.onPreProcess.add(function(ed, o) {
			    tinymce.each(ed.dom.select('span.mar2d', o.node), function(n) {
			        ed.dom.replace(ed.dom.create('img', {src : url + '/img/eomarvin2d.gif'}, n.innerHTML), n);
			});
			});
			*/


                       ///select button
			ed.onNodeChange.add(function(ed, cm, n, co) {
			    n = ed.dom.getParent(n, 'span.mar2d');
 
			   // cm.setDisabled('eocontentquestion', co);
			    cm.setActive('eocontentquestion', 0);
 
		    // Activate all
		    if (n) {
		        do {
		           // cm.setDisabled('eocontentquestion', 0);
		            cm.setActive('eocontentquestion', 1);
		        } while (n = n.parentNode);
			    }
			});







		},

		/**
		 * Creates control instances based in the incomming name. This method is normally not
		 * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
		 * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
		 * method can be used to create those.
		 *
		 * @param {String} n Name of the control to create.
		 * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
		 * @return {tinymce.ui.Control} New control instance or null if no control was created.
		 */
		createControl : function(n, cm) {
			return null;
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname : 'EasyOChem Simple Question',
				author : 'Carl LeBlond',
				authorurl : '',
				infourl : '',
				version : "1.0"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('eocontentquestion', tinymce.plugins.EocontentquestionPlugin);
})();
