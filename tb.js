//JS file for TweetBeat

var url = "img/";

function preloadImages() {
	
	var i1 = new Image();
	i1.src = url+"buttonblue_depressed.png";
	var i2 = new Image();
	i2.src = url+"buttonon.png";
	var i3 = new Image();
	i3.src = url+"button_75px.png";
	var i4 = new Image();
	i4.src = url+"button-on-red.png";
	var i5 = new Image();
	i5.src = url+"button-on-yellow.png";
	var i6 = new Image();
	i6.src = url+"light-on.png";
	var i7 = new Image();
	i7.src = url+"rungridactivated.png";
	}
	
function soundsSelect (var2) {

	if (var2 == "img1") {
		if (state1 == 0) {
			document.getElementById(var2).src = url+"button_75px.png";
			state1 = 1;
			s1 = 'setTimeout( "s1.play()", tempo*1 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state1 = 0;
			s1 = '';
			}
		}

	if (var2 == "img2") {
		if (state2 == 0) {
			document.getElementById(var2).src = url+"button_75px.png";
			state2 = 1;
			s2 = 'setTimeout( "s2.play()", 0 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state2 = 0;
			s2 = '';
			}
		}
	
	if (var2 == "img3") {
		if (state3 == 0) {
			document.getElementById(var2).src = url+"button_75px.png";
			state3 = 1;
			s3 = 'setTimeout( "s3.play()", 0 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state3 = 0;
			s3 = '';
			}
		}
	
	if (var2 == "img4") {
		if (state4 == 0) {
			document.getElementById(var2).src = url+"button_75px.png";
			state4 = 1;
			s4 = 'setTimeout( "s4.play()", 0 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state4 = 0;
			s4 = '';
			}
		}
	
	if (var2 == "img5") {
		if (state5 == 0) {
			document.getElementById(var2).src = url+"button_75px.png";
			state5 = 1;
			s5 = 'setTimeout( "s5.play()", 0 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state5 = 0;
			s5 = '';
			}
		}
	
	if (var2 == "img6") {
		if (state6 == 0) {
			document.getElementById(var2).src = url+"button_75px.png";
			state6 = 1;
			s6 = 'setTimeout( "s6.play()", 0 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state6 = 0;
			s6 = '';
			}
		}
	
	if (var2 == "img7") {
		if (state7 == 0) {
			document.getElementById(var2).src = url+"button_75px.png";
			state7 = 1;
			s7 = 'setTimeout( "s7.play()", 0 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state7 = 0;
			s7 = '';
			}
		}
	
	if (var2 == "img8") {
		if (state8 == 0) {
			document.getElementById(var2).src = url+"button_75px.png";
			state8 = 1;
			s8 = 'setTimeout( "s8.play()", 0 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state8 = 0;
			s8 = '';
			}
		}
	
	if (var2 == "img9") {
		if (state9 == 0) {
			document.getElementById(var2).src = url+"button_75px.png";
			state9 = 1;
			s9 = 'setTimeout( "s9.play()", 0 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state9 = 0;
			s9 = '';
			}
		}
	
	if (var2 == "img10") {
		if (state10 == 0) {
			document.getElementById(var2).src = url+"button_75px.png";
			state10 = 1;
			s10 = 'setTimeout( "s10.play()", 0 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state10 = 0;
			s10 = '';
			}
		}
	
	if (var2 == "img11") {
		if (state11 == 0) {
			document.getElementById(var2).src = url+"button_75px.png";
			state11 = 1;
			s11 = 'setTimeout( "s11.play()", 0 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state11 = 0;
			s11 = '';
			}
		}
	
	if (var2 == "img12") {
		if (state12 == 0) {
			document.getElementById(var2).src = url+"button_75px.png";
			state12 = 1;
			s12 = 'setTimeout( "s12.play()", tempo )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state12 = 0;
			s12 = '';
			}
		}
		
	if (var2 == "img13") {
		if (state13 == 0) {
			document.getElementById(var2).src = url+"button_75px.png";
			state13 = 1;
			s13 = 'setTimeout( "s13.play()", 0 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state13 = 0;
			s13 = '';
			}
		}
	
	if (var2 == "img14") {
		if (state14 == 0) {
			document.getElementById(var2).src = url+"button_75px.png";
			state14 = 1;
			s14 = 'setTimeout( "s14.play()", 0 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			states14 = 0;
			s14 = '';
			}
		}
	
	if (var2 == "img15") {
		if (state15 == 0) {
			document.getElementById(var2).src = url+"button_75px.png";
			state15 = 1;
			s15 = 'setTimeout( "s15.play()", 0 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state15 = 0;
			s15 = '';
			}
		}
	
	if (var2 == "img16") {
		if (state16 == 0) {
			document.getElementById(var2).src = url+"button_75px.png";
			state16 = 1;
			s16 = 'setTimeout( "s16.play()", tempo*2 )';
			}
		else {
			document.getElementById(var2).src = url+"buttonblue_v2.png";
			state16 = 0;
			s16 = '';
			}
		}
	}
	
function singlePlay() {
	
	s1 = document.getElementById('s1');
	s2 = document.getElementById('s2');
	s3 = document.getElementById('s3');
	s4 = document.getElementById('s4');
	s5 = document.getElementById('s5');
	s6 = document.getElementById('s6');
	s7 = document.getElementById('s7');
	s8 = document.getElementById('s8');
	
	s9 = document.getElementById('s9');
	s10 = document.getElementById('s10');
	s11 = document.getElementById('s11');
	s12 = document.getElementById('s12');
	
	s13 = document.getElementById('s13');
	s14 = document.getElementById('s14');
	s15 = document.getElementById('s15');
	s16 = document.getElementById('s16');
	
	eval(s1p);
	eval(s2p);
	eval(s3p);
	eval(s4p);
	eval(s5p);
	eval(s6p);
	eval(s7p);
	eval(s8p);
	eval(s9p);
	eval(s10p);
	eval(s11p);
	eval(s12p);
	eval(s13p);
	eval(s14p);
	eval(s15p);
	eval(s16p);

	}