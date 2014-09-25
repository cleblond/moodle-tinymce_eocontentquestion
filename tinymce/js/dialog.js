tinyMCEPopup.requireLangPack();

var EocontentquestionDialog = {
	init : function() {
	

	},

	insert : function() {
		
		///shortanswer 
		


		if(document.getElementById('shortanswer_panel').className == 'current'){
		//alert('sa');
		
                qtext=document.getElementById('question-text').value;
		qanswer=document.getElementById('question-answer').value;
		qfeedback=document.getElementById('question-feedback').value
		
		if(document.getElementById('yes').checked){
		checkaccuracy = true;
		}else{
		checkaccuracy = false;
		}
		//alert(qtext);

		var id = new Date().getTime();
		
var string = '<fieldset id ="eocontentquestion_fs"><legend id ="eocontentquestion_legend">Practice Problem</legend> \
<p class="instructions"><span style="font-size: large;">'+qtext+'</span></p> \
		<p><textarea onFocus="this.value=\'\'" name="textarea" id="response-text'+id+'" cols="60" rows="2">Type your answer here!</textarea></p> \
		<div id="answer'+id+'" class="ot-hide">  \
		<p><span id="correct-answer'+id+'" style="font-size: large;">'+qanswer+'</span></p></div>    \
		<div id="feedback'+id+'" class="ot-hide">  \
		<p><span id="feedback-text'+id+'" style="font-size: large;">'+qfeedback+'</span></p></div>    \
		<p><a href="#"><button class="show_button"  id="ot-show-answer'+id+'" type="button">Check Answer</button></a></p><p> \
		<script type="text/javascript">// <![CDATA[ \
		YUI().use(\'node\', function(Y) { Y.all(\'.ot-hide\').addClass(\'ot-hidden\'); \
		var parent = Y.one(\'#ot-show-answer'+id+'\').get(\'parentNode\'); \
		parent.on(\'click\', function(e) { e.preventDefault(); var responseText = Y.one(\'#response-text'+id+'\'); var feedbackText = Y.one(\'#feedback-text'+id+'\'); var correctText = Y.one(\'#correct-answer'+id+'\'); if (responseText.get(\'value\').length >= 1 && responseText.get(\'value\') != \'Type your answer here!\') { \
if('+checkaccuracy+'){  \
if(responseText.get(\'value\') ==  correctText.get(\'innerHTML\')){ \
correctText.set(\'innerHTML\', \'Correct!  \'+correctText.get(\'innerHTML\'));} \
else{  \
correctText.set(\'innerHTML\', \'Sorry thats incorrect.  \'+correctText.get(\'innerHTML\')+\'  is the correct answer.\');}} \
else{correctText.set(\'innerHTML\', \'The correct answer is \'+correctText.get(\'innerHTML\'))}Y.all(\'#answer'+id+'\').removeClass(\'ot-hidden\').addClass(\'ot-shown\'); Y.one(\'#feedback'+id+'\').removeClass(\'ot-hidden\').addClass(\'ot-shown\'); Y.one(\'#ot-show-answer'+id+'\').hide();} else { alert("Please fill in a response to the question."); } }); });// ]]></script></p></fieldset><p><br></p>';



		}  ///end shortanswer
		else if (document.getElementById('multichoice_panel').className == 'current'){

		//alert('mc');
		var answer=0;
		var id = new Date().getTime();
		var qtextmc = document.getElementById('question-textmc').value;
		var qfeedback=document.getElementById('question-feedbackmc').value
		//alert('qtext'+qtextmc);
		var arr = document.getElementsByClassName("answer");
		var count = 1;
		var mcstr ='';
		//console.log(arr.length);
		for(i=1;i <= arr.length;++i){
			var qtext = document.getElementById('answertext'+i).value;
			
			if(qtext != ""){
			mcstr = mcstr + '<li><input name="answer'+id+'" value="'+count+'" type="radio" />' +qtext+'</li>';
			count=count+1;
			}
		}
		//alert(mcstr);
		///get checked button
		var radios = document.getElementsByName('answer');
		//console.log(radios);
		for (var i = 0; i < radios.length; i++) {
	        var button = radios[i];
	        if (button.checked) {
	            answer = i + 1;
		    //alert(answer);
		}
		}

		if(answer==0){return alert('You didn\'t choose a correct answer!')}


var string = '<fieldset id ="eocontentquestion_fs"><legend id ="eocontentquestion_legend">Practice Problem</legend> \
<p class="instructions"><span style="font-size: large;">'+qtextmc+'</span></p>  \
<ol>'+mcstr+'</ol>   \
<p><button class="show_button"  id="check_answer'+id+'" name="check_answer" type="button">Check Answer</button><span style="font-size: large;" id="result'+id+'"></span></p> \
<div id="feedback'+id+'" class="ot-hide">  \
		<p><span id="feedback-text'+id+'" style="font-size: large;">'+qfeedback+'</span></p></div>    \
<script type="text/javascript">// <![CDATA[ \
YUI().use(\'node\', function(Y) { Y.all(\'.ot-hide\').addClass(\'ot-hidden\'); \
var parent = Y.one(\'#check_answer'+id+'\');  \
        parent.on(\'click\', function(e) {  \
        if(Y.one(\'input[name=answer'+id+']:checked\')){   \
             var value = Y.one(\'input[name=answer'+id+']:checked\').get("value"); \
	   	if (value=='+answer+') {   \
		Y.one(\'#result'+id+'\').set(\'innerHTML\', \'  Correct Answer!\');   \
		} else {  \
		Y.one(\'#result'+id+'\').set(\'innerHTML\', \'  Please Try Again!\');  \
		}   \
	   Y.one(\'#feedback'+id+'\').removeClass(\'ot-hidden\').addClass(\'ot-shown\'); \
        }  \
        else{  \
        alert("Please make a choice.");  \
        }  \
        });  \
});  \
// ]]></script></fieldset><p><br></p>';


}  ///end multichoice




else if(document.getElementById('multiselect_panel').className == 'current'){   



var answer=0;
		var id = new Date().getTime();
		var qtextmc = document.getElementById('question-textms').value;
		var qfeedback=document.getElementById('question-feedbackms').value
		//alert('qtext'+qtextmc);
		var radios = document.getElementsByClassName('answerms');
		
		var count = 1;
		var mcstr ='';
		//console.log(arr.length);
		//button = arr[i];
		for(var i=0 ;i < radios.length; ++i){
			var button = radios[i];
			var qtext = button.value;
			if(qtext != ""){
			mcstr = mcstr + '<li><input class="answerms'+id+'" name="answerms'+id+'" value="'+count+'" type="checkbox" />' +qtext+'</li>';
			count=count+1;
			}
		}
		//alert(mcstr);
		///get checked checkboxes
		var answerstr = '';
		var radios = document.getElementsByName('answerms');
		//console.log(radios);
		for (var i = 0; i < radios.length; i++) {
	        var button = radios[i];
	        if (button.checked) {
		j = i + 1;
		answerstr = answerstr+',' + j.toString();
	        //    answer = i + 1;
		//    alert(answerstr);
		}
		}
		if(answerstr==''){return alert('You didn\'t choose any correct answers!')}


var string = '<fieldset id ="eocontentquestion_fs"><legend id ="eocontentquestion_legend">Practice Problem</legend> \
<p class="instructions"><span style="font-size: large;">'+qtextmc+'</span></p>  \
<ol>'+mcstr+'</ol>   \
<p><button class="show_button"  id="check_answer'+id+'" name="check_answer" type="button">Check Answer</button><span style="font-size: large;" id="result'+id+'"></span></p> \
<div id="feedback'+id+'" class="ot-hide">  \
		<p><span id="feedback-text'+id+'" style="font-size: large;">'+qfeedback+'</span></p></div>    \
<script type="text/javascript">// <![CDATA[ \
YUI().use(\'node\', function(Y) { Y.all(\'.ot-hide\').addClass(\'ot-hidden\'); \
		var parent = Y.one(\'#check_answer'+id+'\');  \
        parent.on(\'click\', function(e) {  \
        if(Y.one(\'input[name=answerms'+id+']:checked\')){   \
		var responsestr = \'\'; \
		var ckboxs = document.getElementsByClassName(\'answerms'+id+'\'); \
		for(i=0; i < ckboxs.length;i++){  \
			var button = ckboxs[i];  \
			if (button.checked) {  \
			j = i + 1;  \
			responsestr = responsestr+\',\' + j.toString();  \
			}  \
		} \
		if (responsestr==\''+answerstr+'\') {   \
		Y.one(\'#result'+id+'\').set(\'innerHTML\', \'  Correct Answer!\');   \
		}  \
		else {  \
		Y.one(\'#result'+id+'\').set(\'innerHTML\', \'  Please Try Again!\');  \
		}   \
	   Y.one(\'#feedback'+id+'\').removeClass(\'ot-hidden\').addClass(\'ot-shown\'); \
        }  \
        else{  \
        alert("Please make a choice.");  \
        }  \
        });  \
});  \
// ]]></script></fieldset><p><br></p>';


}


	else {    //reveal_panel
		
		var id = new Date().getTime();
		qtext=document.getElementById('question-textrev').value;
		qfeedback=document.getElementById('question-feedbackrev').value;

var string = '<fieldset id ="eocontentquestion_fs"><legend id ="eocontentquestion_legend">Practice Problem</legend> \
<p class="instructions"><span style="font-size: large;">'+qtext+'</span></p> \
<p><a href="#"><button class="show_button" id="ot-show-answer'+id+'" type="button">Reveal Answer</button></a></p> \
		<div id="feedback'+id+'" class="ot-hide">  \
		<p><span id="feedback-text'+id+'" style="font-size: large;">'+qfeedback+'</span></p></div>    \
		<p><script type="text/javascript">// <![CDATA[ \
		YUI().use(\'node\', function(Y) {  \
			Y.all(\'.ot-hide\').addClass(\'ot-hidden\'); \
		var parent = Y.one(\'#ot-show-answer'+id+'\').get(\'parentNode\'); \
		parent.on(\'click\', function(e) { e.preventDefault(); \
			if(Y.one(\'#ot-show-answer'+id+'\').get(\'innerHTML\') == \'Reveal Answer\'){  \
			Y.one(\'#feedback'+id+'\').removeClass(\'ot-hidden\').addClass(\'ot-shown\');  \
			Y.one(\'#ot-show-answer'+id+'\').set(\'innerHTML\', \'Hide Answer\');  \
			}  \
			else{  \
			Y.one(\'#feedback'+id+'\').removeClass(\'ot-shown\').addClass(\'ot-hidden\');  \
			Y.one(\'#ot-show-answer'+id+'\').set(\'innerHTML\', \'Reveal Answer\'); \
			} \
			});  \
			 });// ]]>  \
		</script></p></fieldset><p><br></p>';


		}






//		alert(molfile);

		tinyMCEPopup.editor.execCommand('mceInsertContent', false, string);
//		}
		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(EocontentquestionDialog.init, EocontentquestionDialog);
