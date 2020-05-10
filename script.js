$(function(){
	/*******************************
	*ongaq マスター
	*
	********************************/
const $ongaq=new Ongaq({
	api_key: "b2f52d085245478087c08fa83c45f0ee",
	volume: 100,
	bpm: 127,
	onReady: function(){
		$('#button').addClass('button start');
		$('#button').click(function(){
			if($ongaq.params.isPlaying){
				$ongaq.pause();
				$('#button').addClass('button start');
			}else{
					$ongaq.start();
					$('#button').addClass('button pause');
				}
		})
	}
})

/*******************************
*ドラム
*
********************************/
const $my_drums = new Part ({
	sound: "small_cube_drums",
	measure: 500,
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16
})


$my_drums.add(new Filter ({
	key: "hihat",
	active: (beat, measure) => {
return measure >23 && measure < 96 ? beat%4===0
			:'1'}
}))

$my_drums.add(new Filter ({
	key: "kick",
	active: (beat, measure) => {
		return measure > 23 && measure < 96 ? beat % 16===0
	         : '1'}
}))

$my_drums.add(new Filter ({
	key: "snare",
	active: (beat, measure) => {
		return measure > 23 && measure < 96 ? beat ===8
	         :'1'}
}))




$my_drums.add(new Filter ({
	key: "hihat",
	active: (beat, measure) => {
return measure >103 && measure <267 ? beat%4===0
			:'1'}
}))

$my_drums.add(new Filter ({
	key: "kick",
	active: (beat, measure) => {
		return measure > 103 && measure <267 ? beat % 16===0
	         : '1'}
}))

$my_drums.add(new Filter ({
	key: "snare",
	active: (beat, measure) => {
		return measure > 103 && measure <267 ? beat ===8
	         :'1'}
}))

$my_drums.add(new Filter ({
	key: "cymbal",
	active: (beat, measure) => {
		return measure ===39 ? beat === 12
	        :measure ===40 ? beat ===0
	        :measure ===55 ? beat ===12
	        :measure ===56 ? beat ===0
	        :measure ===146 ? beat ===12
	        :measure ===147 ? beat ===0
				   :'1'}

}))


$ongaq.add($my_drums)

/*******************************
*ドラム
*サビ
********************************/
const $my_drums_2 = new Part ({
	sound: "my_band_drums",
	measure: 500,
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16
})


$my_drums_2.add(new Filter ({
	key: "hihat",
	active: (beat, measure) => {
return measure >55 && measure < 96 ? beat%4===0
       :measure > 146 && measure < 264 ? beat %4 ===0
			:'1'}
}))

$my_drums_2.add(new Filter ({
	key: "kick",
	active: (beat, measure) => {
		return measure > 55 && measure < 96 ? beat % 16===0
		      :measure  > 146 && measure < 264 ? beat % 16===0
	         : '1'}
}))

$my_drums_2.add(new Filter ({
	key: "snare",
	active: (beat, measure) => {
		return measure > 55 && measure < 96 ? beat ===8
		       :measure >146  && measure < 264? beat ===8
	         :'1'}
}))
$ongaq.add($my_drums_2)



/*******************************
*コード
*
********************************/

const C =new Chord("C",{octave :2})
const D =new Chord("D",{octave :2})
const E =new Chord("E",{octave :2})
const F =new Chord("F",{octave :2})
const G =new Chord("G",{octave :2})
const A =new Chord("A",{octave :2})
const B =new Chord("B",{octave :2})

const CM7 =new Chord("CM7",{octave :2})
const DM7 =new Chord("DM7",{octave :2})
const EM7 =new Chord("EM7",{octave :2})
const FM7 =new Chord("FM7",{octave :2})
const GM7 =new Chord("GM7",{octave :2})
const AM7 =new Chord("AM7",{octave :2})
const BM7 =new Chord("BM7",{octave :2})

const C7 =new Chord("C7",{octave :2})
const D7 =new Chord("D7",{octave :2})
const E7 =new Chord("E7",{octave :2})
const F7 =new Chord("F7",{octave :2})
const G7 =new Chord("G7",{octave :2})
const A7 =new Chord("A7",{octave :2})
const B7 =new Chord("B7",{octave :2})

const Cm =new Chord("Cm",{octave :2})
const Dm =new Chord("Dm",{octave :2})
const Em =new Chord("Em",{octave :2})
const Fm =new Chord("Fm",{octave :2})
const Gm =new Chord("Gm",{octave :2})
const Am =new Chord("Am",{octave :2})
const Bm =new Chord("Bm",{octave :2})



// ************************************
//
// ラストメロディー
//導入
//
// ************************************
const $melody = new Part ({
	sound: "string_pad",
	measure: 500, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})


$melody.add( new Filter ({
	key:  "D2",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	187	?	beat	===0
		:	measure	===	195	?	beat	===0
		:	 '1'}
}) )

$melody.add( new Filter ({
	key:  "E2",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	187	?	beat	===2
		:	measure	===	195	?	beat	===2
		:	 '1'}
}) )

$melody.add( new Filter ({
	key:  "G2",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	187	?	beat	===4
		:	measure	===	195	?	beat	===4
		:	 '1'}
}) )
$melody.add( new Filter ({
	key:  "G2",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	187	?	beat	===8
		:	measure	===	195	?	beat	===8
		:	 '1'}
}) )

$melody.add( new Filter ({
	key:  "D2",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	187	?	beat	===12
		:	measure	===	195	?	beat	===12
		:	 '1'}
}) )

$melody.add( new Filter ({
	key:  "E2",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	187	?	beat	===14
		:	measure	===	195	?	beat	===14
		:	 '1'}
}) )

$melody.add( new Filter ({
	key:  "G2",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	188	?	beat	===0
		:	measure	===	196	?	beat	===0
		:	 '1'}
}) )
$melody.add( new Filter ({
	key:  "G2",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	188	?	beat	===4
		:	measure	===	196	?	beat	===4
		:	 '1'}
}) )

$melody.add( new Filter ({
	key:  "D2",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	188	?	beat	===8
		:	measure	===	196	?	beat	===8
		:	 '1'}
}) )
$melody.add( new Filter ({
	key:  "E2",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	188	?	beat	===10
		:	measure	===	196	?	beat	===10
		:	 '1'}
}) )
$melody.add( new Filter ({
	key:  "G2",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	188	?	beat	===12
		:	measure	===	196	?	beat	===12
		:	 '1'}
}) )

$melody.add( new Filter ({
	key:  "A2",
	length:  7, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	189	?	beat	===0
		:	measure	===	197	?	beat	===0
		:	 '1'}
}) )
$melody.add( new Filter ({
	key:  "G2",
	length:  7, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	189	?	beat	===8
		:	measure	===	197	?	beat	===8
		:	 '1'}
}) )

$melody.add( new Filter ({
	key:  "D2",
	length:  1, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	190	?	beat	===0
		:	measure	===	198	?	beat	===0
		:	 '1'}
}) )
$melody.add( new Filter ({
	key:  "E2",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	190	?	beat	===1
		:	measure	===	198	?	beat	===1
		:	 '1'}
}) )
$melody.add( new Filter ({
	key:  "D2",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	190	?	beat	===8
		:	measure	===	198	?	beat	===8
		:	 '1'}
}) )



$melody.add( new Filter ({
	key:  "A1",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	191	?	beat	===0
		:	measure	===	199	?	beat	===0
		:	 '1'}
}) )

$melody.add( new Filter ({
	key:  "C2",
	length:  3, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	191	?	beat	===4
		:	measure	===	199	?	beat	===4
		:	 '1'}
}) )

$melody.add( new Filter ({
	key:  "C2",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	191	?	beat	===8
		:	measure	===	199	?	beat	===8
		:	 '1'}
}) )
$melody.add( new Filter ({
	key:  "A1",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	191	?	beat	===12
		:	measure	===	199	?	beat	===12
		:	 '1'}
}) )

$melody.add( new Filter ({
	key:  "C2",
	length:  7, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	192	?	beat	===0
		:	measure	===	200	?	beat	===0
		:	 '1'}
}) )

$melody.add( new Filter ({
	key:  "C2",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	192	?	beat	===8
		:	measure	===	200	?	beat	===8
		:	 '1'}
}) )

$melody.add( new Filter ({
	key:  "A1",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	192	?	beat	===12
		:	measure	===	200	?	beat	===12
		:	 '1'}
}) )


$melody.add( new Filter ({
	key:  "E2",
	length:  3, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	193	?	beat	===0
		:	measure	===	201	?	beat	===0
		:	 '1'}
}) )

$melody.add( new Filter ({
	key:  "D2",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	193	?	beat	===4
		:	measure	===	201	?	beat	===4
		:	 '1'}
}) )
$melody.add( new Filter ({
	key:  "D2",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	193	?	beat	===12
		:	measure	===	201	?	beat	===12
		:	 '1'}
}) )
$melody.add( new Filter ({
	key:  "C2",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	194	?	beat	===8
		:	measure	===	202	?	beat	===8
		:	 '1'}
}) )
$ongaq.add($melody);


// ************************************:
// メロディサブ
// **
// ************************************:

const $melody_sub = new Part ({
	sound: "poly_synth",
	measure: 500, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})


$melody_sub.add( new Filter ({
	key:  "D2",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	187	?	beat	===0
		:	measure	===	195	?	beat	===0
		:	 '1'}
}) )

$melody_sub.add( new Filter ({
	key:  "E2",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	187	?	beat	===2
		:	measure	===	195	?	beat	===2
		:	 '1'}
}) )

$melody_sub.add( new Filter ({
	key:  "G2",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	187	?	beat	===4
		:	measure	===	195	?	beat	===4
		:	 '1'}
}) )
$melody_sub.add( new Filter ({
	key:  "G2",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	187	?	beat	===8
		:	measure	===	195	?	beat	===8
		:	 '1'}
}) )

$melody_sub.add( new Filter ({
	key:  "D2",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	187	?	beat	===12
		:	measure	===	195	?	beat	===12
		:	 '1'}
}) )

$melody_sub.add( new Filter ({
	key:  "E2",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	187	?	beat	===14
		:	measure	===	195	?	beat	===14
		:	 '1'}
}) )

$melody_sub.add( new Filter ({
	key:  "G2",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	188	?	beat	===0
		:	measure	===	196	?	beat	===0
		:	 '1'}
}) )
$melody_sub.add( new Filter ({
	key:  "G2",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	188	?	beat	===4
		:	measure	===	196	?	beat	===4
		:	 '1'}
}) )

$melody_sub.add( new Filter ({
	key:  "D2",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	188	?	beat	===8
		:	measure	===	196	?	beat	===8
		:	 '1'}
}) )
$melody_sub.add( new Filter ({
	key:  "E2",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	188	?	beat	===10
		:	measure	===	196	?	beat	===10
		:	 '1'}
}) )
$melody_sub.add( new Filter ({
	key:  "G2",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	188	?	beat	===12
		:	measure	===	196	?	beat	===12
		:	 '1'}
}) )

$melody_sub.add( new Filter ({
	key:  "A2",
	length:  7, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	189	?	beat	===0
		:	measure	===	197	?	beat	===0
		:	 '1'}
}) )
$melody_sub.add( new Filter ({
	key:  "G2",
	length:  7, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	189	?	beat	===8
		:	measure	===	197	?	beat	===8
		:	 '1'}
}) )

$melody_sub.add( new Filter ({
	key:  "D2",
	length:  1, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	190	?	beat	===0
		:	measure	===	198	?	beat	===0
		:	 '1'}
}) )
$melody_sub.add( new Filter ({
	key:  "E2",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	190	?	beat	===1
		:	measure	===	198	?	beat	===1
		:	 '1'}
}) )
$melody_sub.add( new Filter ({
	key:  "D2",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	190	?	beat	===8
		:	measure	===	198	?	beat	===8
		:	 '1'}
}) )



$melody_sub.add( new Filter ({
	key:  "A1",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	191	?	beat	===0
		:	measure	===	199	?	beat	===0
		:	 '1'}
}) )

$melody_sub.add( new Filter ({
	key:  "C2",
	length:  3, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	191	?	beat	===4
		:	measure	===	199	?	beat	===4
		:	 '1'}
}) )

$melody_sub.add( new Filter ({
	key:  "C2",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	191	?	beat	===8
		:	measure	===	199	?	beat	===8
		:	 '1'}
}) )
$melody_sub.add( new Filter ({
	key:  "A1",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	191	?	beat	===12
		:	measure	===	199	?	beat	===12
		:	 '1'}
}) )

$melody_sub.add( new Filter ({
	key:  "C2",
	length:  7, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	192	?	beat	===0
		:	measure	===	200	?	beat	===0
		:	 '1'}
}) )

$melody_sub.add( new Filter ({
	key:  "C2",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	192	?	beat	===8
		:	measure	===	200	?	beat	===8
		:	 '1'}
}) )

$melody_sub.add( new Filter ({
	key:  "A1",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	192	?	beat	===12
		:	measure	===	200	?	beat	===12
		:	 '1'}
}) )


$melody_sub.add( new Filter ({
	key:  "E2",
	length:  3, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	193	?	beat	===0
		:	measure	===	201	?	beat	===0
		:	 '1'}
}) )

$melody_sub.add( new Filter ({
	key:  "D2",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	193	?	beat	===4
		:	measure	===	201	?	beat	===4
		:	 '1'}
}) )
$melody_sub.add( new Filter ({
	key:  "D2",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	193	?	beat	===12
		:	measure	===	201	?	beat	===12
		:	 '1'}
}) )
$melody_sub.add( new Filter ({
	key:  "C2",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	===	194	?	beat	===8
		:	measure	===	202	?	beat	===8
		:	 '1'}
}) )
$ongaq.add($melody_sub);



// ************************************
//
// ラストメロディー
//メイン
//
// ************************************
const $melody_2 = new Part ({
	sound: "rock_guitar",
	measure: 500, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

$melody_2.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	203	?	beat ===0
		:	measure	 ===	219	?	beat ===0
		:	measure	 ===	235	?	beat ===0
		:	measure	 ===	251	?	beat ===0
		:'1'}
}) )

$melody_2.add( new Filter ({
	key:  "G3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	203	?	beat ===4
		:	measure	 ===	219	?	beat ===4
		:	measure	 ===	235	?	beat ===4
		:	measure	 ===	251	?	beat ===4

		: '1'}
}) )
$melody_2.add( new Filter ({
	key:  "G3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	203	?	beat ===8
		:	measure	 ===	219	?	beat ===8
		:	measure	 ===	235	?	beat ===8
		:	measure	 ===	251	?	beat ===8

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "G3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	204	?	beat ===0
		:	measure	 ===	220	?	beat ===0
		:	measure	 ===	236	?	beat ===0
		:	measure	 ===	252	?	beat ===0

		: '1'}
}) )
$melody_2.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	204	?	beat ===8
		:	measure	 ===	220	?	beat ===8
		:	measure	 ===	236	?	beat ===8
		:	measure	 ===	252	?	beat ===8

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	204	?	beat ===12
		:	measure	 ===	220	?	beat ===12
		:	measure	 ===	236	?	beat ===12
		:	measure	 ===	252	?	beat ===12
		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "A3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	205	?	beat ===0
		:	measure	 ===	221	?	beat ===0
		:	measure	 ===	237	?	beat ===0
		:	measure	 ===	253	?	beat ===0

		: '1'}
}) )
$melody_2.add( new Filter ({
	key:  "G3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	205	?	beat ===8
		:	measure	 ===	221	?	beat ===8
		:	measure	 ===	237	?	beat ===8
		:	measure	 ===	253	?	beat ===8

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "D3",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	206	?	beat ===0
		:	measure	 ===	222	?	beat ===0
		:	measure	 ===	238	?	beat ===0
		:	measure	 ===	254	?	beat ===0

		: '1'}
}) )
$melody_2.add( new Filter ({
	key:  "E3",
	length:  7, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	206	?	beat ===1
		:	measure	 ===	222	?	beat ===1
		:	measure	 ===	238	?	beat ===1
		:	measure	 ===	254	?	beat ===1

		: '1'}
}) )
$melody_2.add( new Filter ({
	key:  "D3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	206	?	beat ===8
		:	measure	 ===	222	?	beat ===8
		:	measure	 ===	238	?	beat ===8
		:	measure	 ===	254	?	beat ===8

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "A2",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	207	?	beat ===0
		:	measure	 ===	223	?	beat ===0
		:	measure	 ===	239	?	beat ===0
		:	measure	 ===	255	?	beat ===0

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	207	?	beat ===4
		:	measure	 ===	223	?	beat ===4
		:	measure	 ===	239	?	beat ===4
		:	measure	 ===	255	?	beat ===4

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	207	?	beat ===8
		:	measure	 ===	223	?	beat ===8
		:	measure	 ===	239	?	beat ===8
		:	measure	 ===	255	?	beat ===8

		: '1'}
}) )
$melody_2.add( new Filter ({
	key:  "A2",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	207	?	beat ===12
		:	measure	 ===	223	?	beat ===12
		:	measure	 ===	239	?	beat ===12
		:	measure	 ===	255	?	beat ===12

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	208	?	beat ===0
		:	measure	 ===	224	?	beat ===0
		:	measure	 ===	240	?	beat ===0
		:	measure	 ===	256	?	beat ===0

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	208	?	beat ===8
		:	measure	 ===	224	?	beat ===8
		:	measure	 ===	240	?	beat ===8
		:	measure	 ===	256	?	beat ===8

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "A2",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	208	?	beat ===12
		:	measure	 ===	224	?	beat ===12
		:	measure	 ===	240	?	beat ===12
		:	measure	 ===	256	?	beat ===12

		: '1'}
}) )


$melody_2.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	209	?	beat ===0
		:	measure	 ===	225	?	beat ===0
		:	measure	 ===	241	?	beat ===0
		:	measure	 ===	257	?	beat ===0

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "D3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	209	?	beat ===4
		:	measure	 ===	225	?	beat ===4
		:	measure	 ===	241	?	beat ===4
		:	measure	 ===	257	?	beat ===4

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "D3",
	length:  10, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	209	?	beat ===12
		:	measure	 ===	225	?	beat ===12
		:	measure	 ===	241	?	beat ===12
		:	measure	 ===	257	?	beat ===12

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	210	?	beat ===8
		:	measure	 ===	226	?	beat ===8
		:	measure	 ===	242	?	beat ===8
		:	measure	 ===	258	?	beat ===8

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	211	?	beat ===0
		:	measure	 ===	227	?	beat ===0
		:	measure	 ===	243	?	beat ===0
		:	measure	 ===	259	?	beat ===0

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "G3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	211	?	beat ===4
		:	measure	 ===	227	?	beat ===4
		:	measure	 ===	243	?	beat ===4
		:	measure	 ===	259	?	beat ===4

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "G3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	211	?	beat ===8
		:	measure	 ===	227	?	beat ===8
		:	measure	 ===	243	?	beat ===8
		:	measure	 ===	259	?	beat ===8

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "G3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	212	?	beat ===0
		:	measure	 ===	228	?	beat ===0
		:	measure	 ===	244	?	beat ===0
		:	measure	 ===	260	?	beat ===0

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	212	?	beat ===8
		:	measure	 ===	228	?	beat ===8
		:	measure	 ===	244	?	beat ===8
		:	measure	 ===	260	?	beat ===8

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	212	?	beat ===12
		:	measure	 ===	228	?	beat ===12
		:	measure	 ===	244	?	beat ===12
		:	measure	 ===	260	?	beat ===12

		: '1'}
}) )


$melody_2.add( new Filter ({
	key:  "A3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	213	?	beat ===0
		:	measure	 ===	229	?	beat ===0
		:	measure	 ===	245	?	beat ===0
		:	measure	 ===	261	?	beat ===0

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	213	?	beat ===8
		:	measure	 ===	229	?	beat ===8
		:	measure	 ===	245	?	beat ===8
		:	measure	 ===	261	?	beat ===8

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "E3",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	213	?	beat ===14
		:	measure	 ===	229	?	beat ===14
		:	measure	 ===	245	?	beat ===14
		:	measure	 ===	261	?	beat ===14

		: '1'}
}) )


$melody_2.add( new Filter ({
	key:  "G3",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	214	?	beat ===0
		:	measure	 ===	230	?	beat ===0
		:	measure	 ===	246	?	beat ===0
		:	measure	 ===	262	?	beat ===0

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "A3",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	214	?	beat ===2
		:	measure	 ===	230	?	beat ===2
		:	measure	 ===	246	?	beat ===2
		:	measure	 ===	262	?	beat ===2

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "C4",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	214	?	beat ===4
		:	measure	 ===	230	?	beat ===4
		:	measure	 ===	246	?	beat ===4
		:	measure	 ===	262	?	beat ===4

		: '1'}
}) )
$melody_2.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	214	?	beat ===12
		:	measure	 ===	230	?	beat ===12
		:	measure	 ===	246	?	beat ===12
		:	measure	 ===	262	?	beat ===12

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "G3",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	215	?	beat ===0
		:	measure	 ===	231	?	beat ===0
		:	measure	 ===	247	?	beat ===0
		:	measure	 ===	263	?	beat ===0

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "A3",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	215	?	beat ===2
		:	measure	 ===	231	?	beat ===2
		:	measure	 ===	247	?	beat ===2
		:	measure	 ===	263	?	beat ===2

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "C4",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	215	?	beat ===4
		:	measure	 ===	231	?	beat ===4
		:	measure	 ===	247	?	beat ===4
		:	measure	 ===	263	?	beat ===4

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "C4",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	215	?	beat ===8
		:	measure	 ===	231	?	beat ===8
		:	measure	 ===	247	?	beat ===8
		:	measure	 ===	263	?	beat ===8

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	215	?	beat ===12
		:	measure	 ===	231	?	beat ===12
		:	measure	 ===	247	?	beat ===12
		:	measure	 ===	263	?	beat ===12

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "C4",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	216	?	beat ===0
		:	measure	 ===	232	?	beat ===0
		:	measure	 ===	248	?	beat ===0
		:	measure	 ===	264	?	beat ===0

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "C4",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	216	?	beat ===8
		:	measure	 ===	232	?	beat ===8
		:	measure	 ===	248	?	beat ===8
		:	measure	 ===	264	?	beat ===8

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "A3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	216	?	beat ===12
		:	measure	 ===	232	?	beat ===12
		:	measure	 ===	248	?	beat ===12
		:	measure	 ===	264	?	beat ===12

		: '1'}
}) )


$melody_2.add( new Filter ({
	key:  "E4",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	217	?	beat ===0
		:	measure	 ===	233	?	beat ===0
		:	measure	 ===	249	?	beat ===0
		:	measure	 ===	265	?	beat ===0

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "D4",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	217	?	beat ===4
		:	measure	 ===	233	?	beat ===4
		:	measure	 ===	249	?	beat ===4
		:	measure	 ===	265	?	beat ===4

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "D4",
	length:  12, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	217	?	beat ===12
		:	measure	 ===	233	?	beat ===12
		:	measure	 ===	249	?	beat ===12
		:	measure	 ===	265	?	beat ===12

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "C4",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	218	?	beat ===8
		:	measure	 ===	234	?	beat ===8
		:	measure	 ===	250	?	beat ===8
		:	measure	 ===	266	?	beat ===8

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "C4",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	218	?	beat ===12
		:	measure	 ===	234	?	beat ===12
		:	measure	 ===	250	?	beat ===12

		: '1'}
}) )

$melody_2.add( new Filter ({
	key:  "D4",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	218	?	beat ===14
		:	measure	 ===	234	?	beat ===14
		:	measure	 ===	250	?	beat ===14
		: '1'}
}) )

$ongaq.add($melody_2);





// ************************************
//
// ラストメロディー
//メイン サブ
//
// ************************************
const $melody_2_sub = new Part ({
	sound: "violin",
	measure: 500, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

$melody_2_sub.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	203	?	beat ===0
		:	measure	 ===	219	?	beat ===0
		:	measure	 ===	235	?	beat ===0
		:	measure	 ===	251	?	beat ===0
		:'1'}
}) )

$melody_2_sub.add( new Filter ({
	key:  "G3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	203	?	beat ===4
		:	measure	 ===	219	?	beat ===4
		:	measure	 ===	235	?	beat ===4
		:	measure	 ===	251	?	beat ===4
		:'1'}

}) )
$melody_2_sub.add( new Filter ({
	key:  "G3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	203	?	beat ===8
		:	measure	 ===	219	?	beat ===8
		:	measure	 ===	235	?	beat ===8
		:	measure	 ===	251	?	beat ===8
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "G3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	204	?	beat ===0
		:	measure	 ===	220	?	beat ===0
		:	measure	 ===	236	?	beat ===0
		:	measure	 ===	252	?	beat ===0
		:'1'}

}) )
$melody_2_sub.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	204	?	beat ===8
		:	measure	 ===	220	?	beat ===8
		:	measure	 ===	236	?	beat ===8
		:	measure	 ===	252	?	beat ===8
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	204	?	beat ===12
		:	measure	 ===	220	?	beat ===12
		:	measure	 ===	236	?	beat ===12
		:	measure	 ===	252	?	beat ===12
		:'1'}
}) )

$melody_2_sub.add( new Filter ({
	key:  "A3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	205	?	beat ===0
		:	measure	 ===	221	?	beat ===0
		:	measure	 ===	237	?	beat ===0
		:	measure	 ===	253	?	beat ===0
		:'1'}

}) )
$melody_2_sub.add( new Filter ({
	key:  "G3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	205	?	beat ===8
		:	measure	 ===	221	?	beat ===8
		:	measure	 ===	237	?	beat ===8
		:	measure	 ===	253	?	beat ===8
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "D3",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	206	?	beat ===0
		:	measure	 ===	222	?	beat ===0
		:	measure	 ===	238	?	beat ===0
		:	measure	 ===	254	?	beat ===0
		:'1'}

}) )
$melody_2_sub.add( new Filter ({
	key:  "E3",
	length:  7, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	206	?	beat ===1
		:	measure	 ===	222	?	beat ===1
		:	measure	 ===	238	?	beat ===1
		:	measure	 ===	254	?	beat ===1
		:'1'}

}) )
$melody_2_sub.add( new Filter ({
	key:  "D3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	206	?	beat ===8
		:	measure	 ===	222	?	beat ===8
		:	measure	 ===	238	?	beat ===8
		:	measure	 ===	254	?	beat ===8
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "A2",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	207	?	beat ===0
		:	measure	 ===	223	?	beat ===0
		:	measure	 ===	239	?	beat ===0
		:	measure	 ===	255	?	beat ===0
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	207	?	beat ===4
		:	measure	 ===	223	?	beat ===4
		:	measure	 ===	239	?	beat ===4
		:	measure	 ===	255	?	beat ===4
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	207	?	beat ===8
		:	measure	 ===	223	?	beat ===8
		:	measure	 ===	239	?	beat ===8
		:	measure	 ===	255	?	beat ===8
		:'1'}

}) )
$melody_2_sub.add( new Filter ({
	key:  "A2",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	207	?	beat ===12
		:	measure	 ===	223	?	beat ===12
		:	measure	 ===	239	?	beat ===12
		:	measure	 ===	255	?	beat ===12
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	208	?	beat ===0
		:	measure	 ===	224	?	beat ===0
		:	measure	 ===	240	?	beat ===0
		:	measure	 ===	256	?	beat ===0
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	208	?	beat ===8
		:	measure	 ===	224	?	beat ===8
		:	measure	 ===	240	?	beat ===8
		:	measure	 ===	256	?	beat ===8
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "A2",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	208	?	beat ===12
		:	measure	 ===	224	?	beat ===12
		:	measure	 ===	240	?	beat ===12
		:	measure	 ===	256	?	beat ===12
		:'1'}

}) )


$melody_2_sub.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	209	?	beat ===0
		:	measure	 ===	225	?	beat ===0
		:	measure	 ===	241	?	beat ===0
		:	measure	 ===	257	?	beat ===0
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "D3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	209	?	beat ===4
		:	measure	 ===	225	?	beat ===4
		:	measure	 ===	241	?	beat ===4
		:	measure	 ===	257	?	beat ===4
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "D3",
	length:  10, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	209	?	beat ===12
		:	measure	 ===	225	?	beat ===12
		:	measure	 ===	241	?	beat ===12
		:	measure	 ===	257	?	beat ===12
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	210	?	beat ===8
		:	measure	 ===	226	?	beat ===8
		:	measure	 ===	242	?	beat ===8
		:	measure	 ===	258	?	beat ===8
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	211	?	beat ===0
		:	measure	 ===	227	?	beat ===0
		:	measure	 ===	243	?	beat ===0
		:	measure	 ===	259	?	beat ===0
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "G3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	211	?	beat ===4
		:	measure	 ===	227	?	beat ===4
		:	measure	 ===	243	?	beat ===4
		:	measure	 ===	259	?	beat ===4
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "G3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	211	?	beat ===8
		:	measure	 ===	227	?	beat ===8
		:	measure	 ===	243	?	beat ===8
		:	measure	 ===	259	?	beat ===8
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "G3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	212	?	beat ===0
		:	measure	 ===	228	?	beat ===0
		:	measure	 ===	244	?	beat ===0
		:	measure	 ===	260	?	beat ===0
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	212	?	beat ===8
		:	measure	 ===	228	?	beat ===8
		:	measure	 ===	244	?	beat ===8
		:	measure	 ===	260	?	beat ===8
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	212	?	beat ===12
		:	measure	 ===	228	?	beat ===12
		:	measure	 ===	244	?	beat ===12
		:	measure	 ===	260	?	beat ===12
		:'1'}

}) )


$melody_2_sub.add( new Filter ({
	key:  "A3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	213	?	beat ===0
		:	measure	 ===	229	?	beat ===0
		:	measure	 ===	245	?	beat ===0
		:	measure	 ===	261	?	beat ===0
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	213	?	beat ===8
		:	measure	 ===	229	?	beat ===8
		:	measure	 ===	245	?	beat ===8
		:	measure	 ===	261	?	beat ===8
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "E3",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	213	?	beat ===14
		:	measure	 ===	229	?	beat ===14
		:	measure	 ===	245	?	beat ===14
		:	measure	 ===	261	?	beat ===14
		:'1'}

}) )


$melody_2_sub.add( new Filter ({
	key:  "G3",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	214	?	beat ===0
		:	measure	 ===	230	?	beat ===0
		:	measure	 ===	246	?	beat ===0
		:	measure	 ===	262	?	beat ===0
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "A3",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	214	?	beat ===2
		:	measure	 ===	230	?	beat ===2
		:	measure	 ===	246	?	beat ===2
		:	measure	 ===	262	?	beat ===2
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "C4",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	214	?	beat ===4
		:	measure	 ===	230	?	beat ===4
		:	measure	 ===	246	?	beat ===4
		:	measure	 ===	262	?	beat ===4
		:'1'}

}) )
$melody_2_sub.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	214	?	beat ===12
		:	measure	 ===	230	?	beat ===12
		:	measure	 ===	246	?	beat ===12
		:	measure	 ===	262	?	beat ===12
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "G3",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	215	?	beat ===0
		:	measure	 ===	231	?	beat ===0
		:	measure	 ===	247	?	beat ===0
		:	measure	 ===	263	?	beat ===0
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "A3",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	215	?	beat ===2
		:	measure	 ===	231	?	beat ===2
		:	measure	 ===	247	?	beat ===2
		:	measure	 ===	263	?	beat ===2
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "C4",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	215	?	beat ===4
		:	measure	 ===	231	?	beat ===4
		:	measure	 ===	247	?	beat ===4
		:	measure	 ===	263	?	beat ===4
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "C4",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	215	?	beat ===8
		:	measure	 ===	231	?	beat ===8
		:	measure	 ===	247	?	beat ===8
		:	measure	 ===	263	?	beat ===8
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	215	?	beat ===12
		:	measure	 ===	231	?	beat ===12
		:	measure	 ===	247	?	beat ===12
		:	measure	 ===	263	?	beat ===12
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "C4",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	216	?	beat ===0
		:	measure	 ===	232	?	beat ===0
		:	measure	 ===	248	?	beat ===0
		:	measure	 ===	264	?	beat ===0
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "C4",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	216	?	beat ===8
		:	measure	 ===	232	?	beat ===8
		:	measure	 ===	248	?	beat ===8
		:	measure	 ===	264	?	beat ===8
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "A3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	216	?	beat ===12
		:	measure	 ===	232	?	beat ===12
		:	measure	 ===	248	?	beat ===12
		:	measure	 ===	264	?	beat ===12
		:'1'}

}) )


$melody_2_sub.add( new Filter ({
	key:  "E4",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	217	?	beat ===0
		:	measure	 ===	233	?	beat ===0
		:	measure	 ===	249	?	beat ===0
		:	measure	 ===	265	?	beat ===0
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "D4",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	217	?	beat ===4
		:	measure	 ===	233	?	beat ===4
		:	measure	 ===	249	?	beat ===4
		:	measure	 ===	265	?	beat ===4
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "D4",
	length:  12, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	217	?	beat ===12
		:	measure	 ===	233	?	beat ===12
		:	measure	 ===	249	?	beat ===12
		:	measure	 ===	265	?	beat ===12
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "C4",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	218	?	beat ===8
		:	measure	 ===	234	?	beat ===8
		:	measure	 ===	250	?	beat ===8
		:	measure	 ===	266	?	beat ===8
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "C4",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	218	?	beat ===12
		:	measure	 ===	234	?	beat ===12
		:	measure	 ===	250	?	beat ===12
		:'1'}

}) )

$melody_2_sub.add( new Filter ({
	key:  "D4",
	length:  2, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure	 ===	218	?	beat ===14
		:	measure	 ===	234	?	beat ===14
		:	measure	 ===	250	?	beat ===14
		:'1'}
}) )

$ongaq.add($melody_2_sub);





/*******************************
*コード進行
********************************/
const $chord = new Part ({
	sound: "plain_keyboard",
	measure: 500, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

// ***************************:::
// Aメロ、Bめろ
// ***************************:::
$chord.add( new Filter ({
	key:  C,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 0 ? beat%4 ===0
		: measure === 8 ? beat%4 ===0
		: measure === 16 ? beat%4 ===0
		: measure === 24 ? beat%4 ===0
		: measure === 32 ? beat%4 ===0
		: measure === 96 ? beat%4 ===0
		: measure === 104 ? beat%4 ===0
		: measure === 112 ? beat%4 ===0
		: measure === 120 ? beat%4 ===0
		: '1'}
}) )
$chord.add( new Filter ({
	key:  C,
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 1 ? beat ===4
		: measure === 9 ? beat === 4
		: measure === 17 ? beat === 4
		: measure === 25 ? beat === 4
		: measure === 33 ? beat === 4
		: measure === 97 ? beat === 4
		: measure === 105 ? beat === 4
		: measure === 113 ? beat === 4
		: measure === 121 ? beat === 4
		: '1'}
}) )
$chord.add( new Filter ({
	key:  C,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 1 ? beat ===12
		: measure === 9 ? beat === 12
		: measure === 17 ? beat === 12
		: measure === 25 ? beat === 12
		: measure === 33 ? beat === 12
		: measure === 97 ? beat === 12
		: measure === 105 ? beat === 12
		: measure === 113 ? beat === 12
		: measure === 121 ? beat === 12
		: '1'}
}) )


$chord.add( new Filter ({
	key:  C,
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 2 ? beat ===0
		: measure === 10 ? beat === 0
		: measure === 18 ? beat === 0
		: measure === 26 ? beat === 0
		: measure === 34 ? beat === 0
		: measure === 98 ? beat === 0
		: measure === 106 ? beat === 0
		: measure === 114 ? beat === 0
		: measure === 122 ? beat === 0
		: '1'}
}) )
$chord.add( new Filter ({
	key:  G,
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 2 ? beat ===8
		: measure === 10 ? beat === 8
		: measure === 18 ? beat === 8
		: measure === 26 ? beat === 8
		: measure === 34 ? beat === 8
		: measure === 98 ? beat === 8
		: measure === 106 ? beat === 8
		: measure === 114 ? beat === 8
		: measure === 122 ? beat === 8
		: '1'}
}) )
$chord.add( new Filter ({
	key:  F,
	length:  10, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 3 ? beat ===0
		: measure === 11 ? beat === 0
		: measure === 19 ? beat === 0
		: measure === 27 ? beat === 0
		: measure === 35 ? beat === 0
		: measure === 99 ? beat === 0
		: measure === 107 ? beat === 0
		: measure === 115 ? beat === 0
		: measure === 123 ? beat === 0
		: '1'}
}) )



$chord.add( new Filter ({
	key:  F,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 4 ? beat%4 ===0
		: measure === 12 ? beat%4 ===0
		: measure === 20 ? beat%4 ===0
		: measure === 28 ? beat%4 ===0
		: measure === 36 ? beat%4 ===0
		: measure === 100 ? beat%4 ===0
		: measure === 108 ? beat%4 ===0
		: measure === 116 ? beat%4 ===0
		: measure === 124 ? beat%4 ===0
		: '1'}
}) )

$chord.add( new Filter ({
	key:  F,
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 5 ? beat ===4
		: measure === 13 ? beat === 4
		: measure === 21 ? beat === 4
		: measure === 29 ? beat === 4
		: measure === 37 ? beat === 4
		: measure === 101 ? beat === 4
		: measure === 109 ? beat === 4
		: measure === 117 ? beat === 4
		: measure === 125 ? beat === 4
		: '1'}
}) )
$chord.add( new Filter ({
	key:  F,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 5 ? beat ===12
		: measure === 13 ? beat === 12
		: measure === 21 ? beat === 12
		: measure === 29 ? beat === 12
		: measure === 37 ? beat === 12
		: measure === 101 ? beat === 12
		: measure === 109 ? beat === 12
		: measure === 117 ? beat === 12
		: measure === 125 ? beat === 12
		: '1'}
}) )

$chord.add( new Filter ({
	key:  F,
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 6 ? beat ===0
		: measure === 14 ? beat === 0
		: measure === 22 ? beat === 0
		: measure === 30 ? beat === 0
		: measure === 38 ? beat === 0
		: measure === 102 ? beat === 0
		: measure === 110 ? beat === 0
		: measure === 118 ? beat === 0
		: measure === 126 ? beat === 0
		: '1'}
}) )
$chord.add( new Filter ({
	key:  Em,
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 6 ? beat ===8
		: measure === 14 ? beat === 8
		: measure === 22 ? beat === 8
		: measure === 30 ? beat === 8
		: measure === 38 ? beat === 8
		: measure === 102 ? beat === 8
		: measure === 110 ? beat === 8
		: measure === 118 ? beat === 8
		: measure === 126 ? beat === 8
		: '1'}
}) )
$chord.add( new Filter ({
	key:  Am,
	length:  12, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 7 ? beat ===0
		: measure === 15 ? beat === 0
		: measure === 23 ? beat === 0
		: measure === 31 ? beat === 0
		: measure === 39 ? beat === 0
		: measure === 103 ? beat === 0
		: measure === 111 ? beat === 0
		: measure === 119 ? beat === 0
		: measure === 127 ? beat === 0
		: '1'}
}) )



// // /*******************************
// // *コード変換
// // ********************************/

$chord.add( new Filter ({
	key:  C,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 128 ? beat%4 ===0
		: '1'}
}) )
$chord.add( new Filter ({
	key:  C,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 129 ? beat ===4
		: '1'}
}) )
$chord.add( new Filter ({
	key:  C,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 129 ? beat ===12
		: '1'}
}) )


$chord.add( new Filter ({
	key:  C,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 130 ? beat ===0
		: '1'}
}) )
$chord.add( new Filter ({
	key:  G,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 130 ? beat ===8
		: '1'}
}) )





// // /*******************************
// // *ブリッジ
// // ********************************/



$chord.add( new Filter ({
	key:  F,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 40 ? beat %4===0
		: measure === 41 ? beat %4===0
		: measure === 44 ? beat %4===0
		: measure === 45 ? beat %4===0
		: measure === 48 ? beat %4===0
		: measure === 49 ? beat %4===0
		: measure === 131 ? beat %4===0
		: measure === 132 ? beat %4===0
		: measure === 135 ? beat %4===0
		: measure === 136 ? beat %4===0
		: measure === 139 ? beat %4===0
		: measure === 140 ? beat %4===0
		:'1'}
}) )

$chord.add( new Filter ({
	key:  G,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 42 ? beat ===0
		: measure === 46 ? beat ===0
		: measure === 50 ? beat ===0
		: measure === 133 ? beat ===0
		: measure === 137 ? beat ===0
		: measure === 141 ? beat ===0
		: '1'}
}) )
$chord.add( new Filter ({
	key:  G,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 42 ? beat ===4
		: measure === 46 ? beat ===4
		: measure === 50 ? beat ===4
		: measure === 133 ? beat ===4
		: measure === 137 ? beat ===4
		: measure === 141 ? beat ===4
		: '1'}
}) )
$chord.add( new Filter ({
	key:  G,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 42 ? beat ===8
		: measure === 46 ? beat ===8
		: measure === 50 ? beat ===8
		: measure === 133 ? beat ===8
		: measure === 137 ? beat ===8
		: measure === 141 ? beat ===8
		: '1'}
}) )
$chord.add( new Filter ({
	key:  Am,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 42 ? beat ===12
		: measure === 46 ? beat ===12
		: measure === 50 ? beat ===12
		: measure === 133 ? beat ===12
		: measure === 137 ? beat ===12
		: measure === 141 ? beat ===12
		: '1'}
}) )
$chord.add( new Filter ({
	key:  Am,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 43 ? beat%4 ===0
		: measure === 47 ? beat%4 ===0
		: measure === 51 ? beat%4 ===0
		: measure === 134 ? beat%4 ===0
		: measure === 138 ? beat%4 ===0
		: measure === 142 ? beat%4 ===0
		: '1'}
}) )
$chord.add( new Filter ({
	key:  G,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 52 ? beat %4 ===0
		: measure === 53 ? beat %4 ===0
		: measure === 54 ? beat %4 ===0
		: measure === 55 ? beat %4 ===0
		: measure === 143 ? beat %4 ===0
		: measure === 144 ? beat %4 ===0
		: measure === 145 ? beat %4 ===0
		: measure === 146 ? beat %4 ===0
		: '1'}
}) )

// /*******************************
// *コード変更点
// ********************************/






// /*******************************
// *サビ
// ********************************/


$chord.add( new Filter ({
	key:  F,
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 === 		56	?	beat	 === 	0
	:measure		 === 	60	?		beat	 === 	0
	:measure		 === 	64	?		beat	 === 	0
	:measure		 === 	68	?		beat	 === 	0
	:measure		 === 	72	?		beat	 === 	0
	:measure		 === 	76	?		beat	 === 	0
	:measure		 === 	80	?		beat	 === 	0
	:measure		 === 	84	?		beat	 === 	0
	:measure		 === 	88	?		beat	 === 	0
	:measure		 === 	92	?		beat	 === 	0

	:measure		 === 	147	?		beat	 === 	0
	:measure		 === 	151	?		beat	 === 	0
	:measure		 === 	155	?		beat	 === 	0
	:measure		 === 	159	?		beat	 === 	0
	:measure		 === 	163	?		beat	 === 	0
	:measure		 === 	167	?		beat	 === 	0
	:measure		 === 	171	?		beat	 === 	0
	:measure		 === 	175	?		beat	 === 	0
	:measure		 === 	179	?		beat	 === 	0
	:measure		 === 	183	?		beat	 === 	0

	:measure		 === 	187	?		beat	 === 	0
	:measure		 === 	191	?		beat	 === 	0
	:measure		 === 	195	?		beat	 === 	0
	:measure		 === 	199	?		beat	 === 	0
	:measure		 === 	203	?		beat	 === 	0
	:measure		 === 	207	?		beat	 === 	0
	:measure		 === 	211	?		beat	 === 	0
	:measure		 === 	215	?		beat	 === 	0
	:measure		 === 	219	?		beat	 === 	0
	:measure		 === 	223	?		beat	 === 	0

	:measure		 === 	227	?		beat	 === 	0
	:measure		 === 	231	?		beat	 === 	0
	:measure		 === 	235	?		beat	 === 	0
	:measure		 === 	239	?		beat	 === 	0
	:measure		 === 	243	?		beat	 === 	0
	:measure		 === 	247	?		beat	 === 	0
	:measure		 === 	251	?		beat	 === 	0
	:measure		 === 	255	?		beat	 === 	0
	:measure		 === 	259	?		beat	 === 	0
	:measure		 === 	263	?		beat	 === 	0

	:	 '1'}
}) )
$chord.add( new Filter ({
	key:  F,
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 === 		56	?	beat	 === 	4
	:measure		 === 	60	?	beat	 === 	4
	:measure		 === 	64	?	beat	 === 	4
	:measure		 === 	68	?	beat	 === 	4
	:measure		 === 	72	?	beat	 === 	4
	:measure		 === 	76	?	beat	 === 	4
	:measure		 === 	80	?	beat	 === 	4
	:measure		 === 	84	?	beat	 === 	4
	:measure		 === 	88	?	beat	 === 	4
	:measure		 === 	92	?	beat	 === 	4
	:measure		 === 	147	?		beat	 === 	4
	:measure		 === 	151	?		beat	 === 	4
	:measure		 === 	155	?		beat	 === 	4
	:measure		 === 	159	?		beat	 === 	4
	:measure		 === 	163	?		beat	 === 	4
	:measure		 === 	167	?		beat	 === 	4
	:measure		 === 	171	?		beat	 === 	4
	:measure		 === 	175	?		beat	 === 	4
	:measure		 === 	179	?		beat	 === 	4
	:measure		 === 	183	?		beat	 === 	4

	:measure		 === 	187	?		beat	 === 	4
	:measure		 === 	191	?		beat	 === 	4
	:measure		 === 	195	?		beat	 === 	4
	:measure		 === 	199	?		beat	 === 	4
	:measure		 === 	203	?		beat	 === 	4
	:measure		 === 	207	?		beat	 === 	4
	:measure		 === 	211	?		beat	 === 	4
	:measure		 === 	215	?		beat	 === 	4
	:measure		 === 	219	?		beat	 === 	4
	:measure		 === 	223	?		beat	 === 	4

	:measure		 === 	227	?		beat	 === 	4
	:measure		 === 	231	?		beat	 === 	4
	:measure		 === 	235	?		beat	 === 	4
	:measure		 === 	239	?		beat	 === 	4
	:measure		 === 	243	?		beat	 === 	4
	:measure		 === 	247	?		beat	 === 	4
	:measure		 === 	251	?		beat	 === 	4
	:measure		 === 	255	?		beat	 === 	4
	:measure		 === 	259	?		beat	 === 	4
	:measure		 === 	263	?		beat	 === 	4

	:	 '1'}
}) )
$chord.add( new Filter ({
	key:  F,
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 === 		56	?	beat	 === 	8
	:measure		 === 	60	?	beat	 === 	8
	:measure		 === 	64	?	beat	 === 	8
	:measure		 === 	68	?	beat	 === 	8
	:measure		 === 	72	?	beat	 === 	8
	:measure		 === 	76	?	beat	 === 	8
	:measure		 === 	80	?	beat	 === 	8
	:measure		 === 	84	?	beat	 === 	8
	:measure		 === 	88	?	beat	 === 	8
	:measure		 === 	92	?	beat	 === 	8
	:measure		 === 	147	?		beat	 === 	8
	:measure		 === 	151	?		beat	 === 	8
	:measure		 === 	155	?		beat	 === 	8
	:measure		 === 	159	?		beat	 === 	8
	:measure		 === 	163	?		beat	 === 	8
	:measure		 === 	167	?		beat	 === 	8
	:measure		 === 	171	?		beat	 === 	8
	:measure		 === 	175	?		beat	 === 	8
	:measure		 === 	179	?		beat	 === 	8
	:measure		 === 	183	?		beat	 === 	8

	:measure		 === 	187	?		beat	 === 	8
	:measure		 === 	191	?		beat	 === 	8
	:measure		 === 	195	?		beat	 === 	8
	:measure		 === 	199	?		beat	 === 	8
	:measure		 === 	203	?		beat	 === 	8
	:measure		 === 	207	?		beat	 === 	8
	:measure		 === 	211	?		beat	 === 	8
	:measure		 === 	215	?		beat	 === 	8
	:measure		 === 	219	?		beat	 === 	8
	:measure		 === 	223	?		beat	 === 	8

	:measure		 === 	227	?		beat	 === 	8
	:measure		 === 	231	?		beat	 === 	8
	:measure		 === 	235	?		beat	 === 	8
	:measure		 === 	239	?		beat	 === 	8
	:measure		 === 	243	?		beat	 === 	8
	:measure		 === 	247	?		beat	 === 	8
	:measure		 === 	251	?		beat	 === 	8
	:measure		 === 	255	?		beat	 === 	8
	:measure		 === 	259	?		beat	 === 	8
	:measure		 === 	263	?		beat	 === 	8

	:	 '1'}
}) )
$chord.add( new Filter ({
	key:  C,
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 === 		56	?	beat	 === 	12
	:measure		 === 	60	?	beat	 === 	12
	:measure		 === 	64	?	beat	 === 	12
	:measure		 === 	68	?	beat	 === 	12
	:measure		 === 	72	?	beat	 === 	12
	:measure		 === 	76	?	beat	 === 	12
	:measure		 === 	80	?	beat	 === 	12
	:measure		 === 	84	?	beat	 === 	12
	:measure		 === 	88	?	beat	 === 	12
	:measure		 === 	92	?	beat	 === 	12
	:measure		 === 	147	?		beat	 === 	12
	:measure		 === 	151	?		beat	 === 	12
	:measure		 === 	155	?		beat	 === 	12
	:measure		 === 	159	?		beat	 === 	12
	:measure		 === 	163	?		beat	 === 	12
	:measure		 === 	167	?		beat	 === 	12
	:measure		 === 	171	?		beat	 === 	12
	:measure		 === 	175	?		beat	 === 	12
	:measure		 === 	179	?		beat	 === 	12
	:measure		 === 	183	?		beat	 === 	12

	:measure		 === 	187	?		beat	 === 	12
	:measure		 === 	191	?		beat	 === 	12
	:measure		 === 	195	?		beat	 === 	12
	:measure		 === 	199	?		beat	 === 	12
	:measure		 === 	203	?		beat	 === 	12
	:measure		 === 	207	?		beat	 === 	12
	:measure		 === 	211	?		beat	 === 	12
	:measure		 === 	215	?		beat	 === 	12
	:measure		 === 	219	?		beat	 === 	12
	:measure		 === 	223	?		beat	 === 	12

	:measure		 === 	227	?		beat	 === 	12
	:measure		 === 	231	?		beat	 === 	12
	:measure		 === 	235	?		beat	 === 	12
	:measure		 === 	239	?		beat	 === 	12
	:measure		 === 	243	?		beat	 === 	12
	:measure		 === 	247	?		beat	 === 	12
	:measure		 === 	251	?		beat	 === 	12
	:measure		 === 	255	?		beat	 === 	12
	:measure		 === 	259	?		beat	 === 	12
	:measure		 === 	263	?		beat	 === 	12

	:	 '1'}
}) )
$chord.add( new Filter ({
	key:  C,
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 === 		57	?	beat	 === 	4
	:measure		 === 	61	?	beat	 === 	4
	:measure		 === 	65	?	beat	 === 	4
	:measure		 === 	69	?	beat	 === 	4
	:measure		 === 	73	?	beat	 === 	4
	:measure		 === 	77	?	beat	 === 	4
	:measure		 === 	81	?	beat	 === 	4
	:measure		 === 	85	?	beat	 === 	4
	:measure		 === 	89	?	beat	 === 	4
	:measure		 === 	93	?	beat	 === 	4
	:measure		 === 	148	?		beat	 === 	4
	:measure		 === 	152	?		beat	 === 	4
	:measure		 === 	156	?		beat	 === 	4
	:measure		 === 	160	?		beat	 === 	4
	:measure		 === 	164	?		beat	 === 	4
	:measure		 === 	168	?		beat	 === 	4
	:measure		 === 	172	?		beat	 === 	4
	:measure		 === 	176	?		beat	 === 	4
	:measure		 === 	180	?		beat	 === 	4
	:measure		 === 	184	?		beat	 === 	4

	:measure		 === 	188	?		beat	 === 	4
	:measure		 === 	192	?		beat	 === 	4
	:measure		 === 	196	?		beat	 === 	4
	:measure		 === 	200	?		beat	 === 	4
	:measure		 === 	204	?		beat	 === 	4
	:measure		 === 	208	?		beat	 === 	4
	:measure		 === 	212	?		beat	 === 	4
	:measure		 === 	216	?		beat	 === 	4
	:measure		 === 	220	?		beat	 === 	4
	:measure		 === 	224	?		beat	 === 	4

	:measure		 === 	228	?		beat	 === 	4
	:measure		 === 	232	?		beat	 === 	4
	:measure		 === 	236	?		beat	 === 	4
	:measure		 === 	240	?		beat	 === 	4
	:measure		 === 	244	?		beat	 === 	4
	:measure		 === 	248	?		beat	 === 	4
	:measure		 === 	252	?		beat	 === 	4
	:measure		 === 	256	?		beat	 === 	4
	:measure		 === 	260	?		beat	 === 	4
	:measure		 === 	264	?		beat	 === 	4

	:	 '1'}
}) )
$chord.add( new Filter ({
	key:  C,
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 === 		57	?	beat	 === 	8
	:measure		 === 	61	?	beat	 === 	8
	:measure		 === 	65	?	beat	 === 	8
	:measure		 === 	69	?	beat	 === 	8
	:measure		 === 	73	?	beat	 === 	8
	:measure		 === 	77	?	beat	 === 	8
	:measure		 === 	81	?	beat	 === 	8
	:measure		 === 	85	?	beat	 === 	8
	:measure		 === 	89	?	beat	 === 	8
	:measure		 === 	93	?	beat	 === 	8
	:measure		 === 	148	?		beat	 === 	8
	:measure		 === 	152	?		beat	 === 	8
	:measure		 === 	156	?		beat	 === 	8
	:measure		 === 	160	?		beat	 === 	8
	:measure		 === 	164	?		beat	 === 	8
	:measure		 === 	168	?		beat	 === 	8
	:measure		 === 	172	?		beat	 === 	8
	:measure		 === 	176	?		beat	 === 	8
	:measure		 === 	180	?		beat	 === 	8
	:measure		 === 	184	?		beat	 === 	8

	:measure		 === 	188	?		beat	 === 	8
	:measure		 === 	192	?		beat	 === 	8
	:measure		 === 	196	?		beat	 === 	8
	:measure		 === 	200	?		beat	 === 	8
	:measure		 === 	204	?		beat	 === 	8
	:measure		 === 	208	?		beat	 === 	8
	:measure		 === 	212	?		beat	 === 	8
	:measure		 === 	216	?		beat	 === 	8
	:measure		 === 	220	?		beat	 === 	8
	:measure		 === 	224	?		beat	 === 	8

	:measure		 === 	228	?		beat	 === 	8
	:measure		 === 	232	?		beat	 === 	8
	:measure		 === 	236	?		beat	 === 	8
	:measure		 === 	240	?		beat	 === 	8
	:measure		 === 	244	?		beat	 === 	8
	:measure		 === 	248	?		beat	 === 	8
	:measure		 === 	252	?		beat	 === 	8
	:measure		 === 	256	?		beat	 === 	8
	:measure		 === 	260	?		beat	 === 	8
	:measure		 === 	264	?		beat	 === 	8

	:	 '1'}
}) )
$chord.add( new Filter ({
	key:  C,
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 === 		57	?	beat	 === 	12
	:measure		 === 	61	?	beat	 === 	12
	:measure		 === 	65	?	beat	 === 	12
	:measure		 === 	69	?	beat	 === 	12
	:measure		 === 	73	?	beat	 === 	12
	:measure		 === 	77	?	beat	 === 	12
	:measure		 === 	81	?	beat	 === 	12
	:measure		 === 	85	?	beat	 === 	12
	:measure		 === 	89	?	beat	 === 	12
	:measure		 === 	93	?	beat	 === 	12
	:measure		 === 	148	?		beat	 === 	12
	:measure		 === 	152	?		beat	 === 	12
	:measure		 === 	156	?		beat	 === 	12
	:measure		 === 	160	?		beat	 === 	12
	:measure		 === 	164	?		beat	 === 	12
	:measure		 === 	168	?		beat	 === 	12
	:measure		 === 	172	?		beat	 === 	12
	:measure		 === 	176	?		beat	 === 	12
	:measure		 === 	180	?		beat	 === 	12
	:measure		 === 	184	?		beat	 === 	12

	:measure		 === 	188	?		beat	 === 	12
	:measure		 === 	192	?		beat	 === 	12
	:measure		 === 	196	?		beat	 === 	12
	:measure		 === 	200	?		beat	 === 	12
	:measure		 === 	204	?		beat	 === 	12
	:measure		 === 	208	?		beat	 === 	12
	:measure		 === 	212	?		beat	 === 	12
	:measure		 === 	216	?		beat	 === 	12
	:measure		 === 	220	?		beat	 === 	12
	:measure		 === 	224	?		beat	 === 	12

	:measure		 === 	228	?		beat	 === 	12
	:measure		 === 	232	?		beat	 === 	12
	:measure		 === 	236	?		beat	 === 	12
	:measure		 === 	240	?		beat	 === 	12
	:measure		 === 	244	?		beat	 === 	12
	:measure		 === 	248	?		beat	 === 	12
	:measure		 === 	252	?		beat	 === 	12
	:measure		 === 	256	?		beat	 === 	12
	:measure		 === 	260	?		beat	 === 	12
	:measure		 === 	264	?		beat	 === 	12

	:	 '1'}
}) )
$chord.add( new Filter ({
	key:  G,
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 === 		58	?	beat		 === 	0
	:measure		 === 	62	?	beat	 === 	0
	:measure		 === 	66	?	beat	 === 	0
	:measure		 === 	70	?	beat	 === 	0
	:measure		 === 	74	?	beat	 === 	0
	:measure		 === 	78	?	beat	 === 	0
	:measure		 === 	82	?	beat	 === 	0
	:measure		 === 	86	?	beat	 === 	0
	:measure		 === 	90	?	beat	 === 	0
	:measure		 === 	94	?	beat	 === 	0
	:measure		 === 	149	?		beat	 === 	0
	:measure		 === 	153	?		beat	 === 	0
	:measure		 === 	157	?		beat	 === 	0
	:measure		 === 	161	?		beat	 === 	0
	:measure		 === 	165	?		beat	 === 	0
	:measure		 === 	169	?		beat	 === 	0
	:measure		 === 	173	?		beat	 === 	0
	:measure		 === 	177	?		beat	 === 	0
	:measure		 === 	181	?		beat	 === 	0
	:measure		 === 	185	?		beat	 === 	0

	:measure		 === 	189	?		beat	 === 	0
	:measure		 === 	193	?		beat	 === 	0
	:measure		 === 	197	?		beat	 === 	0
	:measure		 === 	201	?		beat	 === 	0
	:measure		 === 	205	?		beat	 === 	0
	:measure		 === 	209	?		beat	 === 	0
	:measure		 === 	213	?		beat	 === 	0
	:measure		 === 	217	?		beat	 === 	0
	:measure		 === 	221	?		beat	 === 	0
	:measure		 === 	225	?		beat	 === 	0

	:measure		 === 	229	?		beat	 === 	0
	:measure		 === 	233	?		beat	 === 	0
	:measure		 === 	237	?		beat	 === 	0
	:measure		 === 	241	?		beat	 === 	0
	:measure		 === 	245	?		beat	 === 	0
	:measure		 === 	249	?		beat	 === 	0
	:measure		 === 	253	?		beat	 === 	0
	:measure		 === 	257	?		beat	 === 	0
	:measure		 === 	261	?		beat	 === 	0
	:measure		 === 	265	?		beat	 === 	0

	:	 '1'}
}) )
$chord.add( new Filter ({
	key:  G,
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 === 		58	?	beat		 === 	4
	:measure		 === 	62	?	beat	 === 	4
	:measure		 === 	66	?	beat	 === 	4
	:measure		 === 	70	?	beat	 === 	4
	:measure		 === 	74	?	beat	 === 	4
	:measure		 === 	78	?	beat	 === 	4
	:measure		 === 	82	?	beat	 === 	4
	:measure		 === 	86	?	beat	 === 	4
	:measure		 === 	90	?	beat	 === 	4
	:measure		 === 	94	?	beat	 === 	4
	:measure		 === 	149	?		beat	 === 	4
	:measure		 === 	153	?		beat	 === 	4
	:measure		 === 	157	?		beat	 === 	4
	:measure		 === 	161	?		beat	 === 	4
	:measure		 === 	165	?		beat	 === 	4
	:measure		 === 	169	?		beat	 === 	4
	:measure		 === 	173	?		beat	 === 	4
	:measure		 === 	177	?		beat	 === 	4
	:measure		 === 	181	?		beat	 === 	4
	:measure		 === 	185	?		beat	 === 	4

	:measure		 === 	189	?		beat	 === 	4
	:measure		 === 	193	?		beat	 === 	4
	:measure		 === 	197	?		beat	 === 	4
	:measure		 === 	201	?		beat	 === 	4
	:measure		 === 	205	?		beat	 === 	4
	:measure		 === 	209	?		beat	 === 	4
	:measure		 === 	213	?		beat	 === 	4
	:measure		 === 	217	?		beat	 === 	4
	:measure		 === 	221	?		beat	 === 	4
	:measure		 === 	225	?		beat	 === 	4

	:measure		 === 	229	?		beat	 === 	4
	:measure		 === 	233	?		beat	 === 	4
	:measure		 === 	237	?		beat	 === 	4
	:measure		 === 	241	?		beat	 === 	4
	:measure		 === 	245	?		beat	 === 	4
	:measure		 === 	249	?		beat	 === 	4
	:measure		 === 	253	?		beat	 === 	4
	:measure		 === 	257	?		beat	 === 	4
	:measure		 === 	261	?		beat	 === 	4
	:measure		 === 	265	?		beat	 === 	4

	:	 '1'}
}) )
$chord.add( new Filter ({
	key:  G,
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 === 		58	?	beat		 === 	8
	:measure		 === 	62	?	beat	 === 	8
	:measure		 === 	66	?	beat	 === 	8
	:measure		 === 	70	?	beat	 === 	8
	:measure		 === 	74	?	beat	 === 	8
	:measure		 === 	78	?	beat	 === 	8
	:measure		 === 	82	?	beat	 === 	8
	:measure		 === 	86	?	beat	 === 	8
	:measure		 === 	90	?	beat	 === 	8
	:measure		 === 	94	?	beat	 === 	8
	:measure		 === 	149	?		beat	 === 	8
	:measure		 === 	153	?		beat	 === 	8
	:measure		 === 	157	?		beat	 === 	8
	:measure		 === 	161	?		beat	 === 	8
	:measure		 === 	165	?		beat	 === 	8
	:measure		 === 	169	?		beat	 === 	8
	:measure		 === 	173	?		beat	 === 	8
	:measure		 === 	177	?		beat	 === 	8
	:measure		 === 	181	?		beat	 === 	8
	:measure		 === 	185	?		beat	 === 	8

	:measure		 === 	189	?		beat	 === 	8
	:measure		 === 	193	?		beat	 === 	8
	:measure		 === 	197	?		beat	 === 	8
	:measure		 === 	201	?		beat	 === 	8
	:measure		 === 	205	?		beat	 === 	8
	:measure		 === 	209	?		beat	 === 	8
	:measure		 === 	213	?		beat	 === 	8
	:measure		 === 	217	?		beat	 === 	8
	:measure		 === 	221	?		beat	 === 	8
	:measure		 === 	225	?		beat	 === 	8

	:measure		 === 	229	?		beat	 === 	8
	:measure		 === 	233	?		beat	 === 	8
	:measure		 === 	237	?		beat	 === 	8
	:measure		 === 	241	?		beat	 === 	8
	:measure		 === 	245	?		beat	 === 	8
	:measure		 === 	249	?		beat	 === 	8
	:measure		 === 	253	?		beat	 === 	8
	:measure		 === 	257	?		beat	 === 	8
	:measure		 === 	261	?		beat	 === 	8
	:measure		 === 	265	?		beat	 === 	8

	:	 '1'}
}) )
$chord.add( new Filter ({
	key:  Am,
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 === 		58	?	beat		 === 	12
	:measure		 === 	62	?	beat	 === 	12
	:measure		 === 	66	?	beat	 === 	12
	:measure		 === 	70	?	beat	 === 	12
	:measure		 === 	74	?	beat	 === 	12
	:measure		 === 	78	?	beat	 === 	12
	:measure		 === 	82	?	beat	 === 	12
	:measure		 === 	86	?	beat	 === 	12
	:measure		 === 	90	?	beat	 === 	12
	:measure		 === 	94	?	beat	 === 	12
	:measure		 === 	149	?		beat	 === 	12
	:measure		 === 	153	?		beat	 === 	12
	:measure		 === 	157	?		beat	 === 	12
	:measure		 === 	161	?		beat	 === 	12
	:measure		 === 	165	?		beat	 === 	12
	:measure		 === 	169	?		beat	 === 	12
	:measure		 === 	173	?		beat	 === 	12
	:measure		 === 	177	?		beat	 === 	12
	:measure		 === 	181	?		beat	 === 	12
	:measure		 === 	185	?		beat	 === 	12

	:measure		 === 	189	?		beat	 === 	12
	:measure		 === 	193	?		beat	 === 	12
	:measure		 === 	197	?		beat	 === 	12
	:measure		 === 	201	?		beat	 === 	12
	:measure		 === 	205	?		beat	 === 	12
	:measure		 === 	209	?		beat	 === 	12
	:measure		 === 	213	?		beat	 === 	12
	:measure		 === 	217	?		beat	 === 	12
	:measure		 === 	221	?		beat	 === 	12
	:measure		 === 	225	?		beat	 === 	12

	:measure		 === 	229	?		beat	 === 	12
	:measure		 === 	233	?		beat	 === 	12
	:measure		 === 	237	?		beat	 === 	12
	:measure		 === 	241	?		beat	 === 	12
	:measure		 === 	245	?		beat	 === 	12
	:measure		 === 	249	?		beat	 === 	12
	:measure		 === 	253	?		beat	 === 	12
	:measure		 === 	257	?		beat	 === 	12
	:measure		 === 	261	?		beat	 === 	12
	:measure		 === 	265	?		beat	 === 	12

	:	 '1'}
}) )
$chord.add( new Filter ({
	key:  Am,
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 === 		59	?	beat		 === 	4
	:measure		 === 	63	?	beat	 === 	4
	:measure		 === 	67	?	beat	 === 	4
	:measure		 === 	71	?	beat	 === 	4
	:measure		 === 	75	?	beat	 === 	4
	:measure		 === 	79	?	beat	 === 	4
	:measure		 === 	83	?	beat	 === 	4
	:measure		 === 	87	?	beat	 === 	4
	:measure		 === 	91	?	beat	 === 	4
	:measure		 === 	95	?	beat	 === 	4
	:measure		 === 	150	?		beat	 === 	4
	:measure		 === 	154	?		beat	 === 	4
	:measure		 === 	158	?		beat	 === 	4
	:measure		 === 	162	?		beat	 === 	4
	:measure		 === 	166	?		beat	 === 	4
	:measure		 === 	170	?		beat	 === 	4
	:measure		 === 	174	?		beat	 === 	4
	:measure		 === 	178	?		beat	 === 	4
	:measure		 === 	182	?		beat	 === 	4
	:measure		 === 	186	?		beat	 === 	4

	:measure		 === 	190	?		beat	 === 	4
	:measure		 === 	194	?		beat	 === 	4
	:measure		 === 	198	?		beat	 === 	4
	:measure		 === 	202	?		beat	 === 	4
	:measure		 === 	206	?		beat	 === 	4
	:measure		 === 	210	?		beat	 === 	4
	:measure		 === 	214	?		beat	 === 	4
	:measure		 === 	218	?		beat	 === 	4
	:measure		 === 	222	?		beat	 === 	4
	:measure		 === 	226	?		beat	 === 	4

	:measure		 === 	230	?		beat	 === 	4
	:measure		 === 	234	?		beat	 === 	4
	:measure		 === 	238	?		beat	 === 	4
	:measure		 === 	242	?		beat	 === 	4
	:measure		 === 	246	?		beat	 === 	4
	:measure		 === 	250	?		beat	 === 	4
	:measure		 === 	254	?		beat	 === 	4
	:measure		 === 	258	?		beat	 === 	4
	:measure		 === 	262	?		beat	 === 	4
	:measure		 === 	266	?		beat	 === 	4

	:	 '1'}
}) )
$chord.add( new Filter ({
	key:  Am,
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 === 		59	?	beat		 === 	8
	:measure		 === 	63	?	beat	 === 	8
	:measure		 === 	67	?	beat	 === 	8
	:measure		 === 	71	?	beat	 === 	8
	:measure		 === 	75	?	beat	 === 	8
	:measure		 === 	79	?	beat	 === 	8
	:measure		 === 	83	?	beat	 === 	8
	:measure		 === 	87	?	beat	 === 	8
	:measure		 === 	91	?	beat	 === 	8
	:measure		 === 	95	?	beat	 === 	8
	:measure		 === 	150	?		beat	 === 	8
	:measure		 === 	154	?		beat	 === 	8
	:measure		 === 	158	?		beat	 === 	8
	:measure		 === 	162	?		beat	 === 	8
	:measure		 === 	166	?		beat	 === 	8
	:measure		 === 	170	?		beat	 === 	8
	:measure		 === 	174	?		beat	 === 	8
	:measure		 === 	178	?		beat	 === 	8
	:measure		 === 	182	?		beat	 === 	8
	:measure		 === 	186	?		beat	 === 	8

	:measure		 === 	190	?		beat	 === 	8
	:measure		 === 	194	?		beat	 === 	8
	:measure		 === 	198	?		beat	 === 	8
	:measure		 === 	202	?		beat	 === 	8
	:measure		 === 	206	?		beat	 === 	8
	:measure		 === 	210	?		beat	 === 	8
	:measure		 === 	214	?		beat	 === 	8
	:measure		 === 	218	?		beat	 === 	8
	:measure		 === 	222	?		beat	 === 	8
	:measure		 === 	226	?		beat	 === 	8

	:measure		 === 	230	?		beat	 === 	8
	:measure		 === 	234	?		beat	 === 	8
	:measure		 === 	238	?		beat	 === 	8
	:measure		 === 	242	?		beat	 === 	8
	:measure		 === 	246	?		beat	 === 	8
	:measure		 === 	250	?		beat	 === 	8
	:measure		 === 	254	?		beat	 === 	8
	:measure		 === 	258	?		beat	 === 	8
	:measure		 === 	262	?		beat	 === 	8
	:measure		 === 	266	?		beat	 === 	8

	:	 '1'}
}) )
$chord.add( new Filter ({
	key:  Am,
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 === 		59	?	beat		 === 	12
	:measure		 === 	63	?	beat	 === 	12
	:measure		 === 	67	?	beat	 === 	12
	:measure		 === 	71	?	beat	 === 	12
	:measure		 === 	75	?	beat	 === 	12
	:measure		 === 	79	?	beat	 === 	12
	:measure		 === 	83	?	beat	 === 	12
	:measure		 === 	87	?	beat	 === 	12
	:measure		 === 	91	?	beat	 === 	12
	:measure		 === 	95	?	beat	 === 	12
	:measure		 === 	150	?		beat	 === 	12
	:measure		 === 	154	?		beat	 === 	12
	:measure		 === 	158	?		beat	 === 	12
	:measure		 === 	162	?		beat	 === 	12
	:measure		 === 	166	?		beat	 === 	12
	:measure		 === 	170	?		beat	 === 	12
	:measure		 === 	174	?		beat	 === 	12
	:measure		 === 	178	?		beat	 === 	12
	:measure		 === 	182	?		beat	 === 	12
	:measure		 === 	186	?		beat	 === 	12

	:measure		 === 	190	?		beat	 === 	12
	:measure		 === 	194	?		beat	 === 	12
	:measure		 === 	198	?		beat	 === 	12
	:measure		 === 	202	?		beat	 === 	12
	:measure		 === 	206	?		beat	 === 	12
	:measure		 === 	210	?		beat	 === 	12
	:measure		 === 	214	?		beat	 === 	12
	:measure		 === 	218	?		beat	 === 	12
	:measure		 === 	222	?		beat	 === 	12
	:measure		 === 	226	?		beat	 === 	12

	:measure		 === 	230	?		beat	 === 	12
	:measure		 === 	234	?		beat	 === 	12
	:measure		 === 	238	?		beat	 === 	12
	:measure		 === 	242	?		beat	 === 	12
	:measure		 === 	246	?		beat	 === 	12
	:measure		 === 	250	?		beat	 === 	12
	:measure		 === 	254	?		beat	 === 	12
	:measure		 === 	258	?		beat	 === 	12
	:measure		 === 	262	?		beat	 === 	12
	:measure		 === 	266	?		beat	 === 	12

	:	 '1'}
}) )



$ongaq.add($chord);










// /*******************************
// *ピアノ
// ********************************/
const $piano = new Part ({
	sound: "my_piano",
	measure: 256, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})


$piano.add( new Filter ({
	key:  "A3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 4 ? beat ===0
		: measure === 12 ? beat === 0
		: measure === 20 ? beat === 0
		: measure === 28 ? beat === 0
		: measure === 36 ? beat === 0
		: measure === 100 ? beat === 0
		: measure === 108 ? beat === 0
		: measure === 116 ? beat === 0
		: measure === 124 ? beat === 0
		: '1'}
}) )
$piano.add( new Filter ({
	key:  "A3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 4 ? beat ===4
		: measure === 12 ? beat === 4
		: measure === 20 ? beat === 4
		: measure === 28 ? beat === 4
		: measure === 36 ? beat === 4
		: measure === 100 ? beat === 4
		: measure === 108 ? beat === 4
		: measure === 116 ? beat === 4
		: measure === 124 ? beat === 4
		: '1'}
}) )
$piano.add( new Filter ({
	key:  "A3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 4 ? beat ===8
		: measure === 12 ? beat === 8
		: measure === 20 ? beat === 8
		: measure === 28 ? beat === 8
		: measure === 36 ? beat === 8
		: measure === 100 ? beat === 8
		: measure === 108 ? beat === 8
		: measure === 116 ? beat === 8
		: measure === 124 ? beat === 8
		: '1'}
}) )
$piano.add( new Filter ({
	key:  "A3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 4 ? beat ===12
		: measure === 12 ? beat === 12
		: measure === 20 ? beat === 12
		: measure === 28 ? beat === 12
		: measure === 36 ? beat === 12
		: measure === 100 ? beat === 12
		: measure === 108 ? beat === 12
		: measure === 116 ? beat === 12
		: measure === 124 ? beat === 12
		: '1'}
}) )
$piano.add( new Filter ({
	key:  "A3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 5 ? beat ===4
		: measure === 13 ? beat === 4
		: measure === 21 ? beat === 4
		: measure === 29 ? beat === 4
		: measure === 37 ? beat === 4
		: measure === 101 ? beat === 4
		: measure === 109 ? beat === 4
		: measure === 117 ? beat === 4
		: measure === 125 ? beat === 4
		: '1'}
}) )
$piano.add( new Filter ({
	key:  "G3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 5 ? beat ===12
		: measure === 13 ? beat === 12
		: measure === 21 ? beat === 12
		: measure === 29 ? beat === 12
		: measure === 37 ? beat === 12
		: measure === 101 ? beat === 12
		: measure === 109 ? beat === 12
		: measure === 117 ? beat === 12
		: measure === 125 ? beat === 12
		: '1'}
}) )

$piano.add( new Filter ({
	key:  "A3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 6 ? beat ===0
		: measure === 14 ? beat === 0
		: measure === 22 ? beat === 0
		: measure === 30 ? beat === 0
		: measure === 38 ? beat === 0
		: measure === 102 ? beat === 0
		: measure === 110 ? beat === 0
		: measure === 118 ? beat === 0
		: measure === 126 ? beat === 0
		: '1'}
}) )
$piano.add( new Filter ({
	key:  "G3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 6 ? beat ===8
		: measure === 14 ? beat === 8
		: measure === 22 ? beat === 8
		: measure === 30 ? beat === 8
		: measure === 38 ? beat === 8
		: measure === 102 ? beat === 8
		: measure === 110 ? beat === 8
		: measure === 118 ? beat === 8
		: measure === 126 ? beat === 8
		: '1'}
}) )
$piano.add( new Filter ({
	key:  "C4",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 7 ? beat ===0
		: measure === 15 ? beat === 0
		: measure === 23 ? beat === 0
		: measure === 31 ? beat === 0
		: measure === 39 ? beat === 0
		: measure === 103 ? beat === 0
		: measure === 111 ? beat === 0
		: measure === 119 ? beat === 0
		: measure === 127 ? beat === 0
		: '1'}
}) )


// ピアノAメロ、Bメロ


$piano.add( new Filter ({
	key:  C,
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 0 ? beat%4 ===0
		: measure === 8 ? beat%4 ===0
		: measure === 16 ? beat%4 ===0
		: measure === 24 ? beat%4 ===0
		: measure === 32 ? beat%4 ===0
		: measure === 96 ? beat%4 ===0
		: measure === 104 ? beat%4 ===0
		: measure === 112 ? beat%4 ===0
		: measure === 120 ? beat%4 ===0
		: '1'}
}) )
$piano.add( new Filter ({
	key:  C,
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 1 ? beat ===4
		: measure === 9 ? beat === 4
		: measure === 17 ? beat === 4
		: measure === 25 ? beat === 4
		: measure === 33 ? beat === 4
		: measure === 97 ? beat === 4
		: measure === 105 ? beat === 4
		: measure === 113 ? beat === 4
		: measure === 121 ? beat === 4
		: '1'}
}) )
$piano.add( new Filter ({
	key:  C,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 1 ? beat ===12
		: measure === 9 ? beat === 12
		: measure === 17 ? beat === 12
		: measure === 25 ? beat === 12
		: measure === 33 ? beat === 12
		: measure === 97 ? beat === 12
		: measure === 105 ? beat === 12
		: measure === 113 ? beat === 12
		: measure === 121 ? beat === 12
		: '1'}
}) )


$piano.add( new Filter ({
	key:  C,
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 2 ? beat ===0
		: measure === 10 ? beat === 0
		: measure === 18 ? beat === 0
		: measure === 26 ? beat === 0
		: measure === 34 ? beat === 0
		: measure === 98 ? beat === 0
		: measure === 106 ? beat === 0
		: measure === 114 ? beat === 0
		: measure === 122 ? beat === 0
		: '1'}
}) )
$piano.add( new Filter ({
	key:  G,
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 2 ? beat ===8
		: measure === 10 ? beat === 8
		: measure === 18 ? beat === 8
		: measure === 26 ? beat === 8
		: measure === 34 ? beat === 8
		: measure === 98 ? beat === 8
		: measure === 106 ? beat === 8
		: measure === 114 ? beat === 8
		: measure === 122 ? beat === 8
		: '1'}
}) )
$piano.add( new Filter ({
	key:  F,
	length:  12, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 3 ? beat ===0
		: measure === 11 ? beat === 0
		: measure === 19 ? beat === 0
		: measure === 27 ? beat === 0
		: measure === 35 ? beat === 0
		: measure === 99 ? beat === 0
		: measure === 107 ? beat === 0
		: measure === 115 ? beat === 0
		: measure === 123 ? beat === 0
		: '1'}
}) )



$piano.add( new Filter ({
	key:  F,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 4 ? beat%4 ===0
		: measure === 12 ? beat%4 ===0
		: measure === 20 ? beat%4 ===0
		: measure === 28 ? beat%4 ===0
		: measure === 36 ? beat%4 ===0
		: measure === 100 ? beat%4 ===0
		: measure === 108 ? beat%4 ===0
		: measure === 116 ? beat%4 ===0
		: measure === 124 ? beat%4 ===0
		: '1'}
}) )

$piano.add( new Filter ({
	key:  F,
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 5 ? beat ===4
		: measure === 13 ? beat === 4
		: measure === 21 ? beat === 4
		: measure === 29 ? beat === 4
		: measure === 37 ? beat === 4
		: measure === 101 ? beat === 4
		: measure === 109 ? beat === 4
		: measure === 117 ? beat === 4
		: measure === 125 ? beat === 4
		: '1'}
}) )
$piano.add( new Filter ({
	key:  F,
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 5 ? beat ===12
		: measure === 13 ? beat === 12
		: measure === 21 ? beat === 12
		: measure === 29 ? beat === 12
		: measure === 37 ? beat === 12
		: measure === 101 ? beat === 12
		: measure === 109 ? beat === 12
		: measure === 117 ? beat === 12
		: measure === 125 ? beat === 12
		: '1'}
}) )

$piano.add( new Filter ({
	key:  F,
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 6 ? beat ===0
		: measure === 14 ? beat === 0
		: measure === 22 ? beat === 0
		: measure === 30 ? beat === 0
		: measure === 38 ? beat === 0
		: measure === 102 ? beat === 0
		: measure === 110 ? beat === 0
		: measure === 118 ? beat === 0
		: measure === 126 ? beat === 0
		: '1'}
}) )
$piano.add( new Filter ({
	key:  Em,
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 6 ? beat ===8
		: measure === 14 ? beat === 8
		: measure === 22 ? beat === 8
		: measure === 30 ? beat === 8
		: measure === 38 ? beat === 8
		: measure === 102 ? beat === 8
		: measure === 110 ? beat === 8
		: measure === 118 ? beat === 8
		: measure === 126 ? beat === 8
		: '1'}
}) )
$piano.add( new Filter ({
	key:  Am,
	length:  12, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 7 ? beat ===0
		: measure === 15 ? beat === 0
		: measure === 23 ? beat === 0
		: measure === 31 ? beat === 0
		: measure === 39 ? beat === 0
		: measure === 103 ? beat === 0
		: measure === 111 ? beat === 0
		: measure === 119 ? beat === 0
		: measure === 127 ? beat === 0
		: '1'}
}) )






// // /*******************************
// // *ピアノブリッジ
// // ********************************/



$piano.add( new Filter ({
	key:  F,
	length:  16, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 40 ? beat ===0
		: measure === 41 ? beat ===0
		: measure === 44 ? beat ===0
		: measure === 45 ? beat ===0
		: measure === 48 ? beat ===0
		: measure === 49 ? beat ===0
		: measure === 131 ? beat ===0
		: measure === 132 ? beat ===0
		: measure === 135 ? beat ===0
		: measure === 136 ? beat ===0
		: measure === 139 ? beat ===0
		: measure === 140 ? beat ===0
		:'1'}
}) )

$piano.add( new Filter ({
	key:  G,
	length:  16, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 42 ? beat ===0
		: measure === 46 ? beat ===0
		: measure === 50 ? beat ===0
		: measure === 133 ? beat ===0
		: measure === 137 ? beat ===0
		: measure === 141 ? beat ===0
		: '1'}
}) )
$piano.add( new Filter ({
	key:  Am,
	length:  16, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 42 ? beat ===12
		: measure === 46 ? beat ===12
		: measure === 50 ? beat ===12
		: measure === 133 ? beat ===12
		: measure === 137 ? beat ===12
		: measure === 141 ? beat ===12
		: '1'}
}) )

$piano.add( new Filter ({
	key:  G,
	length:  32, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 52 ? beat ===0
		: measure === 143 ? beat ===0
		: '1'}
}) )



// ************************************::
// // ピアノ
// // サビ
// ************************************::
$piano.add( new Filter ({
	key:  F,
	length: 12, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		56	?	beat	 ===	0
	:measure		 ===	60	?		beat	 ===	0
	:measure		 ===	64	?		beat	 ===	0
	:measure		 ===	68	?		beat	 ===	0
	:measure		 ===	72	?		beat	 ===	0
	:measure		 ===	76	?		beat	 ===	0
	:measure		 ===	80	?		beat	 ===	0
	:measure		 ===	84	?		beat	 ===	0
	:measure		 ===	88	?		beat	 ===	0
	:measure		 ===	92	?		beat	 ===	0

	:measure		 ===	147	?		beat	 ===	0
	:measure		 ===	151	?		beat	 ===	0
	:measure		 ===	155	?		beat	 ===	0
	:measure		 ===	159	?		beat	 ===	0
	:measure		 ===	163	?		beat	 ===	0
	:measure		 ===	167	?		beat	 ===	0
	:measure		 ===	171	?		beat	 ===	0
	:measure		 ===	175	?		beat	 ===	0
	:measure		 ===	179	?		beat	 ===	0
	:measure		 ===	183	?		beat	 ===	0

	:measure		 ===	187	?		beat	 ===	0
	:measure		 ===	191	?		beat	 ===	0
	:measure		 ===	195	?		beat	 ===	0
	:measure		 ===	199	?		beat	 ===	0
	:measure		 ===	203	?		beat	 ===	0
	:measure		 ===	207	?		beat	 ===	0
	:measure		 ===	211	?		beat	 ===	0
	:measure		 ===	215	?		beat	 ===	0
	:measure		 ===	219	?		beat	 ===	0
	:measure		 ===	223	?		beat	 ===	0

	:measure		 ===	227	?		beat	 ===	0
	:measure		 ===	231	?		beat	 ===	0
	:measure		 ===	235	?		beat	 ===	0
	:measure		 ===	239	?		beat	 ===	0
	:measure		 ===	243	?		beat	 ===	0
	:measure		 ===	247	?		beat	 ===	0
	:measure		 ===	251	?		beat	 ===	0
	:measure		 ===	255	?		beat	 ===	0
	:measure		 ===	259	?		beat	 ===	0
	:measure		 ===	263	?		beat	 ===	0

	:	 '1'}
}) )
$piano.add( new Filter ({
	key:  C,
	length:  12, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		56	?	beat	 ===	12
	:measure		 ===	60	?	beat	 ===	12
	:measure		 ===	64	?	beat	 ===	12
	:measure		 ===	68	?	beat	 ===	12
	:measure		 ===	72	?	beat	 ===	12
	:measure		 ===	76	?	beat	 ===	12
	:measure		 ===	80	?	beat	 ===	12
	:measure		 ===	84	?	beat	 ===	12
	:measure		 ===	88	?	beat	 ===	12
	:measure		 ===	92	?	beat	 ===	12
	:measure		 ===	147	?		beat	 ===	12
	:measure		 ===	151	?		beat	 ===	12
	:measure		 ===	155	?		beat	 ===	12
	:measure		 ===	159	?		beat	 ===	12
	:measure		 ===	163	?		beat	 ===	12
	:measure		 ===	167	?		beat	 ===	12
	:measure		 ===	171	?		beat	 ===	12
	:measure		 ===	175	?		beat	 ===	12
	:measure		 ===	179	?		beat	 ===	12
	:measure		 ===	183	?		beat	 ===	12

	:measure		 ===	187	?		beat	 ===	12
	:measure		 ===	191	?		beat	 ===	12
	:measure		 ===	195	?		beat	 ===	12
	:measure		 ===	199	?		beat	 ===	12
	:measure		 ===	203	?		beat	 ===	12
	:measure		 ===	207	?		beat	 ===	12
	:measure		 ===	211	?		beat	 ===	12
	:measure		 ===	215	?		beat	 ===	12
	:measure		 ===	219	?		beat	 ===	12
	:measure		 ===	223	?		beat	 ===	12

	:measure		 ===	227	?		beat	 ===	12
	:measure		 ===	231	?		beat	 ===	12
	:measure		 ===	235	?		beat	 ===	12
	:measure		 ===	239	?		beat	 ===	12
	:measure		 ===	243	?		beat	 ===	12
	:measure		 ===	247	?		beat	 ===	12
	:measure		 ===	251	?		beat	 ===	12
	:measure		 ===	255	?		beat	 ===	12
	:measure		 ===	259	?		beat	 ===	12
	:measure		 ===	263	?		beat	 ===	12

	:	 '1'}
}) )
$piano.add( new Filter ({
	key:  G,
	length:  12, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		58	?	beat		 ===	0
	:measure		 ===	62	?	beat	 ===	0
	:measure		 ===	66	?	beat	 ===	0
	:measure		 ===	70	?	beat	 ===	0
	:measure		 ===	74	?	beat	 ===	0
	:measure		 ===	78	?	beat	 ===	0
	:measure		 ===	82	?	beat	 ===	0
	:measure		 ===	86	?	beat	 ===	0
	:measure		 ===	90	?	beat	 ===	0
	:measure		 ===	94	?	beat	 ===	0
	:measure		 ===	149	?		beat	 ===	0
	:measure		 ===	153	?		beat	 ===	0
	:measure		 ===	157	?		beat	 ===	0
	:measure		 ===	161	?		beat	 ===	0
	:measure		 ===	165	?		beat	 ===	0
	:measure		 ===	169	?		beat	 ===	0
	:measure		 ===	173	?		beat	 ===	0
	:measure		 ===	177	?		beat	 ===	0
	:measure		 ===	181	?		beat	 ===	0
	:measure		 ===	185	?		beat	 ===	0

	:measure		 ===	189	?		beat	 ===	0
	:measure		 ===	193	?		beat	 ===	0
	:measure		 ===	197	?		beat	 ===	0
	:measure		 ===	201	?		beat	 ===	0
	:measure		 ===	205	?		beat	 ===	0
	:measure		 ===	209	?		beat	 ===	0
	:measure		 ===	213	?		beat	 ===	0
	:measure		 ===	217	?		beat	 ===	0
	:measure		 ===	221	?		beat	 ===	0
	:measure		 ===	225	?		beat	 ===	0

	:measure		 ===	229	?		beat	 ===	0
	:measure		 ===	233	?		beat	 ===	0
	:measure		 ===	237	?		beat	 ===	0
	:measure		 ===	241	?		beat	 ===	0
	:measure		 ===	245	?		beat	 ===	0
	:measure		 ===	249	?		beat	 ===	0
	:measure		 ===	253	?		beat	 ===	0
	:measure		 ===	257	?		beat	 ===	0
	:measure		 ===	261	?		beat	 ===	0
	:measure		 ===	265	?		beat	 ===	0

	:	 '1'}
}) )
$piano.add( new Filter ({
	key:  Am,
	length:  12, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		58	?	beat		 ===	12
	:measure		 ===	62	?	beat	 ===	12
	:measure		 ===	66	?	beat	 ===	12
	:measure		 ===	70	?	beat	 ===	12
	:measure		 ===	74	?	beat	 ===	12
	:measure		 ===	78	?	beat	 ===	12
	:measure		 ===	82	?	beat	 ===	12
	:measure		 ===	86	?	beat	 ===	12
	:measure		 ===	90	?	beat	 ===	12
	:measure		 ===	94	?	beat	 ===	12
	:measure		 ===	149	?		beat	 ===	12
	:measure		 ===	153	?		beat	 ===	12
	:measure		 ===	157	?		beat	 ===	12
	:measure		 ===	161	?		beat	 ===	12
	:measure		 ===	165	?		beat	 ===	12
	:measure		 ===	169	?		beat	 ===	12
	:measure		 ===	173	?		beat	 ===	12
	:measure		 ===	177	?		beat	 ===	12
	:measure		 ===	181	?		beat	 ===	12
	:measure		 ===	185	?		beat	 ===	12

	:measure		 ===	189	?		beat	 ===	12
	:measure		 ===	193	?		beat	 ===	12
	:measure		 ===	197	?		beat	 ===	12
	:measure		 ===	201	?		beat	 ===	12
	:measure		 ===	205	?		beat	 ===	12
	:measure		 ===	209	?		beat	 ===	12
	:measure		 ===	213	?		beat	 ===	12
	:measure		 ===	217	?		beat	 ===	12
	:measure		 ===	221	?		beat	 ===	12
	:measure		 ===	225	?		beat	 ===	12

	:measure		 ===	229	?		beat	 ===	12
	:measure		 ===	233	?		beat	 ===	12
	:measure		 ===	237	?		beat	 ===	12
	:measure		 ===	241	?		beat	 ===	12
	:measure		 ===	245	?		beat	 ===	12
	:measure		 ===	249	?		beat	 ===	12
	:measure		 ===	253	?		beat	 ===	12
	:measure		 ===	257	?		beat	 ===	12
	:measure		 ===	261	?		beat	 ===	12
	:measure		 ===	265	?		beat	 ===	12

	:	 '1'}
}) )



$ongaq.add($piano);







/*******************************
*ボーカル
********************************/
const $vocal = new Part ({
	sound: "violin",
	measure: 256, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})


$vocal.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 8 ? beat===0
					:measure === 104 ? beat===0
					:'1'}
}) )
$vocal.add( new Filter ({
	key:  "D3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 8 ? beat===4
					:measure === 104 ? beat===4
					:'1'}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 8 ? beat===8
					:measure === 104 ? beat===8
					:'1'}
}) )
$vocal.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 8 ? beat===12
					:measure === 104 ? beat===12
					:'1'}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  10, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 9 ? beat===4
					:measure === 105 ? beat===4
					:'1'}
}) )
$vocal.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 9 ? beat===12
					:measure === 105 ? beat===12
					:'1'}
}) )

$vocal.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 10 ? beat===0
					:measure === 106 ? beat===0
					:'1'}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 10 ? beat===8
					:measure === 106 ? beat===8
					:'1'}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 11 ? beat===0
					:measure === 107 ? beat===0
					:'1'}
}) )






$vocal.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 16 ? beat ===0
		: measure === 32 ? beat === 0
		: measure === 112 ? beat === 0
		: '1'}
}) )
$vocal.add( new Filter ({
	key:  "D3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 16 ? beat ===4
		: measure === 32 ? beat === 4
		: measure === 112 ? beat === 4
		: '1'}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 16 ? beat ===8
		: measure === 32 ? beat === 8
		: measure === 112 ? beat === 8
		: '1'}
}) )
$vocal.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 16 ? beat ===12
		: measure === 32 ? beat === 12
		: measure === 112 ? beat === 12
		: '1'}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 17 ? beat ===4
		: measure === 33 ? beat === 4
		: measure === 113 ? beat === 4
		: '1'}
}) )
$vocal.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 17 ? beat ===12
		: measure === 33 ? beat === 12
		: measure === 113 ? beat === 12
		: '1'}
}) )

$vocal.add( new Filter ({
	key:  "F3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 18 ? beat ===0
		: measure === 34 ? beat === 0
		: measure === 114 ? beat === 0
		: '1'}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 18 ? beat ===6
		: measure === 34 ? beat === 6
		: measure === 114 ? beat === 6
		: '1'}
}) )
$vocal.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 18 ? beat ===12
		: measure === 34 ? beat === 12
		: measure === 114 ? beat === 12
		: '1'}
}) )
$vocal.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 19 ? beat ===0
		: measure === 35 ? beat === 0
		: measure === 115 ? beat === 0
		: '1'}
}) )

$vocal.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===24 ? beat===0
	        :measure === 120 ? beat === 0
				  :'1'}
}) )
$vocal.add( new Filter ({
	key:  "D3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===24 ? beat===4
	        :measure === 120 ? beat === 4
				  :'1'}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===24 ? beat===8
	        :measure === 120 ? beat === 8
				  :'1'}
}) )
$vocal.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===24 ? beat===12
	        :measure === 120 ? beat === 12
				  :'1'}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===25 ? beat===4
	        :measure === 121 ? beat === 4
				  :'1'}
}) )
$vocal.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===25 ? beat===12
	        :measure === 121 ? beat === 12
				  :'1'}
}) )

$vocal.add( new Filter ({
	key:  "A3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===26 ? beat===0
	        :measure === 122 ? beat === 0
				  :'1'}
}) )
$vocal.add( new Filter ({
	key:  "A3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===26 ? beat===4
	        :measure === 122 ? beat === 4
				  :'1'}
}) )
$vocal.add( new Filter ({
	key:  "G3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===26 ? beat===8
	        :measure === 122 ? beat === 8
				  :'1'}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===27 ? beat===0
	        :measure === 123 ? beat === 0
				  :'1'}
}) )
$vocal.add( new Filter ({
	key:  "D3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===27 ? beat===4
	        :measure === 123 ? beat === 4
				  :'1'}
}) )
$vocal.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===27 ? beat===8
	        :measure === 123 ? beat === 8
				  :'1'}
}) )


// *******************************:::::
// *変換点
// *******************************:::::
$vocal.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 128 ? beat ===0
		: '1'}
}) )
$vocal.add( new Filter ({
	key:  "D3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 128 ? beat ===4
		: '1'}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 128 ? beat ===8
		: '1'}
}) )
$vocal.add( new Filter ({
	key:  "G3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 128 ? beat ===12
		: '1'}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 129 ? beat ===4
		: '1'}
}) )
$vocal.add( new Filter ({
	key:  "C3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 129 ? beat ===12
		: '1'}
}) )

$vocal.add( new Filter ({
	key:  "F3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 130 ? beat ===0
		: '1'}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 130 ? beat ===6
		: '1'}
}) )

// ****************************
// // 変換点終了
// ****************************


/*******************************
*ボーカルブリッジ
********************************/
$vocal.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===40 ? beat===0
		:measure ===131 ? beat===0
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "A3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===40 ? beat===8
		:measure ===131 ? beat===8
		:"1"}

}) )

$vocal.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===41 ? beat===0
		:measure ===132 ? beat===0
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "A3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===41 ? beat===8
		:measure ===132 ? beat===8
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "D3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===42 ? beat===0
		:measure ===133 ? beat===0
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "D3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===42 ? beat===4
		:measure ===133 ? beat===4
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===42 ? beat===8
		:measure ===133 ? beat===8
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "E3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===42 ? beat===12
		:measure ===133 ? beat===12
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===43 ? beat===4
		:measure ===134 ? beat===4
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "D3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===43 ? beat===8
		:measure ===134 ? beat===8
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===43 ? beat===12
		:measure ===134 ? beat===12
		:"1"}
}) )




$vocal.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===44 ? beat===0
		:measure ===135 ? beat===0
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "A3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===44 ? beat===8
		:measure ===135 ? beat===8
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "A3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===44 ? beat===12
		:measure ===135 ? beat===12
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===45 ? beat===0
		:measure ===136 ? beat===0
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "A3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===45 ? beat===8
		:measure ===136 ? beat===8
		:"1"}
}) )


$vocal.add( new Filter ({
	key:  "D3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===46 ? beat===0
		:measure ===137 ? beat===0
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "D3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===46 ? beat===4
		:measure ===137 ? beat===4
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===46 ? beat===8
		:measure ===137 ? beat===8
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "E3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===46 ? beat===12
		:measure ===137 ? beat===12
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===47 ? beat===4
		:measure ===138 ? beat===4
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "D3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===47 ? beat===8
		:measure ===138 ? beat===8
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数
	active: (beat, measure) => {
		return measure ===47 ? beat===12
		:measure ===138 ? beat===12
		:"1"}
}) )




$vocal.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===48 ? beat===0
		:measure ===139 ? beat===0
		:"1"}
}) )
$vocal.add( new Filter ({
	key:  "A3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===48 ? beat===8
		:measure ===139 ? beat===8
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===49 ? beat===0
		:measure ===140 ? beat===0
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "A3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===49 ? beat===8
		:measure ===140 ? beat===8
		:"1"}
}) )
$vocal.add( new Filter ({
	key:  "D3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===50 ? beat===0
		:measure ===141 ? beat===0
		:"1"}
}) )
$vocal.add( new Filter ({
	key:  "D3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===50 ? beat===4
		:measure ===141 ? beat===4
		:"1"}
}) )
$vocal.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===50 ? beat===8
		:measure ===141 ? beat===8
		:"1"}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===50 ? beat===12
		:measure ===141 ? beat===12
		:"1"}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===51 ? beat===4
		:measure ===142 ? beat===4
		:"1"}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===51 ? beat===8
		:measure ===142 ? beat===8
		:"1"}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===51 ? beat===12
		:measure ===142 ? beat===12
		:"1"}
}) )
$vocal.add( new Filter ({
	key:  "D3",
	length:  12, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===52 ? beat===0
		:measure ===143 ? beat===0
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "D3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===54 ? beat===4
		:measure ===145 ? beat===4
		:"1"}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===54 ? beat===8
		:measure ===145 ? beat===8
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "G3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===54 ? beat===12
		:measure ===145 ? beat===12
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "G3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===55 ? beat===4
		:measure ===146 ? beat===4
		:"1"}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===55 ? beat===8
		:measure ===146 ? beat===8
		:"1"}
}) )

$vocal.add( new Filter ({
	key:  "D3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure ===55 ? beat===12
		:measure ===146 ? beat===12
		:"1"}
}) )


/*******************************
*ボーカルサビ
********************************/
$vocal.add( new Filter ({
	key:  "A3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		56	?	beat	===	0
		:measure		===	76	?	beat		===	0
		:measure		===	147	?	beat		===	0
		:measure		===	167	?	beat		===	0
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "A3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		56	?	beat	===	4
		:measure		===	76	?	beat		===	4
		:measure		===	147	?	beat		===	4
		:measure		===	167	?	beat		===	4
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		56	?	beat	===	8
		:measure		===	76	?	beat		===	8
		:measure		===	147	?	beat		===	8
		:measure		===	167	?	beat		===	8
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		56	?	beat	===	12
		:measure		===	76	?	beat		===	12
		:measure		===	147	?	beat		===	12
		:measure		===	167	?	beat		===	12
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "E3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		57	?	beat	===	4
		:measure		===	77	?	beat		===	4
		:measure		===	148	?	beat		===	4
		:measure		===	168	?	beat		===	4
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "D3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		57	?	beat	===	8
		:measure		===	77	?	beat		===	8
		:measure		===	148	?	beat		===	8
		:measure		===	168	?	beat		===	8
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "C3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		57	?	beat	===	12
		:measure		===	77	?	beat		===	12
		:measure		===	148	?	beat		===	12
		:measure		===	168	?	beat		===	12
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "D3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		58	?	beat	===	0
		:measure		===	78	?	beat		===	0
		:measure		===	149	?	beat		===	0
		:measure		===	169	?	beat		===	0
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		58	?	beat	===	8
		:measure		===	78	?	beat		===	8
		:measure		===	149	?	beat		===	8
		:measure		===	169	?	beat		===	8
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "E3",
	length:  10, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		59	?	beat	===	0
		:measure		===	79	?	beat		===	0
		:measure		===	150	?	beat		===	0
		:measure		===	170	?	beat		===	0
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "C3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		59	?	beat	===	12
		:measure		===	79	?	beat		===	12
		:measure		===	150	?	beat		===	12
		:measure		===	170	?	beat		===	12
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "A3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		60	?	beat	===	0
		:measure		===	80	?	beat		===	0
		:measure		===	151	?	beat		===	0
		:measure		===	171	?	beat		===	0
		:'1'}
}) )
$vocal.add( new Filter ({
	key:  "A3",
	length:  7, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		60	?	beat	===	4
		:measure		===	80	?	beat		===	4
		:measure		===	151	?	beat		===	4
		:measure		===	171	?	beat		===	4
		:'1'}
}) )
$vocal.add( new Filter ({
	key:  "G3",
	length:  7, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		60	?	beat	===	12
		:measure		===	80	?	beat		===	12
		:measure		===	151	?	beat		===	12
		:measure		===	171	?	beat		===	12
		:'1'}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		61	?	beat	===	4
		:measure		===	81	?	beat		===	4
		:measure		===	152	?	beat		===	4
		:measure		===	172	?	beat		===	4
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "D3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		61	?	beat	===	8
		:measure		===	81	?	beat		===	8
		:measure		===	152	?	beat		===	8
		:measure		===	172	?	beat		===	8
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		61	?	beat	===	12
		:measure		===	81	?	beat		===	12
		:measure		===	152	?	beat		===	12
		:measure		===	172	?	beat		===	12
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "D3",
	length:  7, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		62	?	beat	===	0
		:measure		===	82	?	beat		===	0
		:measure		===	153	?	beat		===	0
		:measure		===	173	?	beat		===	0
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "E3",
	length:  7, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		62	?	beat	===	8
		:measure		===	82	?	beat		===	8
		:measure		===	153	?	beat		===	8
		:measure		===	173	?	beat		===	8
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "A2",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		63	?	beat	===	0
		:measure		===	83	?	beat		===	0
		:measure		===	154	?	beat		===	0
		:measure		===	174	?	beat		===	0
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "A3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		64	?	beat	===	4
		:measure		===	84	?	beat		===	4
		:measure		===	155	?	beat		===	4
		:measure		===	175	?	beat		===	4
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		64	?	beat	===	8
		:measure		===	84	?	beat		===	8
		:measure		===	155	?	beat		===	8
		:measure		===	175	?	beat		===	8
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		64	?	beat	===	12
		:measure		===	84	?	beat		===	12
		:measure		===	155	?	beat		===	12
		:measure		===	175	?	beat		===	12
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "E3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		65	?	beat	===	4
		:measure		===	85	?	beat		===	4
		:measure		===	156	?	beat		===	4
		:measure		===	176	?	beat		===	4
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "D3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		65	?	beat	===	8
		:measure		===	85	?	beat		===	8
		:measure		===	156	?	beat		===	8
		:measure		===	176	?	beat		===	8
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "C3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		65	?	beat	===	12
		:measure		===	85	?	beat		===	12
		:measure		===	156	?	beat		===	12
		:measure		===	176	?	beat		===	12
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "G3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		66	?	beat	===	0
		:measure		===	86	?	beat		===	0
		:measure		===	157	?	beat		===	0
		:measure		===	177	?	beat		===	0
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "A3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		66	?	beat	===	8
		:measure		===	86	?	beat		===	8
		:measure		===	157	?	beat		===	8
		:measure		===	177	?	beat		===	8
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "E3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		67	?	beat	===	0
		:measure		===	87	?	beat		===	0
		:measure		===	158	?	beat		===	0
		:measure		===	178	?	beat		===	0
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "D3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		67	?	beat	===	8
		:measure		===	87	?	beat		===	8
		:measure		===	158	?	beat		===	8
		:measure		===	178	?	beat		===	8
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "F3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		68	?	beat	===	0
		:measure		===	88	?	beat		===	0
		:measure		===	159	?	beat		===	0
		:measure		===	179	?	beat		===	0
		:'1'}
}) )


$vocal.add( new Filter ({
	key:  "F3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		68	?	beat	===	4
		:measure		===	88	?	beat		===	4
		:measure		===	159	?	beat		===	4
		:measure		===	179	?	beat		===	4
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "E3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		68	?	beat	===	8
		:measure		===	88	?	beat		===	8
		:measure		===	159	?	beat		===	8
		:measure		===	179	?	beat		===	8
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "E3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		68	?	beat	===	12
		:measure		===	88	?	beat		===	12
		:measure		===	159	?	beat		===	12
		:measure		===	179	?	beat		===	12
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "D3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		69	?	beat	===	4
		:measure		===	89	?	beat		===	4
		:measure		===	160	?	beat		===	4
		:measure		===	180	?	beat		===	4
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "C3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		69	?	beat	===	8
		:measure		===	89	?	beat		===	8
		:measure		===	160	?	beat		===	8
		:measure		===	180	?	beat		===	8
		:'1'}
}) )
$vocal.add( new Filter ({
	key:  "B2",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		70	?	beat	===	0
		:measure		===	90	?	beat		===	0
		:measure		===	161	?	beat		===	0
		:measure		===	181	?	beat		===	0
		:'1'}
}) )
$vocal.add( new Filter ({
	key:  "B2",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		70	?	beat	===	8
		:measure		===	90	?	beat		===	8
		:measure		===	161	?	beat		===	8
		:measure		===	181	?	beat		===	8
		:'1'}
}) )
$vocal.add( new Filter ({
	key:  "C3",
	length:  9, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		71	?	beat	===	0
		:measure		===	91	?	beat		===	0
		:measure		===	162	?	beat		===	0
		:measure		===	182	?	beat		===	0
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "F3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		72	?	beat	===	0
		:measure		===	92	?	beat		===	0
		:measure		===	163	?	beat		===	0
		:measure		===	183	?	beat		===	0
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "F3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		72	?	beat	===	4
		:measure		===	92	?	beat		===	4
		:measure		===	163	?	beat		===	4
		:measure		===	183	?	beat		===	4
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "E3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		72	?	beat	===	8
		:measure		===	92	?	beat		===	8
		:measure		===	163	?	beat		===	8
		:measure		===	183	?	beat		===	8
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "E3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		72	?	beat	===	12
		:measure		===	92	?	beat		===	12
		:measure		===	163	?	beat		===	12
		:measure		===	183	?	beat		===	12
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "D3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		73	?	beat	===	4
		:measure		===	93	?	beat		===	4
		:measure		===	164	?	beat		===	4
		:measure		===	184	?	beat		===	4
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "C3",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		73	?	beat	===	8
		:measure		===	93	?	beat		===	8
		:measure		===	164	?	beat		===	8
		:measure		===	184	?	beat		===	8
		:'1'}
}) )
$vocal.add( new Filter ({
	key:  "B2",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		74	?	beat	===	0
		:measure		===	94	?	beat		===	0
		:measure		===	165	?	beat		===	0
		// :measure		===	185	?	beat		===	0
		:'1'}
}) )
$vocal.add( new Filter ({
	key:  "B2",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数
	active: (beat, measure) => {
		return	measure		 ===		74	?	beat	===	8
		:measure		===	94	?	beat		===	8
		:measure		===	165	?	beat		===	8
		// :measure		===	185	?	beat		===	8
		:'1'}
}) )
$vocal.add( new Filter ({
	key:  "C3",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		75	?	beat	===	0
		:measure		===	95	?	beat		===	0
		:measure		===	166	?	beat		===	0
		// :measure		===	186	?	beat		===	0
		:'1'}
}) )


// *******************:
// // 変換点
// // ふぁみどど
// *******************:

$vocal.add( new Filter ({
	key:  "F3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		185	?	beat	===	0
		:'1'}
}) )
$vocal.add( new Filter ({
	key:  "E3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		185	?	beat	===	4
		:'1'}
}) )
$vocal.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		185	?	beat	===	8
		:'1'}
}) )
$vocal.add( new Filter ({
	key:  "C3",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		185	?	beat	===	12
		:'1'}
}) )




$vocal.add( new Filter ({
	key:  "E3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		186	?	beat	===	4
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "G3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		186	?	beat	===	12
		:'1'}
}) )

$vocal.add( new Filter ({
	key:  "F3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		187	?	beat	===	4
		:'1'}
}) )


$vocal.add( new Filter ({
	key:  "E3",
	length:  6, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		187	?	beat	===	12
		:'1'}
}) )


$vocal.add( new Filter ({
	key:  "C3",
	length:  12, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return	measure		 ===		188	?	beat	===	4
		:'1'}
}) )

$ongaq.add($vocal);












/*******************************
*ベースコード進行
********************************/
const $bass = new Part ({
	sound: "mono_bass",
	measure: 500, //小節
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16 //小節内の拍数
})

// ***************************:::
// Aメロ、Bめろ
// ***************************:::
$bass.add( new Filter ({
	key:  "C1",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 0 ? beat%4 ===0
		: measure === 8 ? beat%4 ===0
		: measure === 16 ? beat%4 ===0
		: measure === 24 ? beat%4 ===0
		: measure === 32 ? beat%4 ===0
		: measure === 96 ? beat%4 ===0
		: measure === 104 ? beat%4 ===0
		: measure === 112 ? beat%4 ===0
		: measure === 120 ? beat%4 ===0
		: '1'}
}) )
$bass.add( new Filter ({
	key:  "C1",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 1 ? beat ===4
		: measure === 9 ? beat === 4
		: measure === 17 ? beat === 4
		: measure === 25 ? beat === 4
		: measure === 33 ? beat === 4
		: measure === 97 ? beat === 4
		: measure === 105 ? beat === 4
		: measure === 113 ? beat === 4
		: measure === 121 ? beat === 4
		: '1'}
}) )
$bass.add( new Filter ({
	key:  "C1",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 1 ? beat ===12
		: measure === 9 ? beat === 12
		: measure === 17 ? beat === 12
		: measure === 25 ? beat === 12
		: measure === 33 ? beat === 12
		: measure === 97 ? beat === 12
		: measure === 105 ? beat === 12
		: measure === 113 ? beat === 12
		: measure === 121 ? beat === 12
		: '1'}
}) )


$bass.add( new Filter ({
	key:  "C1",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 2 ? beat ===0
		: measure === 10 ? beat === 0
		: measure === 18 ? beat === 0
		: measure === 26 ? beat === 0
		: measure === 34 ? beat === 0
		: measure === 98 ? beat === 0
		: measure === 106 ? beat === 0
		: measure === 114 ? beat === 0
		: measure === 122 ? beat === 0
		: '1'}
}) )
$bass.add( new Filter ({
	key:  "G1",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 2 ? beat ===8
		: measure === 10 ? beat === 8
		: measure === 18 ? beat === 8
		: measure === 26 ? beat === 8
		: measure === 34 ? beat === 8
		: measure === 98 ? beat === 8
		: measure === 106 ? beat === 8
		: measure === 114 ? beat === 8
		: measure === 122 ? beat === 8
		: '1'}
}) )
$bass.add( new Filter ({
	key:  "F1",
	length:  10, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 3 ? beat ===0
		: measure === 11 ? beat === 0
		: measure === 19 ? beat === 0
		: measure === 27 ? beat === 0
		: measure === 35 ? beat === 0
		: measure === 99 ? beat === 0
		: measure === 107 ? beat === 0
		: measure === 115 ? beat === 0
		: measure === 123 ? beat === 0
		: '1'}
}) )



$bass.add( new Filter ({
	key:  "F1",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 4 ? beat%4 ===0
		: measure === 12 ? beat%4 ===0
		: measure === 20 ? beat%4 ===0
		: measure === 28 ? beat%4 ===0
		: measure === 36 ? beat%4 ===0
		: measure === 100 ? beat%4 ===0
		: measure === 108 ? beat%4 ===0
		: measure === 116 ? beat%4 ===0
		: measure === 124 ? beat%4 ===0
		: '1'}
}) )

$bass.add( new Filter ({
	key:  "F1",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 5 ? beat ===4
		: measure === 13 ? beat === 4
		: measure === 21 ? beat === 4
		: measure === 29 ? beat === 4
		: measure === 37 ? beat === 4
		: measure === 101 ? beat === 4
		: measure === 109 ? beat === 4
		: measure === 117 ? beat === 4
		: measure === 125 ? beat === 4
		: '1'}
}) )
$bass.add( new Filter ({
	key:  "F1",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 5 ? beat ===12
		: measure === 13 ? beat === 12
		: measure === 21 ? beat === 12
		: measure === 29 ? beat === 12
		: measure === 37 ? beat === 12
		: measure === 101 ? beat === 12
		: measure === 109 ? beat === 12
		: measure === 117 ? beat === 12
		: measure === 125 ? beat === 12
		: '1'}
}) )

$bass.add( new Filter ({
	key:  "F1",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 6 ? beat ===0
		: measure === 14 ? beat === 0
		: measure === 22 ? beat === 0
		: measure === 30 ? beat === 0
		: measure === 38 ? beat === 0
		: measure === 102 ? beat === 0
		: measure === 110 ? beat === 0
		: measure === 118 ? beat === 0
		: measure === 126 ? beat === 0
		: '1'}
}) )
$bass.add( new Filter ({
	key:  "E1",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 6 ? beat ===8
		: measure === 14 ? beat === 8
		: measure === 22 ? beat === 8
		: measure === 30 ? beat === 8
		: measure === 38 ? beat === 8
		: measure === 102 ? beat === 8
		: measure === 110 ? beat === 8
		: measure === 118 ? beat === 8
		: measure === 126 ? beat === 8
		: '1'}
}) )
$bass.add( new Filter ({
	key:  "A1",
	length:  12, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 7 ? beat ===0
		: measure === 15 ? beat === 0
		: measure === 23 ? beat === 0
		: measure === 31 ? beat === 0
		: measure === 39 ? beat === 0
		: measure === 103 ? beat === 0
		: measure === 111 ? beat === 0
		: measure === 119 ? beat === 0
		: measure === 127 ? beat === 0
		: '1'}
}) )

// ブリッジ
$bass.add( new Filter ({
	key:  "F1",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 40 ? beat %4===0
		: measure === 41 ? beat %4===0
		: measure === 44 ? beat %4===0
		: measure === 45 ? beat %4===0
		: measure === 48 ? beat %4===0
		: measure === 49 ? beat %4===0
		: measure === 131 ? beat %4===0
		: measure === 132 ? beat %4===0
		: measure === 135 ? beat %4===0
		: measure === 136 ? beat %4===0
		: measure === 139 ? beat %4===0
		: measure === 140 ? beat %4===0
		:'1'}
}) )

$bass.add( new Filter ({
	key:  "G1",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 42 ? beat ===0
		: measure === 46 ? beat ===0
		: measure === 50 ? beat ===0
		: measure === 133 ? beat ===0
		: measure === 137 ? beat ===0
		: measure === 141 ? beat ===0
		: '1'}
}) )
$bass.add( new Filter ({
	key:  "G1",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 42 ? beat ===4
		: measure === 46 ? beat ===4
		: measure === 50 ? beat ===4
		: measure === 133 ? beat ===4
		: measure === 137 ? beat ===4
		: measure === 141 ? beat ===4
		: '1'}
}) )
$bass.add( new Filter ({
	key:  "G1",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 42 ? beat ===8
		: measure === 46 ? beat ===8
		: measure === 50 ? beat ===8
		: measure === 133 ? beat ===8
		: measure === 137 ? beat ===8
		: measure === 141 ? beat ===8
		: '1'}
}) )
$bass.add( new Filter ({
	key:  "A1",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 42 ? beat ===12
		: measure === 46 ? beat ===12
		: measure === 50 ? beat ===12
		: measure === 133 ? beat ===12
		: measure === 137 ? beat ===12
		: measure === 141 ? beat ===12
		: '1'}
}) )
$bass.add( new Filter ({
	key:  "A1",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 43 ? beat%4 ===0
		: measure === 47 ? beat%4 ===0
		: measure === 51 ? beat%4 ===0
		: measure === 134 ? beat%4 ===0
		: measure === 138 ? beat%4 ===0
		: measure === 142 ? beat%4 ===0
		: '1'}
}) )
$bass.add( new Filter ({
	key:  "G1",
	length:  4, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
		return measure === 52 ? beat %4 ===0
		: measure === 53 ? beat %4 ===0
		: measure === 54 ? beat %4 ===0
		: measure === 55 ? beat %4 ===0
		: measure === 143 ? beat %4 ===0
		: measure === 144 ? beat %4 ===0
		: measure === 145 ? beat %4 ===0
		: measure === 146 ? beat %4 ===0
		: '1'}
}) )

// サビ
$bass.add( new Filter ({
	key:  "F1",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		56	?	beat	 ===	0
	:measure		 ===	60	?		beat	 ===	0
	:measure		 ===	64	?		beat	 ===	0
	:measure		 ===	68	?		beat	 ===	0
	:measure		 ===	72	?		beat	 ===	0
	:measure		 ===	76	?		beat	 ===	0
	:measure		 ===	80	?		beat	 ===	0
	:measure		 ===	84	?		beat	 ===	0
	:measure		 ===	88	?		beat	 ===	0
	:measure		 ===	92	?		beat	 ===	0

	:measure		 ===	147	?		beat	 ===	0
	:measure		 ===	151	?		beat	 ===	0
	:measure		 ===	155	?		beat	 ===	0
	:measure		 ===	159	?		beat	 ===	0
	:measure		 ===	163	?		beat	 ===	0
	:measure		 ===	167	?		beat	 ===	0
	:measure		 ===	171	?		beat	 ===	0
	:measure		 ===	175	?		beat	 ===	0
	:measure		 ===	179	?		beat	 ===	0
	:measure		 ===	183	?		beat	 ===	0

	:measure		 ===	187	?		beat	 ===	0
	:measure		 ===	191	?		beat	 ===	0
	:measure		 ===	195	?		beat	 ===	0
	:measure		 ===	199	?		beat	 ===	0
	:measure		 ===	203	?		beat	 ===	0
	:measure		 ===	207	?		beat	 ===	0
	:measure		 ===	211	?		beat	 ===	0
	:measure		 ===	215	?		beat	 ===	0
	:measure		 ===	219	?		beat	 ===	0
	:measure		 ===	223	?		beat	 ===	0

	:measure		 ===	227	?		beat	 ===	0
	:measure		 ===	231	?		beat	 ===	0
	:measure		 ===	235	?		beat	 ===	0
	:measure		 ===	239	?		beat	 ===	0
	:measure		 ===	243	?		beat	 ===	0
	:measure		 ===	247	?		beat	 ===	0
	:measure		 ===	251	?		beat	 ===	0
	:measure		 ===	255	?		beat	 ===	0
	:measure		 ===	259	?		beat	 ===	0
	:measure		 ===	263	?		beat	 ===	0

	:	 '1'}
}) )
$bass.add( new Filter ({
	key:  "F1",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		56	?	beat	 ===	4
	:measure		 ===	60	?	beat	 ===	4
	:measure		 ===	64	?	beat	 ===	4
	:measure		 ===	68	?	beat	 ===	4
	:measure		 ===	72	?	beat	 ===	4
	:measure		 ===	76	?	beat	 ===	4
	:measure		 ===	80	?	beat	 ===	4
	:measure		 ===	84	?	beat	 ===	4
	:measure		 ===	88	?	beat	 ===	4
	:measure		 ===	92	?	beat	 ===	4
	:measure		 ===	147	?		beat	 ===	4
	:measure		 ===	151	?		beat	 ===	4
	:measure		 ===	155	?		beat	 ===	4
	:measure		 ===	159	?		beat	 ===	4
	:measure		 ===	163	?		beat	 ===	4
	:measure		 ===	167	?		beat	 ===	4
	:measure		 ===	171	?		beat	 ===	4
	:measure		 ===	175	?		beat	 ===	4
	:measure		 ===	179	?		beat	 ===	4
	:measure		 ===	183	?		beat	 ===	4

	:measure		 ===	187	?		beat	 ===	4
	:measure		 ===	191	?		beat	 ===	4
	:measure		 ===	195	?		beat	 ===	4
	:measure		 ===	199	?		beat	 ===	4
	:measure		 ===	203	?		beat	 ===	4
	:measure		 ===	207	?		beat	 ===	4
	:measure		 ===	211	?		beat	 ===	4
	:measure		 ===	215	?		beat	 ===	4
	:measure		 ===	219	?		beat	 ===	4
	:measure		 ===	223	?		beat	 ===	4

	:measure		 ===	227	?		beat	 ===	4
	:measure		 ===	231	?		beat	 ===	4
	:measure		 ===	235	?		beat	 ===	4
	:measure		 ===	239	?		beat	 ===	4
	:measure		 ===	243	?		beat	 ===	4
	:measure		 ===	247	?		beat	 ===	4
	:measure		 ===	251	?		beat	 ===	4
	:measure		 ===	255	?		beat	 ===	4
	:measure		 ===	259	?		beat	 ===	4
	:measure		 ===	263	?		beat	 ===	4

	:	 '1'}
}) )
$bass.add( new Filter ({
	key:  "F1",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		56	?	beat	 ===	8
	:measure		 ===	60	?	beat	 ===	8
	:measure		 ===	64	?	beat	 ===	8
	:measure		 ===	68	?	beat	 ===	8
	:measure		 ===	72	?	beat	 ===	8
	:measure		 ===	76	?	beat	 ===	8
	:measure		 ===	80	?	beat	 ===	8
	:measure		 ===	84	?	beat	 ===	8
	:measure		 ===	88	?	beat	 ===	8
	:measure		 ===	92	?	beat	 ===	8
	:measure		 ===	147	?		beat	 ===	8
	:measure		 ===	151	?		beat	 ===	8
	:measure		 ===	155	?		beat	 ===	8
	:measure		 ===	159	?		beat	 ===	8
	:measure		 ===	163	?		beat	 ===	8
	:measure		 ===	167	?		beat	 ===	8
	:measure		 ===	171	?		beat	 ===	8
	:measure		 ===	175	?		beat	 ===	8
	:measure		 ===	179	?		beat	 ===	8
	:measure		 ===	183	?		beat	 ===	8

	:measure		 ===	187	?		beat	 ===	8
	:measure		 ===	191	?		beat	 ===	8
	:measure		 ===	195	?		beat	 ===	8
	:measure		 ===	199	?		beat	 ===	8
	:measure		 ===	203	?		beat	 ===	8
	:measure		 ===	207	?		beat	 ===	8
	:measure		 ===	211	?		beat	 ===	8
	:measure		 ===	215	?		beat	 ===	8
	:measure		 ===	219	?		beat	 ===	8
	:measure		 ===	223	?		beat	 ===	8

	:measure		 ===	227	?		beat	 ===	8
	:measure		 ===	231	?		beat	 ===	8
	:measure		 ===	235	?		beat	 ===	8
	:measure		 ===	239	?		beat	 ===	8
	:measure		 ===	243	?		beat	 ===	8
	:measure		 ===	247	?		beat	 ===	8
	:measure		 ===	251	?		beat	 ===	8
	:measure		 ===	255	?		beat	 ===	8
	:measure		 ===	259	?		beat	 ===	8
	:measure		 ===	263	?		beat	 ===	8

	:	 '1'}
}) )
$bass.add( new Filter ({
	key:  "C1",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		56	?	beat	 ===	12
	:measure		 ===	60	?	beat	 ===	12
	:measure		 ===	64	?	beat	 ===	12
	:measure		 ===	68	?	beat	 ===	12
	:measure		 ===	72	?	beat	 ===	12
	:measure		 ===	76	?	beat	 ===	12
	:measure		 ===	80	?	beat	 ===	12
	:measure		 ===	84	?	beat	 ===	12
	:measure		 ===	88	?	beat	 ===	12
	:measure		 ===	92	?	beat	 ===	12
	:measure		 ===	147	?		beat	 ===	12
	:measure		 ===	151	?		beat	 ===	12
	:measure		 ===	155	?		beat	 ===	12
	:measure		 ===	159	?		beat	 ===	12
	:measure		 ===	163	?		beat	 ===	12
	:measure		 ===	167	?		beat	 ===	12
	:measure		 ===	171	?		beat	 ===	12
	:measure		 ===	175	?		beat	 ===	12
	:measure		 ===	179	?		beat	 ===	12
	:measure		 ===	183	?		beat	 ===	12

	:measure		 ===	187	?		beat	 ===	12
	:measure		 ===	191	?		beat	 ===	12
	:measure		 ===	195	?		beat	 ===	12
	:measure		 ===	199	?		beat	 ===	12
	:measure		 ===	203	?		beat	 ===	12
	:measure		 ===	207	?		beat	 ===	12
	:measure		 ===	211	?		beat	 ===	12
	:measure		 ===	215	?		beat	 ===	12
	:measure		 ===	219	?		beat	 ===	12
	:measure		 ===	223	?		beat	 ===	12

	:measure		 ===	227	?		beat	 ===	12
	:measure		 ===	231	?		beat	 ===	12
	:measure		 ===	235	?		beat	 ===	12
	:measure		 ===	239	?		beat	 ===	12
	:measure		 ===	243	?		beat	 ===	12
	:measure		 ===	247	?		beat	 ===	12
	:measure		 ===	251	?		beat	 ===	12
	:measure		 ===	255	?		beat	 ===	12
	:measure		 ===	259	?		beat	 ===	12
	:measure		 ===	263	?		beat	 ===	12

	:	 '1'}
}) )
$bass.add( new Filter ({
	key:  "C1",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		57	?	beat	 ===	4
	:measure		 ===	61	?	beat	 ===	4
	:measure		 ===	65	?	beat	 ===	4
	:measure		 ===	69	?	beat	 ===	4
	:measure		 ===	73	?	beat	 ===	4
	:measure		 ===	77	?	beat	 ===	4
	:measure		 ===	81	?	beat	 ===	4
	:measure		 ===	85	?	beat	 ===	4
	:measure		 ===	89	?	beat	 ===	4
	:measure		 ===	93	?	beat	 ===	4
	:measure		 ===	148	?		beat	 ===	4
	:measure		 ===	152	?		beat	 ===	4
	:measure		 ===	156	?		beat	 ===	4
	:measure		 ===	160	?		beat	 ===	4
	:measure		 ===	164	?		beat	 ===	4
	:measure		 ===	168	?		beat	 ===	4
	:measure		 ===	172	?		beat	 ===	4
	:measure		 ===	176	?		beat	 ===	4
	:measure		 ===	180	?		beat	 ===	4
	:measure		 ===	184	?		beat	 ===	4

	:measure		 ===	188	?		beat	 ===	4
	:measure		 ===	192	?		beat	 ===	4
	:measure		 ===	196	?		beat	 ===	4
	:measure		 ===	200	?		beat	 ===	4
	:measure		 ===	204	?		beat	 ===	4
	:measure		 ===	208	?		beat	 ===	4
	:measure		 ===	212	?		beat	 ===	4
	:measure		 ===	216	?		beat	 ===	4
	:measure		 ===	220	?		beat	 ===	4
	:measure		 ===	224	?		beat	 ===	4

	:measure		 ===	228	?		beat	 ===	4
	:measure		 ===	232	?		beat	 ===	4
	:measure		 ===	236	?		beat	 ===	4
	:measure		 ===	240	?		beat	 ===	4
	:measure		 ===	244	?		beat	 ===	4
	:measure		 ===	248	?		beat	 ===	4
	:measure		 ===	252	?		beat	 ===	4
	:measure		 ===	256	?		beat	 ===	4
	:measure		 ===	260	?		beat	 ===	4
	:measure		 ===	264	?		beat	 ===	4

	:	 '1'}
}) )
$bass.add( new Filter ({
	key:  "C1",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		57	?	beat	 ===	8
	:measure		 ===	61	?	beat	 ===	8
	:measure		 ===	65	?	beat	 ===	8
	:measure		 ===	69	?	beat	 ===	8
	:measure		 ===	73	?	beat	 ===	8
	:measure		 ===	77	?	beat	 ===	8
	:measure		 ===	81	?	beat	 ===	8
	:measure		 ===	85	?	beat	 ===	8
	:measure		 ===	89	?	beat	 ===	8
	:measure		 ===	93	?	beat	 ===	8
	:measure		 ===	148	?		beat	 ===	8
	:measure		 ===	152	?		beat	 ===	8
	:measure		 ===	156	?		beat	 ===	8
	:measure		 ===	160	?		beat	 ===	8
	:measure		 ===	164	?		beat	 ===	8
	:measure		 ===	168	?		beat	 ===	8
	:measure		 ===	172	?		beat	 ===	8
	:measure		 ===	176	?		beat	 ===	8
	:measure		 ===	180	?		beat	 ===	8
	:measure		 ===	184	?		beat	 ===	8

	:measure		 ===	188	?		beat	 ===	8
	:measure		 ===	192	?		beat	 ===	8
	:measure		 ===	196	?		beat	 ===	8
	:measure		 ===	200	?		beat	 ===	8
	:measure		 ===	204	?		beat	 ===	8
	:measure		 ===	208	?		beat	 ===	8
	:measure		 ===	212	?		beat	 ===	8
	:measure		 ===	216	?		beat	 ===	8
	:measure		 ===	220	?		beat	 ===	8
	:measure		 ===	224	?		beat	 ===	8

	:measure		 ===	228	?		beat	 ===	8
	:measure		 ===	232	?		beat	 ===	8
	:measure		 ===	236	?		beat	 ===	8
	:measure		 ===	240	?		beat	 ===	8
	:measure		 ===	244	?		beat	 ===	8
	:measure		 ===	248	?		beat	 ===	8
	:measure		 ===	252	?		beat	 ===	8
	:measure		 ===	256	?		beat	 ===	8
	:measure		 ===	260	?		beat	 ===	8
	:measure		 ===	264	?		beat	 ===	8

	:	 '1'}
}) )
$bass.add( new Filter ({
	key:  "C1",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		57	?	beat	 ===	12
	:measure		 ===	61	?	beat	 ===	12
	:measure		 ===	65	?	beat	 ===	12
	:measure		 ===	69	?	beat	 ===	12
	:measure		 ===	73	?	beat	 ===	12
	:measure		 ===	77	?	beat	 ===	12
	:measure		 ===	81	?	beat	 ===	12
	:measure		 ===	85	?	beat	 ===	12
	:measure		 ===	89	?	beat	 ===	12
	:measure		 ===	93	?	beat	 ===	12
	:measure		 ===	148	?		beat	 ===	12
	:measure		 ===	152	?		beat	 ===	12
	:measure		 ===	156	?		beat	 ===	12
	:measure		 ===	160	?		beat	 ===	12
	:measure		 ===	164	?		beat	 ===	12
	:measure		 ===	168	?		beat	 ===	12
	:measure		 ===	172	?		beat	 ===	12
	:measure		 ===	176	?		beat	 ===	12
	:measure		 ===	180	?		beat	 ===	12
	:measure		 ===	184	?		beat	 ===	12

	:measure		 ===	188	?		beat	 ===	12
	:measure		 ===	192	?		beat	 ===	12
	:measure		 ===	196	?		beat	 ===	12
	:measure		 ===	200	?		beat	 ===	12
	:measure		 ===	204	?		beat	 ===	12
	:measure		 ===	208	?		beat	 ===	12
	:measure		 ===	212	?		beat	 ===	12
	:measure		 ===	216	?		beat	 ===	12
	:measure		 ===	220	?		beat	 ===	12
	:measure		 ===	224	?		beat	 ===	12

	:measure		 ===	228	?		beat	 ===	12
	:measure		 ===	232	?		beat	 ===	12
	:measure		 ===	236	?		beat	 ===	12
	:measure		 ===	240	?		beat	 ===	12
	:measure		 ===	244	?		beat	 ===	12
	:measure		 ===	248	?		beat	 ===	12
	:measure		 ===	252	?		beat	 ===	12
	:measure		 ===	256	?		beat	 ===	12
	:measure		 ===	260	?		beat	 ===	12
	:measure		 ===	264	?		beat	 ===	12

	:	 '1'}
}) )
$bass.add( new Filter ({
	key:  "G1",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		58	?	beat		 ===	0
	:measure		 ===	62	?	beat	 ===	0
	:measure		 ===	66	?	beat	 ===	0
	:measure		 ===	70	?	beat	 ===	0
	:measure		 ===	74	?	beat	 ===	0
	:measure		 ===	78	?	beat	 ===	0
	:measure		 ===	82	?	beat	 ===	0
	:measure		 ===	86	?	beat	 ===	0
	:measure		 ===	90	?	beat	 ===	0
	:measure		 ===	94	?	beat	 ===	0
	:measure		 ===	149	?		beat	 ===	0
	:measure		 ===	153	?		beat	 ===	0
	:measure		 ===	157	?		beat	 ===	0
	:measure		 ===	161	?		beat	 ===	0
	:measure		 ===	165	?		beat	 ===	0
	:measure		 ===	169	?		beat	 ===	0
	:measure		 ===	173	?		beat	 ===	0
	:measure		 ===	177	?		beat	 ===	0
	:measure		 ===	181	?		beat	 ===	0
	:measure		 ===	185	?		beat	 ===	0

	:measure		 ===	189	?		beat	 ===	0
	:measure		 ===	193	?		beat	 ===	0
	:measure		 ===	197	?		beat	 ===	0
	:measure		 ===	201	?		beat	 ===	0
	:measure		 ===	205	?		beat	 ===	0
	:measure		 ===	209	?		beat	 ===	0
	:measure		 ===	213	?		beat	 ===	0
	:measure		 ===	217	?		beat	 ===	0
	:measure		 ===	221	?		beat	 ===	0
	:measure		 ===	225	?		beat	 ===	0

	:measure		 ===	229	?		beat	 ===	0
	:measure		 ===	233	?		beat	 ===	0
	:measure		 ===	237	?		beat	 ===	0
	:measure		 ===	241	?		beat	 ===	0
	:measure		 ===	245	?		beat	 ===	0
	:measure		 ===	249	?		beat	 ===	0
	:measure		 ===	253	?		beat	 ===	0
	:measure		 ===	257	?		beat	 ===	0
	:measure		 ===	261	?		beat	 ===	0
	:measure		 ===	265	?		beat	 ===	0

	:	 '1'}
}) )
$bass.add( new Filter ({
	key:  "G1",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		58	?	beat		 ===	4
	:measure		 ===	62	?	beat	 ===	4
	:measure		 ===	66	?	beat	 ===	4
	:measure		 ===	70	?	beat	 ===	4
	:measure		 ===	74	?	beat	 ===	4
	:measure		 ===	78	?	beat	 ===	4
	:measure		 ===	82	?	beat	 ===	4
	:measure		 ===	86	?	beat	 ===	4
	:measure		 ===	90	?	beat	 ===	4
	:measure		 ===	94	?	beat	 ===	4
	:measure		 ===	149	?		beat	 ===	4
	:measure		 ===	153	?		beat	 ===	4
	:measure		 ===	157	?		beat	 ===	4
	:measure		 ===	161	?		beat	 ===	4
	:measure		 ===	165	?		beat	 ===	4
	:measure		 ===	169	?		beat	 ===	4
	:measure		 ===	173	?		beat	 ===	4
	:measure		 ===	177	?		beat	 ===	4
	:measure		 ===	181	?		beat	 ===	4
	:measure		 ===	185	?		beat	 ===	4

	:measure		 ===	189	?		beat	 ===	4
	:measure		 ===	193	?		beat	 ===	4
	:measure		 ===	197	?		beat	 ===	4
	:measure		 ===	201	?		beat	 ===	4
	:measure		 ===	205	?		beat	 ===	4
	:measure		 ===	209	?		beat	 ===	4
	:measure		 ===	213	?		beat	 ===	4
	:measure		 ===	217	?		beat	 ===	4
	:measure		 ===	221	?		beat	 ===	4
	:measure		 ===	225	?		beat	 ===	4

	:measure		 ===	229	?		beat	 ===	4
	:measure		 ===	233	?		beat	 ===	4
	:measure		 ===	237	?		beat	 ===	4
	:measure		 ===	241	?		beat	 ===	4
	:measure		 ===	245	?		beat	 ===	4
	:measure		 ===	249	?		beat	 ===	4
	:measure		 ===	253	?		beat	 ===	4
	:measure		 ===	257	?		beat	 ===	4
	:measure		 ===	261	?		beat	 ===	4
	:measure		 ===	265	?		beat	 ===	4

	:	 '1'}
}) )
$bass.add( new Filter ({
	key:  "G1",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		58	?	beat		 ===	8
	:measure		 ===	62	?	beat	 ===	8
	:measure		 ===	66	?	beat	 ===	8
	:measure		 ===	70	?	beat	 ===	8
	:measure		 ===	74	?	beat	 ===	8
	:measure		 ===	78	?	beat	 ===	8
	:measure		 ===	82	?	beat	 ===	8
	:measure		 ===	86	?	beat	 ===	8
	:measure		 ===	90	?	beat	 ===	8
	:measure		 ===	94	?	beat	 ===	8
	:measure		 ===	149	?		beat	 ===	8
	:measure		 ===	153	?		beat	 ===	8
	:measure		 ===	157	?		beat	 ===	8
	:measure		 ===	161	?		beat	 ===	8
	:measure		 ===	165	?		beat	 ===	8
	:measure		 ===	169	?		beat	 ===	8
	:measure		 ===	173	?		beat	 ===	8
	:measure		 ===	177	?		beat	 ===	8
	:measure		 ===	181	?		beat	 ===	8
	:measure		 ===	185	?		beat	 ===	8

	:measure		 ===	189	?		beat	 ===	8
	:measure		 ===	193	?		beat	 ===	8
	:measure		 ===	197	?		beat	 ===	8
	:measure		 ===	201	?		beat	 ===	8
	:measure		 ===	205	?		beat	 ===	8
	:measure		 ===	209	?		beat	 ===	8
	:measure		 ===	213	?		beat	 ===	8
	:measure		 ===	217	?		beat	 ===	8
	:measure		 ===	221	?		beat	 ===	8
	:measure		 ===	225	?		beat	 ===	8

	:measure		 ===	229	?		beat	 ===	8
	:measure		 ===	233	?		beat	 ===	8
	:measure		 ===	237	?		beat	 ===	8
	:measure		 ===	241	?		beat	 ===	8
	:measure		 ===	245	?		beat	 ===	8
	:measure		 ===	249	?		beat	 ===	8
	:measure		 ===	253	?		beat	 ===	8
	:measure		 ===	257	?		beat	 ===	8
	:measure		 ===	261	?		beat	 ===	8
	:measure		 ===	265	?		beat	 ===	8

	:	 '1'}
}) )
$bass.add( new Filter ({
	key:  "A1",
	length:  8, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		58	?	beat		 ===	12
	:measure		 ===	62	?	beat	 ===	12
	:measure		 ===	66	?	beat	 ===	12
	:measure		 ===	70	?	beat	 ===	12
	:measure		 ===	74	?	beat	 ===	12
	:measure		 ===	78	?	beat	 ===	12
	:measure		 ===	82	?	beat	 ===	12
	:measure		 ===	86	?	beat	 ===	12
	:measure		 ===	90	?	beat	 ===	12
	:measure		 ===	94	?	beat	 ===	12
	:measure		 ===	149	?		beat	 ===	12
	:measure		 ===	153	?		beat	 ===	12
	:measure		 ===	157	?		beat	 ===	12
	:measure		 ===	161	?		beat	 ===	12
	:measure		 ===	165	?		beat	 ===	12
	:measure		 ===	169	?		beat	 ===	12
	:measure		 ===	173	?		beat	 ===	12
	:measure		 ===	177	?		beat	 ===	12
	:measure		 ===	181	?		beat	 ===	12
	:measure		 ===	185	?		beat	 ===	12

	:measure		 ===	189	?		beat	 ===	12
	:measure		 ===	193	?		beat	 ===	12
	:measure		 ===	197	?		beat	 ===	12
	:measure		 ===	201	?		beat	 ===	12
	:measure		 ===	205	?		beat	 ===	12
	:measure		 ===	209	?		beat	 ===	12
	:measure		 ===	213	?		beat	 ===	12
	:measure		 ===	217	?		beat	 ===	12
	:measure		 ===	221	?		beat	 ===	12
	:measure		 ===	225	?		beat	 ===	12

	:measure		 ===	229	?		beat	 ===	12
	:measure		 ===	233	?		beat	 ===	12
	:measure		 ===	237	?		beat	 ===	12
	:measure		 ===	241	?		beat	 ===	12
	:measure		 ===	245	?		beat	 ===	12
	:measure		 ===	249	?		beat	 ===	12
	:measure		 ===	253	?		beat	 ===	12
	:measure		 ===	257	?		beat	 ===	12
	:measure		 ===	261	?		beat	 ===	12
	:measure		 ===	265	?		beat	 ===	12

	:	 '1'}
}) )
$bass.add( new Filter ({
	key:  "A1",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		59	?	beat		 ===	4
	:measure		 ===	63	?	beat	 ===	4
	:measure		 ===	67	?	beat	 ===	4
	:measure		 ===	71	?	beat	 ===	4
	:measure		 ===	75	?	beat	 ===	4
	:measure		 ===	79	?	beat	 ===	4
	:measure		 ===	83	?	beat	 ===	4
	:measure		 ===	87	?	beat	 ===	4
	:measure		 ===	91	?	beat	 ===	4
	:measure		 ===	95	?	beat	 ===	4
	:measure		 ===	150	?		beat	 ===	4
	:measure		 ===	154	?		beat	 ===	4
	:measure		 ===	158	?		beat	 ===	4
	:measure		 ===	162	?		beat	 ===	4
	:measure		 ===	166	?		beat	 ===	4
	:measure		 ===	170	?		beat	 ===	4
	:measure		 ===	174	?		beat	 ===	4
	:measure		 ===	178	?		beat	 ===	4
	:measure		 ===	182	?		beat	 ===	4
	:measure		 ===	186	?		beat	 ===	4

	:measure		 ===	190	?		beat	 ===	4
	:measure		 ===	194	?		beat	 ===	4
	:measure		 ===	198	?		beat	 ===	4
	:measure		 ===	202	?		beat	 ===	4
	:measure		 ===	206	?		beat	 ===	4
	:measure		 ===	210	?		beat	 ===	4
	:measure		 ===	214	?		beat	 ===	4
	:measure		 ===	218	?		beat	 ===	4
	:measure		 ===	222	?		beat	 ===	4
	:measure		 ===	226	?		beat	 ===	4

	:measure		 ===	230	?		beat	 ===	4
	:measure		 ===	234	?		beat	 ===	4
	:measure		 ===	238	?		beat	 ===	4
	:measure		 ===	242	?		beat	 ===	4
	:measure		 ===	246	?		beat	 ===	4
	:measure		 ===	250	?		beat	 ===	4
	:measure		 ===	254	?		beat	 ===	4
	:measure		 ===	258	?		beat	 ===	4
	:measure		 ===	262	?		beat	 ===	4
	:measure		 ===	266	?		beat	 ===	4

	:	 '1'}
}) )
$bass.add( new Filter ({
	key:  "A1",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		59	?	beat		 ===	8
	:measure		 ===	63	?	beat	 ===	8
	:measure		 ===	67	?	beat	 ===	8
	:measure		 ===	71	?	beat	 ===	8
	:measure		 ===	75	?	beat	 ===	8
	:measure		 ===	79	?	beat	 ===	8
	:measure		 ===	83	?	beat	 ===	8
	:measure		 ===	87	?	beat	 ===	8
	:measure		 ===	91	?	beat	 ===	8
	:measure		 ===	95	?	beat	 ===	8
	:measure		 ===	150	?		beat	 ===	8
	:measure		 ===	154	?		beat	 ===	8
	:measure		 ===	158	?		beat	 ===	8
	:measure		 ===	162	?		beat	 ===	8
	:measure		 ===	166	?		beat	 ===	8
	:measure		 ===	170	?		beat	 ===	8
	:measure		 ===	174	?		beat	 ===	8
	:measure		 ===	178	?		beat	 ===	8
	:measure		 ===	182	?		beat	 ===	8
	:measure		 ===	186	?		beat	 ===	8

	:measure		 ===	190	?		beat	 ===	8
	:measure		 ===	194	?		beat	 ===	8
	:measure		 ===	198	?		beat	 ===	8
	:measure		 ===	202	?		beat	 ===	8
	:measure		 ===	206	?		beat	 ===	8
	:measure		 ===	210	?		beat	 ===	8
	:measure		 ===	214	?		beat	 ===	8
	:measure		 ===	218	?		beat	 ===	8
	:measure		 ===	222	?		beat	 ===	8
	:measure		 ===	226	?		beat	 ===	8

	:measure		 ===	230	?		beat	 ===	8
	:measure		 ===	234	?		beat	 ===	8
	:measure		 ===	238	?		beat	 ===	8
	:measure		 ===	242	?		beat	 ===	8
	:measure		 ===	246	?		beat	 ===	8
	:measure		 ===	250	?		beat	 ===	8
	:measure		 ===	254	?		beat	 ===	8
	:measure		 ===	258	?		beat	 ===	8
	:measure		 ===	262	?		beat	 ===	8
	:measure		 ===	266	?		beat	 ===	8

	:	 '1'}
}) )
$bass.add( new Filter ({
	key:  "A1",
	length:  5, //音が何拍分の長さかを示す数値または数値を返す関数。
	active: (beat, measure) => {
	return	measure		 ===		59	?	beat		 ===	12
	:measure		 ===	63	?	beat	 ===	12
	:measure		 ===	67	?	beat	 ===	12
	:measure		 ===	71	?	beat	 ===	12
	:measure		 ===	75	?	beat	 ===	12
	:measure		 ===	79	?	beat	 ===	12
	:measure		 ===	83	?	beat	 ===	12
	:measure		 ===	87	?	beat	 ===	12
	:measure		 ===	91	?	beat	 ===	12
	:measure		 ===	95	?	beat	 ===	12
	:measure		 ===	150	?		beat	 ===	12
	:measure		 ===	154	?		beat	 ===	12
	:measure		 ===	158	?		beat	 ===	12
	:measure		 ===	162	?		beat	 ===	12
	:measure		 ===	166	?		beat	 ===	12
	:measure		 ===	170	?		beat	 ===	12
	:measure		 ===	174	?		beat	 ===	12
	:measure		 ===	178	?		beat	 ===	12
	:measure		 ===	182	?		beat	 ===	12
	:measure		 ===	186	?		beat	 ===	12

	:measure		 ===	190	?		beat	 ===	12
	:measure		 ===	194	?		beat	 ===	12
	:measure		 ===	198	?		beat	 ===	12
	:measure		 ===	202	?		beat	 ===	12
	:measure		 ===	206	?		beat	 ===	12
	:measure		 ===	210	?		beat	 ===	12
	:measure		 ===	214	?		beat	 ===	12
	:measure		 ===	218	?		beat	 ===	12
	:measure		 ===	222	?		beat	 ===	12
	:measure		 ===	226	?		beat	 ===	12

	:measure		 ===	230	?		beat	 ===	12
	:measure		 ===	234	?		beat	 ===	12
	:measure		 ===	238	?		beat	 ===	12
	:measure		 ===	242	?		beat	 ===	12
	:measure		 ===	246	?		beat	 ===	12
	:measure		 ===	250	?		beat	 ===	12
	:measure		 ===	254	?		beat	 ===	12
	:measure		 ===	258	?		beat	 ===	12
	:measure		 ===	262	?		beat	 ===	12
	:measure		 ===	266	?		beat	 ===	12

	:	 '1'}
}) )


$ongaq.add($bass)







});
