/************************************************************************
 設定
 ************************************************************************/

var GSI = {
	 ClientMode  : {}
	,Modal       : {}
	,Draw        : {}
	,Edit        : {}
	,Control     : {}
	,Utils       : {
		Browser  : {}
	 }
	,GLOBALS     : {}
	,TEXT        : {}
};

var CONFIG = {};

// 地理院地図用 layersファイル指定。
// (CONFIG.layers = null;に変更すると、同階層のlayers.txtを読込)

CONFIG.layersTab = [
	{
		'caption' : 'トピック',
		'layers' : [
			'./layers_txt/layers1.txt',
			'./layers_txt/layers_topic.txt',
			'./layers_txt/layers_skhb.txt',
			'./layers_txt/layers_topic_kusatsushirane.txt',
			'./layers_txt/layers_topic_nishi.txt',
                        './layers_txt/layers_オリパラ.txt'
		]
	},
	{
		'caption' : 'ベースマップ',
		'layers' : [
			'./layers_txt/layers0.txt'
		]
	},
	{
		'caption' : '全て',
		'layers' : null,
		'isDetail' : true
	}
	
];

CONFIG.layerBase          = ['./layers_txt/layers0.txt'];
CONFIG.layerBaseDefaultID = "std";
CONFIG.layerBaseFolder    = "ベースマップ";
CONFIG.layerBaseFolderSYS = "GSI.MAP.BASE";
CONFIG.layers = [
	'./layers_txt/layers1.txt',
	'./layers_txt/layers2.txt',
	'./layers_txt/layers3.txt',
	'./layers_txt/layers4.txt',
	'./layers_txt/layers_skhb.txt',
	'./layers_txt/layers5.txt',
	'./layers_txt/layers_experimental.txt'
];

CONFIG.layerEvacuationFolder = "指定緊急避難場所";
CONFIG.layerEvacuationFolderSYS = "GSI.MAP.EVAC";
CONFIG.layerEvacuationHeader = "skhb";
CONFIG.layerEvacuationIsConfirmOK = false;

//キャッシュ（Layers.txt）
CONFIG.LOADLAYERSTXTCACHE = false;

//キャッシュ（ココタイル）
CONFIG.LOADCOCOTILECACHE = true;

// トップメッセージ
CONFIG.TOPMESSAGE = null;
// 閉じた時のID != 現在のID または EXPIRES時間過ぎた場合にお知らせ復活
/*CONFIG.TOPMESSAGE = {
	MESSAGE : '<a href="http://maps.gsi.go.jp/help/howtouse/150108abstract.pdf"  TARGET="_blank">主な機能概要</a>',
	DETAILS : '',
	ID : '20150216', // 文字列を指定この値に変更あった場合はお知らせが復活
	EXPIRES : -1 //-1  // クッキーの有効期限( hour )
};*/

// 初期位置
CONFIG.DEFAULT = { CENTER : [35.3622222, 138.7313889],ZOOM : 5};

// レイヤータイプリスト
CONFIG.LAYERTYPELIST = {
	"kml"           : { caption : "KML", isTile: false },
	"tile"          : { caption : "タイル", isTile: true, isTileImage : true },
	"geojson"       : { caption : "GeoJSON", isTile: false },
	"topojson"      : { caption : "TopoJSON", isTile: false },
	"geojson_tile"  : { caption : "GeoJSONタイル", isTile: true },
	"topojson_tile" : { caption : "TopoJSONタイル", isTile: true },
	"tms"           : { caption : "TMS", isTile: true, isTileImage : true },
	"multiLayer"    : { caption : "複数レイヤ", isTile: false }
};

// Globe
CONFIG.GLOBEURL = "./globe/index_globe.html";


// 国土地理院距離計算式の利用のデフォルト値
CONFIG.USEGSIDISTANCE = true;

// ココタイルONOFFのデフォルト値
CONFIG.COCOTILEVISIBLE = false;

//ココタイルURL設定
// 複数設定例
CONFIG.COCOTILEURL = ['https://maps.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', 'https://maps.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', 'https://maps.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', 'https://insarmap.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv'];


// リストにレイヤーのタイプを表示するかどうか（デバッグ用）
CONFIG.VISIBLELAYERTYPE  = false;

// IE10,11のグレースケールを利用するか
//CONFIG.USEIE1011GRAYSCALE = true;
CONFIG.USEIE10GRAYSCALE = false;
CONFIG.USEIE11GRAYSCALE = true;

// 検索結果クリック時のズームレベル
CONFIG.SEARCHRESULTCLICKZOOM = 15;

// 検索結果のマーカー表示件数(-1で全て)
CONFIG.SEARCHRESULTMAXMARKERNUM = -1;

// 緯度経度グリッドスタイル
CONFIG.LATLNGGRIDSTYLE = {
	color : "#1D417A",
	weight : 2,
	opacity: 1,
	fill: false,
	fillOpacity:1,
	dashArray : [3,3]
};
CONFIG.LATLNGGRIDLABELCLASSNAME = 'latlnggrid_label';

// レイヤーツリーの階層を記憶
CONFIG.LAYERTREEDIALOGKEEPCURRENT = false;

// UTMグリッドスタイル
CONFIG.UTMGRIDSTYLE = {
	color : "#FF0000",
	weight : 2,
	opacity: 1,
	fill: false,
	fillOpacity:1,
	dashArray : [3,3],
	visible : false
};
CONFIG.UTMGRIDLABELCLASSNAME = 'utmgrid_label';
CONFIG.UTMGRIDBOUNDARYLABEL_HIDEMETER = true; 

// 磁北線の数
CONFIG.JIHOKULINECOUNT = 3;

// 磁北線のスタイル
CONFIG.JIHOKULINESTYLE = {
	"color":' #ff0000',
	"weight": 1,
	"opacity": 0.8,
	"fill" : false,
	"fillOpacity":1,
	"clickable" : false
};

// 磁北線が表示される閾値（ZLがこの値以上で表示される）
CONFIG.JIHOKULINEAVAILABLEZOOM = 11;

// 印刷用紙サイズ
CONFIG.PAPERSIZE = {
	"A4_portrait" : {w:650,h:900},  //A4縦
	"A4_landscape" : {w:950,h:550}, //A4横
	"A3_portrait" : {w:950,h:1350},  //A3縦
	"A3_landscape" : {w:1400,h:900}  //A3横
};

// ダイアログ表示等エフェクト
CONFIG.EFFECTS = {
	// メニュー表示エフェクト
	MENU : {
		ROOT : {
			animation : "slide",
			option : {"easing": "linear"},
			speed : "fast"
		},
		OTHER : {
			animation : "scale",
			option : {"direction": "both","easing": "linear"},
			speed : "fast"
		}
	},
	// ダイアログ表示エフェクト
	DIALOG : {
		animation : "puff",
		option : {"percent": 10},
		speed : "fast"
	}

};

// サークル→ポリゴンの角数/2
CONFIG.CIRCLETOPOLYGONNUMSIDES = 80;


// パラメータ用
CONFIG.PARAMETERNAMES = {
	CENTERCROSS : 'centercross',
	JIHOKULINE  : 'jihokuline',
	LATLNGGRID  : 'latlnggrid',
	UTMGRID     : 'utmgrid',
	TILEGRID    : 'tilegrid',
	AREAMESH    : 'areamesh',
	T25000GRID  : 't25000grid',
	CHIIKIMESH: 'chiikimesh',
	MINIMAP     : 'minimap',
    FOOTER      : 'footer',
	COCOTILE    : 'cocotile',
	CLICKMOVE   : 'clickmove',
	MULTIPOPUP  : 'multipopup',
	HIGHQUALITY : 'highquality',
	CONTEXTMENUOVERLAP : 'contextmenuoverlap',
	USEGSIDISTANCE : 'usegsidistance'
};

CONFIG.QUERYPARAMETER = {};
CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.CENTERCROSS ]= {
	prefix : 'c',
	settingName : 'centerCross'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.JIHOKULINE ] = {
	prefix : 'j',
	settingName : 'jihokuLine'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.LATLNGGRID ] = {
	prefix : 'l',
	settingName : 'latLngGrid'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.UTMGRID ] = {
	prefix : 'u',
	settingName : 'utmGrid'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.TILEGRID ] = {
	prefix : 't',
	settingName : 'tileGrid'
};
CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.T25000GRID ] = {
	prefix : 'z',
	settingName : 't25000Grid'
};
CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.CHIIKIMESH ] = {
	prefix : 'r',
	settingName : 'chiikiMesh'
};



CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.MINIMAP ] = {
	prefix : 'm',
	settingName : 'miniMap'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.FOOTER ] = {
	prefix : 'f',
	settingName : 'footer'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.COCOTILE ] = {
	prefix : 't',
	settingName : 'cocoTile'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.CLICKMOVE ] = {
	prefix : 'v',
	settingName : 'clickMove'
};

CONFIG.HIDDENCONTROLPARAMETER = {
	INFOMENU : 'i',
	FUNCMENU : 'f',
	HEADER : 'h',
	CONTEXTMENU : 'c',
	BASEMAPSELECTOR : 'b',
	ALL : 'all'
};

CONFIG.DIALOGPARAMETER = {
	VIEWLISTDIALOG : 'v',
	LAYERTREEDIALOG : 'l'
};

// GeoJSON 独自パラメータ
CONFIG.GEOJSONSPECIALKEYS ={
	"_markerType": true,

	"_iconUrl": true,
	"_iconSize": true,
	"_iconAnchor": true,
	"_html": true,
	"_radius": true,

	"_className": true,
	"_stroke": true,
	"_radius": true,

	"_dashArray": true,
	"_lineCap": true,
	"_lineJoin": true,
	"_clickable": true,

	"_color": true,
	"_opacity": true,
	"_weight": true,
	"_fill": true,
	"_fillColor": true,
	"_fillOpacity": true,
	"_weight": true

};

// ダブルクリック判定の時間
CONFIG.DBLCLICKINTERVAL = 300; // ミリ秒

// 右ダブルクリック判定ミリ秒
CONFIG.RIGHTDBLCLICKINTERVAL = 500;

// 背景地図
CONFIG.BASETILES = [];

/// 標高
/*
CONFIG.DEM     = new Array(1);
CONFIG.DEM[0] = { type : "PNG", url : "./[@]/tile.gsi/{z}/{x}/{y}.png"                   , z :  9, fixed : 1, src : "標高ＰＮＧ" };
*/
CONFIG.DEM = new Array(4);
CONFIG.DEM[0] = { type : "TXT", url : "https://cyberjapandata.gsi.go.jp/xyz/dem5a/{z}/{x}/{y}.txt", z : 15, fixed : 1, src : "DEM5A" };
CONFIG.DEM[1] = { type : "TXT", url : "https://cyberjapandata.gsi.go.jp/xyz/dem5b/{z}/{x}/{y}.txt", z : 15, fixed : 1, src : "DEM5B" };
CONFIG.DEM[2] = { type : "TXT", url : "https://cyberjapandata.gsi.go.jp/xyz/dem/{z}/{x}/{y}.txt"  , z : 14, fixed : 0, src : "DEM10B"};
CONFIG.DEM[3] = { type : "TXT", url : "https://cyberjapandata.gsi.go.jp/xyz/demgm/{z}/{x}/{y}.txt"  , z : 8, fixed : 0, src : "DEMGM"};
 
//for IE9
var vs = window.navigator.appVersion.toLowerCase();
var ua = window.navigator.userAgent.toLowerCase();
if((ua.indexOf("msie") >= 0) && (vs.indexOf("msie 9") >= 0))
{
  CONFIG.DEM[0] = { type : "TXT", url : "http://cyberjapandata.gsi.go.jp/xyz/dem5a/{z}/{x}/{y}.txt", z : 15, fixed : 1, src : "DEM5A" };
  CONFIG.DEM[1] = { type : "TXT", url : "http://cyberjapandata.gsi.go.jp/xyz/dem5b/{z}/{x}/{y}.txt", z : 15, fixed : 1, src : "DEM5B" };
  CONFIG.DEM[2] = { type : "TXT", url : "http://cyberjapandata.gsi.go.jp/xyz/dem/{z}/{x}/{y}.txt"  , z : 14, fixed : 0, src : "DEM10B"};
  CONFIG.DEM[3] = { type : "TXT", url : "http://cyberjapandata.gsi.go.jp/xyz/demgm/{z}/{x}/{y}.txt"  , z : 8, fixed : 0, src : "DEMGM"};

}

// サーバーサイドAPI
CONFIG.SERVERAPI = {};

CONFIG.SERVERAPI.GETADDR = "https://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress";
CONFIG.SERVERAPI.CHIMEI_SEARCH="https://msearch.gsi.go.jp/address-search/AddressSearch";

//for IE9
if((ua.indexOf("msie") >= 0) && (vs.indexOf("msie 9") >= 0))
{
	CONFIG.SERVERAPI.GETADDR = "http://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress";
	CONFIG.SERVERAPI.CHIMEI_SEARCH="http://msearch.gsi.go.jp/address-search/AddressSearch";
}

/************************************************************************
 設定：メニュー：ヘルプ
 ************************************************************************/
CONFIG.HELPMENU = [
 {'Moji':'ヘルプ',                 'Img':'./image/help/help_icon.png',    'Link':'http://maps.gsi.go.jp/help/'},
 {'Moji':'Twitter',                'Img':'./image/help/twitter.png',      'Link':'https://twitter.com/gsi_cyberjapan'},
 {'Moji':'GitHub',                 'Img':'./image/help/github.png',       'Link':'https://github.com/gsi-cyberjapan'},
 {'Moji':'パートナーネットワーク', 'Img':'./image/help/partner_icon.png', 'Link':'http://maps.gsi.go.jp/pn/'},
 {'Moji':'国土地理院トップ',       'Img':'./image/help/gsi_top.png',      'Link':'http://www.gsi.go.jp/'}
];

/************************************************************************
 設定：メニュー：情報
 ************************************************************************/
CONFIG.MAPMENU = {
	title : '情報'
};

/************************************************************************
 設定：メニュー：機能
 ************************************************************************/
CONFIG.FUNCMENU = {
	title : '機能',
	children : [
		{
			title : '設定',
			arrow : true,
			childrenWidth:240,
			children : [
				{
					title : 'グリッド表示',
					arrow : true,
					textAlign:"left",
					childrenWidth:230,
					children : [
						{
							id : CONFIG.PARAMETERNAMES.LATLNGGRID,
							title : '緯経度グリッド',
							typeA : 'check',
							defaultCheck : false
						},
						{
							id : CONFIG.PARAMETERNAMES.UTMGRID,
							title : 'UTMグリッド',
							typeA : 'check',
							defaultCheck : false
						},
						{
							id : CONFIG.PARAMETERNAMES.TILEGRID,
							title : 'タイル座標',
							typeA : 'check',
							defaultCheck : false
						},
						{
							id : CONFIG.PARAMETERNAMES.CHIIKIMESH,
							title : '地域メッシュ',
							typeA : 'check',
							defaultCheck : false
						},
						{
							id : CONFIG.PARAMETERNAMES.T25000GRID,
							title : '2万5千分1地形図郭',
							typeA : 'check',
							defaultCheck : false
						}
					]
				},
				{
					id : CONFIG.PARAMETERNAMES.CENTERCROSS,
					title : '中心十字線',
					typeA : 'check',
					defaultCheck : true
				},
				{
					id : CONFIG.PARAMETERNAMES.JIHOKULINE,
					title : '磁北線' + '<span class="mini_comment">（ズーム11以上）</span>',
					typeA : 'check',
					defaultCheck : false
				},
				{
					id : CONFIG.PARAMETERNAMES.MINIMAP,
					title : '広域図',
					typeA : 'check',
					defaultCheck : false
				},
				{
					id : CONFIG.PARAMETERNAMES.CLICKMOVE,
					title : 'クリックで移動',
					typeA : 'check',
					defaultCheck : false
				},
				{
					id : CONFIG.PARAMETERNAMES.MULTIPOPUP,
					title : 'ポップアップ複数表示',
					typeA : 'check',
					defaultCheck : false
				}
			]
		},
		{
			title : 'ツール',
			arrow : true,
			childrenWidth:150,
			children : [
				{
					id : 'sakuzu',
					title : '作図・ファイル',
					arrow : true
				},
				{
					id : 'measure',
					title : '計測',
					arrow : true
				},
				{
					id : 'ucode',
					title : '場所情報コード',
					arrow : true,
					href : 'ucodehref'//'http://ucopendb.gsi.go.jp/ucode_app/logical_code/ucode_disp.php?lat={y}&lng={x}&zoom={z}'
				},				
				{
					title : '共有',
					arrow : true,
					childrenWidth:200,
					children : [
						{
							id : 'share_link',
							title : 'リンクを取得',
							arrow : true
						},
						{
							id : 'share_builtin',
							title : 'サイトに埋込',
							arrow : true
						},
						{
							id : 'share_file',
							title : '名前を付けて一時保存',
							arrow : true
						}
					]
				},
				{
					id : 'print',
					title : '印刷',
					arrow : true
				},
				{
					id : 'saveimage',
					title : '画像として保存',
					arrow : true
				},
				{
					title : '他のウェブ地図',
					arrow : true,
					childrenWidth:160,
					children : [
						{
							title : 'Mapion',
							href : 'mapion'//'http://www.mapion.co.jp/m/{y}_{x}_{z}/?wgs=1'
						},
						{
							title : 'いつもNAVI',
							href : 'itsumonavi'//'http://www.its-mo.com/map/top_z/{y2}_{x2}_{z}/'
						}
					]
				}
			]
		},
		{
			title : '現在位置',
			arrow : true,
			id : 'gps',
			checkCondition : function() { return GSI.GeoLocation.can; }
		},
		{
			
			title : '3D',
			arrow : true,
			childrenWidth:210,
			children : [
				{
					id : 'gsi3d_l',
					title : '大(2048×2048)',
					//arrow : true,
					href : 'gsi3d_l'//'http://cyberjapandata.gsi.go.jp/3d/site/index.html?z={z}&lat={y}&lon={x}'
				},
				
				{
					id : 'gsi3d_s',
					title : '小(1024×1024)',
					//arrow : true,
					href : 'gsi3d_s'//'http://cyberjapandata.gsi.go.jp/3d/site/index.html?z={z}&lat={y}&lon={x}'
				},
				
				{
					id : 'gsi3d_custom',
					title : 'カスタム'
				}/*,
				{
					id : 'gsi3d_view',
					title : '表示領域(最大2048×2048)',
					//arrow : true,
					href : 'gsi3d_view'//'http://cyberjapandata.gsi.go.jp/3d/site/index.html?z={z}&lat={y}&lon={x}'
				}*/
			]
		},
		{
			title : 'Globe',
			arrow : true,
			href : 'gsiglobe'//'http://maps.gsi.go.jp/globe/index_globe.html'
		}
	]
};

/************************************************************************
 設定：グリッド（ズームレベル対応）
 ************************************************************************/
// 緯度経度グリッド
CONFIG.LATLNGGRID = {
	CONDITION : [
		{ zoom : 2,  grid : 3600 * 40},
		{ zoom : 3,  grid : 3600 * 40},
		{ zoom : 4,  grid : 3600 * 20},
		{ zoom : 5,  grid : 3600 * 10},
		{ zoom : 6,  grid : 3600 * 5},
		{ zoom : 7,  grid : 3600 * 3},
		{ zoom : 8,  grid : 3600 * 2},
		{ zoom : 9,  grid : 3600 },
		{ zoom : 10, grid : 60 * 30 },
		{ zoom : 11, grid : 60 * 20 },
		{ zoom : 12, grid : 60 * 10 },
		{ zoom : 13, grid : 60 * 3 },
		{ zoom : 14, grid : 60 * 2 },
		{ zoom : 15, grid : 60 },
		{ zoom : 16, grid : 30 },
		{ zoom : 17, grid : 20 },
		{ zoom : 18, grid : 10 },
		{ zoom : 99, grid : 10 }
	]
};

// UTMグリッド
CONFIG.UTMGRID = {
	CONDITION : [
		{ zoom : 7, grid : 'a'},          //  7以下 広域
		{ zoom : 10, grid : 100 * 1000 }, // 10以下 100km
		{ zoom : 11, grid : 20  * 1000 },
		{ zoom : 12, grid : 10  * 1000 },
		{ zoom : 13, grid : 5  * 1000 },
		{ zoom : 14, grid : 3  * 1000 },
		{ zoom : 15, grid : 1  * 1000 },
		{ zoom : 16, grid : 500 },
		{ zoom : 17, grid : 250 },
		{ zoom : 18, grid : 100 },
		{ zoom : 99, grid : 100 }
	]
};

/************************************************************************
 設定：文言
 ************************************************************************/
// 計測
GSI.TEXT.MEASURE = {};
GSI.TEXT.MEASURE.DIALOG_TITLE = '計測';
GSI.TEXT.MEASURE.DIALOG_DISTANCE_CAPTION = '距離';
GSI.TEXT.MEASURE.DIALOG_AREA_CAPTION = '面積';
GSI.TEXT.MEASURE.DIALOG_OBJECT_CAPTION = '選択図形';

// 作図関連
GSI.TEXT.SAKUZU = {};
GSI.TEXT.SAKUZU.SAKUZUTITLE = '新規作図情報';
GSI.TEXT.SAKUZU.LOAD_ERROR = 'ファイルが読み込めません。';
GSI.TEXT.SAKUZU.LOAD_NOFILE = 'ファイルが選択されていません。';

GSI.TEXT.SAKUZU.DIALOG_TITLE = '作図・ファイル';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_LOAD = 'ファイルから読み込み';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_SAVE = '選択している情報をまとめて保存';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDMARKER = 'マーカー（アイコン）を追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDCIRCLEMARKER = 'マーカー（円）を追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDDIVMARKER = 'テキストを追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDLINE = '線を追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDPOLY = 'ポリゴンを追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDCIRCLE = '円を追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDFREEHAND = 'フリーハンドで線を追加';

GSI.TEXT.SAKUZU.DIALOG_LIST_EDITBTN = '編集';
GSI.TEXT.SAKUZU.DIALOG_LIST_REMOVEBTN = '削除';
GSI.TEXT.SAKUZU.DIALOG_LIST_VISIBLEICONLABELBTN = 'アイコンのラベルを表示';


GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT = '<strong>KML,GeoJSON,TopoJSON</strong>ファイルを選択してください<br><div style="font-size:85%">※ファイルを地図上にドラッグ＆ドロップすることでも読み込めます</div>';
GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT_IE8 = '<strong>KML,GeoJSON,TopoJSON</strong>ファイルの内容を入力して下さい<br><div style="font-size:85%">※ファイルを地図上にドラッグ＆ドロップすることでも読み込めます</div>' ;
GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT_IE9 = '<strong>KML,GeoJSON,TopoJSON</strong>ファイルを選択してください';
GSI.TEXT.SAKUZU.DIALOG_LOAD_FILENAMECAPTION = 'パネル上の表示名' ;

GSI.TEXT.SAKUZU.DIALOG_LOAD_OKBTN = '読込を開始';
GSI.TEXT.SAKUZU.DIALOG_LOAD_CANCELBTN = '中　止';
GSI.TEXT.SAKUZU.DIALOG_LOAD_NOFILE = 'ファイルが選択されていません。';
GSI.TEXT.SAKUZU.DIALOG_LOAD_NOTEXT = 'テキストが入力されていません。';
GSI.TEXT.SAKUZU.DIALOG_LOAD_ERROR = '読み込みに失敗しました。ファイルの形式をご確認ください。';

GSI.TEXT.SAKUZU.DIALOG_SAVE_COMMENT = 'ファイル形式を選択して下さい';
GSI.TEXT.SAKUZU.DIALOG_SAVE_COMMENT2= '「TEXT」および「マーカー(円)」で作図した内容はGeoJSON形式でのみ保存可能です。';
GSI.TEXT.SAKUZU.DIALOG_SAVE_COMMENT_IE8 = '<strong>KML,GeoJSON,TopoJSON</strong>ファイルの内容を入力して下さい' ;
GSI.TEXT.SAKUZU.DIALOG_SAVE_OKBTN = '上記の内容で保存';
GSI.TEXT.SAKUZU.DIALOG_SAVE_OKBTN_CLIPBOARD = 'クリップボードにコピー';
GSI.TEXT.SAKUZU.DIALOG_SAVE_CANCELBTN = '戻　る';

GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVEBTN = 'オブジェクトの削除';
GSI.TEXT.SAKUZU.DIALOG_EDIT_OKBTN = '確　定';
GSI.TEXT.SAKUZU.DIALOG_EDIT_OK2BTN = 'O　K';
GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELBTN = '終　了';
GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCEL2BTN = 'キャンセル';
GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELCONFIRMMSG = '編集を終了しますか？確定していない編集内容は破棄されます。';
GSI.TEXT.SAKUZU.DIALOG_HIDECONFIRMMSG = '作図・ファイルパネルを閉じますか？確定していない編集内容は破棄されます。';
GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVECONFIRMMSG = 'このオブジェクトを削除します。よろしいですか？';
GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVELAYERCONFIRMMSG = 'このレイヤを削除します。よろしいですか？';
GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOFREE_BTN = '自由文入力に切替';
GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOTABLE_BTN = 'テーブル入力に切替';
GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_MSG = '表示するHTMLを入力して下さい。';
GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_TEXTMODE_MSG = '表示するテキストを入力して下さい。';
GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_HINT = '例1:動物園　\n例2:<span style="background:#00FFFF; color:red; font-size:20pt;">図書館</span>';
GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_TEXTMODE_HINT = '例1:動物園';

// 共有
GSI.TEXT.SHARE = {};
GSI.TEXT.SHARE.DIALOG_TITLE = '共有';
GSI.TEXT.SHARE.DIALOG_LINK_TITLE = 'リンクを取得';
GSI.TEXT.SHARE.DIALOG_BUILTIN_TITLE = 'ウェブサイトに埋め込む';
GSI.TEXT.SHARE.DIALOG_SAVE_TITLE = '名前を付けて一時保存';

GSI.TEXT.SHARE.DIALOG_LINK_MESSAGE = '次のURLをメール等で送付することで、現在表示されている地図を共有することができます。'+'<div style="font-size:85%;">※作図結果は反映されません。作図結果は、作図・ファイル機能を使ってファイルに保存して共有することをおすすめいたします。</div>';
GSI.TEXT.SHARE.DIALOG_BUILTIN_MESSAGE = '次のタグをHTMLファイルに加えることで、地理院地図をウェブサイトに埋め込むことができます。'+'<div style="font-size:85%;">※作図結果は反映されません。作図結果は、作図・ファイル機能を使ってファイルに保存して共有することをおすすめいたします。</div>';
GSI.TEXT.SHARE.DIALOG_SAVE_MESSAGE = '次のHTMLを[上記のHTMLを保存]>ボタンをクリックして保存して下さい。'+'<div style="font-size:85%;">※HTML は一時的なものとしてご利用ください。作図情報は、作図機能を使ってファイルに保存することをおすすめします。</div>';
GSI.TEXT.SHARE.DIALOG_SAVE_MESSAGE_IE8 = '次のHTMLをテキストエディタで<strong>文字コードUTF-8</strong>で保存して下さい。' ;

GSI.TEXT.SHARE.DIALOG_TEMPLATELOADERROR = '大変申し訳ありません。しばらく経ってからご利用下さい' ;

GSI.TEXT.SHARE.DIALOG_DOWNLOADBTN = '上記のHTMLを保存';
GSI.TEXT.SHARE.DIALOG_COPYBTN = 'クリップボードにコピー';
GSI.TEXT.SHARE.DIALOG_NOCOPYMSG = 'URLをコピーしてご利用下さい';

// 3D範囲選択
GSI.TEXT.THREEDAREA = {};
GSI.TEXT.THREEDAREA.DIALOG_TITLE = '3D範囲を選択';
GSI.TEXT.THREEDAREA.DIALOG_OKBTN = 'O　K';
GSI.TEXT.THREEDAREA.DIALOG_CANCELBTN = '終　了';

// 画像保存
GSI.TEXT.MAPTOIMAGE = {};
GSI.TEXT.MAPTOIMAGE.WINDOW_MSG ="ファイルを保存する準備が整いました";
GSI.TEXT.MAPTOIMAGE.WINDOW_SAVEIMGBTN = '画像を保存';
GSI.TEXT.MAPTOIMAGE.WINDOW_SAVEPGWBTN = 'ワールドファイルを保存';
GSI.TEXT.MAPTOIMAGE.WINDOW_MSG2 ='※保存したファイルは、国土地理院コンテンツ利用規約に従ってご利用ください。<br>' + 
'<a href="http://maps.gsi.go.jp/help/use.html" target="_blank">地理院タイルのご利用について</a><br>' +
'<a href="http://maps.gsi.go.jp/help/howtouse.html" target="_blank">ワールドファイルについて</a>' ;

GSI.TEXT.EVAC = {};
GSI.TEXT.EVAC.KIYAKU = '最新の状況などは当該市町村にご確認ください。';
GSI.TEXT.EVAC.KIYAKULINK = '<a href="http://www.gsi.go.jp/bousaichiri/hinanbasho.html" target="blank">「指定緊急避難場所」について</a>　<a href="http://disaportal.gsi.go.jp/hinanbasho/koukaidate.html" target="blank">市町村別公開日・更新日一覧</a>';
GSI.TEXT.EVAC.CONFIRMTOP = '地理院地図に掲載されている指定緊急避難場所データ（以下、「本データ」といいます）を利用される場合は、<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="blank">国土地理院コンテンツ利用規約</a>のほか、以下のご利用上の注意をご確認いただき、内容に同意された場合のみご利用ください。';
GSI.TEXT.EVAC.ATTENTION = '【ご利用上の注意】';
GSI.TEXT.EVAC.CONFIRMITEM1 = '本データは、災害対策基本法第49条の4に基づき市町村長が指定した指定緊急避難場所の情報を各市町村に提供いただき、当該市町村に確認の上、地図上に表示したものです。最新の状況などは当該市町村にご確認ください。';
GSI.TEXT.EVAC.CONFIRMITEM2 = '本データを、ダウンロードや印刷等を行い国土地理院サーバ外で利用される場合は、本データの更新にあわせて最新の情報をご利用ください（参照：<a href="http://disaportal.gsi.go.jp/hinanbasho/koukaidate.html" target="blank">市町村別公開日・更新日一覧</a>）。';
GSI.TEXT.EVAC.CONFIRMITEM3 = '指定緊急避難場所は、災害種別ごとに指定されています。本データをダウンロードや印刷等を行い国土地理院サーバ外で利用される場合、指定された災害種別を利用者が正確に理解できるよう、十分にご留意ください。';
GSI.TEXT.EVAC.ATTENTIONDATA = '【データについて】';
GSI.TEXT.EVAC.DATAITEM1 = '<a href="http://www.gsi.go.jp/bousaichiri/hinanbasho.html" target="blank">「指定緊急避難場所」について</a>';
GSI.TEXT.EVAC.DATAITEM2 = '<a href="http://www.gsi.go.jp/bousaichiri/hinanbasho-help.html" target="blank">利用方法</a>';
GSI.TEXT.EVAC.DATAITEM3 = '<a href="http://disaportal.gsi.go.jp/hinanbasho/koukaidate.html" target="blank">市町村別公開日・更新日一覧</a>';
GSI.TEXT.EVAC.DATAITEM5 = '<a href="https://geoinfo2.gsi.go.jp/contact/Inquiry2.aspx?pcode=1004&bcode=100411&mcode=10041101" target="blank">お問い合わせ</a>';



/************************************************************************
 設定：作図
 ************************************************************************/
CONFIG.SAKUZU = {

	SYMBOL : {
		URL: "https://maps.gsi.go.jp/portal/sys/v4/symbols/",
		FILES:[
			// 汎用記号（●（光沢）、●、○、■（影付き）、■、×、▲（影付き）、△、★）
			'080.png', '081.png', '082.png', '083.png', '805.png', '806.png', '807.png', '808.png', '809.png', '810.png',
			'076.png', '077.png', '078.png', '079.png', '395.png', '396.png', '397.png', '398.png', '399.png', '400.png',
			'097.png', '098.png', '099.png', '100.png', '389.png', '390.png', '391.png', '392.png', '393.png', '394.png',
			'084.png', '085.png', '086.png', '087.png', '811.png', '812.png', '813.png', '814.png', '815.png', '816.png',
			'088.png', '089.png', '090.png', '091.png', '817.png', '818.png', '819.png', '820.png', '821.png', '822.png',
			'092.png', '093.png', '094.png', '095.png', '096.png', '695.png', '696.png', '697.png', '698.png', '699.png',
			'101.png', '102.png', '103.png', '104.png', '823.png', '824.png', '825.png', '826.png', '827.png', '828.png',
			'105.png', '106.png', '107.png', '108.png', '829.png', '830.png', '831.png', '832.png', '833.png', '834.png',
			'317.png', '318.png', '319.png', '316.png', '320.png', '800.png', '801.png', '802.png', '803.png', '804.png',

			// 汎用記号（その他）
			'312.png', '313.png', '363.png', 
			'337.png', '338.png', '339.png', '340.png', '341.png', '342.png', '343.png', '344.png', '345.png', '346.png', 
			'347.png', '348.png', '349.png', '350.png', '351.png', '352.png', '353.png', '354.png', '355.png', '356.png', 
			'357.png', '358.png', '359.png', '360.png', '361.png', '362.png', 
			'213.png', '214.png', '168.png', '169.png', '170.png', '171.png', 
			'324.png', '332.png', '326.png', '331.png', '321.png', '329.png', '325.png', '330.png', '323.png', '334.png', 
			'327.png', '333.png', '322.png', '335.png', '328.png', '336.png', 
			'180.png', '188.png', '181.png', '182.png', '183.png', '184.png', '185.png', '186.png', '187.png', '189.png', 
			'373.png', '377.png', '379.png', '382.png', '378.png', '371.png', '381.png', '376.png', '375.png', '372.png', 
			'374.png', '380.png', 'dot.png', 

			// 数字
			'700.png', '701.png', '702.png', '703.png', '704.png', '705.png', '706.png', '707.png', '708.png', '709.png', '710.png', 
			'205.png', '201.png', '202.png', '203.png', '204.png', 
			'206.png', '207.png', '208.png', 
			'209.png', '210.png', '211.png', '212.png', 
			'215.png', '216.png', '217.png', 
			'457.png', '458.png', '459.png', '460.png', '461.png', '462.png', '463.png', '464.png', '465.png', '466.png', 

			// 交通
			'190.png', '005.png', '067.png', '122.png', '123.png', '124.png', '019.png', '020.png', '015.png', '014.png', 
			'138.png', '137.png', '157.png', '158.png', '159.png', '160.png', '161.png', 
			'018.png', '072.png', '017.png', '016.png', '073.png', '074.png', '075.png', '049.png', '009.png', '040.png',
			'066.png', '057.png', '068.png', 

			// 施設
			'001.png', '002.png', '003.png', '004.png', '006.png', '007.png', '008.png', '010.png', '011.png', '012.png', 
			'035.png', '036.png', '037.png', '038.png', '128.png', '134.png', '139.png', '111.png', '114.png', '109.png', 
			'135.png', '129.png', '130.png', '131.png', '132.png', '133.png', '136.png', '013.png', '021.png', '022.png', 
			'023.png', '024.png', '026.png', '027.png', '028.png', '029.png', '121.png', '034.png', '033.png', '032.png', 
			'116.png', '115.png', '025.png', '030.png', '031.png', '039.png', '042.png', '043.png', '044.png', '045.png', 
			'046.png', '047.png', '048.png', '110.png', '041.png', '112.png', '113.png', '117.png', '119.png', '118.png', 
			'120.png', '125.png', '126.png', '127.png', '140.png', '051.png', '050.png',
			'071.png', '150.png', '151.png', '152.png', '153.png', '154.png', '155.png', '156.png', '052.png', '053.png', 
			'141.png', '069.png', '056.png', '058.png', '059.png', '060.png', '061.png', '062.png', '063.png', '064.png', 
			'065.png', '142.png', '143.png', '144.png', '145.png', '146.png', '147.png', '148.png', '149.png', '070.png',
			'162.png', '163.png', '165.png', '164.png', '166.png', '167.png', 
			'054.png', '055.png', '364.png', '315.png', '314.png', '365.png', '200.png', '476.png', 

			// 災害
			'449.png', '447.png', '446.png', '445.png', '438.png', '437.png', '436.png', '300.png', 
			'301.png', '302.png', '303.png', '304.png', '305.png', '306.png', '307.png', 
			'308.png', '309.png', '310.png', '311.png', 
			'1101.png', '1102.png', '1103.png', '1104.png', '1105.png', '1106.png', '1107.png', '1108.png'
		],
		ICONSIZE : [20,20],
		ICONANCHOR : [10,10],
		DEFAULTICON : '080.png',
		INIT_DEFAULTICON : '080.png',
		ICON_SCALE : 1,
		INIT_ICON_SCALE : 1
	},
	
	
	
	FONTSIZELIST : [
		8,9,10,11,12,15,18,19,20,24,32,48,64,92
	]
	
};


/************************************************************************
 jQuery
  メソッド補完、追加
 ************************************************************************/
jQuery.extend({
	stringify : function stringify(obj) {
		var t = typeof (obj);
		if (t != "object" || obj === null) {
			// simple data type
			if (t == "string") obj = '"' + obj + '"';
			return String(obj);
		} else {
			// recurse array or object
			var json = [], arr = (obj && obj.constructor == Array);

			for (var n in obj) {
				var v = obj[n];
				t = typeof(v);
				if (obj.hasOwnProperty(n)) {
					if (t == "string") v = '"' + v + '"'; else if (t == "object" && v !== null) v = jQuery.stringify(v);
					json.push((arr ? "" : '"' + n + '":') + String(v));
				}
			}
			return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
		}
	}
});

try
{
	window.console = window.console || {log:function(){}};
}catch(e){}

try
{
window.JSON || ( window.JSON = {
	parse : function( src )
	{
		return $.parseJSON( src );
	},

	stringify : function(obj)
	{
		return $.stringify( obj );
	}
});

}
catch(e)
{}

// ie8 array のmap, filterメソッド追加
try
{
(function(fn){
    if (!fn.map) fn.map=function(f){var r=[];for(var i=0;i<this.length;i++)if(this[i]!==undefined)r[i]=f(this[i]);return r;}
    if (!fn.filter) fn.filter=function(f){var r=[];for(var i=0;i<this.length;i++)if(this[i]!==undefined&&f(this[i]))r[i]=this[i];return r;}
})(Array.prototype);
}
catch(e)
{}

// leafletのsetOpacityがIE8で利かないためjQueryに任せる
L.DomUtil.setOpacity = function(el,opacity)
{
	$(el).css({opacity:opacity} );
};

// JQuery.ajax IE11の場合XMLHttpRequestを使用させるため
if ( window.ActiveXObject !== undefined && !window.XDomainRequest )
{
	jQuery.ajaxSettings.xhr = function () {
		try {
			return new window.XMLHttpRequest();
		} catch( e ) {}
	};
}

/************************************************************************
 Proj4js
 ************************************************************************/
Proj4js.defs["EPSG:3097"] = "+proj=utm +zone=51 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		    //UTM Zone51
Proj4js.defs["EPSG:3098"] = "+proj=utm +zone=52 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		    //UTM Zone52
Proj4js.defs["EPSG:3099"] = "+proj=utm +zone=53 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		    //UTM Zone53
Proj4js.defs["EPSG:3100"] = "+proj=utm +zone=54 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		    //UTM Zone54
Proj4js.defs["EPSG:3101"] = "+proj=utm +zone=55 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		    //UTM Zone55
Proj4js.defs["SR-ORG:1235"] = "+proj=utm +zone=56 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";	    //UTM Zone56
Proj4js.defs['EPSG:4301'] = "+proj=longlat +ellps=bessel +towgs84=-146.336,506.832,680.254,0,0,0,0 +no_defs";	//日本測地系（経緯度座標）

/************************************************************************
 GSI.Draw
 L.FeatureGroup
 L.Polygon
 L.Draw.Circle
 L.Draw.Polyline
 L.Draw.Polygon
 L.Draw.SimpleShape
 ************************************************************************/
L.FeatureGroup.include({
	closePopup : function()
	{
		for (var id in this._layers) {
			this._layers[id].closePopup();
		}
		return this;
	},
	unbindPopup : function()
	{
		for (var id in this._layers) {
			this._layers[id].unbindPopup();
		}
		return this;
	}
} );


GSI.Circle = L.Circle.extend( { 
	initialize: function (latlng, radius, options) {
		L.Circle.prototype.initialize.call(this, latlng, radius, options);
	},
	_getPathPartStr: function (points) {
		var round = L.Path.VML;

		for (var j = 0, len2 = points.length, str = '', p; j < len2; j++) {
			p = points[j];
			if (round) {
				p._round();
			}
			str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
		}
		return str + (L.Browser.svg ? 'z' : 'x');
	},
	_projectLatlngs: function () {
		this._originalPoints = [];
		for (var i = 0, len = this._latlngs.length; i < len; i++) {
			this._originalPoints[i] = this._map.latLngToLayerPoint(this._latlngs[i]);
		}
		// project polygon holes points
		// TODO move this logic to Polyline to get rid of duplication
		this._holePoints = [];

		if (!this._holes) { return; }

		var i, j, len, len2;

		for (i = 0, len = this._holes.length; i < len; i++) {
			this._holePoints[i] = [];

			for (j = 0, len2 = this._holes[i].length; j < len2; j++) {
				this._holePoints[i][j] = this._map.latLngToLayerPoint(this._holes[i][j]);
			}
		}
	},
	
	_clipPoints: function () {
		var points = this._originalPoints,
		    newParts = [];

		this._parts = [points].concat(this._holePoints);
		if (this.options.noClip) { return; }
		
		for (var i = 0, len = this._parts.length; i < len; i++) {
			var clipped = L.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
			if (clipped.length) {
				newParts.push(clipped);
			}
		}
		this._parts = newParts;
	},
	_convertLatLngs: function (latlngs, overwrite) {
		var i, len, target = overwrite ? latlngs : [];

		for (i = 0, len = latlngs.length; i < len; i++) {
			if (L.Util.isArray(latlngs[i]) && typeof latlngs[i][0] !== 'number') {
				return;
			}
			target[i] = L.latLng(latlngs[i]);
		}
		return target;
	},
	_initWithHoles: function (latlngs) {
		var i, len, hole;
		if (latlngs && L.Util.isArray(latlngs[0]) && (typeof latlngs[0][0] !== 'number')) {
			this._latlngs = this._convertLatLngs(latlngs[0]);
			this._holes = latlngs.slice(1);

			for (i = 0, len = this._holes.length; i < len; i++) {
				hole = this._holes[i] = this._convertLatLngs(this._holes[i]);
				if (hole[0].equals(hole[hole.length - 1])) {
					hole.pop();
				}
			}
		}

		// filter out last point if its equal to the first one
		latlngs = this._latlngs;

		if (latlngs.length >= 2 && latlngs[0].equals(latlngs[latlngs.length - 1])) {
			latlngs.pop();
		}
	},

	getPathString: function () {
		this._originalPoints = [];
		var latlngs = [];
		var numSides = CONFIG.CIRCLETOPOLYGONNUMSIDES;
		var center = this.getLatLng();
		var center_lat_rad = center.lat * Math.PI/180;
		var center_lng_rad = center.lng * Math.PI/180;
		var dmax_lat = this._mRadius / 6378137;
		var xys=[];
		xys.push([dmax_lat,0]);
		for(var i = 1; i < numSides; i++)
		{
			var y = dmax_lat - 2 * dmax_lat/numSides * i;
			var x =   2 * Math.asin(Math.sqrt((Math.pow(Math.sin(dmax_lat/2),2) - Math.pow(Math.sin((y)/2),2)) / (Math.cos(center_lat_rad+y)*Math.cos(center_lat_rad))));
			if(x !== x){
			 return;
			}else{
			 xys.push([y, x]);
			}
		}
		xys.push([-dmax_lat,0]);
		for(var i = 1; i < numSides; i++)
		{
			xys.push([xys[numSides-i][0],-xys[numSides-i][1]]);
		}
		xys.push([dmax_lat,0]);
		for(var i = 0; i < xys.length; i++)
		{
			latlngs.push(L.latLng((center_lat_rad+xys[i][0]) / (Math.PI/180), (center_lng_rad+xys[i][1]) / (Math.PI/180)));
		}
		
		this._latlngs = this._convertLatLngs(latlngs);
		this._initWithHoles(latlngs);
		this._projectLatlngs();
		this._clipPoints();
		var parts = this._parts,
		    lu = L.LineUtil;

		for (var i = 0, len = parts.length; i < len; i++) {
			parts[i] = lu.simplify(parts[i], this.options.smoothFactor);
		}
		
		
		for (var i = 0, len = this._parts.length, str = ''; i < len; i++) {
			str += this._getPathPartStr(this._parts[i]);
		}
		return str;
	}
	/*
	getPathString: function () {
		
		var p = this._point,
		    r = this._radius;

		if (this._checkIfEmpty()) {
			return '';
		}
		if (L.Browser.svg) {
			return 'M' + p.x + ',' + (p.y - r) +
			       'A' + r + ',' + r + ',0,1,1,' +
			       (p.x - 0.1) + ',' + (p.y - r) + ' z';
		} else {
			p._round();
			r = Math.round(r);
			return 'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r + ' 0,' + (65535 * 360);
		}
	}
	*/
});

/*
L.Draw.Circle.prototype._drawShape = function (latlng) {
	
	if (!this._shape) {
		this._shape = new GSI.Circle(this._startLatLng, this._startLatLng.distanceTo(latlng), this.options.shapeOptions);
		this._map.addLayer(this._shape);
	} else {
		this._shape.setRadius(this._startLatLng.distanceTo(latlng));
	}
};

L.Draw.Circle.prototype._fireCreatedEvent = function () {
	var circle = new GSI.Circle(this._startLatLng, this._shape.getRadius(), this.options.shapeOptions);
	L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, circle);
};
*/

GSI.Circle.addInitHook(function () {
	if (L.Edit.Circle) {
		this.editing = new L.Edit.Circle(this);

		if (this.options.editable) {
			this.editing.enable();
		}
	}

	this.on('add', function () {
		if (this.editing && this.editing.enabled()) {
			this.editing.addHooks();
		}
	});

	this.on('remove', function () {
		if (this.editing && this.editing.enabled()) {
			this.editing.removeHooks();
		}
	});
});

L.circle = function (latlng, radius, options) {
	return new GSI.Circle(latlng,radius, options);
};

GSI.Draw.convertRadius = function(radius, latlng, unit)
{
	var result = {
		radius : radius.toFixed(1),
        latlng : latlng,
		unit   : unit
	};
    if(unit == "m"){
	    if ( result.radius > 1000 )
	    {
		    result.radius = (radius  / 1000).toFixed(4);
		    result.unit   = 'km';
	    }
    }
    if(unit == "px"){
        result.radius = Math.floor(result.radius);
    }
	return result;

};

GSI.PixelRectangle = L.Polygon.extend({
	initialize: function (center, width, height, anchorX, anchorY, options) {
		//this._boundsToLatLngs(center,width, height)
		this._center = center;
		this._width = width;
		this._height = height;
		this._anchorX = anchorX;
		this._anchorY = anchorY;

		L.Polygon.prototype.initialize.call(this, [this._center,this._center,this._center], options);
	},
	onZoomEnd : function()
	{
		this.setLatLngs( this._boundsToLatLngs( this._center, this._width, this._height, this._anchorX , this._anchorY ) );
	},
	onAdd : function(map)
	{
		L.Polygon.prototype.onAdd.call(this, map);
		this.setLatLngs( this._boundsToLatLngs( this._center, this._width, this._height, this._anchorX , this._anchorY  ) );

		this._onZoomEnd = L.bind( this.onZoomEnd, this );
		map.on( 'zoomend', this._onZoomEnd );
	},
	onRemove : function(map)
	{
		map.off( 'zoomend', this._onZoomEnd );

		L.Polygon.prototype.onRemove.call(this, map);
	},
	_boundsToLatLngs: function (center, width, height, anchorX , anchorY ) {

		var centerPoint = this._map.latLngToContainerPoint( center );

		var left = centerPoint.x - anchorX;
		var top = centerPoint.y - anchorY;

		var right = centerPoint.x + ( width- anchorX );
		var bottom = centerPoint.y + ( height- anchorY );

		var southWest = this._map.containerPointToLatLng( L.point( left, bottom ) );
		var northEast = this._map.containerPointToLatLng( L.point( right, top ) );

		latLngBounds = L.latLngBounds(southWest, northEast );
		return [
			latLngBounds.getSouthWest(),
			latLngBounds.getNorthWest(),
			latLngBounds.getNorthEast(),
			latLngBounds.getSouthEast()
		];
	}
});

GSI.Draw.Circle = L.Draw.Circle.extend( {

	_onMouseMove: function (e)
	{
		var latlng = e.latlng,
			showRadius = this.options.showRadius,
			useMetric = this.options.metric,
			radius;

		this._tooltip.updatePosition(latlng);
		if (this._isDrawing) {
			this._drawShape(latlng);

			// Get the new radius (rounded to 1 dp)
			radius = this._shape.getRadius().toFixed(1);

			this._tooltip.updateContent({
				text: this._endLabelText,
				subtext: showRadius ? '半径: ' + L.GeometryUtil.readableDistance(radius, useMetric) : ''
			});
		}

		if (this._isDrawing)
		{
			this.fire( "change",GSI.Draw.convertRadius(this._shape.getRadius(), latlng, "m") );
		}
	},
	
	_drawShape : function (latlng) {
		if (!this._shape) {
			this._shape = new GSI.Circle(this._startLatLng, this._startLatLng.distanceTo(latlng), this.options.shapeOptions);
			this._map.addLayer(this._shape);
		} else {
			this._shape.setRadius(this._startLatLng.distanceTo(latlng));
		}
	},

	_fireCreatedEvent : function () {
		var circle = new GSI.Circle(this._startLatLng, this._shape.getRadius(), this.options.shapeOptions);
		L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, circle);
	}
} );

GSI.Draw.CircleMarker = L.Draw.Circle.extend( {
	_onMouseMove: function (e)
	{
		var latlng = e.latlng,
			showRadius = this.options.showRadius,
			useMetric = this.options.metric,
			radius;

		this._tooltip.updatePosition(latlng);
		if (this._isDrawing) {
			this._drawShape(latlng);

			// Get the new radius (rounded to 1 dp)
			radius = this._shape.getRadius().toFixed(1);

			this._tooltip.updateContent({
				text: this._endLabelText,
				subtext: showRadius ? '半径: ' + GSI.Utils.ConverUnit(GSI.GLOBALS.map, this._shape, radius, "m", "px") + 'px': ''
			});
		}

		if (this._isDrawing)
		{
			this.fire( "change",GSI.Draw.convertRadius(GSI.Utils.ConverUnit(GSI.GLOBALS.map, this._shape, radius, "m", "px"), latlng, "px") );
		}
	}
} );

GSI.Draw.Polyline = L.Draw.Polyline.extend( {

	initialize: function (map, options) {
		if ( GSI.Utils.Browser.isSmartMobile )
		{
			options.touch = new L.DivIcon({
				iconSize: new L.Point(24, 24),
				className: 'leaflet-div-icon leaflet-editing-icon gsi_draw_icon'
			});
		}
		
		L.Draw.Polyline.prototype.initialize.call(this, map, options);
	},
	_vertexChanged : function(latlng, added)
	{
		this._currentLatLng = latlng;
		
		L.Draw.Polyline.prototype._vertexChanged.call(this,latlng,added);

		var currentLatLng = this._currentLatLng,
			previousLatLng = this._markers[this._markers.length - 1].getLatLng(),
			distance;

		distance = this._measurementRunningTotal + currentLatLng.distanceTo(previousLatLng);
		var distanceStr = '0 m';
		if (distance > 1000) {
			distanceStr = (distance  / 1000).toFixed(3) + ' km';
		} else {
			distanceStr = Math.ceil(distance) + ' m';
		}
		this.fire( 'measurechange', { distance : distanceStr } );
	}
} );

GSI.Draw.Polygon = L.Draw.Polygon.extend( {

	initialize: function (map, options) {

		if ( GSI.Utils.Browser.isSmartMobile )
		{
			options.icon = new L.DivIcon({
				iconSize: new L.Point(24, 24),
				className: 'leaflet-div-icon leaflet-editing-icon gsi_draw_icon'
			});
		}
		L.Draw.Polygon.prototype.initialize.call(this, map, options);
	},
	_vertexChanged : function(latlng, added)
	{
		L.Draw.Polygon.prototype._vertexChanged.call(this,latlng,added);
		this.fire( 'measurechange', {
			distance : this._area2MeasurementString( L.GeometryUtil.calc_area(this._poly.getLatLngs() ) )
		} );
	},
	_area2MeasurementString : function( area )
	{
		var result = '0 m&sup2;';
		if ( area )
		{
			if ( area < 1000000 )
			{
				result = Math.ceil(area ) + ' m&sup2;';
			}
			else
			{
				result = ( area / 1000000 ).toFixed(3) + ' km&sup2;';
			}
		}

		return result;
	},
	_getMeasurementString: function () {
		var area = this._area;

		if (!area) {
			return null;
		}

		return this._area2MeasurementString(area);
	},
	_updateFinishHandler: function () {
		var markerCount = this._markers.length;

		// The first marker should have a click handler to close the polygon
		if (markerCount === 1) {
			this._markers[0].on('click', this._finishShape, this);
		}

		// Add and update the double click handler
		if (markerCount > 2) {
			this._markers[markerCount - 1].on('click', this._finishShape, this);
			// Only need to remove handler if has been added before
			if (markerCount > 3) {
				this._markers[markerCount - 2].off('click', this._finishShape, this);
			}
		}
	}
} );

GSI.Draw.FreehandPolyline = L.Draw.SimpleShape.extend({

	initialize: function (map, options) {
		this._endLabelText = L.drawLocal.draw.handlers.simpleshape.tooltip.end;
		this._initialLabelText = "マウスダウンで線の描画開始";

		L.Draw.SimpleShape.prototype.initialize.call(this, map, options);
	},
	_drawShape: function (latlng) {
		if (!this._shape) {
			this._shape = new L.Polyline([], this.options.shapeOptions);
			this._map.addLayer(this._shape);
		}
		else
		{
			this._shape.addLatLng(latlng);
		}
	},
	_fireCreatedEvent: function () {
		var plyline = new L.Polyline(this._shape.getLatLngs(), this.options.shapeOptions);
		L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, plyline);
	}
} );

/************************************************************************
 GSI.Links
 ************************************************************************/
GSI.Links ={};

GSI.Links.getURL = function( id, center, z, bounds){
	if ( id == "gsi3d_l" )
	{
		if(GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version <= 10 )){
			alert( 'お使いのWebブラウザは地理院地図3Dに対応していません。\nChrome、Firefox、IE11　をご使用ください。' );
			return null;
		}
        var args = "";
        args += "?z="   + z;
        args += "&lat=" + center.lat;
        args += "&lon=" + center.lng;
        args += "&pxsize=2048";
        args += "&"     + GSI.GLOBALS.pageStateManager.getLayersQueryString({visibleOnly:true})

        return "./index_3d.html" + args;
	}
	else if ( id == "gsi3d_s" )
	{
		if(GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version <= 10 )){
			alert( 'お使いのWebブラウザは地理院地図3Dに対応していません。\nChrome、Firefox、IE11　をご使用ください。' );
			return null;
		}
        var args = "";
        args += "?z="   + z;
        args += "&lat=" + center.lat;
        args += "&lon=" + center.lng;
        args += "&pxsize=1024";
        args += "&"     + GSI.GLOBALS.pageStateManager.getLayersQueryString({visibleOnly:true})

        return "./index_3d.html" + args;
	}
	else if ( id == "gsi3d_view" )
	{
		if(GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version <= 10 )){
			alert( 'お使いのWebブラウザは地理院地図3Dに対応していません。\nChrome、Firefox、IE11　をご使用ください。' );
			return null;
		}
		
		var size = GSI.GLOBALS.map.getSize();
		if ( size.x > 2048 ) size.x = 2048;
		if ( size.y > 2048 ) size.y = 2048;
		
		if( size.x % 2 == 1 ) size.x-=1;
		if( size.y % 2 == 1 ) size.y-=1;
		
        var args = "";
        args += "?z="   + z;
        args += "&lat=" + center.lat;
        args += "&lon=" + center.lng;
        args += "&w=" + size.x;
        args += "&h=" + size.y;
        args += "&"     + GSI.GLOBALS.pageStateManager.getLayersQueryString({visibleOnly:true})

        return "./index_3d.html" + args;
	}
	
	else if ( id == 'gsiglobe' )
	{
		if(GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version <= 10 )){
			alert( 'お使いのWebブラウザは地理院地図Globeに対応していません。\nChrome、Firefox、IE11　をご使用ください。' );
			return null;
		}
		
		var url = CONFIG.GLOBEURL;
		
		// GlobeのURL生成
		var queryString = GSI.GLOBALS.pageStateManager.getPositionQueryString();
		if(queryString != "") queryString += "/1/";
		
		var base = GSI.GLOBALS.pageStateManager.getBaseLayerQueryString();
		var hasBase = (base != '');
		if( base != '' )
			queryString += ( queryString != '' ? '&' : '#' ) + base;
		var ls = GSI.GLOBALS.pageStateManager.getLayersQueryString();
		var disp = GSI.GLOBALS.pageStateManager.getTileViewSetting();
		
		if ( ls != '' )
			queryString += ( queryString != '' ? '&' : '#' ) + ls;
		if ( disp != '' )
			queryString += ( queryString != '' ? '&' : '#' ) + disp;
		
		url += queryString;
		
		
		return url; //'http://maps.gsi.go.jp/globe/index_globe.html';
	}
	else if ( id == 'mapion' )
	{
		var zoomLevel = z;
		if(z <= 6) {zoomLevel = 6;}
		return 'http://www.mapion.co.jp/m2/' + center.lat + ',' + center.lng + ',' + zoomLevel;
	}
	else if ( id == 'itsumonavi' )
	{
		var zoomLevel = 18;
		var japanP = GSI.Utils.world2Japan(center);
		var y = Math.round(japanP.y * 3600 * 1000);
		var x = Math.round(japanP.x * 3600 * 1000);

		if(z <= 5)			{zoomLevel = 1;}
		else if(z <= 6)		{zoomLevel = 2;}
		else if(z <= 7)		{zoomLevel = 3;}
		else if(z <= 8)		{zoomLevel = 4;}
		else if(z <= 9)		{zoomLevel = 6;}
		else if(z <= 10)	{zoomLevel = 7;}
		else if(z <= 11)	{zoomLevel = 8;}
		else if(z <= 12)	{zoomLevel = 9;}
		else if(z <= 13)	{zoomLevel = 10;}
		else if(z <= 14)	{zoomLevel = 11;}
		else if(z <= 15)	{zoomLevel = 13;}
		else if(z <= 16)	{zoomLevel = 14;}
		else if(z <= 17)	{zoomLevel = 16;}
		else				{zoomLevel = 18;}

		return "http://www.its-mo.com/z-" + y +"-" + x + "-" + zoomLevel + ".htm";
	}
	else if ( id == 'ucodehref' )
	{
		return 'http://ucopendb.gsi.go.jp/ucode_app/logical_code/ucode_disp.php?lat=' + center.lat +'&lng=' + center.lng + '&zoom=' + z;
	}
	else
	{
		return id;
	}
};


/************************************************************************
 GSI.showTopMassage
 ************************************************************************/
GSI.showTopMassage = function(){
    var message = ( CONFIG.TOPMESSAGE && CONFIG.TOPMESSAGE.DETAILS ? CONFIG.TOPMESSAGE.DETAILS : '現在情報はありません' );
	GSI.Modal.Message.show( message, { className: "gsi_modal_topmessage", width:500, closeBtnVisible :true } );
};

/************************************************************************
 GSI.Utils
 ************************************************************************/
GSI.Utils.encodeHTML = function( src)
{
	src = src.replace( /&/g , '&amp;' );
	src = src.replace( /</g , '&lt;' );
	src = src.replace( />/g , '&gt;' );
	return src;
};

GSI.Utils.getInternetExplorerVersion = function (){
	var rv = -1;
	if (navigator.appName == 'Microsoft Internet Explorer'){
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		rv = parseFloat( RegExp.$1 );
	}
	else if (navigator.appName == 'Netscape'){
		var ua = navigator.userAgent;
		var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		rv = parseFloat( RegExp.$1 );
	}
	return rv;
};

GSI.Utils.Browser = {};
GSI.Utils.Browser.userAgent = window.navigator.userAgent.toLowerCase();

if (typeof document.documentElement.style.maxHeight != "undefined") {

	var ieVersion= GSI.Utils.getInternetExplorerVersion();

	if (ieVersion < 1 ){
	// IE 以外
	}else {
	// IE8 以降
		GSI.Utils.Browser.ie = true;
		GSI.Utils.Browser.version = ieVersion;
	}
} else {
	// IE 6.0 以下

	GSI.Utils.Browser.ie = true;
	GSI.Utils.Browser.version = 6;
}

GSI.Utils.Browser.isiPhone = GSI.Utils.Browser.userAgent.indexOf('iphone') >= 0;
GSI.Utils.Browser.isiPod = GSI.Utils.Browser.userAgent.indexOf('ipod') >= 0;
GSI.Utils.Browser.isiPad = GSI.Utils.Browser.userAgent.indexOf('ipad') >= 0;
GSI.Utils.Browser.isiOS = (GSI.Utils.Browser.isiPhone || GSI.Utils.Browser.isiPod || GSI.Utils.Browser.isiPad);
GSI.Utils.Browser.isAndroid = GSI.Utils.Browser.userAgent.indexOf('android') >= 0;
GSI.Utils.Browser.isSmartMobile = ( GSI.Utils.Browser.isiOS || GSI.Utils.Browser.isAndroid );
GSI.Utils.Browser.isChrome = GSI.Utils.Browser.userAgent.indexOf('chrome') != -1;
GSI.Utils.Browser.isMac = !!GSI.Utils.Browser.userAgent.match(/mac|ppc/);

GSI.Utils.hasFileAPI =( window.File && window.FileReader && window.FileList && window.Blob );

GSI.Utils.Browser.TouchDevice = function(){
    var f = false;
    if(GSI.Utils.Browser.isiPhone     ||
       GSI.Utils.Browser.isiPod       ||
       GSI.Utils.Browser.isiPad       ||
       GSI.Utils.Browser.isiOS        ||
       GSI.Utils.Browser.isAndroid    ||
       GSI.Utils.Browser.isSmartMobile
    ){
        f = true;
    }
    return f;
};

GSI.Utils.getCurrentID = function() {
	var id = 1;
	if ( !GSI.Utils._currentID )
	{
		GSI.Utils._currentID = 1;
	}
	id = GSI.Utils._currentID;
	GSI.Utils._currentID++;
	return id;
};

GSI.Utils.isLocalUrl = function(url) {

	if ( ( GSI.ClientMode .baseUrl && GSI.ClientMode .baseUrl != '' ) || url.match(/(http|https):\/\/.+/) )
	{
		return false;
	}
	else
	{
		return true;
	}
};

GSI.Utils.flashPlayerVersion = null;

GSI.Utils.canUseFlashPlayer = function()
{
	if ( GSI.Utils.flashPlayerVersion == null )
	{
		GSI.Utils.flashPlayerVersion = GSI.Utils.getFlashPlayerVersion();

	}
	return ( GSI.Utils.flashPlayerVersion > 0 );
};

GSI.Utils.getFlashPlayerVersion = function()
{
	var result = 0;
	if(navigator.plugins && navigator.mimeTypes['application/x-shockwave-flash']){
		var plugin = navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin;
		if(plugin){
			result = parseInt(plugin.description.match(/\d+\.\d+/));
		}
	} else {
		try{
			var flashOCX = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/([0-9]+)/);
			if(flashOCX){
				result = parseInt(flashOCX[0]);
			}
		}catch(e){}
	}
	if(result <= 6){
		result = 0;
	}
	return result;
};

GSI.Utils.getCurrentPath = function()
{
	var _location = ( GSI.ClientMode .location ? GSI.ClientMode .location : location );
	var port = _location.port;
	var pathName = _location.pathname;

	if ( pathName.length <= 0 || pathName.charAt( 0 ) != '/' )
		pathName = '/' + pathName;

	return _location.protocol + '//' +
		( _location.host ? _location.host: _location.hostname ) +
		pathName;

};

GSI.Utils.getTimeStampString = function() {
	var now = new Date();

	var year = now.getFullYear(); // 年
	var month = now.getMonth() + 1; // 月
	var day = now.getDate(); // 日
	var hour = now.getHours(); // 時
	var min = now.getMinutes(); // 分
	var sec = now.getSeconds(); // 秒
	var msec = now.getMilliseconds(); // ミリ秒
	var result =
		year + '' +
		( '00' + month ).slice(-2)  +
		( '00' + day ).slice(-2) +
		( '00' + hour ).slice(-2) +
		( '00' + min ).slice(-2) +
		( '00' + sec ).slice(-2) +
		msec ;
	return result;
};

GSI.Utils.getScreenSize = function() {
	return {
		w : window.innerWidth ? window.innerWidth: $(window).width(),
		h : window.innerHeight ? window.innerHeight: $(window).height()
	};
};

GSI.Utils.world2Japan = function(latLng){
	var worldLonLat = new Proj4js.Proj('EPSG:4326');
	var japanLonLat = new Proj4js.Proj('EPSG:4301');
	var worldP = new Proj4js.Point(latLng.lng,latLng.lat);
	var japanP = Proj4js.transform(worldLonLat,japanLonLat,worldP);
	return {x:japanP.x, y:japanP.y}
};


GSI.Utils.latLngToDMS = function(latLng) {
	
	var latLng = { lat : latLng.lat, lng : latLng.lng};
	var latMinus = ( latLng.lat < 0 ? -1 : 1 );
	var lngMinus = ( latLng.lng < 0 ? -1 : 1 );
	
	latLng.lat = Math.abs( latLng.lat);
	latLng.lng = Math.abs( latLng.lng);
	
	var latD = Math.floor(latLng.lat);
	var latM = Math.floor( ( latLng.lat - latD ) * 60 );
	var latS = (latLng.lat-latD-(latM/60))*3600;

	if(latS==60){latS=0; latM=latM+1;};
	if(latM==60){latM=0; latD=latD+1;};

	var lngD = Math.floor(latLng.lng);
	var lngM = Math.floor( ( latLng.lng - lngD ) * 60 );
	var lngS = (latLng.lng-lngD-(lngM/60))*3600;

	if(lngS==60){lngS=0; lngM=lngM+1;};
	if(lngM==60){lngM=0; lngD=lngD+1;};

	return {
		lat : {
			d : latD, m:latM, s: latS
		},
		lng : {
			d : lngD, m:lngM, s: lngS
		}
	};
};

GSI.Utils.dotLineTo = function (texture, p1x, p1y, p2x, p2y, dashArray)
{
	if ( texture.setLineDash !== undefined )
	{
		texture.setLineDash(dashArray);
		texture.lineTo( p2x, p2y );
	}
	else if ( texture.mozDash !== undefined )
	{
		texture.mozDash = dashArray;
		texture.lineTo( p2x, p2y );
	}
	else
	{
		var d = Math.sqrt(Math.pow(p2x - p1x, 2) + Math.pow(p2y - p1y, 2));
		var rad = Math.atan2(p2y - p1y, p2x - p1x);
		var space = ( dashArray && dashArray.length>= 2 && dashArray[0]>0 ? dashArray[0] : 5 );
		var dotted = Math.round(d / space / 2);

		for (var i = 0; i < dotted; i++) {
			var p3x = Math.cos(rad) * space * (i * 2) + p1x;
			var p3y = Math.sin(rad) * space * (i * 2) + p1y;
			var p4x = Math.cos(rad) * space * (i * 2 + 1) + p1x;
			var p4y = Math.sin(rad) * space * (i * 2 + 1) + p1y;

			texture.moveTo(p3x, p3y);
			texture.lineTo(p4x, p4y);
			
		}
	}
}


// 磁北線を表示できる範囲内かどうかを返す
GSI.Utils.isVaridVariation = function(latLng)
{
	//経度：122度～154度
	//緯度：20度～46度
	return !( latLng.lat < 20 || latLng.lat > 46 || latLng.lng <122 || latLng.lng >154 );
}

// 指定緯度経度の偏角を算出し、角度を返す
GSI.Utils.getVariation = function(latLng)
{
	var px = latLng.lng;
	var py = latLng.lat;

	//経緯度座標(10進数)を小数点以下6桁に丸める
	px = px * 1000000;
	px = parseInt(px);
	px = px / 1000000;
	py = py * 1000000;
	py = parseInt(py);
	py = py / 1000000;

	//西偏角計算
	var KEE = px - 138;
	var KNN = py - 37;
	var KKK = (7+40.585/60) + (19.003/60) * KNN - (6.265 / 60) * KEE + (0.009 / 60) * KNN * KNN + (0.024 / 60) * KNN * KEE - (0.591 / 60) * KEE * KEE;

	return KKK;
};

GSI.Utils.ConverUnit = function(map, shape, radius, unit_src, unit_to)
{
    if(unit_src == "px" && unit_to == "m" ){
        var r_radius = radius;
        var r_latlng = shape.getLatLng();
        var p        = map.latLngToContainerPoint(r_latlng);
        var p_to_x   = p.x;
        var p_to_y   = p.y;
        p_to_x += r_radius;

        var r_latlng_to = map.containerPointToLatLng( L.point( p_to_x, p_to_y ) );
        var r           = r_latlng.distanceTo(r_latlng_to);

        radius = r;
    }

    if(unit_src == "m"  && unit_to == "px"){ 
        var r_latlng = shape.getBounds();
        var n_p = map.latLngToContainerPoint(r_latlng._northEast);
        var s_p = map.latLngToContainerPoint(r_latlng._southWest);

        var r   = Math.floor((n_p.x - s_p.x) * 0.5);

        radius = r;
    }
    return radius;
};

GSI.Utils.Cookie = L.Class.extend( {
	
	_config : {
		defaults : {}
	},
	initialize : function () {},
	_encode : function(s)
	{
		return this._config.raw ? s : encodeURIComponent(s);
	},
	_decode : function (s) 
	{
		return this._config.raw ? s : decodeURIComponent(s);
	},
	_stringifyCookieValue : function(value) 
	{
		return this._encode(this._config.json ? JSON.stringify(value) : String(value));
	},
	_parseCookieValue : function (s)
	{
		if (s.indexOf('"') === 0) {
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			var pluses = /\+/g;
			s = decodeURIComponent(s.replace(pluses, ' '));
			return this._config.json ? JSON.parse(s) : s;
		} catch(e) {}
	},
	_read : function(s, converter) 
	{
		//var value = this._config.raw ? s : this._parseCookieValue(s);
		return this._config.raw ? s : this._parseCookieValue(s);
	},
	get : function( key )
	{
		var result = key ? undefined : {};
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) 
		{
			var parts = cookies[i].split('=');
			var name = this._decode(parts.shift());
			var cookie = parts.join('=');
			if (key && key === name) {
				result = this._read(cookie);
				break;
			}

			if (!key && (cookie = this._read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	},
	set : function(key, value, options)
	{
		options = $.extend({}, this._config.defaults, options);

		if (typeof options.expires === 'number') {
			var hours = options.expires, t = options.expires = new Date();
			t.setTime(+t + hours * 1000 * 60 * 60 );// 
		}

		return (document.cookie = [
			this._encode(key), '=', this._stringifyCookieValue(value),
			options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
			options.path    ? '; path=' + options.path : '',
			options.domain  ? '; domain=' + options.domain : '',
			options.secure  ? '; secure' : ''
		].join(''));
	

	},
	remove : function (key, options)
	{
		if (this.get(key) === undefined) 
		{
			return false;
		}

		this.set(key, '', $.extend({}, options, { expires: -1 }));
		return !this.get(key);
	}
} );

GSI.Utils.sendSelectedLayer = function(id){
    $.ajax({
        type : "GET",
        data : id,
        url : "./layers_txt/anchor.txt",
        datatype : "text",
        cache : false,
    });
};
GSI.Utils.get2ndMesh = function( lat, lon ){

	//1st mesh code
	var lat1 = Math.floor( ( lat * 60 ) / 40 );
	var lat2 = ( lat * 60 ) % 40;

	var lon1 = Math.floor( lon - 100 );
	var lon2 = lon - 100 - lon1;

	//2nd mesh code
	var m2lat = Math.floor( lat2 / 5 );
	var m2lon = Math.floor( ( lon2 * 60 )  / 7.5);

	return "" + lat1 + lon1 + m2lat + m2lon; 
};
GSI.Utils.rpad = function(src, letter, num)
{
	var dst = src;
	var len = num - src.length;
	if (dst) dst="";
	for(var i=0; i < len; i++)
	{
		dst+=letter;
	}
	return dst;
};
GSI.Utils.lpad = function(src, letter, num)
{
	var dst = "";
	var len = num - src.length;
	for(var i=0; i<len; i++)
	{
		dst+=letter;
	}
	return dst + src;
};


L.LatLng.prototype._originalDistanceTo = L.LatLng.prototype.distanceTo;
L.LatLng.prototype.distanceTo = function (other) {
	other = L.latLng(other);
	var ret = null;
	
	if ( CONFIG.USEGSIDISTANCE )
		return GSI.Utils.DistanceCalculator.calc(this, other);
	else
		return L.LatLng.prototype._originalDistanceTo.call( this,other );
	
};
GSI.Utils.setMixBlendMode = function( item, flg )
{
	if ( item._visibleInfo.layer._container == null )
	{
		return;
	}
	if ( GSI.Utils.Browser.ie )
	{
		return;
	}
	if ( (flg === undefined) || (flg == null) )
	{
		//flg = false;
		return;
	}
	if ( ( flg != true ) && ( flg != "1" ) )
	{
		flg = false;
	}
	if ( flg == "1" )
	{
		flg = true;
	}
	var el = item._visibleInfo.layer._container.getAttribute('style');
	if ( el )
	{
	    el = el.replace("mix-blend-mode: multiply; ", "");
	}
	else
	{
	    el = "";
	}
	if ( flg == true )
	{
		el = "mix-blend-mode: multiply; " + el;
	}
    item._visibleInfo.layer._container.setAttribute('style', el);
};

/************************************************************************
 GSI.UTM
 ************************************************************************/
GSI.UTM = {};

GSI.UTM.Utils = {

	PROJ_WORLD : new Proj4js.Proj('EPSG:4326'),
	lng2Zone : function( lng )
	{
		return Math.floor(lng/6) + 31;
	},
	zone2Lng : function( zone )
	{
		return ( zone - 31 ) * 6;
	},
	getUTMDefName : function( zone)
	{
		var defName = '';

		if ( !zone ) return defName;
		switch( zone + '' )
		{
			case '51':
				defName = 'EPSG:3097';
				break;
			case '52':
				defName = 'EPSG:3098';
				break;
			case '53':
				defName = 'EPSG:3099';
				break;
			case '54':
				defName = 'EPSG:3100';
				break;
			case '55':
				defName = 'EPSG:3101';
				break;
			case '56':
				defName = 'SR-ORG:1235';
				break;
		}
		return defName;
	},
	getUTMMark : function ( lat )
	{
		var mark ='';
		if(lat >= 16 && lat < 24) {
			mark = "Q";
		} else if(lat >= 24 && lat < 32) {
			mark = "R";
		} else if(lat >= 32 && lat < 40) {
			mark = "S";
		} else if(lat >= 40 && lat < 48) {
			mark = "T";
		} else if(lat >= 48 && lat < 56) {
			mark = "U";
		}
		return mark;
	},
	_parseUSNGText : function (s)
	{
		var result = {};
		var j = 0;
		var k;
		var usngStr = [];
		var usngStr_temp = []

		usngStr_temp = s.toUpperCase()

		var regexp = /%20/g
		usngStr = usngStr_temp.replace(regexp,"")
		regexp = / /g
		usngStr = usngStr_temp.replace(regexp,"")

		if (usngStr.length < 7) {
		  return null;
		}

		result.zone = usngStr.charAt(j++)*10 + usngStr.charAt(j++)*1;
		result.mylet = usngStr.charAt(j++)
		result.sq1 = usngStr.charAt(j++)
		result.sq2 = usngStr.charAt(j++)

		result.precision = (usngStr.length-j) / 2;
		result.east='';
		result.north='';
		for (var k=0; k<result.precision; k++)
		{
		   result.east += usngStr.charAt(j++)
		}

		if (usngStr[j] == " ") { j++ }
		for (var k=0; k<result.precision; k++)
		{
		   result.north += usngStr.charAt(j++)
		}
		
		return result;
	},
	_USNGtoUTM : function (zone,mylet,sq1,sq2,east,north)
	{ 
		var result = {};
		
		//Starts (southern edge) of N-S zones in millons of meters
		var zoneBase = [1.1,2.0,2.9,3.8,4.7,5.6,6.5,7.3,8.2,9.1,   0, 0.8, 1.7, 2.6, 3.5, 4.4, 5.3, 6.2, 7.0, 7.9];

		var segBase = [0,2,2,2,4,4,6,6,8,8,   0,0,0,2,2,4,4,6,6,6];  //Starts of 2 million meter segments, indexed by zone 
		
		// convert easting to UTM
		var eSqrs="ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(sq1);          
		var appxEast=1+eSqrs%8; 

		// convert northing to UTM
		var letNorth = "CDEFGHJKLMNPQRSTUVWX".indexOf(mylet);
		if (zone%2)  //odd number zone
		var nSqrs="ABCDEFGHJKLMNPQRSTUV".indexOf(sq2) 
		else        // even number zone
		var nSqrs="FGHJKLMNPQRSTUVABCDE".indexOf(sq2); 

		var zoneStart = zoneBase[letNorth];
		var appxNorth = Number(segBase[letNorth])+nSqrs/10;
		if ( appxNorth < zoneStart)
		   appxNorth += 2; 	  

		result.N=appxNorth*1000000+Number(north)*Math.pow(10,5-north.length);
		result.E=appxEast*100000+Number(east)*Math.pow(10,5-east.length)
		result.zone=zone;
		result.letter=mylet;

		return result;
	},
	_UTMtoLL : function (UTMNorthing, UTMEasting, UTMZoneNumber, ret)
	{
		var EASTING_OFFSET  = 500000.0;   // (meters)
		var NORTHING_OFFSET = 10000000.0; // (meters)
		var k0 = 0.9996;
		var EQUATORIAL_RADIUS    = 6378137.0; // GRS80 ellipsoid (meters)
		var ECC_SQUARED = 0.006694380023;
		var ECC_PRIME_SQUARED = ECC_SQUARED / (1 - ECC_SQUARED);
		var E1 = (1 - Math.sqrt(1 - ECC_SQUARED)) / (1 + Math.sqrt(1 - ECC_SQUARED));
		var RAD_2_DEG   = 180.0 / Math.PI;
		
		// remove 500,000 meter offset for longitude
		var xUTM = parseFloat(UTMEasting) - EASTING_OFFSET; 
		var yUTM = parseFloat(UTMNorthing);
		var zoneNumber = parseInt(UTMZoneNumber);

		// origin longitude for the zone (+3 puts origin in zone center) 
		var lonOrigin = (zoneNumber - 1) * 6 - 180 + 3; 

		// M is the "true distance along the central meridian from the Equator to phi
		// (latitude)
		var M = yUTM / k0;
		var mu = M / ( EQUATORIAL_RADIUS * (1 - ECC_SQUARED / 4 - 3 * ECC_SQUARED * 
		              ECC_SQUARED / 64 - 5 * ECC_SQUARED * ECC_SQUARED * ECC_SQUARED / 256 ));

		// phi1 is the "footprint latitude" or the latitude at the central meridian which
		// has the same y coordinate as that of the point (phi (lat), lambda (lon) ).
		var phi1Rad = mu + (3 * E1 / 2 - 27 * E1 * E1 * E1 / 32 ) * Math.sin( 2 * mu) 
		             + ( 21 * E1 * E1 / 16 - 55 * E1 * E1 * E1 * E1 / 32) * Math.sin( 4 * mu)
		             + (151 * E1 * E1 * E1 / 96) * Math.sin(6 * mu);
		var phi1 = phi1Rad * RAD_2_DEG;

		// Terms used in the conversion equations
		var N1 = EQUATORIAL_RADIUS / Math.sqrt( 1 - ECC_SQUARED * Math.sin(phi1Rad) * 
		          Math.sin(phi1Rad));
		var T1 = Math.tan(phi1Rad) * Math.tan(phi1Rad);
		var C1 = ECC_PRIME_SQUARED * Math.cos(phi1Rad) * Math.cos(phi1Rad);
		var R1 = EQUATORIAL_RADIUS * (1 - ECC_SQUARED) / Math.pow(1 - ECC_SQUARED * 
		            Math.sin(phi1Rad) * Math.sin(phi1Rad), 1.5);
		var D = xUTM / (N1 * k0);

		// Calculate latitude, in decimal degrees
		var lat = phi1Rad - ( N1 * Math.tan(phi1Rad) / R1) * (D * D / 2 - (5 + 3 * T1 + 10
		    * C1 - 4 * C1 * C1 - 9 * ECC_PRIME_SQUARED) * D * D * D * D / 24 + (61 + 90 * 
		      T1 + 298 * C1 + 45 * T1 * T1 - 252 * ECC_PRIME_SQUARED - 3 * C1 * C1) * D * D *
		      D * D * D * D / 720);
		lat = lat * RAD_2_DEG;

		// Calculate longitude, in decimal degrees
		var lng = (D - (1 + 2 * T1 + C1) * D * D * D / 6 + (5 - 2 * C1 + 28 * T1 - 3 * 
		        C1 * C1 + 8 * ECC_PRIME_SQUARED + 24 * T1 * T1) * D * D * D * D * D / 120) /
		        Math.cos(phi1Rad);

		lng = lonOrigin + lng * RAD_2_DEG;
		return L.latLng(lat, lng);
	},
	point2LatLng : function( s )
	{
		var latLng = null;
		try
		{
			var usngp = this._parseUSNGText(s,usngp);
			if ( !usngp ) return null;
			var coords = this._USNGtoUTM(usngp.zone,usngp.mylet,usngp.sq1,usngp.sq2,usngp.east,usngp.north) 
			
			if (usngp.mylet < 'N') 
			{
				coords.N -= NORTHING_OFFSET
			}

			latLng = this._UTMtoLL(coords.N, coords.E, usngp.zone)
		}
		catch( e )
		{
			latLng = null;
		}
		return latLng;
	},
	latlng2PointName : function(lat, lng)
	{
		var zone = GSI.UTM.Utils.lng2Zone( lng );
		var defName = GSI.UTM.Utils.getUTMDefName( zone );

		if ( defName == '' ) return '';

		var projUTM = new Proj4js.Proj(defName);
		var latLngPoint = new Proj4js.Point( lng,lat );
		var utmPoint = Proj4js.transform(GSI.UTM.Utils.PROJ_WORLD,projUTM,latLngPoint);

		return GSI.UTM.Utils.getUTMPointName(
			zone,
			GSI.UTM.Utils.getUTMMark( lat ),
			utmPoint.x,
			utmPoint.y,
			4
		);
	},
	getUTMPointName : function( zone, mark, x, y, num, hideNumber)
	{

		var x10mNumber = '';
		var y10mNumber = '';
		if ( !hideNumber && x && y )
		{
			var zero = '';
			for ( var i=0; i<num; i++ )
			{
				zero += '0';
			}

			x10mNumber = zero + Math.floor( x /10 );
			x10mNumber = x10mNumber.substr(x10mNumber.length - num, num);
			y10mNumber = zero + Math.floor( y /10 );
			y10mNumber = y10mNumber.substr(y10mNumber.length - num, num);
		}
		
		var letters = GSI.UTM.Utils.findGridLetters(zone, Math.floor( y /10 ) * 10, Math.floor( x /10 ) * 10);
		return zone + mark + letters + x10mNumber + y10mNumber;
	},
	findSet : function(zoneNum)
	{
		zoneNum = parseInt(zoneNum);
		zoneNum = zoneNum % 6;
		switch (zoneNum) {

		case 0:
			return 6;
			break;

		case 1:
			return 1;
			break;

		case 2:
			return 2;
			break;

		case 3:
			return 3;
			break;

		case 4:
			return 4;
			break;

		case 5:
			return 5;
			break;

		default:
			return -1;
			break;
		}
	},
	BLOCK_SIZE : 100000,
	GRIDSQUARE_SET_ROW_SIZE : 20,
	GRIDSQUARE_SET_COL_SIZE : 8,

	findGridLetters : function (zoneNum, northing, easting)
	{
		zoneNum  = parseInt(zoneNum);
		northing = parseFloat(northing);
		easting  = parseFloat(easting);
		row = 1;

		// northing coordinate to single-meter precision
		north_1m = Math.round(northing);

		// Get the row position for the square identifier that contains the point
		while (north_1m >= GSI.UTM.Utils.BLOCK_SIZE) {
			north_1m = north_1m - GSI.UTM.Utils.BLOCK_SIZE;
			row++;
		}

		// cycle repeats (wraps) after 20 rows
		row = row % GSI.UTM.Utils.GRIDSQUARE_SET_ROW_SIZE;
		col = 0;

		// easting coordinate to single-meter precision
		east_1m = Math.round(easting);

		// Get the column position for the square identifier that contains the point
		while (east_1m >= GSI.UTM.Utils.BLOCK_SIZE){
			east_1m = east_1m - GSI.UTM.Utils.BLOCK_SIZE;
			col++;
		}

		// cycle repeats (wraps) after 8 columns
		col = col % GSI.UTM.Utils.GRIDSQUARE_SET_COL_SIZE;

		return GSI.UTM.Utils.lettersHelper(GSI.UTM.Utils.findSet(zoneNum), row, col);
	},
	lettersHelper : function (set, row, col)
	{
		// handle case of last row
		if (row == 0) {
			row = GSI.UTM.Utils.GRIDSQUARE_SET_ROW_SIZE - 1;
		}
		else {
			row--;
		}

		if (col == 0) {
			col = GSI.UTM.Utils.GRIDSQUARE_SET_COL_SIZE - 1;
		}
		else {
			col--;
		}

		switch(set) {

		case 1:
			l1="ABCDEFGH";              // column ids
			l2="ABCDEFGHJKLMNPQRSTUV";  // row ids
			return l1.charAt(col) + l2.charAt(row);
			break;

		case 2:
			l1="JKLMNPQR";
			l2="FGHJKLMNPQRSTUVABCDE";
			return l1.charAt(col) + l2.charAt(row);
			break;

		case 3:
			l1="STUVWXYZ";
			l2="ABCDEFGHJKLMNPQRSTUV";
			return l1.charAt(col) + l2.charAt(row);
			break;

		case 4:
			l1="ABCDEFGH";
			l2="FGHJKLMNPQRSTUVABCDE";
			return l1.charAt(col) + l2.charAt(row);
			break;

		case 5:
			l1="JKLMNPQR";
			l2="ABCDEFGHJKLMNPQRSTUV";
			return l1.charAt(col) + l2.charAt(row);
			break;

		case 6:
			l1="STUVWXYZ";
			l2="FGHJKLMNPQRSTUVABCDE";
			return l1.charAt(col) + l2.charAt(row);
			break;
		}
	}
};


GSI.UTM.Grid = L.Class.extend( {

	options : {
		lineStyle : {
			color : "#FF0000",
			weight : 2,
			color2 : "#FF0000",
			opacity: 1,
			fillOpacity:1,
			dashArray : [3,3],
			visible : false,
			clickable : false
		},
		zoneLineStyle : {
			color : "#FF0000",
			weight : 2,
			color2 : "#FF0000",
			opacity: 1,
			fillOpacity:1,
			dashArray : null,
			visible : false,
			clickable : false
		},
		labelClassName : 'utmgrid_label',
		visible : false
	},
	_lines : [],
	_labels : [],
	_zoneLines : [],
	_zoneLabels : [],
	initialize : function (map, options )
	{
		this._lines = [];
		this._labels = [];
		this._zoneLines = [];
		this._zoneLabels = [];
		
		this._map = map;
		this._onMoveEnd = L.bind( this.onMoveEnd, this );

		options = L.setOptions(this, options);
		options.lineStyle.clickable = false;
		if ( this.options.visible )
		{
			this.options.visible = false;
			this.setVisible( true );//this.refresh();
		}
	},
	onMoveEnd : function()
	{
		this.refresh();
	},
	refresh : function()
	{
		if ( !this.options.visible )
		{
			this.clear();
			return;
		}
		
		if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version <= 8)
		{
			this.clear();
		}
		
		var bounds = this._map.getBounds();
		var zoom = this._map.getZoom();

		for( var i=0;i< this.options.condition.length; i++ )
		{
			var c = this.options.condition[i];
			if ( zoom <= c.zoom )
			{
				if ( c.grid == 'a')
				{
            		this._clearLayerArr(this._lines, 0);
            		this._clearLayerArr(this._labels, 0);
					this.drawZoneGrid( bounds );
				}
				else
				{
					this.drawGrid( bounds, zoom, c.grid);
					this.drawZoneGrid( bounds, true, this.options.zoneLineStyle );
				}
				try
				{
					if ( this._layer  ) this._layer.bringToBack();
				}
				catch( ex ){}
				break;
			}
		}
	},
	
	
	drawPath : function(texture)
	{
		if ( !this._lines ) return;
		texture.beginPath();
		for( var i=0; i< this._lines.length; i++ )
		{
			var from = null;
			
			for( var j=0; j<this._lines[i]._latlngs.length; j ++ )
			{
				var point = this._map.latLngToContainerPoint(this._lines[i]._latlngs[j]);
				
				if( j == 0 ) texture.moveTo( point.x, point.y );
				else {
					GSI.Utils.dotLineTo( texture, from.x, from.y, point.x, point.y, [3,3] );
				}
				
				from = point;
			}
			//this._drawPath( texture, this._lines[i] );
		}
		
		texture.save();
		
		texture.lineWidth = this.options.lineStyle.weight;
		texture.strokeStyle = this.options.lineStyle.color;
			
		
		var opacity = 1;
		texture.globalAlpha = opacity;
		texture.stroke();

		texture.restore();
		
	},
	
	_lineToDot : function (texture, p1x, p1y, p2x, p2y)
	{
		var d = Math.sqrt(Math.pow(p2x - p1x, 2) + Math.pow(p2y - p1y, 2));
		var rad = Math.atan2(p2y - p1y, p2x - p1x);
		var space = 3;
		var dotted = Math.round(d / space / 2);

		for (var i = 0; i < dotted; i++) {
			var p3x = Math.cos(rad) * space * (i * 2) + p1x;
			var p3y = Math.sin(rad) * space * (i * 2) + p1y;
			var p4x = Math.cos(rad) * space * (i * 2 + 1) + p1x;
			var p4y = Math.sin(rad) * space * (i * 2 + 1) + p1y;

			texture.moveTo(p3x, p3y);
			texture.lineTo(p4x, p4y);
			
		}
	},
	
	_updateStyle: function (texture, layer) {
		if ( !layer._parts ) return;
		
		var options = layer.options;
		if (options.stroke) {
			texture.lineWidth = options.weight;
			texture.strokeStyle = options.color;
		}
		if (options.fill) {
			texture.fillStyle = options.fillColor || options.color;
		}
	},
	
	_drawPath: function (texture, layer) {
		if ( !layer._parts ) return;
		
		var i, j, len, len2, point, drawMethod;
		var vp = this._map._pathViewport;
		
		
		var origin = this._map.getPixelOrigin();
		var pixelBounds = this._map.getPixelBounds();
		texture.beginPath();
		
		var parts = layer._parts;
		
		for (i = 0, len = parts.length; i < len; i++) {
			
			for (j = 0, len2 = parts[i].length; j < len2; j++) {
				point = parts[i][j];
				drawMethod = (j === 0 ? 'move' : 'line') + 'To';
				
				texture[drawMethod](point.x + ( origin.x - pixelBounds.min.x ), point.y + ( origin.y - pixelBounds.min.y ));
			}
			// TODO refactor ugly hack
			if (layer instanceof L.Polygon || layer instanceof L.Circle) {
				texture.closePath();
			}
		}
		
		texture.save();
		this._updateStyle(texture, layer);
		
		var opacity = 1;
		//console.log( this.options.opacity );
		if (layer.options.fill) {
			
			texture.globalAlpha = ( layer.options.fillOpacity ?layer.options.fillOpacity : 1 ) * opacity;
			texture.fill();          
		}
		if (layer.options.stroke) {
			texture.globalAlpha = opacity;
			texture.stroke();
		}

		texture.restore();
	},
	
	drawGrid : function( bounds, zoom, meter )
	{
		// グリッド
		var startZone = GSI.UTM.Utils.lng2Zone( bounds.getWest() );
		var projUTM = new Proj4js.Proj(GSI.UTM.Utils.getUTMDefName( startZone ));
		var startLatLngPoint = new Proj4js.Point(bounds.getWest(),bounds.getSouth());
		var startUTMPoint = Proj4js.transform(GSI.UTM.Utils.PROJ_WORLD,projUTM,startLatLngPoint);

		startUTMPoint.x = Math.floor( startUTMPoint.x / meter ) * meter;
		startUTMPoint.x -= meter;

		startUTMPoint.y = Math.floor( startUTMPoint.y / meter ) * meter;
		startUTMPoint.y -= meter;

		// x軸ループ
		var utmX = startUTMPoint.x;
		var zone = startZone;
		var lineStyle = $.extend( true, {} , this.options.lineStyle );
		var xExit = false;

		var gridPoints = [];
		var gridPoints2 = [];

		var lineIndex = 0;
		var labelIndex = 0;

		var layer = ( this._layer ? this._layer : L.featureGroup() );
		layer._noMeasure= true;

		while( true )
		{
			var currentZoneLng = GSI.UTM.Utils.zone2Lng( zone );
			var nextZoneLng = GSI.UTM.Utils.zone2Lng( zone + 1 );

			var isNextZone = true;
			var xExit2 = true;

			// y軸ループ
			var latlngs = [];
			var labelLatlngs = [];
			var utmYs = [];
			var utmY = startUTMPoint.y;
			var yIndex = 0;
			var yIndex2 = 0;

			var x10mNumber = '';
			if ( meter <100 * 1000 )
			{
				x10mNumber = utmX;
			}
			
			var lastMark = '';
			
			while( true )
			{
				var utmPoint =new Proj4js.Point(utmX,utmY);
				var latLngPoint = Proj4js.transform(projUTM, GSI.UTM.Utils.PROJ_WORLD,utmPoint);
				var mark = GSI.UTM.Utils.getUTMMark( latLngPoint.y );
				
				if ( lastMark != '' && lastMark != mark )
				{
					
					var latLng = L.latLng( 24 + Math.floor( (latLngPoint.y - 24 ) / 8 ) * 8, latLngPoint.x);
					
					var changeUTMPoint = Proj4js.transform(GSI.UTM.Utils.PROJ_WORLD,projUTM,new Proj4js.Point(latLng.lng,latLng.lat ) );
					
				    utmYs.push( changeUTMPoint.y );
				    if ( CONFIG.UTMGRIDBOUNDARYLABEL_HIDEMETER ) latLng._hideMeter = true
					labelLatlngs.push( latLng );
					
					if ( !gridPoints2[ yIndex2 ] ) gridPoints2[ yIndex2 ] = [];
					gridPoints2[ yIndex2 ].push( latLng );
					
					yIndex2++;
				}
				
				lastMark = mark;

				var latLng = L.latLng(latLngPoint.y, latLngPoint.x);

				utmYs.push( utmY );
				latlngs.push( latLng );
				labelLatlngs.push( latLng );
				
				if ( !gridPoints[ yIndex ] ) gridPoints[ yIndex ] = [];
				gridPoints[ yIndex ].push( latLng );

				if ( latLngPoint.x < nextZoneLng ) isNextZone = false;
				if ( latLngPoint.x <= bounds.getEast() ) xExit2 = false;

				yIndex++;
				utmY += meter;
				if ( latLngPoint.y > bounds.getNorth() ) break;
			}

			if ( latlngs.length > 0  )
			{
				if ( this._lines.length <= lineIndex )
				{
					var polyline = L.polyline(latlngs, lineStyle);
					polyline._noMeasure = true;
					layer.addLayer( polyline );
					this._lines.push( polyline );
				}
				else
				{
					var polyline = this._lines[lineIndex];
					polyline.setLatLngs( latlngs );
				}
				lineIndex++;
			}

			if ( isNextZone )
			{
				// 横線
				for ( var i=0; i<gridPoints.length; i++ )
				{
					if( !gridPoints[i] ) continue;
					if ( this._lines.length <= lineIndex )
					{
						var polyline = L.polyline(gridPoints[i], lineStyle);
						polyline._noMeasure = true;
						layer.addLayer( polyline );
						this._lines.push( polyline );
					}
					else
					{
						var polyline = this._lines[lineIndex];
						polyline.setLatLngs( gridPoints[i] );
					}
					lineIndex++;
				}
				
				for ( var i=0; i<gridPoints2.length; i++ )
				{
					if( !gridPoints2[i] ) continue;
					if ( this._lines.length <= lineIndex )
					{
						var polyline = L.polyline(gridPoints2[i], lineStyle);
						polyline._noMeasure = true;
						layer.addLayer( polyline );
						this._lines.push( polyline );
					}
					else
					{
						var polyline = this._lines[lineIndex];
						polyline.setLatLngs( gridPoints2[i] );
					}
					lineIndex++;
				}
				
				gridPoints = [];
				gridPoints2 = [];
				zone++;
				projUTM = new Proj4js.Proj(GSI.UTM.Utils.getUTMDefName( zone ));

				startLatLngPoint = new Proj4js.Point(GSI.UTM.Utils.zone2Lng( zone ),bounds.getSouth());
				startUTMPoint = Proj4js.transform(GSI.UTM.Utils.PROJ_WORLD,projUTM,startLatLngPoint);

				startUTMPoint.x = Math.floor( startUTMPoint.x / meter ) * meter;
				startUTMPoint.x -= meter;

				startUTMPoint.y = Math.floor( startUTMPoint.y / meter ) * meter;
				startUTMPoint.y -= meter;
				utmX = startUTMPoint.x;
			}
			else
			{
				// ラベル表示
				for ( var i=0; i<labelLatlngs.length; i++ )
				{
					var latlng = labelLatlngs[i];
					var utmY = utmYs[i];
					var mark = GSI.UTM.Utils.getUTMMark( latlng.lat ); // 2015-07-19
					if ( this._labels.length <= labelIndex )
					{
						var label = new L.Label({
								zoomAnimation : true,
								noHide : true,
								offset: [8, -24],
								className: this.options.labelClassName,
								clickable : false
							});
						label.setContent(  GSI.UTM.Utils.getUTMPointName( zone, mark, utmX, utmY, 4, ( latlng._hideMeter || meter >=100000 ) ) );
						label.setLatLng( latlng);
						layer.addLayer( label );
						this._labels.push( label );
					}
					else
					{
						var label = this._labels[labelIndex];
						label.setContent(  GSI.UTM.Utils.getUTMPointName( zone, mark, utmX, utmY, 4, ( latlng._hideMeter || meter >=100000 ) ) );
						label.setLatLng( latlng );
					}
					labelIndex++;
				}
			}
			if ( xExit )
			{
				// 横線
				for ( var i=0; i<gridPoints.length; i++ )
				{
					if( !gridPoints[i] ) continue;
					
					if ( this._lines.length <= lineIndex )
					{
						var polyline = L.polyline(gridPoints[i], lineStyle);
						polyline._noMeasure = true;
						layer.addLayer( polyline );
						this._lines.push( polyline );
						
					}
					else
					{
						var polyline = this._lines[lineIndex];
						polyline.setLatLngs( gridPoints[i] );
					}
					lineIndex++;
				}
				
				for ( var i=0; i<gridPoints2.length; i++ )
				{
					if( !gridPoints2[i] ) continue;
					if ( this._lines.length <= lineIndex )
					{
						var polyline = L.polyline(gridPoints2[i], lineStyle);
						polyline._noMeasure = true;
						layer.addLayer( polyline );
						this._lines.push( polyline );
					}
					else
					{
						var polyline = this._lines[lineIndex];
						polyline.setLatLngs( gridPoints2[i] );
					}
					lineIndex++;
				}
				
				gridPoints = [];
				gridPoints2 = [];
				break;
			}

			utmX += meter;
			xExit = xExit2;
		}

		if (!this._layer )
		{
			this._layer  = layer;
			this._map.addLayer( this._layer );
		}

		this._clearLayerArr(this._lines, lineIndex);
		this._clearLayerArr(this._labels, labelIndex);

	},
	drawZoneGrid : function(bounds, nolabel, style)
	{
		// 小縮尺用グリッド
		var startX = Math.floor( bounds.getWest() / 6 ) * 6;
		var startY = Math.floor( bounds.getSouth() / 8 ) * 8;

		var endX = ( Math.floor( bounds.getEast() / 6 ) + 1 ) * 6;
		var endY = ( Math.floor( bounds.getNorth() / 8 ) + 1 ) * 8;

		var lineStyle = $.extend( true, {} ,( style ? style : this.options.lineStyle ) );
		
		var lineIndex = 0;
		var labelIndex = 0;

		var layer = ( this._layer ? this._layer : L.featureGroup() );
		layer._noMeasure= true;

		for ( var y = startY; y<=endY; y += 8 )
		{
			var mark = GSI.UTM.Utils.getUTMMark( y );

			if ( y < 16 ) continue;
			if (y >= 57 ) break;

			var latlngs = [];
			for ( var x = startX; x<=endX; x+=6 )
			{
				if ( !nolabel )
				{
    				var zone = Math.floor(x/6) + 31;
    				var nextZone = Math.floor((x+6)/6) + 31;

    				if ( zone < 51 ) continue;
    				if (  zone > 57 ) break;

    				if ( y+8 <= endY && y +8 < 57 && x+6 <= endX && nextZone <=57 )
    				{
    					if ( this._zoneLabels.length <= labelIndex )
    					{
    						var label = new L.Label({
    								zoomAnimation : true,
    								noHide : true,
    								offset: [8, -24],
    								className: this.options.labelClassName

    							});
    						label.setContent( zone + mark);
    						label.setLatLng( { 'lng' : x, 'lat' : y} );
    						layer.addLayer( label );
    						this._zoneLabels.push( label );
    					}
    					else
    					{
    						var label = this._zoneLabels[labelIndex];
    						label.setContent( zone + mark);
    						label.setLatLng( { 'lng' : x, 'lat' : y} );
    					}
    					labelIndex ++;
    				}
    			}
				latlngs.push( L.latLng(y, x) );
			}

			if ( this._zoneLines.length <= lineIndex )
			{
				var polyline = L.polyline(latlngs, lineStyle);
				polyline._noMeasure = true;
				layer.addLayer( polyline );
				this._zoneLines.push( polyline );
			}
			else
			{
				var polyline = this._zoneLines[lineIndex];
				polyline.setStyle( lineStyle );
				polyline.setLatLngs( latlngs );
			}
			lineIndex++;
		}

		for ( var x = startX; x<=endX; x+=6 )
		{
			var zone = Math.floor(x/6) + 31;
			if ( zone < 51 || zone > 57 ) continue;

			var latlngs = [];

			for ( var y = startY; y<=endY; y += 8 )
			{
				if ( y < 16 || y >= 57 ) continue;

				latlngs.push( L.latLng(y, x) );
			}
			if ( this._zoneLines.length <= lineIndex )
			{
				var polyline = L.polyline(latlngs, lineStyle);
				polyline._noMeasure = true;
				layer.addLayer( polyline );

				this._zoneLines.push( polyline );
			}
			else
			{
				var polyline = this._zoneLines[lineIndex];
				polyline.setStyle( lineStyle );
				polyline.setLatLngs( latlngs );
			}
			lineIndex++;
		}


		if (!this._layer )
		{
			this._layer  = layer;
			this._map.addLayer( this._layer );
		}

		this._clearLayerArr(this._zoneLines, lineIndex);
		this._clearLayerArr(this._zoneLabels, labelIndex);
	},
	_clearLayerArr : function( arr, idx )
	{
		if ( this._layer )
		{
			for ( var i=idx; i<arr.length; i++ )
			{
				this._layer.removeLayer( arr[i] );
			}
		}
		if ( arr.length > idx )
		{
			arr.splice(idx);
		}
	},
	clear : function()
	{
		if ( this._layer )
		{
			this._map.removeLayer( this._layer );
			this._layer = null;
		}

		this._lines = [];
		this._labels = [];
		this._zoneLines = [];
		this._zoneLabels = [];
	},
	setVisible : function( visible )
	{
		if ( visible )
		{
			this.show();
		}
		else
		{
			this.hide();
		}
	},
	getVisible : function()
	{
		return this.options.visible;
	},
	show : function()
	{
		if ( !this.options.visible )
		{
			this.options.visible = true;
			this._map.on('moveend', this._onMoveEnd);
			this.refresh();
		}
	},
	hide : function()
	{
		if ( this.options.visible )
		{
			this.options.visible = false;
			this._map.off('moveend', this._onMoveEnd);
			this.refresh();
		}
	}
} );

GSI.CenterCross = L.Class.extend( {

	marker : null,
	options : {
		visible : true
	},
	initialize : function (map,options)
	{
		options = L.setOptions(this, options);
		this.map = map;
		this._refresh = L.bind(this.refresh, this);

		this.setVisible(this.options.visible);
	},
	refresh : function()
	{
		if ( this.options.visible )
		{
			var pos = this.map.getCenter();
			if ( !this.marker )
			{
				var icon = L.icon({
					iconUrl: 'image/map/crosshairs.png',
					iconSize:     [32, 32],
					iconAnchor:   [16, 16]
				});

				this.marker = new GSI.CenterCrossMarker(pos, {
					icon: icon,
					clickable:
					false,draggable: false,
					keyboard: false,
					opacity: 0.8,
					zIndexOffset : 0
				});
				this.marker.addTo(this.map);
			}
			else
			{
				this.marker.setLatLng( pos );
			}
		}
		else if ( this.marker )
		{
			this.map.removeLayer( this.marker );
			this.marker = null;
		}
	},
	setVisible : function( on )
	{
		this.options.visible = on;
		if ( this.options.visible )
		{
			this.map.on('move', this._refresh );
		}
		else
		{
			this.map.off('move', this._refresh );
		}
		this.refresh();
	},
	getVisible : function()
	{
		return this.options.visible;
	}
} );


/************************************************************************
 L.Class
 - GSI.COCOTileLayer
 ************************************************************************/
GSI.COCOTileLayer = L.Class.extend({
	includes: L.Mixin.Events,
	visible : true,
	options: {
		minZoom: 0,
		maxZoom: 18,
		tileSize: 256,
		errorTileUrl: '',
		zoomOffset: 0,
		refreshInterval: 1000,
		unloadInvisibleTiles: L.Browser.mobile,
		updateWhenIdle: L.Browser.mobile
	},
	initialize: function (map, url, options) {
		this.map = map;
		options = L.setOptions(this, options);
		this.visible = options.visible;
		// detecting retina displays, adjusting tileSize and zoom levels
		if (options.detectRetina && L.Browser.retina && options.maxZoom > 0) {

			options.tileSize = Math.floor(options.tileSize / 2);
			options.zoomOffset++;

			if (options.minZoom > 0) {
				options.minZoom--;
			}
			this.options.maxZoom--;
		}

		if (options.bounds) {
			options.bounds = L.latLngBounds(options.bounds);
		}

		this._url = url;
		if ( options.visible )
		{
			this.addTo( this.map );
		}
	},
	onAdd: function (map) {
		this._map = map;

		this._reset();
		this._update();

		map.on({
			'viewreset': this._reset,
			'moveend': this._moveend,
			'movestart': this._movestart
		}, this);
	},
	addTo: function (map) {
		this.visible = true;
		map.addLayer(this);
		return this;
	},
	getVisible : function()
	{
		return this.visible;
	},
	setVisible : function( on)
	{
		if ( on )
		{
			this.addTo( this.map );
		}
		else if ( this._map )
		{
			this.visible = false;
			this.map .removeLayer( this );
			this.fire('hide', null );
		}
	},
	refresh : function()
	{
		if ( this.visible )
		{
			this._reset();
			this._update();
		}
	},
	onRemove: function (map) {
		map.off({
			'viewreset': this._reset,
			'moveend': this._update,
			'movestart': this._movestart
		}, this);

		this._map = null;
	},
	_reset: function (e) {

		if ( this._tiles )
		{
			for ( var id in this._tiles )
			{
				var tile = this._tiles[ id ];
				if ( tile.ajax )
				{
					tile.ajax.abort();
					tile.ajax = null;
				}
			}
		}

		if ( this.refreshTimerId )
		{
			clearTimeout( this.refreshTimerId );
			this.refreshTimerId = null;
		}

		this._haveTiles = {};
		this._tiles = {};
		this._tilesToLoad = 0;
	},
	_moveend : function() {
		if (!this._map) { return; }

        this._reset();
		this.refreshTimerId =  setTimeout(
			L.Util.bind( this._timerRefresh, this ),
			this.options.refreshInterval );

	},
	_movestart : function() {
		this._reset();
	},
	_timerRefresh : function() {
		this._update();
	},
	_update : function() {

		if ( this.refreshTimerId )
		{
			clearTimeout( this.refreshTimerId );
			this.refreshTimerId = null;
		}

		if (!this._map) { return; }

		var map = this._map,
		    bounds = this.map.getPixelBounds(),
		    zoom = this.map.getZoom(),
		    tileSize = this._getTileSize();

		if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
			return;
		}

		var tileBounds = L.bounds(
		        bounds.min.divideBy(tileSize)._floor(),
		        bounds.max.divideBy(tileSize)._floor());

		this._addTilesFromCenterOut(tileBounds);

	},
	_getTileSize: function () {
		var map = this._map,
		    zoom = this.map.getZoom() + this.options.zoomOffset,
		    zoomN = this.options.maxNativeZoom,
		    tileSize = this.options.tileSize;

		if (zoomN && zoom > zoomN) {
			tileSize = Math.round(this.map.getZoomScale(zoom) / this.map.getZoomScale(zoomN) * tileSize);
		}

		return tileSize;
	},
	_tileShouldBeLoaded: function (tilePoint) {
		if ((tilePoint.x + ':' + tilePoint.y) in this._tiles) {
			return false; // already loaded
		}

		var options = this.options;

		if (!options.continuousWorld) {
			var limit = this._getWrapTileNum();

			// don't load if exceeds world bounds
			if ((options.noWrap && (tilePoint.x < 0 || tilePoint.x >= limit.x)) ||
				tilePoint.y < 0 || tilePoint.y >= limit.y) { return false; }
		}

		if (options.bounds) {
			var tileSize = options.tileSize,
			    nwPoint = tilePoint.multiplyBy(tileSize),
			    sePoint = nwPoint.add([tileSize, tileSize]),
			    nw = this._map.unproject(nwPoint),
			    se = this._map.unproject(sePoint);

			// TODO temporary hack, will be removed after refactoring projections
			// https://github.com/Leaflet/Leaflet/issues/1618
			if (!options.continuousWorld && !options.noWrap) {
				nw = nw.wrap();
				se = se.wrap();
			}

			if (!options.bounds.intersects([nw, se])) { return false; }
		}
		return true;
	},
	_addTilesFromCenterOut: function (bounds) {
		var queue = [],
		    center = bounds.getCenter();

		var j, i, point;

		for (j = bounds.min.y; j <= bounds.max.y; j++) {
			for (i = bounds.min.x; i <= bounds.max.x; i++) {
				point = new L.Point(i, j);

				if (this._tileShouldBeLoaded(point)) {
					queue.push(point);
				}
			}
		}

		var tilesToLoad = queue.length;

		if (tilesToLoad === 0) { return; }

		queue.sort(function (a, b) {
			return a.distanceTo(center) - b.distanceTo(center);
		});

		this._tilesToLoad += tilesToLoad;

		for (i = 0; i < tilesToLoad; i++) {
			this._addTile(queue[i]);
		}

		this.fire('loadstart', null );
	},
	_getTilePos: function (tilePoint) {
		var origin = this._map.getPixelOrigin(),
		    tileSize = this._getTileSize();

		return tilePoint.multiplyBy(tileSize).subtract(origin);
	},
	_addTile: function (tilePoint) {
		var tilePos = this._getTilePos(tilePoint);

		var tile = {};//this._getTile();
		this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;
		this._loadTile(tile, tilePoint);
	},
	_resetTile: function (/*tile*/) {},
	_adjustTilePoint: function (tilePoint) {

		var limit = this._getWrapTileNum();

		if (!this.options.continuousWorld && !this.options.noWrap) {
			tilePoint.x = ((tilePoint.x % limit.x) + limit.x) % limit.x;
		}

		if (this.options.tms) {
			tilePoint.y = limit.y - tilePoint.y - 1;
		}

		tilePoint.z = this._getZoomForUrl();
	},
	_getZoomForUrl: function () {

		var options = this.options,
		    zoom = this._map.getZoom();

		if (options.zoomReverse) {
			zoom = options.maxZoom - zoom;
		}

		zoom += options.zoomOffset;
		return options.maxNativeZoom ? Math.min(zoom, options.maxNativeZoom) : zoom;
	},
	_getWrapTileNum: function () {
		var crs = this._map.options.crs,
		    size = crs.getSize(this._map.getZoom());
		return size.divideBy(this._getTileSize())._floor();
	},
	getTileUrl: function (url, tilePoint) {
		return L.Util.template(url, L.extend({
			z: tilePoint.z,
			x: tilePoint.x,
			y: tilePoint.y
		}, this.options));
	},
	_loadTile: function (tile, tilePoint) {
		this._adjustTilePoint(tilePoint);
        
        this._loadTileAjax(this._url.concat(), tile, tilePoint);
	},
	_loadTileAjax: function (url, tile, tilePoint){
        if(url.length != 0){
		    tile.src = this.getTileUrl(url[0], tilePoint);
		    tile.ajax = $.ajax({
			    url: tile.src,
			    cache: CONFIG.LOADCOCOTILECACHE,
			    crossDomain : true,
			    success : L.Util.bind( this._tileLoaded  , this, url, tile, tilePoint),
			  //error   : L.Util.bind( this._tileLoaded_Error  , this, url, tile, tilePoint),
                complete: L.Util.bind( this._tileLoaded_Complete, this, url, tile, tilePoint)
		    });
        }
	},
	_tileLoaded : function(url, tile, tilePoint){
		if ( tile.ajax )
		{
			var lines = tile.ajax.responseText.split( "\n" );
			if ( lines.length > 0 )
			{

				var line = lines[ 0 ];
				var ids = line.split( ',' );

				for ( var i=0; i< ids.length; i ++ )
				{
					var tileId = ids[ i ];
					this._haveTiles[ tileId ] = true;
				}
			}
		}
	},
	_tileLoaded_Complete : function(url, tile, tilePoint){
		if ( tile.ajax )
		{
            var ret = false;
            if(url.length > 0){
                url.shift();
                if(url.length > 0){
                    this._loadTileAjax(url, tile, tilePoint);
                    ret = true;
                }
            }

            if(!ret){
			    tile.ajax = null;
            }
        }

        tile.loaded = true;
        var n = 0;
		for ( var id in this._tiles )
		{
            n++;
			var tile = this._tiles[ id ];
			if ( tile.ajax || !tile.loaded )
			{
				return;
			}
		}

		if ( this.options.onLoad ) this.options.onLoad( this._haveTiles );

        if(this.refreshTimerId_load){
            clearTimeout(this.refreshTimerId_load);
            this.refreshTimerId_load = null;
        }

        if(n == 0){
            return;
        }

        var that = this;
		this.refreshTimerId_load =  setTimeout(
            function(){
                that.refreshTimerId_load = null;
		        that.fire('load', { tileIds : that._haveTiles } );
            }
        , 100 );

    }
} );

/************************************************************************
 L.Class
 - GSI.Dialog
 ************************************************************************/
GSI.Dialog = L.Class.extend( {
	options : {
		containerClass : 'gsi_dialog',
		headerClass : 'gsi_dialog_header',
		contentClass : 'gsi_dialog_content',
		effect : null,
		top : 0,
		left : 0,
		width : 300,
		resizable : ""
	},
	_userResized : false,
	initialize : function( options )
	{
		options = L.setOptions(this, options);

		if ( !GSI.Dialog._dialogManager )GSI.Dialog._dialogManager = new GSI.DialogManager();

		GSI.Dialog._dialogManager.append( this );
		this.create();

		if ( options.visible )
			this.show();
	},
	isResizable : function()
	{
		return ( this.options.resizable && this.options.resizable != '' ? true : false );
	},
	createHeader : function()
	{
		return $('<span>').html('　　　　　　　' );
	},
	createContent : function()
	{
		return $( '<div>' ).html('　　　　　　　');
	},
	create : function()
	{
		if ( this.container ) return;
		this.container = $( '<div>' ).addClass( this.options.containerClass );
		this.headerFrame = $( '<div>' ).addClass( this.options.headerClass );
		this.contentFrame = $( '<div>' ).addClass( this.options.contentClass );

		this.closeBtn = $( '<a>' ).html( '×' ).attr({'href':'javascript:void(0);'}).addClass( 'closebtn' );

		this.headerTitle = $( '<div>' ).addClass( 'title' );
		this.headerFrame.append(this.headerTitle );
		this.headerFrame.append( this.closeBtn );
		this.headerTitle.append(this.createHeader() );

		this.contentFrame.append( this.createContent());

		this.container.append( this.headerFrame );
		this.container.append( this.contentFrame );

		$( document.body).append( this.container );

		this.container.draggable({
			delay : 100,
			scroll: false,
			handle : this.headerFrame,
			stop : L.bind( function() { GSI.Dialog._dialogManager.adjust( this ); }, this )
		})
		.on( 'mousedown', L.bind( this.onClick, this ) )
		.on( 'touchstart', L.bind( this.onClick, this ) );

		if ( this.options.width )
		{
			this.container.css( {width:this.options.width } );
		}
		this.closeBtn.click( L.bind( function(){ this.hide(true);}, this ) );
		this.container.hide();

		var left = this.options.left;
		if ( left == 'center' )
		{
			var screenSize = GSI.Utils.getScreenSize();
			left = Math.floor( (screenSize.w/2)-( parseInt(this.options.width) / 2 ) );
		}
		
		this.container .css( {
			left : left + 'px' ,
			top : this.options.top + 'px',
			width : this.options.width + 'px',
			"min-width" : "80px",
			height: 'auto'
		} );

		if ( this.isResizable() )
		{
			this.container.resizable({
				resize : L.bind( function() {
					this._onResize();
					this._userResized = true;
				},this ),
				handles: this.options.resizable
			});
		}
	},
	css : function( css )
	{
		if ( this.container ) this.container.css( css );
	},
	_onResize : function() {},
	addClass : function( className )
	{
		if ( this.container ) this.container.addClass( className );
	},
	removeClass : function( className )
	{
		if ( this.container ) this.container.removeClass( className );
	},
	show : function(noActivate)
	{
		if ( !this.container ) this.create();
		
		GSI.Dialog._dialogManager.appendVisibleList( this, noActivate );
		if ( this.options.effect )
		{
			this.container.show(this.options.effect.animation, this.options.effect.option,this.options.effect.speed,
				L.bind( function() { if ( this.afterShow ) this.afterShow(); }, this )
				);
		}
		else
		{
			this.container.show(L.bind( function() { if ( this.afterShow ) this.afterShow(); }, this ));
		}
	},
	hide : function()
	{
		GSI.Dialog._dialogManager.removeVisibleList( this );

		if ( this.options.effect )
		{
			this.container.hide(this.options.effect.animation, this.options.effect.option,this.options.effect.speed);
		}
		else
		{
			this.container.hide();
		}
	},
	setMaxScrollHeight : function( maxHeight ) {},
	getVisible : function()
	{
		return( this.container && this.container.is(':visible') ? true : false );
	},
	onClick : function ()
	{
		GSI.Dialog._dialogManager.activate( this );
	}
} );

/************************************************************************
 L.Class
 - GSI.Dialog
   - GSI.LayerTreeDialog
 ************************************************************************/
GSI.LayerTreeDialog = GSI.Dialog.extend( {

	options : {
		title : '情報リスト'
	},
	_activeTabIndex : -1,
	
	initialize : function(mapLayerList,cocoTileLayer, layersTab, options)
	{
		this.mapLayerList = mapLayerList;
		this.cocoTileLayer = cocoTileLayer;
		this.layersTab = layersTab;
		this.mapLayerList.on( 'change', L.bind( this.onMapLayerListChange, this ) );
		GSI.Dialog.prototype.initialize.call(this, options);

        this._current_id = this.path = this.options.currentPath;

		cocoTileLayer.on( 'load', L.bind( this.onCOCOTileLoad, this ) );
		cocoTileLayer.on( 'hide', L.bind( this.onCOCOTileHide, this ) );
		
		
	},
	createHeader : function()
	{
		this.headerFrame.addClass( "tab");
		this._titleFrame = $( '<div>' );
		this._tabFrame = $( '<div>' ).addClass("layertreedialog_tab_frame");
		
		for( var i=0; i<this.layersTab.length; i++ )
		{
			var  tabInfo = this.layersTab[i];
			/*
			var a = $("<a>").css({"font-size":"90%"})
			.attr( {"href":"javascript:void(0);"} )
			.html(tabInfo.caption)
			.data ({"tabInfo":tabInfo, "idx" : i})
			.click(L.bind(this._onTabClick, this ) );//function(){alert("");});
			*/
			
			var a = $("<a>").css({"font-size":"90%"})
			.attr( {"href":"javascript:void(0);"} )
			.data ({"tabInfo":tabInfo, "idx" : i})
			.click(L.bind(this._onTabClick, this ) )
			.css( {"z-index": this.layersTab.length - i} );
			
			var leftTriangle = $("<div>").html("").addClass("left_triangle").append("<div>");
			var centerTitle = $("<div>").html(tabInfo.caption).addClass("center_text");
			var rightTriangle = $("<div>").html("").addClass("right_triangle").append("<div>");
			
			a.append( leftTriangle ).append( centerTitle ).append( rightTriangle );
			
			this._tabFrame.append( a );
		}
		
		this._tabFrame.append( $("<div>").css({"clear":"both"}) );
		this._titleTextFrame = $( '<div>' ).append( $('<span>').html(this.options.title ) ).addClass("title_frame");
		//this._titleFrame.append( this._titleTextFrame);//.append(this._titleControlFrame);
		this._titleFrame.append(this._tabFrame).append( this._titleTextFrame);//.append(this._titleControlFrame);
		//this._activeTabIndex = 0;
		
		
		this._tabScrollLeftBtn = $( "<a>" ).hide()
			.addClass("tab_scroll_btn")
			.addClass("tab_scroll_left")
			.attr({"href":"javascript:void(0);"})
			.on( "mousedown", L.bind(this._onTabScrollLeftMouseDown, this) )
			.on( "mouseup", L.bind(this._onTabScrollLeftMouseUp, this) );
			
		this._tabScrollRightBtn = $( "<a>" ).hide()
			.addClass("tab_scroll_btn")
			.addClass("tab_scroll_right")
			.on( "mousedown", L.bind(this._onTabScrollRightMouseDown, this) )
			.on( "mouseup", L.bind(this._onTabScrollRightMouseUp, this) );
			
		this._titleFrame.append(this._tabScrollLeftBtn).append(this._tabScrollRightBtn);
		this.activateTab(0);
		
		return this._titleFrame;
		
	},
	
	_onTabClick : function(event)
	{
		var a = $(event.currentTarget );
		var newidx = a.data("idx");

		if (this._activeTabIndex != newidx)
		{
			if (this._checkEvacuationLayer() == false)
			{
				CONFIG.layerEvacuationIsConfirmOK = false;
				GSI.GLOBALS.evacDialog.hide();
			}
		}
		

		this.activateTab(newidx);
	},
	
	activateTab : function(idx)
	{
		this._tabFrame.find("a").removeClass("active");
		this._tabFrame.find("a").eq(idx).addClass("active");
		
		var tabArr = this._tabFrame.find("a");
		for( var i=0; i<tabArr.length; i++ )
		{
			var zIndex = tabArr.length -i;
			if ( idx == i ) zIndex = 99;
			
			$( tabArr[i]).css( {"z-index":zIndex} );
		}
		
		if ( this._activeTabIndex != idx )
		{
			this._activeTabIndex = idx;

			if ( this.tree )
			{
				this.onFolderClick_Proc(this.tree[this._activeTabIndex]);

				//this._current = this.tree[idx].entries;
				//this._initializeList( this.tree[idx].entries );
			}
		}
		
		
		this._initializeTabScrollBtns();
		
	},
	
	_onResize : function()
	{
		GSI.Dialog.prototype._onResize.call(this);

		var height = this.container.outerHeight( false )
			- this.headerFrame.outerHeight( true )
			- this._controlFrame.outerHeight( true ) - 11;

		this.listFrame.css( { "max-height": 'none', height: height + 'px'} );
		
		
		this._initializeTabScrollBtns();
		
	},
	
	_initializeTabScrollBtns : function()
	{
		var scrollLeft = this._tabFrame.scrollLeft();
		
		var scrollContainerWidth = this._tabFrame.outerWidth();
		var scrollInnerWidth = this._tabFrame.find("a").last().position().left-10 +
			this._tabFrame.find("a").last().outerWidth(true) + scrollLeft;
		
		
		if ( scrollContainerWidth < scrollInnerWidth )
		{
			var scrollMax = scrollInnerWidth - scrollContainerWidth;
			if ( scrollMax <= scrollLeft )
			{
				this._tabFrame.scrollLeft(scrollMax);
				this._tabScrollRightBtn.addClass("deactive");
			}
			else
				this._tabScrollRightBtn.removeClass("deactive");
				
			if ( scrollLeft > 0 )
				this._tabScrollLeftBtn.removeClass("deactive");
			else
				this._tabScrollLeftBtn.addClass("deactive");
		}
		else
		{
			this._tabScrollLeftBtn.addClass("deactive");
			this._tabScrollRightBtn.addClass("deactive");
			this._tabFrame.scrollLeft(0);
		}
		
		if ( scrollContainerWidth >= scrollInnerWidth)
		{
			this._tabScrollLeftBtn.hide();
			this._tabScrollRightBtn.hide();
		}
		else
		{
			this._tabScrollLeftBtn.show();
			this._tabScrollRightBtn.show();
		}
		
	},
	
	_onTabScrollLeftMouseDown : function()
	{
		if ( this._tabScrollLeftTimer )
			clearTimeout(  this._tabScrollLeftTimer );
		this._tabScrollLeftTimer = setTimeout( L.bind( function(){
			this._tabScrollLeft();
		}, this ), 10 );
	},
	
	_onTabScrollLeftMouseUp : function()
	{
		if ( this._tabScrollLeftTimer )
			clearTimeout(  this._tabScrollLeftTimer );
		this._tabScrollLeftTimer = null;
	},
	
	
	_tabScrollLeft : function()
	{
		var scrollLeft = this._tabFrame.scrollLeft();
		var scrollContainerWidth = this._tabFrame.outerWidth();
		var scrollInnerWidth = this._tabFrame.find("a").last().position().left-10 +
			this._tabFrame.find("a").last().outerWidth(true) + scrollLeft;
		
		var scrollMax = scrollInnerWidth - scrollContainerWidth;
		scrollLeft-=2;
		if ( scrollLeft < 0 ) scrollLeft = 0;
		this._tabFrame.scrollLeft(scrollLeft);
		
		
		if ( scrollLeft > 0 )
		{
			this._tabScrollLeftBtn.removeClass("deactive");
		}
		else
			this._tabScrollLeftBtn.addClass("deactive");
		
		
		if ( scrollMax <= scrollLeft )
			this._tabScrollRightBtn.addClass("deactive");
		else
			this._tabScrollRightBtn.removeClass("deactive");
			
		if ( scrollContainerWidth >= scrollInnerWidth)
		{
			this._tabScrollLeftBtn.hide();
			this._tabScrollRightBtn.hide();
		}
		else
		{
			this._tabScrollLeftBtn.show();
			this._tabScrollRightBtn.show();
		}
		
		if ( !this._tabScrollLeftBtn.hasClass("deactive") )
		{
			this._tabScrollLeftTimer = setTimeout( L.bind( function(){
				this._tabScrollLeft();
			}, this ), 10 );
		}
	},
	
	
	_onTabScrollRightMouseDown : function()
	{
		if ( this._tabScrollRightTimer )
			clearTimeout(  this._tabScrollRightTimer );
		this._tabScrollRightTimer = setTimeout( L.bind( function(){
			this._tabScrollRight();
		}, this ), 10 );
	},
	
	_onTabScrollRightMouseUp : function()
	{
		if ( this._tabScrollRightTimer )
			clearTimeout(  this._tabScrollRightTimer );
		this._tabScrollRightTimer = null;
	},
	
	_tabScrollRight : function()
	{
		var scrollLeft = this._tabFrame.scrollLeft();
		var scrollContainerWidth = this._tabFrame.outerWidth();
		var scrollInnerWidth = this._tabFrame.find("a").last().position().left-10 +
			this._tabFrame.find("a").last().outerWidth(true) + scrollLeft;
		
		var scrollMax = scrollInnerWidth - scrollContainerWidth;
		scrollLeft+=2;
		if ( scrollLeft> scrollMax ) scrollLeft = scrollMax;
		this._tabFrame.scrollLeft(scrollLeft);
		
		
		
		if ( scrollLeft > 0 )
			this._tabScrollLeftBtn.removeClass("deactive");
		else
			this._tabScrollLeftBtn.addClass("deactive");
		
		
		if ( scrollMax <= scrollLeft )
			this._tabScrollRightBtn.addClass("deactive");
		else
			this._tabScrollRightBtn.removeClass("deactive");
			
		if ( scrollContainerWidth >= scrollInnerWidth)
		{
			this._tabScrollLeftBtn.hide();
			this._tabScrollRightBtn.hide();
		}
		else
		{
			this._tabScrollLeftBtn.show();
			this._tabScrollRightBtn.show();
		}
		
		
		if ( !this._tabScrollRightBtn.hasClass("deactive") )
		{
			this._tabScrollRightTimer = setTimeout( L.bind( function(){
				this._tabScrollRight();
			}, this ), 10 );
		}
	},
	
	
	createContent : function()
	{
		this._contentFrame = $('<div>');
		this._controlFrame = this._createControl();
		this.listFrame = $( '<div>' ).addClass( 'layertreedialog_ul_frame' );

		this.listContainer = $( '<ul>' ).addClass( 'layertreedialog_ul' );

		var li = $( '<li>' ).addClass( 'nodata' ).html( '読み込み中' );
		this.listContainer.append( li );
		this.listFrame.append( this.listContainer );
		this._contentFrame.append( this._controlFrame );
		this._contentFrame.append( this.listFrame );

		return this._contentFrame;
	},
	_createControl : function()
	{
		var frame = $( '<div>' ).addClass( 'layertreedialog_control_frame' );

		this.onOffSwitch = new GSI.OnOffSwitch( {className:'onoff', checked:this.cocoTileLayer.getVisible(), title: ""} );

		var onoffFrame = $( '<div>' );
		var label = $( '<label>' ).css({"padding-left":"5px"}).attr({'for':this.onOffSwitch.getId()}).html( '表示範囲に絞込み' );

		this.onOffSwitch.on( 'change' , L.bind( this._onCocoTileCheckChange, this, this.onOffSwitch ) );

		onoffFrame.append( this.onOffSwitch.getElement() );
		onoffFrame.append( label );

		this._showAllButton = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全選択'   ).addClass( 'normalbutton showallbutton' );
		this._hideAllButton = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全非選択' ).addClass( 'normalbutton showallbutton' );

		frame.append( this._hideAllButton );
		frame.append( this._showAllButton );
		frame.append( onoffFrame );

		this._showAllButton.click( L.bind( this._onShowAllClick, this ) );
		this._hideAllButton.click( L.bind( this._onHideAllClick, this ) );

		return frame;
	},
	onCocoTileCheckChange : function(onOffSwitch)
	{
        this.onOffSwitch.checked(onOffSwitch.checked());
        this._onCocoTileCheckChangeProc(onOffSwitch);
	},
	_onCocoTileCheckChange : function(onOffSwitch)
	{
        GSI.GLOBALS.viewListDialog.onCocoTileCheckChange(onOffSwitch);
		this._onCocoTileCheckChangeProc(onOffSwitch);
	},
	_onCocoTileCheckChangeProc : function(onOffSwitch)
	{
        if(onOffSwitch.checked()){
            if(!this._initializeList_ID_Mode_cocoTileLayer){
                var path = "";
                this._CurrentData_SRC    = new Array();
                this._CurrentData_SRC_ID = "";
                this._initializeList_ID_Mode = "cocoTileLayer";
                this._initializeList_IDProc_Data(this.tree, path);
                this._CurrentData_SRC_ID  = path;
                this._initializeList_IDProc_DataSrc();

                this._initializeList_ID_Mode_cocoTileLayer = true;
            }
            else{
		        this.cocoTileLayer.setVisible( onOffSwitch.checked() );
            }
        }
        else{
		    this.cocoTileLayer.setVisible( onOffSwitch.checked() );
        }
    },
	setMaxScrollHeight : function( maxHeight )
	{
		if ( this.listFrame )
		{
			this.listFrame.css( { 'max-height' : maxHeight + 'px'} );
		}

		if ( this._contentFrame )
		{
			this._contentFrame.css( { 'height' : 'auto'} );
			this.contentFrame.css( { 'height' : 'auto'} );
			this.container.css( { 'height' : 'auto'} );
		}
	},
	setTree : function( tree )
	{
		this.tree = tree;
		this.current = null;
		this.initializeList();
	},
	setTree_Init : function( tree, visibleLayers, visibleLayersHash)
	{

        this.visibleLayers     = visibleLayers;
        this.visibleLayersHash = visibleLayersHash;

        if(this.getVisible()){
            this.options.currentPath = this.path;
        }
        else{
            this.options.currentPath = null;
        }

        this.setTree(tree);
    },
	show : function()
	{
		GSI.Dialog.prototype.show.call(this);
		
	},
	hide : function()
	{
		this._hideItemTooltip();
		if ( !CONFIG.LAYERTREEDIALOGKEEPCURRENT )
		{
			this.current = null;
			this.initializeList();
		}
		if ( this._checkEvacuationLayer() == false )
		{
			GSI.GLOBALS.evacDialog.hide();
		}

		GSI.Dialog.prototype.hide.call(this);
	},
	onCOCOTileLoad : function(e)
	{
		if ( !this.tree ) return;
		this._initializeList( this.current ? this.current.entries : ( this.tree ? this.tree[this._activeTabIndex].entries : true), true );
		//this._initializeList( this.current ? this.current.entries : this.tree, true );
	},
	onCOCOTileHide : function(e )
	{
		if ( !this.tree ) return;
		this._initializeList( this.current ? this.current.entries : ( this.tree ? this.tree[this._activeTabIndex].entries : true), true );
		//this._initializeList( this.current ? this.current.entries : this.tree, true );
	},
	initializeList : function()
	{
		if ( !this.contentFrame ) return;
		this._hideItemTooltip();

		if ( !this.listContainer )
		{
			this.listContainer = $( '<ul>' ).addClass( 'layertreedialog_ul' );
			this.listFrame.empty().append( this.listContainer );
		}
		this.contentFrame.scrollTop( 0 );
		this.listContainer.empty();
		if ( this.options.currentPath )
		{
            this._initializeList_CurrentPath( this.options.currentPath );
			this.activateTab( this._activeTabIndex );
		}
        else{
            this._initializeListProc();
        }

		if ( this.current && this.current.toggleall )
		{
			this._showAllButton.show();
			this._hideAllButton.show();
		}
		else
		{
			this._showAllButton.hide();
			this._hideAllButton.hide();
		}
	},
	_initializeList : function( list, liRefresh )
	{
		this._hideItemTooltip();

		if ( !list || list.length <= 0  )
		{
			this.listContainer.empty();
			var li = $( '<li>' ).addClass( 'nodata' ).html( 'データがありません' );
			this.listContainer.append( li );
			return;
		}

		var liList = ( liRefresh ? this.listContainer.children( 'li' ) : null );

		var showAllButtonEnable = false;
		var hideAllButtonEnable = false;

		for ( var i= 0; i<list.length; i++ )
		{
			var item = list[i];
			var li = ( liRefresh ? $( liList[i] ).empty() : $( '<li>' )  );
			var a = $( '<a>' ).attr( { 'href':'javascript:void(0);' } );
			a.data( { 'data' : item } );

			if ( ( item.entries && !item.isMultiLayer ) || item.src)
			{
				this._makeFolder(li, a, item );
			}
			else
			{
				this._makeLayer(li, a, item );
			}

			li.append( a );
			this.listContainer.append( li );

			if ( (item.entries) || (this.cocoTileLayer.getVisible() && item.cocotile && !item.hasTile ) ) continue;

			if ( item._visibleInfo ) hideAllButtonEnable = true;
			else showAllButtonEnable = true;
		}

		if ( showAllButtonEnable )
		{
			this._showAllButton.removeClass( 'disabled' );
		}
		else
		{
			this._showAllButton.addClass( 'disabled' );
		}

		if ( hideAllButtonEnable )
		{
			this._hideAllButton.removeClass( 'disabled' );
		}
		else
		{
			this._hideAllButton.addClass( 'disabled' );
		}
	},
	_initializeListProc : function()
	{
        if(this.visibleLayers && this.visibleLayers.length > 0){
            var fAppend = true;
		    for(var i = 0; i < this.visibleLayers.length; i++){
			    var l = this.visibleLayers[i];
                if(!l.info){
                    fAppend = false;
                    this._initializeList_VisibleLayers(l.id);
                }
            }

            if(fAppend){
		        for(var i = 0; i < this.visibleLayers.length; i++){
			        var l = this.visibleLayers[i];
                    if(l.info != null){
			            this.mapLayerList.append(l.info, true, l.hidden,null,l.blend);
			            //this.mapLayerList.append(l.info, true, l.hidden);
                    }
                }
                this.visibleLayers.length = 0;
                this._initializeListProc();
            }
        }
        else{
		    this.refreshTitle();
		    this._initializeList( this.current ? this.current.entries : this.tree[this._activeTabIndex].entries);
		    if ( this._userResized ) this._onResize();
        }
    },
    _initializeList_VisibleLayers : function(id){
        this._initializeList_ID_Mode    = "visible";
        this._initializeList_ID_Mode_ID = id;
        this._initializeList_ID(id);
    },

	_initializeList_CurrentPath : function(id)
	{
        this._initializeList_ID_Mode    = "current";
        this._initializeList_ID_Mode_ID = id;
        this._initializeList_ID(id);
    },
	_initializeList_ID : function(path)
	{
		var current = null;
		if ( !path || path == '' ) return null;

        this._CurrentData_SRC    = new Array();
        this._CurrentData_SRC_ID = "";
        current = this._initializeList_IDProc_Data(this.tree, path);
        if(current == null && this._CurrentData_SRC.length > 0){
            this._CurrentData_SRC_ID  = path;
            this._initializeList_IDProc_DataSrc();
        }
        else{
            this._initializeList_IDProc(current);
        }
		return current;
	},
	_initializeList_IDProc : function(current)
	{
        var fInit = true;
        if(this._initializeList_ID_Mode == "visible"){
            if(current == null){            
		        for(var i = 0; i < this.visibleLayers.length; i++){
			        var l = this.visibleLayers[i];
                    if(l.id == this._initializeList_ID_Mode_ID){
                        this.visibleLayers.splice(i, 1);
                        break;
                    }
                }
            }
        }
        if(this._initializeList_ID_Mode == "current"){
		    this.current             = current;
			var target = this.current ;
			if ( target )
			{

				while( target.parent )
				{
					target = target.parent;
				}
				if ( this.tree )
				{
					for( var i=0; i<this.tree.length; i++)
					{
						if ( target == this.tree[i])
						{
							this._tabFrame.find("a").removeClass("active");
							this._tabFrame.find("a").eq(i).addClass("active");
							
							var tabArr = this._tabFrame.find("a");
							for( var j=0; j<tabArr.length; j++ )
							{
								var zIndex = tabArr.length -j;
								if ( i == j ) zIndex = 99;
								
								$( tabArr[j]).css( {"z-index":zIndex} );
							}
							this._activeTabIndex = i;
							break;
						}
					}
				}
			}
		    this.options.currentPath = null;
        }
        if(this._initializeList_ID_Mode == "cocoTileLayer"){
            this.cocoTileLayer.setVisible( true );
            fInit = false;
        }

        this._initializeList_ID_Mode = "";

        if(fInit){
            this._initializeListProc();
        }
    },
    _initializeList_IDProc_Data : function(tree, id)
    {
        var current = null;
        _DEV_DBG_HashLsPath = true;
        for(var i = 0; i < tree.length; i++){
            if(tree[i].src    && !tree[i].entries){
                if(!tree[i].src_ && tree[i].src.indexOf('./') == 0){
                    var path = tree[i].src_url.substring(0, tree[i].src_url.lastIndexOf('/'));
                    tree[i].src_ = true;
                    tree[i].src  = path + "/" + tree[i].src.substr(2);
                }
                this._CurrentData_SRC.push(tree[i]);
            }
            else if(tree[i].entries && !tree[i].isMultiLayer){
                current = this._initializeList_IDProc_Data(tree[i].entries, id);
                if(current != null){
                    break;
                }
            }
            else{
                if(tree[i].id == id){
                    if(tree[i].parent){
                        current = tree[i].parent;
						
                        this._CurrentData_SRC.length = 0;
                    }
                    else{
                        current = null;
                    }
                    break;
                }
            }
            
        }

        return current;
    },
    _initializeList_IDProc_DataSrc : function()
    {
        if(this._CurrentData_SRC.length > 0){
		    this.ajax      = $.ajax({
			    type     : "GET",
			    url      : this._CurrentData_SRC[0].src,
			    dataType : "text",
			    cache    : true,
				async    : false,
			    success  : L.bind(this._initializeList_IDProc_DataSrc_Success, this),
			    error    : L.bind(this._initializeList_IDProc_DataSrc_Error  , this)
		    });
        }
        else{
			
            this._initializeList_IDProc(null);
        }
    },
	_initializeList_IDProc_DataSrc_Success : function(data)
	{
        if(this._CurrentData_SRC.length > 0){
    		var json = JSON.parse(data);
            if(json.layers){
                for(var i = 0; i < json.layers.length; i++){
                    json.layers[i].parent  = this._CurrentData_SRC[0];
                    json.layers[i].src_url = this._CurrentData_SRC[0].src_url;
                }
            }
            this._CurrentData_SRC[0].entries = json.layers;

            GSI.GLOBALS.layersJSON._initializeTree(this._CurrentData_SRC[0].entries, this._CurrentData_SRC[0]);

            current = this._initializeList_IDProc_Data(this._CurrentData_SRC[0].entries, this._CurrentData_SRC_ID);
            
            if(current == null){
                this._initializeList_IDProc_DataSrc_Error();
            }
            else{
                this._initializeList_IDProc(current);
            }
        }
    },
	_initializeList_IDProc_DataSrc_Error : function()
	{
        this._CurrentData_SRC.shift();
        this._initializeList_IDProc_DataSrc();
	},
	getCurrentPath : function()
	{
        var id = "";
        if(this._current_id){
            id = this._current_id;
        }

        return id;
	},
	setCurrentPath : function(path){
        this.options.currentPath = path;

    	this.setTree(this.tree);
    },
	refreshTitle : function()
	{
		this._titleTextFrame.empty();

		var num = 0;
		var target = this.current;
		while ( target )
		{
			if ( num > 0 )
			{
				var a = $( '<a>' ).html( target.title ).attr( { 'href' : 'javascript:void(0);' } );
				var span = $( '<span>' ).html( "&nbsp;&gt;&nbsp;" );
				this._titleTextFrame.prepend( span );
				a.click(
					L.bind( this.onFolderClick, this, a )
				).data( { 'data' : target } );
				this._titleTextFrame.prepend( a );
			}
			else
			{
				var span= $( '<span>' ).html( target.title );
				this._titleTextFrame.prepend(span );
			}

			num++;
			target = target.parent;
		}
		if ( num > 0 )
		{
			/*
			var span = $( '<span>' ).html( "&nbsp;&gt;&nbsp;" );
			this._titleTextFrame.prepend( span );
			var a = $( '<a>' ).html( this.options.title ).attr( { 'href' : 'javascript:void(0);' } );
			a.click(
				L.bind( this.onFolderClick, this, a )
			).data( { 'data' : null } );
			this._titleTextFrame.prepend( a );
			*/
		}
		else
		
		{
			var title = ( !this.tree || this.tree.length <= this._activeTabIndex ? this.options.title : this.tree[this._activeTabIndex ].title );
			var span = $( '<span>' ).html( title ); //.attr( { 'href' : 'javascript:void(0);' } );
			this._titleTextFrame.prepend( span );
		}
	},
	_makeFolder : function(li, a, item)
	{
		
		var cocoVisible = this.cocoTileLayer.getVisible();
        if(item.title_sys && item.title_sys == CONFIG.layerBaseFolderSYS){
            cocoVisible = false;
        }

		var entriesCount = -1;
        if ( item.entries ){
            entriesCount = item.entries.length;
        }
		var isVisible = true;
		if ( cocoVisible )
		{
			var getCOCOTileVisibleCount = function(entries, isTop)
			{
				var counter = 0;
				var currentCounter = 0;

                if(entries){
				    for ( var i=0; i<entries.length; i++ )
				    {
					    var entry = entries[i];
					    if ( entry.entries )
					    {
						    var entriesCount = getCOCOTileVisibleCount( entry.entries, false );
						    counter += entriesCount.total;

						    if ( isTop && entriesCount.total > 0 )
						    {
							    currentCounter++;
						    }
					    }
					    else
					    {
						    if ( !entry.cocotile || entry.hasTile  )
						    {
							    currentCounter++;
							    counter++;
						    }
					    }
				    }
                }

				return { current: currentCounter, total: counter };
			};

			var count = getCOCOTileVisibleCount( item.entries, true );
			entriesCount = count.current;
			if ( count.total <= 0 ) isVisible = false;
		}

		// 子要素あり
		var title = $( '<div>' ).addClass( 'title' ).html( item.title);
		var num = $( '<div>' ).addClass( 'num' ).append( $('<span>').html(entriesCount));
        if(entriesCount >= 0){
            a.addClass( 'folder' ).append( title ).click( L.bind( this.onFolderClick, this, a) );
        }
        else{
            a.addClass( 'folder' ).append( title ).click( L.bind( this.onFolderClick, this, a) );
        }

		if ( !isVisible )
		{
			a.addClass( 'nococotile' );
			li.addClass( 'nococotile' );
		}
		else
		{
			a.removeClass( 'nococotile' );
			li.removeClass( 'nococotile' );
		}
		if (item.html)
		{
			var flddescriptionBtn = $( '<a>' ).attr( { 'href':'javascript:void(0);'} ).addClass( 'flddescription_btn' ).html("解説");
			li.append( flddescriptionBtn );
			flddescriptionBtn.unbind( 'click' ).bind( 'click', L.bind( this._onLayerMouseEnter, this, a, item ) );
		}
	},
	_onLayerMouseEnter : function( a, item )
	{
		if ( !this._toolTipViewCounter )
		{
			this._toolTipViewCounter = 0;
		}
		this._toolTipViewCounter++;

		this._showItemTooltip( a, item );
	},
	_onLayerMouseLeave : function( a, item )
	{
		this._hideItemTooltip( a, item );
	},
	_makeToolTip : function( item )
	{
		var infoFrame = $( '<div>' ).addClass( 'layerinfo' ).css({"max-width":"350px"} );

		var legend = null;
		var description = null;

		if ( item.legendUrl && item.legendUrl != '')
		{
			legend =$( '<a>' ).html( '凡例を表示' ).addClass( 'legend' ).attr( { 'href' : item.legendUrl, 'target' : '_blank' } );
		}
		if ( legend )
			infoFrame.append( legend );        

		if ( item.html )
		{
			description =$( '<div>' ).addClass( 'description' ).html( item.html );
		}
		if ( description )
			infoFrame.append( description );

		return infoFrame;
	},
	_showItemTooltip : function( a, item )
	{
		if ( item  )
		{
			if ( !this._curItem )
			{
				this._curItem = item;
			}
			else
			{
				if ( ( this._toolTipViewCounter % 2) == 0)
				{
					if ( this._curItem == item )
					{
						this._curItem = undefined;
						this._toolTipViewCounter = 0;
						return;
					}
					else
					{
						this._toolTipViewCounter--;
					}
				}
				this._curItem = item;
			}
		
			if ( !this._itemTooltip )
			{
				this._itemTooltip = $( '<div>' ).addClass( 'gsi_layertreedialog_itemtooltip' ).hide();
				$( document.body ).append( this._itemTooltip );
			}

			var offset = a.offset();

			var screenSize = GSI.Utils.getScreenSize();
			var left = offset.left + parseInt( a.outerWidth(true) );
			var top = offset.top;

			if ( left > screenSize.w * 0.6 )
			{
				left = offset.left + parseInt( a.outerWidth(true) * 0.3 );
				top = offset.top + a.outerHeight(true);
			}

			this._itemTooltip.css({
				left : left + 'px',
				top  : top + 'px'
			}).empty().append( this._makeToolTip( item ) );
			this._itemTooltip.stop().hide().fadeIn( 'normal' );

			if ( this._hideToolTipHandler )
			{
				$( document.body ).unbind( 'mousedown', this._hideToolTipHandler );
				$( document.body ).unbind( 'touchstart', this._hideToolTipHandler );
				this.listFrame.unbind( 'scroll', this._hideToolTipHandler );
				this._hideToolTipHandler  = null;
			}

			this._hideToolTipHandler  = L.bind( function(event)
			{
				if ( !this._itemTooltip || event.target == this._itemTooltip[0] ) return;

				var parents = $( event.target ).parents();

				for (var i=0; i<parents.length; i++ )
				{
					if ( parents[i] == this._itemTooltip[0] ) return;
				}

				this._hideItemTooltip();
				
				if ( event.type == "scroll" )
				{
					this._toolTipViewCounter = 0;
				}
			}, this );

			$( document.body ).bind( 'mousedown', this._hideToolTipHandler );
			$( document.body ).bind( 'touchstart', this._hideToolTipHandler );
			this.listFrame.bind( 'scroll', this._hideToolTipHandler );

		}
		else
		{
			this._hideItemTooltip();
		}
	},
	_hideItemTooltip : function( a, item )
	{
		if ( this._hideToolTipHandler )
		{
			$( document.body ).unbind( 'mousedown', this._hideToolTipHandler );
			$( document.body ).unbind( 'touchstart', this._hideToolTipHandler );
			this.listFrame.unbind( 'scroll', this._hideToolTipHandler );
			this._hideToolTipHandler  = null;
		}
		if ( this._itemTooltip )
		{
			this._itemTooltip.stop().hide();
		}
	},
	_makeLayer : function( li, a, item )
	{
		var cocoVisible = this.cocoTileLayer.getVisible();

		var target = this.current;

		var title = $( '<div>' ).addClass( 'title' ).html( item.title);
		var icon = item.iconUrl;
        if(icon){
		    title.css(
			    {
				    "background" : "url(" + icon + ") no-repeat 8px 50%",
				    "background-size" : "16px 16px"
			    }
		    );
        }
		if ( item._visibleInfo || this.mapLayerList.exists( item )  )
		{
			a.addClass( 'view' );
		}
		else
		{
			a.removeClass( 'view' );
		}
		a.addClass( 'item' ).append( title );

        // 詳細
		var descriptionBtn = $( '<a>' ).attr( { 'href':'javascript:void(0);'} ).addClass( 'description_btn' ).html("解説");
		li.append( descriptionBtn );
		descriptionBtn.unbind( 'click' ).bind( 'click', L.bind( this._onLayerMouseEnter, this, a, item ) );

		if ( CONFIG.VISIBLELAYERTYPE )
		{
			var info = $( '<div>' ).addClass( 'info' );
			if ( item.cocotile )
			{
				var span = $( '<span>' ).addClass( 'cocotile' ).html('ココタイル' );
				info.append( span );
			}

			var typeTitle = CONFIG.LAYERTYPELIST[ item.layerType ];
			if ( !typeTitle ) typeTitle = { caption : item.layerType };
			var span = $( '<span>' ).html(typeTitle.caption ).addClass( 'layertype' );
			info.append( span );

			li.append( info );
		}
		if (cocoVisible && item.cocotile && !item.hasTile )
		{
			a.removeClass( 'view' );
			a.addClass( 'nococotile' );
			li.addClass( 'nococotile' );
		}
		else
		{
			a.removeClass( 'nococotile' );
			li.removeClass( 'nococotile' );
		}

		a.click( L.bind( this.onItemClick, this, a) );
	},
	_onShowAllClick : function()
	{
		var cocoVisible = this.cocoTileLayer.getVisible();
		var list = ( this.current ? this.current.entries : this.tree );
		if ( !list || list.length <= 0  ) return;

		var showList = [];

		for ( var i= 0; i<list.length; i++ )
		{
			var item = list[i];
			if ( item.entries ) continue;
			if (cocoVisible && item.cocotile && !item.hasTile ) continue;

			showList.push( item );
		}

		if ( showList.length > 0 )
			this.mapLayerList.appendList( showList );
	},
	_onHideAllClick : function()
	{
		var list = ( this.current ? this.current.entries : this.tree );
		if ( !list || list.length <= 0  ) return;

		for ( var i= 0; i<list.length; i++ )
		{
			var item = list[i];
			if ( item.entries ) continue;
			if ( this.mapLayerList.exists( item ) )
			{
				this.mapLayerList.remove( item );
			}
		}
	},
	_expandFolder : function( item )
	{
        var f = true;
        if(item){
            if(item.src){
                if(!item.entries){
                    item.parent = this.current;
                    if(!item.src_ && item.src.indexOf('./') == 0){
                        var path = item.src_url.substring(0, item.src_url.lastIndexOf('/'));
                        item.src_ = true;
                        item.src  = path + "/" + item.src.substr(2);
                    }
                    this.ajax_item = item;
				    this.ajax      = $.ajax({
					    type     : "GET",
					    url      : item.src,
					    dataType : "text",
					    //cache    : true,
					    cache    : CONFIG.LOADLAYERSTXTCACHE,
					    success  : L.bind(this._onFolderClickLoad     , this),
					    error    : L.bind(this._onFolderClickLoadError, this)
				    });

                    f = false;
                }
            }
        }

        if(f){
            this.onFolderClick_Proc(item);
        }
	},
	onConfirmOkClick : function ( item )
	{
		GSI.GLOBALS.confirmDlg.hide();
		GSI.GLOBALS.evacDialog.show();

		CONFIG.layerEvacuationIsConfirmOK = true;
		this._expandFolder( item );
	},
	onFolderClick : function( a )
	{
		var item = a.data( 'data' );
		
		if (( item ) && ( item.title_evac && item.title_evac == CONFIG.layerEvacuationFolderSYS ))
		{
			if ( this._checkEvacuationLayer() == false )
			{
				GSI.GLOBALS.confirmDlg.onPositiveButtonClick = L.bind(this.onConfirmOkClick, this, item);
				GSI.GLOBALS.confirmDlg.show();			
			}
			else
			{
				this._expandFolder( item );
			}
		}
		else
		{
			this._expandFolder( item );
			if (this._checkEvacuationLayer() == false)
			{
				CONFIG.layerEvacuationIsConfirmOK = false;
				GSI.GLOBALS.evacDialog.hide();
			}
        }
	},
	onFolderClick_Proc : function( item )
	{
		    this.current = item;
		    this.listContainer.fadeOut( 'fast',
			    L.bind( function() {
				    this.listContainer.fadeIn('fast');
				    this.initializeList();
			    }, this )
		    );
    },
	_onFolderClickLoad : function(data)
	{
        var item = this.ajax_item;
        if(item){
    		var json = JSON.parse(data);
            if (json.layers){
                for(var i = 0; i < json.layers.length; i++){
                    json.layers[i].src_url = item.src_url;
                }
            }

            item.entries = json.layers;

            GSI.GLOBALS.layersJSON._initializeTree(item.entries, item);

            this.onFolderClick_Proc(item);
        }
    },
	_onFolderClickLoadError : function()
	{
		alert( 'レイヤー設定ファイルが読み込めませんでした。' );
	},
	onItemClick : function( a )
	{
		var target = this.current;
		var item = a.data( 'data' );

        this._current_id = item.id;
		
		var baseLayerTarget = null;
		
		for( var i=0; i<GSI.GLOBALS.baseLayer.baseLayerList.length; i++ )
		{
			if ( item.id == GSI.GLOBALS.baseLayer.baseLayerList[i].id )
			{
				baseLayerTarget = GSI.GLOBALS.baseLayer.baseLayerList[i];
				break;
			}
		}
		
        if(baseLayerTarget || ( target && target.title_sys && target.title_sys == CONFIG.layerBaseFolderSYS ) ){
            var f = false;
            if(this.mapLayerList.exists(item)){
                f = true;
            }
            for( var i=0; i<GSI.GLOBALS.baseLayer.baseLayerList.length; i++ )
			{
				var baseLayer = GSI.GLOBALS.baseLayer.baseLayerList[i];
				if ( this.mapLayerList.exists( baseLayer ) )
				{
					this.mapLayerList.remove( baseLayer );
				}
			}
            if(f){
                GSI.GLOBALS.map.removeLayer(GSI.GLOBALS.baseLayer);
            }
            else{
                GSI.GLOBALS.map.addLayer(GSI.GLOBALS.baseLayer);
                this.mapLayerList.append(item);
			    GSI.Utils.sendSelectedLayer(this._current_id);
            }
        }
        else if ( target && target.title_evac && target.title_evac == CONFIG.layerEvacuationFolderSYS )
        {		
            var f = false;
            if(this.mapLayerList.exists(item)){
                f = true;
            }

            this._onHideAllClick();
            if(f == false){
                this.mapLayerList.append(item);
				if (GSI.Dialog._dialogManager.isVisibleDialog(GSI.GLOBALS.evacDialog) == false)
				{
					GSI.GLOBALS.evacDialog.show();
				}
    		    GSI.Utils.sendSelectedLayer(this._current_id);
            }
        }
        else
        {
			if(!this.mapLayerList.exists(item))
			{ 
				if ( item.id.indexOf("relief") >= 0 )
					this.mapLayerList.append(item, null, null, null, true);
				else
					this.mapLayerList.append(item);
				GSI.Utils.sendSelectedLayer(this._current_id);

			}
			else
			{
				this.mapLayerList.remove(item); 
			}
        }
	},
	onMapLayerListChange : function()
	{
		this._initializeList( this.current ? this.current.entries : ( this.tree ? this.tree[this._activeTabIndex].entries : true), true );
		this._toolTipViewCounter = 0;
	},
	_checkEvacuationLayer : function()
	{
	    if ( this.mapLayerList )
	    {
	    	var l = this.mapLayerList.getList();
	    	for(i = 0 ; i < l.length; i++ )
	    	{
	    		if ( l[i].id.indexOf(CONFIG.layerEvacuationHeader) >= 0 )
	    		{
	    			return true;
	    		}
	    	}
	    	var tl = this.mapLayerList.getTileList();

	    	for(i = 0 ; i < tl.length; i++ )
	    	{
	    		if ( tl[i].id.indexOf(CONFIG.layerEvacuationHeader) >= 0 )
	    		{
	    			return true;
	    		}
	    	}
	    }
	    return false;
	}
});

/************************************************************************
 L.Class
 - GSI.Dialog
   - GSI.HelpDialog (ヘルプダイアログ管理)
 ************************************************************************/
/*
GSI.HelpDialog = GSI.Dialog.extend( {
	options : {
		title: '<span id="title_help_dialog">？</span>メニュー（リンク）',
		width: '200px'
	},
	initialize : function(map,mapMouse, options)
	{
		this.map = map;
		this.mapMouse = mapMouse;

		GSI.Dialog.prototype.initialize.call(this, options);
	},
	show : function ()
	{
		GSI.Dialog.prototype.show.call(this);
	},
	hide : function ()
	{
		GSI.Dialog.prototype.hide.call(this);
	},
	createHeader : function()
	{
		this.title = $( '<div>' ).html( this.options.title );

		return $( '<div>' ).append( this.title );
	},
	createContent : function()
	{
		this.frame = $( '<div>' ).attr( {
			'style': 'padding:5px'
		} );
		
		for (var i = 0; i < CONFIG.HELPMENU.length; i++) {
			// リンク
			this.LinkFrame = $( '<div>' ).attr( {
				'style': 'height:20px; vertical-align:middle'
			} );
			this.LinkFrameHr = $( '<hr>' );
			this.Link = $( '<a>' ).attr( {
				'href'	: CONFIG.HELPMENU[i].Link,
				'target': '_blank',
				'style'	: 'color:#000; text-decoration:none'
			} );
			
			this.LinkImg = $( '<img>' ).attr( {
				'src'	: CONFIG.HELPMENU[i].Img,
				'border': '0',
				'width'	: '20px',
				'height': '20px',
				'style'	: 'vertical-align:middle',
				'alt'	: CONFIG.HELPMENU[i].Moji
			} );
			
			this.LinkMoji = $( '<span>' ).attr( {
				'style': 'line-height:20px; position:relative; top:2px; left:5px'
			} ).html( CONFIG.HELPMENU[i].Moji );
			this.LinkFrame.append( this.LinkImg).append( this.LinkMoji );
			this.Link.append( this.LinkFrame );
			if(i < CONFIG.HELPMENU.length -1 ){
				this.frame.append( this.Link ).append( this.LinkFrameHr );
			}else{
				this.frame.append( this.Link );
			}
		}
		return this.frame;
	}
});
*/

GSI.HelpDialog = L.Class.extend( {
	options : {
	},
	initialize : function(map,mapMouse, options)
	{
		this.map = map;
		this.mapMouse = mapMouse;
		this._blind = $( "<div>" )
			.click( L.bind( function(){this.hide();}, this) )
			.addClass( "help_window_blind" );
		
		this._frame = $( "<div>" ).addClass("help_window_frame");
		
		this._titleFrame = $("<div>").addClass( "help_window_content_title" );
		
		this._contentFrame = $("<div>").addClass("help_window_content_frame");
		
		
		this._contentFrame.on({
			/* フリック開始時 */
			'touchstart': L.bind( function(e) {
				this._touchX = e.originalEvent.changedTouches[0].pageX;
				this._touchStartX = this._touchX;
				this._accel = 0;
				//this._slideX = parseFloat($(this).position().left);
				this._touchY = e.originalEvent.changedTouches[0].pageY; //←縦方向のタッチ位置も取得
			}, this ),
			/* フリック中 */
			'touchmove': L.bind( function(e) {
				var moveX = this.touchX - e.originalEvent.changedTouches[0].pageX,
					moveY = this.touchY - e.originalEvent.changedTouches[0].pageY, //←縦方向のタッチ位置も取得
					moveRate = moveX / moveY; //←フリックした縦横の移動量の比率を計算

				//↓垂直方向から15度以上の方向にフリックした場合のみ、ページのスクロールをキャンセル
				if(moveRate > Math.tan(15 * Math.PI/180)) {
					e.preventDefault();
				}

				//this._slideX = this._slideX - (this._touchX - event.changedTouches[0].pageX );
				//$(this).css({left:this.slideX});
				this._accel = (e.originalEvent.changedTouches[0].pageX - this._touchX) * 5;
				this._touchX = e.originalEvent.changedTouches[0].pageX;
				this._touchEndX = this._touchX;
				
			}, this ),
			/* フリック終了 */
			'touchend': L.bind( function(e) {
				//this._slideX += this._accel;
				
				if ( Math.abs( this._touchEndX - this._touchStartX ) > 50 )
				{
					if ( this._accel > 1 )
						this.prev();
					else if ( this._accel < -1)
						this.next();
				}
				//console.log( this._slideX, this._accel, this._touchX );
				//$("#query").val(this._slideX + "/" + this._accel + "/" + this._touchX );
			}, this )
		});
		
		this._closeButton = $( "<a>")
			.attr({"href":"javascript:void(0);"})
			.click( L.bind( function(){this.hide();}, this) )
			.addClass("help_window_closebtn").html("×");
		
		this._titleFrame.append( $("<span>") );
		this._titleFrame.append( this._closeButton );
		this._frame.append( this._titleFrame);
		this._frame.append( this._contentFrame);
		
		
		this._nextButton = $("<a>")
			.attr( {
				"href":"javascript:void(0);"
			} )
			.addClass( "help_window_frame_button")
			.addClass( "help_window_frame_next_button")
			.html( "" )
			.click( L.bind( function(){this._nextButton.blur();this.next();}, this ) );
		
		
		this._prevButton = $("<a>")
			.attr( {
				"href":"javascript:void(0);"
			} )
			.addClass( "help_window_frame_button")
			.addClass( "help_window_frame_prev_button")
			.html( "" )
			.click( L.bind( function(){this._prevButton.blur();this.prev();}, this ) );
		
		
		this._frame.append( this._prevButton);
		this._frame.append( this._nextButton);
		
		
		this._contentList = [];
		this._selectedIndex = -1;
		
		$("#help .help_content").each( L.bind(function(index, elem) {
			this._contentList.push( {
				content : $( elem ).clone(),
				title : $( elem ).attr( "title" )
			});
		}, this )  );
		
		this.select(0);
		
		$( "body").append( this._blind);
		$( "body").append( this._frame);
		//GSI.Dialog.prototype.initialize.call(this, options);
	},
	
	next : function()
	{
		if ( this._contentList.length > this._selectedIndex+1)
			this.select(this._selectedIndex+1);
		else
			this.select(0);	
	},
	
	prev : function()
	{
		if ( 0 <= this._selectedIndex-1)
			this.select(this._selectedIndex-1);
		else
			this.select(this._contentList.length -1);	
			
	},
	
	select : function( index )
	{
		if ( this._contentList && this._contentList.length > index && index >= 0 )
		{
			if ( this._selectedIndex >= 0 )
			{
				this._contentFrame.fadeOut( 100, L.bind( function(){
					this._titleFrame.find("span").empty().append( this._contentList[index].title ); 
					this._contentFrame.empty().append( this._contentList[index].content );
					this._contentFrame.fadeIn( 100 );
				}, this));
			}
			else
			{
				this._titleFrame.find("span").empty().append( this._contentList[index].title ); 
				this._contentFrame.empty().append( this._contentList[index].content );
			}
			this._selectedIndex = index;
		}
		
	},
	getVisible : function()
	{
		return ( this._blind ? this._blind.is( ":visible" ) : false );
	},
	
	show : function ()
	{
		this._blind.fadeIn(200);
		this._frame.fadeIn(200);
	},
	hide : function ()
	{
		this._blind.fadeOut(200);
		this._frame.fadeOut(200);
	},
	create : function()
	{
		this.title = $( '<div>' ).html( this.options.title );

		return $( '<div>' ).append( this.title );
	}
});

GSI.HelpDialog.hide = function() {
	if ( GSI.GLOBALS.HelpDialog ) GSI.GLOBALS.HelpDialog.hide();
};

/************************************************************************
 L.Class
 - GSI.Dialog
   - GSI.MeasureDialog (計測ダイアログ管理)
 ************************************************************************/
GSI.MeasureDialog = GSI.Dialog.extend( {
	options : {
		title : GSI.TEXT.MEASURE.DIALOG_TITLE,
		width : "200px"
	},
	initialize : function(map,mapMouse, options)
	{
		this.map = map;
		this.mapMouse = mapMouse;

		GSI.Dialog.prototype.initialize.call(this, options);
	},
	onMeasureChange : function(e)
	{
		if ( this.measureLayer )
		{
			this.map.removeLayer( this.measureLayer );
			this.measureLayer = null;
		}
		this.distance.html( e.distance );
	},
	onMeasureTypeChange : function()
	{
		if ( this.measureLayer )
		{
			this.map.removeLayer( this.measureLayer );
			this.measureLayer = null;
		}

		this.stopMeasure();
		this.startMeasure();
	},
	onMeasurePathCreated : function(event)
	{
		this.measureLayer = event.layer;
		this.map.addLayer( event.layer );

		if ( this.polyLine )
		{
			this.polyLine.disable();
			this.polyLine = null;
		}

		if ( this.polygon )
		{
			this.polygon.disable();
			this.polygon = null;
		}

		if ( this.drawingItems )
		{
			this.map.removeLayer( this.drawingItems );
			this.drawingItems = null;
		}

		this.startMeasure();
	},
	startMeasure : function()
	{
		if ( this.drawingItems )  return;

		this.mapMouse.setClickMoveEnable( false );
		this.drawingItems = L.featureGroup().addTo(this.map);

		if ( this.distanceRadio.is(":checked") )
		{
			this.startDistanceMeasure();
		}
		else if ( this.areaRadio.is(":checked") )
		{
			this.startAreaMeasure();
		}
		else if ( this.featureRadio.is(":checked") )
		{
			this.startFeatureMeasure();
		}
	},
	startDistanceMeasure : function()
	{
		if ( this.polyLin ) return;
		L.drawLocal.draw.handlers.polyline.tooltip.start = '開始位置を選択';
		L.drawLocal.draw.handlers.polyline.tooltip.cont = '次の位置を選択(最終点を2回クリックして終了)';
		L.drawLocal.draw.handlers.polyline.tooltip.end = '次の位置を選択(最終点を2回クリックして終了)';

		this.polyLine =  new GSI.Draw.Polyline(this.map,{
			shapeOptions: {
				stroke: true,
				color: '#ee3333',
				weight: 2,
				opacity: 1,
				fill: false,
				clickable: true,
				dashArray : [3,3]
			},
			edit: { featureGroup: this.drawingItems },
			showLength : true
		});

		this.polyLine.on( 'measurechange',
			L.bind( this.onMeasureChange, this )
		);
		this.polyLine.enable();
	},
	startAreaMeasure : function()
	{
		if ( this.polygon ) return;
		L.drawLocal.draw.handlers.polygon.tooltip.start = '開始位置を選択';
		L.drawLocal.draw.handlers.polygon.tooltip.cont = '次の位置を選択';
		L.drawLocal.draw.handlers.polygon.tooltip.end = '次の位置を選択(最終点を2回クリックして終了)';

		this.polygon =  new GSI.Draw.Polygon(this.map,{
			shapeOptions: {
				stroke: true,
				color: '#ee3333',
				fillColor : '#ee3333',
				fillOpacity : 0.4,
				weight: 2,
				opacity: 1,
				fill: true,
				clickable: true,
				dashArray : [3,3]
			},
			edit: { featureGroup: this.drawingItems },
			showArea : true,
			allowIntersection : false

		});

		this.polygon.on( 'measurechange',
			L.bind( this.onMeasureChange, this )
		);
		this.polygon.enable();
	},
	onLayerClick : function(layer, e)
	{
		var latLngs = layer.getLatLngs();
		var distance = 0;
		var area = 0;
		var isPolygon = false;
		var geometryType = '';

		try
		{
			geometryType = layer.toGeoJSON().geometry.type;
			isPolygon = ( geometryType == "Polygon" );
		}
		catch( e ) {}

		if ( geometryType == "MultiPolygon" ) return;

		if ( isPolygon )
		{
			// 面積
			area = L.GeometryUtil.calc_area(latLngs);

			var areaStr = '';

			if (area >= 1000000) {
				areaStr = (area  / 1000000).toFixed(3) + 'km&sup2;';
			} else {
				areaStr = Math.ceil(area) + 'm&sup2;';
			}

			this.distance.html( '面積:'+ areaStr );
		}
		else
		{
			//距離
			for ( var i=1; i<latLngs.length; i++ )
			{
				distance += latLngs[i-1].distanceTo(latLngs[i]);
			}

			var distanceStr = '';

			if (distance > 1000) {
				distanceStr = (distance  / 1000).toFixed(3) + 'km';
			} else {
				distanceStr = Math.ceil(distance) + 'm';
			}

			this.distance.html( '距離:' + distanceStr);
		}
		return true;
	},
	startFeatureMeasure : function()
	{
		this.measureLayer = L.featureGroup();
		this.rectStyle = {color: "#ff3333", weight: 2, fill:false, opacity:0.5,dashArray : [3,3]};

		this.map.eachLayer(
			L.bind( function(layer){

				// ポリゴン、ライン(layer._layersはマルチポリゴン判定)以外は無視
				if ( !layer.getBounds || !layer.getLatLngs || layer._layers || layer._noMeasure ) return;

				if ( layer._measureClickHandler )
				{
					layer.off( 'click', layer._measureClickHandler );
					layer.off( 'touchend', layer._measureClickHandler );
				}
				layer._measureClickHandler = L.bind( this.onLayerClick, this, layer );

				layer.on( 'click', layer._measureClickHandler );
				this.measureLayer.addLayer( L.rectangle(layer.getBounds(), this.rectStyle) );

			}, this )
		);
		//drawingItems;
		this.map.addLayer( this.measureLayer );
	},
	stopMeasure : function()
	{
		this.map.eachLayer(
			L.bind( function(layer){
				if ( layer._measureClickHandler )
				{
					layer.off( 'click', layer._measureClickHandler );
				}
			}, this )
		);

		if ( this.measureLayer )
		{
			this.map.removeLayer( this.measureLayer );
			this.measureLayer = null;
		}
		this.mapMouse.setClickMoveEnable( true );
		this.distance.html( '------' );
		if ( this.polyLine )
		{
			this.polyLine.disable();
			this.polyLine = null;
		}

		if ( this.polygon )
		{
			this.polygon.disable();
			this.polygon = null;
		}

		if ( this.drawingItems )
		{
			this.map.removeLayer( this.drawingItems );
			this.drawingItems = null;
		}
	},
	show : function ()
	{
		if ( !this._onMeasurePathCreated )
		{
			this._onMeasurePathCreated = L.bind( this.onMeasurePathCreated, this );
			this.map.on('draw:created', this._onMeasurePathCreated );
		}
		this.startMeasure();
		GSI.Dialog.prototype.show.call(this);
	},
	hide : function ()
	{
		if ( this._onMeasurePathCreated )
		{
			this.map.off('draw:created', this._onMeasurePathCreated );
			this._onMeasurePathCreated = null;
		}

		this.stopMeasure();
		GSI.Dialog.prototype.hide.call(this);
	},
	createHeader : function()
	{
		this.title = $( '<div>' ).html( this.options.title );

		return $( '<div>' ).append( this.title );
	},
	createContent : function()
	{
		this.frame = $( '<div>' );
		this.radioFrame = $( '<div>' );

		// 距離
		this.distanceRadio = $( '<input>' ).attr( {
			'id' : 'GSI_MeasureDialog_distance',
			'type' : 'radio',
			'name' : 'measure',
			'checked' : true
		} ).click( L.bind( this.onMeasureTypeChange, this ) );
		this.distanceLabel = $( '<label>' ).attr( { 'for' : 'GSI_MeasureDialog_distance' } ).append( this.distanceRadio )
		.append( $( '<span>' ).html( GSI.TEXT.MEASURE.DIALOG_DISTANCE_CAPTION ) );

		// 面積
		this.areaRadio = $( '<input>' ).attr( {
			'id' : 'GSI_MeasureDialog_area',
			'type' : 'radio',
			'name' : 'measure',
			'checked' : false
		} ).click( L.bind( this.onMeasureTypeChange, this ) );
		this.areaLabel = $( '<label>' ).attr( { 'for' : 'GSI_MeasureDialog_area' } ).append( this.areaRadio )
		.append( $( '<span>' ).html(GSI.TEXT.MEASURE.DIALOG_AREA_CAPTION) );

		// 図形
		this.featureRadio = $( '<input>' ).attr( {
			'id' : 'GSI_MeasureDialog_feature',
			'type' : 'radio',
			'name' : 'measure',
			'checked' : false
		} ).click( L.bind( this.onMeasureTypeChange, this ) );
		this.featureLabel = $( '<label>' ).attr( { 'for' : 'GSI_MeasureDialog_feature' } ).append( this.featureRadio )
		.append( $( '<span>' ).html( GSI.TEXT.MEASURE.DIALOG_OBJECT_CAPTION ) );

		this.radioFrame.addClass( 'gsi_measuredialog_radiofrane' )
			.append( this.distanceLabel )
			.append( this.areaLabel )
			.append( this.featureLabel );

		// 結果
		this.distance = $( '<div>' ).html( '------' ).addClass( 'gsi_measuredialog_result' );

		this.frame.append( this.radioFrame ).append( this.distance );

		//計測値の説明
        this.infoBtn = $("<a>").attr({"href":"http://maps.gsi.go.jp/help/howtouse.html","target":"_blank"}).addClass('gsi_measuredialog_infobtn').html("計測値の説明");
        this.frame.append(this.infoBtn);
        
		return this.frame;
	}
});



/************************************************************************
 L.Class
 - GSI.Dialog
   - GSI.SakuzuDialog (作図ダイアログ管理)
 ************************************************************************/
GSI.SakuzuDialog = GSI.Dialog.extend( {
	options : {
		title : GSI.TEXT.SAKUZU.DIALOG_TITLE
	},
	initialize : function(map, sakuzuList, options)
	{
		this._map = map;
		this._sakuzuList = sakuzuList;

		this._sakuzuList.on( 'change', L.bind( function(){ this._refreshList(); }, this ) );
		this._sakuzuList.on( 'load', L.bind( this._onFileLoad, this ) );
		this._sakuzuList.on( 'startedit', L.bind( this._onStartEdit, this ) );
		this._sakuzuList.on( 'circlechange', L.bind( this._onCircleChange, this ) );
		this._sakuzuList.on( 'visiblechange', L.bind( this._onVisibleChange, this ) );
		this._sakuzuList.on( 'ready', L.bind( this._onSakuzuItemReady, this ) );

		GSI.Dialog.prototype.initialize.call(this, options);
	},
	setMaxScrollHeight : function( maxHeight ){},
	createHeader : function()
	{
		this._title = $( '<div>' ).html( this.options.title );

		return $( '<div>' ).append( this._title );
	},
	createContent : function()
	{
		this._sakuzuFrame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_frame' );
		return this._sakuzuFrame;
	},
	_createTopPanel : function()
	{
		// 初期画面
		if ( this._topPanel ) return;

		this._topPanel = $( '<div>' );

		this._topPanelToolBar = this._createTopPanelToolbar();
		this._topPanelList = this._createTopPanelList();
		this._topPanel.append( this._topPanelToolBar );
		this._topPanel.append( this._topPanelList );

		this._sakuzuFrame.append( this._topPanel );
	},
	_createTopPanelToolbar : function()
	{
		var frame =  $( "<div>" ).addClass( 'gsi_sakuzu_dialog_modeselect' );
		var btn = null;

		// ファイル
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_fileopen.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_LOAD}).css( { 'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, "file_load") );
		frame.append( btn );

		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_filesave.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_SAVE}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, "file_save") );
		frame.append( btn );

		frame.append( $('<img>').addClass( 'sep' ).attr({ 'src' : 'image/sakuzu/toolbar_sep.png'}).css(
			{ 'margin-left':'4px',  'margin-right':'5px', 'width':'2px', 'height': '26px'} ) );

		// ポイント
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_mark.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDMARKER}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.POINT) );
		frame.append( btn );

		// ポイント（マーカー）
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_markc.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDCIRCLEMARKER}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.POINT_CIRCLE) );
		frame.append( btn );

		// 線
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_line.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDLINE }).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.LINESTRING) );
		frame.append( btn );

		// ポリゴン
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_polygon.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDPOLY}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.POLYGON) );
		frame.append( btn );

		// 円
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_circle.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDCIRCLE }).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.CIRCLE) );
		frame.append( btn );

		// ポイント(テキスト)
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_text.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDDIVMARKER}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.POINT_TEXT) );
		frame.append( btn );

		// フリーハンド
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_freehand.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDFREEHAND}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.FREEHAND) );
		frame.append( btn );

		frame.append( $('<div>').css( { clear:'both'} ) );

		return frame;
	},
	_createTopPanelList : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_list' );
		this._listTable = $( '<table>' ).css( { 'width' : '100%'} );
		this._listTBody = $( '<tbody>' );

		this._refreshList(true);
		this._listTable.append( this._listTBody );
		frame.append( this._listTable );

		return frame;
	},
	_onVisibleChange : function( event )
	{
		this._refreshList();
	},
	_refreshList : function()
	{
		this._listTBody.empty();

		this._sakuzuList.eachItems( L.bind( function( item ) {
			item._viewData = {};

			var tr = $( '<tr>' );
			var td = null;
			var id = 'GSI_SakuzuDialog_check' + GSI.Utils.getCurrentID() ;

			// 表示チェック
			var checkBox = $( '<input>' ).attr( { 'id': id, 'type' : 'checkbox', 'checked' : item.getVisible() } ).addClass( 'normalcheck' );
			checkBox.click( L.bind( function(checkBox,item){
				item.setVisible( checkBox.is( ':checked' ) );
			}, this, checkBox, item ) );

			item._viewData.checkbox = checkBox;

			var label = $( '<label>' ).attr( {'for': id} ).html( item.getTitle() );
			// 名称
			var title = $( '<div>' ).append( checkBox ).append( label )
				.css( { "word-break": "break-all"} )
				.addClass('folder');

			// レイヤー数
			var layerCount = item.getLayerCount();
			var num = $( '<span>' ).addClass( 'num' ).html( layerCount );

			td = $( '<td>' ).append( title ).css( { 'width' : '100%', "word-break": "break-all"} );
			tr.append( td );

			// ボタン類
			td = $( '<td>' ).css({"text-align":"right"}).append( num );
			tr.append( td );

			var buttonClassName = 'normalbutton sakuzubutton' + ( layerCount <= 0 ? ' disabled' : '' );
			var editBtn = $( '<a>' ).attr( {"href":"javascript:void(0);"} ).html( GSI.TEXT.SAKUZU.DIALOG_LIST_EDITBTN ).addClass(buttonClassName);
			td = $( '<td>' ).append( editBtn );
			tr.append( td );

			var clearBtn = $( '<a>' ).attr( {"href":"javascript:void(0);"} ).html( GSI.TEXT.SAKUZU.DIALOG_LIST_REMOVEBTN ).addClass(buttonClassName);
			td = $( '<td>' ).append( clearBtn );
			tr.append( td );
			this._listTBody.append( tr );
			
			// アイコンラベル
			tr = $( '<tr>' );
			id = 'GSI_SakuzuDialog_label_check' + GSI.Utils.getCurrentID() ;
			var checkbox2 = $( '<input>' ).attr( { 'id': id, 'type' : 'checkbox', 'checked' : item.getIconLabelVisible()} ).addClass( 'normalcheck' );
			
			checkbox2.click( L.bind( function(checkBox2,item){
				item.setIconLabelVisible(checkBox2.is( ':checked' ) );
				
			}, this, checkbox2, item ) );
			
			label = $( '<label>' ).attr( {'for': id} ).html( GSI.TEXT.SAKUZU.DIALOG_LIST_VISIBLEICONLABELBTN );
			td = $( '<td>' ).attr({"colspan":4, "align":"right"}).append(checkbox2).append( label );
			tr.append( td );
			this._listTBody.append( tr );
			
			
			editBtn.click( L.bind( this._onEditSakuzuItemClick, this, item ) );
			clearBtn.click( L.bind( this._clearLayer, this, item ) );
		}, this ) );
	},
	_clearLayer : function( item )
	{
		if ( item.getLayerCount() > 0 )
		{
			if ( !confirm( GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVELAYERCONFIRMMSG ) ) return;
		}
		
		item.remove();
	},
	_toolBtnClick : function( btnId )
	{
		if ( btnId == 'file_load' )
		{
			this._showFileLoadPanel();
		}
		else if ( btnId == 'file_save' )
		{
			this._showFileSavePanel();
		}
		else
		{
			this._showEditPanel( btnId );
		}
	},
	_createFileLoadPanel : function()
	{
		// ファイル読込パネル
		if ( this._fileLoadPanel ) return;
		this._fileLoadPanel = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_fileloadpanel' ).hide();

		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_fileload' );

		if ( !GSI.Utils.hasFileAPI )
		{
			if ( (GSI.Utils.Browser.ie) && (GSI.Utils.Browser.version == 9) )
			{
				frame.append( $('<div>').addClass( 'message' ).html( GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT_IE9 ) );
			}
			else
			{
				frame.append( $('<div>').addClass( 'message' ).html( GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT_IE8) );
			}
			var fileNameFrame = $( '<div>' );

			this._fileLoadNameInput = $( '<input>' ).attr( {'type':'text'} );
			this._fileLoadTextarea = $( '<textarea>' ).attr( {'wrap':'off'} );

			fileNameFrame.append( $('<span>').html( GSI.TEXT.SAKUZU.DIALOG_LOAD_FILENAMECAPTION ) );
			fileNameFrame.append( this._fileLoadNameInput );
			frame.append( fileNameFrame );
			frame.append( this._fileLoadTextarea );
		}
		else
		{
			frame.append( $('<div>').addClass( 'message' ).html( GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT ) );
			this._fileLoadInput = $('<input>').attr( { type:"file"} );

			frame.append( this._fileLoadInput );
		}

		this._fileLoadPanel.append( frame );

		// OKCancel
		this._fileLoadOkCancelFrame = this._createFileLoadOkCancel();
		this._fileLoadPanel.append( this._fileLoadOkCancelFrame  );

		this._sakuzuFrame.append( this._fileLoadPanel );
	},

	_createFileLoadOkCancel : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_okcancel' );
		var okBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_LOAD_OKBTN ).addClass( 'normalbutton' );
		var cancelBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_LOAD_CANCELBTN ).addClass( 'normalbutton' );

		okBtn.click( L.bind( this._onFileLoadOkClick, this ) );
		cancelBtn.click( L.bind( this._onFileLoadCancelClick, this ) );

		frame.append( okBtn ).append( cancelBtn );

		return frame;
	},
	_onFileLoadOkClick : function()
	{
		if ( this._fileLoadInput )
		{
			var files = this._fileLoadInput.prop( 'files' );
			if( !files ) files = this._fileLoadInput.attr( 'files' );

			if ( files && files.length > 0 )
			{
				this._sakuzuList.loadFromFile( files );
			}
			else
			{
				alert( GSI.TEXT.SAKUZU.DIALOG_LOAD_NOFILE );
			}
		}
		else
		{
			var text = $.trim( this._fileLoadTextarea.val() );
			if ( text != '' )
			{
				var fileName = $.trim( this._fileLoadNameInput.val() );

				this._sakuzuList.loadFromText( text, fileName && fileName != '' ? fileName : null );
			}
			else
			{
				alert( GSI.TEXT.SAKUZU.DIALOG_LOAD_NOTEXT );
			}
		}
	},
	_onFileLoad : function( event )
	{
		if ( event.error )
		{
			alert( GSI.TEXT.SAKUZU.DIALOG_LOAD_ERROR );
		}
		else
		{
			if ( this._fileLoadTextarea )
			{
				this._fileLoadTextarea.focus();
				this._fileLoadTextarea.val('');
				this._fileLoadNameInput.val( '' );
			}
			this._showTopPanel( this._fileLoadPanel );
		}
	},
	_onFileLoadCancelClick : function()
	{
		this._showTopPanel( this._fileLoadPanel );
	},
	_createFileSavePanel : function()
	{
		// ファイル保存パネル
		if ( this._fileSavePanel ) return;
		this._fileSavePanel = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_filesavepanel' ).hide();

		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_filesave' );

		frame.append( $('<div>').addClass( 'message' ).html(GSI.TEXT.SAKUZU.DIALOG_SAVE_COMMENT) );
		frame.append( $('<div>').addClass( 'message2' ).html(GSI.TEXT.SAKUZU.DIALOG_SAVE_COMMENT2) );

		var selectFrame = $( '<div>' ).addClass( 'selectframe' );
		var id = 'GSI_SakuzuDialog_check' + GSI.Utils.getCurrentID() ;

		var radio = $( '<input>' ).attr( { id: id, type:"radio", name:"gsi_sakuzu_dialog_savetype", value:"kml"} ).addClass( 'normalcheck' );
		var label = $( '<label>' ).attr( {'for': id} ).html( 'KML形式' );
		selectFrame.append( radio );
		selectFrame.append( label );

		radio.click( L.bind( this._onSaveTypeChange, this, radio ) );

		id = 'GSI_SakuzuDialog_check' + GSI.Utils.getCurrentID() ;
		var radio = $( '<input>' ).attr( { id: id, type:"radio", name:"gsi_sakuzu_dialog_savetype", value:"geojson"} ).addClass( 'normalcheck' );
		var label = $( '<label>' ).attr( {'for': id} ).html( 'GeoJSON形式' );
		selectFrame.append( radio );
		selectFrame.append( label );

		radio.click( L.bind( this._onSaveTypeChange, this, radio ) );

		frame.append( selectFrame );

		this._fileSaveTextarea = $( '<textarea>' ).attr( {'wrap':'off'} ).css( { 'readonly': 'readonly' } );
		frame.append( this._fileSaveTextarea );

		this._fileSavePanel.append( frame );

		// OKCancel
		this._fileSaveOkCancelFrame = this._createFileSaveOkCancel();
		this._fileSavePanel.append( this._fileSaveOkCancelFrame  );

		this._sakuzuFrame.append( this._fileSavePanel );
	},
	_createFileSaveOkCancel : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_okcancel' );
		var okBtn = '';
		if (!GSI.Utils.hasFileAPI)
		{
			okBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_SAVE_OKBTN_CLIPBOARD ).css( {width:"150px"} ).addClass( 'normalbutton' );
			this._fileSaveOkBtn = okBtn;
			this._initializeFileSaveCopy();
		}
		else
		{
			okBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_SAVE_OKBTN).css( {width:"140px"} ).addClass( 'normalbutton' );
			this._fileSaveOkBtn = okBtn;
			this._fileSaveOkBtn.click( L.bind( this._onFileSaveOkClick, this ) );
		}
		var cancelBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_SAVE_CANCELBTN ).css( {width:"70px"} ).addClass( 'normalbutton' );

		cancelBtn.click( L.bind( this._onFileSaveCancelClick, this ) );

		frame.append( okBtn ).append( cancelBtn );

		return frame;
	},
	_initializeFileSaveCopy : function()
	{
		if ( !this._zeroClipboard  )
		{
			this._zeroClipboard = new ZeroClipboard(this._fileSaveOkBtn[0] );//.attr({ id: 'fe_text' })[0]);

			this._zeroClipboard.on( 'ready', L.bind( function() {

				this._zeroClipboard.on( 'beforecopy', L.bind( function() {
					this._zeroClipboard.setText(this._fileSaveTextarea.val());
					alert( 'クリップボードにコピーしました' );
				},this ) );

				this._zeroClipboard.on( 'aftercopy', L.bind( function() {
				},this ) );
			},this ));
		}
	},
	_onSaveTypeChange : function(radio)
	{
		this._fileSaveTextarea.focus();
		switch( radio.val() )
		{
			case 'kml':
				this._fileSaveTextarea.val( this._sakuzuList.toKML() );
				break;

			case 'geojson':
				this._fileSaveTextarea.val( this._sakuzuList.toGeoJSON() );
				break;
		}

		if ( this._fileSaveTextarea.val() != '' )
		{
			this._fileSaveOkBtn.removeClass( 'disabled' );
		}
		else
		{
			this._fileSaveOkBtn.addClass( 'disabled' );
		}
	},
	_onFileSaveOkClick : function()
	{
		if ( this._fileSaveTextarea.val() == '' ) return false;

		var ext = ".kml";
		var contentType = "application/vnd.google-earth.kml+xml";

		if ( this._fileSavePanel.find( "input[name=gsi_sakuzu_dialog_savetype]:checked" ).val() == 'geojson' )
		{
			ext = ".geojson";
			contentType = "application/json";
		}

		var fileName = 'gsi' + GSI.Utils.getTimeStampString() + ext;
		var blob = new Blob([this._fileSaveTextarea.val()], { "type" : contentType});

		if ( window.navigator.msSaveOrOpenBlob )
		{
			window.navigator.msSaveOrOpenBlob( blob, fileName );
		}
		else
		{
			window.URL = window.URL || window.webkitURL;
			this._fileSaveOkBtn.attr( {
					"download" :fileName,
					"href" : window.URL.createObjectURL(blob),
					"target" : "_blank"
				});
		}

		this._showTopPanel( this._fileSavePanel );
	},
	_onFileSaveCancelClick : function()
	{
		this._showTopPanel( this._fileSavePanel );
	},
	_createEditPanel :function()
	{
		// 編集パネル
		if ( this._editPanel ) return;

		this._editPanel = $( '<div>' ).hide();
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_edit' );

		// ポイント編集
		this._pointEditFrame = this._createPointEditFrame();
		frame.append( this._pointEditFrame  );

		// 線編集
		this._lineEditFrame = this._createLineEditFrame();
		frame.append( this._lineEditFrame  );

		// 塗りつぶし編集
		this._fillEditFrame = this._createFillEditFrame();
		frame.append( this._fillEditFrame  );

		// 円編集
		this._circleEditFrame = this._createCircleEditFrame();
		frame.append( this._circleEditFrame  );

		// 情報編集
		this._infoEditFrame = this._createInfoEditFrame();
		frame.append( this._infoEditFrame  );

		this._editRemoveBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVEBTN  ).addClass( 'removebtn' ).click( L.bind( this.onEditRemoveClick, this ) );

		this._editRemoveBtnFrame = $( '<div>' ).addClass( "gsi_sakuzu_dialog_edit_removeframe" ).append( this._editRemoveBtn );
		frame.append( this._editRemoveBtnFrame );
		this._editPanel.append( frame );

		// OKCancel
		this._editOkCancelFrame = this._createEditOkCancel();
		this._editPanel.append( this._editOkCancelFrame  );

		this._sakuzuFrame.append( this._editPanel );
	},
	_createEditOkCancel : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_okcancel' );

		var okBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_EDIT_OKBTN ).addClass( 'normalbutton' );
		var cancelBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELBTN  ).addClass( 'normalbutton' );

		this._editOkBtn = okBtn;
		this._editCancelBtn = cancelBtn;
		okBtn.click( L.bind( this._onEditOkClick, this ) );
		cancelBtn.click( L.bind( this.onEditCancelClick, this ) );

		frame.append( okBtn ).append( cancelBtn );

		return frame;
	},
	_makeEditInfo : function()
	{
		var result = {
			title : this._titleInput.val(),
			description : null,
			table: null
		};

		if ( this._infoFreeWordTextarea.is( ':visible' ) )
		{
			result.description = this._infoFreeWordTextarea.val();
		}
		else
		{
			result.table = [];
			var keyTextAreaList = this._infoTableTbody.find( "textarea[name=info_table_key]" );
			var valueTextAreaList = this._infoTableTbody.find( "textarea[name=info_table_value]" );

			for ( var i=0;i<keyTextAreaList.length; i++ )
			{
				var item ={
					key : $( keyTextAreaList[i]).val(),
					value : $( valueTextAreaList[i]).val()
				};
				if ( item.key != '' )
					result.table.push( item);
			}
		}
		return result;
	},
	_onEditOkClick :function() {
		this._clearPointEditTextareaCheckTimer();

		if ( this._editingTarget && !this._editingTarget.isReady() ) 
		{
			if ( this._editingTarget._editingPathList )
			{
				for( var i= 0; i<this._editingTarget._editingPathList.length; i++ )
				{
					if ( this._editingTarget._editingPathList[i].completeShape )
						this._editingTarget._editingPathList[i].completeShape();
				}
			}
			
			return;
		}
		var editMode = GSI.SakuzuListItem.NONE;
		if ( this._editingTarget )
		{
			this._editingTarget.setEditingInfo(this._makeEditInfo());

			editMode = this._editingTarget.editMode;
			this._editingTarget.editFinish();
			if ( editMode != GSI.SakuzuListItem.EDIT )
			{
				this._editingTarget = null;
			}
			
			if ( this._editingTarget && this._editingTarget._layer )
			{
				this._editingTarget._layer._edited = true;
			}
		}

		if ( editMode != GSI.SakuzuListItem.EDIT )
		{
			this._editPanel.fadeOut( 'normal',
				L.bind(
				function()
				{
					this._startCreate( this._currentCreateId );
					this._editPanel.fadeIn( 'normal' );
				},
				this )
			);
		}
		else
		{
			this._showSelectEditTargetPanel( null, this._editPanel );
		}
	},
	onEditCancelClick :function() {
		this._clearPointEditTextareaCheckTimer();

		if ( this._editingTarget && this._editingTarget.isReady() )
		{
			if ( this._editingTarget.editMode != GSI.SakuzuListItem.EDIT )
			{
				if ( !window.confirm( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELCONFIRMMSG) ) return;
			}
		}

		var editMode = GSI.SakuzuListItem.NONE;
		if ( this._editingTarget )
		{
			editMode = this._editingTarget.editMode;
			this._editingTarget.editCancel();
			if ( editMode != GSI.SakuzuListItem.EDIT )
			{
				this._editingTarget = null;
			}
		}
		GSI.GLOBALS.sakuzuList._defaultIcon.url = CONFIG.SAKUZU.SYMBOL.URL + CONFIG.SAKUZU.SYMBOL.DEFAULTICON;
		GSI.GLOBALS.sakuzuList._defaultIcon._iconScale = CONFIG.SAKUZU.SYMBOL.ICON_SCALE;

		if ( editMode != GSI.SakuzuListItem.EDIT )
		{
			this._showTopPanel( this._editPanel );
		}
		else
		{
			this._showSelectEditTargetPanel( null, this._editPanel );
		}
	},
	onEditRemoveClick :function() {
		var editMode = GSI.SakuzuListItem.NONE;
		if ( this._editingTarget )
		{
			editMode = this._editingTarget.editMode;
			if ( editMode == GSI.SakuzuListItem.EDIT )
			{
				if ( !confirm( GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVECONFIRMMSG ) ) return;

				this._editingTarget.removeEditObject();
				this._showSelectEditTargetPanel( null, this._editPanel );
			}
		}
	},
	_createPointEditFrame : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_pointedit' );

		this._pointEditMarkerFrame = $( '<div>' );

		var table = $( '<table>' );
		var tbody = $( '<tbody>' );

		this._pointIconImage = $( '<img>');

		var tr = $( '<tr>' );
		tr.append( $( '<td>' ).css( {'white-space':'nowrap'} ).html( 'アイコン:' ) );
		tr.append( $( '<td>' ).append( this._pointIconImage ) );
		tr.append( $( '<td>' ).css( {'white-space':'nowrap'} ).html( '&nbsp;&nbsp;拡大率:' ) );

		this._pointIconSizeSelect = $( '<select>' );
		this._pointIconSizeSelect.append( $( '<option>' ).html("0.5").val("0.5" ) );
		this._pointIconSizeSelect.append( $( '<option>' ).html("1.0").val("1.0" ) );
		this._pointIconSizeSelect.append( $( '<option>' ).html("1.5").val("1.5" ) );
		this._pointIconSizeSelect.append( $( '<option>' ).html("2.0").val("2.0" ) );

		this._pointIconSizeSelect[0].selectedIndex = 1;
		this._pointIconSizeSelect.on( 'change',  L.bind( this._onPointIconSizeChange, this ) );

		tr.append( $( '<td>' ).append( this._pointIconSizeSelect ) );

		tbody.append( tr );
		table.append( tbody );

		this._pointEditMarkerFrame .append( table );
		frame.append( this._pointEditMarkerFrame  );

		this._pointEditTextFrame  = $( '<div>' ).css({position:"relative"});
		var messageFrame = $( "<div>" ).addClass("gsi_sakuzu_dialog_pointedit_textmessage_frame" ).css({position:"relative"});
		messageFrame .append( $( '<div>' ).addClass( "gsi_sakuzu_dialog_pointedit_textmessage" )
				.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_MSG ));
		this._pointEditTextModeButton = $( "<a>" ).addClass("gsi_sakuzu_dialog_pointedit_textmode_btn").attr({href:"javascript:void(0);"}).html( "HTML入力に切り替え" );
		messageFrame .append( this._pointEditTextModeButton);
		
		this._pointEditTextFrame.append( messageFrame );
		
		this._pointEditTextModeButton.click( L.bind( function(){
			if ( this._pointEditTextArea.val() != "" && !this._pointEditTextArea.hasClass("textmode") )
			{
				if ( !confirm( 'スタイル等の情報が失われる可能性があります。よろしいですか？' ) ) return;
			}
			this._setPointTextMode( !this._pointEditTextArea.hasClass("textmode"), this._pointEditTextArea.val() );
		}, this ) );
		
		this._pointEditTextArea = $( '<textarea>' )
			.attr( { 'placeholder': GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_HINT} )
			.addClass( 'gsi_sakuzu_dialog_pointedit_textarea' ).addClass( 'textmode' );
		this._pointEditTextFrame .append( this._pointEditTextArea);
		frame.append( this._pointEditTextFrame  );

		this._pointEditTextArea
			.on( 'focus', L.bind( function(){
				if ( !this._pointEditTextareaCheckTimer )
				{
					this._pointEditTextareaCheckTimer = setInterval(
						L.bind( function() {
							this._onPointIconHTMLChange();
						}, this )
					, 100);
				}
			}, this ) )
			.on( 'blur', L.bind( function(){
				this._clearPointEditTextareaCheckTimer();
				this._onPointIconHTMLChange();
			}, this ) );
		
		this._pointEditTextStyleFrame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_pointedit_text_style_frame' );
		
		// font-family
		/*
		var fontFamilyFrame = $( '<div>' ).addClass('font_family_select_frame');
		this._pointEditTextFontFamilySelect = $( '<select>' ).addClass( 'font_family_select' );
		fontFamilyFrame.append( this._pointEditTextFontFamilySelect );
		this._pointEditTextStyleFrame.append( fontFamilyFrame );
		
		this._pointEditTextFontFamilySelect
				.append($('<option>')
				.html("フォントを選択")
				.val(""));
		
		for ( var i=0; i<CONFIG.SAKUZU.FONTFAMILYLIST.length; i++ )
		{
			this._pointEditTextFontFamilySelect
				.append($('<option>')
				.html(CONFIG.SAKUZU.FONTFAMILYLIST[i])
				.val(CONFIG.SAKUZU.FONTFAMILYLIST[i]));
		}
		
		this._pointEditTextFontFamilySelect
			.on( 'change', L.bind( function(){
				this._onPointIconHTMLChange();
			}, this ) );
			
		*/
		// font-size
		this._pointEditTextFontSizeSelect = $( '<select>' ).addClass( 'font_size_select' );
		this._pointEditTextStyleFrame.append( this._pointEditTextFontSizeSelect );
		
		this._pointEditTextFontSizeSelect
				.append($('<option>')
				.html("文字サイズ")
				.val(""));
				
		for ( var i=0; i<CONFIG.SAKUZU.FONTSIZELIST.length; i++ )
		{
			this._pointEditTextFontSizeSelect
				.append($('<option>')
				.html(CONFIG.SAKUZU.FONTSIZELIST[i])
				.val(CONFIG.SAKUZU.FONTSIZELIST[i]));
		}
		
		
		
		this._pointEditTextFontSizeSelect
			.on( 'change', L.bind( function(){
				this._onPointIconHTMLChange();
			}, this ) );
		
		// bold
		this._pointEditTextFontBoldButton = $( '<a>' ).addClass( 'font_bold_btn' ).attr({href:"javascript:void(0);"}).html("");
		this._pointEditTextStyleFrame.append( this._pointEditTextFontBoldButton );
		this._pointEditTextFontBoldButton
			.on( 'click', L.bind( function(){
				this._pointEditTextFontBoldButton.data({ '_bold' : this._pointEditTextFontBoldButton.data('_bold') ? false: true } );
				if ( this._pointEditTextFontBoldButton.data('_bold') )
					this._pointEditTextFontBoldButton.addClass( 'enabled' );
				else
					this._pointEditTextFontBoldButton.removeClass( 'enabled' );
				this._onPointIconHTMLChange();
			}, this ) );
			
			
		
		// italic
		this._pointEditTextFontItalicButton = $( '<a>' ).addClass( 'font_italic_btn' ).attr({href:"javascript:void(0);"}).html("");
		this._pointEditTextStyleFrame.append( this._pointEditTextFontItalicButton );
		this._pointEditTextFontItalicButton
			.on( 'click', L.bind( function(){
				this._pointEditTextFontItalicButton.data({ '_italic' : this._pointEditTextFontItalicButton.data('_italic') ? false: true } );
				
				if ( this._pointEditTextFontItalicButton.data('_italic') )
					this._pointEditTextFontItalicButton.addClass( 'enabled' );
				else
					this._pointEditTextFontItalicButton.removeClass( 'enabled' );
				this._onPointIconHTMLChange();
			}, this ) );
		
		// underline
		this._pointEditTextFontUnderlineButton = $( '<a>' ).addClass( 'font_underline_btn' ).attr({href:"javascript:void(0);"}).html("");
		this._pointEditTextStyleFrame.append( this._pointEditTextFontUnderlineButton );
		this._pointEditTextFontUnderlineButton
			.on( 'click', L.bind( function(){
				this._pointEditTextFontUnderlineButton.data({ '_underline' : this._pointEditTextFontUnderlineButton.data('_underline') ? false: true } );
				if ( this._pointEditTextFontUnderlineButton.data('_underline') )
					this._pointEditTextFontUnderlineButton.addClass( 'enabled' );
				else
					this._pointEditTextFontUnderlineButton.removeClass( 'enabled' );
				
				this._onPointIconHTMLChange();
			}, this ) );
		
		
		
			
		// color
		var id = 'GSI_SakuzuDialog_lineColor_' + GSI.Utils.getCurrentID() ;
		this._pointEditTextFontColorButton = $( '<a>' ).addClass( 'color_btn' ).attr({id:id,href:"javascript:void(0);"}).html("");
		this._pointEditTextStyleFrame.append( this._pointEditTextFontColorButton );
		this._pointEditTextFontColorButton.simpleColorPicker({
			showEffect: 'slide',
			hideEffect: 'slide',
			clearButton : true,
			onChangeColor: L.bind( function( color ){
				if ( color && color != '' )
				{
					this._pointEditTextFontColorButton.find("div").css( {"background-color":color} );
					this._pointEditTextFontColorButton.addClass( 'enabled' );
				}
				else
				{
					this._pointEditTextFontColorButton.find("div").css( {"background-color":""} );
					this._pointEditTextFontColorButton.removeClass( 'enabled' );
				}
				this._pointEditTextFontColorButton.data({ '_color' : color } );
				this._onPointIconHTMLChange();
			}, this )
		});
		
		this._pointEditTextFontColorButton .append( $("<div>") );
		
		// background-color
		id = 'GSI_SakuzuDialog_lineColor_' + GSI.Utils.getCurrentID() ;
		this._pointEditTextFontBGColorButton = $( '<a>' ).addClass( 'background_color_btn' ).attr({id:id,href:"javascript:void(0);"}).html("");
		this._pointEditTextStyleFrame.append( this._pointEditTextFontBGColorButton );
		
		this._pointEditTextFrame.append( this._pointEditTextStyleFrame );
		this._pointEditTextFontBGColorButton.simpleColorPicker({
			showEffect: 'slide',
			hideEffect: 'slide',
			clearButton : true,
			onChangeColor: L.bind( function( color ){
				if ( color && color != '' )
				{
					this._pointEditTextFontBGColorButton.find("div").css( {"background-color":color} );
					this._pointEditTextFontBGColorButton.addClass( 'enabled' );
				}
				else
				{
					this._pointEditTextFontBGColorButton.find("div").css( {"background-color":""} );
					this._pointEditTextFontBGColorButton.removeClass( 'enabled' );
				}
				this._pointEditTextFontBGColorButton.data({ '_bgcolor' : color } );
				this._onPointIconHTMLChange();
			}, this )
		});
		this._pointEditTextFontBGColorButton .append( $("<div>") );
		
		
		
		
		var iconList = [];

		for ( var i=0; i<CONFIG.SAKUZU.SYMBOL.FILES.length; i++ )
		{
			iconList.push( {
				url : CONFIG.SAKUZU.SYMBOL.URL + CONFIG.SAKUZU.SYMBOL.FILES[i],
				size : CONFIG.SAKUZU.SYMBOL.ICONSIZE,
				anchor : CONFIG.SAKUZU.SYMBOL.ICONANCHOR
			} );
		}

		this._pointIconSelector = new GSI.IconSelector( this._pointIconImage, iconList );
		this._pointIconSelector.on( 'select', L.bind( this._onPointIconSelect, this ) );
		this._setPointTextMode( true );
		return frame;
	},
	_clearPointEditTextareaCheckTimer : function()
	{
		if ( this._pointEditTextareaCheckTimer )
		{
			clearTimeout( this._pointEditTextareaCheckTimer );
			this._pointEditTextareaCheckTimer = null;
		}
	},
	_refreshEditingIcon : function( selectedIcon )
	{
		var iconScale = parseFloat( this._pointIconSizeSelect.val() );
		var iconSize = null;
		var iconAnchor = null;

		if ( selectedIcon )
		{
			iconSize = [
				Math.floor( selectedIcon.size[0] * iconScale ),
				Math.floor( selectedIcon.size[1] * iconScale )
			];
			iconAnchor = [
				Math.floor( selectedIcon.anchor[0] * iconScale ),
				Math.floor( selectedIcon.anchor[1] * iconScale )
			];
		}

		var iconInfo = {
			iconUrl : ( selectedIcon ? selectedIcon.url : null ),
			iconSize : iconSize,
			iconAnchor : iconAnchor,
			_iconScale: iconScale
		};
		this._refreshEditing( { _iconInfo: iconInfo });
		if( iconInfo.iconUrl != null )
		{
			GSI.GLOBALS.sakuzuList._defaultIcon.url = iconInfo.iconUrl;
			GSI.GLOBALS.sakuzuList._defaultIcon._iconScale = iconInfo._iconScale;

			var nPos = iconInfo.iconUrl.lastIndexOf( "/" );
			if( nPos != -1 )
			{
				var sFileName = iconInfo.iconUrl.substr( nPos + 1 );
				CONFIG.SAKUZU.SYMBOL.DEFAULTICON = sFileName;
			}
		}
	},
	_refreshEditingIconHTML : function( html )
	{
		this._refreshEditing( { _iconInfo: { html : html } });
	},
	
	_pointEditTextToHTML : function(text)
	{
		
		
		// テキストモード
		var fontSize = this._pointEditTextFontSizeSelect.val();
		var style = '';
		if ( fontSize && fontSize != '' )
			style += "font-size:" + fontSize + 'pt;'
		
		if ( this._pointEditTextFontBoldButton.data('_bold') )
			style += "font-weight:bold;";
		if ( this._pointEditTextFontItalicButton.data('_italic') )
			style += "font-style:italic;";
		if ( this._pointEditTextFontUnderlineButton.data('_underline') )
			style += "text-decoration:underline;";
		if ( this._pointEditTextFontColorButton.data( '_color' ) && this._pointEditTextFontColorButton.data( '_color' ) != '' )
			style += "color:" + this._pointEditTextFontColorButton.data( '_color' ) + ";";
		if ( this._pointEditTextFontBGColorButton.data( '_bgcolor' ) && this._pointEditTextFontBGColorButton.data( '_bgcolor' ) != '' )
			style += "background-color:" + this._pointEditTextFontBGColorButton.data( '_bgcolor' ) + ";";
		
		
		if ( style != '' )
			text = '<div style="' + style + '">' + text.replace(/\n/g, '<br>') + '</div>';
		else
		    text = text.replace(/\n/g, '<br>');
		    
		return text;
	},
	
	
	_onPointIconHTMLChange : function()
	{
		if ( this._pointEditTextArea.hasClass( "textmode" ) )
		{
			var text =  this._pointEditTextToHTML(this._pointEditTextArea.val());
			
			if ( this._pointEditTextArea.data("start_text") == text )
			{
				this._refreshEditingIconHTML( this._pointEditTextArea.data("html_text") );
			}
			else
				this._refreshEditingIconHTML(  text);
		}
		else
		{
			this._refreshEditingIconHTML( this._pointEditTextArea.val() );
		}
	},
	_onPointIconSizeChange : function()
	{
		var selectedIcon = this._pointIconSelector.selectedIcon;
		CONFIG.SAKUZU.SYMBOL.ICON_SCALE = parseFloat( this._pointIconSizeSelect.val() );
		this._refreshEditingIcon( selectedIcon );
	},
	_onPointIconSelect : function(event)
	{
		this._refreshEditingIcon( event.selectedIcon );
	},
	_createLineEditFrame : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_lineedit' );
		var editFrame = $( '<div>' ).css( { 'vertical-align' : 'middle'} );
		var table = $( '<table>' );
		var tbody = $( '<tbody>' );
		var tr = $( '<tr>' );

		tr.append( $( '<td>' ).css({"white-space":"nowrap"}).html( '線幅:' ) );

		this._lineWeightSelect = $( '<select>' );
		this._lineWeightSelect.append ( $('<option>').html("1px").val("1") );
		this._lineWeightSelect.append ( $('<option>').html("3px").val("3") );
		this._lineWeightSelect.append ( $('<option>').html("5px").val("5") );
		this._lineWeightSelect.append ( $('<option>').html("10px").val("10") );
		this._lineWeightSelect.append ( $('<option>').html("15px").val("15") );
		this._lineWeightSelect.append ( $('<option>').html("25px").val("25") );
		this._lineWeightSelect.change( L.bind( function(){
			this._refreshEditing( { weight:this._lineWeightSelect.val() });
		}, this ) );

		tr.append( $( '<td>' ).append( this._lineWeightSelect ) );
		tr.append( $( '<td>' ).css({"white-space":"nowrap"}).html( '&nbsp;&nbsp;線色:' ) );

		var id = 'GSI_SakuzuDialog_lineColor_' + GSI.Utils.getCurrentID() ;

		this._lineColorSelector = $( '<div>' ).attr({id:id}).css( {"background":'#000'} ).html( '　　' ).addClass( 'color_select' );
		this._lineColorSelector.simpleColorPicker({
			showEffect: 'slide',
			hideEffect: 'slide',
			onChangeColor: L.bind( function( color ){
				this._lineColorSelector.css({ 'background' : color });
				this._refreshEditing( { color:color });
			}, this )
		});

		tr.append( $( '<td>' ).append( this._lineColorSelector  ) );

		tbody.append(tr );
		table.append( tbody );
		editFrame.append( table );

		// 透明度
		var table2 = $( '<table>' );
		var tbody2 = $( '<tbody>' );
		var tr2 = $( '<tr>' );

		this._lineOpacityTextArea = $( '<div>' ).css({"white-space":"nowrap"});
		this._lineOpacityTextArea.text('線の透過率:0%');
		tr2.append( $( '<td>' ).css( { 'width':'120px' }).append( this._lineOpacityTextArea ) );

		var td2 = $( '<td>' ).css( { 'width':'150px',"padding":"4px 0 4px 8px"} );

		var sliderChangeHandler = L.bind( function(opacitySlider) {
			opacity = this._lineOpacitySlider.slider( 'value' );
			var opacityPercentage = opacity;
			this._lineOpacityTextArea.text('線の透過率:'+opacityPercentage+'%');
			opacity = 1 - ( opacity / 100 );
			this._refreshEditing( { opacity:opacity });
		}, this );

		this._lineOpacitySlider = $( '<div>' ).slider(
			{
				range: "min",min: 0,max: 100, value: 0,
				"slide" : sliderChangeHandler,
				"change" : sliderChangeHandler,
				"stop" : sliderChangeHandler
			}
		);

		td2.append( this._lineOpacitySlider );
		tr2.append ( td2 );

		tbody2.append(tr2 );
		table2.append(tbody2 );

		editFrame.append( table2 );

		frame.append( editFrame );

		return frame;
	},
	_createFillEditFrame : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_filledit' );
		var editFrame = $( '<div>' ).css( { 'vertical-align' : 'middle'} );
		var table = $( '<table>' );
		var tr = $( '<tr>' );
		var id = 'GSI_SakuzuDialog_fillColor_' + GSI.Utils.getCurrentID() ;

		tr.append( $( '<td>' ).css({"white-space":"nowrap"}).html( '塗潰し色:' ) );
		this._fillColorSelector = $( '<div>' ).attr({id:id}).css( {"background":'#000'} ).html( '　　' ).addClass( 'color_select' );
		this._fillColorSelector.simpleColorPicker({
			showEffect: 'slide',
			hideEffect: 'slide',
			onChangeColor: L.bind( function( color ){
				this._fillColorSelector.css({ 'background' : color });
				this._refreshEditing( { fillColor:color });
			}, this )
		});
		tr.append( $( '<td>' ).append(this._fillColorSelector) );

		table.append(tr );
		editFrame.append( table );

		// 透明度
		var table2 = $( '<table>' );
		var tbody2 = $( '<tbody>' );
		var tr2 = $( '<tr>' );

		this._fillOpacityTextArea = $( '<div>' ).css({"white-space":"nowrap"});
		this._fillOpacityTextArea.text('塗潰しの透過率:0%');
		tr2.append( $( '<td>' ).css( { 'width':'150px' }).append( this._fillOpacityTextArea ) );

		var td2 = $( '<td>' ).css( { 'width':'150px',"padding":"4px 0 4px 8px"} );

		var sliderChangeHandler = L.bind( function(opacitySlider) {
			opacity = this._fillOpacitySlider.slider( 'value' );
			var opacityPercentage = opacity;
			this._fillOpacityTextArea.text('塗潰しの透過率:'+opacityPercentage+'%');
			opacity = 1 - ( opacity / 100 );
			this._refreshEditing( { fillOpacity:opacity });
		}, this );

		this._fillOpacitySlider = $( '<div>' ).slider(
			{
				range: "min",min: 0,max: 100, value: 0,
				"slide" : sliderChangeHandler,
				"change" : sliderChangeHandler,
				"stop" : sliderChangeHandler
			}
		);

		td2.append( this._fillOpacitySlider );
		tr2.append ( td2 );

		tbody2.append(tr2 );
		table2.append(tbody2 );

		editFrame.append( table2 );

		frame.append( editFrame );

		return frame;
	},
	_createCircleEditFrame : function()
	{
		var frame = $( '<div>' );
		var table = $( '<table>' );
		var tbody = $( '<tbody>' );
		var tr = $( '<tr>' );
		var td = null;

		td = $( '<td>' ).html('半径:').css( { "white-space":"nowrap"} );
		tr.append( td );

		td = $( '<td>' );
		this._circleRadiusInput = $( '<input>' ).attr( { 'type':'text' } ).addClass( 'circle_input');
		this._circleRadiusChangeHandler = L.bind( this._onCircleRadiusChange,this);
		this._circleRadiusInput.on( "keyup", this._circleRadiusChangeHandler );
		this._circleRadiusInput.on( "blur", this._circleRadiusChangeHandler );

		td.append( this._circleRadiusInput );
		tr.append( td );

		td = $( '<td>' );
		this._circleRadiusUnitSelect = $( '<select>' );
        this._circleRadiusUnitSelect.append ( $('<option>').html("px").val("px") );
    	this._circleRadiusUnitSelect.append ( $('<option>').html("m").val("m") );
	    this._circleRadiusUnitSelect.append ( $('<option>').html("km").val("km") );

		this._circleRadiusUnitChangeHandler = L.bind( this._onCircleRadiusUnitChange,this);
		this._circleRadiusUnitSelect.on( "change", this._circleRadiusUnitChangeHandler);

		td.append( this._circleRadiusUnitSelect );
		tr.append( td );

		tbody.append( tr);
		table.append( tbody );
		frame.append( table );

		return frame;
	},
	_onCircleChange : function( event )
	{
        var vLatLng = event.latlng;
        var vRadius = event.radius;
        var vUnit   = event.unit;

        if(this.id == GSI.SakuzuListItem.POINT_CIRCLE){
            this._circleRadiusInput.val(parseInt(vRadius, 10));
        }
        else{
		    this._circleRadiusInput.val(vRadius);
		    this._circleRadiusUnitSelect.val(vUnit);
		    this._onCircleRadiusChange();
        }
	},
	_onCircleRadiusUnitChange : function()
	{
		var radius = this._circleRadiusInput.val();
		if( this._circleRadiusUnitSelect.val() == 'km' )
		{
			radius /= 1000;
            radius = radius.toFixed(4);
		}
		else
		{
			radius *= 1000;
			radius = radius.toFixed(1);
		}
		
		this._circleRadiusInput.val(radius);
		radius = parseFloat( radius );
		this._circleRadiusInput.val( radius );
	},
	_onCircleRadiusChange : function()
	{
		var radius = this._circleRadiusInput.val();

		if(radius.match(/^[0-9]+\.[0-9]+$/) || radius.match(/^[0-9]+$/))
		{
			radius = parseFloat( radius );
			if( this._circleRadiusUnitSelect.val() == 'km' )
			{
				radius *= 1000;
			}
			
            radius = radius.toFixed(1);
			this._refreshEditing( { radius: parseFloat(radius) });
		}
	},
	_createInfoEditFrame : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_infoedit' );
		var table = $( '<table>' ).css( { width:'100%'} );
		var tbody = $( '<tbody>' );
		var tr = $( '<tr>' );

		tr.append( $( '<td>' ).css( { 'white-space':'nowrap'} ).html('名称:') );
		var td = $( '<td>' );

		this._titleInput = $( '<input>' ).addClass( 'inputtext').attr({'type':'text', 'placeholder':'(例:A図書館)'}).css( { width:'200px'} );
		td.append( this._titleInput );
		tr.append( td );

		tbody.append(tr );
		table.append( tbody );
		frame.append( table );

		// 情報
		this._toggleInfoBtn = $( '<a>' ).html( GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOFREE_BTN).attr( { 'href' : 'javascript:void(0);' } ).addClass( 'toggleinfobtn' )
			.click( L.bind( function(){

			if ( this._infoFreeWordTextarea.is( ':visible' ) )
			{
				this._infoFreeWordTextarea.fadeOut( 'fast', L.bind( function(){
					this._toggleInfoBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOFREE_BTN );
					this._infoTable.fadeIn('fast');
				}, this ) );
			}
			else
			{
				this._infoTable.fadeOut( 'fast', L.bind( function(){
					this._toggleInfoBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOTABLE_BTN );
					var description =  this._infoTableToFreeWordText();
					this._infoFreeWordTextarea.focus();
					if ( description != '' ) this._infoFreeWordTextarea.val(description );
					this._infoFreeWordTextarea.fadeIn('fast');
				}, this ) );
			}

		}, this ) );

		frame.append( this._toggleInfoBtn );

		this._infoTable = $( '<table>' ).attr({border:0}).css( { width:'100%'} );
		var tbody = $( '<tbody>' );

		this._infoTableTbody = tbody;
		this._infoTable.append( tbody );

		frame.append( this._infoTable );

		this._infoFreeWordTextarea = $( '<textarea>' ).attr( {'wrap':'off'} ).addClass( 'inputtextarea').css( { height:'100px','width' : '100%', "margin-top": "2px" } ).hide();
		frame.append( this._infoFreeWordTextarea );

		return frame;
	},
	_createSelectEditTargetPanel : function(item)
	{
		if ( !this._selectEditTargetPanel )
		{
			this._selectEditTargetPanel = $( '<div>' ).addClass('gsi_sakuzu_dialog_selecttarget_panel').hide();

			var title = $( '<div>' ).addClass('title');
			var message = $( '<div>' ).html( '編集するオブジェクトを選択してください').addClass('message');
			var btnFrame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_okcancel' );
			var cancelBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( '編集終了' ).addClass( 'normalbutton' );

			cancelBtn.click( L.bind( this._onSelectEditTargetCancelClick, this ) );
			btnFrame.append( cancelBtn );
			this._selectEditTargetPanel.append( title );
			this._selectEditTargetPanel.append( message );
			this._selectEditTargetPanel.append( btnFrame );

			this._sakuzuFrame.append( this._selectEditTargetPanel );
		}
		this._selectEditTargetPanel.find( '.title' ).html( item.getTitle() );
	},
	_onSelectEditTargetCancelClick : function()
	{
		if ( this._editingTarget )
		{
			this._editingTarget.editSelectFinish();
			this._editingTarget = null;
		}

		this._showTopPanel(this._selectEditTargetPanel);
	},
	setTitle : function(title)
	{
		this._title .html( title );
	},
	hide : function ()
	{
		if ( this._editingTarget )
		{
			if( !confirm(GSI.TEXT.SAKUZU.DIALOG_HIDECONFIRMMSG) ) return;
			this._editingTarget.editSelectFinish();
			this._editingTarget = null;
		}
		this._clearPointEditTextareaCheckTimer();

		GSI.Dialog.prototype.hide.call(this);
	},
	show : function ()
	{
		if ( this._selectEditTargetPanel ) this._selectEditTargetPanel.hide();
		if ( this._fileLoadPanel ) this._fileLoadPanel.hide();
		if ( this._fileSavePanel ) this._fileSavePanel.hide();
		if ( this._editPanel ) this._editPanel.hide();

		this._showTopPanel();
		GSI.Dialog.prototype.show.call(this);
	},
	_showTopPanel : function( beforePanel )
	{
		this._createTopPanel();

		this.container .css( { height: 'auto'} );
		if ( beforePanel )
		{
			beforePanel.fadeOut( 'normal', L.bind( function() {
				this.setTitle( GSI.TEXT.SAKUZU.DIALOG_TITLE );
				this._topPanel.fadeIn( 'fast' );
			}, this ) );
		}
		else
		{
			this.setTitle( GSI.TEXT.SAKUZU.DIALOG_TITLE );
			this._topPanel.show();
		}
	},
	_onEditSakuzuItemClick : function( item )
	{
		this._showSelectEditTargetPanel(item);
	},
	_showSelectEditTargetPanel : function( item, beforePanel )
	{
		this._createSelectEditTargetPanel(item ? item : this._editingTarget);

		if ( !beforePanel ) beforePanel = this._topPanel;

		this.container .css( { height: 'auto'} );
		beforePanel.fadeOut( 'normal', L.bind( function(item) {

			if ( item ) this._startSelectEditTarget(item);
			this._selectEditTargetPanel.fadeIn( 'normal' );

		}, this, item ) );
	},
	_initEditFrame : function( id )
	{
		
		
        this.id = id;
		this._pointEditFrame[ id== GSI.SakuzuListItem.POINT || id== GSI.SakuzuListItem.POINT_TEXT || id == GSI.SakuzuListItem.MULTIPOINT ? 'show' : 'hide' ]();
		this._lineEditFrame[ id == GSI.SakuzuListItem.MULTILINESTRING || id == GSI.SakuzuListItem.MULTIPOLYGON || id== GSI.SakuzuListItem.LINESTRING || id== GSI.SakuzuListItem.POLYGON || id== GSI.SakuzuListItem.CIRCLE || id== GSI.SakuzuListItem.POINT_CIRCLE || id== GSI.SakuzuListItem.FREEHAND ? 'show' : 'hide' ]();
		this._fillEditFrame[ id == GSI.SakuzuListItem.MULTILINESTRING || id == GSI.SakuzuListItem.MULTIPOLYGON || id== GSI.SakuzuListItem.POLYGON || id== GSI.SakuzuListItem.CIRCLE || id== GSI.SakuzuListItem.POINT_CIRCLE ? 'show' : 'hide' ]();
		this._circleEditFrame[ id== GSI.SakuzuListItem.CIRCLE || id== GSI.SakuzuListItem.POINT_CIRCLE ? 'show' : 'hide' ]();
	},
	_showEditPanel : function( id )
	{
        this.id = id;
		this._createEditPanel();
		this._initEditFrame(id);
		this._infoEditFrame.show();

		this.container .css( { height: 'auto'} );
		this._topPanel.fadeOut( 'normal', L.bind( function(id) {

			this._startCreate(id);
			this._editPanel.fadeIn( 'normal' );

		}, this, id ) );
	},
	_startSelectEditTarget : function( item )
	{
		this._editingTarget = item;
		this._editingTarget.startSelectTarget();
	},
	_onStartEdit : function( event )
	{
		if ( this._editingTarget )
		{
			this._createEditPanel();
			this._initEditFrame(event.itemType);
			this._infoEditFrame.show();

			this.container .css( { height: 'auto'} );
			this._selectEditTargetPanel.fadeOut( 'normal', L.bind( function(event) {

				this._startEdit(event.itemType, event.layer);
				this._editPanel.fadeIn( 'normal' );

			}, this, event ) );
		}
	},
	
	_setPointTextMode : function(textMode, text)
	{
		if ( textMode )
		{
			
			this._pointEditTextFrame .find( "div.gsi_sakuzu_dialog_pointedit_textmessage" )
				.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_TEXTMODE_MSG );
			this._pointEditTextArea.attr( { 'placeholder': GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_TEXTMODE_HINT } );
			var fontFamily = "";
			var fontSize = "";
			var bold = false;
			var italic = false;
			var underline = false;
			var color = "";
			var bordering = "";
			var backgroundColor = "";
			if ( !text || text == "" )
			{
				
				this._pointEditTextArea.data( {"start_text":"", "html_text" : ""} );
				this._pointEditTextArea.val("");
			}
			else
			{
				var a = $( "<div>" ).html( text );
				var children = a.children();
				if ( children.length > 0 )
				{
					fontSize = parseInt( $(children[0]).css( "font-size" ) );
					
					var fontWeight = $(children[0]).css( "font-weight" );
					if ( fontWeight && fontWeight != 'normal' )
						bold = true;
					
					var fontStyle = $(children[0]).css( "font-style" );
					if ( fontStyle && fontStyle == 'italic' )
						italic = true;
					
					var fontUnderline = $(children[0]).css( "text-decoration" );
					if ( fontUnderline && fontUnderline == 'underline' )
						underline = true;
					color =  $(children[0]).css( "color" );
					backgroundColor =  $(children[0]).css( "background-color" );
					if ( color == "transparent" ) color = "";
					if ( backgroundColor == "transparent" ) backgroundColor = "";
					//text-shadow
					bordering = "";
					this._pointEditTextArea.val(a.html(a.html().replace(/<br>/ig, "\n" )).text());
				}
				else
				{
					this._pointEditTextArea.val(text);
                }
			}
			
			this._pointEditTextFontSizeSelect.val(fontSize );
			this._pointEditTextFontBoldButton.data({"_bold":bold})[ ( bold ? "add" : "remove" ) + "Class"]( 'enabled' );
			this._pointEditTextFontItalicButton.data({"_italic":italic})[ ( italic ? "add" : "remove" ) + "Class"]( 'enabled' );
			this._pointEditTextFontUnderlineButton.data({"_underline":underline})[ ( underline ? "add" : "remove" ) + "Class"]( 'enabled' );
			this._pointEditTextFontColorButton.data({"_color":color})[ ( color && color != '' ? "add" : "remove" ) + "Class"]( 'enabled' );
			this._pointEditTextFontColorButton.find("div").css( {"background-color" : color && color != '' ? color : ""} );
			this._pointEditTextFontBGColorButton.data({"_bgcolor":backgroundColor})[ ( backgroundColor && backgroundColor != ''  ? "add" : "remove" ) + "Class"]( 'enabled' );
			this._pointEditTextFontBGColorButton.find("div").css( {"background-color" : backgroundColor && backgroundColor != '' ? backgroundColor : ""} );
			
			this._pointEditTextArea.data( {"start_text":this._pointEditTextToHTML(this._pointEditTextArea.val()), "html_text" : text} );
			
			
			this._pointEditTextModeButton.html( 'HTML入力に切替' );
			this._pointEditTextArea.addClass( "textmode" );
			this._pointEditTextStyleFrame.show();
		}
		else
		{
			if ( this._pointEditTextArea.data("start_text") == this._pointEditTextToHTML(text) )
			{
				text = this._pointEditTextArea.data("html_text")
			}
			else
			{
				text = this._pointEditTextToHTML(text);
				
			}
			this._pointEditTextArea.data( {"start_text":"", "html_text" : ""} );
			
			
			this._pointEditTextFrame .find( "div.gsi_sakuzu_dialog_pointedit_textmessage" )
				.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_MSG );
			
			this._pointEditTextArea.attr( { 'placeholder': GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_HINT } );
			if ( !text )
				this._pointEditTextArea.val("");
			else
				this._pointEditTextArea.val(text);
			this._pointEditTextModeButton.html( 'テキスト入力に切替' );
			this._pointEditTextArea.removeClass( "textmode" );
			this._pointEditTextStyleFrame.hide();
			
		}
	},
	
	_setControlStyle : function( style )
	{
		if ( !style ) return;

		// ポイント
		if ( style.icon )
		{
			if ( !style.icon.options.iconUrl && ( style.icon.options.html || style.icon.options.html == '' ) )
			{
				var text = style.icon.options.html ;
				/*
				if ( !style.icon.options.html || style.icon.options.html == '' )
				{
					this._setPointTextMode( true, text );
				}
				else
				{
					this._setPointTextMode( false,text );
				}
				*/
				this._setPointTextMode( true, text );
				
				this._pointEditMarkerFrame.hide();
				this._pointEditTextFrame.show();
			}
			else
			{
				this._pointIconImage.attr( { src: style.icon.options.iconUrl } );
				this._pointIconSelector.setSelectedIcon(  style.icon.options.iconUrl );
				this._pointIconSizeSelect.val( parseFloat( style.icon.options._iconScale ).toFixed(1) );
				this._pointEditTextFrame.hide();
				this._pointEditMarkerFrame.show();
			}
		}

		// 線
		if ( style.color )
		{
			this._lineWeightSelect.val( style.weight );
			this._lineColorSelector.css( { background:style.color } );//.ColorPickerSetColor(style.color);
			var opacity = style.opacity;
			opacity = Math.round( ( 1-opacity ) * 100 );
			this._lineOpacitySlider.slider( "value", opacity );
		}

		// 塗りつぶし
		if ( style.fillColor )
		{
			this._fillColorSelector.css( { background:style.fillColor } );//.ColorPickerSetColor(style.fillColor);
			var opacity = style.fillOpacity;
			opacity = Math.round( ( 1-opacity ) * 100 );
			this._fillOpacitySlider.slider( "value", opacity );
		}
		
        this._circleRadiusUnitSelect.children('option').remove();

		// 円
        if(this.id == GSI.SakuzuListItem.POINT_CIRCLE){
            this._circleRadiusUnitSelect.append ( $('<option>').html("px").val("px") );
            this._circleRadiusUnitSelect.val("px");

            if ( this._editingTarget.editMode == GSI.SakuzuListItem.EDIT ){
                this._circleRadiusInput.val(style.radius);
            }
            else{
                this._circleRadiusInput.val("");
            }
        }
        else{
    	    this._circleRadiusUnitSelect.append ( $('<option>').html("m").val("m") );
	        this._circleRadiusUnitSelect.append ( $('<option>').html("km").val("km") );

		    if ( style.radius || style.radius == 0 )
		    {
                try
                {
    			    if ( style.radius  > 1000 )
    			    {
                        this._circleRadiusInput.val( ( style.radius / 1000 ).toFixed(4) );
                        this._circleRadiusUnitSelect.val('km');
                    }
                    else
                    {
                    
                        this._circleRadiusInput.val( style.radius.toFixed(1) );
                        this._circleRadiusUnitSelect.val('m');
                    }
                }
                catch( e ){}
            }
            else
            {
                this._circleRadiusInput.val( '' );
                this._circleRadiusUnitSelect.val('m');
            }
        }
	},
	_createEditInfoTableLine : function( no, key, value )
	{
		tr = $( '<tr>' );
		td = $( '<td>' ).css( { 'width' : '30%', 'vertical-align':'middle' } );

		var nameTextarea = $( '<textarea>' ).addClass( 'inputtextarea')
			.attr( { name: 'info_table_key', 'placeholder':'(例:営業時間)', rows:1} )
			.css( { 'display':'block','width' : '100%' } ).val( key ? key : '' );
		td.append( nameTextarea );
		tr.append( td );
		td = $( '<td>' );

		var valueTextarea = $( '<textarea>' ).addClass( 'inputtextarea')
			.css({'display':'block',width:"100%"})
			.attr( { name: 'info_table_value', 'placeholder':'(例:10時～18時)',rows:1} ).val( value ? value : '' );
		td.append( valueTextarea );
		tr.append( td );
			
		td = $( '<td>' ).css( { width:"24px","text-align":"center"} );

		var btn = $( '<a>' ).attr( { 'href' : 'javascript:void(0);'} ).addClass( "btn" )
			.html( '<img title="この行を削除" src="image/sakuzu/icon_remove.png">' )
			.click( L.bind(
				function(tr){
					var no = 0;
					var trList = this._infoTableTbody.find( 'tr' );
					for ( var i=0; i<trList.length; i++ )
					{
						if ( trList[i] == tr[0] )
						{
							no = i;
							break;
						}
					}
					if ( no == 1 && trList.length <= 2 )
					{
						tr.find( 'textarea' ).val("" );
					}
					else
					{
						tr.fadeOut( 'fast', function(){
							$(this).remove();
						} );
					}
				},
			this, tr ) );

		td.append( btn );
		tr.append( td );

		td = $( '<td>' ).css( { width:"24px","text-align":"center"} );
		var btn = $( '<a>' ).attr( { 'href' : 'javascript:void(0);'} ).addClass( "btn" )
			.html( '<img title="この下に行を追加" src="image/sakuzu/icon_enter.png">' )
			.click( L.bind(
				function(tr){

					var insertTr = this._createEditInfoTableLine( 0, "","" );
					insertTr.hide();
					insertTr.insertAfter( tr );
					insertTr.fadeIn( 'fast' );
				},
			this, tr ) );
		td.append( btn );
		tr.append( td );

		return tr;
	},
	_infoTableToFreeWordText : function()
	{
		var keyList = this._infoTableTbody.find( "textarea[name=info_table_key]" );
		var valueList = this._infoTableTbody.find( "textarea[name=info_table_value]" );

		var trHtml = '';
		for ( var i=0; i<keyList.length; i++ )
		{
			var key = $( keyList[i] ).val();
			var value = $( valueList[i] ).val();

			if ( key != '' )
			{
				trHtml += '<tr><td>' + GSI.Utils.encodeHTML(key) + '</td><td>' + GSI.Utils.encodeHTML(value) + '</td></tr>' + '\n';
			}
		}

		if ( trHtml != '' )
		{
			return '<table>\n' + trHtml + '</table>';
		}
		else
		{
			return '';
		}
	},
	_initEditInfo : function( info )
	{
		if ( info && info.title )
			this._titleInput.val(info.title);
		else
			this._titleInput.val( '' );

		if ( info && info.description )
			this._infoFreeWordTextarea.val(info.description);
		else
			this._infoFreeWordTextarea.val( '' );

		this._infoTableTbody.empty();

		if ( info && info.description && info.description != '' )
		{
			this._toggleInfoBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOTABLE_BTN );
			this._infoTable.hide();
			this._infoFreeWordTextarea.show();
		}
		else
		{
			this._toggleInfoBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOFREE_BTN );
			this._infoFreeWordTextarea.hide();
			this._infoTable.show();
		}
		// ヘッダ
		var tr = $( '<tr>' );
		var td = $( '<td>' ).css( { 'width' : '30%', 'white-space':'nowrap'} ).html( '項目名' );
		tr.append( td );
		td = $( '<td>' ).attr( { "colspan":"3"} ).html( '値' );
		tr.append( td );
		this._infoTableTbody.append(tr );

		if ( !info || !info.table || info.table.length <= 0 )
		{
			var tr = this._createEditInfoTableLine(0);
			this._infoTableTbody.append( tr );
			return;
		}

		for ( var i=0; i<info.table.length; i++ )
		{
			var item = info.table[i];

			var tr = this._createEditInfoTableLine(i,item.key, item.value);
			this._infoTableTbody.append( tr );
		}
	},
	_onSakuzuItemReady : function()
	{
		this._editOkBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_OKBTN ).removeClass('disabled' );
		this._editCancelBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCEL2BTN );
	},
	_startEdit : function(itemType, layer)
	{
		this._editRemoveBtnFrame.show(); //removeClass('disabled' );
		this._editOkBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_OKBTN ).removeClass('disabled' );
		this._editCancelBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCEL2BTN );
		
		this._editingTarget.startEdit(itemType, layer);
		this._setControlStyle( this._editingTarget.getEditingStyle() );
		this._initEditInfo( this._editingTarget.getEditingInfo() );
	},
	_startCreate : function( id )
	{
		switch(id)
		{
		case GSI.SakuzuListItem.POLYGON:
		case GSI.SakuzuListItem.MULTIPOLYGON:
		case GSI.SakuzuListItem.LINESTRING:
		case GSI.SakuzuListItem.MULTILINESTRING:
			this._editOkBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_OK2BTN ).addClass('disabled' );
			this._editCancelBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELBTN );
			break;
		default:
			this._editOkBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_OKBTN ).addClass('disabled' );
			this._editCancelBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELBTN );
			break;
		}
		this._editRemoveBtnFrame.hide(); //.addClass('disabled' );
	
		this._editingTarget =this._sakuzuList.getSakuzuItem();
		this._editingTarget.startCreate(id);
		this._currentCreateId = id;
		
		this._setControlStyle( this._editingTarget.getEditingStyle() );
		this._initEditInfo( this._editingTarget.getEditingInfo() );
		
		if ( this._editingTarget._editingPathList )
		{
			for( var i=0; i<this._editingTarget._editingPathList.length; i++ )
			{
				if ( 
					this._editingTarget._editingPathList[i] instanceof GSI.Draw.Polygon ||
					this._editingTarget._editingPathList[i] instanceof GSI.Draw.Polyline )
				{
				
					this._editingTarget._editingPathList[i].on( "measurechange", L.bind( function(path) {
						if ( path._markers )
						{
							if ( path instanceof GSI.Draw.Polygon )
							{
								if ( path._markers.length < 3 ) 
									this._editOkBtn.addClass('disabled' );
								else
									this._editOkBtn.removeClass('disabled' );
								if ( path._markers.length >= 1 )
									this._editCancelBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCEL2BTN );
								else
									this._editCancelBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELBTN );
								
							}
							else if (path instanceof GSI.Draw.Polyline)
							{
								if ( path._markers.length < 2 ) 
									this._editOkBtn.addClass('disabled' );
								else
									this._editOkBtn.removeClass('disabled' );
								if ( path._markers.length >= 1 )
									this._editCancelBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCEL2BTN );
								else
									this._editCancelBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELBTN );
							}
						}
					}, this, this._editingTarget._editingPathList[i] ) );
				}
			}
		}
	},
	_refreshEditing : function( style )
	{
		this._editingTarget.setEditingStyle(style);
	},
	_showFileLoadPanel : function()
	{
		this._createFileLoadPanel();

		this.container .css( { height: 'auto'} );
		this._topPanel.fadeOut( 'normal', L.bind( function() {

			this._fileLoadPanel.fadeIn( 'normal' );

		}, this ) );
	},
	_showFileSavePanel : function()
	{
		this._createFileSavePanel();

		this._fileSaveOkBtn.addClass( 'disabled' );
		this._fileSavePanel.find( 'input' ).attr( {checked:false} ).prop( {checked:false} );
		this._fileSaveTextarea.focus();
		this._fileSaveTextarea.val( '' );
		this._fileSaveOkBtn.removeAttr( "download").attr({ "href" : 'javascript:void(0);' });

		this.container .css( { height: 'auto'} );

		this._topPanel.fadeOut( 'normal', L.bind( function() {

			this._fileSavePanel.fadeIn( 'normal' );

		}, this ) );
	}
} );

/************************************************************************
 L.Class
 - GSI.Dialog
   - GSI.SearchResultDialog
 ************************************************************************/
GSI.SearchResultDialog = GSI.Dialog.extend( {
	options : {
		title : '検索',
		maxMarkerNum:30
	},
	initialize : function(map,options)
	{
		this.map = map;
		GSI.Dialog.prototype.initialize.call(this, options);
	},
	setTitle : function( title )
	{
		var subTitle = $( '<a>' ).html( "協力:東大CSIS" ).addClass( 'searchresultdialog_subtitle' )
			.css( {'font-size':'7pt'} ).attr('href', 'http://newspat.csis.u-tokyo.ac.jp/geocode/')
			.attr('target', '_blank');

		this.title.html( title ).append( subTitle );
	},
	_onResize : function()
	{
		GSI.Dialog.prototype._onResize.call(this);

		var height = this.container.outerHeight( false )
			- this.headerFrame.outerHeight( true )
			- this.selectFrame.outerHeight( true ) - 8;

		this.listFrame.css( { "max-height": 'none', height: height + 'px'} );
	},
	createHeader : function()
	{
		this.title = $( '<div>' ).html( this.options.title );

		return $( '<div>' ).append( this.title );
	},
	hide : function ()
	{
		if ( this.markerList ) this.map.removeLayer( this.markerList );
		GSI.Dialog.prototype.hide.call(this);
	},
	createContent : function()
	{
		this.frame = $( '<div>' );
		var selectFrame = $( '<div>' ).addClass( "searchresultdialog_select_frame" );
		this.selectFrame = selectFrame;

		this.kenSelect = $( '<select>' ).css( {'width': '48%'} );
		selectFrame.append( this.kenSelect  );
		this.shiSelect = $( '<select>' ).css( {'width': '48%', 'margin-left' : '4px'} );
		selectFrame.append( this.shiSelect );

		this.initializeKenSelect();

		this.kenSelect.change( L.bind( this.onKenChange, this) );
		this.shiSelect.empty();
		this.shiSelect.append( $('<option>').html("市区町村").val("," ) );
		this.shiSelect.change( L.bind( this.onShiChange, this) );

		selectFrame.append( this.kenSelect ).append( this.shiSelect );

		this.frame.append( selectFrame );

		this.listFrame = $( '<div>' ).addClass( 'searchresultdialog_ul_frame' );
		this.listContainer = $( '<ul>' ).addClass( 'searchresultdialog_ul' );

		var li = $( '<li>' ).addClass( 'nodata' ).html( '中' );
		this.listContainer.append( li );
		this.listFrame.append( this.listContainer );

		this.frame.append( this.listFrame );

		return this.frame;
	},
	setMaxScrollHeight : function( maxHeight )
	{
		if ( this.listFrame )
		{
			this.listFrame.css( { 'max-height' : maxHeight + 'px'} );
		}
	},
	initializeKenSelect : function()
	{
		var select = this.kenSelect;
		select.empty();
		select.append( $('<option>').html("都道府県").val("," ) );

		var kenCode = '';
		for( var key in GSI.MUNI_ARRAY )
		{
			var muni = GSI.MUNI_ARRAY[ key ].split( ',' );

			if ( muni.length == 4 )
			{
				if ( kenCode != muni[0] )
				{
					var option = $('<option>').html(muni[1]).val(muni[0] + ',' + muni[1]);

					select.append( option );
					kenCode = muni[0];
				}
			}
		}
	},
	onKenChange : function()
	{
		var selectedKen = this.kenSelect.val().split( ',');
		var selectedKenCode = selectedKen[0];
		var selectedKenName = selectedKen[1];

		var select =this.shiSelect;
		select.empty();
		select.append( $('<option>').html("市区町村").val("," ) );

		for( var key in GSI.MUNI_ARRAY )
		{
			var muni = GSI.MUNI_ARRAY[ key ].split( ',' );

			if ( muni.length == 4 )
			{
				if ( selectedKenCode == muni[0] )
				{
					var option = $('<option>').html(muni[3]).val(muni[2] + ',' + muni[3]);

					select.append( option );
				}
			}
		}
		this.showResult();
	},
	onShiChange : function()
	{
		this.showResult();
	},
	setChimeisResult : function( result )
	{
		if (result)
		{
			for(var i = result.length - 1; i >= 0; i--)
			{
				if (result[i].geometry.coordinates[0] <= 0)
				{
					if (result[i].geometry.coordinates[1] <= 0)
					{
						result.splice(i, 1);
					}
				}
			}
		}
		this.chimeiResult = result;
		this.showResult();
	},
	clear : function()
	{
		if ( this.markerList ) this.map.removeLayer( this.markerList );
		this.setTitle( '検索中' );
		this.addressResult = [];
		this.chimeiResult = [];
		var ul = this.listContainer;
		ul.empty();
		var li = $( '<li>' ).addClass( 'nodata' ).html( '検索中' );
		this.listContainer.append( li );

		this.kenSelect[0].selectedIndex = 0;
		this.shiSelect.empty();
		this.shiSelect.append( $('<option>').html("市区町村").val("," ) );
	},
	makeItem : function( item, index, subTitle )
	{
		var a = $( '<a>' ).attr( { 'href' : 'javascript:void(0);' } );
		var title = item.properties.title;
		
		var div = $( '<div>' ).html( title ).addClass('title');
		a.append( div );

		if ( subTitle && subTitle != '' )
		{
			div = $( '<div>' ).html( subTitle ).addClass('muni');
			a.append( div );
		}

		a.click( L.bind( this.onResultClick, this, item) );
		a.mouseenter( L.bind( this.onResultMouseover, this, item) );
		a.mouseleave( L.bind( this.onResultMouseout, this, item) );
		a.css( { "padding-left": '32px'} );
		if ( this.options.maxMarkerNum < 0 || this.markerNum < this.options.maxMarkerNum )
		{
			var latitude = item.geometry.coordinates[1];
			var longitude = item.geometry.coordinates[0];
			if ( latitude && longitude )
			{
				a.css(
					{
						"background" : "url(image/mapicon/search_result.png) no-repeat 0px 50%"
					}
				);

				if ( !this._resultIcon )
				{
					this._resultIcon= L.icon({
						iconUrl: 'image/mapicon/search_result.png',
					iconSize: [24, 24],
					iconAnchor: [3, 22]
					});
				}
				item._isActive = false;
				item._marker = L.marker([latitude,longitude],{
						title : title,
						icon : this._resultIcon
					});
				item._marker.bindPopup(
					title + "<br>" +
					( subTitle && subTitle != '' ? subTitle + '<br>' : '' ) +
					latitude + "," + longitude,
					{
						maxWidth:5000
					}
					);
				this.markerList.addLayer(item._marker);
				this.markerNum++;
			}
		}
		return a;
	},
	showResult : function()
	{
		if ( this.markerList ) this.map.removeLayer( this.markerList );

		this.markerList = L.layerGroup();

		var selectedKen = this.kenSelect.val().split( ',');
		var selectedKenCode = selectedKen[0];

		var selectedSi = this.shiSelect.val().split( ',');
		var selectedSiCode = selectedSi[0];

		var ul = this.listContainer;
		ul.empty();
		var viewNum = 0;
		this.markerNum = 0;
		var results = [this.addressResult,this.chimeiResult];
		var that = this;
		var num = 0;
		$.each(results,function() {
			num += this.length;
			$.each(this,function() {
				var record = this;
				var addressCode = "";
				if (record.properties.addressCode) {
					addressCode = parseInt(record.properties.addressCode,10)+"";
				}
				if (selectedKenCode != '' && addressCode.substring(0,addressCode.length-3) != selectedKenCode) return;
				if (selectedSiCode != '' && selectedSiCode != addressCode) return;
				var li = $( '<li>' );
				var muniNm = "";
				if (addressCode) {
					var addressData = GSI.MUNI_ARRAY[addressCode];
					if (addressData) {
						addressData = addressData.split(",");
						muniNm = (addressData[1]+addressData[3]).replace("　","");
					}
					var a = that.makeItem( record, viewNum, muniNm );
					li.append( a );
					ul.append( li );
				} else {
					var a = that.makeItem( record, viewNum, "    " );
					li.append( a );
					ul.append( li );
					// 緯度経度からリバースジオコーダ機能を呼び出して地名を取得
					
					$.ajax({
						url : CONFIG.SERVERAPI.GETADDR,
						dataType : "json",
						data : {
							lon : record.geometry.coordinates[0],
							lat : record.geometry.coordinates[1]
						},
						success : function(data2){
							// リバースジオコーダの結果を画面に表示
							if (data2.results){
								var addressCode = parseInt(data2.results.muniCd);
								record.properties.addressCode = addressCode;
								var addressData = GSI.MUNI_ARRAY[addressCode];
								if (addressData) {
									addressData = addressData.split(",");
									muniNm = (addressData[1]+addressData[3]).replace("　","");
									li.find("div.muni").html(muniNm);
								}
							}
						}
					});
				}
				viewNum++;
			});
		});
		this.setTitle( '検索結果:' + num + '件中' + viewNum + '件表示' );
		this.markerList.addTo( this.map );
	},
	onResultClick : function(resultItem)
	{
		this._setActiveItem( null );
		this._setActiveItem( resultItem );

		var latitude = resultItem.geometry.coordinates[1];
		var longitude = resultItem.geometry.coordinates[0];
		if ( longitude && resultItem )
		{
			this.map.setView( [latitude, longitude ],CONFIG.SEARCHRESULTCLICKZOOM );
		}

	},
	_setActiveItem : function( item )
	{
		if ( !item )
		{
			if ( this._activeItem )
			{
				this._activeItem._isActive = false;
				if ( this._activeItem._marker )
				{
					this.markerList.addLayer(this._activeItem._marker);
				}
				if ( this._resultActiveMarker )
				{
					this.markerList.removeLayer(this._resultActiveMarker);
				}
				this._activeItem._isActive = false;
				this._activeItem = null;
			}
			return;
		}

		if ( item != this._activeItem )
		{
			if ( item._marker )
			{
				this.markerList.removeLayer(item._marker);
			}

			var latitude = item.geometry.coordinates[1];
			var longitude = item.geometry.coordinates[0];
			if ( !this._resultActiveMarker )
			{
				var icon = L.icon({
					iconUrl: 'image/mapicon/search_result_active.png',
					iconSize: [32, 32],
					iconAnchor: [5, 29]
				});

				this._resultActiveMarker = L.marker([latitude, longitude],{
						icon : icon,
						zIndexOffset : 1000
					});

			}
			else
			{
				this._resultActiveMarker.setLatLng( [latitude, longitude] );
			}

			this.markerList.addLayer(this._resultActiveMarker);
			this._activeItem = item;
			this._activeItem._isActive = true;
		}
	},
	onResultMouseover : function(resultItem)
	{
		this._setActiveItem( resultItem );
	},
	onResultMouseout : function(resultItem)
	{
		if ( resultItem._isActive  )
		{
			resultItem._isActive = false;
			if ( resultItem._marker )
			{
				this.markerList.addLayer(resultItem._marker);
			}
			if ( this._resultActiveMarker )
			{
				this.markerList.removeLayer(this._resultActiveMarker);
			}
		}
	}
});

/************************************************************************
 L.Class
 - GSI.Dialog
   - GSI.ShareDialog（共有ダイアログ管理）
 ************************************************************************/
GSI.ShareDialog = GSI.Dialog.extend( {
	options : {
		title : GSI.TEXT.SHARE.DIALOG_TITLE
	},
	initialize : function(map, pageStateManager, layersJSON, sakuzuList, options)
	{
		this.map = map;
		this.pageStateManager = pageStateManager;
		this.layersJSON = layersJSON;
		this.sakuzuList = sakuzuList;

		GSI.Dialog.prototype.initialize.call(this, options);
	},
	show : function (mode)
	{
		this._mode = mode;
		this._createTextareaContent(true);
		this._createSettingContent();
		this._initializeSetting(mode);

		switch( mode )
		{
			case GSI.ShareDialog.MODE.LINK:
				this.title.html( GSI.TEXT.SHARE.DIALOG_LINK_TITLE  );
                this._settingButton.hide();
				this._downloadButton.hide();
				this._copyButton.hide();
				this._setMessage( GSI.TEXT.SHARE.DIALOG_LINK_MESSAGE );
				this._initializeLinkMode();
				break;
			case GSI.ShareDialog.MODE.BUILTIN:
				this.title.html( GSI.TEXT.SHARE.DIALOG_BUILTIN_TITLE );
                this._settingButton.show();
				this._downloadButton.hide();
				this._copyButton.show();
				this._setMessage( GSI.TEXT.SHARE.DIALOG_BUILTIN_MESSAGE );
				this._initializeBuiltInMode();
				break;

			case GSI.ShareDialog.MODE.FILE:
				this.title.html( GSI.TEXT.SHARE.DIALOG_SAVE_TITLE );
				if (!GSI.Utils.hasFileAPI)
				{
					this._downloadButton.hide();
					this._copyButton.show();
					this._setMessage( GSI.TEXT.SHARE.DIALOG_SAVE_MESSAGE_IE8 );
				}
				else
				{
					this._setMessage( GSI.TEXT.SHARE.DIALOG_SAVE_MESSAGE);
					if ( this._zeroClipboard  ) this._zeroClipboard.destroy();
					this._zeroClipboard = null;12
					this._copyButton.hide();
					this._downloadButton.show();
				}

				this._initializeFileMode();
				break;
		}
		this._settingFrame.hide();

		GSI.Dialog.prototype.show.call(this);
	},
	_setCheckdState : function( elem, checked )
	{
		elem.attr( {'checked':checked} );
		elem.prop( {'checked':checked} );
	},
	_initializeSetting : function(mode)
	{
		this._setCheckdState( this._positionShareCheck, true );
		this._setCheckdState( this._basemapCheck, true );
		this._setCheckdState( this._layerpCheck, true );

		this._setCheckdState( this._visibleHeaderCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );
		this._setCheckdState( this._visibleInfoMenuCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );
		this._setCheckdState( this._visibleFuncMenuCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );
		this._setCheckdState( this._visibleContextMenuCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );

		this._setCheckdState( this._visibleViewListDlgCheck, false );
		this._setCheckdState( this._visibleLayerTreeDlgCheck, false );
		this._setCheckdState( this._showCurrentFolderCheck, false );

		this._setCheckdState( this._centerCrossCheck, this.pageStateManager.getViewSettingVisible(CONFIG.PARAMETERNAMES.CENTERCROSS) );
		this._setCheckdState( this._latLngGridCheck, false );
		this._setCheckdState( this._utmGridCheck, false );
		this._setCheckdState( this._tileGridCheck, false );
		this._setCheckdState( this._chiikiMeshCheck, false );
		this._setCheckdState( this._t25000Check, false );
		this._setCheckdState( this._jihokuLineCheck, false );
	},
	_initializeLinkMode : function()
	{
		this._textarea.val(location.href);
	},
	_initializeBuiltInMode : function()
	{
		var url = this.getUrl('');
		var w = 500;
		var h= 400;

		var html = '<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"' +
			' width="' + w + '"' +
			' height="' + h + '"' +
			' src="' + url + '"' +
			'></iframe>';
		this._textarea.val( html );
	},
	_initializeFileMode : function()
	{
		var _location = ( GSI.ClientMode .location ? GSI.ClientMode .location : location );
		if ( !this._htmlTemplate || this._htmlTemplate == '' )
		{
            var url = _location.pathname.replace(/index.html/i, "");
            if(!_location.pathname.lastIndexOf("/") ==  _location.pathname.length -1){
                url += "/";
            }
            url += "index_client.html";

			this._ajax = $.ajax({
				type: "GET",
				dataType:"text",
				url : url,
				success:  L.Util.bind( this._onHtmlTemplateLoad, this ),
				error : L.Util.bind( this._onHtmlTemplateLoadError, this )
			});
		}
		else
		{
			this._refreshShareFile();
		}
	},
	_refreshShareFile : function()
	{
        var javascript = '';
		var html = this._htmlTemplate;

		if ( this.sakuzuList )
		{
			var list = this.sakuzuList.getGeoJSONList();

			javascript += 'GSI.ClientMode.sakuzuList = ' + JSON.stringify( list ) + ';' + '\n';
		}

        var _location = ( GSI.ClientMode .location ? GSI.ClientMode .location : location );
        
        var url      = _location.protocol + "//" + _location.host;
        var url_     = this._makeQueryString();
        if(url_.indexOf("?") == 0){
            url_ = "&" + url_.substring(1, url_.length);
        }
        var url_site = _location.pathname + "?postmessage=1" +url_;

        html       = html      .replace('/*url*/'     , url     );
        html       = html      .replace('/*url_site*/', url_site);
        html       = html      .replace(/GSI.ClientMode/g, 'ClientMode');
        javascript = javascript.replace(/GSI.ClientMode/g, 'ClientMode');
        
		html = html.replace( '/*INSERT-SCRIPT*/', javascript );
		this._textarea.focus();
		this._textarea.val( html );
	},
	_onDownLoadClick : function()
	{
		var fileName = 'gsi' + GSI.Utils.getTimeStampString() + '.html';
		var blob = new Blob([this._textarea.val()], { "type" : "text/html" });

		if ( window.navigator.msSaveOrOpenBlob )
		{
			window.navigator.msSaveOrOpenBlob( blob, fileName );
		}
		else
		{
			window.URL = window.URL || window.webkitURL;
			this._downloadButton.attr( {
					"download" :fileName,
					"href" : window.URL.createObjectURL(blob)
				});
		}
	},
	_onHtmlTemplateLoad : function(html)
	{
		this._htmlTemplate = html.replace( '\r\n', '\n' );
		this._htmlTemplate = this._htmlTemplate.replace( '\r', '\n' );

		this._htmlTemplate = html;
		this._refreshShareFile();
	},
	_onHtmlTemplateLoadError : function()
	{
		alert(GSI.TEXT.SHARE.DIALOG_TEMPLATELOADERROR);
		this.hide();
	},
	_onSettingChange : function()
	{
		switch( this._mode )
		{
			case GSI.ShareDialog.MODE.LINK:
				this._initializeLinkMode();
				break;
			case GSI.ShareDialog.MODE.BUILTIN:
				this._initializeBuiltInMode();
				break;

			case GSI.ShareDialog.MODE.FILE:
				this._refreshShareFile();
				break;
		}
	},
	_makeQueryString : function(additionalParam)
	{
		var queryString = '';
		if ( this._positionShareCheck.is( ':checked' ) )
		{
			queryString = this.pageStateManager.getPositionQueryString();
            if(queryString != ""){
                queryString += "/";
            }
		}
        else{
            queryString += "#//";
        }

        var fBase        = false;
        var fBassLS_Trim = false;
        var base = this.pageStateManager.getBaseLayerQueryString();
        if(base != ''){
            fBase   = true;
        }
		if ( this._basemapCheck.is( ':checked' ) )
		{
            if( base != '' )
            {
			    queryString += ( queryString != '' ? '&' : '#' ) + base;
            }
		}
        else{
            if(fBase){
                fBassLS_Trim = true;
            }
        }

		var ls = this.pageStateManager.getLayersQueryString();
        var disp = this.pageStateManager.getTileViewSetting();
		if ( this._layerpCheck.is( ':checked' ) )
		{
			if ( ls != '' )
			{
                if(fBassLS_Trim){
                    var ls_ary = ls.split("%7C");
                    ls = "";
                    for(var n_ls_ary = 1; n_ls_ary < ls_ary.length; n_ls_ary++){
                        if(ls != ""){
                            ls += "%7C";
                        }
                        ls += ls_ary[n_ls_ary];
                    }
                    if(ls != ""){
                        ls = "ls=" + ls;
                    }
                }
                if ( ls != '' ){
				    queryString += ( queryString != '' ? '&' : '#' ) + ls;
                }
			}
			
			if ( disp != '' )
			{
                if(fBassLS_Trim){
                    var disp_trim = "";
                    for(var n_disp = 6; n_disp < disp.length; n_disp++){
                        disp_trim += disp.charAt(n_disp);
                    }
                    disp = "";
                    if(disp_trim != ""){
                        disp = "disp=" + disp_trim;
                    }
                }
                if ( disp != '' ){
				    queryString += ( queryString != '' ? '&' : '#' ) + disp;
                }
			}
		}
        else{
            if ( this._basemapCheck.is( ':checked' ) ){
                if( base != '' ){
			        if ( ls != '' )
			        {
                        var ls_ary = ls.split("%7C");
                        ls = "";
                        if(ls_ary.length > 1){
                            ls += ls_ary[0];
                        }
                        if(ls != ""){
                            ls = "ls=" + ls;
                        }
                    }
                    if ( ls != '' ){
				        queryString += ( queryString != '' ? '&' : '#' ) + ls;
                    }
			
			        if ( disp != '' )
			        {
                        var disp_trim = "";
                        if(disp.length >= 6){
                            disp_trim = disp.charAt(5);
                        }
                        disp = "";
                        if(disp_trim != ""){
                            disp = "disp=" + disp_trim;
                        }
                    }
                    if ( disp != '' ){
				        queryString += ( queryString != '' ? '&' : '#' ) + disp;
                    }
                }
            }
        }

        if ( this._showCurrentFolderCheck.is( ':checked' ) )
        {
            var lcd = this.pageStateManager.getCurrentPathQueryString();
            if(lcd != '')
            {
			    queryString += ( queryString != '' ? '&' : '#' ) + lcd;
            }
        }

		var hcList = [];
		if ( !this._visibleHeaderCheck.is( ':checked' ) )
			hcList.push( CONFIG.HIDDENCONTROLPARAMETER.HEADER );

		if ( !this._visibleInfoMenuCheck.is( ':checked' ) )
			hcList.push( CONFIG.HIDDENCONTROLPARAMETER.INFOMENU );

		if ( !this._visibleFuncMenuCheck.is( ':checked' ) )
			hcList.push( CONFIG.HIDDENCONTROLPARAMETER.FUNCMENU );

		if ( !this._visibleContextMenuCheck.is( ':checked' ) )
			hcList.push( CONFIG.HIDDENCONTROLPARAMETER.CONTEXTMENU );

		var skips = {};
		skips[ CONFIG.PARAMETERNAMES.CLICKMOVE] = true;
		skips[ CONFIG.PARAMETERNAMES.COCOTILE] = true;
		skips[ CONFIG.PARAMETERNAMES.MINIMAP] = true;

		var visibles = {};
		visibles[ CONFIG.PARAMETERNAMES.CENTERCROSS] = this._centerCrossCheck.is( ':checked' );
		visibles[ CONFIG.PARAMETERNAMES.JIHOKULINE] = this._jihokuLineCheck.is( ':checked' );
		visibles[ CONFIG.PARAMETERNAMES.LATLNGGRID] = this._latLngGridCheck.is( ':checked' );
		visibles[ CONFIG.PARAMETERNAMES.UTMGRID] = this._utmGridCheck.is( ':checked' );
		visibles[ CONFIG.PARAMETERNAMES.TILEGRID] = this._tileGridCheck.is( ':checked' );
		visibles[ CONFIG.PARAMETERNAMES.CHIIKIMESH] = this._chiikiMeshCheck.is( ':checked' );
		visibles[ CONFIG.PARAMETERNAMES.T25000GRID] = this._t25000Check.is( ':checked' );
        visibles[ CONFIG.PARAMETERNAMES.FOOTER ] = GSI.GLOBALS.footer.isVisible();

		var visibleDialogs = {};
		visibleDialogs[ CONFIG.DIALOGPARAMETER.VIEWLISTDIALOG] = this._visibleViewListDlgCheck.is( ':checked' );
		visibleDialogs[ CONFIG.DIALOGPARAMETER.LAYERTREEDIALOG] = this._visibleLayerTreeDlgCheck.is( ':checked' );
        
		var queryParams = this.pageStateManager.getQueryParams( {
			hcList : hcList,
			vsInfo : {
				skips : skips,
				visibles : visibles
			},
			visibleDialogs : visibleDialogs
		} );

        var queryArgs = "";
		for ( var key in queryParams )
		{
            if(key == "hc"){
			    queryArgs += ( queryString != '' ? '?' : '' ) + key + '=' + queryParams[key];
            }
            else{
                queryString += ( queryString != '' ? '&' : '#' ) + key + '=' + queryParams[key];
            }
		}

		if ( additionalParam && additionalParam != '' )
		{
			queryString += ( queryString != '' ? '&' : '#' ) + additionalParam;
		}

		return queryArgs + queryString;
	},
	getUrl :function(additionalParam)
	{
		var url         = GSI.Utils.getCurrentPath();
        var queryString = this._makeQueryString();
        return url + queryString;
	},
	afterShow : function()
	{
		this._initializeCopy();
	},
	_initializeCopy : function()
	{
		if ( !this._zeroClipboard  )
		{
			this._zeroClipboard = new ZeroClipboard(this._copyButton[0] );//.attr({ id: 'fe_text' })[0]);

			this._zeroClipboard.on( 'ready', L.bind( function() {

				this._zeroClipboard.on( 'beforecopy', L.bind( function() {
					this._zeroClipboard.setText(this._textarea.val());
					alert( 'クリップボードにコピーしました' );
				},this ) );

				this._zeroClipboard.on( 'aftercopy', L.bind( function() {
				},this ) );
			},this ));
		}
	},
	hide : function ()
	{
		GSI.Dialog.prototype.hide.call(this);
	},
	_setMessage : function(msg)
	{
		this._messageFrame.empty();

		var img = $( '<img>' ).attr( {'src': 'image/system/info.png'} );
		this._messageFrame.append(img).append( $('<div>').html(msg) );
	},
	createHeader : function()
	{
		this.title = $( '<div>' ).html( this.options.title );

		return $( '<div>' ).append( this.title );
	},
	createContent : function()
	{
		this._frame = $( '<div>' ).addClass( 'gsi_sharedialog_frame' );

		this._messageFrame = $( '<div>' ).addClass( 'messageframe' );
		this._textareaFrame = $( '<div>' ).addClass( 'textareaframe' );

		this._contentFrame = $( '<div>' );
		this._settingFrame = $( '<div>' ).addClass( 'settingframe' );

		this._frame.append( this._messageFrame );
		this._frame.append( this._textareaFrame );
		this._frame.append( this._contentFrame );
		this._frame.append( this._settingFrame );

		return this._frame;
	},
	_createTextareaContent : function(visible)
	{
		if ( this._textareaContent )
		{
			if ( visible ) this._textareaContent.show();
			else this._textareaContent.hide();
			return;
		}
		var frame = $( '<div>' ).addClass( 'textareacontent' );

		var textareaFrame = $( '<div>' );
		this._textarea = $( '<textarea>' ).attr( {rows:4, readonly:"readonly", 'wrap':'off'} ).click( function(){ this.select();} );
		this._textarea.focus();
		this._textarea.val( '' );
		textareaFrame.append( this._textarea );

		this._downloadButton = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).addClass( "normalbutton").css( {'float':'right'} )
				.html(GSI.TEXT.SHARE.DIALOG_DOWNLOADBTN).click( L.bind( this._onDownLoadClick,this ) );

		if ( !GSI.Utils.canUseFlashPlayer() )
		{
			this._copyButton = $( '<span>' ).css( {'float':'right'} ) .html( GSI.TEXT.SHARE.DIALOG_NOCOPYMSG );
		}
		else
		{
			this._copyButton = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).addClass( "normalbutton").css( {'float':'right'} )
				.html( GSI.TEXT.SHARE.DIALOG_COPYBTN );
		}

		frame.append( textareaFrame );

		this._settingButton = $( '<a>').attr( {'href':'javascript:void(0);'} ).addClass( "normalbutton").css( {'float':'left'} )
			.html( '詳細設定' )
			.click( L.bind( function() { this._settingFrame.slideToggle('fast'); }, this ) );

		var buttonFrame = $( '<div>' ).addClass( 'buttonframe' );

		buttonFrame.append( this._copyButton );
		buttonFrame.append( this._downloadButton );
		buttonFrame.append( this._settingButton );
		buttonFrame.append( $('<div>').css({clear:'both'} ) );
		frame.append( buttonFrame );

		this._textareaFrame.append( frame );
		this._textareaContent = frame;
	},
	_createShareBuiltInContent : function()
	{
		if ( this._shareBuiltInContent ) return;
	},
	_createShareFileContent : function()
	{
		if ( this._shareFileContent ) return;
	},
	_createSettingContent : function()
	{
		if ( this._settingContent ) return

		this._settingContent = $( '<div>' ).addClass( 'settingcontent' );
		this._settingContent.append( $( '<h3>' ).html( '基本設定' ) );

		var __createItem = function( $this, title )
		{
			var li = $('<li>');
			var id = 'GSI_ShareDialog_check' + GSI.Utils.getCurrentID() ;
			var check = $( '<input>' ).attr( {'type':'checkbox', 'id': id } ).addClass( 'normalcheck' );
			li.append( check );
			var label = $( '<label>' ).attr( {'for': id} );
			label.html( title );
			li.append( label );
			check.click( L.bind( $this._onSettingChange,$this) );
			return { li: li, checkbox: check };
		};

		var ul = $( '<ul>' );
		var item = null;

		// 緯度経度
		item = __createItem( this,'表示中の中心位置とズームを共有' );
		ul.append( item.li );
		this._positionShareCheck = item.checkbox;

		// 背景地図
		item = __createItem( this,'表示中の背景地図を共有' );
		ul.append( item.li );
		this._basemapCheck = item.checkbox;

		// レイヤー
		item = __createItem( this,'表示中のレイヤーを共有' );
		ul.append( item.li );
		this._layerpCheck = item.checkbox;

		this._settingContent.append( ul );

		this._settingContent.append( $( '<h3>' ).html( '機能設定' ) );

		ul = $( '<ul>' );

		// 検索とお知らせバーを表示
		item = __createItem( this,'検索とお知らせを表示' );
		ul.append( item.li );
		this._visibleHeaderCheck = item.checkbox;

		// 情報ボタンを表示
		item = __createItem( this,'情報ボタンを表示' );
		ul.append( item.li );
		this._visibleInfoMenuCheck = item.checkbox;

		// 機能ボタンを表示
		item = __createItem( this,'機能ボタンを表示' );
		ul.append( item.li );
		this._visibleFuncMenuCheck = item.checkbox;

		// コンテキストメニューを表示
		item = __createItem( this,'コンテキストメニューを表示' );
		ul.append( item.li );
		this._visibleContextMenuCheck = item.checkbox;

		this._settingContent.append( ul );

		this._settingContent.append( $( '<h3>' ).html( '選択中の情報設定' ) );

		ul = $( '<ul>' );

		// 選択中の情報
		item = __createItem( this,'選択中の情報を開く' );
		ul.append( item.li );
		this._visibleViewListDlgCheck = item.checkbox;

		this._settingContent.append( ul );

		this._settingContent.append( $( '<h3>' ).html( '情報リスト設定' ) );

		ul = $( '<ul>' );

		// 情報リスト
		item = __createItem( this,'情報リストを開く' );
		ul.append( item.li );
		this._visibleLayerTreeDlgCheck = item.checkbox;

		// 表示階層を共有
		item = __createItem( this,'表示中のフォルダを開いた状態で表示' );
		ul.append( item.li );
		this._showCurrentFolderCheck = item.checkbox;

		this._settingContent.append( ul );

		this._settingContent.append( $( '<h3>' ).html( '表示設定' ) );

		ul = $( '<ul>' );

		// 中心十字線
		item = __createItem( this,'中心十字線を表示' );
		ul.append( item.li );
		this._centerCrossCheck = item.checkbox;

		// 緯度経度グリッド
		item = __createItem( this,'緯度経度グリッドを表示' );
		ul.append( item.li );
		this._latLngGridCheck = item.checkbox;

		// UTMグリッド
		item = __createItem( this,'UTMグリッドを表示' );
		ul.append( item.li );
		this._utmGridCheck = item.checkbox;
		
		// タイル座標
		item = __createItem( this,'タイル座標を表示' );
		ul.append( item.li );
		this._tileGridCheck = item.checkbox;
		
		// 地域メッシュ
		item = __createItem( this,'地域メッシュを表示' );
		ul.append( item.li );
		this._chiikiMeshCheck = item.checkbox;
		
		// 2万5千分1地形図郭
		item = __createItem( this,'2万5千分1地形図郭を表示' );
		ul.append( item.li );
		this._t25000Check = item.checkbox;
		
		
		// 磁北線
		item = __createItem( this,'磁北線を表示' );
		ul.append( item.li );
		this._jihokuLineCheck = item.checkbox;

		this._settingContent.append( ul );

		this._settingFrame.append( this._settingContent );
	}
} );

GSI.ShareDialog.MODE = {
	LINK : "link",
	BUILTIN : "builtin",
	FILE : "file"
};

/************************************************************************
 L.Class
 - GSI.Dialog
   - GSI.ViewListDialog（表示中ダイアログ管理）
 ************************************************************************/
GSI.ViewListDialog = GSI.Dialog.extend( {

	options : {
		title : '選択中の情報'
	},
	initialize : function(map, layersJSON, mapLayerList, cocoTileLayer, options)
	{
		this.map = map;
		this.layersJSON = layersJSON;
		this.mapLayerList = mapLayerList;
		this.cocoTileLayer = cocoTileLayer;
		this.mapLayerList.on( 'change', L.bind( this.onMapLayerListChange, this ) );
		GSI.Dialog.prototype.initialize.call(this, options);

		cocoTileLayer.on( 'load', L.bind( this.onCOCOTileLoad, this ) );
		cocoTileLayer.on( 'hide', L.bind( this.onCOCOTileHide, this ) );
	},
	_onResize : function()
	{
		GSI.Dialog.prototype._onResize.call(this);

		var height = this.container.outerHeight( false )
			- this.headerFrame.outerHeight( true )
			- this._controlFrame.outerHeight( true ) - 10;

		this.listFrame.css( { "max-height": 'none', height: height + 'px'} );
	},
	createHeader : function()
	{
		return $('<span>').html(this.options.title );
	},
	createContent : function()
	{
		this._contentFrame = $('<div>');
		this._controlFrame = this._createControl();

		this.listFrame = $( '<div>' ).addClass( 'viewlistdialog_ul_frame' );
		this.listContainer = $( '<ul>' ).addClass( 'viewlistdialog_ul' );

		var li = $( '<li>' ).addClass( 'nodata' ).html( '選択中の情報はありません' );
		this.listContainer.append( li );

		this.listFrame.append( this.listContainer );

		this._contentFrame.append( this._controlFrame );
		this._contentFrame.append( this.listFrame );

		return this._contentFrame;
	},
	_createControl : function()
	{
		var frame = $( '<div>' ).css( { 'height': '25px' } ).addClass( 'viewlistdialog_control_frame' );

        //this._ButtonTxtAdd = $("<a>").css({"position":"absolute",'left':'5px','bottom':'5px','cursor':'pointer'}).addClass('view_list_dialog_button').html("<img src='./image/system/add.png' style='position:relative;left:-2px;top:3px;' />情報追加/ベースマップ切替");
        this._RbtnTxtAdd = $("<a>").css({"position":"absolute",'left':'4px','bottom':'5px','cursor':'pointer'}).addClass('view_list_dialog_button').html("リセット");
		
		var frameRange            = $( '<div>' ).css({ 'position':'absolute','right':'5px','bottom':'5px','opacity':'1'});
        /*
        this._ButtonRangeSwitch   = new GSI.OnOffSwitch( {className:'onoff', checked:this.cocoTileLayer.getVisible(), title: ""} );
		var frameRangeSwitchLabel = $( '<label>' ).css({"padding-left":"5px"}).attr({'for':this._ButtonRangeSwitch.getId()}).html( '表示範囲に絞込み' );
		this._ButtonRangeSwitch.on( 'change' , L.bind( this._onCocoTileCheckChange, this, this._ButtonRangeSwitch ) );

		frameRange.append( this._ButtonRangeSwitch.getElement() );
		frameRange.append( frameRangeSwitchLabel );
        */

        /*
		this._showAllButton   = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全表示'   ).addClass( 'normalbutton showallbutton' );
		this._hideAllButton   = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全非表示' ).addClass( 'normalbutton showallbutton' );
		this._removeAllButton = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全削除'   ).addClass( 'normalbutton showallbutton' );
        */

        //frame.append( this._ButtonTxtAdd );
        frame.append( this._RbtnTxtAdd );

		frame.append( frameRange );
        /*
		frame.append( this._removeAllButton );
		frame.append( this._hideAllButton   );
		frame.append( this._showAllButton   );
        */
		var dummy = $('<div>').html( '&nbsp;' ).css( { "font-size": '9.5pt' } );
		frame.append(dummy );

		//this._ButtonTxtAdd.click( L.bind( this._onAddClick, this ) );
		this._RbtnTxtAdd.click( L.bind( this._onResetClick, this ) );

        /*
		this._showAllButton  .click( L.bind( this._onShowAllClick  , this ) );
		this._hideAllButton  .click( L.bind( this._onHideAllClick  , this ) );
		this._removeAllButton.click( L.bind( this._onRemoveAllClick, this ) );
        */

		return frame;
	},
	_onAddClick : function()
	{
        GSI.GLOBALS.layerTreeDialog.show();
    },
    _onResetClick : function()
    {
		this._resetTiles();
		this._checkEvacuationLayer();
    },
    onCocoTileCheckChange  : function(onOffSwitch)
	{
        if(this._ButtonRangeSwitch){
            this._ButtonRangeSwitch.checked(onOffSwitch.checked());
        }
    },
	_onCocoTileCheckChange : function(onOffSwitch)
	{
        GSI.GLOBALS.layerTreeDialog.onCocoTileCheckChange(onOffSwitch);
    },
	_onShowAllClick : function()
	{
		this._showAll( this.mapLayerList.getList() );
		this._showAll( this.mapLayerList.getTileList() );
	},
	_onHideAllClick : function()
	{
		this._hideAll( this.mapLayerList.getList() );
		this._hideAll( this.mapLayerList.getTileList() );
	},
	_onRemoveAllClick : function()
	{
		this._removeAll();
	},
	_resetTiles : function()
	{
		GSI.GLOBALS.baseLayer.setActiveIndex(0);
		var std = GSI.GLOBALS.baseLayer.baseLayerList[0];
		
		this._removeAll();
		this.mapLayerList.append( std );
		
		if ( !GSI.GLOBALS.map.hasLayer(GSI.GLOBALS.baseLayer) )
		{
			GSI.GLOBALS.map.addLayer(GSI.GLOBALS.baseLayer);
		}
	},
	_showAll : function( list )
	{
		for ( var i=0;i<list.length; i++ )
		{
			var item = list[i];
			if ( item._visibleInfo._isHidden  )
			{
				item._onOffSwitch.checked( true );
				//item._visibleInfo.layer.setOpacity( item._visibleInfo.opacity );
				item._visibleInfo._isHidden = false;
				this.map.addLayer( item._visibleInfo.layer );
			}
		}
	},
	_hideAll : function(list)
	{
		for ( var i=0;i<list.length; i++ )
		{
			var item = list[i];
			if ( !item._visibleInfo._isHidden  )
			{
				item._onOffSwitch.checked( false );
				
				item._visibleInfo._isHidden = true;
				this.map.removeLayer( item._visibleInfo.layer );
			}
		}
	},
	_removeAll : function()
	{
		this.mapLayerList.clear();
	},
	setMaxScrollHeight : function( maxHeight )
	{
		if ( this.listFrame )
		{
			this.listFrame.css( { 'max-height' : maxHeight + 'px'} );
		}
		if ( this._contentFrame )
		{
			this._contentFrame.css( { 'height' : 'auto'} );
		}
		if ( this.contentFrame )
		{
			this.contentFrame.css( { 'height' : 'auto'} );
		}
		if ( this.container )
		{
			this.container.css( { 'height' : 'auto'} );
		}
	},
	show : function(noActivate)
	{
		GSI.Dialog.prototype.show.call(this,noActivate);
	},
	initializeList : function()
	{
		if ( !this.contentFrame ) return;

		if ( !this.listContainer )
		{
			this.listContainer = $( '<ul>' ).addClass( 'viewlistdialog_ul' );
			this.listFrame.empty().append( this.listContainer );
		}

		if ( !this.tileListContainer )
		{
			this.tileListContainer = $( '<ul>' ).addClass( 'viewlistdialog_ul' );
			this.listFrame.append( this.tileListContainer );
			this.tileListContainer .sortable( {
				cursor : 'move',
				update : L.bind( this.onSortChange, this ),
				handle : ".item_frame",
				cancel : ".item_frame_fixed",
				scroll : false
			});
	   		this.tileListContainer .disableSelection();
		}

		this.contentFrame.scrollTop( 0 );
		this.listContainer.empty();
		this.tileListContainer.empty();

		this._initializeList();
		if ( this._userResized ) this._onResize();
	},
	onSortChange : function( event, ui )
	{
		var liList = this.tileListContainer.find( 'li' );
		var list = [];
        var f = true;
		for  ( var i=0; i<liList.length; i++ )
		{
			var item = $(liList[i]).data( 'data' );
            if(item.parent.title_sys && item.parent.title_sys == CONFIG.layerBaseFolderSYS){
                if(i != liList.length -1){
                    f = false;
                    this.tileListContainer.sortable("cancel");
                    break;
                }
            }
    		if ( item ) list.push( item );
		}
		
        if(f){
			for ( var i=0; i<liList.length; i++ )
			{
				var li = $( liList[i] );
				var isFirstTile = ( i==0 );
				
				var isLastTile = ( i>= list.length-1 || ( i == list.length-2 && 
						list[list.length-1].parent && list[list.length-1].parent.title_sys && list[list.length-1].parent.title_sys == CONFIG.layerBaseFolderSYS ) );
				
				if ( isFirstTile )
					li.find(".updown_frame a.up").addClass("disabled");//.hide();
				else
					li.find(".updown_frame a.up").removeClass("disabled");//
	

				if ( isLastTile ) 
					li.find(".updown_frame a.down").addClass("disabled");//.hide();
				else
					li.find(".updown_frame a.down").removeClass("disabled");//.show();
			}
			
		    this.mapLayerList.refreshTileList(list);
        }
	},
	onCOCOTileLoad : function(e)
	{
		this._initializeList( true );
	},
	onCOCOTileHide : function(e )
	{
		this._initializeList( true );
	},
	makePankzu : function( target )
	{
		
		if ( target._appendInfo ) target = target._appendInfo;
		
		target = target.parent;
		var result = '';
		while( target )
		{
			result = target.title + (result == '' ?'': '&gt;') + result;
			target = target.parent;
		}

		return result;
	},
	_updateLayer : function( li, item, isTile, isFirstTile, isLastTile  )
	{
		var cocoVisible = this.cocoTileLayer.getVisible();
		if (cocoVisible && item.cocotile && !item.hasTile )
		{
            li.find("a").removeClass("view");
            li.find("a").addClass("nococotile");
		}
		else
		{
            if(item._visibleInfo._isHidden){
                li.find("a").removeClass("view");
            }
            else{
                li.find("a").addClass("view");
            }
            li.find("a").removeClass("nococotile");
		}
		
		
		if ( isFirstTile )
			li.find(".updown_frame a.up").addClass("disabled");//.hide();
		else
			li.find(".updown_frame a.up").removeClass("disabled");//.show();
			

		if ( isLastTile ) 
			li.find(".updown_frame a.down").addClass("disabled");//.hide();
		else
			li.find(".updown_frame a.down").removeClass("disabled");//.show();
		
	},
	_makeLayer : function( li, a, item, isTile, isFirstTile, isLastTile )
	{
		var cocoVisible = this.cocoTileLayer.getVisible();

        var vClass = 'item_frame';
        var vClassTitle = 'title';
        var fBaseMap = false;
        var enablemt = false;
        if(item.parent && item.parent.title_sys && item.parent.title_sys == CONFIG.layerBaseFolderSYS){
            vClass   = 'item_frame_fixed';
            vClassTitle = 'title_base';
            fBaseMap = true;
        }
        a.addClass( vClass );
		
		if ( (!GSI.Utils.Browser.ie) && (item.url) && (!fBaseMap) )
        {
            var regext = /\.png$|\.jpg$|\.jpeg$/g;
            var hit = regext.exec(item.url);
            if ( (hit) && (hit.length > 0) )
            {
                vClassTitle = 'title_mt';
                enablemt = true;
            }
        
        }
        
		var frame = $( '<div>' );
		if ( isTile ) frame.addClass( 'tille' );
		li.data( { 'data' : item } );

        a.append( frame );
        
		// タイトル
		var title = $( '<div>' ).addClass( vClassTitle );
		var icon = item.iconUrl;
        if(icon){
		    title.css(
			    {
				    "background" : "url(" + icon + ") no-repeat 4px 50%",
				    "background-size" : "16px 16px"
			    }
		    );
        }

		// パンくず
		var pankuzu = $( '<div>' ).addClass( 'pankuzu' ).html( this.makePankzu( item ) );
		title.html( item.title );

        var viewMark = $( '<span>' );
		if (! item._visibleInfo._isHidden )
		{
			viewMark.addClass( 'viewmark' ).html( '表示' );
			a.addClass( 'view' );
		}
		else
		{
			a.removeClass( 'view' );
		}
		frame.append( viewMark ).append( pankuzu ).append( title );
		a.addClass( 'item' ).append( title );

		if (cocoVisible && item.cocotile && !item.hasTile )
		{
            a.removeClass( 'view' );
			a.addClass( 'nococotile' );
		}

        // グレースケール
        if(fBaseMap){
		    if (
			    ( !GSI.Utils.Browser.ie && !GSI.Utils.Browser.isAndroid )
			    ||
			    ( GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version < 10 || ( CONFIG.USEIE10GRAYSCALE && GSI.Utils.Browser.version == 10 ) || ( CONFIG.USEIE11GRAYSCALE && GSI.Utils.Browser.version >= 11 ) ) )
		     )
		    {
                var grayScale_Label = $( '<span>' ).addClass( 'grayscale_label' ).html( 'グレースケール' );
		        li.append( grayScale_Label );

                var grayScale = new GSI.OnOffSwitch( {className:'onoff', checked:(GSI.GLOBALS.baseLayer.getGrayScale())} );
		        var grayScaleElement = grayScale.getElement();
                grayScaleElement.addClass("grayscale");
		        grayScale.on( 'change', L.bind( this._gray_scale, this, a, grayScale ) );

		        li.append( grayScaleElement);
            }
        }
        else
        {
			//乗算
            if (enablemt)
            {
                var mp = new GSI.ToggleSwitch( {className:'toggle', checked:(item._visibleInfo.blend)} );
                //var mp = new GSI.OnOffSwitch( {className:'filetext', checked:(item._visibleInfo.blend)} );
                var mpElement = mp.getElement();
                mpElement.addClass("multiplytile");
                mpElement.on( 'change', L.bind(this._onBlendSwitchChange, this, a, mp ) );
 
                li.append( mpElement );
            }
		}
		
        // 透過
		var opacityBtn =$("<a>").addClass("opacity_btn").attr( {"href":"javascript:void(0);"} ).html('透過率');
		opacityBtn.click( L.bind(function(){ this._onOpacityBtnClick(li); }, this ));
		li.append( opacityBtn );
		
		/*
        var opacity = ( item._visibleInfo ? item._visibleInfo.opacity : 1 );
		var opacityPercentage = Math.round( 100 - ( opacity * 100 ) );
        var opacity = $( '<span>' ).addClass( 'opacity' ).html( '透過'+opacityPercentage+'%' );
		li.append( opacity );

		var opacityUpBtn = $( '<span>' ).addClass( 'opacity_up_btn' ).html( "<img src='./image/system/opacityUp.png' class=\"btn\" oncontextmenu=\"return false;\" />");
		li.append( opacityUpBtn );
        if(GSI.Utils.Browser.TouchDevice()){
		    opacityUpBtn.unbind( 'mousedown' ).bind( 'touchstart', L.bind( this._opacity_start, this, a, opacity, '+' ) );
		    opacityUpBtn.unbind( 'mouseup'   ).bind( 'touchend ' , L.bind( this._opacity_stop , this, a, opacity, '+' ) );
        }
        else{
		    opacityUpBtn.unbind( 'mousedown' ).bind( 'mousedown' , L.bind( this._opacity_start, this, a, opacity, '+' ) );
		    opacityUpBtn.unbind( 'mouseup'   ).bind( 'mouseup'   , L.bind( this._opacity_stop , this, a, opacity, '+' ) );
        }

		var opacityDnBtn = $( '<span>' ).addClass( 'opacity_dn_btn' ).html( "<img src='./image/system/opacityDn.png' class=\"btn\" oncontextmenu=\"return false;\" />");
		li.append( opacityDnBtn );
        if(GSI.Utils.Browser.TouchDevice()){
		    opacityDnBtn.unbind( 'mousedown' ).bind( 'touchstart', L.bind( this._opacity_start, this, a, opacity, '-' ) );
		    opacityDnBtn.unbind( 'mouseup'   ).bind( 'touchend ' , L.bind( this._opacity_stop , this, a, opacity, '-' ) );
        }
        else{
		    opacityDnBtn.unbind( 'mousedown' ).bind( 'mousedown' , L.bind( this._opacity_start, this, a, opacity, '-' ) );
		    opacityDnBtn.unbind( 'mouseup'   ).bind( 'mouseup'   , L.bind( this._opacity_stop , this, a, opacity, '-' ) );
        }
		*/

        // 詳細
		var descriptionBtn = $( '<span>' ).addClass( 'description_btn').html("解説");
		li.append( descriptionBtn );
		descriptionBtn.unbind( 'click' ).bind( 'click', L.bind( this._onLayerMouseEnter, this, a, item ) );

		// 閉じる
		var closeBtn = $( '<div>' ).addClass( 'closebtn' );
		li.append(closeBtn );
    	closeBtn.unbind( 'click' ).bind( 'click', L.bind( this.onRemoveClick, this, li ) );
		
		// ソート
		if ( isTile && !fBaseMap && ( !isFirstTile || !isLastTile ) )
		{
			
			
			var updownFrame = $( "<div>").addClass( 'updown_frame' );
			var upButton = $( "<a>" ).attr( {"href":"javascript:void(0);"} ).addClass( "up" )
				.click( L.bind( function(){this._up(li);}, this ) );
			var downButton = $ ( "<a>" ).attr( {"href":"javascript:void(0);"} ).addClass( "down" )
				.click( L.bind( function(){this._down(li);}, this ) );
			
			if ( isFirstTile )
				upButton.addClass("disabled");//.hide();
			else
				upButton.removeClass("disabled");//.hide();
			
			if ( isLastTile ) 
				downButton.addClass("disabled");//.hide();
			else
				downButton.removeClass("disabled");//.hide();
			
			
			updownFrame.append( upButton ).append( downButton );
			li.append(updownFrame );

		}
		
		
		a.click( L.bind( this.onItemClick, this, li, a, viewMark) );
	},
	_onOpacityBtnClick : function(li)
	{
		
		
		var item = li.data('data');
		var opacity = ( item._visibleInfo ? item._visibleInfo.opacity : 1 );
		if ( !this._opacityWindow )
		{
			this._opacityWindow = $( '<div>' ).addClass( 'viewlistdialog_opacity_window' );
			this._opacityValue = $( '<div>' ).addClass( 'value' ).html( '透過率:' );
			this._opacitySlider = $( '<div>' ).addClass( 'slider' ).html( '&nbsp;' );
			this._opacityWindow.append(this._opacityValue ).append( this._opacitySlider );
			$( "body" ) .append( this._opacityWindow );
			this._opacitySlider.slider({
				min: 0,
				max : 100
			});
		}
		else if ( this._opacityWindow && this._opacityWindow.is(":visible") && this._opacityWindow.data("item") == item )
		{
			this._opacityWindow.slideUp(200);
			return;
		}
		var offset = li.find("a.opacity_btn").offset();
		this._opacityWindow.css({
			top: offset.top + li.find("a.opacity_btn").outerHeight() -4,
			left :offset.left - 200 + 'px'
		}).data( { "item" : item } );
		
		var opacityPercentage = Math.round( 100 - ( opacity * 100 ) );
		this._opacityValue.html('透過率:' + opacityPercentage + '%');
		this._opacitySlider.data({"__target_item":item}).slider( "option", "value", opacityPercentage );
		this._opacitySlider.off("slide").on( "slide", L.bind(function( event, ui ) {
			var item = this._opacitySlider.data('__target_item');
			var value = ui.value;// this._opacitySlider.slider( "option", "value" );
			this._opacityValue.html('透過率:' + value + '%');
			var opacity = value/ 100.0;
			if ( opacity < 0 ) opacity = 0;
			if ( opacity > 1 ) opacity = 1;
			opacity = 1- opacity;
			if(item.parent.title_sys && item.parent.title_sys == CONFIG.layerBaseFolderSYS){
				GSI.GLOBALS.baseLayer.setOpacity(opacity);
				item._visibleInfo.opacity = opacity;
			}
			else{
				item._visibleInfo.layer.setOpacity( opacity );
				item._visibleInfo.opacity = opacity;
			}
		}, this ) );
		
		if ( this._hideOpacityWindowHandler )
		{
			$( document.body ).unbind( 'mousedown', this._hideOpacityWindowHandler );
			$( document.body ).unbind( 'touchstart', this._hideOpacityWindowHandler );
		
		}
		this._hideOpacityWindowHandler  = L.bind( function(event)
		{
			if ( !this._opacityWindow 
				|| event.target == this._opacityWindow[0]
			    || $(event.target).is(".opacity_btn")) return;

			var parents = $( event.target ).parents();
			
			var hit = false;
			for( var i=0; i<parents.length; i++ )
			{
				if ( $(parents[i]).is(".viewlistdialog_opacity_window"))
				{
					hit = true;
					break;
				}
			}
			if ( !hit )
			{
				this._opacityWindow.slideUp(200);
				$( document.body ).unbind( 'mousedown', this._hideOpacityWindowHandler );
				$( document.body ).unbind( 'touchstart', this._hideOpacityWindowHandler );
			}
		}, this );

		$( document.body ).bind( 'mousedown', this._hideOpacityWindowHandler );
		$( document.body ).bind( 'touchstart', this._hideOpacityWindowHandler );
		
		this._opacityWindow.hide().slideDown(200);
		
	},
	_up : function(li)
	{
		var item = li.data('data');
		var tileList = this.mapLayerList.getTileList();
		var hit = false;
		for( var i=1; i<tileList.length; i++ )
		{
			if ( item == tileList[i])
			{
				hit = true;
				break;
			}
			
		}
		if ( hit ) li.prev().before( li.detach() ); 
		
		this.onSortChange();
		this._initializeList( true );
	},
	
	_down : function(li)
	{
		var item = li.data('data');
		var tileList = this.mapLayerList.getTileList();
		var hit = false;
		for( var i=0; i<tileList.length; i++ )
		{
			if ( item == tileList[i])
			{
				if ( i < tileList.length-1)
				{
					var nextItem = tileList[i+1];
				
					
					if(nextItem.parent && nextItem.parent.title_sys && nextItem.parent.title_sys == CONFIG.layerBaseFolderSYS){
						
					}
					else hit = true;
				}
				break;
			}
			
		}
		if ( hit ) li.next().after( li.detach() ); 
		
		this.onSortChange();
		this._initializeList( true );
	},
	
	
	Refresh : function(visibleLayers)
	{
        this._removeAll();

		for ( var i=0; i<visibleLayers.length; i++ )
		{
			var l = visibleLayers[i];
			if(l && l.info){
				//GSI.GLOBALS.mapLayerList.append(l.info, true,l.hidden);
				GSI.GLOBALS.mapLayerList.append(l.info, true,l.hidden, null, l.blend);
			}
		}

        this._initializeList(true);
    },
	_initializeList : function( liRefresh )
	{
        this._hideItemTooltip();
		var list     = this.mapLayerList.getList();
		var tileList = this.mapLayerList.getTileList();
		
		if ( list.length <= 0 && tileList.length <= 0 )
		{
			this.listContainer.empty();
			var li = $( '<li>' ).addClass( 'nodata' ).html( '選択中の情報はありません' );
			this.listContainer.append( li );
		}

		var liList = ( liRefresh ? this.listContainer.children( 'li' ) : null );
		var ul = this.listContainer;
		this._initializeListOne( list, liList, ul, liRefresh );

		if ( this.tileListContainer )
		{
			liList = ( liRefresh ? this.tileListContainer.children( 'li' ) : null );
			ul = this.tileListContainer;
			this._initializeListOne( tileList, liList, ul, liRefresh, true );
			this.tileListContainer.sortable("refresh");
		}
		
		
	},
	_initializeListOne : function( list,liList, ul, liRefresh, isTile )
	{
		for ( var i= 0; i<list.length; i++ )
		{
			var item = list[i];
			var li = ( liRefresh ? $( liList[i] ) : $( '<li>' ) );
			
			
			if ( liRefresh )
			{
				this._updateLayer( li, item, isTile, 
						i==0,
						i>= list.length-1 || ( i == list.length-2 && 
						list[list.length-1].parent && list[list.length-1].parent.title_sys && list[list.length-1].parent.title_sys == CONFIG.layerBaseFolderSYS )  );
			}
			else
			{
			    var a = $( '<a>' ).attr( { 'href':'javascript:void(0);' } );
			    a.data( { 'data' : item } );
				this._makeLayer(li, a, item, isTile, i==0,
						i>= list.length-1 || ( i == list.length-2 && 
						list[list.length-1].parent && list[list.length-1].parent.title_sys && list[list.length-1].parent.title_sys == CONFIG.layerBaseFolderSYS )  );
			    li.append( a );
			}

			if ( !liRefresh ) ul.append( li );
		}
	},
	onItemClick : function(li, a, viewMark)
	{
		var item = a.data( 'data' );
        var item_layer = item._visibleInfo.layer;

        if(item.parent && item.parent.title_sys && item.parent.title_sys == CONFIG.layerBaseFolderSYS){
            item_layer = GSI.GLOBALS.baseLayer;
        }

        if(item._visibleInfo._isHidden)
        {
			item._visibleInfo._isHidden = false;
			this.map.addLayer( item_layer );

            viewMark.addClass( 'viewmark' ).html( '表示' );

            a.addClass( 'view' );

			if (item.id.indexOf(CONFIG.layerEvacuationHeader)>=0)
			{
				if ( GSI.Dialog._dialogManager.isVisibleDialog(GSI.GLOBALS.evacDialog) == false )
				{
					GSI.GLOBALS.evacDialog.show();
				}
			}
		}
		else
		{
			item._visibleInfo._isHidden = true;
			this.map.removeLayer( item_layer );

            viewMark.removeClass( 'viewmark' ).html( ' ' );
            a.removeClass( 'view' );

			if (item.id.indexOf(CONFIG.layerEvacuationHeader)>=0 )
			{
				GSI.GLOBALS.evacDialog.hide();
			}
        }
        
        if ( item._visibleInfo.blend )
        {
            this._blendTile(a, item._visibleInfo.blend);
        }
        

		var cocoVisible = this.cocoTileLayer.getVisible();
		if (cocoVisible && item.cocotile && !item.hasTile )
		{
            a.removeClass("view");
            a.addClass("nococotile");
        }
	},
	onMapLayerListChange : function()
	{
		this.initializeList();
		/*
		var tileList = this.mapLayerList.getTileList();
		
		if ( this.mapLayerList.getList().length > 0 || tileList.length > 0)
		{
			if ( this.mapLayerList.getList().length == 0 && tileList.length ==1 && 
				tileList[0].parent && tileList[0].parent.title_sys && tileList[0].parent.title_sys == CONFIG.layerBaseFolderSYS ) return;
			this.show(true);
		}
		*/
	},
	onRemoveClick : function(li)
	{
		var item = li.data( 'data' );
        if(item.parent && item.parent.title_sys && item.parent.title_sys == CONFIG.layerBaseFolderSYS){
            this.map.removeLayer(GSI.GLOBALS.baseLayer);

        }
		li.fadeOut( 'fast', L.bind( function(li) {
			this.mapLayerList.remove( item );
			li.remove();
			this._checkEvacuationLayer();
			if ( this._userResized ) this._onResize();
		}, this, li ) );
	},
	_onLayerMouseEnter : function( a, item )
	{
		if ( !this._toolTipViewCounter )
		{
			this._toolTipViewCounter = 0;
		}
		this._toolTipViewCounter++;

		this._showItemTooltip( a, item );
	},
	_onLayerMouseLeave : function( a, item )
	{
		this._hideItemTooltip( a, item );
	},
	_onBlendSwitchChange : function( a, mp )
	{
		/*
       	if (GSI.Utils.Browser.ie)
       	{
       		alert('この機能はインターネットエクスプローラーではご利用いただけません。');
       		return;
       	}
       	*/
       	var item = a.data( 'data' );
       	item._visibleInfo.blend = mp.checked();
       	this._blendTile( a, mp.checked() );
	},
	_makeToolTip : function( item )
	{
		var infoFrame = $( '<div>' ).addClass( 'layerinfo' ).css({"max-width":"350px"} );

		var legend = null;
		var description = null;

		if ( item.legendUrl && item.legendUrl != '')
		{
			legend =$( '<a>' ).html( '凡例を表示' ).addClass( 'legend' ).attr( { 'href' : item.legendUrl, 'target' : '_blank' } );
		}
		if ( legend )
			infoFrame.append( legend );

		if ( item.html )
		{
			description =$( '<div>' ).addClass( 'description' ).html( item.html );
		}
		if ( description )
			infoFrame.append( description );

		return infoFrame;
	},
	_showItemTooltip : function( a, item )
	{
		if ( item  )
		{
			if ( !this._curItem )
			{
				this._curItem = item;
			}
			else
			{
				{
					if ( this._curItem == item )
					{
						this._curItem = undefined;
						this._toolTipViewCounter = 0;
						return;
					}
					else
					{
						this._toolTipViewCounter--;
					}
				}
				this._curItem = item;
			}
		
			if ( !this._itemTooltip )
			{
				this._itemTooltip = $( '<div>' ).addClass( 'gsi_layertreedialog_itemtooltip' ).hide();
				$( document.body ).append( this._itemTooltip );
			}

			var offset = a.offset();

			var screenSize = GSI.Utils.getScreenSize();
			var left = offset.left + parseInt( a.outerWidth(true) );
			var top = offset.top;

			if ( left > screenSize.w * 0.6 )
			{
				left = offset.left + parseInt( a.outerWidth(true) * 0.3 );
				top = offset.top + a.outerHeight(true);
			}

			this._itemTooltip.css({
				left : left + 'px',
				top  : top + 'px'
			}).empty().append( this._makeToolTip( item ) );
			this._itemTooltip.stop().hide().fadeIn( 'normal' );

			if ( this._hideToolTipHandler )
			{
				$( document.body ).unbind( 'mousedown', this._hideToolTipHandler );
				$( document.body ).unbind( 'touchstart', this._hideToolTipHandler );
				this.listFrame.unbind( 'scroll', this._hideToolTipHandler );
				this._hideToolTipHandler  = null;
			}

			this._hideToolTipHandler  = L.bind( function(event)
			{
				if ( !this._itemTooltip || event.target == this._itemTooltip[0] ) return;

				var parents = $( event.target ).parents();

				for (var i=0; i<parents.length; i++ )
				{
					if ( parents[i] == this._itemTooltip[0] ) return;
				}

                var fToopTop = false;
                if($(event.target).is(".switch") || $(event.target).is(".inner") || $(event.target).is(".btn")){
                    fToopTop = true;
                }

                if(!fToopTop){
                    if(!$(event.target).is(".description_btn")){
                        this._curItem = undefined;
                    }
				    this._hideItemTooltip();
                }
				
				if ( event.type == "scroll" )
				{
					this._toolTipViewCounter = 0;
				}
			}, this );

			$( document.body ).bind( 'mousedown', this._hideToolTipHandler );
			$( document.body ).bind( 'touchstart', this._hideToolTipHandler );
			this.listFrame.bind( 'scroll', this._hideToolTipHandler );

		}
		else
		{
			this._hideItemTooltip();
		}
	},
	_hideItemTooltip : function( a, item )
	{
		if ( this._hideToolTipHandler )
		{
			$( document.body ).unbind( 'mousedown', this._hideToolTipHandler );
			$( document.body ).unbind( 'touchstart', this._hideToolTipHandler );
			this.listFrame.unbind( 'scroll', this._hideToolTipHandler );
			this._hideToolTipHandler  = null;
		}
		if ( this._itemTooltip )
		{
			this._itemTooltip.stop().hide();
            this._toolTipViewCounter = 0;
		}
	},
    _opacity : function(a, opacity, c)
    {
        var v = parseInt(opacity.text().replace("透過", "").replace("%", ""), 10);
        if(c == "++"){
            v++;
        }
        else if(c == "+"){
            var v2 = Math.floor(v * 0.1);
            var v1 = v - (v2 * 5);
            v = (v2 + 1) * 5 + v1;
        }
        else if(c == "--"){
            v--;
        }
        else if(c == "-"){
            var v2 = Math.floor(v * 0.1);
            var v1 = v - (v2 * 5);
            v = (v2 - 1) * 5 + v1;
        }
        
        else{
            v++;
        }
        if     (v <   0){ v =   0; }
        else if(v > 100){ v = 100; }

		var vPercentage = Math.floor(v);
		opacity.text('透過'+vPercentage+'%');
		v = (100 - v) / 100;

		var item = a.data( 'data' );
        if(item.parent.title_sys && item.parent.title_sys == CONFIG.layerBaseFolderSYS){
            GSI.GLOBALS.baseLayer.setOpacity(v);
            item._visibleInfo.opacity = v;
        }
        else{
    		item._visibleInfo.layer.setOpacity( v );
	    	item._visibleInfo.opacity = v;
        }
    },
    _opacity_start : function(a, opacity, c)
    {
        this.eDownMS   = 250;
        this.eDownTime = new Date().getTime()

        if(this._opacity_tm ){ clearTimeout (this._opacity_tm ); }
        if(this._opacity_tmi){ clearInterval(this._opacity_tmi); }

        this._opacity_tm  = null;
        this._opacity_tmi = null;

        var func = this;
        this._opacity_tm = setTimeout(
            function(){
                func._opacity_tmi = setInterval(
                    function(){
                        func._opacity(a, opacity, c + c);
                    }
                , 20
                );
            }
        , this.eDownMS);
    },
    _opacity_stop : function(a, opacity, c)
    {
        if(this._opacity_tm  != null){ clearTimeout (this._opacity_tm ); }
        if(this._opacity_tmi != null){ clearInterval(this._opacity_tmi); }

        var eUpTime = new Date().getTime();
        if (eUpTime - this.eDownTime < this.eDownMS) {
            this._opacity(a, opacity, c);
        }

        this.eDownTime = null;
    },
	_gray_scale : function(a, sw )
	{
		var item = a.data( 'data' );
        if(item.parent.title_sys && item.parent.title_sys == CONFIG.layerBaseFolderSYS){
            item._visibleInfo.grayscale = sw.checked();

            GSI.GLOBALS.baseLayer.setGrayScale(sw.checked());
        }
	},
	_checkEvacuationLayer : function()
	{
	    if ( this.mapLayerList )
	    {
	    	var l = this.mapLayerList.getList();
	    	for(i = 0 ; i < l.length; i++ )
	    	{				
	    		if ( l[i].id.indexOf(CONFIG.layerEvacuationHeader) >= 0 )
	    		{
	    			return true;
	    		}				
	    	}
	    	var tl = this.mapLayerList.getTileList();

	    	for(i = 0 ; i < tl.length; i++ )
	    	{				
	    		if ( tl[i].id.indexOf(CONFIG.layerEvacuationHeader) >= 0 )
	    		{
	    			return true;
	    		}			
	    	}
	    }
		if( GSI.GLOBALS.layerTreeDialog.current )
		{
			if ( GSI.GLOBALS.layerTreeDialog.current.title_evac )
			{
				return true;
			}
		}
		

	    GSI.GLOBALS.evacDialog.hide();
		CONFIG.layerEvacuationIsConfirmOK = false;
	    return false;
	},
	_blendTile : function ( a, flg )
	{
       	if (GSI.Utils.Browser.ie)
       	{
       		//alert('この機能はインターネットエクスプローラーではご利用いただけません。');
       		return;
       	}

		var item = a.data('data');
		GSI.Utils.setMixBlendMode( item, flg );
		/*
		var tileId = getblendTileSetting(item.id);

		var el = item._visibleInfo.layer._container.getAttribute('style');
		if ( el )
		{
		    el = el.replace("mix-blend-mode: multiply; ", "");
		}
		else
		{
		    el = "";
		}
		if ( flg == true)
		{
			el = "mix-blend-mode: multiply; " + el;
		}
	    item._visibleInfo.layer._container.setAttribute('style', el);
		*/
	}
});

GSI.OpacitySlider = L.Class.extend( {

	includes: L.Mixin.Events,
	options : { value : 1 },
	element : null,
	initialize : function (options)
	{
		options = L.setOptions(this, options);
		this.opacity = options.value;
		this.element = $( '<div>' ).addClass( 'gsi_opacity_slider' );

		this.bg = $( '<div>' ).addClass( 'gsi_opacity_slider_bg' );
		this.element.append( this.bg );

		this.btn = $( '<div>' ).addClass( 'gsi_opacity_slider_btn' ) . draggable( {
			containment: this.element,
			scroll: false,
			drag : L.bind( function(  event, ui)
			{
				var w = this.element.outerWidth(false) - 24;
				this.opacity = 1 - ui.position.left / w;

				this.fire( 'change', this.opacity );
			}, this )
		} );
		this.element.append( this.btn );
	},
	refresh : function( opacity )
	{
		this.opacity = opacity;
		var w = this.element.outerWidth(false) - 24;
		var left  = Math.floor( w * (1-this.opacity) );
		this.btn.css( {left:left} );
	},
	getElement : function(){ return this.element; },
	getOpacity : function() {
		return this.opacity;
	}
} );

/************************************************************************
 L.Class
 - GSI.EvacDialog
 ************************************************************************/
GSI.EvacDialog = L.Control.extend( {
	options : {
		width: '310px',
		position:'bottomright',
	},
	initialize : function()
	{
		this._map = GSI.GLOBALS.map;
		L.Util.setOptions(this, this.options);
		this._isShow = false;
	},
	show : function ()
	{
		if (this._isShow == false)
		{
			if (!this._map)
			{
				this._map = GSI.GLOBALS.map;
			}
			this.addTo(this._map);
		}
		this._isShow = true;
	},
	hide : function ()
	{
		if (this._isShow == true)
		{
			this.removeFrom(this._map);
		}
		this._isShow = false;
	},
	onAdd: function (map)
	{
		this._map = map;
		this._container = L.DomUtil.create('div', 'evac_dialog');
		//content
		var frame =$('<div>').addClass('evac_dialog_content').html(this.createContent());
		
		$(this._container).css({'opacity':'0.7'}).append(frame);

		return this._container
	},
	createContent : function()
	{
		return GSI.TEXT.EVAC.KIYAKU + "<br>" + GSI.TEXT.EVAC.KIYAKULINK;
    }
} );

/************************************************************************
 L.Class
 - GSI.DialogManager
 ************************************************************************/
GSI.DialogManager = L.Class.extend( {
	dialogList : [],
	visibleList : [],
	initialize : function() {},
	append : function( dlg )
	{
		this.dialogList.push( dlg );
	},
	appendVisibleList : function( dlg, noActivate )
	{
		for ( var i=0; i<this.visibleList.length; i++ )
		{
			var d = this.visibleList[i];
			if ( d == dlg )
			{
				if ( noActivate ) return;
				this.visibleList.splice( i,1 );
				break;
			}
		}

		this.adjust( dlg );
		if ( noActivate && this.visibleList.length > 0)
		{
			this.visibleList.splice( this.visibleList.length-1, 0, dlg );
		}
		else
			this.visibleList.push( dlg );
		this.refreshZIndex();

		if ( !this._onWindowResize )
		{
			this._onWindowResize = L.bind( this.onWindowResize, this );
			$( window ).on( 'resize', this._onWindowResize );
		}
	},
	removeVisibleList : function( dlg )
	{
		for ( var i=0; i<this.visibleList.length; i++ )
		{
			var d = this.visibleList[i];
			if ( d == dlg )
			{
				this.visibleList.splice( i,1 );
				break;
			}
		}
		this.refreshZIndex();

		if ( this.visibleList.length <= 0 )
		{
			if ( this._onWindowResize )
			{
				$( window ).off( 'resize', this._onWindowResize );
				this._onWindowResize = null;
			}
		}
	},
	activate : function( dlg )
	{
		this.appendVisibleList( dlg );
	},
	refreshZIndex : function()
	{
		var zIndex = 10000;
		var dlgIndex = -1;
		var idx = 1;

		for ( var i=0; i<this.visibleList.length-1; i++ )
		{
			var opacity = 0.6 + ( 0.4 / this.visibleList.length * idx );
			if (this.visibleList[i].options.containerClass != "evac_dialog")
			{
				this.visibleList[i].css({'z-index':zIndex, opacity: opacity} );			
			}
			this.visibleList[i].addClass( "deactive");

			zIndex++;
			idx++;
		}

		if ( this.visibleList.length > 0 )
		{
			if (this.visibleList[ this.visibleList.length - 1].options.containerClass != "evac_dialog")
			{
				this.visibleList[ this.visibleList.length - 1 ].css({'z-index':zIndex, opacity: 0.95} );
			}
			else
			{
				this.visibleList[ this.visibleList.length - 1 ].css({'z-index':zIndex, opacity: 0.6} );				
			}
			this.visibleList[i].removeClass( "deactive");
		}
	},
	adjust : function( d, windowSize )
	{
		if ( !windowSize ) windowSize = GSI.Utils.getScreenSize();

		var visible = d.container.is( ':visible' );
		if (  !visible )
		{
			d.container.css( { 'visibility' : 'hidden' } );
			d.container.show();
		}

		var offset = d.container.offset();
		var width = d.container.outerWidth(true);
		var height = d.container.outerHeight(true);
		var left = null;
		var top = null;

		// width
		if ( !d.isResizable() )
		{
			if ( windowSize.h > windowSize.w )
			{
				var newWidth = Math.floor( windowSize.w * 0.9 );
				if ( d.options.width > newWidth )
				{
					d.container.css( { "max-width" : newWidth } );
					width = newWidth;
				}
				else
				{
					d.container.css( { "max-width" : d.options.width } );
					width =d.options.width;
				}
			}
			else
			{
				var newWidth = Math.floor( windowSize.w * 0.6 );
				if ( d.options.width > newWidth )
				{
					d.container.css( { "max-width" : newWidth } );
					width = newWidth;
				}
				else
				{
					d.container.css( { "max-width" : d.options.width } );
					width =d.options.width;
				}
			}
		}

		// height
		if ( !d._userResized )
		{
			if ( windowSize.h > windowSize.w )
			{
				d.setMaxScrollHeight( Math.floor( windowSize.h * 0.4 )  );
			}
			else
			{
				d.setMaxScrollHeight( Math.floor( windowSize.h * 0.65 ) );
			}
		}

		//left
		if ( offset.left > windowSize.w - ( width / 2 ) )
		{
			left = (windowSize.w - ( width / 2 )) ;
		}

		if ( offset.left <= -( width / 2 ) )
		{
			left =  -Math.floor( width / 2 );
			d.container.css( {left: -Math.floor( width / 2 ) + 'px'} );
		}

		if ( left != null )
		{
			d.container.css( {left: left + 'px'} );
		}

		//top
		if ( offset.top > windowSize.h - ( height / 2 ) )
		{
			top = (windowSize.h - ( height / 2 )) ;
		}

		if ( offset.top < 0 )
		{
			top = 0;
		}

		if ( top != null )
		{
			d.container.css( {top: top + 'px'} );
		}

		if ( !visible )
		{
			d.container.hide();
			d.container.css( { 'visibility' : 'visible' } );
		}
	},
	onWindowResize : function()
	{
		var windowSize = GSI.Utils.getScreenSize();
		for ( var i=0; i<this.visibleList.length; i++ )
		{
			var d = this.visibleList[i];
			this.adjust( d,windowSize );
		}
	},
	isVisibleDialog : function( dlg ){
		for ( var i=0; i<this.visibleList.length; i++ )
		{
			var d = this.visibleList[i];
			if ( d == dlg )
			{
				return true;
			}
		}
		return false;
	}
} );
/************************************************************************
 L.Class
 - GSI.EvacuationManager
 ************************************************************************/
GSI.EvacuationManager = L.Class.extend({
	initialize : function( queryParams )
	{
		this._isVisibleDialog = false;
		if (queryParams)
		{
			this._queryparams = null;
			this._queryParams = queryParams;
		}
	},
	Reset : function( qp )
	{
		this.initialize( qp );
	},
	Out : function()
	{
		return this._queryParams;
	},
	accept : function()
	{
		var d;
		
		if (this._queryParams.params["disp"])
		{
			d = this._queryParams.params["disp"];
		}

		var ls, ly, lcd;
		if(this._queryParams.params["ls"])
		{
			ls = this._queryParams.params["ls"].split("|");
			GSI.Utils.rpad(d, "0", ls.length);
		}
		ly = this._queryParams._layers;
		lcd = this._queryParams.params["lcd"];
		if (ls)
		{
			if (d.charAt(ls.length-1) == "1")
			{
				this._isVisibleDialog = true;
			}

			if ( lcd && lcd.indexOf(CONFIG.layerEvacuationHeader) >= 0 )
			{
				for(var i = ls.length - 1; i >= 0; i--)
				{
					if ( (lcd != ls[i]) && ls[i].indexOf(CONFIG.layerEvacuationHeader) >= 0 )
					{
						ls.splice(i,1);
						this._isVisibleDialog = (this._isVisibleDialog || (d.charAt(i) == "1") )
					}
				}
			}
			else
			{
				var lsct = 0;
				for(var i = ls.length - 1; i >= 0; i--)
				{
					if (ls[i].indexOf(CONFIG.layerEvacuationHeader)>=0)
					{
						if (lsct > 0)
						{
							ls.splice(i,1);
						}
						lsct++;
					}
				}
			}
			this._queryParams.params["ls"] = ls.join('|');
		}

		var dct = 0;
		if (ly)
		{
			for(var i = ly.length - 1; i >= 0; i--)
			{
				if ( lcd && lcd.indexOf(CONFIG.layerEvacuationHeader) >= 0 )
				{
					if ((lcd != ly[i].id) && ly[i].id.indexOf(CONFIG.layerEvacuationHeader) >= 0 )
					{
						ly.splice(i,1);
					}
				}
				else
				{
					if ( ly[i].id.indexOf(CONFIG.layerEvacuationHeader) >= 0 )
					{
						if (dct > 0)
						{
							ly.splice(i,1);
						}
						dct++;
					}
				}			
			}
		}
	},
	cancel : function()
	{
		var ls, ly, lcd;
		if(this._queryParams.params["ls"])
		{
			ls = this._queryParams.params["ls"].split("|");
		}
		ly = this._queryParams._layers;
		lcd = this._queryParams.params["lcd"];

		if (ls)
		{
			for(var i = ls.length - 1; i >= 0; i--)
			{
				if (ls[i].indexOf(CONFIG.layerEvacuationHeader)>=0)
				{
					ls.splice(i,1);
				}
			}
			this._queryParams.params["ls"] = ls.join('|');
		}

		if (lcd)
		{
			if (lcd.indexOf(CONFIG.layerEvacuationHeader)>=0)
			{
				this._queryParams.params["lcd"]=null;
			}
		}

		if (ly)
		{
			for(var i = ly.length - 1; i >= 0; i--)
			{
				if (ly[i].id.indexOf(CONFIG.layerEvacuationHeader)>=0)
				{
					ly.splice(i,1);
				}
			}
		}
		this._isVisibleDialog = false;
	},
	isVisibleDialog : function()
	{
		return this._isVisibleDialog;
	}
});

/************************************************************************
 L.Class
 - GSI.Edit.Marker
 ************************************************************************/
GSI.Edit.Marker = L.Class.extend( {
	includes: L.Mixin.Events,
	options :{},
	initialize : function( marker, options )
	{
		this.marker = marker;

		if ( this.marker ) this._map = this.marker._map;
		options = L.setOptions(this, options);
	},
	setOptions : function(options)
	{
		if ( !this.marker ) return;

		if ( options.icon )
			this.marker.setIcon( options.icon );
	},
	enable : function()
	{
		if ( !this.marker ) return;

		this.marker.dragging.enable();
	},
	disable : function()
	{
		if ( !this.marker ) return;
		this.marker.dragging.disable();
	}
} );

/************************************************************************
 L.Class
 - GSI.Footer
 ************************************************************************/
GSI.Footer = L.Class.extend( {
	options : {
		visible : true,
	},
	overlap : false,
	initialize : function (map,bottomLeftSpacer, bottomRightSpacer, mapSelector, btnSelector, footerSelector, upImage, downImage, options )
	{
		L.setOptions(this, options);
		if ( !options.visible )
		{
			$( btnSelector ).hide();
			$( footerSelector ).hide();
			return;
		}

		this.overlap = options.overlap;
		this.map = map;
		this.bottomLeftSpacer = bottomLeftSpacer;
		this.bottomRightSpacer = bottomRightSpacer;
		this.mapSelector = mapSelector;
		this.btnSelector = btnSelector;
		this.footerSelector = footerSelector;
		this.upImage = upImage;
		this.downImage = downImage;
		$( this.btnSelector).click( L.bind(this.onBtnClick,this) );

		this._onMapMove = L.bind(this.onMapMove, this);
		this._onMapMoveStart = L.bind(this.onMapMoveStart, this);
		this._onMapMoveEnd = L.bind(this.onMapMoveEnd, this);

		$(window).resize( L.bind( this.onWindowResize, this ) );
		this.onWindowResize();

		$(this.btnSelector).css( { 'visibility' : 'visible'} ).show();
	},
	isVisible : function()
	{
		return $(this.footerSelector).is(':visible');
	},
	onWindowResize : function()
	{
		this.refreshSize();
	},
	setOverlap : function( on )
	{
		this.overlap = on;
		this.refreshSize();
	},
	getOverlap : function()
	{
		return this.overlap;
	},
    setVisible : function(sw){
        if(this.isVisible() != sw){
            this.onBtnClick();
        }
    },
	refreshSize : function()
	{
		var windowSize = GSI.Utils.getScreenSize();


		if ( windowSize.w < windowSize.h )
		{
			$( '.mini_comment' ).addClass( 'landscape' );
		}
		else
		{
			$( '.mini_comment' ).removeClass( 'landscape' );
		}

		var btn = $( this.btnSelector);
		var footerHeight =(  $(this.footerSelector).is(':visible') ? $( this.footerSelector ).outerHeight( true ) : 0 );

		btn.css( {
				left : Math.round( ( windowSize.w/2 ) - ( btn.outerWidth(true) / 2 ) ) + 'px',
				bottom : footerHeight + 'px'
			}
		);
		return;

		if (  !this.overlap  || !$(this.footerSelector).is(':visible') )
		{
			this.bottomLeftSpacer.setHeight( 0 );
			this.bottomRightSpacer.setHeight( 0 );
		}
		else
		{
			this.bottomLeftSpacer.setHeight( footerHeight );
			this.bottomRightSpacer.setHeight( footerHeight );
		}

		if ( !$(this.footerSelector).is(':visible') ) return;

		if(!this.overlap) $(this.mapSelector ).stop().css( {'bottom' : footerHeight + 'px'} );

		this.map.invalidateSize(true);
	},
	onBtnClick : function ()
	{
		var footerHeight = $( this.footerSelector ).outerHeight( true );

		if ( $(this.footerSelector).is(':visible') )
		{
			$( this.btnSelector).find( "img" ).attr( { 'src' : this.upImage } );

			if ( this.overlap )
			{
				$(this.mapSelector ).stop().css( {'bottom' : '0px'} );
				$(this.btnSelector ).stop().animate( {'bottom' : '0px'},300 );
				this.map.invalidateSize();
			}
			else
			{
				$(this.mapSelector ).stop().animate( {'bottom' : '0px'},300 );
				$(this.btnSelector ).stop().animate( {'bottom' : '0px'},300 );
			}
			$(this.footerSelector ).stop().animate( {'bottom' : (-footerHeight )  + 'px'},300,
				 L.bind(function() {
				 	$("#footer" ).hide(); if ( !this.overlap ) this.map.invalidateSize();
				 	if ( this.overlap )
				 	{
						this.bottomLeftSpacer.setHeight( 0 );
						this.bottomRightSpacer.setHeight( 0 );
					}
				 }, this )
			);

			this.map.off('movestart', this._onMapMoveStart );
			this.map.off('moveend', this._onMapMoveEnd );
		}
		else
		{
			this.onMapMove();
			this.onMapMoveEnd();
			$( this.btnSelector).find( "img" ).attr( { 'src' : this.downImage } );
			if ( this.overlap )
			{
				$(this.mapSelector ).stop().css( {'bottom' : '0px'} );
				$(this.btnSelector ).stop().animate( {'bottom' : footerHeight + 'px'},300 );
				this.map.invalidateSize();
			}
			else
			{
				$(this.mapSelector ).stop().animate( {'bottom' : footerHeight + 'px'},300 );
				$(this.btnSelector ).stop().animate( {'bottom' : footerHeight + 'px'},300 );
			}
			$(this.footerSelector ).css( {'bottom': (-footerHeight ) + 'px' } ).show().stop().animate( {'bottom' : 0 + 'px'},300,
				L.bind(function() {
					if ( !this.overlap ) this.map.invalidateSize();
					if ( this.overlap )
				 	{
						this.bottomLeftSpacer.setHeight( footerHeight );
						this.bottomRightSpacer.setHeight( footerHeight );
					}
				} , this )
			);

			this.map.on('movestart', this._onMapMoveStart );
			this.map.on('moveend', this._onMapMoveEnd );
		}
	},
	onMapMoveStart : function()
	{
		this.clear();
	},
	onMapMove : function()
	{
		var center = this.map.getCenter().wrap();
		var dms = GSI.Utils.latLngToDMS( center );

		$( '#latlng_60' ).html(
			(center.lat < 0 ? '-' : '') + dms.lat.d + '度' + dms.lat.m + '分' + ( Math.round( dms.lat.s * 100 ) / 100 ).toFixed(2)  + '秒'
			+ '&nbsp;'  +
			(center.lng < 0 ? '-' : '') + dms.lng.d + '度' + dms.lng.m + '分' + ( Math.round( dms.lng.s * 100 ) / 100 ).toFixed(2)  + '秒'
			);
		
		$( '#latlng_10' ).html(
			( Math.round( center.lat * 1000000 ) / 1000000 ).toFixed(6)
			+ ','
			+ ( Math.round( center.lng * 1000000 ) / 1000000 ).toFixed(6)
			);

		var utmPoint = GSI.UTM.Utils.latlng2PointName( center.lat, center.lng );
		$( '#utm_point' ).html( utmPoint == '' ? '---' : utmPoint);

		$( '#current_zoom' ).html(
			this.map.getZoom()
			);

		this.refreshSize();
	},
	onMapMoveEnd : function()
	{
		this.onMapMove();
		var center = this.map.getCenter().wrap();
		this.refresh(center.lng,center.lat);


	},
	clear : function()
	{
		$("#address").empty();
		$("#address").append("---");
		$("#elevation").empty();
		$("#elevation").append("---");
		$("#elevationSrc").empty();

		this.refreshSize();
		if ( this.ajaxAddress )
		{
			try
			{
				this.ajaxAddress.abort();
			}
			catch( e ){}

			this.ajaxAddress = null;
		}

		if ( this.ajaxElevation )
		{
			try
			{
				this.ajaxElevation.abort();
			}
			catch( e ){}
			this.ajaxElevation = null;
		}
	},
	refresh : function(lon, lat){

		this.clear();
		this.refreshTimerId  = setTimeout( L.Util.bind( this.execRefresh, this, lon, lat ), 800 );
	},
	getAddressResult : function(json)
	{
		if (json.results){
			var address = "";
			var addObj = json.results;
			var addressData = GSI.MUNI_ARRAY[parseInt(addObj.muniCd,10)+""];
			if (addressData) {
				addressData = addressData.split(",");
				var muniNm = (addressData[1]+addressData[3]).replace("　","");
				address += muniNm;
			}
			if (addObj.lv01Nm) address += addObj.lv01Nm;

			$("#address").empty();
			$("#address").append(address ? address : "---");
			this.refreshSize();
		}
	},
	getElevationRusult : function (data, dataSrc)
	{
		var outPutHeight = data;
		var outPutHeightSrc = "（" + "データソース：" + this.vDemAltSRC + "）";
		
		$( "#elevation" ).html( outPutHeight );
		$( "#elevationSrc" ).html( outPutHeightSrc );
		this.refreshSize();
	},
	execRefresh : function (lon, lat)
	{
		this.ajaxAddress = $.ajax({
			type: "GET",
			url:CONFIG.SERVERAPI.GETADDR,
			data: {
				"lon" : lon,
				"lat" : lat
			},
			dataType: "json",
			timeout: 30000,
			success: L.Util.bind( this.getAddressResult, this ),
			error : function(){}
		});

        if(this.vDemAltReq){
            for(var n = 0; n < this.vDemAltReq.length; n++){
                this.vDemAltReq[n].abort();
            }
        }

        this.vDemAlt      = "---";
        this.vDemAltSRC   = "---";
        this.vDemAltTypeN = 0;
        this.vDemAltReq   = new Array();

        var lon = lon * .017453292519943295; // DEG → RAD : lon = (lon / 180) * Math.PI;
        var lat = lat * .017453292519943295; // DEG → RAD : lat = (lat / 180) * Math.PI;
	    var R	= 128 / Math.PI;
	    this.vDemAltTileX = R * (lon + Math.PI);
	    this.vDemAltTileY = (-1) * R / 2 * Math.log((1 + Math.sin(lat)) / (1 - Math.sin(lat))) + 128;

        this.execRefreshAlt();
	},
	execRefreshAlt : function ()
	{
        if(this.vDemAltTypeN < CONFIG.DEM.length){
            var vType = CONFIG.DEM[this.vDemAltTypeN].type; if(!(vType == "TXT" || vType == "PNG")){ vType = "TXT"; }
            var vURL  = CONFIG.DEM[this.vDemAltTypeN].url;
            var vZ    = CONFIG.DEM[this.vDemAltTypeN].z;
            var vX    = this.vDemAltTileX;
            var vY    = this.vDemAltTileY;

            var vX_px     = vX * Math.pow(2, vZ);
            var vY_px     = vY * Math.pow(2, vZ);
            var vX_Tile   = Math.floor(vX_px / 256);
            var vY_Tile	  = Math.floor(vY_px / 256);
            this.vX_TilePX = Math.floor(vX_px) % 256;
            this.vY_TilePX = Math.floor(vY_px) % 256;

            var _vDemURL = vURL.replace("{z}", vZ).replace("{x}", vX_Tile).replace("{y}", vY_Tile);
            this._url = _vDemURL;
            if(vType == "TXT"){
		        this.ajaxElevation = $.ajax({
			          type     : "GET"
			        , url      : _vDemURL
                    , dataType : "text"
                  //, cache    : false
			        , success  : L.Util.bind( this.execRefreshAltTxt  , this )
                    , error    : L.Util.bind( this.execRefreshAltError, this )
		        });
                this.vDemAltReq.push(this.ajaxElevation);
            }
            else if(vType == "PNG"){
                this.DemPng             = new Image();
                this.DemPng.crossOrigin = "anonymous";
                this.DemPng.onload      = L.Util.bind( this.execRefreshAltPng  , this );
                this.DemPng.onerror     = L.Util.bind( this.execRefreshAltError, this );
                this.DemPng.src         = _vDemURL;

            }
        }
        else{
            this.getElevationRusult(this.vDemAlt, this.vDemAltSRC);
        }
    },
    execRefreshAltTxt : function (vDem)
	{
        if(this.vDemAltTypeN == -1){
            return;
        }

        var f = false;
        vDem = vDem.replace(/\r/g, "");
        var vDemData = vDem.split("\n");
        if(vDemData.length >= this.vY_TilePX){
            var vDemDataY = vDemData[this.vY_TilePX];
            var vDemDataX = vDemDataY.split(",");
            if(vDemDataX.length >= this.vX_TilePX){
                var vDemDataAlt = vDemDataX[this.vX_TilePX];
                if(vDemDataAlt != "e"){
                    this.vDemAlt    = parseFloat(vDemDataAlt).toFixed(CONFIG.DEM[this.vDemAltTypeN].fixed) + "m";
                    this.vDemAltSRC = CONFIG.DEM[this.vDemAltTypeN].src;
                    f = true;
                    this.vDemAltTypeN = -1;
                }
            }
        }

        this.getElevationRusult(this.vDemAlt, this.vDemAltSRC);
        if(!f){
            this.vDemAltTypeN++;
            this.execRefreshAlt();
        }
    },
    execRefreshAltPng : function (vDem)
	{
        var f = false;
        var oCanvasTile        = document.createElement("canvas");
            oCanvasTile.width  = this.DemPng.width;
            oCanvasTile.height = this.DemPng.height;  
        var oCanvasTileContext = oCanvasTile.getContext("2d");
        oCanvasTileContext.drawImage(this.DemPng, 0, 0);
        if(oCanvasTile.height >= this.vY_TilePX){
            if(oCanvasTile.width >= this.vX_TilePX){
                var data = oCanvasTileContext.getImageData(this.vX_TilePX, this.vY_TilePX, 1, 1).data;
                if(data.length >= 3){
                    var r = data[0];
                    var g = data[1];
                    var b = data[2];
                    var x = r * 256 * 256 + g * 256 + b;
                    var h = (x < Math.pow(2, 23)) ? x : x - Math.pow(2, 24);
                    if( h !== -Math.pow( 2, 23)){
                        this.vDemAlt    = parseFloat(h).toFixed(CONFIG.DEM[this.vDemAltTypeN].fixed) + "m";
                        this.vDemAltSRC = CONFIG.DEM[this.vDemAltTypeN].src;
                        f = true;
                    }
                }
            }
        }
        oCanvasTileContext = null;
        oCanvasTile        = null;

        this.getElevationRusult(this.vDemAlt, this.vDemAltSRC);
        if(!f){
            this.vDemAltTypeN++;
            this.execRefreshAlt();
        }
    },
    execRefreshAltError : function ()
	{
        this.vDemAltTypeN++;
        this.execRefreshAlt();
    }
} );



/************************************************************************
 L.Class
 - GSI.GeoLocation（位置情報取得）
 ************************************************************************/
GSI.GeoLocation = L.Class.extend( {
	includes: L.Mixin.Events,
	options : {
		watchInterval : 5000,
		max : 1000
	},
	initialize : function (map)
	{
		this.map = map;
	},
	
	getLocation : function()
	{
		if ( GSI.GeoLocation.can )
		{
			if ( this._getLocationId ) return false;
			
			this._locationCounter = 0;
			this._getLocationId = navigator.geolocation.watchPosition(
				L.bind(function(loc) {
					if ( loc.coords.accuracy < 100 || this._locationCounter >= 0)
					{
						var lat = loc.coords.latitude;
						var lng = loc.coords.longitude;
						var z = this.map.getZoom();
						if ( z < 15 )
						{
							z = CONFIG.SEARCHRESULTCLICKZOOM;
						}
						this.map.setView( [lat, lng], z );
						// クリア
						navigator.geolocation.clearWatch(this._getLocationId);
						this._getLocationId = null;	
					}
					this._locationCounter++;
				}, this ),
				L.bind(function(){},this),
				{ enableHighAccuracy: true, timeout: 60000, maximumAge: 0 }
			);

			return true;
		}
		else return false;

	}
	
	
} );

GSI.GeoLocation.can = ( navigator.geolocation && typeof navigator.geolocation.getCurrentPosition == 'function' ? true : false );



/************************************************************************
 L.Class
 - GSI.HashOptions
 ************************************************************************/
GSI.HashOptions = L.Class.extend( {
    initialize : function (map)
    {
        this.map = map;

		this._onMapMoveStart = L.bind(this.onMapMoveStart, this);
		this._onMapMoveEnd   = L.bind(this.onMapMoveEnd  , this);

		this.map.on('movestart', this._onMapMoveStart);
		this.map.on('moveend'  , this._onMapMoveEnd  );

        this.vLD                = 3000;
        this.oTM                = null;
        this.vTM                = 1500;
        this.nTM                = 0;
        this.vHash              = "";
        this.vHashOptions       = "";
        this.eHashChange        = false;
        this.eHashChangeOptions = "";

        this.Init();
    },
    Init : function(){
        this.oTM                = null;
        this.vHash              = "";
        this.vHashOptions       = "";
        this.eHashChange        = false;
        this.eHashChangeOptions = "";

        if(this.vTM >= 1000){
            this.HashCreate();
        }
        this.Hash();
    },
	onMapMoveStart : function()
	{
        clearInterval(this.oTM);
        this.oTM   = null;
	},
	onMapMoveEnd : function()
	{
        if(this.oTM != null){
            clearInterval(this.oTM);
        }

        this.oTM   = null;
        this.Hash();
    },
    Callback : function(t, o, hash){
        if(t == "moveend"){
            hash += o.vHashOptions;
            o.vHash = hash;
        }
        else if(t == "hashchange"){
            o.HashSetProc(hash);
        }

        return hash;
    },
    Hash : function()
    {
        if(this.oTM == null){
            var that = this;
            this.oTM = setInterval(
                function(){
                    that.nTM += that.vTM;
                    if(that.nTM > that.vLD){
                        that.nTM = that.vLD;
                    }
                    that.HashCreate();
                }
            , this.vTM);
        }
    },
    HashCreate : function(){
        var hash          = location.hash;
        var hash_location = "";
        var hash_options  = this.HashCreateProc();

        if(hash.indexOf("/&") == -1){
            hash_location     = GSI.GLOBALS.hash.formatHash(this.map);

            this.vHash        = "";
            this.vHashOptions = "";
        }
        else{
            var hash_ary = hash.split("/&");
            hash_location =        hash_ary[0];
        }

        hash = hash_location + hash_options;
        if(!this.eHashChange && this.vHash != hash){
            location.replace(hash);
            this.vHash        = hash;
            this.vHashOptions = hash_options;
        }

        this.eHashChange = false;
    },
    HashCreateProc : function(){
        var v    = "";
        var hash = "";

        if(this.eHashChange){
            hash = this.eHashChangeOptions;
        }
        else{
            hash += "/";

            // 基本設定：表示中の背景地図を共有
            // base=
            v = GSI.GLOBALS.pageStateManager.getBaseLayerQueryString();
            if(v != ""){
                hash += "&" + v;
            }

            // 基本設定：表示中のレイヤーを共有
            // ls=
            v = GSI.GLOBALS.pageStateManager.getLayersQueryString();
            if(v != ""){
                hash += "&" + v;
            }

            // 選択中の情報設定
            // disp=
            v = GSI.GLOBALS.pageStateManager.getTileViewSetting();
            if(v != ""){
                hash += "&" + v;
            }

            // 情報リスト設定：表示階層を共有
            // lcd=
            v = GSI.GLOBALS.pageStateManager.getCurrentPathQueryString();
            if(v != ""){
                hash += "&" + v;
            }

		    var hcList = [];

		    var skips = {};
		    skips[ CONFIG.PARAMETERNAMES.CLICKMOVE] = true;
		    skips[ CONFIG.PARAMETERNAMES.COCOTILE ] = true;
		    skips[ CONFIG.PARAMETERNAMES.MINIMAP  ] = true;

		    var visibles = {};
		    visibles[ CONFIG.PARAMETERNAMES.CENTERCROSS] = GSI.GLOBALS.pageStateManager.getViewSettingVisible(CONFIG.PARAMETERNAMES.CENTERCROSS); // 表示設定：中心十字線        vs=c[0/1]
		    visibles[ CONFIG.PARAMETERNAMES.JIHOKULINE ] = GSI.GLOBALS.pageStateManager.getViewSettingVisible(CONFIG.PARAMETERNAMES.JIHOKULINE ); // 表示設定：緯度経度グリッド  vs=l[0/1]
		    visibles[ CONFIG.PARAMETERNAMES.LATLNGGRID ] = GSI.GLOBALS.pageStateManager.getViewSettingVisible(CONFIG.PARAMETERNAMES.LATLNGGRID ); // 表示設定：UTMグリッド       vs=u[0/1]
		    visibles[ CONFIG.PARAMETERNAMES.UTMGRID    ] = GSI.GLOBALS.pageStateManager.getViewSettingVisible(CONFIG.PARAMETERNAMES.UTMGRID    ); // 表示設定：磁北線            vs=j[0/1]
		    visibles[ CONFIG.PARAMETERNAMES.FOOTER     ] = GSI.GLOBALS.footer.isVisible();
		    var visibleDialogs = {};
		    visibleDialogs[ CONFIG.DIALOGPARAMETER.VIEWLISTDIALOG ] = GSI.GLOBALS.viewListDialog .getVisible(); // 情報リスト設定：情報リスト d=l
		    visibleDialogs[ CONFIG.DIALOGPARAMETER.LAYERTREEDIALOG] = GSI.GLOBALS.layerTreeDialog.getVisible(); // 情報リスト設定：選択中の情報   d=v

		    var queryParams = GSI.GLOBALS.pageStateManager.getQueryParams(
            {
			      hcList : hcList
			    , vsInfo : {
				    skips    : skips,
				    visibles : visibles
			    }
			    , visibleDialogs : visibleDialogs
		    });

		    for( var key in queryParams)
		    {
                v = queryParams[key];
                if(v != ""){
                    hash += "&" + key + '=' + queryParams[key];
                }
		    }

            if(this.nTM < this.vLD){
                var vHash = location.hash.split("/&");
                if(vHash.length > 1){
                    if(    vHash[1].indexOf("base=") != -1
                        || vHash[1].indexOf("ls="  ) != -1
                        || vHash[1].indexOf("disp=") != -1
                        || vHash[1].indexOf("lcd=" ) != -1
                    ){
                        if(!(   this.vHash.indexOf("base=") != -1
                             || this.vHash.indexOf("ls="  ) != -1
                             || this.vHash.indexOf("disp=") != -1
                             || this.vHash.indexOf("lcd=" ) != -1
                            )
                        ){
                            hash = "/&" + vHash[1];
                        }
                    }
                }
            }
        }

        return hash;
    },
    HashSetProc : function( hash ){
        var n = hash.indexOf("/&");
        if(n >= 1){
            var options = hash.substr(n);
            if(this.vHashOptions != options){
                this.eHashChange = true;
				
				if (options.indexOf(CONFIG.layerEvacuationHeader) >= 0)
				{
					this.forEvacuation(options);
				}
				else
				{
					this.HashSetProc_sub(options);
				}
            }
        }
    },
    HashSetProc_sub : function( options ){
		this.eHashChangeOptions = options;

		GSI.GLOBALS.queryParams.initialize_proc(options);

		// 基本設定：表示中の背景地図を共有
		// base=
		var base = GSI.GLOBALS.queryParams.getBaseMap();
		GSI.GLOBALS.baseLayer.setActiveId(base);
		// base_grayscale=
		GSI.GLOBALS.baseLayer.setGrayScale(GSI.GLOBALS.queryParams.getBaseMapGrayScale());

		// 基本設定：表示中のレイヤーを共有
		// ls=
		//  +
		// 選択中の情報設定
		// disp=
		var layers = GSI.GLOBALS.queryParams.getLayers();
		var bfind = false;
		var vl = GSI.GLOBALS.pageStateManager.getLayersQueryString();
		var idx = vl.indexOf( "ls=" );
		if ( idx >= 0 )
		{
			vl = vl.substring( idx + 3 ).split( "%7C" );
		}
		if ( layers && ( vl && vl.length > 0 ) )
		{
			
			for( var i =0; i < layers.length; i++ )
			{
				for( var j=0; j < vl.length; j++ )
				{
					if ( layers[i].id == vl[j] )
					{
						bfind = true;
						break;
					}
					
				}
				if ( bfind == false )
				{
					GSI.GLOBALS.layerTreeDialog.setCurrentPath(GSI.GLOBALS.queryParams.getCurrentPath());
				}
				bfind = false;
			}
		}
		else if ( layers )
		{
			for( i = 0; i < layers.length; i++ )
			{
				GSI.Utils.sendSelectedLayer( layers[i].id );
			}
		}
		GSI.GLOBALS.layersJSON.initialize_layers_data(layers);
		GSI.GLOBALS.viewListDialog.Refresh(GSI.GLOBALS.layersJSON.visibleLayers);

		var viewSetting = GSI.GLOBALS.queryParams.getViewSetting();
		// 表示設定：中心十字線           vs=c[0/1]
		GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.CENTERCROSS].obj.setVisible(viewSetting.centerCross);
		// 表示設定：磁北線               vs=j[0/1]
		GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.JIHOKULINE ].obj.setVisible(viewSetting.jihokuLine );
		// 表示設定：緯度経度グリッド     vs=l[0/1]
		GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.LATLNGGRID ].obj.setVisible(viewSetting.latLngGrid    );
		// 表示設定：UTMグリッド          vs=u[0/1]
		GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.UTMGRID    ].obj.setVisible(viewSetting.utmGrid );
		// 表示設定：コンテキストメニュー vs=f[0/1]
		GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.FOOTER     ].obj.setVisible(viewSetting.footer     );

		// 情報リスト設定：選択中の情報   d=v
		if(GSI.GLOBALS.queryParams.getViewListDialogVisible()){
			GSI.GLOBALS.viewListDialog.show();
		}
		else{
			GSI.GLOBALS.viewListDialog.hide();
		}

		// 情報リスト設定：情報リスト d=v
		if(GSI.GLOBALS.queryParams.getLayerTreeDialogVisible()){
			GSI.GLOBALS.layerTreeDialog.show();
		}
		else{
			GSI.GLOBALS.layerTreeDialog.hide();
		}

	},
	forEvacuation : function ( options )
	{
		
		var disp = "";
		var ops = {};
		var op = options.split("&");
		for( var i = 0; i < op.length; i++ )
		{
			var it = op[i].split("=");
			ops[it[0]] = it[1];
		}
		
		if (ops["disp"])
		{
			//逆順に並べておく
			for( var i = ops["disp"].length - 1; i >= 0; i-- )
			{
				disp += ops["disp"].charAt(i);
			}
			ops["disp"] = "";
		}
		GSI.GLOBALS.confirmDlg.onPositiveButtonClick = L.bind(this.evacuationConfirmOK, this, ops, disp);
		GSI.GLOBALS.confirmDlg.onNegativeButtonClick = L.bind(this.evacuationConfirmCancel, this, ops, disp);

		if ( ops["ls"].indexOf(CONFIG.layerEvacuationHeader) < 0 )
		{
			GSI.GLOBALS.evacDialog.hide();
			HashSetProc_sub(options);
		}
		else
		{
			var ls = ops["ls"].split("%7C");
			if  (CONFIG.layerEvacuationIsConfirmOK == false )
			{
				GSI.GLOBALS.confirmDlg.show();
			}
			else
			{
				this.evacuationConfirmOK( ops, disp );
			}
		}
	},
	evacuationConfirmOK : function( ops, disp )
	{
		var wrongls = false;
		if (ops["ls"])
		{
			var ls = ops["ls"].split("%7C");
			if (ls)
			{
				if ( disp.length < ls.length ) GSI.Utils.rpad(disp, "0", ls.length);

				if ( ops["lcd"] && ops["lcd"].indexOf(CONFIG.layerEvacuationHeader) >= 0 )
				{
					var cc = 0;
					//with lcd
					for (var i = ls.length-1; i>=0; i--)
					{
						
						if ((ops["lcd"] != ls[i]) && (ls[i].indexOf(CONFIG.layerEvacuationHeader)>=0))
						{
							ls.splice(i, 1);
							wrongls = true;
						}
						else
						{
							ops["disp"]+=disp.charAt(i);
						}
					}
				}
				else
				{
					var dct;
					for (var i = ls.length-1; i>=0; i--)
					{
						if (ls[i].indexOf(CONFIG.layerEvacuationHeader)>=0)
						{
							if (dct > 0)
							{
								ls.splice(i, 1);
								wrongls = true;
							}
							else
							{
								ops["disp"] += disp.charAt(i);
								dct++;
							}
						}
						else
						{
							if ( disp.charAt(i) )
							{
								ops["disp"] += disp.charAt(i);
							}
						}
					}
				}
				ops["ls"] = ls.join("%7C");
			}		
		}
		var newop = "";
		for( var key in ops )
		{
			if ( ops[key] )
				newop += (key + "=" + ops[key] + "&");
			else
				newop += (key + "&");
		}
		if (wrongls == true)
		{
			location.hash = newop;
		}
		else
		{
			this.HashSetProc_sub(newop.substring(0, newop.length - 1));
		}
		GSI.GLOBALS.confirmDlg.hide();
		if (GSI.Dialog._dialogManager.isVisibleDialog(GSI.GLOBALS.evacDialog) == false)
		{
			GSI.GLOBALS.evacDialog.show();
		}

	},
	evacuationConfirmCancel : function( ops, disp )
	{
		if ( ops["ls"] )
		{
			var ls = ops["ls"].split("%7C");
			if( ls )
			{
				if ( disp.length < ls.length ) GSI.Utils.rpad(disp, "0", ls.length);

				for ( var i = ls.length - 1; i >= 0; i-- )
				{
					if ( ls[i].indexOf(CONFIG.layerEvacuationHeader) >= 0 )
					{
						ls.splice(i, 1);
					}
					else
					{
						if ( disp.charAt(i) )
						{
							ops["disp"] += disp.charAt(i);
						}
					}
				}
				ops["ls"] = ls.join("%7C");
			}
			if ( ops["lcd"] )
			{
				if ( ops["lcd"].indexOf(CONFIG.layerEvacuationHeader) >= 0 )
				{
					ops["lcd"] = null;
				}
			}		
		}
		var newop = "";
		for( var key in ops )
		{
			if ( ops[key] )
				newop += (key + "=" + ops[key] + "&");
			else
				newop += (key + "&");
		}
		location.hash = newop;
		GSI.GLOBALS.confirmDlg.hide();
	}
} );

/************************************************************************
 L.Class
 - GSI.Header
 ************************************************************************/
GSI.Header = L.Class.extend( {
	includes: L.Mixin.Events,
	options : {
		visible : true
	},
	topMessageVisible : false,
	header : null,
	initialize : function (map, options )
	{
		options = L.setOptions(this, options);
		if ( !options.visible )
		{
			$( "#header" ).hide();
			$( "#topmessage" ).hide();
			this.topMessageVisible = false;
		}
		else
		{
			this.header = $( "#header" );
			this.logoImage = $( "#logoimage" );
			this.topMessage = $( "#topmessage" );

			// お知らせ表示
			if ( this._isVisibleStart() ) //options.message && options.message != '' )
			{
				this.topMessage.empty() .append( $("<div>").addClass('message').html( options.message ) );
				var closeBtn = $( '<a>' ).addClass( 'closebtn' ).attr( {'href': 'javascript:void(0);'} ).html( '×' );

				this.topMessage.append( closeBtn );

				closeBtn.click( L.bind( this.onCloseClick, this ) );

				this.topMessageVisible = true;
			}
			else
			{
				$( "#topmessage" ).hide();
				this.header.addClass( 'border_bottom' );
				this.topMessageVisible = false;
			}
		}
		this.map = map;
	},
	_isVisibleStart : function()
	{
		if ( this.options.message && this.options.message != '' )
		{
			if ( this.options.expires > 0 )
			{
				try
				{
					var cookie = new GSI.Utils.Cookie();
					var isHidden = cookie.get( 'topmessage_hidden' );
					var id = cookie.get( 'topmessage_id' );
					// id change
					if ( isHidden == '1' && ( id == this.options.id ) ) return false;
				}
				catch( e ){}
			}
			else
			{
				try
				{
					cookie.remove( 'topmessage_hidden' );
					cookie.remove( 'topmessage_id' );
				}
				catch( e ){}
			}
			return true;
		}
		else
		{
			return false;
		}
	},
	hideTopMessage : function()
	{
		this.topMessage .hide();
		this.header.addClass( 'border_bottom' );
		this.topMessageVisible=false;
		
		try
		{
			if ( this.options.expires > 0 )
			{
				var cookie = new GSI.Utils.Cookie();
				cookie.set( 'topmessage_hidden', '1', { expires: this.options.expires } );
				if ( this.options.id )
					cookie.set( 'topmessage_id', this.options.id, { expires: this.options.expires } );
				else
					cookie.remove( 'topmessage_id' );
			}
			else
			{
				cookie.remove( 'topmessage_hidden' );
				cookie.remove( 'topmessage_id' );
			}
		}
		catch( e ){}
	},
	onCloseClick : function()
	{
		this.topMessage.animate(
			{
				height: "hide"
			},
			{
				duration: 80, easing: "linear",
				complete: L.bind( function(){this.hideTopMessage();this.fire( 'topmessagechange' );}, this ),
				step: L.bind( function(){this.fire( 'topmessagechange' );}, this )
			}
		);
	},
	getHeight : function()
	{
		if ( !this.options.visible ) return 0;

		return this.header.outerHeight(true) + ( this.topMessageVisible ? this.topMessage.outerHeight( true ) : 0 );
	},
	refresh : function(screenSize)
	{
		if ( !this.options.visible ) return;

		var removeClassName = 'logo_l';
		var addClassName = 'logo_s';
		var imageUrl = 'image/logo_s.png';

		if ( screenSize.w >= 600 )
		{
			removeClassName = 'logo_s';
			addClassName = 'logo_l';
			imageUrl = 'image/logo_l.png';
		}

		this.header .removeClass( removeClassName );
		this.header .addClass( addClassName );
		if ( this.currentImageUrl != imageUrl )
		{
			this.logoImage.attr( { src:imageUrl} );
			this.currentImageUrl = imageUrl;
		}
	}
} );

/************************************************************************
 L.Class
 - GSI.IconSelector
 ************************************************************************/
GSI.IconSelector = L.Class.extend( {
	includes: L.Mixin.Events,
	iconList : [],
	options :{
		cols : 10
	},
	initialize : function( image, iconList, options )
	{
		this.image = image;
		this.image.css( { cursor:'pointer'} );
		this.iconList = ( iconList ? iconList : [] );

		options = L.setOptions(this, options);

		this.image.click( L.bind( this.onClick, this ) );
	},
	onClick : function()
	{
		this.show();
	},
	onSelect : function( iconInfo )
	{
		this.image.attr( {src:iconInfo.url} );
		this.selectedIcon = iconInfo;
		this.fire( 'select', { selectedIcon : iconInfo } );
		this.hide();
	},
	setSelectedIcon : function( iconUrl )
	{
		this.selectedIcon = null;
		for ( var i=0; i<this.iconList.length; i++ )
		{
			if ( this.iconList[i].url == iconUrl )
			{
				this.selectedIcon = this.iconList[i];
				break;
			}
		}
	},
	create : function()
	{
		if ( this.container )return;

		this.container = $( '<div>' ).addClass( 'gsi_iconselector' ).hide();

		var table = $( '<table>' );
		var tbody = $( '<tbody>' );
		var tr = null;
		var colNo = 0;

		for ( var i=0; i<this.iconList.length; i++ )
		{
			var iconInfo = this.iconList[i];
			colNo = i % this.options.cols;

			if ( colNo == 0 )
			{
				tr = $( '<tr>' );
				tbody.append( tr );
			}

			var td = $( '<td>' );
			var a = $( '<a>' ).attr( { href: 'javascript:void(0);'} ).click( L.bind( this.onSelect, this, iconInfo ) );
			var image = $( '<img>' ).attr( {src:iconInfo.url} );
			if ( iconInfo.size )
			{
				image.css({
					width : iconInfo.size[0],
					height : iconInfo.size[1]
				});
			}

			a.append( image );
			td.append( a );
			tr.append( td );
		}

		if ( tr )
		{
			for ( var i = colNo; i < this.options.cols; i++ )
			{
				var td = $( '<td>' ).html( '<br>' );
				tr.append( td );
			}
		}

		table.append( tbody);
		this.container.append( table );
		this.container.css('overflow', 'scroll').css('height', '500px');

		$( document.body ).append( this.container );
	},
	show : function()
	{
		if ( !this.container ) this.create();

		var windowSize = GSI.Utils.getScreenSize();
		var offset = this.image.offset();
		var containerSize = { w:0, h:0 };
		if ( !this.container.is( ':visible' ) )
		{
			this.container.css( { "visibility": "hidden"} );
			this.container.show();
			containerSize.w = this.container.outerWidth(true);
			containerSize.h = this.container.outerHeight(true);
			this.container.hide();
			this.container.css( {"visibility": "visible"} );
		}
		else
		{
			containerSize.w = this.container.outerWidth(true);
			containerSize.h = this.container.outerHeight(true);
		}

		var pos = {
			left:offset.left - Math.floor( containerSize.w / 2 ),
			top:offset.top + this.image.outerHeight(true )
		};

		if ( pos.top + containerSize.h > windowSize.h ) pos.top = windowSize.h - containerSize.h;
		if ( pos.left + containerSize.w > windowSize.w ) pos.left = windowSize.w - containerSize.w;

		this.container.css( {
			left : pos.left + 'px',
			top : pos.top + 'px'
		} );

		this.container.slideDown('fast');

		if ( !this._onScreenMouseDown )
		{
			this._onScreenMouseDown = L.bind( this.onScreenMouseDown, this );
			$( document.body ).on( 'mousedown', this._onScreenMouseDown );
		}
	},
	hide : function()
	{
		if ( this._onScreenMouseDown )
		{
			$( document.body ).off( 'mousedown', this._onScreenMouseDown );
			this._onScreenMouseDown = null;
		}

		if ( !this.container ) return;
		this.container.slideUp('fast');
	},
	onScreenMouseDown : function( event )
	{
		if ( !this.container ) return;
		if ( this.container[0] == event.target ) return;

		var target = $( event.target );
		var parents = target.parents();

		for ( var i=0; i<parents.length; i++ )
		{
			if ( parents[i] == this.container[0] )
			{
				return;
			}
		}

		this.hide();
	}
} );



/************************************************************************
 L.Class
 - GSI.JihokuLine（磁北線）
 ************************************************************************/
GSI.JihokuLine = L.Class.extend( {
	options : {
		visible : false,
		num : 5,
		lineStyle : {
			"color": "#ff0000",
			"weight": 2,
			"opacity": 1,
			"fill" : false,
			"fillOpacity":1,
			"clickable" : false
		},
		labelClassName : 'jihoku_label'
	},
	initialize : function (map,options)
	{
		options = L.setOptions(this, options);
		this._map = map;

		this._refresh = L.bind(this.refresh, this);

		this.setVisible(this.options.visible);
	},
	getVariation : function ()
	{
		//円周率
		var pi = Math.PI;
		var center = this._map.getCenter();
		return GSI.Utils.getVariation(center) * pi / 180;	// 角度をラジアンに変換
	},
	
	drawPath : function(texture)
	{
		if ( !this._lines ) return;
		for( var i=0; i< this._lines.length; i++ )
		{
			this._drawPath( texture, this._lines[i] );
		}
		
		
	},
	
	_updateStyle: function (texture, layer) {
		if ( !layer._parts ) return;
		
		var options = layer.options;
		if (options.stroke) {
			texture.lineWidth = options.weight;
			texture.strokeStyle = options.color;
		}
		if (options.fill) {
			texture.fillStyle = options.fillColor || options.color;
		}
	},
	
	_drawPath: function (texture, layer) {
		if ( !layer._parts ) return;
		
		var i, j, len, len2, point, drawMethod;
		var vp = this._map._pathViewport;
		
		
		var origin = this._map.getPixelOrigin();
		var pixelBounds = this._map.getPixelBounds();
		texture.beginPath();
		
		var parts = layer._parts;
		
		for (i = 0, len = parts.length; i < len; i++) {
			
			for (j = 0, len2 = parts[i].length; j < len2; j++) {
				point = parts[i][j];
				drawMethod = (j === 0 ? 'move' : 'line') + 'To';
				
				texture[drawMethod](point.x + ( origin.x - pixelBounds.min.x ), point.y + ( origin.y - pixelBounds.min.y ));
			}
			// TODO refactor ugly hack
			if (layer instanceof L.Polygon || layer instanceof L.Circle) {
				texture.closePath();
			}
		}
		
		texture.save();
		this._updateStyle(texture, layer);
		
		var opacity = 1;
		//console.log( this.options.opacity );
		if (layer.options.fill) {
			
			texture.globalAlpha = ( layer.options.fillOpacity ?layer.options.fillOpacity : 1 ) * opacity;
			texture.fill();          
		}
		if (layer.options.stroke) {
			texture.globalAlpha = opacity;
			texture.stroke();
		}

		texture.restore();
	},
	
	
	clear : function()
	{
		if (this._layer)
		{
			this._map.removeLayer( this._layer );
			this._layer = null;
		}
		this._lines = null;
		this._label = null;
	},
	refresh : function()
	{
		var center = this._map.getCenter();
		//非表示 or 下記範囲外
		//経度：122度～154度
		//緯度：20度～46度
		if (
			( !this.options.visible )
			||
			!GSI.Utils.isVaridVariation(center)
			)
		{
			this.clear();
			return ;
		}

		// ズームレベルが設定を下回る場合、表示しない
		if (this._map.getZoom() < CONFIG.JIHOKULINEAVAILABLEZOOM ) {
			this.clear();
			return ;
		}

		var mc = GSI.Utils.get2ndMesh(center.lat, center.lng);

		var count = this.options.num;
		//var variation = GSI.Utils.getVariation(center);
		if (!GSI.MeshDeclination[mc])
		{
			this.clear();
			return;
		}
		var variation = GSI.MeshDeclination[mc];
		var idx1 = variation.indexOf(",");
		var nVariation = parseFloat(variation.substring(0, idx1));
		var sVariation = variation.substring(idx1+1);
		
		//円周率
		var pi = Math.PI;
		var center = this._map.getCenter();
		var rad = nVariation * pi / 180;	// 角度をラジアンに変換
		
		// 地図中央の経度
		var centerLng = this._map.getCenter().lng;
		var bounds = this._map.getBounds();

		// 表示されている領域の高さ
		var mapHeight = Math.abs(bounds.getSouth() - bounds.getNorth());
		// 表示されている領域の幅
		var mapWidth = Math.abs(bounds.getEast() - bounds.getWest());

		if ( !this._lines ) this._lines = [];
		var layer = ( this._layer ? this._layer : L.featureGroup() );
		layer._noMeasure = true;

		var lineStyle = this.options.lineStyle;

		for(var i = 0; i < count; i++)
		{
			var latLngArr = null;
			
			if ( Math.tan( rad) >= 0 )
			{
				latLngArr =[ 
					L.latLng(bounds.getNorth(), bounds.getWest() + (mapWidth - mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)) * i / (count - 1) ), 
					L.latLng(bounds.getSouth(), bounds.getWest()  + (mapWidth - mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)) * i / (count - 1) + mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)) 
				]; 
			} else {
				latLngArr =[ 
					L.latLng(bounds.getNorth(), bounds.getWest() + (mapWidth - mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)) * i / (count - 1) + mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)), L.latLng(bounds.getSouth(), 
					bounds.getWest() + (mapWidth - mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)) * i / (count - 1)) 
				];
			}

			if ( this._lines.length -1 < i )
			{
				var line = L.polyline(latLngArr,lineStyle );
				line._noMeasure = true;
				layer.addLayer( line );

				this._lines.push( line );
			}
			else
			{
				this._lines[i].setLatLngs(latLngArr);
			}
		}

		var KKK_NUM = sVariation;
		
		if (!this._label) {

			// ラベル表示
			var label = new L.Label({
				zoomAnimation : true,
				noHide : true,
				offset: [0, -34],
				className: this.options.labelClassName,
				clickable : false
			});

			label.setContent('<div unselectable="on">' + KKK_NUM + '</div>');
			label.setLatLng(this._map.getCenter());
			this._label = label;
			layer.addLayer(label);
		}
		else {
			
			this._label.setContent('<div unselectable="on">' + KKK_NUM + '</div>');
			this._label.setLatLng(this._map.getCenter());
		
		}

		if ( !this._layer )
		{
			this._layer = layer;
			this._map.addLayer( this._layer );
		}
		if ( this._layer  ) this._layer.bringToBack();
	},
	setVisible : function( on )
	{
		this.options.visible = on;
		if ( this.options.visible )
		{
			this._map.on('move', this._refresh );
		}
		else
		{
			this._map.off('move', this._refresh );
		}
		this.refresh();
	},
	getVisible : function()
	{
		return this.options.visible;
	}
} );


/************************************************************************
 L.Class
 - GSI.TileGrid（タイル座標）
 ************************************************************************/
GSI.TileGridLayer = L.TileLayer.Canvas.extend( {
	
	_initContainer: function ()
	{
		var tilePane = this._map._panes.overlayPane;
		
		if (!this._container) {
			this._container = L.DomUtil.create('div', 'leaflet-layer');

			this._updateZIndex();

			if (this._animated) {
				var className = 'leaflet-tile-container';
				this._bgBuffer = L.DomUtil.create('div', className, this._container);
				this._tileContainer = L.DomUtil.create('div', className, this._container);

			} else {
				this._tileContainer = this._container;
			}
			
			tilePane.insertBefore(this._container,tilePane.firstChild);
			//tilePane.appendChild(this._container);

		}
	},
	
	drawTo : function(texture)
	{
		var ctx = texture;
		var zoom = this._map.getZoom();
		
		var origin = this._map.getPixelOrigin();
		var pixelBounds = this._map.getPixelBounds();
		
		for( var key in this._tiles )
		{
			var tile = this._tiles[key];
			
			var pos = $(tile).position();
			pos.left += ( origin.x - pixelBounds.min.x );
			pos.top += ( origin.y - pixelBounds.min.y );
			
			ctx.globalAlpha =1.0;
			ctx.fillStyle = '#FF0000';
			ctx.strokeStyle = '#FF0000';
			ctx.strokeRect(
				pos.left,
				pos.top, 255, 255);
			
			
			ctx.textAlign = 'center';
			ctx.font = 'bold 24px sans-serif';
			//ctx.fillStyle = '#98514B';
			ctx.fillStyle = '#FF0000';
			ctx.strokeStyle = '#fff';
			
			ctx.lineWidth = 5;
			ctx.strokeText(zoom + '/' + tile._tilePoint.x + '/' + tile._tilePoint.y,
				 pos.left+128, pos.top+128);
			ctx.globalAlpha = 1.0;
			ctx.fillText(zoom + '/' + tile._tilePoint.x + '/' + tile._tilePoint.y,
				 pos.left+128, pos.top+128);
		}
	},
	
	drawTile : function(canvas, tilePoint, zoom) {
		var ctx = canvas.getContext('2d');
		ctx.globalAlpha = 1.0;
		ctx.fillStyle = '#FF0000';
		ctx.strokeStyle = '#FF0000';
		//ctx.fillStyle = '#FF0000';
		//ctx.strokeStyle = '#FF0000';
		ctx.strokeRect(0, 0, 255, 255);
		ctx.textAlign = 'center';
		ctx.font = 'bold 24px sans-serif';
		//ctx.fillStyle = '#98514B';
		ctx.fillStyle = '#FF0000';
		ctx.strokeStyle = '#fff';
		ctx.lineWidth = 5;
		ctx.strokeText(zoom + '/' + tilePoint.x + '/' + tilePoint.y, 128, 128);
		ctx.globalAlpha = 1.0;
		ctx.fillText(zoom + '/' + tilePoint.x + '/' + tilePoint.y, 128, 128);
	}
} );

GSI.TileGrid = L.Class.extend( {
	options : {
		lineStyle : {
			color : "#1D417A",
			weight : 2,
			opacity: 1,
			fillOpacity:1,
			dashArray : [3,3]
		},
		labelClassName : 'latlnggrid_label'
	},
	visible : false,
	initialize: function(map, options) {
		this._layer = null;
		this._map = map;

		options = L.setOptions(this, options);

		options.lineStyle.clickable = false;

		this._visible = options.visible;
		this.setVisible(this._visible);
	},
	
	drawPath : function(texture)
	{
		if ( this._layer ) this._layer.drawTo (texture);
		
		
	},
	
	
	
	setVisible : function( on )
	{
		this._visible = on;
		if ( this._layer )
			this._map.removeLayer(this._layer);
		if ( this._visible )
		{
			this._layer = new GSI.TileGridLayer({minZoom:2, maxZoom:18});
			this._map.addLayer(this._layer);
		}
	},
	getVisible : function()
	{
		return this._visible;
	}
});

/************************************************************************
 L.Class
 - GSI.T25000Grid（2万5千分の1）
 ************************************************************************/
GSI.T25000Grid = L.Class.extend( {
	options : {
		lineStyle : {
			color : "#1D417A",
			weight : 2,
			opacity: 1,
			fillOpacity:1,
			dashArray : [3,3]
		},
		labelClassName : 'latlnggrid_label'
	},
	visible : false,
	initialize: function(map, options) {
		this._layer = null;
		this._map = map;
		this._style = null;

		options = L.setOptions(this, options);

		options.lineStyle.clickable = false;

		this._visible = options.visible;
		this.setVisible(this._visible);
		
		
	},
	setVisible : function( on )
	{
		this._visible = on;
		
		

		if ( this._layer )
			this._map.removeLayer(this._layer);
		if ( this._visible )
		{
			/*
			var style = {
				options:
				{
				  attribution: '図郭',minZoom: 10,maxNativeZoom: 8, maxZoom: 18
				},
				geojsonOptions:
				{
						 pointToLayer: function(feature, latlng) {
						   var idstyle = "\""
							   +"font-size: 16px;"
							   +"color:#f00;"
							   +"white-space: nowrap;"
							   +"\"";
						   var idAnchor = feature.properties['図名'].length /2 * 16;
						   var myIcon= L.divIcon({
										   iconAnchor: [idAnchor,10],
										   className: "gsi-div-icon", 
										   html: "<div style="+idstyle+">"+feature.properties['図名']+"</div>"});
						   var s = '<div class="popup">';
						   for(var k in feature.properties) {
							 if(k == "図郭座標"){continue;}
							 var v = feature.properties[k];
							 s += k + ': ' + v + '<br>';
						   }
						   s += '</div>';
						   var zdiv = L.marker(latlng, {icon: myIcon}).bindPopup(s);
						   var zkaklb = [[feature.properties['図郭座標'][0][1],feature.properties['図郭座標'][0][0]],[feature.properties['図郭座標'][1][1],feature.properties['図郭座標'][1][0]]];
						   var zkak = L.rectangle(zkaklb, {color: '#f00', weight: 1, opacity: 1,'fillColor': '#f00', 'fillOpacity': 0});
						   return L.featureGroup([zdiv,zkak]);
						 }
				}
			};
			*/
			if ( !this._style )
			{
				$.ajax( {
					type: "GET",
					url: "https://cyberjapandata.gsi.go.jp/xyz/zk25000/style.js",
					dataType: "text",
					cache:false,
					success : L.bind(this._onStyleLoad, this),
					error : L.bind(this._onStyleLoadError, this)
				} );
			}
			else
			{
				this._layer = new GSI.VectorTileLayer(
					'https://cyberjapandata.gsi.go.jp/xyz/zk25000/{z}/{x}/{y}.geojson',
					this._style.options,this._style.geojsonOptions, true);
				
				this._map.addLayer(this._layer);
			}
		}
	},
	getVisible : function()
	{
		return this._visible;
	},
	
	_onStyleLoad : function( text )
	{
		try
		{
			this._style= eval( "(" + text + ")" );
			this._style.options.skipLoadStyle = true;
			//this._style.options.styletype = "canvas";
		}
		catch( e)
		{
			this._onStyleLoadError();
			return
