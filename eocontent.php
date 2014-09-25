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
    <script type="text/javascript" src="<?php echo $editor->get_tinymce_base_url(); ?>/utils/mctabs.js"></script>
    <script type="text/javascript" src="<?php echo $editor->get_tinymce_base_url(); ?>/utils/validate.js"></script>
    <script type="text/javascript" src="<?php echo $editor->get_tinymce_base_url(); ?>/utils/form_utils.js"></script>
    <script type="text/javascript" src="<?php echo $editor->get_tinymce_base_url(); ?>/utils/editable_selects.js"></script>
    <script type="text/javascript" src="<?php echo $plugin->get_tinymce_file_url('js/dialog.js'); ?>"></script>

	<link href="tinymce/css/image.css" rel="stylesheet" type="text/css" />
</head>
<body id="moodleimage" style="display: none" role="application" aria-labelledby="app_title">



<form onsubmit="EocontentquestionDialog.insert();return false;" action="#">

	<p> </p>
		



<div class="tabs">
			<ul>
				<li id="reveal_tab" class="current" aria-controls="reveal_panel"><span><a href="javascript:mcTabs.displayTab('reveal_tab','reveal_panel');" onmousedown="return false;">Reveal</a></span></li>

				<li id="shortanswer_tab" aria-controls="shortanswer_panel"><span><a href="javascript:mcTabs.displayTab('shortanswer_tab','shortanswer_panel');" onmousedown="return false;">Short Answer</a></span></li>
				<li id="multichoice_tab" aria-controls="multichoice_panel"><span><a href="javascript:mcTabs.displayTab('multichoice_tab','multichoice_panel');" onmousedown="return false;">Mutliple Choice</a></span></li>

				<li id="multiselect_tab" aria-controls="multiselect_panel"><span><a href="javascript:mcTabs.displayTab('multiselect_tab','multiselect_panel');" onmousedown="return false;">Mutliple Select</a></span></li>



			</ul>
		</div>



<div class="panel_wrapper">





<div id="reveal_panel" class="panel current">
				

						
<fieldset >
    <legend class="title">Question Text</legend> 
<textarea name="question-textrev" id="question-textrev" width="100%" rows="3"></textarea>
</fieldset >
<br>
<fieldset >
    <legend class="title">Feedback/Answer</legend> 
<textarea name="question-feedbackrev" id="question-feedbackrev" cols="50" rows="3"></textarea>
</fieldset >



			

				
</div>













<div id="shortanswer_panel" class="panel">
										
<fieldset >
    <legend class="title">Check Accuracy</legend> 
<input type="radio" name="checkaccuracy" id="yes" value="yes">Yes
<input type="radio" name="checkaccuracy" id="no" checked="checked" value="no">No
</fieldset >
<br>
<fieldset >
    <legend class="title">Question Text</legend> 
<textarea name="question-text" id="question-text" cols="50" rows="3"></textarea>
</fieldset >
<br>
<fieldset >
    <legend class="title">Answer</legend> 
<textarea name="question-text" id="question-answer" cols="50" rows="1"></textarea>
</fieldset >
<br>
<fieldset >
    <legend class="title">Feedback/Hint</legend> 
<textarea name="question-feedback" id="question-feedback" cols="50" rows="3"></textarea>
</fieldset >



			

				
</div>















<div id="multichoice_panel" class="panel">


<fieldset >
    <legend class="title">Question Text</legend> 
<textarea name="question-textmc" id="question-textmc" cols="50" rows="3"></textarea>
</fieldset >


				<fieldset>
						<legend>Multichoice Options</legend>

						


<ol>
<li ><input name="answer"value="1" id="answer1" type="radio" /><textarea class="answer" name="answertext1" style="height:2.5em;"  id="answertext1">True</textarea></li>
<li><input name="answer" value="2" id="answer2" type="radio" /><textarea class="answer" name="answertext2" style="height:2.5em;" cols="40"  id="answertext2">False</textarea></li>
<li><input name="answer" value="3" id="answer3" type="radio" /><textarea class="answer" name="answertext3" style="height:2.5em;" cols="40" id="answertext3"></textarea></li>
<li><input name="answer" value="4" id="answer4" type="radio" /><textarea class="answer" name="answertext4" style="height:2.5em;" cols="40"  id="answertext4"></textarea></li> 
<li><input name="answer" value="5" id="answer5" type="radio" /><textarea class="answer" name="answertext5" style="height:2.5em;" cols="40"  id="answertext5"></textarea></li>
</ol>

				</fieldset>

<br>
<fieldset >
    <legend class="title">Feedback/Hint</legend> 
<textarea name="question-feedbackmc" id="question-feedbackmc" cols="50" rows="3"></textarea>
</fieldset >


				
</div>


<div id="multiselect_panel" class="panel">


<fieldset >
    <legend class="title">Question Text</legend> 
<textarea name="question-textms" id="question-textms" cols="50" rows="3"></textarea>
</fieldset >


				<fieldset>
						<legend>Multichoice Options</legend>

						


<ol>
<li><input name="answerms"value="1" id="answer1" type="checkbox" /><textarea class="answerms" name="answertext1" style="height:2.5em;" cols="40" id="answertext1">True</textarea></li>
<li><input name="answerms" value="2" id="answer2" type="checkbox" /><textarea class="answerms" name="answertext2" style="height:2.5em;" cols="40"  id="answertext2">False</textarea></li>
<li><input name="answerms" value="3" id="answer3" type="checkbox" /><textarea class="answerms" name="answertext3" style="height:2.5em;" cols="40" id="answertext3"></textarea></li>
<li><input name="answerms" value="4" id="answer4" type="checkbox" /><textarea class="answerms" name="answertext4" style="height:2.5em;" cols="40"  id="answertext4"></textarea></li> 
<li><input name="answerms" value="5" id="answer5" type="checkbox" /><textarea class="answerms" name="answertext5" style="height:2.5em;" cols="40"  id="answertext5"></textarea></li>
</ol>

				</fieldset>

<br>
<fieldset >
    <legend class="title">Feedback/Hint</legend> 
<textarea name="question-feedbackms" id="question-feedbackms" cols="50" rows="3"></textarea>
</fieldset >


				
</div>








</div>




    </form>

<table><tr>
		<td><input type="button" id="insert" name="insert" value="{#insert}" onclick="EocontentquestionDialog.insert();" /></td>
		<td><input type="button" id="cancel" name="cancel" value="{#cancel}" onclick="tinyMCEPopup.close();" /></td>
		    	<td>
		
		<td>

		</tr>
		</table>




</body>
</html>




