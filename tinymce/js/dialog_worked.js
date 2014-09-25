tinyMCEPopup.requireLangPack();

var EocontentquestionDialog = {
	init : function() {
	

	},

	insert : function() {
		
                qtext=document.getElementById('question-text').value;
		qanswer=document.getElementById('question-answer').value;

		var id = new Date().getTime();
		
var string = '<p class="instructions"><span style="background-color: #bad3bd; font-size: large;">'+qtext+'</span></p> \
		<p><textarea onFocus="this.value=\'\'" name="textarea" id="response-text" cols="80" rows="2">Type your answer here!</textarea></p> \
		<div id="answer'+id+'" class="ot-hide">  \
		<p><span style="background-color: #00ffff; font-size: large;">'+qanswer+'</span></p>    \
		</div><p><a href="#"><button id="ot-show-answer'+id+'" type="button">Check Answer</button></a></p><p> \
		<script type="text/javascript">// <![CDATA[ \
		YUI().use(\'node\', function(Y) { Y.all(\'.ot-hide\').addClass(\'ot-hidden\'); var parent = Y.one(\'#ot-show-answer'+id+'\').get(\'parentNode\'); parent.on(\'click\', function(e) { e.preventDefault(); var responseText = Y.one(\'#response-text\'); if (responseText.get(\'value\').length >= 1 && responseText.get(\'value\') != \'Type your answer here!\') { Y.all(\'#answer'+id+'\').removeClass(\'ot-hidden\').addClass(\'ot-shown\'); } else { alert("Please fill in a response to the question."); } }); });// ]]></script></p>';






//		alert(molfile);

		tinyMCEPopup.editor.execCommand('mceInsertContent', false, string);
//		}
		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(EocontentquestionDialog.init, EocontentquestionDialog);
