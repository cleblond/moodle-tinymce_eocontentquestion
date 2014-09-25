<?php




define('NO_MOODLE_COOKIES', true); // Session not used here.

require(dirname(dirname(dirname(dirname(dirname(dirname(__FILE__)))))) . '/config.php');

$PAGE->set_context(context_system::instance());
$PAGE->set_url('/lib/editor/tinymce/plugins/eocontentquestion/eocontent.php');

$editor = get_texteditor('tinymce');
$plugin = $editor->get_plugin('eocontentquestion');


$htmllang = get_html_lang();
header('Content-Type: text/html; charset=utf-8');
header('X-UA-Compatible: IE=edge');



?>
<!DOCTYPE html>
<html <?php echo $htmllang ?>
<head>
    <title><?php print_string('eocontentquestion:desc', 'tinymce_eocontentquestion'); ?></title>
    <script type="text/javascript" src="<?php echo $editor->get_tinymce_base_url(); ?>/tiny_mce_popup.js"></script>
    <script type="text/javascript" src="<?php echo $plugin->get_tinymce_file_url('js/dialog.js'); ?>"></script>
</head>
<body>


<fieldset >
    <legend class="title">Check Accuracy</legend> 
<input type="radio" name="checkaccuracy" id="yes" value="yes">Yes
<input type="radio" name="checkaccuracy" id="no" checked="checked" value="no">No
</fieldset >
<br>
<fieldset >
    <legend class="title">Question Text</legend> 
<textarea name="question-text" id="question-text" cols="60" rows="3"></textarea>
</fieldset >
<br>
<fieldset >
    <legend class="title">Answer</legend> 
<textarea name="question-text" id="question-answer" cols="60" rows="1"></textarea>
</fieldset >
<br>
<fieldset >
    <legend class="title">Feedback</legend> 
<textarea name="question-feedback" id="question-feedback" cols="60" rows="3"></textarea>
</fieldset >
<form onsubmit="EocontentquestionDialog.insert();return false;" action="#">

	<p> </p>
		<table><tr>
		<td><input type="button" id="insert" name="insert" value="{#insert}" onclick="EocontentquestionDialog.insert();" /></td>
		<td><input type="button" id="cancel" name="cancel" value="{#cancel}" onclick="tinyMCEPopup.close();" /></td>
		    	<td>
		
		<td>

		</tr>
		</table>

</form>










</body>
</html>




