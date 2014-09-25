<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

defined('MOODLE_INTERNAL') || die();

/**
 * Plugin for Moodle 'no link' button.
 *
 * @package   tinymce_eocontentquestion
 * @copyright 2012 The Open University
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class tinymce_eocontentquestion extends editor_tinymce_plugin {
    /** @var array list of buttons defined by this plugin */
    protected $buttons = array('eocontentquestion');

    protected function update_init_params(array &$params, context $context,
            array $options = null) {
	    global $course;


//	$coursecontext = get_context_instance(CONTEXT_COURSE, $course->id);

	
	


//	    $contextmodule = context_module::instance($cm->id);		
            $filters = filter_get_active_in_context($context);
            if (!array_key_exists('marvintinymcestudent', $filters)) {
                return;
            }

/*	if (!has_capability('moodle/course:viewhiddensections', $context)) {

	return;
	}
*/
	$this->add_button_after($params, 1, 'eocontentquestion');
        // Add JS file, which uses default name.
        $this->add_js_plugin($params);
    }
}
